import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, GraduationCap, User } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary-foreground shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">EduConnect</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Learn Anywhere, Anytime</h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              A comprehensive e-learning platform with offline capabilities designed for schools in areas with limited
              connectivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="gap-2">
                  <User className="h-5 w-5" />
                  Get Started
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="gap-2">
                  <BookOpen className="h-5 w-5" />
                  Try Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Course Management</CardTitle>
                  <CardDescription>Create, update and manage interactive courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Easily build courses with multimedia content, assessments, and interactive elements.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Offline Learning</CardTitle>
                  <CardDescription>Learn without constant internet connection</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Access course materials even without internet. Your progress syncs when you reconnect.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Asset Management</CardTitle>
                  <CardDescription>Track and manage tech resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Keep track of laptops, tablets, and other tech equipment with our comprehensive asset dashboard.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress Tracking</CardTitle>
                  <CardDescription>Monitor learning achievements</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Track assignments, quizzes, and overall progress for each student and course.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Communication Tools</CardTitle>
                  <CardDescription>Stay connected with everyone</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>In-app messaging, notifications, and announcements keep everyone on the same page.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Multi-Role Support</CardTitle>
                  <CardDescription>Tailored for everyone's needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Custom dashboards for administrators, teachers, and students with role-specific features.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold">EduConnect</span>
            </div>
            <div className="flex gap-8">
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                Privacy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary">
                Terms
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EduConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
