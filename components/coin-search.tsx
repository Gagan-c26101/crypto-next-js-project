"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Star, TrendingUp, TrendingDown, Flame } from "lucide-react"

interface CoinSearchProps {
  onPairSelect: (pair: string) => void
  selectedPair: string
}

const tradingPairs = [
  { pair: "CRED/INR", price: 45.5, change: 2.45, volume: "2.5M", isHot: true },
  { pair: "BTC/INR", price: 3250000, change: -1.23, volume: "125M", isHot: true },
  { pair: "ETH/INR", price: 195000, change: 3.67, volume: "85M", isHot: false },
  { pair: "BNB/INR", price: 23500, change: 1.85, volume: "45M", isHot: false },
  { pair: "ADA/INR", price: 35.5, change: -2.15, volume: "15M", isHot: false },
  { pair: "SOL/INR", price: 7250, change: 5.23, volume: "35M", isHot: true },
  { pair: "DOT/INR", price: 525, change: -0.85, volume: "12M", isHot: false },
  { pair: "MATIC/INR", price: 65, change: 4.12, volume: "25M", isHot: false },
]

export default function CoinSearch({ onPairSelect, selectedPair }: CoinSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredPairs = tradingPairs.filter((pair) => pair.pair.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Card className="h-full border-0 rounded-xl bg-gradient-to-b from-card to-card/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <span>Markets</span>
          </CardTitle>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search pairs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 h-9 text-xs dark:bg-gray-800/50 dark:border-gray-700 bg-muted/50 border-muted focus:bg-background transition-all duration-200"
          />
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-7rem)] overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Tabs */}
          <div className="flex border-b dark:border-gray-800/50 bg-muted/20 dark:bg-gray-800/20">
            {[
              { key: "all", label: "All", icon: null },
              { key: "favorites", label: "Fav", icon: Star },
              { key: "hot", label: "Hot", icon: Flame },
            ].map((tab) => (
              <Button
                key={tab.key}
                variant={activeTab === tab.key ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 rounded-none text-xs h-9 ${
                  activeTab === tab.key ? "bg-gradient-to-r from-orange-500 to-red-500 text-white" : "hover:bg-muted/50"
                }`}
              >
                {tab.icon && <tab.icon className="w-3 h-3 mr-1" />}
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Header */}
          <div className="grid grid-cols-3 gap-2 px-3 py-2 text-xs font-medium text-muted-foreground border-b dark:border-gray-800/50 bg-muted/10 dark:bg-gray-800/10">
            <div>Pair</div>
            <div className="text-right">Price</div>
            <div className="text-right">Change</div>
          </div>

          {/* Pairs List */}
          <div className="flex-1 overflow-y-auto">
            {filteredPairs
              .filter((pair) => {
                if (activeTab === "favorites") return false // No favorites for demo
                if (activeTab === "hot") return pair.isHot
                return true
              })
              .map((pair) => (
                <div
                  key={pair.pair}
                  onClick={() => onPairSelect(pair.pair)}
                  className={`grid grid-cols-3 gap-2 px-3 py-3 text-xs cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-muted/50 hover:to-transparent dark:hover:from-gray-800/50 border-l-2 border-transparent hover:border-orange-500 ${
                    selectedPair === pair.pair
                      ? "bg-gradient-to-r from-orange-500/10 to-transparent dark:from-orange-500/20 border-l-orange-500"
                      : ""
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className="font-medium">{pair.pair}</div>
                    {pair.isHot && <Flame className="w-3 h-3 text-orange-500" />}
                  </div>
                  <div className="text-right font-mono font-medium">₹{pair.price.toLocaleString()}</div>
                  <div
                    className={`text-right font-mono font-medium flex items-center justify-end space-x-1 ${
                      pair.change >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {pair.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    <span>
                      {pair.change >= 0 ? "+" : ""}
                      {pair.change}%
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
