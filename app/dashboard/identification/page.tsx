"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Upload, CheckCircle, Clock, AlertTriangle, User, CreditCard, Camera } from "lucide-react"

export default function IdentificationPage() {
  const [verificationLevel, setVerificationLevel] = useState(2)
  const [isUploading, setIsUploading] = useState(false)

  const verificationSteps = [
    {
      step: 1,
      title: "Email Verification",
      description: "Verify your email address",
      status: "completed",
      icon: CheckCircle,
    },
    {
      step: 2,
      title: "Phone Verification",
      description: "Verify your phone number",
      status: "completed",
      icon: CheckCircle,
    },
    {
      step: 3,
      title: "Identity Verification",
      description: "Upload government-issued ID",
      status: "pending",
      icon: Clock,
    },
    {
      step: 4,
      title: "Address Verification",
      description: "Provide proof of address",
      status: "not_started",
      icon: AlertTriangle,
    },
  ]

  const handleFileUpload = async (file: File) => {
    setIsUploading(true)
    // Simulate file upload
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsUploading(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Identity Verification</h1>
        <p className="text-muted-foreground">Complete your identity verification to unlock all platform features.</p>
      </div>

      {/* Verification Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Verification Progress</span>
          </CardTitle>
          <CardDescription>Complete all steps to increase your account limits</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{verificationLevel}/4 steps completed</span>
            </div>
            <Progress value={(verificationLevel / 4) * 100} className="h-2" />
          </div>

          <div className="space-y-4">
            {verificationSteps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.status === "completed"
                        ? "bg-green-100 dark:bg-green-900"
                        : step.status === "pending"
                          ? "bg-yellow-100 dark:bg-yellow-900"
                          : "bg-gray-100 dark:bg-gray-800"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        step.status === "completed"
                          ? "text-green-600"
                          : step.status === "pending"
                            ? "text-yellow-600"
                            : "text-gray-400"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  <Badge
                    variant={step.status === "completed" ? "secondary" : "outline"}
                    className={
                      step.status === "completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                        : step.status === "pending"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                    }
                  >
                    {step.status === "completed"
                      ? "Completed"
                      : step.status === "pending"
                        ? "In Review"
                        : "Not Started"}
                  </Badge>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Current Limits */}
      <Card>
        <CardHeader>
          <CardTitle>Current Account Limits</CardTitle>
          <CardDescription>Your current trading and withdrawal limits based on verification level</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold text-lg">Daily Trading</h3>
              <p className="text-2xl font-bold text-green-600">$50,000</p>
              <p className="text-sm text-muted-foreground">Current limit</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold text-lg">Daily Withdrawal</h3>
              <p className="text-2xl font-bold text-blue-600">$10,000</p>
              <p className="text-sm text-muted-foreground">Current limit</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold text-lg">Monthly Volume</h3>
              <p className="text-2xl font-bold text-purple-600">$500,000</p>
              <p className="text-sm text-muted-foreground">Current limit</p>
            </div>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Upgrade Benefits:</strong> Complete identity verification to increase your daily withdrawal limit
              to $100,000 and monthly volume to $2,000,000.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Identity Verification Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="h-5 w-5" />
            <span>Identity Verification</span>
          </CardTitle>
          <CardDescription>Upload your government-issued ID to verify your identity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input id="dateOfBirth" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nationality">Nationality</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your nationality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
                <SelectItem value="fr">France</SelectItem>
                <SelectItem value="jp">Japan</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Document Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select document type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="passport">Passport</SelectItem>
                <SelectItem value="drivers_license">Driver's License</SelectItem>
                <SelectItem value="national_id">National ID Card</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-semibold">Document Upload</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Front Side</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">Upload front side of your ID</p>
                  <Button variant="outline" size="sm" disabled={isUploading}>
                    <Camera className="h-4 w-4 mr-2" />
                    {isUploading ? "Uploading..." : "Choose File"}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Back Side</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">Upload back side of your ID</p>
                  <Button variant="outline" size="sm" disabled={isUploading}>
                    <Camera className="h-4 w-4 mr-2" />
                    {isUploading ? "Uploading..." : "Choose File"}
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Requirements:</strong>
              </p>
              <ul className="text-sm text-yellow-800 dark:text-yellow-200 mt-2 space-y-1">
                <li>• Document must be valid and not expired</li>
                <li>• Image must be clear and all text readable</li>
                <li>• File size should not exceed 10MB</li>
                <li>• Accepted formats: JPG, PNG, PDF</li>
              </ul>
            </div>
          </div>

          <Button className="w-full" disabled={isUploading}>
            <FileText className="h-4 w-4 mr-2" />
            Submit for Verification
          </Button>
        </CardContent>
      </Card>

      {/* Address Verification */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5" />
            <span>Address Verification</span>
          </CardTitle>
          <CardDescription>Upload a proof of address document (utility bill, bank statement, etc.)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="address">Street Address</Label>
            <Input id="address" placeholder="123 Main Street" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="New York" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State/Province</Label>
              <Input id="state" placeholder="NY" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="zipCode">ZIP/Postal Code</Label>
              <Input id="zipCode" placeholder="10001" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Proof of Address Document</Label>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">
                Upload utility bill, bank statement, or government letter
              </p>
              <Button variant="outline" size="sm" disabled={isUploading}>
                <Upload className="h-4 w-4 mr-2" />
                {isUploading ? "Uploading..." : "Choose File"}
              </Button>
            </div>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Accepted Documents:</strong> Utility bills, bank statements, government correspondence, or rental
              agreements dated within the last 3 months.
            </p>
          </div>

          <Button className="w-full" disabled={isUploading}>
            <Upload className="h-4 w-4 mr-2" />
            Submit Address Verification
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
