"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  FileText,
  GraduationCap,
  Grid3X3,
  LayoutDashboard,
  LogOut,
  Mail,
  MenuIcon,
  MonitorSmartphone,
  Settings,
  ShieldAlert,
  Users,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useMobile } from "@/hooks/use-mobile"

type SidebarProps = {
  userRole: "admin" | "teacher" | "student"
  userName: string
}

export default function MainSidebar({ userRole, userName }: SidebarProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [open, setOpen] = useState(false)

  const isAdmin = userRole === "admin"
  const isTeacher = userRole === "teacher" || isAdmin
  const isActive = (path: string) => pathname === path

  const adminLinks = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Courses",
      href: "/admin/courses",
      icon: BookOpen,
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      name: "Tech Assets",
      href: "/admin/assets",
      icon: MonitorSmartphone,
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  const teacherLinks = [
    {
      name: "Dashboard",
      href: "/teacher/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "My Courses",
      href: "/teacher/courses",
      icon: BookOpen,
    },
    {
      name: "Students",
      href: "/teacher/students",
      icon: Users,
    },
    {
      name: "Assessments",
      href: "/teacher/assessments",
      icon: Grid3X3,
    },
    {
      name: "Messages",
      href: "/teacher/messages",
      icon: Mail,
      badge: 3,
    },
    {
      name: "Tech Support",
      href: "/teacher/tech-support",
      icon: ShieldAlert,
    },
  ]

  const studentLinks = [
    {
      name: "Dashboard",
      href: "/student/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "My Courses",
      href: "/student/courses",
      icon: BookOpen,
    },
    {
      name: "Assignments",
      href: "/student/assignments",
      icon: FileText,
      badge: 2,
    },
    {
      name: "Messages",
      href: "/student/messages",
      icon: Mail,
    },
    {
      name: "Tech Support",
      href: "/student/tech-support",
      icon: ShieldAlert,
    },
  ]

  const links = isAdmin ? adminLinks : isTeacher ? teacherLinks : studentLinks

  const toggleMenu = () => {
    setOpen(!open)
  }

  // Get initials from user name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  const userInitials = getInitials(userName)

  const sidebarContent = (
    <>
      <div className="flex items-center h-16 px-4">
        <Link href={`/${userRole}/dashboard`} className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">EduConnect</span>
        </Link>
      </div>

      <Separator />

      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                isActive(link.href)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <link.icon className="h-5 w-5" />
              <span>{link.name}</span>
              {link.badge && (
                <Badge className="ml-auto h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  {link.badge}
                </Badge>
              )}
            </Link>
          ))}
        </nav>
      </div>

      <Separator />

      <div className="p-4">
        <div className="flex items-center gap-3 rounded-md p-2">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-primary-foreground">{userInitials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{userName}</span>
            <span className="text-xs text-muted-foreground capitalize">{userRole}</span>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto" asChild>
            <Link href="/logout">
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Log out</span>
            </Link>
          </Button>
        </div>
      </div>
    </>
  )

  return (
    <>
      {isMobile ? (
        <>
          <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50" onClick={toggleMenu}>
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>

          {open && <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" onClick={toggleMenu} />}

          <div
            className={cn(
              "fixed inset-y-0 left-0 z-50 w-64 bg-background shadow-lg transform transition-transform duration-200 ease-in-out",
              open ? "translate-x-0" : "-translate-x-full",
            )}
          >
            <div className="flex h-16 items-center justify-between px-4">
              <Link href={`/${userRole}/dashboard`} className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">EduConnect</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <div className="flex flex-col h-[calc(100%-4rem)]">{sidebarContent}</div>
          </div>
        </>
      ) : (
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border-r">
          <div className="flex flex-col flex-1">{sidebarContent}</div>
        </div>
      )}
    </>
  )
}
