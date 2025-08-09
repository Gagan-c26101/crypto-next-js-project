"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TradingButton } from "@/components/ui/trading-button"
import { Wallet, Calculator, Zap, TrendingUp, TrendingDown } from "lucide-react"

interface OrderFormsProps {
  pair: string
}

export default function OrderForms({ pair }: OrderFormsProps) {
  const [orderType, setOrderType] = useState<"market" | "limit">("limit")
  const [buyPrice, setBuyPrice] = useState("45.50")
  const [buyAmount, setBuyAmount] = useState("")
  const [sellPrice, setSellPrice] = useState("45.50")
  const [sellAmount, setSellAmount] = useState("")

  const availableBalance = 10000 // INR
  const availableCoins = 250 // CRED
  const currentPrice = 45.5

  return (
    <Card className="h-full border-0 rounded-xl bg-gradient-to-b from-card to-card/50">
      <CardHeader className="pb-2 px-3 py-2 sm:px-4 sm:py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <span className="text-xs sm:text-sm font-semibold">Trade</span>
          </div>
          <div className="flex space-x-1 sm:space-x-2">
            <TradingButton
              variant={orderType === "limit" ? "active" : "outline"}
              size="sm"
              onClick={() => setOrderType("limit")}
              className="h-6 px-2 text-xs sm:h-8 sm:px-3 sm:text-sm"
            >
              Limit
            </TradingButton>
            <TradingButton
              variant={orderType === "market" ? "active" : "outline"}
              size="sm"
              onClick={() => setOrderType("market")}
              className="h-6 px-2 text-xs sm:h-8 sm:px-3 sm:text-sm"
            >
              Market
            </TradingButton>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-2.5rem)] sm:h-[calc(100%-4rem)] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 h-full">
          {/* Buy Form */}
          <div className="p-2 sm:p-3 border-b sm:border-b-0 sm:border-r dark:border-gray-800/50 flex flex-col h-full min-h-0">
            <div className="flex-1 space-y-2 sm:space-y-3 overflow-y-auto">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-semibold text-green-500 flex items-center space-x-1 sm:space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                    <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 text-green-500" />
                  </div>
                  <span>Buy {pair.split("/")[0]}</span>
                </h3>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground bg-muted/50 dark:bg-gray-800/50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg">
                  <Wallet className="w-2 h-2 sm:w-3 sm:h-3" />
                  <span className="text-xs">₹{availableBalance.toLocaleString()}</span>
                </div>
              </div>

              {orderType === "limit" && (
                <div className="space-y-1">
                  <Label htmlFor="buy-price" className="text-xs font-medium text-muted-foreground">
                    Price (INR)
                  </Label>
                  <div className="relative">
                    <Input
                      id="buy-price"
                      value={buyPrice}
                      onChange={(e) => setBuyPrice(e.target.value)}
                      className="h-7 sm:h-8 text-xs sm:text-sm font-mono dark:bg-gray-800/50 dark:border-gray-700 bg-muted/50 border-muted focus:bg-background transition-all duration-200 rounded-xl"
                      placeholder="0.00"
                    />
                    <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                      INR
                    </div>
                  </div>
                </div>
              )}

              {orderType === "market" && (
                <div className="p-1.5 sm:p-2 rounded-xl bg-green-500/5 dark:bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Market Price:</span>
                    <span className="text-xs sm:text-sm font-mono font-medium text-green-500">
                      ₹{currentPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <Label htmlFor="buy-amount" className="text-xs font-medium text-muted-foreground">
                  Amount ({pair.split("/")[0]})
                </Label>
                <div className="relative">
                  <Input
                    id="buy-amount"
                    value={buyAmount}
                    onChange={(e) => setBuyAmount(e.target.value)}
                    className="h-7 sm:h-8 text-xs sm:text-sm font-mono dark:bg-gray-800/50 dark:border-gray-700 bg-muted/50 border-muted focus:bg-background transition-all duration-200 rounded-xl"
                    placeholder="0.00"
                  />
                  <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                    {pair.split("/")[0]}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-1">
                {[25, 50, 75, 100].map((percent) => (
                  <TradingButton
                    key={percent}
                    variant="outline"
                    size="sm"
                    className="hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-500 h-5 sm:h-6 text-xs"
                    onClick={() => {
                      const price = orderType === "limit" ? Number.parseFloat(buyPrice || "1") : currentPrice
                      const amount = ((availableBalance * percent) / 100 / price).toFixed(2)
                      setBuyAmount(amount)
                    }}
                  >
                    {percent}%
                  </TradingButton>
                ))}
              </div>

              <div className="space-y-1 p-1.5 sm:p-2 rounded-xl bg-muted/30 dark:bg-gray-800/30">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Total:</span>
                  <span className="font-mono font-medium">
                    ₹
                    {(
                      Number.parseFloat(buyAmount || "0") *
                      (orderType === "limit" ? Number.parseFloat(buyPrice || "0") : currentPrice)
                    ).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Fee (0.1%):</span>
                  <span className="font-mono">
                    ₹
                    {(
                      Number.parseFloat(buyAmount || "0") *
                      (orderType === "limit" ? Number.parseFloat(buyPrice || "0") : currentPrice) *
                      0.001
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Buy Button - Fixed at bottom */}
            <div className="mt-2 sm:mt-3 flex-shrink-0">
              <TradingButton
                variant="buy"
                size="md"
                className="w-full h-7 sm:h-9 text-xs sm:text-sm"
                disabled={!buyAmount || (orderType === "limit" && !buyPrice)}
              >
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Buy {pair.split("/")[0]}
              </TradingButton>
            </div>
          </div>

          {/* Sell Form */}
          <div className="p-2 sm:p-3 flex flex-col h-full min-h-0">
            <div className="flex-1 space-y-2 sm:space-y-3 overflow-y-auto">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-semibold text-red-500 flex items-center space-x-1 sm:space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                    <TrendingDown className="w-2 h-2 sm:w-3 sm:h-3 text-red-500" />
                  </div>
                  <span>Sell {pair.split("/")[0]}</span>
                </h3>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground bg-muted/50 dark:bg-gray-800/50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg">
                  <Wallet className="w-2 h-2 sm:w-3 sm:h-3" />
                  <span className="text-xs">
                    {availableCoins} {pair.split("/")[0]}
                  </span>
                </div>
              </div>

              {orderType === "limit" && (
                <div className="space-y-1">
                  <Label htmlFor="sell-price" className="text-xs font-medium text-muted-foreground">
                    Price (INR)
                  </Label>
                  <div className="relative">
                    <Input
                      id="sell-price"
                      value={sellPrice}
                      onChange={(e) => setSellPrice(e.target.value)}
                      className="h-7 sm:h-8 text-xs sm:text-sm font-mono dark:bg-gray-800/50 dark:border-gray-700 bg-muted/50 border-muted focus:bg-background transition-all duration-200 rounded-xl"
                      placeholder="0.00"
                    />
                    <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                      INR
                    </div>
                  </div>
                </div>
              )}

              {orderType === "market" && (
                <div className="p-1.5 sm:p-2 rounded-xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Market Price:</span>
                    <span className="text-xs sm:text-sm font-mono font-medium text-red-500">
                      ₹{currentPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <Label htmlFor="sell-amount" className="text-xs font-medium text-muted-foreground">
                  Amount ({pair.split("/")[0]})
                </Label>
                <div className="relative">
                  <Input
                    id="sell-amount"
                    value={sellAmount}
                    onChange={(e) => setSellAmount(e.target.value)}
                    className="h-7 sm:h-8 text-xs sm:text-sm font-mono dark:bg-gray-800/50 dark:border-gray-700 bg-muted/50 border-muted focus:bg-background transition-all duration-200 rounded-xl"
                    placeholder="0.00"
                  />
                  <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                    {pair.split("/")[0]}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-1">
                {[25, 50, 75, 100].map((percent) => (
                  <TradingButton
                    key={percent}
                    variant="outline"
                    size="sm"
                    className="hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500 h-5 sm:h-6 text-xs"
                    onClick={() => {
                      const amount = ((availableCoins * percent) / 100).toFixed(2)
                      setSellAmount(amount)
                    }}
                  >
                    {percent}%
                  </TradingButton>
                ))}
              </div>

              <div className="space-y-1 p-1.5 sm:p-2 rounded-xl bg-muted/30 dark:bg-gray-800/30">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Total:</span>
                  <span className="font-mono font-medium">
                    ₹
                    {(
                      Number.parseFloat(sellAmount || "0") *
                      (orderType === "limit" ? Number.parseFloat(sellPrice || "0") : currentPrice)
                    ).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Fee (0.1%):</span>
                  <span className="font-mono">
                    ₹
                    {(
                      Number.parseFloat(sellAmount || "0") *
                      (orderType === "limit" ? Number.parseFloat(sellPrice || "0") : currentPrice) *
                      0.001
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Sell Button - Fixed at bottom */}
            <div className="mt-2 sm:mt-3 flex-shrink-0">
              <TradingButton
                variant="sell"
                size="md"
                className="w-full h-7 sm:h-9 text-xs sm:text-sm"
                disabled={!sellAmount || (orderType === "limit" && !sellPrice)}
              >
                <Calculator className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Sell {pair.split("/")[0]}
              </TradingButton>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
