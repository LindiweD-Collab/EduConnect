import { NextResponse } from "next/server"
import { getSession } from "@/lib/session"

export async function GET() {
  const session = await getSession()

  if (!session) {
    return NextResponse.json({ user: null })
  }

  // Don't expose the session ID in the response
  const { id, ...user } = session

  return NextResponse.json({ user })
}
