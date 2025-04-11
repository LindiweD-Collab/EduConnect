import { type NextRequest, NextResponse } from "next/server"
import { getSession } from "@/lib/session"
import { addToSyncQueue, getUserSyncQueue, removeSyncItem } from "@/lib/sync-queue"

export async function POST(request: NextRequest) {
  const session = await getSession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { action, data } = await request.json()

    if (!action) {
      return NextResponse.json({ error: "Action is required" }, { status: 400 })
    }

    const syncId = await addToSyncQueue(session.id, action, data)

    return NextResponse.json({ syncId })
  } catch (error) {
    console.error("Error adding to sync queue:", error)
    return NextResponse.json({ error: "Failed to sync data" }, { status: 500 })
  }
}

export async function GET() {
  const session = await getSession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const queue = await getUserSyncQueue(session.id)

    return NextResponse.json({ queue })
  } catch (error) {
    console.error("Error getting sync queue:", error)
    return NextResponse.json({ error: "Failed to get sync queue" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  const session = await getSession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { syncId } = await request.json()

    if (!syncId) {
      return NextResponse.json({ error: "Sync ID is required" }, { status: 400 })
    }

    const removed = await removeSyncItem(session.id, syncId)

    if (!removed) {
      return NextResponse.json({ error: "Sync item not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error removing sync item:", error)
    return NextResponse.json({ error: "Failed to remove sync item" }, { status: 500 })
  }
}
