import { NextResponse } from "next/server"
import { getSession } from "@/lib/session"
import redis from "@/lib/redis"

const ONLINE_USERS_KEY = "online-users"
const ONLINE_TIMEOUT = 120 // 2 minutes in seconds

export async function POST() {
  const session = await getSession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const now = Math.floor(Date.now() / 1000)

    // Add or update this user's timestamp
    await redis.zadd(ONLINE_USERS_KEY, now, session.id)

    // Remove users who haven't been active in the last 2 minutes
    const cutoff = now - ONLINE_TIMEOUT
    await redis.zremrangebyscore(ONLINE_USERS_KEY, 0, cutoff)

    // Count online users
    const onlineCount = await redis.zcard(ONLINE_USERS_KEY)

    return NextResponse.json({ success: true, onlineCount })
  } catch (error) {
    console.error("Error updating online status:", error)
    return NextResponse.json({ error: "Failed to update online status" }, { status: 500 })
  }
}
