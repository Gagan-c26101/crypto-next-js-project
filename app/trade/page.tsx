import type { Metadata } from "next"
import Header from "@/components/header"
import TradingInterface from "@/components/trading-interface"

export const metadata: Metadata = {
  title: "Trade Cryptocurrency - CryptoBull",
  description:
    "Advanced cryptocurrency trading interface with real-time charts, order books, and professional trading tools. Trade CRED, Bitcoin, Ethereum and more with low fees.",
  keywords:
    "crypto trading, bitcoin trading, ethereum trading, CRED trading, order book, trading charts, cryptocurrency exchange",
  openGraph: {
    title: "Trade Cryptocurrency - CryptoBull",
    description: "Advanced cryptocurrency trading interface with real-time charts and professional tools.",
    url: "https://cryptobull.com/trade",
  },
  alternates: {
    canonical: "https://cryptobull.com/trade",
  },
}

const tradingJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CryptoBull Trading Platform",
  description:
    "Professional cryptocurrency trading interface with real-time charts, order books, and advanced trading tools",
  url: "https://cryptobull.com/trade",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "Free cryptocurrency trading platform",
  },
}

export default function TradePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tradingJsonLd) }} />
      <div className="min-h-screen bg-background dark:bg-black">
        <Header />
        <main role="main" className="container-fluid px-0">
          <h1 className="sr-only">Cryptocurrency Trading Platform - Trade Bitcoin, Ethereum, CRED and more</h1>
          <TradingInterface />
        </main>
      </div>
    </>
  )
}
