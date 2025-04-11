"use server"

import { incrementCourseViews } from "@/lib/analytics"
import { addRecentlyViewedCourse } from "@/lib/recent-views"
import { getSession } from "@/lib/session"

export async function trackCourseView(courseId: string) {
  try {
    // Increment the global view count
    await incrementCourseViews(courseId)

    // Get the current user session
    const session = await getSession()

    // If user is logged in, track as recently viewed
    if (session) {
      await addRecentlyViewedCourse(session.id, courseId)
    }

    return { success: true }
  } catch (error) {
    console.error("Error tracking course view:", error)
    return { success: false, error: "Failed to track view" }
  }
}
