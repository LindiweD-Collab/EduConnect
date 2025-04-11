"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  id: string
  name: string
  email: string
  role: "admin" | "teacher" | "student"
}

type SessionContextType = {
  user: User | null
  isLoading: boolean
  setUser: (user: User | null) => void
}

const SessionContext = createContext<SessionContextType>({
  user: null,
  isLoading: true,
  setUser: () => {},
})

export function SessionProvider({ children, initialUser = null }: { children: ReactNode; initialUser?: User | null }) {
  const [user, setUser] = useState<User | null>(initialUser)
  const [isLoading, setIsLoading] = useState(!initialUser)

  useEffect(() => {
    if (!initialUser) {
      // Fetch user session data if not provided
      fetch("/api/auth/session")
        .then((res) => res.json())
        .then((data) => {
          setUser(data.user || null)
          setIsLoading(false)
        })
        .catch(() => {
          setUser(null)
          setIsLoading(false)
        })
    }
  }, [initialUser])

  return <SessionContext.Provider value={{ user, isLoading, setUser }}>{children}</SessionContext.Provider>
}

export const useSession = () => useContext(SessionContext)
