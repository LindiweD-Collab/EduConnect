"use server"

import { createSession } from "@/lib/session"
import { redirect } from "next/navigation"

// In a real app, you would validate credentials against a database
// This is a simplified example for demonstration purposes
export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Simple validation
  if (!email || !password) {
    return {
      error: "Email and password are required",
    }
  }

  // Mock authentication - in a real app, you would check against a database
  // and hash passwords properly
  if (email === "student@example.com" && password === "password") {
    // Create a session for the user
    await createSession({
      name: "Alex Johnson",
      email,
      role: "student",
    })

    redirect("/student/dashboard")
  } else if (email === "teacher@example.com" && password === "password") {
    await createSession({
      name: "Emily Chen",
      email,
      role: "teacher",
    })

    redirect("/teacher/dashboard")
  } else if (email === "admin@example.com" && password === "password") {
    await createSession({
      name: "Admin User",
      email,
      role: "admin",
    })

    redirect("/admin/dashboard")
  }

  return {
    error: "Invalid email or password",
  }
}
