"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Info, Copy } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"

export default function DepositFiatPage() {
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [comments, setComments] = useState("")

  const minAmount = 100
  const maxAmount = 100000

  const bankDetails = {
    accountName: "CredBull Technologies Pvt Ltd",
    accountNumber: "1234567890123456",
    ifscCode: "SBIN0001234",
    bankName: "State Bank of India",
    branchName: "Mumbai Main Branch",
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You can add a toast notification here
  }

  const router = useRouter()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="h-8 w-8 p-0">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fiat Deposit</h1>
          <p className="text-muted-foreground">Add funds to your INR wallet</p>
        </div>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Deposit Form */}
        <Card>
          <CardHeader>
            <CardTitle>Deposit Details</CardTitle>
            <CardDescription>Enter the amount you want to deposit</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Choose Currency */}
            <div className="space-y-2">
              <Label htmlFor="currency">Choose Currency</Label>
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
                <span>Min: {minAmount} INR</span>
                <span>Max: {maxAmount} INR</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <Label htmlFor="payment-method">Payment Method *</Label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                  <SelectItem value="upi">UPI</SelectItem>
                  <SelectItem value="imps">IMPS</SelectItem>
                  <SelectItem value="neft">NEFT</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Comments */}
            <div className="space-y-2">
              <Label htmlFor="comments">Comments</Label>
              <Textarea
                id="comments"
                placeholder="Enter any additional comments (optional)"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={3}
              />
            </div>

            <Button
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              disabled={!amount || !paymentMethod || Number.parseFloat(amount) < minAmount}
            >
              Generate Deposit Request
            </Button>
          </CardContent>
        </Card>

        {/* Bank Details */}
        <Card>
          <CardHeader>
            <CardTitle>Bank Details for Transfer</CardTitle>
            <CardDescription>Use these details to transfer funds</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                <div>
                  <p className="text-sm text-muted-foreground">Account Name</p>
                  <p className="font-medium">{bankDetails.accountName}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(bankDetails.accountName)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                <div>
                  <p className="text-sm text-muted-foreground">Account Number</p>
                  <p className="font-medium font-mono">{bankDetails.accountNumber}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(bankDetails.accountNumber)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                <div>
                  <p className="text-sm text-muted-foreground">IFSC Code</p>
                  <p className="font-medium font-mono">{bankDetails.ifscCode}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(bankDetails.ifscCode)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-3 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Bank Name</p>
                <p className="font-medium">{bankDetails.bankName}</p>
              </div>

              <div className="p-3 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Branch Name</p>
                <p className="font-medium">{bankDetails.branchName}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-1">
              <p>
                <strong>Instructions:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Minimum {minAmount} INR per transaction</li>
                <li>Maximum {maxAmount} INR per transaction</li>
                <li>Processing time: 15 minutes to 2 hours during banking hours</li>
                <li>Please use your registered mobile number for the transfer</li>
                <li>Add your User ID in the transfer remarks for faster processing</li>
                <li>Keep the transaction receipt for reference</li>
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
