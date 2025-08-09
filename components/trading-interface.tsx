"use client"

import { useState } from "react"
import OrderBook from "@/components/spot trading/order-book"
import CoinSearch from "@/components/coin-search"
import RecentTrades from "@/components/spot trading/recent-trades"
import TradingChart from "@/components/spot trading/trading-chart"
import OrderForms from "@/components/order-forms"
import TradingHistory from "@/components/spot trading/trading-history"
import TradingHeader from "@/components/spot trading/trading-header"

export default function TradingInterface() {
  const [selectedPair, setSelectedPair] = useState("CRED/INR")

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-background via-background to-muted/10 dark:from-black dark:via-black dark:to-gray-900/20 overflow-hidden">
      {/* Main Trading Grid */}
      <div className="flex-1 w-full max-w-full overflow-hidden">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-2 p-2 h-full">
          {/* Left Panel - Order Book */}
          <div className="col-span-3 bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm border dark:border-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-0">
            <OrderBook pair={selectedPair} />
          </div>

          {/* Center Panel - Trading Header, Chart, and Order Forms */}
          <div className="col-span-6 flex flex-col gap-2 min-h-0">
            {/* Trading Header - positioned above the chart */}
            <div className="h-auto bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm border dark:border-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <TradingHeader selectedPair={selectedPair} />
            </div>

            {/* Trading Chart */}
            <div className="h-[50%] bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm border dark:border-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-0">
              <TradingChart pair={selectedPair} />
            </div>

            {/* Order Forms */}
            <div className="h-[40%] bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm border dark:border-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-0">
              <OrderForms pair={selectedPair} />
            </div>
          </div>

          {/* Right Panel - Coin Search and Recent Trades */}
          <div className="col-span-3 flex flex-col gap-2 min-h-0">
            {/* Coin Search */}
            <div className="h-80 bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm border dark:border-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-0">
              <CoinSearch onPairSelect={setSelectedPair} selectedPair={selectedPair} />
            </div>

            {/* Recent Trades */}
            <div className="flex-1 bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm border dark:border-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-0">
              <RecentTrades pair={selectedPair} />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex flex-col h-full gap-2 p-2">
          {/* Mobile Trading Header */}
          <div className="h-auto bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm border dark:border-gray-800 rounded-xl shadow-lg">
            <TradingHeader selectedPair={selectedPair} />
          </div>

          {/* Mobile Chart */}
          <div className="h-[450px] sm:h-[450px] bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm border dark:border-gray-800 rounded-xl shadow-lg">
            <TradingChart pair={selectedPair} />
          </div>

          {/* Mobile Order Forms */}
          <div className="h-130 sm:h-100 bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm border dark:border-gray-800 rounded-xl shadow-lg">
            <OrderForms pair={selectedPair} />
          </div>

          {/* Mobile Trading Tabs - Now visible on mobile */}
          <div className="h-64 sm:h-80 bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm border dark:border-gray-800 rounded-xl shadow-lg">
            <TradingHistory />
          </div>

          {/* Mobile Tabs for Markets, Order Book, Trades */}
          <div className="flex-1 min-h-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 h-full">
              <div className="bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm border dark:border-gray-800 rounded-xl shadow-lg min-h-0">
                <CoinSearch onPairSelect={setSelectedPair} selectedPair={selectedPair} />
              </div>
              <div className="bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm border dark:border-gray-800 rounded-xl shadow-lg min-h-0">
                <OrderBook pair={selectedPair} />
              </div>
              <div className="bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm border dark:border-gray-800 rounded-xl shadow-lg min-h-0">
                <RecentTrades pair={selectedPair} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Panel - Trading History Tabs (Desktop only) */}
      <div className="hidden lg:block h-64 bg-card/80 dark:bg-gray-900/80 backdrop-blur-sm border dark:border-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 m-2 flex-shrink-0">
        <TradingHistory />
      </div>
    </div>
  )
}
