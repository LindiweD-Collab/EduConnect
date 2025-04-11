import { Archive, Edit, Filter, Mail, MoreHorizontal, Plus, Search, Star, Trash2, FileText } from "lucide-react"

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import MainSidebar from "@/components/main-sidebar"

export default function StudentMessagesPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <MainSidebar userRole="student" userName="Alex Johnson" />

      <div className="flex-1 md:ml-64">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <div className="flex items-center gap-2 md:hidden">
            <Mail className="h-6 w-6" />
            <span className="text-lg font-semibold">Messages</span>
          </div>
          <div className="flex-1">
            <form className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search messages..."
                className="w-full bg-background pl-8 md:w-2/3 lg:w-1/3"
              />
            </form>
          </div>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter</span>
          </Button>
          <Button size="sm" className="gap-1">
            <Edit className="h-4 w-4" />
            <span className="hidden sm:inline">Compose</span>
          </Button>
        </header>

        <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
            <Button className="gap-1">
              <Plus className="h-4 w-4" />
              <span>New Message</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <Card className="md:col-span-4">
              <CardHeader className="px-4 py-3">
                <CardTitle className="text-lg">Inbox</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs defaultValue="inbox" className="w-full">
                  <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                    <TabsTrigger
                      value="inbox"
                      className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    >
                      Inbox
                    </TabsTrigger>
                    <TabsTrigger
                      value="sent"
                      className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    >
                      Sent
                    </TabsTrigger>
                    <TabsTrigger
                      value="archived"
                      className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    >
                      Archived
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="inbox" className="m-0">
                    <div className="divide-y">
                      {[
                        {
                          id: 1,
                          sender: "Dr. Emily Chen",
                          avatar: "EC",
                          subject: "Biology Assignment Feedback",
                          preview: "I've reviewed your latest assignment and wanted to provide some feedback...",
                          time: "10:30 AM",
                          unread: true,
                          course: "Biology 101",
                        },
                        {
                          id: 2,
                          sender: "Prof. Michael Brown",
                          avatar: "MB",
                          subject: "Math Quiz Reminder",
                          preview: "Don't forget about the quiz tomorrow. Make sure to review chapters 5-7...",
                          time: "Yesterday",
                          unread: true,
                          course: "Mathematics",
                        },
                        {
                          id: 3,
                          sender: "Tech Support",
                          avatar: "TS",
                          subject: "Your Support Ticket #1234",
                          preview: "We've received your request about the tablet issue and are working on it...",
                          time: "Yesterday",
                          unread: false,
                          course: null,
                        },
                        {
                          id: 4,
                          sender: "Dr. Sarah Williams",
                          avatar: "SW",
                          subject: "History Essay Guidelines",
                          preview: "Here are the detailed guidelines for your upcoming essay assignment...",
                          time: "Nov 10",
                          unread: false,
                          course: "World History",
                        },
                        {
                          id: 5,
                          sender: "Student Services",
                          avatar: "SS",
                          subject: "Upcoming School Events",
                          preview: "Check out these upcoming events and activities happening on campus...",
                          time: "Nov 8",
                          unread: false,
                          course: null,
                        },
                      ].map((message) => (
                        <div
                          key={message.id}
                          className={`flex items-start gap-3 p-3 hover:bg-muted/50 cursor-pointer ${
                            message.unread ? "bg-primary/5" : ""
                          }`}
                        >
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="" />
                            <AvatarFallback>{message.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1 overflow-hidden">
                            <div className="flex items-center justify-between">
                              <h4 className={`font-medium truncate ${message.unread ? "font-semibold" : ""}`}>
                                {message.sender}
                              </h4>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">{message.time}</span>
                            </div>
                            <p className={`text-sm truncate ${message.unread ? "font-medium" : ""}`}>
                              {message.subject}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">{message.preview}</p>
                            {message.course && (
                              <Badge variant="outline" className="mt-1 text-xs">
                                {message.course}
                              </Badge>
                            )}
                          </div>
                          {message.unread && <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="sent" className="m-0">
                    <div className="flex items-center justify-center h-40">
                      <p className="text-muted-foreground">Your sent messages will appear here.</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="archived" className="m-0">
                    <div className="flex items-center justify-center h-40">
                      <p className="text-muted-foreground">Your archived messages will appear here.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="md:col-span-8">
              <CardHeader className="px-6 py-4 flex flex-row items-center justify-between">
                <div className="space-y-1">
                  <CardTitle>Biology Assignment Feedback</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>From: Dr. Emily Chen</span>
                    <span>·</span>
                    <span>10:30 AM</span>
                    <span>·</span>
                    <Badge variant="outline">Biology 101</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Star className="h-4 w-4" />
                    <span className="sr-only">Star</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Archive className="h-4 w-4" />
                    <span className="sr-only">Archive</span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Mark as Unread</DropdownMenuItem>
                      <DropdownMenuItem>Forward</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <Separator />
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="" />
                      <AvatarFallback>EC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">Dr. Emily Chen</h4>
                        <span className="text-xs text-muted-foreground">to me</span>
                      </div>
                      <div className="prose prose-sm max-w-none">
                        <p>Hi Alex,</p>
                        <p>
                          I've reviewed your latest assignment on cell structures and wanted to provide some feedback.
                          Overall, your work was excellent! You demonstrated a strong understanding of the key concepts
                          and your diagrams were very well done.
                        </p>
                        <p>
                          There were a few minor points that could use clarification, particularly in your description
                          of the mitochondrial membrane. I've attached some additional resources that might help you
                          understand this concept better.
                        </p>
                        <p>
                          Your analysis of the cell cycle was particularly impressive. I'd like to encourage you to
                          consider expanding on this for your final project. Let me know if you'd like to discuss this
                          further during office hours.
                        </p>
                        <p>Keep up the great work!</p>
                        <p>
                          Best regards,
                          <br />
                          Dr. Chen
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4 mt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-5 w-5 rounded bg-primary/10 flex items-center justify-center">
                        <Mail className="h-3 w-3 text-primary" />
                      </div>
                      <h4 className="text-sm font-medium">1 Attachment</h4>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-md bg-muted/50">
                      <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-sm font-medium">Cell_Structure_Resources.pdf</h5>
                        <p className="text-xs text-muted-foreground">2.4 MB</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <Separator />
              <div className="p-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <Input placeholder="Type your reply..." className="border-0 shadow-none focus-visible:ring-0" />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Attach
                          </Button>
                        </div>
                        <Button size="sm">Reply</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
