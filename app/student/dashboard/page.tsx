import Link from "next/link"
import {
  Activity,
  Award,
  Bell,
  BookOpen,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Layers,
  Play,
  Settings,
  UserCog,
  Video,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import MainSidebar from "@/components/main-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { OnlineUsersIndicator } from "@/components/online-users"
import { getSession } from "@/lib/session"
import { getCourseViews } from "@/lib/analytics"
// Import the RecentlyViewedCourses component
import { RecentlyViewedCourses } from "@/components/recently-viewed-courses"

export default async function StudentDashboard() {
  const session = await getSession()

  // Get view count for Biology 101 course
  const biologyViews = await getCourseViews("biology-101")

  return (
    <div className="flex min-h-screen bg-background">
      <MainSidebar userRole="student" userName={session?.name || "Student"} />

      <div className="flex-1 md:ml-64">
        <header className="flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <div className="flex flex-1 items-center gap-4">
            <h2 className="text-lg font-semibold">Student Dashboard</h2>
            <OnlineUsersIndicator />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="relative h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8 overflow-hidden">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {session?.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("") || "S"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/student/profile">
                    <UserCog className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/student/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/logout">
                    <span>Sign out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="grid items-start gap-4 p-4 sm:gap-6 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Welcome back, {session?.name?.split(" ")[0] || "Student"}!
              </h1>
              <p className="text-muted-foreground">Continue your learning journey from where you left off.</p>
            </div>
            <Button className="gap-1" size="sm">
              <Download className="h-4 w-4" />
              <span>Download Materials</span>
            </Button>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle>Continue Learning</CardTitle>
                <CardDescription>Your current course progress</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="grid gap-4">
                  <div className="bg-muted/50 rounded-lg p-3 relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 -translate-y-1/4 translate-x-1/4">
                      <BookOpen className="h-24 w-24 text-primary/10" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">Biology 101</h3>
                          <p className="text-xs text-muted-foreground">Chapter 7: The Cell Structure</p>
                        </div>
                        <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">
                          75% Complete
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={75} className="h-2" />
                        <span className="text-xs font-medium">75%</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        <span>Last accessed: Today, 10:30 AM</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Activity className="h-3 w-3" />
                        <span>{biologyViews} course views</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm">Next Up:</h4>
                      <Badge variant="outline" className="bg-green-100 border-green-200 text-green-800 text-xs">
                        Video Lesson
                      </Badge>
                    </div>
                    <Button className="justify-start bg-green-600 hover:bg-green-700 text-white">
                      <Play className="h-4 w-4 mr-2" />
                      <span>Cell Membrane Functions</span>
                      <span className="ml-auto text-xs">15 min</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/student/courses/biology-101">Go to course</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Due assignments and tasks</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-3.5">
                  {[
                    {
                      title: "Math Quiz",
                      course: "Mathematics",
                      dueDate: "Today",
                      dueTime: "11:59 PM",
                      icon: FileText,
                      urgent: true,
                    },
                    {
                      title: "History Essay",
                      course: "World History",
                      dueDate: "Tomorrow",
                      dueTime: "5:00 PM",
                      icon: FileText,
                      urgent: false,
                    },
                    {
                      title: "Lab Report",
                      course: "Chemistry",
                      dueDate: "Nov 15",
                      dueTime: "11:59 PM",
                      icon: Layers,
                      urgent: false,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium leading-none">{item.title}</p>
                          {item.urgent && (
                            <Badge className="bg-red-100 text-red-800 border-red-200 text-xs">Due Soon</Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{item.course}</p>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <p className="text-xs text-muted-foreground">
                            {item.dueDate}, {item.dueTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/student/assignments">View all tasks</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Badges and progress</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Perfect Attendance</h3>
                    <p className="text-sm text-muted-foreground">30 days streak</p>
                    <div className="flex items-center gap-1">
                      <Activity className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs font-medium text-primary">Level 3 badge earned!</span>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Recent Badges</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Quiz Master", icon: CheckCircle },
                      { name: "Fast Learner", icon: Clock },
                      { name: "Video Watcher", icon: Video },
                    ].map((badge, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/50 w-[calc(33%-0.5rem)]"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <badge.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-xs text-center leading-tight">{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/student/achievements">See all achievements</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Activity Overview</CardTitle>
                <CardDescription>Your learning activity for the past 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] lg:h-[250px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <Activity className="h-12 w-12 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Resources</CardTitle>
                <CardDescription>Based on your courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Cell Biology Interactive",
                      description: "Explore cell structures in 3D",
                      icon: BookOpen,
                      type: "Interactive",
                    },
                    {
                      title: "Math Practice Problems",
                      description: "Extra algebra exercises",
                      icon: FileText,
                      type: "Document",
                    },
                    {
                      title: "World History Timeline",
                      description: "Visual guide to historical events",
                      icon: Video,
                      type: "Video",
                    },
                  ].map((resource, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded bg-primary/10">
                        <resource.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium leading-none">{resource.title}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground">{resource.description}</p>
                        <Badge variant="outline" className="text-xs bg-background">
                          {resource.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/student/resources">Browse all resources</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Activity</CardTitle>
                <CardDescription>Recent learning activity</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentlyViewedCourses />
                {/* Other activity content */}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
