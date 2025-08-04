"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpRight, ArrowDownLeft, Search } from "lucide-react"
import { useRouter } from "next/navigation"

export default function WalletPage() {
  const [showBalance, setShowBalance] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const cryptoAssets = [
    {
      symbol: "USDT",
      name: "USDT / Rupee",
      balance: "384.939697",
      inr: "384.939697",
      usd: "4.506055",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "BTC",
      name: "BTC / Bitcoin",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "SOL",
      name: "SOL / Solana",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "ETH",
      name: "ETH / Ethereum",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "MATIC",
      name: "MATIC / MATIC",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "BUSD",
      name: "BUSD / BinanceUSD",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "USDT",
      name: "USDT / USDT",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "CRED",
      name: "CRED / CREDCOINPAY",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "CAT",
      name: "CAT / CAT",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "PEPE",
      name: "PEPE / PEPE",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "NEAR",
      name: "NEAR / NEAR",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "CAKE",
      name: "CAKE / CAKE",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "TWT",
      name: "TWT / TWT",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "BAKE",
      name: "BAKE / BAKE",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "HOOK",
      name: "HOOK / HOOK",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "MBOX",
      name: "MBOX / MBOX",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "DAR",
      name: "DAR / DAR",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "ALPACA",
      name: "ALPACA / ALPACA",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "COS",
      name: "COS / COS",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "UNFI",
      name: "UNFI / UNFI",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "DAI",
      name: "DAI / DAI",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "DOGE",
      name: "DOGE / DOGE",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "LINK",
      name: "LINK / LINK",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "BONK",
      name: "BONK / BONK",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "ARB",
      name: "ARB / ARB",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "ADA",
      name: "ADA / ADA",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "XRP",
      name: "XRP / XRP",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "FLOKI",
      name: "FLOKI / FLOKI",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "DOT",
      name: "DOT / DOT",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "TRX",
      name: "TRX / TRX",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "NAKA",
      name: "NAKA / NAKA",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "ONE",
      name: "ONE / ONE",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "OM",
      name: "OM / OM",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "FTM",
      name: "FTM / FTM",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "TON",
      name: "TON / TON",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: true,
    },
    {
      symbol: "USDC",
      name: "USDC / USDC",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "HIGH",
      name: "HIGH / HIGH",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "MASK",
      name: "MASK / MASK",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
    {
      symbol: "LISTA",
      name: "LISTA / LISTA",
      balance: "0",
      inr: "0",
      usd: "0",
      hasDeposit: true,
      hasWithdraw: true,
      hasTrade: false,
    },
  ]

  // Filter assets based on search query
  const filteredAssets = cryptoAssets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Wallet</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Manage your cryptocurrency holdings and transactions.
          </p>
        </div>
      </div>

      {/* Balance Cards */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {/* Wallet Balance */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base md:text-lg font-medium">Wallet Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">INR Balance</p>
                <p className="text-xl md:text-2xl font-bold">₹ 384.93</p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                  onClick={() => router.push("/dashboard/deposit-fiat")}
                >
                  <ArrowDownLeft className="h-4 w-4 mr-1" />
                  Deposit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => router.push("/dashboard/withdraw-fiat")}
                >
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  Withdraw
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Crypto Balance */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base md:text-lg font-medium">Crypto Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">$ 0.00</div>
          </CardContent>
        </Card>

        {/* Total Balance */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base md:text-lg font-medium">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">$ 4.50</div>
          </CardContent>
        </Card>
      </div>

      {/* Assets Overview */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-base md:text-lg">Assets Overview</CardTitle>
              <CardDescription className="text-sm">Your cryptocurrency portfolio</CardDescription>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search assets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {/* Header - Hidden on mobile, shown on desktop */}
            <div className="hidden md:grid grid-cols-12 gap-4 py-3 px-4 bg-muted/50 rounded-lg text-sm font-medium text-muted-foreground">
              <div className="col-span-4">Assets</div>
              <div className="col-span-2 text-right">Amount</div>
              <div className="col-span-2 text-right">INR</div>
              <div className="col-span-4 text-right">Actions</div>
            </div>

            {/* Asset Rows */}
            {filteredAssets.length > 0 ? (
              filteredAssets.map((asset, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-3 px-4 border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden space-y-2">
                    <div className="flex justify-between items-start">
                      <div className="font-medium text-sm">{asset.name}</div>
                      <div className="text-right">
                        <div className="font-mono text-sm">{asset.balance}</div>
                        <div className="font-mono text-xs text-muted-foreground">{asset.inr} INR</div>
                      </div>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                      {asset.hasDeposit && (
                        <Button size="sm" variant="outline" className="h-7 px-2 text-xs bg-transparent flex-1 min-w-0">
                          Deposit
                        </Button>
                      )}
                      {asset.hasWithdraw && (
                        <Button size="sm" variant="outline" className="h-7 px-2 text-xs bg-transparent flex-1 min-w-0">
                          Withdraw
                        </Button>
                      )}
                      {asset.hasTrade && (
                        <Button
                          size="sm"
                          className="h-7 px-2 text-xs flex-1 min-w-0 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                        >
                          Trade
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:contents">
                    <div className="col-span-4">
                      <div className="font-medium">{asset.name}</div>
                    </div>
                    <div className="col-span-2 text-right">
                      <div className="font-mono text-sm">{asset.balance}</div>
                    </div>
                    <div className="col-span-2 text-right">
                      <div className="font-mono text-sm">{asset.inr}</div>
                    </div>
                    <div className="col-span-4 flex justify-end gap-1">
                      {asset.hasDeposit && (
                        <Button size="sm" variant="outline" className="h-7 px-2 text-xs bg-transparent">
                          Deposit
                        </Button>
                      )}
                      {asset.hasWithdraw && (
                        <Button size="sm" variant="outline" className="h-7 px-2 text-xs bg-transparent">
                          Withdraw
                        </Button>
                      )}
                      {asset.hasTrade && (
                        <Button
                          size="sm"
                          className="h-7 px-2 text-xs bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                        >
                          Trade
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No assets found matching "{searchQuery}"
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
