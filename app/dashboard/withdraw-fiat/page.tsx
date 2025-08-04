"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Info } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"

export default function WithdrawFiatPage() {
  const [amount, setAmount] = useState("")
  const [selectedBank, setSelectedBank] = useState("")
  const [comments, setComments] = useState("")
  const [twoFACode, setTwoFACode] = useState("")
  const tdsRate = 1 // Fixed 1% TDS

  const balance = 384.93
  const fee = 20
  const minAmount = 200
  const maxAmount = 50000
  const router = useRouter()

  const calculateReceivingAmount = () => {
    const amountNum = Number.parseFloat(amount) || 0
    const tdsAmount = (amountNum * tdsRate) / 100
    return Math.max(0, amountNum - fee - tdsAmount)
  }

  const bankAccounts = [
    { id: "sbi", name: "SBI - ****1234", bank: "State Bank of India" },
    { id: "hdfc", name: "HDFC - ****5678", bank: "HDFC Bank" },
    { id: "icici", name: "ICICI - ****9012", bank: "ICICI Bank" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="h-8 w-8 p-0">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fiat Withdraw</h1>
          <p className="text-muted-foreground">Withdraw your INR balance to your bank account</p>
        </div>
      </div>

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Withdraw Details</CardTitle>
            <CardDescription>
              Balance: <span className="font-semibold text-foreground">{balance.toFixed(2)} INR</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Choose Cryptocurrency */}
            <div className="space-y-2">
              <Label htmlFor="currency">Choose Cryptocurrency</Label>
              <Select defaultValue="inr">
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inr">INR</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Enter Amount */}
            <div className="space-y-2">
              <Label htmlFor="amount">Enter Amount *</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min={minAmount}
                max={maxAmount}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Fee: {fee}</span>
                <span>Min: {minAmount} INR</span>
                <span>Max: {maxAmount} INR</span>
              </div>
            </div>

            {/* Receiving Amount */}
            <div className="space-y-2">
              <Label>Receiving Amount</Label>
              <div className="p-3 bg-muted rounded-md">
                <div className="text-sm text-muted-foreground mb-2">TDS Rate: 1% (Fixed)</div>
                <div className="text-lg font-semibold">INR: {calculateReceivingAmount().toFixed(2)}</div>
              </div>
            </div>

            {/* Choose Bank Account */}
            <div className="space-y-2">
              <Label htmlFor="bank">Choose the Bank Account *</Label>
              <Select value={selectedBank} onValueChange={setSelectedBank}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a Bank" />
                </SelectTrigger>
                <SelectContent>
                  {bankAccounts.map((bank) => (
                    <SelectItem key={bank.id} value={bank.id}>
                      {bank.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Comments */}
            <div className="space-y-2">
              <Label htmlFor="comments">Comments</Label>
              <Textarea
                id="comments"
                placeholder="Enter comments (optional)"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={3}
              />
            </div>

            {/* 2FA Code */}
            <div className="space-y-2">
              <Label htmlFor="twofa">Enter 2FA Code *</Label>
              <Input
                id="twofa"
                type="text"
                placeholder="Enter 6-digit code"
                value={twoFACode}
                onChange={(e) => setTwoFACode(e.target.value)}
                maxLength={6}
              />
            </div>

            {/* Submit Button */}
            <Button
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              disabled={!amount || !selectedBank || !twoFACode || Number.parseFloat(amount) < minAmount}
            >
              Submit
            </Button>
          </CardContent>
        </Card>

        {/* Notes */}
        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-1">
              <p>
                <strong>Notes:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Minimum {minAmount} INR per transaction</li>
                <li>Max {maxAmount} INR Per transaction</li>
                <li>Processing time - upto 2 hours (during banking hours and weekdays)</li>
                <li>Fee(inclusive of all taxes). {fee} INR per transaction.</li>
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
