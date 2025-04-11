import Link from "next/link"
import { Clock } from "lucide-react"
import { getSession } from "@/lib/session"
import { getRecentlyViewedCourses } from "@/lib/recent-views"

export async function RecentlyViewedCourses() {
  const session = await getSession()

  if (!session) {
    return null
  }

  const recentCourses = await getRecentlyViewedCourses(session.id, 5)

  if (recentCourses.length === 0) {
    return null
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-muted-foreground" />
        <h3 className="text-sm font-medium">Recently Viewed</h3>
      </div>

      <ul className="space-y-1">
        {recentCourses.map((courseId) => (
          <li key={courseId}>
            <Link href={`/student/courses/${courseId}`} className="text-sm text-primary hover:underline">
              {formatCourseId(courseId)}
            </Link>
          </li>
        ))}
      </ul>
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
