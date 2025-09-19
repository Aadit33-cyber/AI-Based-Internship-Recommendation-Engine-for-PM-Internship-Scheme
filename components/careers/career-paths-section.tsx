"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, DollarSign, ArrowRight } from "lucide-react"

export function CareerPathsSection() {
  const careerPaths = [
    {
      id: "software-engineer",
      title: "Software Engineer",
      field: "Technology",
      match: 92,
      salary: "₹8-25 LPA",
      growth: "High",
      demand: "Very High",
      description: "Design, develop, and maintain software applications and systems.",
      skills: ["JavaScript", "Python", "React", "Node.js", "SQL"],
      companies: ["Google", "Microsoft", "Amazon", "Flipkart", "Zomato"],
      timeline: "6-12 months",
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      field: "Data Science",
      match: 87,
      salary: "₹10-30 LPA",
      growth: "Very High",
      demand: "High",
      description: "Analyze complex data to help organizations make informed decisions.",
      skills: ["Python", "R", "SQL", "Machine Learning", "Statistics"],
      companies: ["Netflix", "Uber", "Swiggy", "Paytm", "BYJU'S"],
      timeline: "8-15 months",
    },
    {
      id: "product-manager",
      title: "Product Manager",
      field: "Business",
      match: 78,
      salary: "₹12-35 LPA",
      growth: "High",
      demand: "High",
      description: "Guide product development from conception to launch and beyond.",
      skills: ["Strategy", "Analytics", "Communication", "Agile", "User Research"],
      companies: ["Meta", "LinkedIn", "Razorpay", "Ola", "PhonePe"],
      timeline: "12-18 months",
    },
  ]

  const getMatchColor = (match: number) => {
    if (match >= 90) return "text-primary"
    if (match >= 80) return "text-accent"
    return "text-muted-foreground"
  }

  const getGrowthBadge = (growth: string) => {
    const colors = {
      "Very High": "bg-primary/10 text-primary",
      High: "bg-accent/10 text-accent",
      Medium: "bg-muted text-muted-foreground",
    }
    return colors[growth as keyof typeof colors] || colors.Medium
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Recommended Career Paths</h2>
        <p className="text-muted-foreground">
          Based on your profile, skills, and interests, here are the top career paths we recommend for you.
        </p>
      </div>

      <Tabs defaultValue="recommendations" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recommendations">Top Matches</TabsTrigger>
          <TabsTrigger value="trending">Trending Careers</TabsTrigger>
          <TabsTrigger value="emerging">Emerging Fields</TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations" className="space-y-6 mt-8">
          {careerPaths.map((career) => (
            <Card key={career.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Career Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{career.title}</h3>
                        <Badge variant="outline" className="mb-3">
                          {career.field}
                        </Badge>
                        <p className="text-muted-foreground leading-relaxed">{career.description}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${getMatchColor(career.match)}`}>{career.match}%</div>
                        <div className="text-xs text-muted-foreground">Match Score</div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Companies */}
                    <div>
                      <h4 className="font-semibold mb-2">Top Hiring Companies</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.companies.slice(0, 3).map((company) => (
                          <Badge key={company} variant="outline">
                            {company}
                          </Badge>
                        ))}
                        <Badge variant="outline">+{career.companies.length - 3} more</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Career Stats */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                        <div className="font-semibold text-sm">{career.salary}</div>
                        <div className="text-xs text-muted-foreground">Salary Range</div>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-accent mx-auto mb-1" />
                        <div className="font-semibold text-sm">{career.growth}</div>
                        <div className="text-xs text-muted-foreground">Growth Rate</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Market Demand</span>
                        <Badge className={getGrowthBadge(career.demand)}>{career.demand}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Timeline to Entry</span>
                        <span className="font-semibold">{career.timeline}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full">
                        View Career Path
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        Save for Later
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="trending" className="space-y-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI/ML Engineer", growth: "+45%", field: "Technology" },
              { title: "Cloud Architect", growth: "+38%", field: "Technology" },
              { title: "Cybersecurity Analyst", growth: "+32%", field: "Security" },
              { title: "DevOps Engineer", growth: "+28%", field: "Technology" },
              { title: "Blockchain Developer", growth: "+25%", field: "Technology" },
              { title: "UX Researcher", growth: "+22%", field: "Design" },
            ].map((career, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">{career.title}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {career.field}
                  </Badge>
                  <div className="text-2xl font-bold text-primary mb-2">{career.growth}</div>
                  <div className="text-sm text-muted-foreground mb-4">Growth Rate</div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="emerging" className="space-y-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Quantum Computing Specialist",
                description: "Work on next-generation computing technologies",
                timeline: "2-3 years",
                demand: "Emerging",
              },
              {
                title: "Sustainability Consultant",
                description: "Help organizations achieve environmental goals",
                timeline: "1-2 years",
                demand: "Growing",
              },
              {
                title: "AR/VR Developer",
                description: "Create immersive digital experiences",
                timeline: "1-1.5 years",
                demand: "High",
              },
              {
                title: "Digital Health Specialist",
                description: "Bridge healthcare and technology",
                timeline: "2-3 years",
                demand: "Emerging",
              },
            ].map((career, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{career.title}</h3>
                  <p className="text-muted-foreground mb-4">{career.description}</p>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span>Timeline: {career.timeline}</span>
                    <Badge variant="outline">{career.demand}</Badge>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Get Early Access
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
