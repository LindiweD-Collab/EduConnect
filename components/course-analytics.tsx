import { getTopViewedCourses } from "@/lib/analytics"

export async function CourseAnalytics() {
  const topCourses = await getTopViewedCourses(5)

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Most Viewed Courses</h3>

      {topCourses.length === 0 ? (
        <p className="text-sm text-muted-foreground">No course views recorded yet.</p>
      ) : (
        <div className="space-y-2">
          {topCourses.map((course) => (
            <div key={course.courseId} className="flex items-center justify-between">
              <span className="text-sm font-medium">{formatCourseId(course.courseId)}</span>
              <span className="text-sm text-muted-foreground">{course.views} views</span>
            </div>
          ))}
        </div>
      )}
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
