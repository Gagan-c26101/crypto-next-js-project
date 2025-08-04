"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"

export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState("order-history")
  const [searchPair, setSearchPair] = useState("")
  const [filter1, setFilter1] = useState("")
  const [filter2, setFilter2] = useState("")
  const [filter3, setFilter3] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const tabs = [
    { id: "transaction-history", label: "Transaction History" },
    { id: "order-history", label: "Order History" },
    { id: "open-order-history", label: "Open Order History" },
    { id: "trade-history", label: "Trade History" },
    { id: "bot-history", label: "Bot History" },
  ]

  const allOrderHistory = [
    {
      pair: "CREDINR",
      orderDate: "May 21, 2025, 12:25:40",
      tradeType: "Limit",
      price: "4.4210",
      quantity: "48.7572",
      filledRemaining: "48.7572/0.0000",
      side: "Sell",
      status: "completed",
    },
    {
      pair: "CREDINR",
      orderDate: "May 21, 2025, 12:25:19",
      tradeType: "Limit",
      price: "4.4210",
      quantity: "87.0707",
      filledRemaining: "0.0000/87.0707",
      side: "Buy",
      status: "cancel",
    },
    {
      pair: "CREDINR",
      orderDate: "May 21, 2025, 12:16:03",
      tradeType: "Limit",
      price: "4.4210",
      quantity: "45.5354",
      filledRemaining: "0.0000/45.5354",
      side: "Buy",
      status: "cancel",
    },
    {
      pair: "CREDINR",
      orderDate: "May 21, 2025, 12:14:54",
      tradeType: "Limit",
      price: "4.4210",
      quantity: "87.0707",
      filledRemaining: "0.0000/87.0707",
      side: "Buy",
      status: "cancel",
    },
    {
      pair: "CREDINR",
      orderDate: "May 21, 2025, 12:13:56",
      tradeType: "Limit",
      price: "4.4210",
      quantity: "50.4384",
      filledRemaining: "50.4384/0.0000",
      side: "Sell",
      status: "completed",
    },
    {
      pair: "CREDINR",
      orderDate: "May 21, 2025, 12:13:22",
      tradeType: "Market",
      price: "Market",
      quantity: "67.2513",
      filledRemaining: "67.2513/0.0000",
      side: "Sell",
      status: "completed",
    },
    {
      pair: "BTCINR",
      orderDate: "May 20, 2025, 15:30:12",
      tradeType: "Limit",
      price: "4200000.00",
      quantity: "0.0025",
      filledRemaining: "0.0025/0.0000",
      side: "Buy",
      status: "completed",
    },
    {
      pair: "ETHINR",
      orderDate: "May 20, 2025, 14:22:45",
      tradeType: "Market",
      price: "Market",
      quantity: "0.5",
      filledRemaining: "0.5/0.0000",
      side: "Sell",
      status: "completed",
    },
    {
      pair: "USDTINR",
      orderDate: "May 19, 2025, 11:15:30",
      tradeType: "Limit",
      price: "83.50",
      quantity: "1000",
      filledRemaining: "500/500",
      side: "Buy",
      status: "partial",
    },
    {
      pair: "ADAINR",
      orderDate: "May 19, 2025, 09:45:20",
      tradeType: "Limit",
      price: "35.20",
      quantity: "100",
      filledRemaining: "0.0000/100",
      side: "Buy",
      status: "cancel",
    },
    {
      pair: "DOGINR",
      orderDate: "May 18, 2025, 16:30:15",
      tradeType: "Market",
      price: "Market",
      quantity: "500",
      filledRemaining: "500/0.0000",
      side: "Sell",
      status: "completed",
    },
    {
      pair: "MATICINR",
      orderDate: "May 18, 2025, 13:20:40",
      tradeType: "Limit",
      price: "65.80",
      quantity: "50",
      filledRemaining: "25/25",
      side: "Buy",
      status: "partial",
    },
  ]

  const handleClear = () => {
    setSearchPair("")
    setFilter1("")
    setFilter2("")
    setFilter3("")
    setCurrentPage(1)
  }

  const handleSearch = () => {
    setCurrentPage(1)
    console.log("Searching with filters:", { searchPair, filter1, filter2, filter3 })
  }

  const filteredHistory = allOrderHistory.filter((order) => {
    if (searchPair && !order.pair.toLowerCase().includes(searchPair.toLowerCase())) {
      return false
    }
    if (filter1 && filter1 !== "all" && order.tradeType.toLowerCase() !== filter1.toLowerCase()) {
      return false
    }
    if (filter2 && filter2 !== "all" && order.side.toLowerCase() !== filter2.toLowerCase()) {
      return false
    }
    if (filter3 && filter3 !== "all" && order.status.toLowerCase() !== filter3.toLowerCase()) {
      return false
    }
    return true
  })

  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = filteredHistory.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">History</h1>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "ghost"}
            onClick={() => setActiveTab(tab.id)}
            className={
              activeTab === tab.id
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Filters */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
            <div className="flex flex-col lg:flex-row gap-4 flex-1">
              <div className="space-y-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search pair"
                    value={searchPair}
                    onChange={(e) => setSearchPair(e.target.value)}
                    className="w-full lg:w-48 pl-10 bg-background border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Select value={filter1} onValueChange={setFilter1}>
                  <SelectTrigger className="w-full lg:w-32 bg-background border-border">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="limit">Limit</SelectItem>
                    <SelectItem value="market">Market</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Select value={filter2} onValueChange={setFilter2}>
                  <SelectTrigger className="w-full lg:w-32 bg-background border-border">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="buy">Buy</SelectItem>
                    <SelectItem value="sell">Sell</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Select value={filter3} onValueChange={setFilter3}>
                  <SelectTrigger className="w-full lg:w-32 bg-background border-border">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancel">Cancelled</SelectItem>
                    <SelectItem value="partial">Partial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-2 w-full lg:w-auto">
              <Button
                onClick={handleSearch}
                className="flex-1 lg:flex-none bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg"
              >
                Search
              </Button>
              <Button
                onClick={handleClear}
                variant="outline"
                className="flex-1 lg:flex-none border-orange-500 text-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white bg-transparent"
              >
                Clear
              </Button>
            </div>
          </div>

          <div className="mt-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-600 dark:hover:bg-green-700">
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="bg-card border-border">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-muted/50">
                <TableHead className="text-muted-foreground font-medium">Pair</TableHead>
                <TableHead className="text-muted-foreground font-medium">Order Date</TableHead>
                <TableHead className="text-muted-foreground font-medium">Trade Type</TableHead>
                <TableHead className="text-muted-foreground font-medium">Price</TableHead>
                <TableHead className="text-muted-foreground font-medium">Quantity</TableHead>
                <TableHead className="text-muted-foreground font-medium">Filled / Remaining</TableHead>
                <TableHead className="text-muted-foreground font-medium">Side</TableHead>
                <TableHead className="text-muted-foreground font-medium">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((order, index) => (
                <TableRow key={index} className="border-border hover:bg-muted/50">
                  <TableCell className="font-medium text-foreground">{order.pair}</TableCell>
                  <TableCell className="text-foreground">{order.orderDate}</TableCell>
                  <TableCell className="text-foreground">{order.tradeType}</TableCell>
                  <TableCell className="text-foreground">{order.price}</TableCell>
                  <TableCell className="text-foreground">{order.quantity}</TableCell>
                  <TableCell className="text-foreground">{order.filledRemaining}</TableCell>
                  <TableCell>
                    <span
                      className={
                        order.side === "Buy"
                          ? "text-green-600 dark:text-green-400 font-medium"
                          : "text-red-600 dark:text-red-400 font-medium"
                      }
                    >
                      {order.side}
                    </span>
                  </TableCell>
                  <TableCell className="text-foreground">{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-border">
            <div className="text-sm text-muted-foreground">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredHistory.length)} of {filteredHistory.length}{" "}
              entries
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-8 w-8 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNumber
                if (totalPages <= 5) {
                  pageNumber = i + 1
                } else if (currentPage <= 3) {
                  pageNumber = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNumber = totalPages - 4 + i
                } else {
                  pageNumber = currentPage - 2 + i
                }

                return (
                  <Button
                    key={pageNumber}
                    variant={currentPage === pageNumber ? "default" : "outline"}
                    size="sm"
                    onClick={() => goToPage(pageNumber)}
                    className={
                      currentPage === pageNumber
                        ? "h-8 w-8 p-0 bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                        : "h-8 w-8 p-0"
                    }
                  >
                    {pageNumber}
                  </Button>
                )
              })}

              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-8 w-8 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
