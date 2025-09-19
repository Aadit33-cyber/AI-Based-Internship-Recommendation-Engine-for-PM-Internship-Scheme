"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Target, TrendingUp, BookOpen, Award, Clock, CheckCircle, XCircle } from "lucide-react"

export function SkillGapAnalysisSection() {
  const targetRole = "Software Engineer"

  const skillAnalysis = [
    {
      skill: "JavaScript",
      current: 85,
      required: 90,
      status: "strong",
      priority: "low",
      timeToImprove: "2-3 weeks",
    },
    {
      skill: "React",
      current: 70,
      required: 85,
      status: "developing",
      priority: "medium",
      timeToImprove: "1-2 months",
    },
    {
      skill: "Node.js",
      current: 45,
      required: 80,
      status: "gap",
      priority: "high",
      timeToImprove: "3-4 months",
    },
    {
      skill: "System Design",
      current: 30,
      required: 75,
      status: "gap",
      priority: "high",
      timeToImprove: "4-6 months",
    },
    {
      skill: "SQL",
      current: 60,
      required: 70,
      status: "developing",
      priority: "medium",
      timeToImprove: "1 month",
    },
  ]

  const recommendations = [
    {
      type: "Course",
      title: "Advanced Node.js Development",
      provider: "Coursera",
      duration: "6 weeks",
      rating: 4.8,
      impact: "High",
    },
    {
      type: "Project",
      title: "Build a Full-Stack E-commerce App",
      provider: "Self-guided",
      duration: "4-6 weeks",
      rating: 4.9,
      impact: "Very High",
    },
    {
      type: "Certification",
      title: "AWS Certified Developer",
      provider: "Amazon",
      duration: "8-12 weeks",
      rating: 4.7,
      impact: "High",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "strong":
        return "text-primary"
      case "developing":
        return "text-accent"
      case "gap":
        return "text-destructive"
      default:
        return "text-muted-foreground"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "strong":
        return <CheckCircle className="h-4 w-4 text-primary" />
      case "developing":
        return <Clock className="h-4 w-4 text-accent" />
      case "gap":
        return <XCircle className="h-4 w-4 text-destructive" />
      default:
        return null
    }
  }

  const getPriorityBadge = (priority: string) => {
    const colors = {
      high: "bg-destructive/10 text-destructive",
      medium: "bg-accent/10 text-accent",
      low: "bg-primary/10 text-primary",
    }
    return colors[priority as keyof typeof colors] || colors.low
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Skill Gap Analysis</h2>
        <p className="text-muted-foreground">
          Understand what skills you need to develop for your target role and get personalized learning recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Skill Analysis */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <span>Skills for {targetRole}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillAnalysis.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(skill.status)}
                      <span className="font-medium">{skill.skill}</span>
                      <Badge className={getPriorityBadge(skill.priority)}>{skill.priority} priority</Badge>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-semibold ${getStatusColor(skill.status)}`}>
                        {skill.current}% / {skill.required}%
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Current Level</span>
                      <span>Required Level</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.required} className="h-2 bg-muted" />
                      <Progress
                        value={skill.current}
                        className="h-2 absolute top-0 left-0"
                        style={{
                          background: "transparent",
                        }}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Estimated time to improve: {skill.timeToImprove}
                    </div>
                  </div>
                </div>
              ))}

              <Alert className="border-accent/20 bg-accent/5">
                <TrendingUp className="h-4 w-4 text-accent" />
                <AlertDescription>
                  <strong>Overall Progress:</strong> You're 68% ready for this role. Focus on high-priority skills to
                  accelerate your progress.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <div className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-accent" />
                <span>Learning Path</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 border border-border rounded-lg hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {rec.type}
                    </Badge>
                    <Badge className="text-xs bg-accent/10 text-accent">{rec.impact} Impact</Badge>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{rec.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{rec.provider}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span>{rec.duration}</span>
                    <div className="flex items-center space-x-1">
                      <span>★</span>
                      <span>{rec.rating}</span>
                    </div>
                  </div>
                </div>
              ))}

              <Button className="w-full mt-4">
                <Award className="h-4 w-4 mr-2" />
                Create Learning Plan
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Target className="h-4 w-4 mr-2" />
                Change Target Role
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Market Trends
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <BookOpen className="h-4 w-4 mr-2" />
                Browse All Courses
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
