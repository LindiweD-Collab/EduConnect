import redis from "./redis"

// Increment view count for a course
export async function incrementCourseViews(courseId: string): Promise<number> {
  const key = `analytics:course:${courseId}:views`

  // Increment the view count
  const newCount = await redis.incr(key)

  return newCount
}

// Get view count for a course
export async function getCourseViews(courseId: string): Promise<number> {
  const key = `analytics:course:${courseId}:views`

  // Get the view count
  const count = await redis.get<string>(key)

  return count ? Number.parseInt(count, 10) : 0
}

// Get top viewed courses
export async function getTopViewedCourses(limit = 5): Promise<{ courseId: string; views: number }[]> {
  // Get all keys matching the pattern
  const keys = await redis.keys("analytics:course:*:views")

  if (keys.length === 0) {
    return []
  }

  // Get all view counts in a single batch operation
  const viewCounts = await redis.mget<string[]>(...keys)

  // Map keys and counts to objects
  const courses = keys.map((key, index) => {
    const courseId = key.split(":")[2] // Extract courseId from the key
    const views = viewCounts[index] ? Number.parseInt(viewCounts[index] as string, 10) : 0

    return { courseId, views }
  })

  // Sort by views (descending) and limit the results
  return courses.sort((a, b) => b.views - a.views).slice(0, limit)
}
