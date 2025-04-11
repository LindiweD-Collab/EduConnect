import redis from "./redis"

type SyncItem = {
  id: string
  userId: string
  action: string
  data: any
  timestamp: number
  status: "pending" | "processing" | "completed" | "failed"
  retryCount: number
}

export async function addToSyncQueue(userId: string, action: string, data: any): Promise<string> {
  const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`

  const syncItem: SyncItem = {
    id,
    userId,
    action,
    data,
    timestamp: Date.now(),
    status: "pending",
    retryCount: 0,
  }

  // Add to user's sync queue
  await redis.lpush(`user:${userId}:sync-queue`, JSON.stringify(syncItem))

  // Also add to global processing queue
  await redis.lpush("global:sync-queue", JSON.stringify(syncItem))

  return id
}

export async function getUserSyncQueue(userId: string): Promise<SyncItem[]> {
  const items = await redis.lrange(`user:${userId}:sync-queue`, 0, -1)

  return items.map((item) => JSON.parse(item) as SyncItem)
}

export async function updateSyncItemStatus(
  userId: string,
  itemId: string,
  status: SyncItem["status"],
): Promise<boolean> {
  const items = await getUserSyncQueue(userId)
  const itemIndex = items.findIndex((item) => item.id === itemId)

  if (itemIndex === -1) {
    return false
  }

  const updatedItem: SyncItem = {
    ...items[itemIndex],
    status,
    timestamp: Date.now(),
  }

  // Update the item in the list
  await redis.lset(`user:${userId}:sync-queue`, itemIndex, JSON.stringify(updatedItem))

  return true
}

export async function removeSyncItem(userId: string, itemId: string): Promise<boolean> {
  const items = await getUserSyncQueue(userId)
  const filteredItems = items.filter((item) => item.id !== itemId)

  if (filteredItems.length === items.length) {
    return false
  }

  // Replace the entire list
  await redis.del(`user:${userId}:sync-queue`)

  if (filteredItems.length > 0) {
    await redis.lpush(`user:${userId}:sync-queue`, ...filteredItems.map((item) => JSON.stringify(item)))
  }

  return true
}
