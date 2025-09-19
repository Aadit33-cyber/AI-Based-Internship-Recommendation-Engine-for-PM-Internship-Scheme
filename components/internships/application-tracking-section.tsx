"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, CheckCircle, XCircle, AlertCircle, Calendar, MessageSquare } from "lucide-react"

export function ApplicationTrackingSection() {
  const applications = [
    {
      id: "1",
      title: "Software Development Intern",
      company: "TechCorp Solutions",
      logo: "/abstract-tech-logo.png",
      status: "interview",
      stage: "Technical Interview",
      progress: 75,
      appliedDate: "Dec 5, 2024",
      nextStep: "Final interview scheduled for Dec 18",
      timeline: [
        { step: "Applied", completed: true, date: "Dec 5" },
        { step: "Resume Review", completed: true, date: "Dec 8" },
        { step: "Technical Interview", completed: true, date: "Dec 12" },
        { step: "Final Interview", completed: false, date: "Dec 18" },
        { step: "Decision", completed: false, date: "Dec 20" },
      ],
    },
    {
      id: "2",
      title: "Data Science Intern",
      company: "Analytics Pro",
      logo: "/analytics-company-logo.png",
      status: "pending",
      stage: "Resume Review",
      progress: 25,
      appliedDate: "Dec 10, 2024",
      nextStep: "Waiting for initial screening",
      timeline: [
        { step: "Applied", completed: true, date: "Dec 10" },
        { step: "Resume Review", completed: false, date: "Dec 15" },
        { step: "Technical Test", completed: false, date: "Dec 18" },
        { step: "Interview", completed: false, date: "Dec 22" },
        { step: "Decision", completed: false, date: "Dec 25" },
      ],
    },
    {
      id: "3",
      title: "UI/UX Design Intern",
      company: "Creative Studios",
      logo: "/design-studio-logo.png",
      status: "rejected",
      stage: "Application Rejected",
      progress: 100,
      appliedDate: "Dec 1, 2024",
      nextStep: "Application was not selected",
      timeline: [
        { step: "Applied", completed: true, date: "Dec 1" },
        { step: "Resume Review", completed: true, date: "Dec 3" },
        { step: "Portfolio Review", completed: true, date: "Dec 6" },
        { step: "Decision", completed: true, date: "Dec 8" },
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "interview":
        return <AlertCircle className="h-4 w-4 text-accent" />
      case "pending":
        return <Clock className="h-4 w-4 text-muted-foreground" />
      case "accepted":
        return <CheckCircle className="h-4 w-4 text-primary" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-destructive" />
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "interview":
        return "bg-accent/10 text-accent"
      case "pending":
        return "bg-muted text-muted-foreground"
      case "accepted":
        return "bg-primary/10 text-primary"
      case "rejected":
        return "bg-destructive/10 text-destructive"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "interview":
        return "In Progress"
      case "pending":
        return "Under Review"
      case "accepted":
        return "Accepted"
      case "rejected":
        return "Not Selected"
      default:
        return "Unknown"
    }
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Application Tracking</h2>
        <p className="text-muted-foreground">
          Keep track of all your internship applications and stay updated on their progress.
        </p>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="active">Active Applications</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6 mt-8">
          {applications
            .filter((app) => app.status === "interview" || app.status === "pending")
            .map((application) => (
              <Card key={application.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Application Info */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={application.logo || "/placeholder.svg"} />
                            <AvatarFallback className="text-xs">{application.company.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-bold text-lg">{application.title}</h3>
                            <p className="text-muted-foreground">{application.company}</p>
                            <p className="text-sm text-muted-foreground">Applied on {application.appliedDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(application.status)}
                          <Badge className={getStatusColor(application.status)}>
                            {getStatusLabel(application.status)}
                          </Badge>
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">Current Stage: {application.stage}</span>
                          <span className="text-sm text-muted-foreground">{application.progress}% Complete</span>
                        </div>
                        <Progress value={application.progress} className="h-2" />
                        <p className="text-sm text-muted-foreground">{application.nextStep}</p>
                      </div>

                      {/* Timeline */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm">Application Timeline</h4>
                        <div className="space-y-2">
                          {application.timeline.map((step, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div
                                className={`w-3 h-3 rounded-full ${
                                  step.completed ? "bg-primary" : "bg-muted border-2 border-muted-foreground"
                                }`}
                              />
                              <div className="flex-1 flex items-center justify-between">
                                <span
                                  className={`text-sm ${step.completed ? "text-foreground" : "text-muted-foreground"}`}
                                >
                                  {step.step}
                                </span>
                                <span className="text-xs text-muted-foreground">{step.date}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <Button className="w-full">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact Recruiter
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Interview
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        View Application
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-6 mt-8">
          {applications
            .filter((app) => app.status === "accepted" || app.status === "rejected")
            .map((application) => (
              <Card key={application.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={application.logo || "/placeholder.svg"} />
                        <AvatarFallback className="text-xs">{application.company.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold">{application.title}</h3>
                        <p className="text-muted-foreground">{application.company}</p>
                        <p className="text-sm text-muted-foreground">Applied on {application.appliedDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(application.status)}
                      <Badge className={getStatusColor(application.status)}>{getStatusLabel(application.status)}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-muted-foreground">Total Applications</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="text-sm text-muted-foreground">Interview Calls</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Application Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Technology Roles</span>
                <div className="flex items-center space-x-2">
                  <Progress value={70} className="w-20" />
                  <span className="text-sm">70%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Design Roles</span>
                <div className="flex items-center space-x-2">
                  <Progress value={20} className="w-20" />
                  <span className="text-sm">20%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Data Science Roles</span>
                <div className="flex items-center space-x-2">
                  <Progress value={10} className="w-20" />
                  <span className="text-sm">10%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
