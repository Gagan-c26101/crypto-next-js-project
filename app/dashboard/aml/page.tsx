"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, Shield, FileText, CheckCircle, Clock, DollarSign, Building } from "lucide-react"

export default function AMLPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [amlStatus, setAmlStatus] = useState("pending") // pending, approved, rejected

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AML Compliance</h1>
        <p className="text-muted-foreground">Anti-Money Laundering compliance and source of funds verification.</p>
      </div>

      {/* AML Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>AML Compliance Status</span>
          </CardTitle>
          <CardDescription>Your current Anti-Money Laundering compliance status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              {amlStatus === "approved" ? (
                <CheckCircle className="h-6 w-6 text-green-600" />
              ) : amlStatus === "pending" ? (
                <Clock className="h-6 w-6 text-yellow-600" />
              ) : (
                <AlertTriangle className="h-6 w-6 text-red-600" />
              )}
              <div>
                <p className="font-medium">
                  {amlStatus === "approved"
                    ? "AML Approved"
                    : amlStatus === "pending"
                      ? "AML Under Review"
                      : "AML Rejected"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {amlStatus === "approved"
                    ? "Your account is fully compliant"
                    : amlStatus === "pending"
                      ? "We are reviewing your submission"
                      : "Please resubmit your information"}
                </p>
              </div>
            </div>
            <Badge
              variant="secondary"
              className={
                amlStatus === "approved"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                  : amlStatus === "pending"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
              }
            >
              {amlStatus === "approved" ? "Approved" : amlStatus === "pending" ? "Pending" : "Rejected"}
            </Badge>
          </div>

          {amlStatus === "pending" && (
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Review in Progress:</strong> Our compliance team is reviewing your submission. This process
                typically takes 2-5 business days.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Source of Funds */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5" />
            <span>Source of Funds Declaration</span>
          </CardTitle>
          <CardDescription>Please provide information about the source of your funds</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="occupation">Occupation</Label>
            <Input
              id="occupation"
              placeholder="e.g., Software Engineer, Business Owner"
              defaultValue="Software Engineer"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="employer">Employer/Company</Label>
            <Input id="employer" placeholder="Company name" defaultValue="Tech Corp Inc." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="annualIncome">Annual Income (USD)</Label>
            <Select defaultValue="100k-250k">
              <SelectTrigger>
                <SelectValue placeholder="Select income range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-50k">Under $50,000</SelectItem>
                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                <SelectItem value="over-1m">Over $1,000,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sourceOfFunds">Primary Source of Funds</Label>
            <Select defaultValue="salary">
              <SelectTrigger>
                <SelectValue placeholder="Select source of funds" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="salary">Salary/Employment Income</SelectItem>
                <SelectItem value="business">Business Income</SelectItem>
                <SelectItem value="investments">Investment Returns</SelectItem>
                <SelectItem value="inheritance">Inheritance</SelectItem>
                <SelectItem value="savings">Personal Savings</SelectItem>
                <SelectItem value="gift">Gift</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fundsDescription">Additional Details</Label>
            <Textarea
              id="fundsDescription"
              placeholder="Please provide additional details about your source of funds..."
              rows={3}
              defaultValue="Funds are primarily from my software engineering salary and some cryptocurrency investments made over the past few years."
            />
          </div>
        </CardContent>
      </Card>

      {/* Business Information (if applicable) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building className="h-5 w-5" />
            <span>Business Information</span>
          </CardTitle>
          <CardDescription>Complete this section if you're trading on behalf of a business</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="businessAccount" />
            <Label htmlFor="businessAccount">I am trading on behalf of a business entity</Label>
          </div>

          <div className="space-y-4 opacity-50">
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input id="businessName" placeholder="Company name" disabled />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type</Label>
              <Select disabled>
                <SelectTrigger>
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corporation">Corporation</SelectItem>
                  <SelectItem value="llc">LLC</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                  <SelectItem value="trust">Trust</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessRegistration">Registration Number</Label>
              <Input id="businessRegistration" placeholder="Business registration number" disabled />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessAddress">Business Address</Label>
              <Textarea id="businessAddress" placeholder="Full business address" rows={2} disabled />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Assessment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>Risk Assessment</span>
          </CardTitle>
          <CardDescription>Additional questions for compliance purposes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Are you a Politically Exposed Person (PEP)?</Label>
              <Select defaultValue="no">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                A PEP is someone who holds a prominent public position or has close associations with such persons.
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Expected monthly trading volume (USD)</Label>
              <Select defaultValue="10k-50k">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-1k">Under $1,000</SelectItem>
                  <SelectItem value="1k-10k">$1,000 - $10,000</SelectItem>
                  <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                  <SelectItem value="over-500k">Over $500,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Trading experience level</Label>
              <Select defaultValue="intermediate">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (Less than 1 year)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                  <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                  <SelectItem value="expert">Expert (5+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Declarations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Compliance Declarations</span>
          </CardTitle>
          <CardDescription>Please confirm the following statements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox id="declaration1" defaultChecked />
              <Label htmlFor="declaration1" className="text-sm leading-relaxed">
                I confirm that all information provided is true and accurate to the best of my knowledge.
              </Label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="declaration2" defaultChecked />
              <Label htmlFor="declaration2" className="text-sm leading-relaxed">
                I understand that providing false information may result in account suspension or termination.
              </Label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="declaration3" defaultChecked />
              <Label htmlFor="declaration3" className="text-sm leading-relaxed">
                I agree to notify CryptoBull of any material changes to the information provided.
              </Label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="declaration4" defaultChecked />
              <Label htmlFor="declaration4" className="text-sm leading-relaxed">
                I confirm that I am not using this account for money laundering or any illegal activities.
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button onClick={handleSubmit} disabled={isSubmitting} size="lg" variant="primary">
          <FileText className="h-4 w-4 mr-2" />
          {isSubmitting ? "Submitting..." : "Submit AML Information"}
        </Button>
      </div>
    </div>
  )
}
