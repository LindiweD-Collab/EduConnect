"use client"

import { useEffect, useState } from "react"
import { useSession } from "@/components/session-provider"

export function OnlineUsersIndicator() {
  const { user } = useSession()
  const [onlineCount, setOnlineCount] = useState<number>(0)

  useEffect(() => {
    if (!user) return

    // Function to update user's online status
    const updateOnlineStatus = async () => {
      try {
        const response = await fetch("/api/users/online", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (response.ok) {
          const data = await response.json()
          setOnlineCount(data.onlineCount)
        }
      } catch (error) {
        console.error("Error updating online status:", error)
      }
    }

    // Update immediately
    updateOnlineStatus()

    // Then update every minute
    const interval = setInterval(updateOnlineStatus, 60000)

    // Clean up on unmount
    return () => clearInterval(interval)
  }, [user])

  if (onlineCount === 0) return null

  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-green-500" />
      <span className="text-xs text-muted-foreground">
        {onlineCount} {onlineCount === 1 ? "user" : "users"} online
      </span>
    </div>
  )
}
