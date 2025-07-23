import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import MarketOverview from "@/components/market-overview"
import TradingFeatures from "@/components/trading-features"
import SecuritySection from "@/components/security-section"
import StatsSection from "@/components/stats-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "CryptoBull - Advanced Cryptocurrency Exchange Platform",
  description:
    "Trade Bitcoin, Ethereum, and 100+ cryptocurrencies with advanced trading tools, high security, and low fees. Join millions of traders worldwide on India's most trusted crypto exchange.",
  keywords:
    "cryptocurrency, bitcoin, ethereum, trading, exchange, crypto, blockchain, CRED, INR, Indian crypto exchange",
  openGraph: {
    title: "CryptoBull - Advanced Cryptocurrency Exchange Platform",
    description:
      "Trade Bitcoin, Ethereum, and 100+ cryptocurrencies with advanced trading tools, high security, and low fees.",
    type: "website",
    url: "https://cryptobull.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CryptoBull Cryptocurrency Trading Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoBull - Advanced Cryptocurrency Exchange Platform",
    description: "Trade Bitcoin, Ethereum, and 100+ cryptocurrencies with advanced trading tools.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://cryptobull.com",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "CryptoBull",
  description: "Advanced cryptocurrency exchange platform for trading Bitcoin, Ethereum, and 100+ cryptocurrencies",
  url: "https://cryptobull.com",
  logo: "https://cryptobull.com/logo.png",
  sameAs: [
    "https://twitter.com/cryptobull",
    "https://facebook.com/cryptobull",
    "https://linkedin.com/company/cryptobull",
  ],
  serviceType: "Cryptocurrency Exchange",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  offers: {
    "@type": "Offer",
    description: "Cryptocurrency trading services with low fees and high security",
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <Header />
        <main role="main">
          <Hero />
          <MarketOverview />
          <TradingFeatures />
          <StatsSection />
          <SecuritySection />
        </main>
        <Footer />
      </div>
    </>
  )
}
