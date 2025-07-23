import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Header from "@/components/header"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "CredBull - Advanced Cryptocurrency Trading Platform",
    template: "%s | CredBull",
  },
  description: "Trade cryptocurrencies with advanced tools, real-time data, and secure transactions on CredBull.",
  keywords: [
    "cryptocurrency",
    "bitcoin",
    "ethereum",
    "trading",
    "exchange",
    "crypto",
    "blockchain",
    "CRED",
    "INR",
    "Indian crypto exchange",
    "buy bitcoin",
    "sell ethereum",
    "crypto trading platform",
  ],
  authors: [{ name: "CredBull Team", url: "https://cryptobull.com" }],
  creator: "CredBull",
  publisher: "CredBull",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cryptobull.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cryptobull.com",
    title: "CredBull - Advanced Cryptocurrency Trading Platform",
    description: "Trade cryptocurrencies with advanced tools, real-time data, and secure transactions on CredBull.",
    siteName: "CredBull",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CredBull - Cryptocurrency Trading Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CredBull - Advanced Cryptocurrency Trading Platform",
    description: "Trade cryptocurrencies with advanced tools, real-time data, and secure transactions.",
    creator: "@cryptobull",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "finance",
  classification: "Cryptocurrency Exchange",
  generator: "Next.js",
  applicationName: "CredBull",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.cryptobull.com" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen w-full pt-[100px]">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
