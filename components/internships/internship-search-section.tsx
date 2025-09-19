"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Briefcase } from "lucide-react"
import { useState } from "react"

export function InternshipSearchSection() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const quickFilters = [
    { id: "remote", label: "Remote", count: 245 },
    { id: "paid", label: "Paid", count: 189 },
    { id: "tech", label: "Technology", count: 156 },
    { id: "startup", label: "Startup", count: 98 },
    { id: "fulltime", label: "Full-time", count: 134 },
    { id: "parttime", label: "Part-time", count: 87 },
  ]

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) => (prev.includes(filterId) ? prev.filter((id) => id !== filterId) : [...prev, filterId]))
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Your Next Internship</h2>
        <p className="text-muted-foreground">
          Search through thousands of verified internship opportunities from top companies across India.
        </p>
      </div>

      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <Tabs defaultValue="search" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="search">Search Internships</TabsTrigger>
              <TabsTrigger value="ai-match">AI-Powered Matching</TabsTrigger>
            </TabsList>

            <TabsContent value="search" className="space-y-6 mt-6">
              {/* Main Search */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search by role, company, or skills..." className="pl-10" />
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                  <Select>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 months</SelectItem>
                      <SelectItem value="3-6">3-6 months</SelectItem>
                      <SelectItem value="6-12">6-12 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="space-y-3">
                <h3 className="font-semibold text-sm">Quick Filters</h3>
                <div className="flex flex-wrap gap-2">
                  {quickFilters.map((filter) => (
                    <Button
                      key={filter.id}
                      variant={activeFilters.includes(filter.id) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleFilter(filter.id)}
                      className={activeFilters.includes(filter.id) ? "" : "bg-transparent"}
                    >
                      {filter.label}
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {filter.count}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Advanced Filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-border">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Company Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Startup (1-50)</SelectItem>
                    <SelectItem value="medium">Medium (51-500)</SelectItem>
                    <SelectItem value="large">Large (500+)</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Stipend Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unpaid">Unpaid</SelectItem>
                    <SelectItem value="5-15">₹5,000 - ₹15,000</SelectItem>
                    <SelectItem value="15-25">₹15,000 - ₹25,000</SelectItem>
                    <SelectItem value="25+">₹25,000+</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="bg-transparent">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="ai-match" className="space-y-6 mt-6">
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Matching</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Let our AI analyze your profile, skills, and preferences to find the perfect internship matches for
                  you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">92%</div>
                    <div className="text-sm text-muted-foreground">Match Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-accent">3.2x</div>
                    <div className="text-sm text-muted-foreground">Higher Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <div className="text-sm text-muted-foreground">Average Response</div>
                  </div>
                </div>
                <Button size="lg">Get AI Recommendations</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
