"use client"

import { useEffect, useState } from "react"

type SyncItem = {
  id: string
  action: string
  data: any
  timestamp: number
}

export function useOfflineSync() {
  const [isOnline, setIsOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true)
  const [isSyncing, setIsSyncing] = useState(false)
  const [pendingItems, setPendingItems] = useState<SyncItem[]>([])

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  // Load pending items from localStorage
  useEffect(() => {
    const storedItems = localStorage.getItem("offline_sync_queue")

    if (storedItems) {
      try {
        setPendingItems(JSON.parse(storedItems))
      } catch (error) {
        console.error("Error parsing stored sync items:", error)
        localStorage.removeItem("offline_sync_queue")
      }
    }
  }, [])

  // Save pending items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("offline_sync_queue", JSON.stringify(pendingItems))
  }, [pendingItems])

  // Sync pending items when online
  useEffect(() => {
    if (isOnline && pendingItems.length > 0 && !isSyncing) {
      syncPendingItems()
    }
  }, [isOnline, pendingItems, isSyncing])

  // Add an item to the sync queue
  const addToQueue = (action: string, data: any) => {
    const newItem: SyncItem = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      action,
      data,
      timestamp: Date.now(),
    }

    setPendingItems((prev) => [...prev, newItem])

    // If online, try to sync immediately
    if (isOnline && !isSyncing) {
      syncPendingItems()
    }

    return newItem.id
  }

  // Sync pending items with the server
  const syncPendingItems = async () => {
    if (pendingItems.length === 0 || isSyncing) {
      return
    }

    setIsSyncing(true)

    try {
      // Process items one by one
      const itemsToProcess = [...pendingItems]
      const successfulItems: string[] = []

      for (const item of itemsToProcess) {
        try {
          const response = await fetch("/api/sync", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              action: item.action,
              data: item.data,
            }),
          })

          if (response.ok) {
            successfulItems.push(item.id)
          }
        } catch (error) {
          console.error(`Error syncing item ${item.id}:`, error)
        }
      }

      // Remove successful items from the queue
      if (successfulItems.length > 0) {
        setPendingItems((prev) => prev.filter((item) => !successfulItems.includes(item.id)))
      }
    } finally {
      setIsSyncing(false)
    }
  }

  // Force sync pending items
  const forceSync = () => {
    if (isOnline && pendingItems.length > 0 && !isSyncing) {
      syncPendingItems()
    }
  }

  return {
    isOnline,
    isSyncing,
    pendingItems,
    addToQueue,
    forceSync,
  }
}
