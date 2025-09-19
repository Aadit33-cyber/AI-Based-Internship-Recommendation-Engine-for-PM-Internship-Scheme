"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileText, Zap } from "lucide-react"
import { useState } from "react"

export function ResumeUploadSection() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 3000)
  }

  return (
    <div className="space-y-6">
      {/* Upload Card */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Upload className="h-5 w-5 text-primary" />
            <span>Upload Your Resume</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* File Upload */}
          <div className="space-y-2">
            <Label htmlFor="resume-upload">Resume File</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <div className="space-y-2">
                <p className="text-sm font-medium">Drop your resume here or click to browse</p>
                <p className="text-xs text-muted-foreground">Supports PDF, DOC, DOCX (Max 5MB)</p>
              </div>
              <Input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setUploadedFile(e.target.files[0].name)
                  }
                }}
              />
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => document.getElementById("resume-upload")?.click()}
              >
                Choose File
              </Button>
            </div>
            {uploadedFile && (
              <div className="flex items-center space-x-2 text-sm text-primary">
                <FileText className="h-4 w-4" />
                <span>{uploadedFile}</span>
              </div>
            )}
          </div>

          {/* Job Role Selection */}
          <div className="space-y-2">
            <Label htmlFor="job-role">Target Job Role</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select the role you're applying for" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="software-engineer">Software Engineer</SelectItem>
                <SelectItem value="data-scientist">Data Scientist</SelectItem>
                <SelectItem value="product-manager">Product Manager</SelectItem>
                <SelectItem value="ui-ux-designer">UI/UX Designer</SelectItem>
                <SelectItem value="business-analyst">Business Analyst</SelectItem>
                <SelectItem value="marketing-specialist">Marketing Specialist</SelectItem>
                <SelectItem value="financial-analyst">Financial Analyst</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Experience Level */}
          <div className="space-y-2">
            <Label htmlFor="experience">Experience Level</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                <SelectItem value="student">Student/Intern</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Additional Context */}
          <div className="space-y-2">
            <Label htmlFor="context">Additional Context (Optional)</Label>
            <Textarea
              id="context"
              placeholder="Any specific companies or requirements you're targeting?"
              className="resize-none"
              rows={3}
            />
          </div>

          {/* Analyze Button */}
          <Button onClick={handleAnalyze} disabled={!uploadedFile || isAnalyzing} className="w-full" size="lg">
            {isAnalyzing ? (
              <>
                <Zap className="h-4 w-4 mr-2 animate-spin" />
                Analyzing Resume...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Analyze Resume
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card className="border-0 shadow-lg bg-accent/5">
        <CardHeader>
          <CardTitle className="text-lg">Quick Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start space-x-2">
              <span className="text-accent font-bold">•</span>
              <span>Use a clean, professional format with clear sections</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-accent font-bold">•</span>
              <span>Include relevant keywords from the job description</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-accent font-bold">•</span>
              <span>Quantify your achievements with numbers and metrics</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-accent font-bold">•</span>
              <span>Keep it concise - ideally 1-2 pages for most roles</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
