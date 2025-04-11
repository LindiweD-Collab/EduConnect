import {
    AlertCircle,
    CheckCircle2,
    Clock,
    Download,
    Filter,
    HelpCircle,
    Laptop2,
    MoreHorizontal,
    Plus,
    Search,
    ShieldAlert,
    Tablet,
    WifiOff,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Textarea } from "@/components/ui/textarea"
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  import MainSidebar from "@/components/main-sidebar"
  
  export default function StudentTechSupportPage() {
    return (
      <div className="flex min-h-screen bg-background">
        <MainSidebar userRole="student" userName="Alex Johnson" />
  
        <div className="flex-1 md:ml-64">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <div className="flex items-center gap-2 md:hidden">
              <ShieldAlert className="h-6 w-6" />
              <span className="text-lg font-semibold">Tech Support</span>
            </div>
            <div className="flex-1">
              <form className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search support tickets..."
                  className="w-full bg-background pl-8 md:w-2/3 lg:w-1/3"
                />
              </form>
            </div>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="gap-1">
                  <Plus className="h-4 w-4" />
                  <span>New Ticket</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Create Support Ticket</DialogTitle>
                  <DialogDescription>Describe your technical issue and we'll help you resolve it.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label htmlFor="ticket-title" className="text-sm font-medium">
                      Issue Title
                    </label>
                    <Input id="ticket-title" placeholder="e.g., Tablet won't connect to WiFi" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="device-type" className="text-sm font-medium">
                      Device Type
                    </label>
                    <Select>
                      <SelectTrigger id="device-type">
                        <SelectValue placeholder="Select device type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="laptop">Laptop</SelectItem>
                        <SelectItem value="tablet">Tablet</SelectItem>
                        <SelectItem value="desktop">Desktop Computer</SelectItem>
                        <SelectItem value="projector">Projector</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="priority" className="text-sm font-medium">
                      Priority
                    </label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="priority">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Not urgent</SelectItem>
                        <SelectItem value="medium">Medium - Affects some work</SelectItem>
                        <SelectItem value="high">High - Prevents completing assignments</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="description" className="text-sm font-medium">
                      Description
                    </label>
                    <Textarea id="description" placeholder="Please provide details about your issue..." rows={5} />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Submit Ticket</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </header>
  
          <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight">Tech Support</h1>
              <Button size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </Button>
            </div>
  
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Tickets</CardTitle>
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Issues being worked on</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Resolved</CardTitle>
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">Issues successfully resolved</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Response</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4h</div>
                  <p className="text-xs text-muted-foreground">Average time to first response</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Knowledge Base</CardTitle>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">Self-help articles available</p>
                </CardContent>
              </Card>
            </div>
  
            <Tabs defaultValue="tickets" className="space-y-4">
              <TabsList>
                <TabsTrigger value="tickets">My Tickets</TabsTrigger>
                <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              <TabsContent value="tickets" className="space-y-4">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Status</TableHead>
                          <TableHead>Issue</TableHead>
                          <TableHead>Device</TableHead>
                          <TableHead>Submitted</TableHead>
                          <TableHead>Last Update</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            id: "T-1234",
                            status: "open",
                            title: "Tablet won't connect to WiFi",
                            device: "iPad Air",
                            deviceType: "tablet",
                            submitted: "Nov 12, 2023",
                            lastUpdate: "2 hours ago",
                          },
                          {
                            id: "T-1233",
                            status: "in-progress",
                            title: "Laptop battery draining too quickly",
                            device: "Dell Latitude",
                            deviceType: "laptop",
                            submitted: "Nov 10, 2023",
                            lastUpdate: "Yesterday",
                          },
                          {
                            id: "T-1230",
                            status: "resolved",
                            title: "Cannot access online textbook",
                            device: "N/A",
                            deviceType: "other",
                            submitted: "Nov 5, 2023",
                            lastUpdate: "Nov 7, 2023",
                          },
                          {
                            id: "T-1225",
                            status: "resolved",
                            title: "Projector display issues",
                            device: "Classroom Projector",
                            deviceType: "other",
                            submitted: "Oct 28, 2023",
                            lastUpdate: "Oct 30, 2023",
                          },
                        ].map((ticket) => (
                          <TableRow key={ticket.id}>
                            <TableCell>
                              {ticket.status === "open" && (
                                <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                                  Open
                                </Badge>
                              )}
                              {ticket.status === "in-progress" && (
                                <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                                  In Progress
                                </Badge>
                              )}
                              {ticket.status === "resolved" && (
                                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                                  Resolved
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              <div className="font-medium">{ticket.title}</div>
                              <div className="text-xs text-muted-foreground">ID: {ticket.id}</div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                {ticket.deviceType === "tablet" && <Tablet className="h-4 w-4 text-muted-foreground" />}
                                {ticket.deviceType === "laptop" && <Laptop2 className="h-4 w-4 text-muted-foreground" />}
                                {ticket.deviceType === "other" && (
                                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                )}
                                <span>{ticket.device}</span>
                              </div>
                            </TableCell>
                            <TableCell>{ticket.submitted}</TableCell>
                            <TableCell>{ticket.lastUpdate}</TableCell>
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
                                  {(ticket.status === "open" || ticket.status === "in-progress") && (
                                    <DropdownMenuItem>Add Comment</DropdownMenuItem>
                                  )}
                                  {ticket.status === "resolved" && <DropdownMenuItem>Reopen Ticket</DropdownMenuItem>}
                                  <DropdownMenuSeparator />
                                  {ticket.status === "open" && (
                                    <DropdownMenuItem className="text-destructive">Cancel Ticket</DropdownMenuItem>
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
              <TabsContent value="knowledge" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>WiFi Connection Issues</CardTitle>
                      <CardDescription>Troubleshooting steps for connectivity problems</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-4">
                        <WifiOff className="h-8 w-8 text-primary/70" />
                        <span className="text-sm text-muted-foreground">Most common issue</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Learn how to diagnose and fix common WiFi connection problems on school devices.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Article
                      </Button>
                    </CardFooter>
                  </Card>
  
                  <Card>
                    <CardHeader>
                      <CardTitle>Device Battery Optimization</CardTitle>
                      <CardDescription>Maximize your device's battery life</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Tips and settings to help extend battery life on laptops and tablets.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Article
                      </Button>
                    </CardFooter>
                  </Card>
  
                  <Card>
                    <CardHeader>
                      <CardTitle>Offline Learning Mode</CardTitle>
                      <CardDescription>Using the platform without internet</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        How to download course materials and use the platform in offline mode.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Article
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="faq" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>Quick answers to common technical questions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-medium">How do I reset my password?</h3>
                        <p className="text-sm text-muted-foreground">
                          You can reset your password by clicking on the "Forgot Password" link on the login page. Follow
                          the instructions sent to your email to create a new password.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">What should I do if my device won't turn on?</h3>
                        <p className="text-sm text-muted-foreground">
                          First, ensure your device is charged. Try holding the power button for 10-15 seconds. If it
                          still won't turn on, create a support ticket for further assistance.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">How can I download course materials for offline use?</h3>
                        <p className="text-sm text-muted-foreground">
                          Navigate to your course page and look for the download icon next to each resource. Click it to
                          save the material to your device for offline access.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">What browsers are supported by the platform?</h3>
                        <p className="text-sm text-muted-foreground">
                          Our platform works best with Chrome, Firefox, Safari, and Edge (latest versions). For optimal
                          performance, we recommend keeping your browser updated.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All FAQs
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    )
  }
  