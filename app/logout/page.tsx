"use client"

import { useState } from "react"
import Link from "next/link"
import { GraduationCap, LogOut } from "lucide-react"
import { logoutAction } from "./actions"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function LogoutPage() {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [progress, setProgress] = useState(0)

  // Handle the logout process
  const handleLogout = async () => {
    setIsLoggingOut(true)

    // Start progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval)
          return 90
        }
        return prev + 10
      })
    }, 100)

    try {
      // Call the server action to handle the actual logout
      await logoutAction()

      // Complete the progress
      setProgress(100)
      clearInterval(interval)
    } catch (error) {
      console.error("Logout failed:", error)
      clearInterval(interval)
      setProgress(0)
      setIsLoggingOut(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-muted/40">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent" />

      <Link href="/" className="flex items-center gap-2 mb-8">
        <GraduationCap className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold">EduConnect</h1>
      </Link>

      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <LogOut className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Log Out</CardTitle>
          <CardDescription>Are you sure you want to log out of your account?</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoggingOut && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-center text-sm text-muted-foreground">Logging out...</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="flex gap-4 w-full">
            <Button variant="outline" className="flex-1" asChild disabled={isLoggingOut}>
              <Link href="/student/dashboard">Cancel</Link>
            </Button>
            <Button className="flex-1" onClick={handleLogout} disabled={isLoggingOut}>
              {isLoggingOut ? "Logging out..." : "Log out"}
            </Button>
          </div>
          <div className="text-center text-xs text-muted-foreground">
            You will be redirected to the login page after logging out.
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
