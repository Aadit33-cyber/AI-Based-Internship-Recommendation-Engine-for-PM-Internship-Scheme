import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, MapPin, Briefcase, Award, MessageSquare, Users } from "lucide-react"
import Link from "next/link"

export function QuickActionsCard() {
  const actions = [
    {
      icon: FileText,
      title: "Analyze Resume",
      description: "Get AI feedback on your resume",
      href: "/analyzer",
      color: "text-primary",
    },
    {
      icon: MapPin,
      title: "Explore Careers",
      description: "Discover career paths",
      href: "/careers",
      color: "text-accent",
    },
    {
      icon: Briefcase,
      title: "Find Internships",
      description: "Browse opportunities",
      href: "/internships",
      color: "text-primary",
    },
    {
      icon: Award,
      title: "Take Skill Test",
      description: "Assess your abilities",
      href: "/skills",
      color: "text-accent",
    },
    {
      icon: MessageSquare,
      title: "Practice Interview",
      description: "AI mock interviews",
      href: "/interview",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Find Mentors",
      description: "Connect with experts",
      href: "/mentors",
      color: "text-accent",
    },
  ]

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              asChild
              className="h-auto p-4 flex flex-col items-start space-y-2 hover:shadow-md transition-shadow bg-transparent"
            >
              <Link href={action.href}>
                <action.icon className={`h-6 w-6 ${action.color}`} />
                <div className="text-left">
                  <div className="font-semibold text-sm">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
