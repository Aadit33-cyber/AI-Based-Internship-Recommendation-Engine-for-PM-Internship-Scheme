"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, AlertTriangle, TrendingUp, FileText, Target, Zap, Download, Share } from "lucide-react"

export function AnalysisResultsSection() {
  // Mock analysis results
  const overallScore = 78
  const atsScore = 85
  const contentScore = 72
  const formatScore = 80

  return (
    <div className="space-y-6">
      {/* Overall Score Card */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Analysis Results</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Overall Score */}
          <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">{overallScore}</div>
            <div className="text-lg font-semibold mb-1">Good Resume</div>
            <div className="text-sm text-muted-foreground">Your resume is competitive for most positions</div>
          </div>

          {/* Score Breakdown */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-medium">ATS Compatibility</span>
              </div>
              <div className="flex items-center space-x-3">
                <Progress value={atsScore} className="w-20" />
                <span className="text-sm font-semibold w-8">{atsScore}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Target className="h-5 w-5 text-accent" />
                <span className="font-medium">Content Quality</span>
              </div>
              <div className="flex items-center space-x-3">
                <Progress value={contentScore} className="w-20" />
                <span className="text-sm font-semibold w-8">{contentScore}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-medium">Format & Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <Progress value={formatScore} className="w-20" />
                <span className="text-sm font-semibold w-8">{formatScore}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
            <Button variant="outline" className="flex-1 bg-transparent">
              <Share className="h-4 w-4 mr-2" />
              Share Results
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analysis */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Detailed Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="strengths" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="strengths">Strengths</TabsTrigger>
              <TabsTrigger value="improvements">Improvements</TabsTrigger>
              <TabsTrigger value="keywords">Keywords</TabsTrigger>
            </TabsList>

            <TabsContent value="strengths" className="space-y-4 mt-6">
              <div className="space-y-3">
                <Alert className="border-primary/20 bg-primary/5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <AlertDescription>
                    <strong>Strong Technical Skills Section:</strong> Well-organized with relevant programming languages
                    and frameworks clearly listed.
                  </AlertDescription>
                </Alert>

                <Alert className="border-primary/20 bg-primary/5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <AlertDescription>
                    <strong>Quantified Achievements:</strong> Good use of metrics and numbers to demonstrate impact in
                    previous roles.
                  </AlertDescription>
                </Alert>

                <Alert className="border-primary/20 bg-primary/5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <AlertDescription>
                    <strong>ATS-Friendly Format:</strong> Clean structure with proper headings and bullet points that
                    parse well through applicant tracking systems.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>

            <TabsContent value="improvements" className="space-y-4 mt-6">
              <div className="space-y-3">
                <Alert className="border-destructive/20 bg-destructive/5">
                  <XCircle className="h-4 w-4 text-destructive" />
                  <AlertDescription>
                    <strong>Missing Professional Summary:</strong> Add a 2-3 line summary at the top highlighting your
                    key qualifications and career objectives.
                  </AlertDescription>
                </Alert>

                <Alert className="border-yellow-500/20 bg-yellow-500/5">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertDescription>
                    <strong>Weak Action Verbs:</strong> Replace passive language with strong action verbs like
                    "developed," "implemented," "optimized."
                  </AlertDescription>
                </Alert>

                <Alert className="border-yellow-500/20 bg-yellow-500/5">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertDescription>
                    <strong>Limited Project Details:</strong> Expand on your key projects with more technical details
                    and business impact.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>

            <TabsContent value="keywords" className="space-y-4 mt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Found Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Agile</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-accent">Suggested Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">REST APIs</Badge>
                    <Badge variant="outline">CI/CD</Badge>
                    <Badge variant="outline">Microservices</Badge>
                  </div>
                </div>

                <Alert className="border-accent/20 bg-accent/5">
                  <Target className="h-4 w-4 text-accent" />
                  <AlertDescription>
                    <strong>Keyword Optimization:</strong> Consider adding the suggested keywords if they match your
                    actual experience to improve ATS matching.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Job Match Analysis */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Job Role Match Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
            <div>
              <h4 className="font-semibold">Software Engineer</h4>
              <p className="text-sm text-muted-foreground">Target Role Match</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">82%</div>
              <div className="text-xs text-muted-foreground">Match Score</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span>Technical Skills Alignment</span>
              <span className="font-semibold">90%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Experience Level Match</span>
              <span className="font-semibold">75%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Industry Keywords</span>
              <span className="font-semibold">80%</span>
            </div>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            View Similar Roles
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
