"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"

interface TradingHeaderProps {
  selectedPair: string
}

export default function TradingHeader({ selectedPair }: TradingHeaderProps) {
  const [priceData, setPriceData] = useState({
    price: 8.2027,
    change: -0.05,
    changeAmount: -0.004,
    high24h: 8.85,
    low24h: 8.1,
    volume24h: "339489.33",
    volumeUSDT: "2.78M",
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setPriceData((prev) => ({
        ...prev,
        price: prev.price + (Math.random() - 0.5) * 0.01,
        change: prev.change + (Math.random() - 0.5) * 0.1,
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full px-4 py-3 bg-card dark:bg-gray-900 rounded-xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Main Pair Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xs">
                {selectedPair.split("/")[0].charAt(0)}
              </div>
              <h2 className="text-lg font-bold text-foreground">{selectedPair}</h2>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold font-mono text-foreground">₹{priceData.price.toFixed(6)}</div>
              <div
                className={`flex items-center space-x-1 px-2 py-1 rounded text-sm ${
                  priceData.change >= 0
                    ? "bg-green-500/10 text-green-500 dark:bg-green-500/20"
                    : "bg-red-500/10 text-red-500 dark:bg-red-500/20"
                }`}
              >
                {priceData.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                <span className="font-medium">
                  {priceData.change >= 0 ? "+" : ""}
                  {priceData.change.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Market Stats */}
        <div className="flex items-center space-x-6 text-xs">
          <div className="text-center">
            <div className="text-muted-foreground">24h Change</div>
            <div className={`font-mono font-medium ${priceData.change >= 0 ? "text-green-500" : "text-red-500"}`}>
              {priceData.change >= 0 ? "+" : ""}
              {priceData.change.toFixed(2)}%
            </div>
          </div>

          <div className="text-center">
            <div className="text-muted-foreground">24h High</div>
            <div className="font-mono font-medium text-foreground">{priceData.high24h.toFixed(2)}</div>
          </div>

          <div className="text-center">
            <div className="text-muted-foreground">24h Low</div>
            <div className="font-mono font-medium text-foreground">{priceData.low24h.toFixed(2)}</div>
          </div>

          <div className="text-center">
            <div className="text-muted-foreground">24h Volume (CRED)</div>
            <div className="font-mono font-medium text-foreground">{priceData.volume24h}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
