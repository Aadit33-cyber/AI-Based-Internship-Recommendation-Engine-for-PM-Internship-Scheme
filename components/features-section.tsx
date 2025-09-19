import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, MapPin, Briefcase, Award, MessageSquare, Users, Brain, Target, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: FileText,
      title: "Resume & Project Analyzer",
      description:
        "AI-powered resume scoring, ATS compatibility check, and project evaluation with gap identification.",
      badge: "AI-Powered",
      color: "text-primary",
    },
    {
      icon: MapPin,
      title: "Career Path Navigator",
      description: "Long-term advisory with predictive analysis and multi-disciplinary career mapping.",
      badge: "Predictive",
      color: "text-accent",
    },
    {
      icon: Briefcase,
      title: "Internship Engine",
      description: "Smart matching with micro-internships, verified company listings, and placement pipeline.",
      badge: "Smart Matching",
      color: "text-primary",
    },
    {
      icon: Award,
      title: "Skill Tests & Rankings",
      description: "Domain-wise assessments with AI evaluation, leaderboards, and verified certifications.",
      badge: "Gamified",
      color: "text-accent",
    },
    {
      icon: MessageSquare,
      title: "AI Interview Coach",
      description: "Voice & video mock interviews with real-time feedback on confidence and technical accuracy.",
      badge: "Real-time",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "AI mentor matching, community forums, and collaborative learning opportunities.",
      badge: "Community",
      color: "text-accent",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Platform Features
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Everything You Need for <span className="text-primary">Career Success</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Our comprehensive platform integrates all the tools students need to build successful careers, from resume
            optimization to industry mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${feature.color}`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovation highlights */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Innovation Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-6 rounded-lg bg-background border">
              <Brain className="h-8 w-8 text-primary" />
              <div className="text-left">
                <h4 className="font-semibold">AI Personalization</h4>
                <p className="text-sm text-muted-foreground">Every recommendation is customized</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-6 rounded-lg bg-background border">
              <Target className="h-8 w-8 text-accent" />
              <div className="text-left">
                <h4 className="font-semibold">Multi-Disciplinary</h4>
                <p className="text-sm text-muted-foreground">Engineering, Law, Arts, Management</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-6 rounded-lg bg-background border">
              <Zap className="h-8 w-8 text-primary" />
              <div className="text-left">
                <h4 className="font-semibold">Micro-Internships</h4>
                <p className="text-sm text-muted-foreground">Task-based real-world experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
