import redis from "./redis"

// Maximum number of recent views to store per user
const MAX_RECENT_VIEWS = 10

// Add a course to the user's recently viewed list
export async function addRecentlyViewedCourse(userId: string, courseId: string): Promise<void> {
  const key = `user:${userId}:recent-views`
  const now = Date.now()

  // Add or update this course in the sorted set with current timestamp
  await redis.zadd(key, now, courseId)

  // Trim the list to keep only the most recent views
  const count = await redis.zcard(key)

  if (count > MAX_RECENT_VIEWS) {
    // Remove the oldest entries
    await redis.zremrangebyrank(key, 0, count - MAX_RECENT_VIEWS - 1)
  }
}

// Get the user's recently viewed courses
export async function getRecentlyViewedCourses(userId: string, limit = MAX_RECENT_VIEWS): Promise<string[]> {
  const key = `user:${userId}:recent-views`

  // Get the most recent courses (highest scores first)
  const courses = await redis.zrevrange(key, 0, limit - 1)

  return courses
}
