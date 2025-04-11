import { trackCourseView } from "@/app/actions/analytics"
import { getCourseViews } from "@/lib/analytics"

// This is a simplified version - you would have more content in your actual page
export default async function CoursePage({ params }: { params: { courseId: string } }) {
  // Track the view
  await trackCourseView(params.courseId)

  // Get the current view count
  const viewCount = await getCourseViews(params.courseId)

  return (
    <div>
      <h1>Course: {formatCourseId(params.courseId)}</h1>
      <p>This course has been viewed {viewCount} times</p>

      {/* Rest of your course content */}
    </div>
  )
}

// Helper function to format course IDs for display
function formatCourseId(courseId: string): string {
  // Convert kebab-case to Title Case
  return courseId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
