"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Shield, Smartphone, Key, Lock, Eye, AlertTriangle, CheckCircle, Globe } from "lucide-react"

export default function SecurityPage() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [loginAlerts, setLoginAlerts] = useState(true)

  const loginSessions = [
    {
      device: "Chrome on Windows",
      location: "New York, US",
      ip: "192.168.1.1",
      lastActive: "Active now",
      current: true,
    },
    {
      device: "Safari on iPhone",
      location: "New York, US",
      ip: "192.168.1.2",
      lastActive: "2 hours ago",
      current: false,
    },
    {
      device: "Chrome on Android",
      location: "Los Angeles, US",
      ip: "10.0.0.1",
      lastActive: "1 day ago",
      current: false,
    },
  ]

  const securityEvents = [
    {
      event: "Password changed",
      time: "2 hours ago",
      status: "success",
      ip: "192.168.1.1",
    },
    {
      event: "Login from new device",
      time: "1 day ago",
      status: "warning",
      ip: "10.0.0.1",
    },
    {
      event: "2FA enabled",
      time: "3 days ago",
      status: "success",
      ip: "192.168.1.1",
    },
    {
      event: "Failed login attempt",
      time: "1 week ago",
      status: "error",
      ip: "203.0.113.1",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Security</h1>
        <p className="text-muted-foreground">Manage your account security settings and monitor activity.</p>
      </div>

      {/* Security Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Security Overview</span>
          </CardTitle>
          <CardDescription>Your account security status and recommendations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground">Enabled via authenticator app</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
              Secure
            </Badge>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium">Strong Password</p>
                <p className="text-sm text-muted-foreground">Last changed 2 hours ago</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
              Strong
            </Badge>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="font-medium">Email Verification</p>
                <p className="text-sm text-muted-foreground">Verified but consider backup email</p>
              </div>
            </div>
            <Badge
              variant="secondary"
              className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
            >
              Good
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Two-Factor Authentication */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Smartphone className="h-5 w-5" />
              <span>Two-Factor Authentication</span>
            </CardTitle>
            <CardDescription>Add an extra layer of security to your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Authenticator App</p>
                <p className="text-sm text-muted-foreground">{twoFactorEnabled ? "Enabled" : "Disabled"}</p>
              </div>
              <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
            </div>

            <Separator />

            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Key className="h-4 w-4 mr-2" />
                View Recovery Codes
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Smartphone className="h-4 w-4 mr-2" />
                Reconfigure Authenticator
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Password Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lock className="h-5 w-5" />
              <span>Password Settings</span>
            </CardTitle>
            <CardDescription>Manage your account password and security</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>

            <Button className="w-full">Update Password</Button>
          </CardContent>
        </Card>
      </div>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Security Notifications</CardTitle>
          <CardDescription>Choose how you want to be notified about security events</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive security alerts via email</p>
            </div>
            <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">SMS Notifications</p>
              <p className="text-sm text-muted-foreground">Receive security alerts via SMS</p>
            </div>
            <Switch checked={smsNotifications} onCheckedChange={setSmsNotifications} />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Login Alerts</p>
              <p className="text-sm text-muted-foreground">Get notified of new device logins</p>
            </div>
            <Switch checked={loginAlerts} onCheckedChange={setLoginAlerts} />
          </div>
        </CardContent>
      </Card>

      {/* Active Sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5" />
            <span>Active Sessions</span>
          </CardTitle>
          <CardDescription>Manage your active login sessions across devices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {loginSessions.map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <p className="font-medium">{session.device}</p>
                    {session.current && (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      >
                        Current
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {session.location} • {session.ip}
                  </p>
                  <p className="text-xs text-muted-foreground">{session.lastActive}</p>
                </div>
                {!session.current && (
                  <Button variant="outline" size="sm">
                    Revoke
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="h-5 w-5" />
            <span>Recent Security Events</span>
          </CardTitle>
          <CardDescription>Monitor recent security-related activities on your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityEvents.map((event, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                <div
                  className={`w-2 h-2 rounded-full ${
                    event.status === "success"
                      ? "bg-green-500"
                      : event.status === "warning"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                />
                <div className="flex-1">
                  <p className="font-medium">{event.event}</p>
                  <p className="text-sm text-muted-foreground">
                    {event.time} • IP: {event.ip}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={
                    event.status === "success"
                      ? "border-green-200 text-green-800"
                      : event.status === "warning"
                        ? "border-yellow-200 text-yellow-800"
                        : "border-red-200 text-red-800"
                  }
                >
                  {event.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
