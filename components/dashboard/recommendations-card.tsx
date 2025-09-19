import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, TrendingUp, Target, Award } from "lucide-react"

export function RecommendationsCard() {
  const recommendations = [
    {
      icon: Award,
      title: "Complete React Certification",
      description: "Boost your frontend skills",
      impact: "+12 JRI points",
      type: "Skill",
    },
    {
      icon: Target,
      title: "Apply to 3 more internships",
      description: "Increase your chances",
      impact: "Higher placement odds",
      type: "Action",
    },
    {
      icon: TrendingUp,
      title: "Update LinkedIn profile",
      description: "Add recent projects",
      impact: "Better visibility",
      type: "Profile",
    },
  ]

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-5 w-5 text-accent" />
          <CardTitle className="text-lg font-semibold">AI Recommendations</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <rec.icon className="h-4 w-4 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-sm">{rec.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {rec.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{rec.description}</p>
                  <p className="text-xs font-semibold text-accent">{rec.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button size="sm" className="w-full mt-4">
          View All Recommendations
        </Button>
      </CardContent>
    </Card>
  )
}
