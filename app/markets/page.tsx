import type { Metadata } from "next"
import Header from "@/components/header"
import MarketPage from "@/components/market-page"

export const metadata: Metadata = {
  title: "Cryptocurrency Markets - Live Prices & Trading Data | CryptoBull",
  description:
    "View live cryptocurrency prices, market data, and trading volumes for Bitcoin, Ethereum, CRED and 100+ digital assets. Real-time market analysis and trading insights.",
  keywords:
    "cryptocurrency prices, bitcoin price, ethereum price, CRED price, crypto market data, live prices, trading volume, market cap",
  openGraph: {
    title: "Cryptocurrency Markets - Live Prices & Trading Data | CryptoBull",
    description: "View live cryptocurrency prices and market data for 100+ digital assets with real-time updates.",
    url: "https://cryptobull.com/markets",
  },
  alternates: {
    canonical: "https://cryptobull.com/markets",
  },
}

const marketJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Cryptocurrency Market Data",
  description: "Live cryptocurrency prices, market data, and trading information for digital assets",
  url: "https://cryptobull.com/markets",
  mainEntity: {
    "@type": "Dataset",
    name: "Cryptocurrency Market Data",
    description: "Real-time cryptocurrency prices and market information",
  },
}

export default function MarketsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(marketJsonLd) }} />
      <div className="min-h-screen bg-background dark:bg-black">
        <Header />
        <main role="main">
          <h1 className="sr-only">Cryptocurrency Market Data - Live Prices and Trading Information</h1>
          <MarketPage />
        </main>
      </div>
    </>
  )
}
