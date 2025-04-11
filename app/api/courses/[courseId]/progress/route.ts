import { type NextRequest, NextResponse } from "next/server"
import { getSession } from "@/lib/session"
import { updateCourseProgress } from "@/lib/course-progress"
import { getUserCourseProgress } from "@/lib/course-progress"

export async function POST(request: NextRequest, { params }: { params: { courseId: string } }) {
  const session = await getSession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { lessonId, completed } = await request.json()

    if (!lessonId) {
      return NextResponse.json({ error: "Lesson ID is required" }, { status: 400 })
    }

    const progress = await updateCourseProgress(session.id, params.courseId, lessonId, completed)

    return NextResponse.json({ progress })
  } catch (error) {
    console.error("Error updating course progress:", error)
    return NextResponse.json({ error: "Failed to update progress" }, { status: 500 })
  }
}

export async function GET(_request: NextRequest, { params }: { params: { courseId: string } }) {
  const session = await getSession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const progress = await getUserCourseProgress(session.id, params.courseId)

    if (!progress) {
      return NextResponse.json({ progress: null })
    }

    return NextResponse.json({ progress })
  } catch (error) {
    console.error("Error getting course progress:", error)
    return NextResponse.json({ error: "Failed to get progress" }, { status: 500 })
  }
}
