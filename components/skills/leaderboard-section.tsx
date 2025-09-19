"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Medal, Award, TrendingUp, Crown } from "lucide-react"

export function LeaderboardSection() {
  const globalLeaderboard = [
    {
      rank: 1,
      name: "Arjun Sharma",
      avatar: "/student-avatar-1.jpg",
      score: 2450,
      tests: 28,
      streak: 15,
      badges: ["JavaScript Expert", "React Master"],
      change: "+2",
    },
    {
      rank: 2,
      name: "Priya Patel",
      avatar: "/student-avatar-2.jpg",
      score: 2380,
      tests: 25,
      streak: 12,
      badges: ["Python Pro", "Data Scientist"],
      change: "0",
    },
    {
      rank: 3,
      name: "Rahul Kumar",
      avatar: "/student-avatar-3.jpg",
      score: 2290,
      tests: 22,
      streak: 8,
      badges: ["UI/UX Designer", "Creative"],
      change: "+1",
    },
    {
      rank: 4,
      name: "Sneha Gupta",
      avatar: "/student-avatar-4.jpg",
      score: 2180,
      tests: 20,
      streak: 10,
      badges: ["Java Expert", "Problem Solver"],
      change: "-1",
    },
    {
      rank: 5,
      name: "Vikram Singh",
      avatar: "/student-avatar-5.jpg",
      score: 2120,
      tests: 19,
      streak: 6,
      badges: ["ML Engineer", "Analytics"],
      change: "+3",
    },
  ]

  const weeklyLeaderboard = [
    {
      rank: 1,
      name: "Ananya Reddy",
      avatar: "/student-avatar-6.jpg",
      score: 450,
      tests: 5,
      change: "new",
    },
    {
      rank: 2,
      name: "Karthik Menon",
      avatar: "/student-avatar-7.jpg",
      score: 420,
      tests: 4,
      change: "+5",
    },
    {
      rank: 3,
      name: "Divya Nair",
      avatar: "/student-avatar-8.jpg",
      score: 380,
      tests: 4,
      change: "+2",
    },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />
      default:
        return <div className="w-5 h-5 flex items-center justify-center text-sm font-bold">#{rank}</div>
    }
  }

  const getChangeColor = (change: string) => {
    if (change === "new") return "text-primary"
    if (change.startsWith("+")) return "text-primary"
    if (change.startsWith("-")) return "text-destructive"
    return "text-muted-foreground"
  }

  const getChangeIcon = (change: string) => {
    if (change === "new") return "NEW"
    if (change.startsWith("+")) return `↗ ${change.slice(1)}`
    if (change.startsWith("-")) return `↘ ${change.slice(1)}`
    return "—"
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Leaderboards</h2>
        <p className="text-muted-foreground">
          See how you rank against other learners and compete for the top positions.
        </p>
      </div>

      <Tabs defaultValue="global" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="global">Global Rankings</TabsTrigger>
          <TabsTrigger value="weekly">This Week</TabsTrigger>
          <TabsTrigger value="categories">By Category</TabsTrigger>
        </TabsList>

        <TabsContent value="global" className="space-y-6 mt-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span>Global Leaderboard</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {globalLeaderboard.map((user, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-lg transition-colors ${
                      user.rank <= 3 ? "bg-gradient-to-r from-primary/5 to-accent/5" : "hover:bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {getRankIcon(user.rank)}
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{user.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{user.score} points</span>
                            <span>{user.tests} tests</span>
                            <span>{user.streak} day streak</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-semibold ${getChangeColor(user.change)}`}>
                            {getChangeIcon(user.change)}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {user.badges.slice(0, 2).map((badge, badgeIndex) => (
                          <Badge key={badgeIndex} variant="secondary" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-muted/30 rounded-lg text-center">
                <div className="text-sm text-muted-foreground mb-2">Your Current Rank</div>
                <div className="text-2xl font-bold text-primary">#156</div>
                <div className="text-sm text-muted-foreground">out of 10,000 users</div>
                <Button size="sm" className="mt-3">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Improve Rank
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weekly" className="space-y-6 mt-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span>Weekly Champions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyLeaderboard.map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-accent/5 to-primary/5"
                  >
                    <div className="flex items-center space-x-3">
                      {getRankIcon(user.rank)}
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{user.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{user.score} points this week</span>
                            <span>{user.tests} tests completed</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-semibold ${getChangeColor(user.change)}`}>
                            {getChangeIcon(user.change)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "JavaScript", leader: "Arjun Sharma", score: 98 },
              { category: "Python", leader: "Priya Patel", score: 96 },
              { category: "React", leader: "Rahul Kumar", score: 94 },
              { category: "Data Science", leader: "Sneha Gupta", score: 92 },
              { category: "UI/UX Design", leader: "Vikram Singh", score: 90 },
              { category: "Machine Learning", leader: "Ananya Reddy", score: 88 },
            ].map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">{category.category}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">{category.score}%</div>
                  <div className="text-sm text-muted-foreground mb-3">Top Score</div>
                  <div className="text-sm font-medium">{category.leader}</div>
                  <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                    View Rankings
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
