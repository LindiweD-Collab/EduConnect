import { NextResponse } from "next/server"
import { testRedisConnection } from "@/lib/redis-utils"

export async function GET() {
  const result = await testRedisConnection()

  if (result.success) {
    return NextResponse.json({
      success: true,
      message: result.message,
    })
  } else {
    return NextResponse.json(
      {
        success: false,
        message: result.message,
      },
      { status: 500 },
    )
  }
}
