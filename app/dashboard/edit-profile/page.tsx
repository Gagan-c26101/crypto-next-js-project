"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Camera, Save, User } from "lucide-react"

export default function EditProfilePage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Profile</h1>
        <p className="text-muted-foreground">Manage your account settings and profile information.</p>
      </div>

      <div className="grid gap-6">
        {/* Profile Picture */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
            <CardDescription>Update your profile picture to personalize your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback>
                  <User className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  Change Picture
                </Button>
                <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max size 2MB.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your personal details and contact information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" defaultValue="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" defaultValue="john.doe@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" defaultValue="+1 (555) 123-4567" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself..."
                defaultValue="Cryptocurrency enthusiast and trader with 5+ years of experience in digital assets."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Account Status */}
        <Card>
          <CardHeader>
            <CardTitle>Account Status</CardTitle>
            <CardDescription>Your current account verification and status information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Verification</p>
                <p className="text-sm text-muted-foreground">Your email is verified</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                Verified
              </Badge>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Phone Verification</p>
                <p className="text-sm text-muted-foreground">Your phone number is verified</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                Verified
              </Badge>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Identity Verification</p>
                <p className="text-sm text-muted-foreground">Complete KYC verification</p>
              </div>
              <Badge
                variant="secondary"
                className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
              >
                Pending
              </Badge>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground">Enhanced security enabled</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                Enabled
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Save Changes */}
        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={isLoading}>
            <Save className="h-4 w-4 mr-2" />
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>
    </div>
  )
}
