"use client"

import { useState, useEffect, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import {
  Search,
  TrendingUp,
  TrendingDown,
  Star,
  Flame,
  Volume2,
  BarChart3,
  Filter,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface CryptoCurrency {
  id: string
  symbol: string
  name: string
  price: number
  change24h: number
  volume24h: string
  marketCap: string
  high24h: number
  low24h: number
  isHot?: boolean
  isFavorite?: boolean
  logo: string
  rank: number
}

const mockCryptoData: CryptoCurrency[] = [
  {
    id: "cred",
    symbol: "CRED",
    name: "CredBull Token",
    price: 45.5,
    change24h: 2.45,
    volume24h: "2.5M",
    marketCap: "125M",
    high24h: 46.8,
    low24h: 44.2,
    isHot: true,
    logo: "C",
    rank: 1,
  },
  {
    id: "bitcoin",
    symbol: "BTC",
    name: "Bitcoin",
    price: 3250000,
    change24h: -1.23,
    volume24h: "125M",
    marketCap: "62.5T",
    high24h: 3280000,
    low24h: 3200000,
    isHot: true,
    logo: "₿",
    rank: 2,
  },
  {
    id: "ethereum",
    symbol: "ETH",
    name: "Ethereum",
    price: 195000,
    change24h: 3.67,
    volume24h: "85M",
    marketCap: "23.4T",
    high24h: 198000,
    low24h: 188000,
    logo: "Ξ",
    rank: 3,
  },
  {
    id: "binancecoin",
    symbol: "BNB",
    name: "BNB",
    price: 23500,
    change24h: 1.85,
    volume24h: "45M",
    marketCap: "3.6T",
    high24h: 24000,
    low24h: 23000,
    logo: "B",
    rank: 4,
  },
  {
    id: "cardano",
    symbol: "ADA",
    name: "Cardano",
    price: 35.5,
    change24h: -2.15,
    volume24h: "15M",
    marketCap: "1.2T",
    high24h: 37.2,
    low24h: 34.8,
    logo: "A",
    rank: 5,
  },
  {
    id: "solana",
    symbol: "SOL",
    name: "Solana",
    price: 7250,
    change24h: 5.23,
    volume24h: "35M",
    marketCap: "3.1T",
    high24h: 7500,
    low24h: 6900,
    isHot: true,
    logo: "S",
    rank: 6,
  },
  {
    id: "polkadot",
    symbol: "DOT",
    name: "Polkadot",
    price: 525,
    change24h: -0.85,
    volume24h: "12M",
    marketCap: "650B",
    high24h: 535,
    low24h: 520,
    logo: "D",
    rank: 7,
  },
  {
    id: "polygon",
    symbol: "MATIC",
    name: "Polygon",
    price: 65,
    change24h: 4.12,
    volume24h: "25M",
    marketCap: "600B",
    high24h: 68,
    low24h: 62,
    logo: "M",
    rank: 8,
  },
  {
    id: "chainlink",
    symbol: "LINK",
    name: "Chainlink",
    price: 1250,
    change24h: -1.45,
    volume24h: "18M",
    marketCap: "750B",
    high24h: 1280,
    low24h: 1230,
    logo: "L",
    rank: 9,
  },
  {
    id: "litecoin",
    symbol: "LTC",
    name: "Litecoin",
    price: 6800,
    change24h: 0.95,
    volume24h: "22M",
    marketCap: "500B",
    high24h: 6900,
    low24h: 6700,
    logo: "Ł",
    rank: 10,
  },
  {
    id: "ripple",
    symbol: "XRP",
    name: "Ripple",
    price: 45.2,
    change24h: -0.75,
    volume24h: "28M",
    marketCap: "2.4T",
    high24h: 46.1,
    low24h: 44.8,
    logo: "X",
    rank: 11,
  },
  {
    id: "dogecoin",
    symbol: "DOGE",
    name: "Dogecoin",
    price: 8.5,
    change24h: 12.34,
    volume24h: "42M",
    marketCap: "1.1T",
    high24h: 8.9,
    low24h: 7.6,
    isHot: true,
    logo: "D",
    rank: 12,
  },
  {
    id: "avalanche",
    symbol: "AVAX",
    name: "Avalanche",
    price: 2850,
    change24h: 6.78,
    volume24h: "19M",
    marketCap: "1.0T",
    high24h: 2920,
    low24h: 2680,
    logo: "A",
    rank: 13,
  },
  {
    id: "shiba",
    symbol: "SHIB",
    name: "Shiba Inu",
    price: 0.0012,
    change24h: -3.45,
    volume24h: "31M",
    marketCap: "700B",
    high24h: 0.0013,
    low24h: 0.0011,
    logo: "S",
    rank: 14,
  },
  {
    id: "tron",
    symbol: "TRX",
    name: "TRON",
    price: 8.9,
    change24h: 1.23,
    volume24h: "16M",
    marketCap: "800B",
    high24h: 9.1,
    low24h: 8.7,
    logo: "T",
    rank: 15,
  },
]

const ITEMS_PER_PAGE = 10

export default function MarketPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const [sortBy, setSortBy] = useState("marketCap")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [cryptoData, setCryptoData] = useState(mockCryptoData)
  const [currentPage, setCurrentPage] = useState(1)

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData((prev) =>
        prev.map((crypto) => ({
          ...crypto,
          price: crypto.price + (Math.random() - 0.5) * crypto.price * 0.001,
          change24h: crypto.change24h + (Math.random() - 0.5) * 0.5,
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const filteredAndSortedData = useMemo(() => {
    const filtered = cryptoData.filter((crypto) => {
      const matchesSearch =
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())

      switch (activeFilter) {
        case "favorites":
          return matchesSearch && favorites.has(crypto.id)
        case "gainers":
          return matchesSearch && crypto.change24h > 0
        case "losers":
          return matchesSearch && crypto.change24h < 0
        case "hot":
          return matchesSearch && crypto.isHot
        default:
          return matchesSearch
      }
    })

    return filtered.sort((a, b) => {
      let aValue: number, bValue: number

      switch (sortBy) {
        case "price":
          aValue = a.price
          bValue = b.price
          break
        case "change24h":
          aValue = a.change24h
          bValue = b.change24h
          break
        case "volume24h":
          aValue = Number.parseFloat(a.volume24h.replace(/[^\d.]/g, ""))
          bValue = Number.parseFloat(b.volume24h.replace(/[^\d.]/g, ""))
          break
        case "marketCap":
        default:
          aValue = Number.parseFloat(a.marketCap.replace(/[^\d.]/g, ""))
          bValue = Number.parseFloat(b.marketCap.replace(/[^\d.]/g, ""))
          break
      }

      return sortOrder === "desc" ? bValue - aValue : aValue - bValue
    })
  }, [cryptoData, searchTerm, activeFilter, sortBy, sortOrder, favorites])

  // Pagination logic
  const totalPages = Math.ceil(filteredAndSortedData.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentData = filteredAndSortedData.slice(startIndex, endIndex)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, activeFilter, sortBy, sortOrder])

  const toggleFavorite = (cryptoId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(cryptoId)) {
        newFavorites.delete(cryptoId)
      } else {
        newFavorites.add(cryptoId)
      }
      return newFavorites
    })
  }

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "desc" ? "asc" : "desc")
    } else {
      setSortBy(column)
      setSortOrder("desc")
    }
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/5 dark:from-black dark:via-gray-950 dark:to-gray-900/50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header Section */}
      <div className="relative container mx-auto px-4 py-8 lg:py-12 max-w-7xl">
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Live Market Data</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-4">
            Market
          </h1>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover and track live cryptocurrency prices, market data, and trading volumes for 100+ digital assets with
            real-time updates
          </p>
        </div>

        {/* Enhanced Filter Tabs - Responsive */}
        <div className="flex flex-wrap gap-2 mb-6 lg:mb-8 justify-center px-4">
          {[
            { key: "all", label: "All Markets", icon: null, count: cryptoData.length },
            { key: "favorites", label: "Favorites", icon: Star, count: favorites.size },
            { key: "hot", label: "Trending", icon: Flame, count: cryptoData.filter((c) => c.isHot).length },
            {
              key: "gainers",
              label: "Top Gainers",
              icon: TrendingUp,
              count: cryptoData.filter((c) => c.change24h > 0).length,
            },
            {
              key: "losers",
              label: "Top Losers",
              icon: TrendingDown,
              count: cryptoData.filter((c) => c.change24h < 0).length,
            },
          ].map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-1 lg:space-x-2 h-8 lg:h-10 px-2 lg:px-4 rounded-xl transition-all duration-300 text-xs lg:text-sm ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:from-orange-600 hover:to-red-600"
                  : "bg-card/60 dark:bg-gray-900/60 backdrop-blur-sm border border-muted dark:border-gray-800 hover:border-orange-500/30 dark:hover:border-orange-500/30 hover:bg-card dark:hover:bg-gray-900 shadow-lg"
              }`}
            >
              {filter.icon && <filter.icon className="w-3 h-3 lg:w-4 lg:h-4" />}
              <span className="font-medium hidden sm:inline">{filter.label}</span>
              <span className="font-medium sm:hidden">
                {filter.key === "all"
                  ? "All"
                  : filter.key === "favorites"
                    ? "Fav"
                    : filter.key === "hot"
                      ? "Hot"
                      : filter.key === "gainers"
                        ? "↑"
                        : "↓"}
              </span>
              <span
                className={`text-xs px-1 lg:px-1.5 py-0.5 rounded-full ${
                  activeFilter === filter.key
                    ? "bg-white/20 text-white"
                    : "bg-muted dark:bg-gray-800 text-muted-foreground"
                }`}
              >
                {filter.count}
              </span>
            </Button>
          ))}
        </div>

        {/* Market Card */}
        <div className="w-full max-w-none">
          <Card className="border-0 bg-card/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-2xl rounded-2xl lg:rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              {/* Table Header with Search */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-4 px-4 lg:px-6 py-4 lg:py-6 bg-gradient-to-r from-muted/50 to-muted/30 dark:from-gray-800/50 dark:to-gray-800/30">
                <div className="col-span-4 text-xs lg:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Asset
                </div>
                <div className="col-span-2 text-right">
                  <button
                    onClick={() => handleSort("price")}
                    className="flex items-center justify-end space-x-2 hover:text-foreground transition-colors text-xs lg:text-sm font-semibold text-muted-foreground uppercase tracking-wider w-full"
                  >
                    <span>Price</span>
                    <ArrowUpDown className="w-3 h-3 lg:w-4 lg:h-4" />
                  </button>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    onClick={() => handleSort("change24h")}
                    className="flex items-center justify-end space-x-2 hover:text-foreground transition-colors text-xs lg:text-sm font-semibold text-muted-foreground uppercase tracking-wider w-full"
                  >
                    <span>24h Change</span>
                    <ArrowUpDown className="w-3 h-3 lg:w-4 lg:h-4" />
                  </button>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    onClick={() => handleSort("volume24h")}
                    className="flex items-center justify-end space-x-2 hover:text-foreground transition-colors text-xs lg:text-sm font-semibold text-muted-foreground uppercase tracking-wider w-full"
                  >
                    <span>24h Volume</span>
                    <ArrowUpDown className="w-3 h-3 lg:w-4 lg:h-4" />
                  </button>
                </div>
                <div className="col-span-2 text-right flex items-center justify-end space-x-2">
                  <button
                    onClick={() => handleSort("marketCap")}
                    className="flex items-center justify-end space-x-2 hover:text-foreground transition-colors text-xs lg:text-sm font-semibold text-muted-foreground uppercase tracking-wider"
                  >
                    <span>Market Cap</span>
                    <ArrowUpDown className="w-3 h-3 lg:w-4 lg:h-4" />
                  </button>
                  <div className="relative ml-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 h-8 w-40 text-xs bg-background/60 dark:bg-gray-900/60 backdrop-blur-sm border border-muted dark:border-gray-800 focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:bg-background dark:focus:bg-gray-900 transition-all duration-300 rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Search and Sort */}
              <div className="lg:hidden flex flex-col sm:flex-row gap-3 p-4 border-b dark:border-gray-800/50 bg-gradient-to-r from-muted/30 to-muted/10 dark:from-gray-800/30 dark:to-gray-800/10">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search cryptocurrencies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-10 text-sm bg-background/60 dark:bg-gray-900/60 backdrop-blur-sm border border-muted dark:border-gray-800 focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:bg-background dark:focus:bg-gray-900 transition-all duration-300 rounded-xl shadow-sm"
                  />
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-10 px-4 bg-background/60 dark:bg-gray-900/60 backdrop-blur-sm border border-muted dark:border-gray-800 hover:border-orange-500/50 dark:hover:border-orange-500/50 rounded-xl shadow-sm transition-all duration-300"
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      Sort
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-48 bg-card/95 dark:bg-gray-900/95 backdrop-blur-sm border-muted dark:border-gray-800 rounded-xl shadow-xl"
                  >
                    <DropdownMenuItem onClick={() => setSortBy("marketCap")} className="rounded-lg">
                      <BarChart3 className="h-4 w-4 mr-3" />
                      Market Cap
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("price")} className="rounded-lg">
                      <TrendingUp className="h-4 w-4 mr-3" />
                      Price
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("change24h")} className="rounded-lg">
                      <ArrowUpDown className="h-4 w-4 mr-3" />
                      24h Change
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("volume24h")} className="rounded-lg">
                      <Volume2 className="h-4 w-4 mr-3" />
                      Volume
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Cryptocurrency Rows */}
              <div className="space-y-0">
                {currentData.length > 0 ? (
                  currentData.map((crypto, index) => (
                    <div
                      key={crypto.id}
                      className={`transition-all duration-300 hover:bg-muted/20 dark:hover:bg-gray-800/20 cursor-pointer group ${
                        index % 2 === 0 ? "bg-transparent" : "bg-muted/5 dark:bg-gray-800/5"
                      }`}
                    >
                      {/* Desktop Layout */}
                      <div className="hidden lg:grid lg:grid-cols-12 gap-4 px-4 lg:px-6 py-3 lg:py-4 items-center">
                        {/* Asset Info */}
                        <div className="col-span-4 flex items-center space-x-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleFavorite(crypto.id)
                            }}
                            className="p-1.5 rounded-full hover:bg-muted/50 dark:hover:bg-gray-700/50 transition-all duration-300 group-hover:scale-110"
                          >
                            <Star
                              className={`w-4 h-4 transition-all duration-300 ${
                                favorites.has(crypto.id)
                                  ? "fill-yellow-500 text-yellow-500 scale-110"
                                  : "text-muted-foreground hover:text-yellow-500 hover:scale-110"
                              }`}
                            />
                          </button>
                          <div className="relative">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-xl transition-all duration-300">
                              {crypto.logo}
                            </div>
                            {crypto.isHot && (
                              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center animate-pulse">
                                <Flame className="w-2 h-2 text-white" />
                              </div>
                            )}
                          </div>
                          <div className="space-y-0.5">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-bold">{crypto.symbol}</span>
                              {crypto.isHot && (
                                <span className="px-1.5 py-0.5 text-xs font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full">
                                  HOT
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-muted-foreground font-medium">{crypto.name}</div>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="col-span-2 text-right space-y-0.5">
                          <div className="text-sm font-bold font-mono">₹{crypto.price.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">
                            H: ₹{crypto.high24h.toLocaleString()} L: ₹{crypto.low24h.toLocaleString()}
                          </div>
                        </div>

                        {/* 24h Change */}
                        <div className="col-span-2 text-right">
                          <div
                            className={`inline-flex items-center space-x-1 px-2 py-1 rounded-lg font-bold text-sm transition-all duration-300 ${
                              crypto.change24h >= 0
                                ? "bg-green-500/10 text-green-500 group-hover:bg-green-500/20"
                                : "bg-red-500/10 text-red-500 group-hover:bg-red-500/20"
                            }`}
                          >
                            {crypto.change24h >= 0 ? (
                              <TrendingUp className="w-3 h-3" />
                            ) : (
                              <TrendingDown className="w-3 h-3" />
                            )}
                            <span>
                              {crypto.change24h >= 0 ? "+" : ""}
                              {crypto.change24h.toFixed(2)}%
                            </span>
                          </div>
                        </div>

                        {/* 24h Volume */}
                        <div className="col-span-2 text-right space-y-0.5">
                          <div className="text-sm font-bold font-mono">₹{crypto.volume24h}</div>
                          <div className="text-xs text-muted-foreground flex items-center justify-end space-x-1">
                            <Volume2 className="w-3 h-3" />
                            <span>Volume</span>
                          </div>
                        </div>

                        {/* Market Cap */}
                        <div className="col-span-2 text-right space-y-0.5">
                          <div className="text-sm font-bold font-mono">₹{crypto.marketCap}</div>
                          <div className="text-xs text-muted-foreground flex items-center justify-end space-x-1">
                            <BarChart3 className="w-3 h-3" />
                            <span>Market Cap</span>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Layout */}
                      <div className="lg:hidden p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleFavorite(crypto.id)
                              }}
                              className="p-1 rounded-full hover:bg-muted/50 dark:hover:bg-gray-700/50 transition-all duration-300"
                            >
                              <Star
                                className={`w-4 h-4 transition-all duration-300 ${
                                  favorites.has(crypto.id)
                                    ? "fill-yellow-500 text-yellow-500"
                                    : "text-muted-foreground hover:text-yellow-500"
                                }`}
                              />
                            </button>
                            <div className="relative">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                {crypto.logo}
                              </div>
                              {crypto.isHot && (
                                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center animate-pulse">
                                  <Flame className="w-2 h-2 text-white" />
                                </div>
                              )}
                            </div>
                            <div className="space-y-0.5">
                              <div className="flex items-center space-x-2">
                                <span className="text-base font-bold">{crypto.symbol}</span>
                                {crypto.isHot && (
                                  <span className="px-1.5 py-0.5 text-xs font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full">
                                    HOT
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-muted-foreground font-medium">{crypto.name}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold font-mono">₹{crypto.price.toLocaleString()}</div>
                            <div
                              className={`inline-flex items-center space-x-1 px-2 py-1 rounded-lg font-bold text-sm ${
                                crypto.change24h >= 0 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                              }`}
                            >
                              {crypto.change24h >= 0 ? (
                                <TrendingUp className="w-3 h-3" />
                              ) : (
                                <TrendingDown className="w-3 h-3" />
                              )}
                              <span>
                                {crypto.change24h >= 0 ? "+" : ""}
                                {crypto.change24h.toFixed(2)}%
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground text-xs">24h Volume</div>
                            <div className="font-mono font-medium">₹{crypto.volume24h}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-muted-foreground text-xs">Market Cap</div>
                            <div className="font-mono font-medium">₹{crypto.marketCap}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center py-16 lg:py-20">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center mx-auto">
                        <Search className="w-8 h-8 lg:w-10 lg:h-10 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-xl lg:text-2xl font-bold">No cryptocurrencies found</p>
                        <p className="text-muted-foreground text-sm lg:text-base">
                          Try adjusting your search or filter criteria
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 p-4 lg:p-6 border-t dark:border-gray-800/50">
                  <div className="text-xs lg:text-sm text-muted-foreground">
                    {startIndex + 1}-{Math.min(endIndex, filteredAndSortedData.length)} of{" "}
                    {filteredAndSortedData.length}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={goToPreviousPage}
                      disabled={currentPage === 1}
                      className="h-8 w-8 p-0 bg-card/60 dark:bg-gray-900/60 backdrop-blur-sm border border-muted dark:border-gray-800 hover:border-orange-500/50 dark:hover:border-orange-500/50 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <div className="flex space-x-1">
                      {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                        let page = i + 1
                        if (totalPages > 5) {
                          if (currentPage > 3) {
                            page = currentPage - 2 + i
                            if (page > totalPages) page = totalPages - 4 + i
                          }
                        }
                        return (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => goToPage(page)}
                            className={`h-8 w-8 p-0 rounded-lg transition-all duration-300 text-xs lg:text-sm ${
                              currentPage === page
                                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25"
                                : "bg-card/60 dark:bg-gray-900/60 backdrop-blur-sm border border-muted dark:border-gray-800 hover:border-orange-500/50 dark:hover:border-orange-500/50"
                            }`}
                          >
                            {page}
                          </Button>
                        )
                      })}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                      className="h-8 w-8 p-0 bg-card/60 dark:bg-gray-900/60 backdrop-blur-sm border border-muted dark:border-gray-800 hover:border-orange-500/50 dark:hover:border-orange-500/50 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
