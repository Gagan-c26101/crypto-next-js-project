"use client"

import { useState } from "react"
import DashboardHeader from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, TrendingUp, ArrowUpDown, Activity } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const tradingFeesData = [
  {
    id: 1,
    market: "DOT / INR",
    icon: "🔴",
    minTradeAmount: "0.1",
    makerFee: "0.5%",
    takerFee: "0.5%",
  },
  {
    id: 2,
    market: "XRP / USDT",
    icon: "🔵",
    minTradeAmount: "1",
    makerFee: "0.1%",
    takerFee: "0.1%",
  },
  {
    id: 3,
    market: "TRX / INR",
    icon: "🔴",
    minTradeAmount: "1",
    makerFee: "0.5%",
    takerFee: "0.5%",
  },
  {
    id: 4,
    market: "LINK / USDT",
    icon: "🔵",
    minTradeAmount: "1",
    makerFee: "0.2%",
    takerFee: "0.2%",
  },
  {
    id: 5,
    market: "COMP / USDT",
    icon: "🟢",
    minTradeAmount: "0.01",
    makerFee: "0.2%",
    takerFee: "0.2%",
  },
  {
    id: 6,
    market: "AAVE / INR",
    icon: "🟣",
    minTradeAmount: "0.001",
    makerFee: "0.5%",
    takerFee: "0.5%",
  },
  {
    id: 7,
    market: "TON / USDT",
    icon: "🔵",
    minTradeAmount: "0.01",
    makerFee: "0.2%",
    takerFee: "0.2%",
  },
  {
    id: 8,
    market: "BTC / USDT",
    icon: "🟡",
    minTradeAmount: "0.0001",
    makerFee: "0.1%",
    takerFee: "0.1%",
  },
  {
    id: 9,
    market: "ETH / USDT",
    icon: "🔵",
    minTradeAmount: "0.001",
    makerFee: "0.1%",
    takerFee: "0.1%",
  },
  {
    id: 10,
    market: "BNB / USDT",
    icon: "🟡",
    minTradeAmount: "0.01",
    makerFee: "0.1%",
    takerFee: "0.1%",
  },
]

const depositWithdrawData = [
  {
    id: 1,
    currency: "Bitcoin (BTC)",
    icon: "🟡",
    depositFee: "Free",
    withdrawFee: "0.0005 BTC",
    minDeposit: "0.001 BTC",
    minWithdraw: "0.001 BTC",
  },
  {
    id: 2,
    currency: "Ethereum (ETH)",
    icon: "🔵",
    depositFee: "Free",
    withdrawFee: "0.005 ETH",
    minDeposit: "0.01 ETH",
    minWithdraw: "0.01 ETH",
  },
  {
    id: 3,
    currency: "USDT (TRC20)",
    icon: "🟢",
    depositFee: "Free",
    withdrawFee: "1 USDT",
    minDeposit: "10 USDT",
    minWithdraw: "10 USDT",
  },
  {
    id: 4,
    currency: "Indian Rupee (INR)",
    icon: "🇮🇳",
    depositFee: "Free",
    withdrawFee: "₹10",
    minDeposit: "₹100",
    minWithdraw: "₹100",
  },
]

const statusData = [
  {
    id: 1,
    currency: "Bitcoin (BTC)",
    icon: "🟡",
    depositStatus: "Active",
    withdrawStatus: "Active",
    network: "Bitcoin",
  },
  {
    id: 2,
    currency: "Ethereum (ETH)",
    icon: "🔵",
    depositStatus: "Active",
    withdrawStatus: "Active",
    network: "Ethereum",
  },
  {
    id: 3,
    currency: "USDT (TRC20)",
    icon: "🟢",
    depositStatus: "Active",
    withdrawStatus: "Maintenance",
    network: "Tron",
  },
  {
    id: 4,
    currency: "Indian Rupee (INR)",
    icon: "🇮🇳",
    depositStatus: "Active",
    withdrawStatus: "Active",
    network: "Bank Transfer",
  },
]

export default function FeesPage() {
  const [activeTab, setActiveTab] = useState("trading")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 7

  const getCurrentData = () => {
    switch (activeTab) {
      case "trading":
        return tradingFeesData
      case "deposit-withdraw":
        return depositWithdrawData
      case "status":
        return statusData
      default:
        return tradingFeesData
    }
  }

  const filteredData = getCurrentData().filter((item) => {
    const searchField = activeTab === "trading" ? item.market : item.currency
    return searchField.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case "trading":
        return <TrendingUp className="h-4 w-4" />
      case "deposit-withdraw":
        return <ArrowUpDown className="h-4 w-4" />
      case "status":
        return <Activity className="h-4 w-4" />
      default:
        return null
    }
  }

  const renderTradingFeesTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border/50">
            <th className="text-left py-4 px-6 font-semibold text-foreground">Markets</th>
            <th className="text-left py-4 px-6 font-semibold text-foreground">Min Trade Amount</th>
            <th className="text-left py-4 px-6 font-semibold text-foreground">Maker Fee</th>
            <th className="text-left py-4 px-6 font-semibold text-foreground">Taker Fee</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr
              key={item.id}
              className={`border-b border-border/30 hover:bg-muted/30 transition-all duration-200 ${index % 2 === 0 ? "bg-muted/10" : ""}`}
            >
              <td className="py-5 px-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <span className="font-semibold text-foreground">{item.market}</span>
                </div>
              </td>
              <td className="py-5 px-6">
                <span className="font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                  {item.minTradeAmount}
                </span>
              </td>
              <td className="py-5 px-6">
                <span className="font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                  {item.makerFee}
                </span>
              </td>
              <td className="py-5 px-6">
                <span className="font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                  {item.takerFee}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderDepositWithdrawTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border/50">
            <th className="text-left py-4 px-6 font-semibold text-foreground">Currency</th>
            <th className="text-left py-4 px-6 font-semibold text-foreground">Deposit Fee</th>
            <th className="text-left py-4 px-6 font-semibold text-foreground">Withdraw Fee</th>
            <th className="text-left py-4 px-6 font-semibold text-foreground">Min Deposit</th>
            <th className="text-left py-4 px-6 font-semibold text-foreground">Min Withdraw</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr
              key={item.id}
              className={`border-b border-border/30 hover:bg-muted/30 transition-all duration-200 ${index % 2 === 0 ? "bg-muted/10" : ""}`}
            >
              <td className="py-5 px-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <span className="font-semibold text-foreground">{item.currency}</span>
                </div>
              </td>
              <td className="py-5 px-6">
                <span className="font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                  {item.depositFee}
                </span>
              </td>
              <td className="py-5 px-6">
                <span className="font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                  {item.withdrawFee}
                </span>
              </td>
              <td className="py-5 px-6">
                <span className="font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                  {item.minDeposit}
                </span>
              </td>
              <td className="py-5 px-6">
                <span className="font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                  {item.minWithdraw}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderStatusTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border/50">
            <th className="text-left py-4 px-6 font-semibold text-foreground">Currency</th>
            <th className="text-left py-4 px-6 font-semibold text-foreground">Network</th>
            <th className="text-left py-4 px-6 font-semibold text-foreground">Deposit Status</th>
            <th className="text-left py-4 px-6 font-semibold text-foreground">Withdraw Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr
              key={item.id}
              className={`border-b border-border/30 hover:bg-muted/30 transition-all duration-200 ${index % 2 === 0 ? "bg-muted/10" : ""}`}
            >
              <td className="py-5 px-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <span className="font-semibold text-foreground">{item.currency}</span>
                </div>
              </td>
              <td className="py-5 px-6">
                <span className="font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                  {item.network}
                </span>
              </td>
              <td className="py-5 px-6">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm ${
                    item.depositStatus === "Active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                  }`}
                >
                  {item.depositStatus}
                </span>
              </td>
              <td className="py-5 px-6">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm ${
                    item.withdrawStatus === "Active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                  }`}
                >
                  {item.withdrawStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <>
      <DashboardHeader />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 pt-[100px]">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                Trading Fees & Charges
              </h1>
              <p className="text-muted-foreground text-lg">
                Transparent pricing for all your trading and transaction needs
              </p>
            </div>

            <Card className="shadow-2xl border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-semibold mb-6">Fee Structure</CardTitle>

                {/* Tab Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => {
                      setActiveTab("trading")
                      setCurrentPage(1)
                    }}
                    variant={activeTab === "trading" ? "default" : "outline"}
                    className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-200 ${
                      activeTab === "trading"
                        ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    {getTabIcon("trading")}
                    Trading Fees
                  </Button>
                  <Button
                    onClick={() => {
                      setActiveTab("deposit-withdraw")
                      setCurrentPage(1)
                    }}
                    variant={activeTab === "deposit-withdraw" ? "default" : "outline"}
                    className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-200 ${
                      activeTab === "deposit-withdraw"
                        ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    {getTabIcon("deposit-withdraw")}
                    Deposit & Withdraw Fees
                  </Button>
                  <Button
                    onClick={() => {
                      setActiveTab("status")
                      setCurrentPage(1)
                    }}
                    variant={activeTab === "status" ? "default" : "outline"}
                    className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-200 ${
                      activeTab === "status"
                        ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    {getTabIcon("status")}
                    Deposit & Withdraw Status
                  </Button>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-md mt-6">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder={activeTab === "trading" ? "Search by Market" : "Search by Currency"}
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                      setCurrentPage(1)
                    }}
                    className="pl-12 pr-4 py-3 bg-muted/30 border-border/50 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500/50 transition-all duration-200"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-0">
                {/* Table Content */}
                <div className="bg-card/80 rounded-b-lg">
                  {activeTab === "trading" && renderTradingFeesTable()}
                  {activeTab === "deposit-withdraw" && renderDepositWithdrawTable()}
                  {activeTab === "status" && renderStatusTable()}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="p-6 border-t border-border/30">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                              e.preventDefault()
                              if (currentPage > 1) setCurrentPage(currentPage - 1)
                            }}
                            className={`${currentPage === 1 ? "pointer-events-none opacity-50" : "hover:bg-orange-50 hover:text-orange-600"}`}
                          />
                        </PaginationItem>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <PaginationItem key={page}>
                            <PaginationLink
                              href="#"
                              onClick={(e) => {
                                e.preventDefault()
                                setCurrentPage(page)
                              }}
                              isActive={currentPage === page}
                              className={
                                currentPage === page
                                  ? "bg-orange-500 text-white hover:bg-orange-600"
                                  : "hover:bg-orange-50 hover:text-orange-600"
                              }
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        ))}

                        <PaginationItem>
                          <PaginationNext
                            href="#"
                            onClick={(e) => {
                              e.preventDefault()
                              if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                            }}
                            className={`${currentPage === totalPages ? "pointer-events-none opacity-50" : "hover:bg-orange-50 hover:text-orange-600"}`}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
