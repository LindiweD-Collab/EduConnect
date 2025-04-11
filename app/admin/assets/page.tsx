import {
    AlertCircle,
    CheckCircle2,
    Download,
    Laptop2,
    MonitorSmartphone,
    MoreHorizontal,
    Plus,
    Search,
    SlidersHorizontal,
    Tablet,
    Wifi,
    WifiOff,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Input } from "@/components/ui/input"
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
  import { Badge } from "@/components/ui/badge"
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  import MainSidebar from "@/components/main-sidebar"
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  
  export default function TechAssetsPage() {
    return (
      <div className="flex min-h-screen bg-background">
        <MainSidebar userRole="admin" userName="Admin User" />
  
        <div className="flex-1 md:ml-64">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <div className="flex items-center gap-2 md:hidden">
              <MonitorSmartphone className="h-6 w-6" />
              <span className="text-lg font-semibold">Tech Assets</span>
            </div>
            <div className="flex-1">
              <form className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search assets..."
                  className="w-full bg-background pl-8 md:w-2/3 lg:w-1/3"
                />
              </form>
            </div>
            <Button size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Export</span>
            </Button>
          </header>
  
          <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight">Tech Assets</h1>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-1">
                    <Plus className="h-4 w-4" />
                    <span>Add Asset</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Add New Asset</DialogTitle>
                    <DialogDescription>Enter the details for the new tech asset</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <label htmlFor="asset-name" className="text-sm font-medium">
                        Asset Name
                      </label>
                      <Input id="asset-name" placeholder="e.g., Classroom Laptop #23" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="asset-type" className="text-sm font-medium">
                        Asset Type
                      </label>
                      <Select>
                        <SelectTrigger id="asset-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="laptop">Laptop</SelectItem>
                          <SelectItem value="tablet">Tablet</SelectItem>
                          <SelectItem value="projector">Projector</SelectItem>
                          <SelectItem value="server">Server</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="asset-status" className="text-sm font-medium">
                        Status
                      </label>
                      <Select defaultValue="available">
                        <SelectTrigger id="asset-status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="available">Available</SelectItem>
                          <SelectItem value="in-use">In Use</SelectItem>
                          <SelectItem value="repair">Needs Repair</SelectItem>
                          <SelectItem value="maintenance">In Maintenance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="asset-location" className="text-sm font-medium">
                        Location
                      </label>
                      <Input id="asset-location" placeholder="e.g., Room 102" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="asset-notes" className="text-sm font-medium">
                        Notes
                      </label>
                      <Input id="asset-notes" placeholder="Additional information..." />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Add Asset</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
  
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
                  <MonitorSmartphone className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">246</div>
                  <p className="text-xs text-muted-foreground">+12 added this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Available</CardTitle>
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78</div>
                  <p className="text-xs text-muted-foreground">32% of total assets</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Need Attention</CardTitle>
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">14 require repairs</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Offline Devices</CardTitle>
                  <WifiOff className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                  <p className="text-xs text-muted-foreground">7% of total assets</p>
                </CardContent>
              </Card>
            </div>
  
            <Tabs defaultValue="all" className="space-y-4">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="all">All Assets</TabsTrigger>
                  <TabsTrigger value="laptops">Laptops</TabsTrigger>
                  <TabsTrigger value="tablets">Tablets</TabsTrigger>
                  <TabsTrigger value="other">Other</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <SlidersHorizontal className="h-3.5 w-3.5" />
                    <span>Filters</span>
                  </Button>
                  <Select defaultValue="available">
                    <SelectTrigger className="h-8 w-[150px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="in-use">In Use</SelectItem>
                      <SelectItem value="repair">Needs Repair</SelectItem>
                      <SelectItem value="maintenance">In Maintenance</SelectItem>
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
                          <TableHead className="w-[120px]">Asset ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Last Maintenance</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            id: "LPT-1024",
                            name: "Dell Latitude E7450",
                            type: "Laptop",
                            typeIcon: Laptop2,
                            status: "Available",
                            statusVariant: "success",
                            location: "IT Storage",
                            lastMaintenance: "2023-09-15",
                            connected: true,
                          },
                          {
                            id: "TBL-3842",
                            name: "iPad Air 4th Gen",
                            type: "Tablet",
                            typeIcon: Tablet,
                            status: "In Use",
                            statusVariant: "default",
                            location: "Classroom 101",
                            lastMaintenance: "2023-08-22",
                            connected: true,
                          },
                          {
                            id: "LPT-1056",
                            name: "HP EliteBook",
                            type: "Laptop",
                            typeIcon: Laptop2,
                            status: "Needs Repair",
                            statusVariant: "destructive",
                            location: "IT Lab",
                            lastMaintenance: "2023-07-30",
                            connected: false,
                          },
                          {
                            id: "TBL-3850",
                            name: "Samsung Galaxy Tab",
                            type: "Tablet",
                            typeIcon: Tablet,
                            status: "In Maintenance",
                            statusVariant: "warning",
                            location: "IT Storage",
                            lastMaintenance: "2023-10-05",
                            connected: false,
                          },
                          {
                            id: "LPT-1078",
                            name: "MacBook Pro",
                            type: "Laptop",
                            typeIcon: Laptop2,
                            status: "Available",
                            statusVariant: "success",
                            location: "Teacher's Lounge",
                            lastMaintenance: "2023-09-28",
                            connected: true,
                          },
                        ].map((asset) => (
                          <TableRow key={asset.id}>
                            <TableCell className="font-medium">{asset.id}</TableCell>
                            <TableCell>{asset.name}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <asset.typeIcon className="h-4 w-4 text-muted-foreground" />
                                <span>{asset.type}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant={asset.statusVariant as any}>{asset.status}</Badge>
                            </TableCell>
                            <TableCell>{asset.location}</TableCell>
                            <TableCell>{asset.lastMaintenance}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end gap-2">
                                {asset.connected ? (
                                  <Wifi className="h-4 w-4 text-green-500" />
                                ) : (
                                  <WifiOff className="h-4 w-4 text-muted-foreground" />
                                )}
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <MoreHorizontal className="h-4 w-4" />
                                      <span className="sr-only">Actions</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                    <DropdownMenuItem>Edit Asset</DropdownMenuItem>
                                    <DropdownMenuItem>Schedule Maintenance</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-destructive">Mark as Deprecated</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-4">
                    <div className="text-xs text-muted-foreground">Showing 5 of 246 assets</div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
  
              <TabsContent value="laptops" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Laptops</CardTitle>
                    <CardDescription>View and manage all laptop assets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] flex items-center justify-center">
                      <p className="text-muted-foreground">Laptop assets would be displayed here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
  
              <TabsContent value="tablets" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Tablets</CardTitle>
                    <CardDescription>View and manage all tablet assets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] flex items-center justify-center">
                      <p className="text-muted-foreground">Tablet assets would be displayed here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
  
              <TabsContent value="other" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Other Assets</CardTitle>
                    <CardDescription>View and manage miscellaneous assets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] flex items-center justify-center">
                      <p className="text-muted-foreground">Other assets would be displayed here</p>
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
  