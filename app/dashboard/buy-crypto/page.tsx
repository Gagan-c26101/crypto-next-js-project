"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Banknote, Shield, Clock, CheckCircle, AlertTriangle, DollarSign } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export default function BuyCryptoPage() {
  const [amount, setAmount] = useState("")
  const [cryptoAmount, setCryptoAmount] = useState("")
  const [selectedCrypto, setSelectedCrypto] = useState("BTC")
  const [selectedPayment, setSelectedPayment] = useState("card")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [bankPaymentType, setBankPaymentType] = useState("IMPS")
  const [transactionId, setTransactionId] = useState("")
  const [receipt, setReceipt] = useState<File | null>(null)
  const [stakeDuration, setStakeDuration] = useState("30")
  const [termsAccepted, setTermsAccepted] = useState(false)

  const cryptoOptions = [{ symbol: "CRED", name: "CRED", price: 80, icon: "C" }]

  const paymentMethods = [
    {
      id: "bank",
      name: "Bank Transfer",
      icon: Banknote,
      fee: "0%",
      time: "Instant",
      limits: "₹100 - ₹50,000",
      popular: true,
    },
  ]

  const recentPurchases = [
    {
      id: "P001",
      crypto: "BTC",
      amount: "0.1",
      usdAmount: "5000",
      method: "Credit Card",
      status: "completed",
      date: "2024-01-15",
      time: "10:30 AM",
    },
    {
      id: "P002",
      crypto: "ETH",
      amount: "2.5",
      usdAmount: "7500",
      method: "Bank Transfer",
      status: "processing",
      date: "2024-01-14",
      time: "2:15 PM",
    },
    {
      id: "P003",
      crypto: "USDT",
      amount: "1000",
      usdAmount: "1000",
      method: "Apple Pay",
      status: "completed",
      date: "2024-01-12",
      time: "9:45 AM",
    },
  ]

  const selectedCryptoData = cryptoOptions.find((c) => c.symbol === selectedCrypto)

  const calculateCrypto = (usdAmount: string) => {
    if (!usdAmount || !selectedCryptoData) return ""
    const amount = Number.parseFloat(usdAmount)
    return (amount / selectedCryptoData.price).toFixed(8)
  }

  const calculateUSD = (cryptoAmount: string) => {
    if (!cryptoAmount || !selectedCryptoData) return ""
    const amount = Number.parseFloat(cryptoAmount)
    return (amount * selectedCryptoData.price).toFixed(2)
  }

  const handleUSDChange = (value: string) => {
    setAmount(value)
    setCryptoAmount(calculateCrypto(value))
  }

  const handleCryptoChange = (value: string) => {
    setCryptoAmount(value)
    setAmount(calculateUSD(value))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "processing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
      case "failed":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    }
  }

  const handleReceiptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setReceipt(e.target.files[0])
    }
  }

  const isValidUtr = (utr: string) => {
    return /^[A-Za-z0-9]{12}$/.test(utr)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Buy Crypto with INR</h1>
        <p className="text-muted-foreground">Purchase cryptocurrency with your preferred payment method.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Buy Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Buy Cryptocurrency</span>
              </CardTitle>
              <CardDescription>Choose your cryptocurrency and payment method</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="crypto">Choose Currency</Label>
                  <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      {cryptoOptions.map((crypto) => (
                        <SelectItem key={crypto.symbol} value={crypto.symbol}>
                          {crypto.name} ({crypto.symbol})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inrAmount">Enter INR Amount</Label>
                  <Input
                    type="number"
                    id="inrAmount"
                    placeholder="Enter amount in INR"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Enter Phone No</Label>
                  <Input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bankPaymentType">Bank Payment Type</Label>
                  <Select value={bankPaymentType} onValueChange={setBankPaymentType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Payment Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="IMPS">IMPS</SelectItem>
                      <SelectItem value="NEFT">NEFT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transactionId">Transaction ID (UTR)</Label>
                  <Input
                    type="text"
                    id="transactionId"
                    placeholder="Enter UTR number"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                  />
                  {!isValidUtr(transactionId) && transactionId.length > 0 && (
                    <p className="text-xs text-red-500">UTR must be 12 alphanumeric characters.</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="receipt">Upload Receipt</Label>
                  <Input type="file" id="receipt" onChange={handleReceiptUpload} />
                  {receipt && <p className="text-xs text-muted-foreground">Selected file: {receipt.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stakeDuration">Stake Duration (Days)</Label>
                  <Select value={stakeDuration} onValueChange={setStakeDuration}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 Days</SelectItem>
                      <SelectItem value="60">60 Days</SelectItem>
                      <SelectItem value="90">90 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" checked={termsAccepted} onCheckedChange={(checked) => setTermsAccepted(checked === true)}/>
                  <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
                    I agree to the Terms and Conditions
                  </Label>
                </div>
              </div>

              <Button
                className="w-full"
                size="lg"
                disabled={
                  !amount || !phoneNumber || !transactionId || !receipt || !termsAccepted || !isValidUtr(transactionId)
                }
              >
                Buy {selectedCrypto}
              </Button>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-800 dark:text-blue-200">
                    <p className="font-medium">Secure & Protected</p>
                    <p>Your payment information is encrypted and secure. We never store your card details.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Market Prices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5" />
                <span>Market Prices</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {cryptoOptions.slice(0, 4).map((crypto) => (
                  <div key={crypto.symbol} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{crypto.icon}</span>
                      <div>
                        <p className="font-medium">{crypto.symbol}</p>
                        <p className="text-xs text-muted-foreground">{crypto.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{crypto.price.toLocaleString()}</p>
                      <p className="text-xs text-green-600">+2.5%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Purchase Limits */}
          <Card>
            <CardHeader>
              <CardTitle>Purchase Limits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Daily Limit</span>
                <span>₹10,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Monthly Limit</span>
                <span>₹100,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Used Today</span>
                <span className="text-muted-foreground">₹0</span>
              </div>
              <Separator />
              <div className="text-xs text-muted-foreground">
                Limits may vary based on your verification level and payment method.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Purchases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Recent Purchases</span>
          </CardTitle>
          <CardDescription>Your recent cryptocurrency purchases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPurchases.map((purchase) => (
              <div key={purchase.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                    <span className="font-bold text-orange-600">
                      {cryptoOptions.find((c) => c.symbol === purchase.crypto)?.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">
                      {purchase.amount} {purchase.crypto}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ₹{purchase.usdAmount} via {purchase.method}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className={getStatusColor(purchase.status)}>
                    {purchase.status === "completed" ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : purchase.status === "processing" ? (
                      <Clock className="h-3 w-3 mr-1" />
                    ) : (
                      <AlertTriangle className="h-3 w-3 mr-1" />
                    )}
                    {purchase.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">
                    {purchase.date} {purchase.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
