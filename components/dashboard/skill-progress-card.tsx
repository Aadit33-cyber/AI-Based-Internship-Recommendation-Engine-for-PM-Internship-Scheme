import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Code, Palette, BarChart, Globe } from "lucide-react"

export function SkillProgressCard() {
  const skills = [
    {
      icon: Code,
      name: "JavaScript",
      level: "Advanced",
      progress: 85,
      color: "text-primary",
    },
    {
      icon: Globe,
      name: "React",
      level: "Intermediate",
      progress: 70,
      color: "text-accent",
    },
    {
      icon: BarChart,
      name: "Data Analysis",
      level: "Beginner",
      progress: 45,
      color: "text-primary",
    },
    {
      icon: Palette,
      name: "UI/UX Design",
      level: "Beginner",
      progress: 30,
      color: "text-accent",
    },
  ]

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Skill Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <skill.icon className={`h-4 w-4 ${skill.color}`} />
                  <span className="font-medium text-sm">{skill.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{skill.level}</span>
              </div>
              <Progress value={skill.progress} className="h-2" />
              <div className="text-right">
                <span className="text-xs font-semibold">{skill.progress}%</span>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
          Take Skill Assessment
        </Button>
      </CardContent>
    </Card>
  )
}
