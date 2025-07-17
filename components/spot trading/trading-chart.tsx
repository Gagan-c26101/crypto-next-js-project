"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Maximize2 } from "lucide-react"

interface TradingChartProps {
  pair: string
}

export default function TradingChart({ pair }: TradingChartProps) {
  const timeframes = ["1m", "5m", "15m", "1h", "4h", "1d", "1w"]
  const currentPrice = 45.5
  const priceChange = 2.45

  return (
    <Card className="h-full border-0 rounded-xl">
      <CardHeader className="pb-2 px-3 py-2 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <CardTitle className="text-sm sm:text-lg font-bold">{pair}</CardTitle>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-lg sm:text-2xl font-bold">₹{currentPrice.toFixed(2)}</span>
              <div className={`flex items-center space-x-1 ${priceChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                {priceChange >= 0 ? (
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                ) : (
                  <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4" />
                )}
                <span className="text-xs sm:text-sm font-medium">
                  {priceChange >= 0 ? "+" : ""}
                  {priceChange}%
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="hidden sm:flex space-x-1">
              {timeframes.map((tf) => (
                <Button key={tf} variant={tf === "1h" ? "default" : "ghost"} size="sm" className="h-7 px-2 text-xs">
                  {tf}
                </Button>
              ))}
            </div>
            {/* Mobile timeframe selector */}
            <div className="sm:hidden flex space-x-1 overflow-x-auto">
              {timeframes.slice(0, 4).map((tf) => (
                <Button
                  key={tf}
                  variant={tf === "1h" ? "default" : "ghost"}
                  size="sm"
                  className="h-6 px-1.5 text-xs whitespace-nowrap"
                >
                  {tf}
                </Button>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="h-6 w-6 sm:h-7 sm:w-7 p-0">
              <Maximize2 className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)]">
        <div className="h-full bg-gradient-to-br from-muted/20 to-muted/5 dark:from-gray-800/20 dark:to-gray-800/5 flex items-center justify-center rounded-b-xl">
          <div className="text-center text-muted-foreground px-4">
            <TrendingUp className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 opacity-50" />
            <p className="text-base sm:text-lg font-medium">Trading Chart</p>
            <p className="text-xs sm:text-sm">Real-time price chart for {pair}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
