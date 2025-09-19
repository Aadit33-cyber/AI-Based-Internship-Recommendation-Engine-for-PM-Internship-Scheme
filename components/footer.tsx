import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              Talent Tuner
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI-driven career and internship recommendation platform bridging the gap between students and industry.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="font-semibold">Platform</h3>
            <div className="space-y-2 text-sm">
              <Link href="/dashboard" className="block text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </Link>
              <Link href="/analyzer" className="block text-muted-foreground hover:text-foreground transition-colors">
                Resume Analyzer
              </Link>
              <Link href="/careers" className="block text-muted-foreground hover:text-foreground transition-colors">
                Career Navigator
              </Link>
              <Link href="/internships" className="block text-muted-foreground hover:text-foreground transition-colors">
                Internships
              </Link>
              <Link href="/skills" className="block text-muted-foreground hover:text-foreground transition-colors">
                Skill Tests
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <div className="space-y-2 text-sm">
              <Link href="/blog" className="block text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link href="/guides" className="block text-muted-foreground hover:text-foreground transition-colors">
                Career Guides
              </Link>
              <Link href="/webinars" className="block text-muted-foreground hover:text-foreground transition-colors">
                Webinars
              </Link>
              <Link
                href="/success-stories"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Success Stories
              </Link>
              <Link href="/help" className="block text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Get the latest career insights and platform updates.</p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="flex-1" type="email" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">© 2024 Talent Tuner. All rights reserved.</div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
