"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, TrendingUp, TrendingDown } from "lucide-react"

interface OrderBookProps {
  pair: string
}

interface OrderBookEntry {
  price: number
  amount: number
  total: number
  percentage: number
}

export default function OrderBook({ pair }: OrderBookProps) {
  const [bids, setBids] = useState<OrderBookEntry[]>([])
  const [asks, setAsks] = useState<OrderBookEntry[]>([])
  const [precision, setPrecision] = useState(2)

  useEffect(() => {
    const generateOrderBook = () => {
      const baseBids: OrderBookEntry[] = []
      const baseAsks: OrderBookEntry[] = []
      const maxTotal = 100000

      for (let i = 0; i < 15; i++) {
        const bidAmount = Math.random() * 1000 + 100
        const askAmount = Math.random() * 1000 + 100
        const bidTotal = Math.random() * 50000 + 10000
        const askTotal = Math.random() * 50000 + 10000

        baseBids.push({
          price: 45.5 - i * 0.01,
          amount: bidAmount,
          total: bidTotal,
          percentage: (bidTotal / maxTotal) * 100,
        })

        baseAsks.push({
          price: 45.51 + i * 0.01,
          amount: askAmount,
          total: askTotal,
          percentage: (askTotal / maxTotal) * 100,
        })
      }

      setBids(baseBids)
      setAsks(baseAsks)
    }

    generateOrderBook()
    const interval = setInterval(generateOrderBook, 2000)
    return () => clearInterval(interval)
  }, [pair])

  return (
    <Card className="h-full border-0 rounded-xl bg-gradient-to-b from-card to-card/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
            <span>Order Book</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
              {precision}
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <MoreHorizontal className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <div className="text-xs text-muted-foreground font-medium">{pair}</div>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-5rem)] overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="grid grid-cols-3 gap-2 px-4 py-2 text-xs font-medium text-muted-foreground border-b dark:border-gray-800/50">
            <div>Price (INR)</div>
            <div className="text-right">Amount</div>
            <div className="text-right">Total</div>
          </div>

          {/* Asks (Sell Orders) */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-0.5 p-2">
              {asks
                .slice()
                .reverse()
                .map((ask, index) => (
                  <div
                    key={index}
                    className="relative grid grid-cols-3 gap-2 text-xs hover:bg-red-500/5 dark:hover:bg-red-500/10 px-2 py-1.5 rounded-md cursor-pointer transition-all duration-200 group"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent dark:from-red-500/10 rounded-md"
                      style={{ width: `${ask.percentage}%` }}
                    ></div>
                    <div className="relative text-red-500 font-mono font-medium">{ask.price.toFixed(precision)}</div>
                    <div className="relative text-right font-mono">{ask.amount.toFixed(0)}</div>
                    <div className="relative text-right font-mono text-muted-foreground text-xs">
                      {ask.total.toFixed(0)}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Spread */}
          <div className="px-4 py-3 border-y dark:border-gray-800/50 bg-gradient-to-r from-muted/50 to-muted/20 dark:from-gray-800/50 dark:to-gray-800/20">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="font-medium">45.50</span>
              </div>
              <div className="text-center">
                <div className="text-muted-foreground">Spread</div>
                <div className="font-mono font-medium">0.01 (0.02%)</div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">45.51</span>
                <TrendingDown className="h-3 w-3 text-red-500" />
              </div>
            </div>
          </div>

          {/* Bids (Buy Orders) */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-0.5 p-2">
              {bids.map((bid, index) => (
                <div
                  key={index}
                  className="relative grid grid-cols-3 gap-2 text-xs hover:bg-green-500/5 dark:hover:bg-green-500/10 px-2 py-1.5 rounded-md cursor-pointer transition-all duration-200 group"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent dark:from-green-500/10 rounded-md"
                    style={{ width: `${bid.percentage}%` }}
                  ></div>
                  <div className="relative text-green-500 font-mono font-medium">{bid.price.toFixed(precision)}</div>
                  <div className="relative text-right font-mono">{bid.amount.toFixed(0)}</div>
                  <div className="relative text-right font-mono text-muted-foreground text-xs">
                    {bid.total.toFixed(0)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
