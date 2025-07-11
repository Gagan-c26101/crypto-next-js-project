"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown } from "lucide-react"

const marketData = [
  { symbol: "BTC", name: "Bitcoin", price: 43250.5, change: 2.45, volume: "28.5B" },
  { symbol: "ETH", name: "Ethereum", price: 2650.75, change: -1.23, volume: "15.2B" },
  { symbol: "BNB", name: "BNB", price: 315.2, change: 3.67, volume: "2.1B" },
  { symbol: "ADA", name: "Cardano", price: 0.485, change: 5.23, volume: "1.8B" },
  { symbol: "SOL", name: "Solana", price: 98.45, change: -2.15, volume: "3.2B" },
  { symbol: "DOT", name: "Polkadot", price: 7.25, change: 1.85, volume: "890M" },
]

export default function MarketOverview() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <section className="py-12 lg:py-16 bg-muted/30 dark:bg-gray-900/30">
      <div className="w-full max-w-none px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Market Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
              Stay updated with real-time cryptocurrency prices and market trends
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 lg:mb-8 justify-center">
            {["all", "favorites", "gainers", "losers"].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab(tab)}
                className="capitalize dark:border-gray-700 text-xs sm:text-sm"
              >
                {tab}
              </Button>
            ))}
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {marketData.map((coin) => (
              <Card
                key={coin.symbol}
                className="hover:shadow-lg transition-shadow cursor-pointer dark:bg-gray-900/50 dark:border-gray-800 dark:hover:shadow-gray-900/50"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                        {coin.symbol.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base">{coin.symbol}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{coin.name}</div>
                      </div>
                    </div>
                    <div
                      className={`flex items-center space-x-1 ${coin.change >= 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {coin.change >= 0 ? (
                        <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                      ) : (
                        <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4" />
                      )}
                      <span className="text-xs sm:text-sm font-medium">
                        {coin.change >= 0 ? "+" : ""}
                        {coin.change}%
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm text-muted-foreground">Price</span>
                      <span className="font-semibold text-sm sm:text-base">${coin.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm text-muted-foreground">24h Volume</span>
                      <span className="text-xs sm:text-sm">{coin.volume}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-6 lg:mt-8">
            <Button variant="outline" size="lg" className="dark:border-gray-700 dark:hover:bg-gray-800 bg-transparent">
              View All Markets
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
