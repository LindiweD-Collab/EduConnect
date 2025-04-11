import Link from "next/link"
import { BookOpen, Clock, Download, Filter, Layers, Play, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainSidebar from "@/components/main-sidebar"

export default function StudentCoursesPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <MainSidebar userRole="student" userName="Alex Johnson" />

      <div className="flex-1 md:ml-64">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <div className="flex items-center gap-2 md:hidden">
            <BookOpen className="h-6 w-6" />
            <span className="text-lg font-semibold">My Courses</span>
          </div>
          <div className="flex-1">
            <form className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full bg-background pl-8 md:w-2/3 lg:w-1/3"
              />
            </form>
          </div>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter</span>
          </Button>
          <Button size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download Materials</span>
          </Button>
        </header>

        <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Biology 101",
                    description: "Introduction to Biological Sciences",
                    progress: 75,
                    lastAccessed: "Today",
                    nextLesson: "Cell Membrane Functions",
                    nextLessonType: "Video",
                    nextLessonDuration: "15 min",
                    instructor: "Dr. Emily Chen",
                    featured: true,
                  },
                  {
                    title: "Mathematics",
                    description: "Algebra and Calculus Fundamentals",
                    progress: 45,
                    lastAccessed: "Yesterday",
                    nextLesson: "Quadratic Equations",
                    nextLessonType: "Interactive",
                    nextLessonDuration: "25 min",
                    instructor: "Prof. Michael Brown",
                    featured: false,
                  },
                  {
                    title: "World History",
                    description: "Ancient Civilizations to Modern Era",
                    progress: 30,
                    lastAccessed: "3 days ago",
                    nextLesson: "The Renaissance Period",
                    nextLessonType: "Reading",
                    nextLessonDuration: "40 min",
                    instructor: "Dr. Sarah Williams",
                    featured: false,
                  },
                  {
                    title: "Chemistry",
                    description: "Fundamentals of Chemical Reactions",
                    progress: 60,
                    lastAccessed: "2 days ago",
                    nextLesson: "Periodic Table Elements",
                    nextLessonType: "Quiz",
                    nextLessonDuration: "20 min",
                    instructor: "Prof. James Wilson",
                    featured: false,
                  },
                  {
                    title: "Computer Science",
                    description: "Introduction to Programming",
                    progress: 85,
                    lastAccessed: "Today",
                    nextLesson: "Algorithms and Data Structures",
                    nextLessonType: "Exercise",
                    nextLessonDuration: "30 min",
                    instructor: "Dr. Robert Lee",
                    featured: false,
                  },
                  {
                    title: "Literature",
                    description: "Classic and Contemporary Works",
                    progress: 15,
                    lastAccessed: "1 week ago",
                    nextLesson: "Shakespeare's Sonnets",
                    nextLessonType: "Reading",
                    nextLessonDuration: "45 min",
                    instructor: "Prof. Elizabeth Taylor",
                    featured: false,
                  },
                ].map((course, i) => (
                  <Card key={i} className={course.featured ? "border-primary/50 shadow-md" : ""}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{course.title}</CardTitle>
                          <CardDescription>{course.description}</CardDescription>
                        </div>
                        {course.featured && (
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            <Star className="h-3 w-3 mr-1 fill-primary" /> Featured
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>

                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          <span>Last accessed: {course.lastAccessed}</span>
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-sm">Next Up:</h4>
                            {course.nextLessonType === "Video" && (
                              <Badge variant="outline" className="bg-green-100 border-green-200 text-green-800 text-xs">
                                Video
                              </Badge>
                            )}
                            {course.nextLessonType === "Interactive" && (
                              <Badge variant="outline" className="bg-blue-100 border-blue-200 text-blue-800 text-xs">
                                Interactive
                              </Badge>
                            )}
                            {course.nextLessonType === "Reading" && (
                              <Badge variant="outline" className="bg-amber-100 border-amber-200 text-amber-800 text-xs">
                                Reading
                              </Badge>
                            )}
                            {course.nextLessonType === "Quiz" && (
                              <Badge
                                variant="outline"
                                className="bg-purple-100 border-purple-200 text-purple-800 text-xs"
                              >
                                Quiz
                              </Badge>
                            )}
                            {course.nextLessonType === "Exercise" && (
                              <Badge
                                variant="outline"
                                className="bg-indigo-100 border-indigo-200 text-indigo-800 text-xs"
                              >
                                Exercise
                              </Badge>
                            )}
                          </div>
                          <Button variant="outline" className="justify-start w-full" asChild>
                            <Link
                              href={`/student/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}/next-lesson`}
                            >
                              {course.nextLessonType === "Video" && <Play className="h-4 w-4 mr-2" />}
                              {course.nextLessonType === "Interactive" && <Layers className="h-4 w-4 mr-2" />}
                              {course.nextLessonType === "Reading" && <BookOpen className="h-4 w-4 mr-2" />}
                              {course.nextLessonType === "Quiz" && <Layers className="h-4 w-4 mr-2" />}
                              {course.nextLessonType === "Exercise" && <Layers className="h-4 w-4 mr-2" />}
                              <span>{course.nextLesson}</span>
                              <span className="ml-auto text-xs">{course.nextLessonDuration}</span>
                            </Link>
                          </Button>
                        </div>

                        <div className="text-sm">
                          <span className="text-muted-foreground">Instructor: </span>
                          <span>{course.instructor}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full" asChild>
                        <Link href={`/student/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          Go to course
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="in-progress" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* In Progress courses would be filtered here */}
                <Card className="border-primary/50 shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Biology 101</CardTitle>
                        <CardDescription>Introduction to Biological Sciences</CardDescription>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        <Star className="h-3 w-3 mr-1 fill-primary" /> Featured
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">{/* Content similar to above */}</CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full" asChild>
                      <Link href="/student/courses/biology-101">Go to course</Link>
                    </Button>
                  </CardFooter>
                </Card>
                {/* More in-progress courses */}
              </div>
            </TabsContent>
            <TabsContent value="completed" className="space-y-4">
              <div className="flex items-center justify-center h-40 bg-muted/20 rounded-lg">
                <p className="text-muted-foreground">You haven't completed any courses yet.</p>
              </div>
            </TabsContent>
            <TabsContent value="archived" className="space-y-4">
              <div className="flex items-center justify-center h-40 bg-muted/20 rounded-lg">
                <p className="text-muted-foreground">You don't have any archived courses.</p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
