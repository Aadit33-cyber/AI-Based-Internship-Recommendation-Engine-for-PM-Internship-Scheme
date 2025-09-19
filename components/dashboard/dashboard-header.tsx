import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, Bell, Upload } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/professional-student-avatar.jpg" />
            <AvatarFallback className="text-lg font-semibold">AS</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Welcome back, Alex!</h1>
            <p className="text-muted-foreground">Computer Science Engineering • Final Year</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Profile Completion Banner */}
      <Card className="border-accent/20 bg-accent/5">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Upload className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Complete Your Profile</h3>
                <p className="text-sm text-muted-foreground">
                  Add your projects and skills to get better recommendations
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-accent">75%</div>
                <div className="text-xs text-muted-foreground">Complete</div>
              </div>
              <Button>Complete Profile</Button>
            </div>
          </div>
          <div className="mt-4 w-full bg-muted rounded-full h-2">
            <div className="bg-accent h-2 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
