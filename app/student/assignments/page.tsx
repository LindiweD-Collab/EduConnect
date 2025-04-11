import {
    AlertCircle,
    Calendar,
    CheckCircle2,
    Clock,
    Download,
    FileText,
    Filter,
    Layers,
    MoreHorizontal,
    Search,
    SlidersHorizontal,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Badge } from "@/components/ui/badge"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  import MainSidebar from "@/components/main-sidebar"
  
  export default function StudentAssignmentsPage() {
    return (
      <div className="flex min-h-screen bg-background">
        <MainSidebar userRole="student" userName="Alex Johnson" />
  
        <div className="flex-1 md:ml-64">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <div className="flex items-center gap-2 md:hidden">
              <FileText className="h-6 w-6" />
              <span className="text-lg font-semibold">Assignments</span>
            </div>
            <div className="flex-1">
              <form className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search assignments..."
                  className="w-full bg-background pl-8 md:w-2/3 lg:w-1/3"
                />
              </form>
            </div>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
            <Button size="sm" className="gap-1">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Calendar View</span>
            </Button>
          </header>
  
          <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
              <Button size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </Button>
            </div>
  
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Due Soon</CardTitle>
                  <AlertCircle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Assignments due in the next 48 hours</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending</CardTitle>
                  <Clock className="h-4 w-4 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">Assignments to be completed</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed</CardTitle>
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Assignments submitted this semester</p>
                </CardContent>
              </Card>
            </div>
  
            <Tabs defaultValue="all" className="space-y-4">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="late">Late</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <SlidersHorizontal className="h-3.5 w-3.5" />
                    <span>Filters</span>
                  </Button>
                  <Select defaultValue="all">
                    <SelectTrigger className="h-8 w-[150px]">
                      <SelectValue placeholder="Filter by course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Courses</SelectItem>
                      <SelectItem value="biology">Biology</SelectItem>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="history">World History</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
  
              <TabsContent value="all" className="space-y-4">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Status</TableHead>
                          <TableHead>Assignment</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            status: "due-soon",
                            title: "Math Quiz",
                            course: "Mathematics",
                            dueDate: "Today, 11:59 PM",
                            type: "Quiz",
                            typeIcon: FileText,
                          },
                          {
                            status: "due-soon",
                            title: "History Essay",
                            course: "World History",
                            dueDate: "Tomorrow, 5:00 PM",
                            type: "Essay",
                            typeIcon: FileText,
                          },
                          {
                            status: "pending",
                            title: "Lab Report",
                            course: "Chemistry",
                            dueDate: "Nov 15, 11:59 PM",
                            type: "Report",
                            typeIcon: Layers,
                          },
                          {
                            status: "pending",
                            title: "Cell Structure Diagram",
                            course: "Biology 101",
                            dueDate: "Nov 18, 11:59 PM",
                            type: "Project",
                            typeIcon: Layers,
                          },
                          {
                            status: "completed",
                            title: "Programming Exercise",
                            course: "Computer Science",
                            dueDate: "Nov 5, 11:59 PM",
                            type: "Exercise",
                            typeIcon: FileText,
                            grade: "95%",
                          },
                          {
                            status: "completed",
                            title: "Poetry Analysis",
                            course: "Literature",
                            dueDate: "Oct 28, 11:59 PM",
                            type: "Essay",
                            typeIcon: FileText,
                            grade: "88%",
                          },
                          {
                            status: "late",
                            title: "Algebra Problem Set",
                            course: "Mathematics",
                            dueDate: "Oct 25, 11:59 PM",
                            type: "Problem Set",
                            typeIcon: FileText,
                          },
                        ].map((assignment, i) => (
                          <TableRow key={i}>
                            <TableCell>
                              {assignment.status === "due-soon" && <Badge variant="destructive">Due Soon</Badge>}
                              {assignment.status === "pending" && (
                                <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                                  Pending
                                </Badge>
                              )}
                              {assignment.status === "completed" && (
                                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                                  Completed
                                </Badge>
                              )}
                              {assignment.status === "late" && (
                                <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
                                  Late
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              <div className="font-medium">{assignment.title}</div>
                              {assignment.grade && (
                                <div className="text-xs text-muted-foreground">Grade: {assignment.grade}</div>
                              )}
                            </TableCell>
                            <TableCell>{assignment.course}</TableCell>
                            <TableCell>{assignment.dueDate}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <assignment.typeIcon className="h-4 w-4 text-muted-foreground" />
                                <span>{assignment.type}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Actions</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>View Details</DropdownMenuItem>
                                  {(assignment.status === "due-soon" || assignment.status === "pending") && (
                                    <DropdownMenuItem>Start Assignment</DropdownMenuItem>
                                  )}
                                  {assignment.status === "completed" && (
                                    <DropdownMenuItem>View Feedback</DropdownMenuItem>
                                  )}
                                  <DropdownMenuItem>Download Materials</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  {(assignment.status === "due-soon" || assignment.status === "pending") && (
                                    <DropdownMenuItem>Request Extension</DropdownMenuItem>
                                  )}
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
  
              <TabsContent value="upcoming" className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      {/* Upcoming assignments would be filtered here */}
                      <p className="text-muted-foreground">Showing upcoming assignments</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
  
              <TabsContent value="completed" className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      {/* Completed assignments would be filtered here */}
                      <p className="text-muted-foreground">Showing completed assignments</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
  
              <TabsContent value="late" className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      {/* Late assignments would be filtered here */}
                      <p className="text-muted-foreground">Showing late assignments</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    )
  }
  