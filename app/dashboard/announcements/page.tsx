import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Bell, AlertTriangle, Info, CheckCircle, TrendingUp, Shield, Calendar, ExternalLink } from "lucide-react"

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: "New Trading Pairs Added",
      content:
        "We've added support for 5 new trading pairs including MATIC/USDT, DOT/BTC, and more. Start trading now with competitive fees.",
      type: "feature",
      date: "2024-01-15",
      time: "10:30 AM",
      important: false,
      read: false,
    },
    {
      id: 2,
      title: "Scheduled Maintenance - January 20th",
      content:
        "We will be performing scheduled maintenance on January 20th from 2:00 AM to 4:00 AM UTC. Trading will be temporarily unavailable during this time.",
      type: "maintenance",
      date: "2024-01-12",
      time: "3:45 PM",
      important: true,
      read: true,
    },
    {
      id: 3,
      title: "Enhanced Security Features",
      content:
        "New security features including advanced 2FA options and withdrawal whitelist are now available. Update your security settings to take advantage of these features.",
      type: "security",
      date: "2024-01-10",
      time: "9:15 AM",
      important: false,
      read: true,
    },
    {
      id: 4,
      title: "Trading Fee Reduction",
      content:
        "We're reducing trading fees by 20% for all VIP users. The new fee structure will take effect immediately.",
      type: "update",
      date: "2024-01-08",
      time: "2:20 PM",
      important: false,
      read: true,
    },
    {
      id: 5,
      title: "API Rate Limits Update",
      content:
        "We've increased API rate limits for all users. Pro users now get 2000 requests per minute, and standard users get 1000 requests per minute.",
      type: "technical",
      date: "2024-01-05",
      time: "11:00 AM",
      important: false,
      read: true,
    },
    {
      id: 6,
      title: "Holiday Trading Hours",
      content:
        "Please note that customer support will have limited hours during the holiday season. Emergency issues will still be addressed promptly.",
      type: "info",
      date: "2023-12-20",
      time: "4:30 PM",
      important: false,
      read: true,
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "feature":
        return <TrendingUp className="h-4 w-4" />
      case "maintenance":
        return <AlertTriangle className="h-4 w-4" />
      case "security":
        return <Shield className="h-4 w-4" />
      case "update":
        return <CheckCircle className="h-4 w-4" />
      case "technical":
        return <Info className="h-4 w-4" />
      default:
        return <Info className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "feature":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "maintenance":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
      case "security":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      case "update":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
      case "technical":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    }
  }

  const unreadCount = announcements.filter((a) => !a.read).length
  const importantCount = announcements.filter((a) => a.important).length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Announcements</h1>
          <p className="text-muted-foreground">Stay updated with the latest news and updates from CryptoBull.</p>
        </div>
        <div className="flex items-center space-x-2">
          {unreadCount > 0 && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
              {unreadCount} unread
            </Badge>
          )}
          <Button variant="outline" size="sm">
            Mark All as Read
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Bell className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{announcements.length}</p>
                <p className="text-sm text-muted-foreground">Total</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{unreadCount}</p>
                <p className="text-sm text-muted-foreground">Unread</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{importantCount}</p>
                <p className="text-sm text-muted-foreground">Important</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Announcements List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="h-5 w-5" />
            <span>Recent Announcements</span>
          </CardTitle>
          <CardDescription>Latest updates and important information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {announcements.map((announcement, index) => (
              <div key={announcement.id}>
                <div
                  className={`space-y-3 ${!announcement.read ? "p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-500" : ""}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${getTypeColor(announcement.type)}`}
                      >
                        {getTypeIcon(announcement.type)}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-2">
                          <h3
                            className={`font-semibold ${!announcement.read ? "text-blue-900 dark:text-blue-100" : ""}`}
                          >
                            {announcement.title}
                          </h3>
                          {announcement.important && (
                            <Badge variant="destructive" className="text-xs">
                              Important
                            </Badge>
                          )}
                          {!announcement.read && (
                            <Badge
                              variant="secondary"
                              className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                            >
                              New
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{announcement.content}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{announcement.date}</span>
                          </div>
                          <span>{announcement.time}</span>
                          <Badge variant="outline" className={`text-xs ${getTypeColor(announcement.type)}`}>
                            {announcement.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {!announcement.read && (
                        <Button variant="ghost" size="sm">
                          Mark as Read
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                {index < announcements.length - 1 && <Separator className="my-6" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Manage how you receive announcements and updates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-medium">Email Notifications</h4>
              <div className="space-y-2 text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Security updates</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Maintenance notifications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>New features</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Marketing updates</span>
                </label>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Push Notifications</h4>
              <div className="space-y-2 text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Important announcements</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Trading updates</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Price alerts</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>System status</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button>Save Preferences</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
