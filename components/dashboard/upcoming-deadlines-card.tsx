import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"

export function UpcomingDeadlinesCard() {
  const deadlines = [
    {
      title: "Google Summer Internship",
      company: "Google",
      deadline: "Dec 15, 2024",
      daysLeft: 5,
      priority: "high" as const,
    },
    {
      title: "Microsoft SDE Intern",
      company: "Microsoft",
      deadline: "Dec 20, 2024",
      daysLeft: 10,
      priority: "medium" as const,
    },
    {
      title: "Amazon Development Center",
      company: "Amazon",
      deadline: "Dec 25, 2024",
      daysLeft: 15,
      priority: "low" as const,
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-destructive"
      case "medium":
        return "text-accent"
      default:
        return "text-muted-foreground"
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return "urgent"
      case "medium":
        return "medium"
      default:
        return "low"
    }
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Upcoming Deadlines</CardTitle>
          <Calendar className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deadlines.map((deadline, index) => (
            <div key={index} className="p-3 rounded-lg border border-border hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{deadline.title}</h4>
                  <p className="text-xs text-muted-foreground">{deadline.company}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {getPriorityBadge(deadline.priority)}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className={`h-4 w-4 ${getPriorityColor(deadline.priority)}`} />
                  <span className="text-xs text-muted-foreground">{deadline.deadline}</span>
                </div>
                <span className={`text-xs font-semibold ${getPriorityColor(deadline.priority)}`}>
                  {deadline.daysLeft} days left
                </span>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
          View All Deadlines
        </Button>
      </CardContent>
    </Card>
  )
}
