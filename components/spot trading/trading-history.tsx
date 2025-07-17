"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Clock, History, TrendingUp } from "lucide-react"

const openOrders = [
  {
    id: "1",
    pair: "CRED/INR",
    type: "Buy",
    amount: "100",
    price: "45.25",
    filled: "0",
    status: "Open",
    time: "2024-01-15 10:30:25",
  },
  {
    id: "2",
    pair: "CRED/INR",
    type: "Sell",
    amount: "50",
    price: "45.75",
    filled: "0",
    status: "Open",
    time: "2024-01-15 10:25:15",
  },
]

const orderHistory = [
  {
    id: "1",
    pair: "CRED/INR",
    type: "Buy",
    amount: "200",
    price: "45.10",
    filled: "200",
    status: "Filled",
    time: "2024-01-15 09:45:30",
  },
  {
    id: "2",
    pair: "CRED/INR",
    type: "Sell",
    amount: "150",
    price: "45.60",
    filled: "150",
    status: "Filled",
    time: "2024-01-15 09:30:20",
  },
  {
    id: "3",
    pair: "CRED/INR",
    type: "Buy",
    amount: "75",
    price: "44.95",
    filled: "0",
    status: "Cancelled",
    time: "2024-01-15 09:15:10",
  },
]

const tradeHistory = [
  { id: "1", pair: "CRED/INR", type: "Buy", amount: "200", price: "45.10", fee: "0.90", time: "2024-01-15 09:45:30" },
  { id: "2", pair: "CRED/INR", type: "Sell", amount: "150", price: "45.60", fee: "0.68", time: "2024-01-15 09:30:20" },
  { id: "3", pair: "CRED/INR", type: "Buy", amount: "300", price: "44.80", fee: "1.34", time: "2024-01-15 08:20:15" },
]

export default function TradingTabs() {
  const [activeTab, setActiveTab] = useState("open-orders")

  const tabs = [
    { key: "open-orders", label: "Open Orders", shortLabel: "Open", icon: Clock, count: openOrders.length },
    { key: "order-history", label: "Order History", shortLabel: "Orders", icon: History, count: orderHistory.length },
    {
      key: "trade-history",
      label: "Trade History",
      shortLabel: "Trades",
      icon: TrendingUp,
      count: tradeHistory.length,
    },
  ]

  return (
    <Card className="h-full border-0 rounded-xl bg-gradient-to-b from-card to-card/50">
      <CardHeader className="pb-2 px-3 py-2 sm:pb-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-start space-x-1 overflow-x-auto">
          {tabs.map((tab) => (
            <Button
              key={tab.key}
              variant={activeTab === tab.key ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-1 sm:space-x-2 h-7 sm:h-9 px-2 sm:px-3 lg:px-4 whitespace-nowrap flex-shrink-0 text-xs sm:text-sm ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                  : "hover:bg-muted/50 dark:hover:bg-gray-800/50"
              }`}
            >
              <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium hidden sm:inline">{tab.label}</span>
              <span className="font-medium sm:hidden">{tab.shortLabel}</span>
              {tab.count > 0 && (
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeTab === tab.key ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-3rem)] sm:h-[calc(100%-5rem)] overflow-hidden">
        {activeTab === "open-orders" && (
          <div className="h-full flex flex-col">
            {/* Desktop Header */}
            <div className="hidden lg:grid lg:grid-cols-8 gap-4 px-6 py-3 text-xs font-medium text-muted-foreground border-b dark:border-gray-800/50 bg-muted/10 dark:bg-gray-800/10">
              <div>Pair</div>
              <div>Type</div>
              <div>Amount</div>
              <div>Price</div>
              <div>Filled</div>
              <div>Status</div>
              <div>Time</div>
              <div>Action</div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden grid grid-cols-4 gap-2 px-3 py-2 text-xs font-medium text-muted-foreground border-b dark:border-gray-800/50 bg-muted/10 dark:bg-gray-800/10">
              <div>Pair</div>
              <div>Type</div>
              <div>Price</div>
              <div>Action</div>
            </div>

            {/* Orders List */}
            <div className="flex-1 overflow-y-auto">
              {openOrders.length > 0 ? (
                <div className="space-y-1 p-2 sm:p-3">
                  {openOrders.map((order) => (
                    <div key={order.id}>
                      {/* Desktop Layout */}
                      <div className="hidden lg:grid lg:grid-cols-8 gap-4 px-3 py-3 text-sm hover:bg-muted/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-200">
                        <div className="font-medium">{order.pair}</div>
                        <div className={`font-medium ${order.type === "Buy" ? "text-green-500" : "text-red-500"}`}>
                          {order.type}
                        </div>
                        <div className="font-mono">{order.amount}</div>
                        <div className="font-mono">₹{order.price}</div>
                        <div className="font-mono">{order.filled}</div>
                        <div className="text-orange-500 font-medium">{order.status}</div>
                        <div className="text-muted-foreground text-xs">{order.time}</div>
                        <div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-500/10"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Mobile Layout */}
                      <div className="lg:hidden">
                        <div className="grid grid-cols-4 gap-2 px-2 py-2 text-xs hover:bg-muted/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-200">
                          <div className="font-medium">{order.pair}</div>
                          <div className={`font-medium ${order.type === "Buy" ? "text-green-500" : "text-red-500"}`}>
                            {order.type}
                          </div>
                          <div className="font-mono">₹{order.price}</div>
                          <div className="flex justify-end">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-5 w-5 p-0 text-red-500 hover:text-red-600 hover:bg-red-500/10"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="px-2 pb-2 text-xs text-muted-foreground">
                          <div className="flex justify-between">
                            <span>Amount: {order.amount}</span>
                            <span>
                              Status: <span className="text-orange-500">{order.status}</span>
                            </span>
                          </div>
                          <div className="mt-1 text-xs">{order.time}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <div className="text-center">
                    <Clock className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-sm sm:text-lg font-medium">No open orders</p>
                    <p className="text-xs sm:text-sm">Your active orders will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "order-history" && (
          <div className="h-full flex flex-col">
            {/* Desktop Header */}
            <div className="hidden lg:grid lg:grid-cols-7 gap-4 px-6 py-3 text-xs font-medium text-muted-foreground border-b dark:border-gray-800/50 bg-muted/10 dark:bg-gray-800/10">
              <div>Pair</div>
              <div>Type</div>
              <div>Amount</div>
              <div>Price</div>
              <div>Filled</div>
              <div>Status</div>
              <div>Time</div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden grid grid-cols-3 gap-2 px-3 py-2 text-xs font-medium text-muted-foreground border-b dark:border-gray-800/50 bg-muted/10 dark:bg-gray-800/10">
              <div>Pair</div>
              <div>Type</div>
              <div>Status</div>
            </div>

            {/* Orders List */}
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-1 p-2 sm:p-3">
                {orderHistory.map((order) => (
                  <div key={order.id}>
                    {/* Desktop Layout */}
                    <div className="hidden lg:grid lg:grid-cols-7 gap-4 px-3 py-3 text-sm hover:bg-muted/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-200">
                      <div className="font-medium">{order.pair}</div>
                      <div className={`font-medium ${order.type === "Buy" ? "text-green-500" : "text-red-500"}`}>
                        {order.type}
                      </div>
                      <div className="font-mono">{order.amount}</div>
                      <div className="font-mono">₹{order.price}</div>
                      <div className="font-mono">{order.filled}</div>
                      <div
                        className={`font-medium ${
                          order.status === "Filled"
                            ? "text-green-500"
                            : order.status === "Cancelled"
                              ? "text-red-500"
                              : "text-orange-500"
                        }`}
                      >
                        {order.status}
                      </div>
                      <div className="text-muted-foreground text-xs">{order.time}</div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden">
                      <div className="grid grid-cols-3 gap-2 px-2 py-2 text-xs hover:bg-muted/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-200">
                        <div className="font-medium">{order.pair}</div>
                        <div className={`font-medium ${order.type === "Buy" ? "text-green-500" : "text-red-500"}`}>
                          {order.type}
                        </div>
                        <div
                          className={`font-medium ${
                            order.status === "Filled"
                              ? "text-green-500"
                              : order.status === "Cancelled"
                                ? "text-red-500"
                                : "text-orange-500"
                          }`}
                        >
                          {order.status}
                        </div>
                      </div>
                      <div className="px-2 pb-2 text-xs text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Amount: {order.amount}</span>
                          <span>Price: ₹{order.price}</span>
                        </div>
                        <div className="flex justify-between mt-1">
                          <span>Filled: {order.filled}</span>
                          <span>{order.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "trade-history" && (
          <div className="h-full flex flex-col">
            {/* Desktop Header */}
            <div className="hidden lg:grid lg:grid-cols-6 gap-4 px-6 py-3 text-xs font-medium text-muted-foreground border-b dark:border-gray-800/50 bg-muted/10 dark:bg-gray-800/10">
              <div>Pair</div>
              <div>Type</div>
              <div>Amount</div>
              <div>Price</div>
              <div>Fee</div>
              <div>Time</div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden grid grid-cols-3 gap-2 px-3 py-2 text-xs font-medium text-muted-foreground border-b dark:border-gray-800/50 bg-muted/10 dark:bg-gray-800/10">
              <div>Pair</div>
              <div>Type</div>
              <div>Price</div>
            </div>

            {/* Trades List */}
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-1 p-2 sm:p-3">
                {tradeHistory.map((trade) => (
                  <div key={trade.id}>
                    {/* Desktop Layout */}
                    <div className="hidden lg:grid lg:grid-cols-6 gap-4 px-3 py-3 text-sm hover:bg-muted/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-200">
                      <div className="font-medium">{trade.pair}</div>
                      <div className={`font-medium ${trade.type === "Buy" ? "text-green-500" : "text-red-500"}`}>
                        {trade.type}
                      </div>
                      <div className="font-mono">{trade.amount}</div>
                      <div className="font-mono">₹{trade.price}</div>
                      <div className="font-mono">₹{trade.fee}</div>
                      <div className="text-muted-foreground text-xs">{trade.time}</div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden">
                      <div className="grid grid-cols-3 gap-2 px-2 py-2 text-xs hover:bg-muted/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-200">
                        <div className="font-medium">{trade.pair}</div>
                        <div className={`font-medium ${trade.type === "Buy" ? "text-green-500" : "text-red-500"}`}>
                          {trade.type}
                        </div>
                        <div className="font-mono">₹{trade.price}</div>
                      </div>
                      <div className="px-2 pb-2 text-xs text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Amount: {trade.amount}</span>
                          <span>Fee: ₹{trade.fee}</span>
                        </div>
                        <div className="mt-1 text-xs">{trade.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
