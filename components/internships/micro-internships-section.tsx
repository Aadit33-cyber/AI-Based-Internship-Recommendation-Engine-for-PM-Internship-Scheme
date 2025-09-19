"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, DollarSign, Star, Zap, CheckCircle } from "lucide-react"

export function MicroInternshipsSection() {
  const microInternships = [
    {
      id: "1",
      title: "Build a React Component Library",
      company: "StartupXYZ",
      logo: "/abstract-startup-logo.png",
      duration: "1-2 weeks",
      payment: "₹8,000",
      difficulty: "Intermediate",
      skills: ["React", "TypeScript", "Storybook"],
      description: "Create a reusable component library with documentation and testing.",
      deliverables: ["Component library", "Documentation", "Unit tests"],
      rating: 4.8,
      completions: 23,
      urgent: false,
    },
    {
      id: "2",
      title: "Data Analysis Dashboard",
      company: "Analytics Inc",
      logo: "/analytics-logo.png",
      duration: "3-5 days",
      payment: "₹5,000",
      difficulty: "Beginner",
      skills: ["Python", "Pandas", "Matplotlib"],
      description: "Analyze sales data and create interactive visualizations.",
      deliverables: ["Data analysis report", "Interactive dashboard", "Insights summary"],
      rating: 4.9,
      completions: 45,
      urgent: true,
    },
    {
      id: "3",
      title: "Mobile App UI Design",
      company: "Design Co",
      logo: "/generic-company-logo.png",
      duration: "1 week",
      payment: "₹6,500",
      difficulty: "Intermediate",
      skills: ["Figma", "UI Design", "Prototyping"],
      description: "Design a modern mobile app interface with user flow and prototypes.",
      deliverables: ["UI mockups", "Interactive prototype", "Design system"],
      rating: 4.7,
      completions: 18,
      urgent: false,
    },
    {
      id: "4",
      title: "API Integration & Testing",
      company: "TechFlow",
      logo: "/tech-flow-logo.jpg",
      duration: "2-3 days",
      payment: "₹4,000",
      difficulty: "Beginner",
      skills: ["REST APIs", "Postman", "JavaScript"],
      description: "Integrate third-party APIs and create comprehensive test suites.",
      deliverables: ["API integration", "Test documentation", "Error handling"],
      rating: 4.6,
      completions: 67,
      urgent: true,
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-primary/10 text-primary"
      case "Intermediate":
        return "bg-accent/10 text-accent"
      case "Advanced":
        return "bg-destructive/10 text-destructive"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Micro-Internships</h2>
        <p className="text-muted-foreground">
          Short-term, project-based opportunities perfect for gaining experience and building your portfolio. Complete
          tasks in days or weeks, not months.
        </p>
      </div>

      {/* Benefits Banner */}
      <Card className="border-0 shadow-lg mb-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">Quick Start</div>
              <div className="text-sm text-muted-foreground">Begin immediately</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">Fast Payment</div>
              <div className="text-sm text-muted-foreground">Get paid on completion</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">Build Portfolio</div>
              <div className="text-sm text-muted-foreground">Real-world projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">Flexible</div>
              <div className="text-sm text-muted-foreground">Work on your schedule</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Micro-Internships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {microInternships.map((micro) => (
          <Card key={micro.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={micro.logo || "/placeholder.svg"} />
                    <AvatarFallback className="text-xs">{micro.company.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg leading-tight">{micro.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{micro.company}</p>
                  </div>
                </div>
                {micro.urgent && (
                  <Badge className="bg-destructive/10 text-destructive">
                    <Zap className="h-3 w-3 mr-1" />
                    Urgent
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{micro.description}</p>

              {/* Skills */}
              <div>
                <h4 className="font-semibold mb-2 text-sm">Skills Required</h4>
                <div className="flex flex-wrap gap-1">
                  {micro.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="font-semibold mb-2 text-sm">Deliverables</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {micro.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{micro.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold">{micro.payment}</span>
                </div>
              </div>

              {/* Rating and Difficulty */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{micro.rating}</span>
                  <span className="text-xs text-muted-foreground">({micro.completions} completed)</span>
                </div>
                <Badge className={getDifficultyColor(micro.difficulty)}>{micro.difficulty}</Badge>
              </div>

              <Button className="w-full">Apply for Micro-Internship</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" size="lg" className="bg-transparent">
          View All Micro-Internships
        </Button>
      </div>
    </section>
  )
}
