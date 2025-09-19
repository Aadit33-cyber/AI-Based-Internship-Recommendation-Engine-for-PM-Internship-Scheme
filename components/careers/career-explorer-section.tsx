"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Code, Palette, BarChart, Briefcase, Heart, Scale, Cpu, Globe } from "lucide-react"
import { useState } from "react"

export function CareerExplorerSection() {
  const [selectedField, setSelectedField] = useState<string>("")

  const fields = [
    { id: "technology", name: "Technology", icon: Code, color: "text-primary", count: 45 },
    { id: "design", name: "Design", icon: Palette, color: "text-accent", count: 28 },
    { id: "business", name: "Business", icon: Briefcase, color: "text-primary", count: 35 },
    { id: "data", name: "Data Science", icon: BarChart, color: "text-accent", count: 22 },
    { id: "healthcare", name: "Healthcare", icon: Heart, color: "text-primary", count: 18 },
    { id: "law", name: "Law", icon: Scale, color: "text-accent", count: 15 },
    { id: "engineering", name: "Engineering", icon: Cpu, color: "text-primary", count: 32 },
    { id: "marketing", name: "Marketing", icon: Globe, color: "text-accent", count: 25 },
  ]

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore Career Fields</h2>
        <p className="text-muted-foreground">
          Discover opportunities across diverse industries and find the perfect match for your interests and skills.
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="border-0 shadow-lg mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search careers, skills, or companies..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Experience Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
                <SelectItem value="executive">Executive</SelectItem>
              </SelectContent>
            </Select>
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
              </SelectContent>
            </Select>
            <Button>
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Career Fields Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {fields.map((field) => (
          <Card
            key={field.id}
            className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
              selectedField === field.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelectedField(field.id)}
          >
            <CardContent className="p-6 text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center`}>
                <field.icon className={`h-8 w-8 ${field.color}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{field.name}</h3>
              <Badge variant="secondary" className="mb-4">
                {field.count} careers
              </Badge>
              <p className="text-sm text-muted-foreground mb-4">
                Explore diverse opportunities in {field.name.toLowerCase()} with growth potential and competitive
                salaries.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Explore Field
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
