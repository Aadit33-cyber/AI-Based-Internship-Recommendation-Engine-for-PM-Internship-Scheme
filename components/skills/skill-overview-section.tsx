"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Target, TrendingUp, Award, Zap } from "lucide-react"

export function SkillOverviewSection() {
  const userStats = {
    totalTests: 12,
    averageScore: 78,
    rank: 156,
    totalUsers: 10000,
    certifications: 3,
    streak: 7,
  }

  const recentAchievements = [
    {
      title: "JavaScript Expert",
      description: "Scored 95% in Advanced JavaScript",
      icon: Trophy,
      color: "text-yellow-500",
      date: "2 days ago",
    },
    {
      title: "Problem Solver",
      description: "Completed 10 coding challenges",
      icon: Target,
      color: "text-primary",
      date: "1 week ago",
    },
    {
      title: "Rising Star",
      description: "Improved rank by 50 positions",
      icon: TrendingUp,
      color: "text-accent",
      date: "2 weeks ago",
    },
  ]

  const skillLevels = [
    { skill: "JavaScript", level: 95, category: "Expert" },
    { skill: "React", level: 88, category: "Advanced" },
    { skill: "Python", level: 72, category: "Intermediate" },
    { skill: "SQL", level: 65, category: "Intermediate" },
  ]

  const getLevelColor = (level: number) => {
    if (level >= 90) return "text-yellow-500"
    if (level >= 75) return "text-primary"
    if (level >= 60) return "text-accent"
    return "text-muted-foreground"
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Skill Profile</h2>
        <p className="text-muted-foreground">
          Track your progress, view achievements, and see how you rank against other learners.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stats Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">{userStats.totalTests}</div>
                <div className="text-xs text-muted-foreground">Tests Taken</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-1">{userStats.averageScore}%</div>
                <div className="text-xs text-muted-foreground">Avg Score</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">#{userStats.rank}</div>
                <div className="text-xs text-muted-foreground">Global Rank</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-1">{userStats.certifications}</div>
                <div className="text-xs text-muted-foreground">Certifications</div>
              </CardContent>
            </Card>
          </div>

          {/* Skill Levels */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Top Skills</h3>
                <Button variant="outline" size="sm" className="bg-transparent">
                  View All Skills
                </Button>
              </div>
              <div className="space-y-4">
                {skillLevels.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium">{skill.skill}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                      <span className={`font-bold ${getLevelColor(skill.level)}`}>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ready for Your Next Challenge?</h3>
                  <p className="text-muted-foreground mb-4">
                    Take a skill test to improve your ranking and earn certifications.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-8 w-8 text-accent" />
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{userStats.streak}</div>
                    <div className="text-xs text-muted-foreground">Day Streak</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1">
                  <Target className="h-4 w-4 mr-2" />
                  Take Skill Test
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Award className="h-4 w-4 mr-2" />
                  Browse Certifications
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Achievements */}
        <div className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
              <div className="space-y-4">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-muted/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <achievement.icon className={`h-5 w-5 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                View All Achievements
              </Button>
            </CardContent>
          </Card>

          {/* Recommended Tests */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recommended Tests</h3>
              <div className="space-y-3">
                {[
                  { name: "Advanced React", difficulty: "Hard", time: "45 min" },
                  { name: "System Design", difficulty: "Expert", time: "60 min" },
                  { name: "Data Structures", difficulty: "Medium", time: "30 min" },
                ].map((test, index) => (
                  <div key={index} className="p-3 border border-border rounded-lg hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{test.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {test.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{test.time}</span>
                      <Button size="sm" variant="ghost" className="h-6 px-2">
                        Start
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
