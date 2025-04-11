import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SessionProvider } from "@/components/session-provider"
import { getSession } from "@/lib/session"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EduConnect - E-Learning Platform",
  description: "Comprehensive e-learning platform with offline capabilities",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  // Extract user data from session, excluding the session ID
  const initialUser = session
    ? {
        id: session.id,
        name: session.name,
        email: session.email,
        role: session.role,
      }
    : null

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SessionProvider initialUser={initialUser}>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
