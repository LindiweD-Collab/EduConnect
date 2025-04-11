import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("educonnect_session")

  // Check if the user is trying to access a protected route
  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/student") ||
    request.nextUrl.pathname.startsWith("/teacher") ||
    request.nextUrl.pathname.startsWith("/admin")

  // Check if the user is trying to access auth routes while logged in
  const isAuthRoute = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup"

  // If trying to access a protected route without a session, redirect to login
  if (isProtectedRoute && !sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // If trying to access auth routes with a session, redirect to dashboard
  if (isAuthRoute && sessionCookie) {
    // In a real app, you would check the user role in the session
    // and redirect to the appropriate dashboard
    return NextResponse.redirect(new URL("/student/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/student/:path*", "/teacher/:path*", "/admin/:path*", "/login", "/signup", "/logout"],
}
