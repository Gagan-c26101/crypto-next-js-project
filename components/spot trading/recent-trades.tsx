"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, TrendingUp, TrendingDown } from "lucide-react"

interface RecentTradesProps {
  pair: string
}

interface Trade {
  price: number
  amount: number
  time: string
  type: "buy" | "sell"
  id: string
}

export default function RecentTrades({ pair }: RecentTradesProps) {
  const [trades, setTrades] = useState<Trade[]>([])

  useEffect(() => {
    const generateTrades = () => {
      const newTrades: Trade[] = []

      for (let i = 0; i < 25; i++) {
        newTrades.push({
          id: `trade-${i}`,
          price: 45.5 + (Math.random() - 0.5) * 0.1,
          amount: Math.random() * 500 + 50,
          time: new Date(Date.now() - i * 15000).toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          type: Math.random() > 0.5 ? "buy" : "sell",
        })
      }

      setTrades(newTrades)
    }

    generateTrades()
    const interval = setInterval(() => {
      // Add new trade at the beginning
      setTrades((prev) => {
        const newTrade: Trade = {
          id: `trade-${Date.now()}`,
          price: 45.5 + (Math.random() - 0.5) * 0.1,
          amount: Math.random() * 500 + 50,
          time: new Date().toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          type: Math.random() > 0.5 ? "buy" : "sell",
        }
        return [newTrade, ...prev.slice(0, 24)]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [pair])

  return (
    <Card className="h-full border-0 rounded-xl bg-gradient-to-b from-card to-card/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
            <span>Recent Trades</span>
          </CardTitle>
          <div className="flex items-center space-x-1">
            <Activity className="w-3 h-3 text-green-500 animate-pulse" />
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        </div>
        <div className="text-xs text-muted-foreground font-medium">{pair}</div>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-5rem)] overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="grid grid-cols-3 gap-2 px-3 py-2 text-xs font-medium text-muted-foreground border-b dark:border-gray-800/50 bg-muted/10 dark:bg-gray-800/10">
            <div>Price (INR)</div>
            <div className="text-right">Amount</div>
            <div className="text-right">Time</div>
          </div>

          {/* Trades List */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-0.5 p-2">
              {trades.map((trade, index) => (
                <div
                  key={trade.id}
                  className={`grid grid-cols-3 gap-2 text-xs px-2 py-1.5 rounded-md cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                    index === 0 ? "animate-pulse" : ""
                  } ${
                    trade.type === "buy"
                      ? "hover:bg-green-500/5 dark:hover:bg-green-500/10"
                      : "hover:bg-red-500/5 dark:hover:bg-red-500/10"
                  }`}
                >
                  <div
                    className={`font-mono font-medium flex items-center space-x-1 ${
                      trade.type === "buy" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {trade.type === "buy" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    <span>₹{trade.price.toFixed(2)}</span>
                  </div>
                  <div className="text-right font-mono">{trade.amount.toFixed(0)}</div>
                  <div className="text-right text-muted-foreground font-mono text-xs">{trade.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
