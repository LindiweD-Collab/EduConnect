import redis from "./redis"

export async function testRedisConnection(): Promise<{ success: boolean; message: string }> {
  try {
    const testKey = "connection-test"
    const testValue = `Connection test at ${new Date().toISOString()}`

    // Try to set a value
    await redis.set(testKey, testValue, { ex: 60 }) // Expires in 60 seconds

    // Try to get the value back
    const retrievedValue = await redis.get<string>(testKey)

    if (retrievedValue === testValue) {
      return {
        success: true,
        message: "Successfully connected to Redis and verified data integrity",
      }
    } else {
      return {
        success: false,
        message: `Data integrity check failed. Expected "${testValue}" but got "${retrievedValue}"`,
      }
    }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}
