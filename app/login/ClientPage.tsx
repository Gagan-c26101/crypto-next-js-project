"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { TrendingUp, Mail, Lock, Eye, EyeOff, Phone, ShieldCheck } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginWithEmail, setLoginWithEmail] = useState(true)
  const [otpRequired, setOtpRequired] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [is2FAEnabled, setIs2FAEnabled] = useState(false)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold">CryptoBull</span>
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Sign In</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center gap-4">
                <Button
                  className={`w-full ${
                    loginWithEmail
                      ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-black"
                      : "bg-muted text-foreground"
                  }`}
                  onClick={() => setLoginWithEmail(true)}
                >
                  <Mail className="mr-2 h-4 w-4" /> Email
                </Button>
                <Button
                  className={`w-full ${
                    !loginWithEmail
                      ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-black"
                      : "bg-muted text-foreground"
                  }`}
                  onClick={() => setLoginWithEmail(false)}
                >
                  <Phone className="mr-2 h-4 w-4" /> Phone
                </Button>
              </div>


            <form className="space-y-4">
              {loginWithEmail ? (
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="email" placeholder="Enter your email" className="pl-10" />
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="tel" placeholder="Enter your phone" className="pl-10" />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label>Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {otpRequired && !otpVerified && (
                <div className="space-y-2">
                  <Label>OTP</Label>
                  <Input placeholder="Enter OTP" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Didn't receive OTP?</span>
                    <button type="button" className="text-orange-500 hover:underline">Resend</button>
                  </div>
                </div>
              )}

              {is2FAEnabled && (
                <div className="space-y-2">
                  <Label>2FA Code</Label>
                  <div className="relative">
                    <ShieldCheck className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input type="text" placeholder="Enter 2FA Code" className="pl-10" />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Link href="/forgot-password" className="text-sm text-orange-500 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                Sign In
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

          

            <div className="text-center text-sm">
              Don’t have an account?{" "}
              <Link href="/signup" className="text-orange-500 hover:underline font-medium">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="hover:underline">Terms of Service</Link> and{" "}
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>.
        </div>
      </div>
    </div>
  )
}
