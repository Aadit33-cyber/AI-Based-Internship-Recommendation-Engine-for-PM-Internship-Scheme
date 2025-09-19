"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Clock, DollarSign, Users, Heart, ExternalLink, Bookmark } from "lucide-react"
import { useState } from "react"

export function RecommendedInternshipsSection() {
  const [savedInternships, setSavedInternships] = useState<string[]>([])

  const internships = [
    {
      id: "1",
      title: "Software Development Intern",
      company: "TechCorp Solutions",
      logo: "/abstract-tech-logo.png",
      location: "Bangalore, India",
      type: "Remote",
      duration: "3-6 months",
      stipend: "₹25,000/month",
      match: 94,
      applicants: 156,
      posted: "2 days ago",
      skills: ["React", "Node.js", "JavaScript", "MongoDB"],
      description:
        "Join our dynamic team to work on cutting-edge web applications. You'll collaborate with senior developers and gain hands-on experience with modern tech stack.",
      requirements: ["Computer Science background", "Strong programming skills", "Team player"],
      verified: true,
    },
    {
      id: "2",
      title: "Data Science Intern",
      company: "Analytics Pro",
      logo: "/analytics-company-logo.png",
      location: "Mumbai, India",
      type: "Hybrid",
      duration: "4-6 months",
      stipend: "₹30,000/month",
      match: 89,
      applicants: 89,
      posted: "1 day ago",
      skills: ["Python", "Machine Learning", "SQL", "Pandas"],
      description:
        "Work with real-world datasets and build predictive models. Perfect opportunity to apply your data science knowledge in a business environment.",
      requirements: ["Statistics background", "Python proficiency", "Analytical mindset"],
      verified: true,
    },
    {
      id: "3",
      title: "UI/UX Design Intern",
      company: "Creative Studios",
      logo: "/design-studio-logo.png",
      location: "Delhi, India",
      type: "On-site",
      duration: "2-4 months",
      stipend: "₹20,000/month",
      match: 82,
      applicants: 234,
      posted: "3 days ago",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      description:
        "Design user-centered digital experiences for our diverse client portfolio. Learn from experienced designers and build an impressive portfolio.",
      requirements: ["Design portfolio", "Figma experience", "Creative thinking"],
      verified: true,
    },
  ]

  const toggleSave = (internshipId: string) => {
    setSavedInternships((prev) =>
      prev.includes(internshipId) ? prev.filter((id) => id !== internshipId) : [...prev, internshipId],
    )
  }

  const getMatchColor = (match: number) => {
    if (match >= 90) return "text-primary"
    if (match >= 80) return "text-accent"
    return "text-muted-foreground"
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Recommended for You</h2>
        <p className="text-muted-foreground">
          Based on your profile and preferences, here are the top internship matches curated by our AI.
        </p>
      </div>

      <div className="space-y-6">
        {internships.map((internship) => (
          <Card key={internship.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Company Info */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={internship.logo || "/placeholder.svg"} />
                        <AvatarFallback>{internship.company.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-xl font-bold">{internship.title}</h3>
                          {internship.verified && (
                            <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground font-medium">{internship.company}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{internship.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{internship.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>{internship.stipend}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getMatchColor(internship.match)}`}>{internship.match}%</div>
                      <div className="text-xs text-muted-foreground">Match</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{internship.description}</p>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Requirements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {internship.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-accent font-bold">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{internship.applicants} applicants</span>
                      </div>
                      <span>Posted {internship.posted}</span>
                    </div>
                    <Badge variant="outline">{internship.type}</Badge>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button className="w-full">Apply Now</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" onClick={() => toggleSave(internship.id)}>
                    {savedInternships.includes(internship.id) ? (
                      <Heart className="h-4 w-4 mr-2 fill-current text-red-500" />
                    ) : (
                      <Bookmark className="h-4 w-4 mr-2" />
                    )}
                    {savedInternships.includes(internship.id) ? "Saved" : "Save"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" size="lg" className="bg-transparent">
          Load More Internships
        </Button>
      </div>
    </section>
  )
}
