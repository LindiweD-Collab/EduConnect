import redis from "./redis"

type CourseProgress = {
  userId: string
  courseId: string
  completedLessons: string[]
  lastAccessed: number
  overallProgress: number
}

export async function getUserCourseProgress(userId: string, courseId: string): Promise<CourseProgress | null> {
  const progress = await redis.get<string>(`user:${userId}:course:${courseId}:progress`)

  if (!progress) {
    return null
  }

  return JSON.parse(progress) as CourseProgress
}

export async function getAllUserCourseProgress(userId: string): Promise<CourseProgress[]> {
  // Get all keys matching the pattern
  const keys = await redis.keys(`user:${userId}:course:*:progress`)

  if (keys.length === 0) {
    return []
  }

  // Get all progress data in a single batch operation
  const progressData = await redis.mget<string[]>(...keys)

  return progressData.filter(Boolean).map((data) => JSON.parse(data as string) as CourseProgress)
}

export async function updateCourseProgress(
  userId: string,
  courseId: string,
  lessonId: string,
  completed: boolean,
): Promise<CourseProgress> {
  // Get current progress
  const currentProgress = (await getUserCourseProgress(userId, courseId)) || {
    userId,
    courseId,
    completedLessons: [],
    lastAccessed: Date.now(),
    overallProgress: 0,
  }

  // Update completed lessons
  let completedLessons = [...currentProgress.completedLessons]

  if (completed && !completedLessons.includes(lessonId)) {
    completedLessons.push(lessonId)
  } else if (!completed && completedLessons.includes(lessonId)) {
    completedLessons = completedLessons.filter((id) => id !== lessonId)
  }

  // Get total lessons for this course (in a real app, this would come from a database)
  // For this example, we'll use a mock function
  const totalLessons = await getTotalLessonsForCourse(courseId)

  // Calculate overall progress
  const overallProgress = Math.round((completedLessons.length / totalLessons) * 100)

  const updatedProgress: CourseProgress = {
    ...currentProgress,
    completedLessons,
    lastAccessed: Date.now(),
    overallProgress,
  }

  // Save updated progress
  await redis.set(
    `user:${userId}:course:${courseId}:progress`,
    JSON.stringify(updatedProgress),
    { ex: 60 * 60 * 24 * 30 }, // 30 days expiry
  )

  return updatedProgress
}

// Mock function to get total lessons for a course
// In a real app, this would fetch data from a database
async function getTotalLessonsForCourse(courseId: string): Promise<number> {
  const courseLessons: Record<string, number> = {
    "biology-101": 20,
    mathematics: 25,
    "world-history": 18,
    chemistry: 22,
    "computer-science": 30,
    literature: 15,
  }

  return courseLessons[courseId] || 10
}
