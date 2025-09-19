"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, Clock, RotateCcw, Download, Eye } from "lucide-react"

export function TestHistorySection() {
  const testHistory = [
    {
      id: "1",
      title: "Advanced JavaScript",
      category: "Programming",
      score: 95,
      maxScore: 100,
      status: "completed",
      date: "Dec 12, 2024",
      duration: "45 min",
      questions: 30,
      correct: 28,
      difficulty: "Advanced",
      certificate: true,
    },
    {
      id: "2",
      title: "React Fundamentals",
      category: "Programming",
      score: 88,
      maxScore: 100,
      status: "completed",
      date: "Dec 10, 2024",
      duration: "30 min",
      questions: 25,
      correct: 22,
      difficulty: "Intermediate",
      certificate: true,
    },
    {
      id: "3",
      title: "Python Data Structures",
      category: "Programming",
      score: 72,
      maxScore: 100,
      status: "completed",
      date: "Dec 8, 2024",
      duration: "40 min",
      questions: 35,
      correct: 25,
      difficulty: "Intermediate",
      certificate: false,
    },
    {
      id: "4",
      title: "Machine Learning Basics",
      category: "Data Science",
      score: 0,
      maxScore: 100,
      status: "in-progress",
      date: "Dec 15, 2024",
      duration: "60 min",
      questions: 40,
      correct: 0,
      difficulty: "Beginner",
      certificate: false,
    },
    {
      id: "5",
      title: "System Design Interview",
      category: "Programming",
      score: 45,
      maxScore: 100,
      status: "failed",
      date: "Dec 5, 2024",
      duration: "90 min",
      questions: 15,
      correct: 7,
      difficulty: "Expert",
      certificate: false,
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-primary" />
      case "failed":
        return <XCircle className="h-4 w-4 text-destructive" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-accent" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-primary/10 text-primary"
      case "failed":
        return "bg-destructive/10 text-destructive"
      case "in-progress":
        return "bg-accent/10 text-accent"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "failed":
        return "Needs Retry"
      case "in-progress":
        return "In Progress"
      default:
        return "Unknown"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-primary"
    if (score >= 75) return "text-accent"
    if (score >= 60) return "text-yellow-600"
    return "text-destructive"
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-primary/10 text-primary"
      case "Intermediate":
        return "bg-accent/10 text-accent"
      case "Advanced":
        return "bg-destructive/10 text-destructive"
      case "Expert":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Test History</h2>
        <p className="text-muted-foreground">
          Review your past test performances, download certificates, and retake tests to improve your scores.
        </p>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Recent Tests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {testHistory.map((test) => (
              <div key={test.id} className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Test Info */}
                  <div className="lg:col-span-2 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{test.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {test.category}
                          </Badge>
                          <Badge className={getDifficultyColor(test.difficulty)}>{test.difficulty}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(test.status)}
                        <Badge className={getStatusColor(test.status)}>{getStatusLabel(test.status)}</Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div>Date: {test.date}</div>
                      <div>Duration: {test.duration}</div>
                      <div>Questions: {test.questions}</div>
                      <div>Correct: {test.correct}</div>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="text-center">
                    {test.status !== "in-progress" ? (
                      <>
                        <div className={`text-3xl font-bold ${getScoreColor(test.score)}`}>{test.score}%</div>
                        <div className="text-sm text-muted-foreground mb-2">Score</div>
                        <Progress value={test.score} className="h-2" />
                        {test.certificate && (
                          <Badge variant="secondary" className="mt-2 text-xs bg-yellow-100 text-yellow-800">
                            Certificate Earned
                          </Badge>
                        )}
                      </>
                    ) : (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">In Progress</div>
                        <div className="text-sm text-muted-foreground">Resume test</div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    {test.status === "completed" && (
                      <>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          View Results
                        </Button>
                        {test.certificate && (
                          <Button variant="outline" size="sm" className="w-full bg-transparent">
                            <Download className="h-4 w-4 mr-2" />
                            Certificate
                          </Button>
                        )}
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Retake
                        </Button>
                      </>
                    )}
                    {test.status === "failed" && (
                      <>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          Review
                        </Button>
                        <Button size="sm" className="w-full">
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Retry Test
                        </Button>
                      </>
                    )}
                    {test.status === "in-progress" && (
                      <Button size="sm" className="w-full">
                        Continue Test
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="bg-transparent">
              Load More Tests
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
