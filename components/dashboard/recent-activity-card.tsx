import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Award, Briefcase, MessageSquare } from "lucide-react"

export function RecentActivityCard() {
  const activities = [
    {
      icon: FileText,
      title: "Resume analyzed",
      description: "Received feedback on your updated resume",
      time: "2 hours ago",
      badge: "Completed",
      badgeVariant: "default" as const,
    },
    {
      icon: Award,
      title: "JavaScript skill test",
      description: "Scored 85/100 in advanced JavaScript assessment",
      time: "1 day ago",
      badge: "High Score",
      badgeVariant: "secondary" as const,
    },
    {
      icon: Briefcase,
      title: "Applied to internship",
      description: "Software Developer Intern at TechCorp",
      time: "2 days ago",
      badge: "Pending",
      badgeVariant: "outline" as const,
    },
    {
      icon: MessageSquare,
      title: "Mock interview completed",
      description: "Technical interview practice session",
      time: "3 days ago",
      badge: "Feedback Available",
      badgeVariant: "secondary" as const,
    },
  ]

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <activity.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-sm">{activity.title}</h4>
                  <Badge variant={activity.badgeVariant} className="text-xs">
                    {activity.badge}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
