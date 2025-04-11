import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"
import redis from "./redis"

const SESSION_COOKIE_NAME = "educonnect_session"
const SESSION_EXPIRY = 60 * 60 * 24 * 7 // 1 week in seconds

export type UserSession = {
  id: string
  name: string
  email: string
  role: "admin" | "teacher" | "student"
  lastActive: number
}

export async function createSession(userData: Omit<UserSession, "id" | "lastActive">): Promise<string> {
  const sessionId = uuidv4()
  const session: UserSession = {
    ...userData,
    id: sessionId,
    lastActive: Date.now(),
  }

  // Store session in Redis with expiry
  await redis.set(`session:${sessionId}`, JSON.stringify(session), { ex: SESSION_EXPIRY })

  // Set session cookie
  cookies().set({
    name: SESSION_COOKIE_NAME,
    value: sessionId,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_EXPIRY,
  })

  return sessionId
}

export async function getSession(): Promise<UserSession | null> {
  const sessionId = cookies().get(SESSION_COOKIE_NAME)?.value

  if (!sessionId) {
    return null
  }

  const sessionData = await redis.get<string>(`session:${sessionId}`)

  if (!sessionData) {
    return null
  }

  const session = JSON.parse(sessionData) as UserSession

  // Update last active timestamp
  await redis.set(
    `session:${sessionId}`,
    JSON.stringify({
      ...session,
      lastActive: Date.now(),
    }),
    { ex: SESSION_EXPIRY },
  )

  return session
}

export async function deleteSession(): Promise<void> {
  const sessionId = cookies().get(SESSION_COOKIE_NAME)?.value

  if (sessionId) {
    // Delete session from Redis
    await redis.del(`session:${sessionId}`)

    // Delete session cookie
    cookies().delete(SESSION_COOKIE_NAME)
  }
}
