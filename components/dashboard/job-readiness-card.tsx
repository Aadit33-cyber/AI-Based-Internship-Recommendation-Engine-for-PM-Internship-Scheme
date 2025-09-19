import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Target, Award, FileText } from "lucide-react"

export function JobReadinessCard() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Job Readiness Index (JRI)</CardTitle>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Updated Today
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Score */}
        <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
          <div className="text-4xl font-bold text-primary mb-2">78</div>
          <div className="text-lg font-semibold mb-1">Good</div>
          <div className="text-sm text-muted-foreground">You're on track for most entry-level positions</div>
        </div>

        {/* Score Breakdown */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-primary" />
              <span className="font-medium">Resume Quality</span>
            </div>
            <div className="flex items-center space-x-3">
              <Progress value={85} className="w-20" />
              <span className="text-sm font-semibold w-8">85</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Target className="h-5 w-5 text-accent" />
              <span className="font-medium">Skills Match</span>
            </div>
            <div className="flex items-center space-x-3">
              <Progress value={72} className="w-20" />
              <span className="text-sm font-semibold w-8">72</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Award className="h-5 w-5 text-primary" />
              <span className="font-medium">Certifications</span>
            </div>
            <div className="flex items-center space-x-3">
              <Progress value={60} className="w-20" />
              <span className="text-sm font-semibold w-8">60</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-5 w-5 text-accent" />
              <span className="font-medium">Experience</span>
            </div>
            <div className="flex items-center space-x-3">
              <Progress value={45} className="w-20" />
              <span className="text-sm font-semibold w-8">45</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button className="flex-1">Improve Score</Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
