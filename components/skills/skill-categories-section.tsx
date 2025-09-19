"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Palette, BarChart, Briefcase, Heart, Scale, Cpu, Globe, Play, Clock, Users } from "lucide-react"

export function SkillCategoriesSection() {
  const categories = [
    {
      id: "programming",
      name: "Programming",
      icon: Code,
      color: "text-primary",
      tests: 45,
      description: "Test your coding skills across multiple languages and frameworks",
    },
    {
      id: "design",
      name: "Design",
      icon: Palette,
      color: "text-accent",
      tests: 28,
      description: "Evaluate your UI/UX design and creative problem-solving abilities",
    },
    {
      id: "data-science",
      name: "Data Science",
      icon: BarChart,
      color: "text-primary",
      tests: 32,
      description: "Assess your data analysis, machine learning, and statistics knowledge",
    },
    {
      id: "business",
      name: "Business",
      icon: Briefcase,
      color: "text-accent",
      tests: 25,
      description: "Test your business acumen, strategy, and management skills",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Heart,
      color: "text-primary",
      tests: 18,
      description: "Evaluate medical knowledge and healthcare industry understanding",
    },
    {
      id: "law",
      name: "Law",
      icon: Scale,
      color: "text-accent",
      tests: 15,
      description: "Test legal knowledge, reasoning, and case analysis skills",
    },
    {
      id: "engineering",
      name: "Engineering",
      icon: Cpu,
      color: "text-primary",
      tests: 38,
      description: "Assess technical engineering concepts and problem-solving",
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: Globe,
      color: "text-accent",
      tests: 22,
      description: "Evaluate digital marketing, branding, and campaign strategy skills",
    },
  ]

  const featuredTests = [
    {
      id: "1",
      title: "JavaScript Fundamentals",
      category: "Programming",
      difficulty: "Beginner",
      duration: "30 min",
      questions: 25,
      participants: 1250,
      rating: 4.8,
      description: "Test your understanding of JavaScript basics, ES6 features, and DOM manipulation.",
    },
    {
      id: "2",
      title: "React Advanced Concepts",
      category: "Programming",
      difficulty: "Advanced",
      duration: "45 min",
      questions: 30,
      participants: 890,
      rating: 4.9,
      description: "Deep dive into React hooks, context, performance optimization, and testing.",
    },
    {
      id: "3",
      title: "Machine Learning Algorithms",
      category: "Data Science",
      difficulty: "Intermediate",
      duration: "60 min",
      questions: 40,
      participants: 567,
      rating: 4.7,
      description: "Comprehensive test covering supervised, unsupervised, and reinforcement learning.",
    },
    {
      id: "4",
      title: "UI/UX Design Principles",
      category: "Design",
      difficulty: "Intermediate",
      duration: "35 min",
      questions: 28,
      participants: 723,
      rating: 4.6,
      description: "Evaluate your knowledge of design systems, user research, and prototyping.",
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
      case "Expert":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Skill Categories</h2>
        <p className="text-muted-foreground">
          Choose from diverse skill categories and take tests tailored to your field of interest.
        </p>
      </div>

      <Tabs defaultValue="categories" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="categories">Browse Categories</TabsTrigger>
          <TabsTrigger value="featured">Featured Tests</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-8 mt-8">
          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {category.tests} tests
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Explore Tests
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="featured" className="space-y-6 mt-8">
          {/* Featured Tests */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredTests.map((test) => (
              <Card key={test.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{test.title}</h3>
                      <Badge variant="outline" className="mb-2 text-xs">
                        {test.category}
                      </Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed">{test.description}</p>
                    </div>
                    <Badge className={getDifficultyColor(test.difficulty)}>{test.difficulty}</Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div className="p-2 bg-muted/30 rounded-lg">
                      <Clock className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                      <div className="text-xs font-semibold">{test.duration}</div>
                    </div>
                    <div className="p-2 bg-muted/30 rounded-lg">
                      <div className="text-sm font-bold text-primary">{test.questions}</div>
                      <div className="text-xs text-muted-foreground">Questions</div>
                    </div>
                    <div className="p-2 bg-muted/30 rounded-lg">
                      <Users className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                      <div className="text-xs font-semibold">{test.participants}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(test.rating) ? "text-yellow-500" : "text-muted-foreground"
                            }`}
                          >
                            ★
                          </div>
                        ))}
                      </div>
                      <span className="text-sm font-semibold">{test.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{test.participants} taken</span>
                  </div>

                  <Button className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Start Test
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="bg-transparent">
              View All Featured Tests
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
