import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, ArrowRight, TrendingUp, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - CryptoBull",
  description: "Latest news, insights, and analysis from the cryptocurrency world",
}

const featuredArticle = {
  title: "Bitcoin Reaches New All-Time High: What This Means for Investors",
  excerpt:
    "Bitcoin has surged past $70,000, marking a significant milestone in cryptocurrency history. We analyze the factors driving this rally and what it means for the future of digital assets.",
  author: "Sarah Johnson",
  date: "December 15, 2024",
  readTime: "5 min read",
  category: "Market Analysis",
  image: "/placeholder.svg?height=400&width=800",
}

const articles = [
  {
    title: "DeFi 2024: The Evolution of Decentralized Finance",
    excerpt: "Exploring the latest developments in DeFi protocols and their impact on traditional finance.",
    author: "Michael Chen",
    date: "December 14, 2024",
    readTime: "7 min read",
    category: "DeFi",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Ethereum 2.0 Staking: Complete Guide for Beginners",
    excerpt: "Everything you need to know about staking ETH and earning rewards on the Ethereum network.",
    author: "Alex Rodriguez",
    date: "December 13, 2024",
    readTime: "6 min read",
    category: "Education",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Regulatory Updates: Global Crypto Legislation in 2024",
    excerpt: "A comprehensive overview of cryptocurrency regulations across major markets worldwide.",
    author: "Emma Thompson",
    date: "December 12, 2024",
    readTime: "8 min read",
    category: "Regulation",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "NFT Market Recovery: Signs of a New Bull Run",
    excerpt: "Analyzing recent trends in the NFT space and what they signal for digital collectibles.",
    author: "David Kim",
    date: "December 11, 2024",
    readTime: "4 min read",
    category: "NFTs",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Layer 2 Solutions: Scaling Ethereum for Mass Adoption",
    excerpt: "How Layer 2 technologies are solving Ethereum's scalability challenges.",
    author: "Lisa Wang",
    date: "December 10, 2024",
    readTime: "6 min read",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Crypto Trading Psychology: Managing Emotions in Volatile Markets",
    excerpt: "Essential mental strategies for successful cryptocurrency trading.",
    author: "Robert Brown",
    date: "December 9, 2024",
    readTime: "5 min read",
    category: "Trading",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const categories = ["All", "Market Analysis", "DeFi", "Education", "Regulation", "NFTs", "Technology", "Trading"]

const popularTags = [
  "Bitcoin",
  "Ethereum",
  "DeFi",
  "NFTs",
  "Staking",
  "Layer 2",
  "Regulation",
  "Trading",
  "Blockchain",
  "Web3",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">CryptoBull Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest cryptocurrency news, market analysis, and educational content
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            <Card className="mb-8">
              <div className="relative">
                <img
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500">Featured</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{featuredArticle.category}</Badge>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{featuredArticle.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">{featuredArticle.title}</h2>
                <p className="text-muted-foreground mb-4">{featuredArticle.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{featuredArticle.author}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{featuredArticle.date}</span>
                  </div>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "bg-gradient-to-r from-orange-500 to-red-500" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs">{article.author}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-orange-500" />
                  Stay Updated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest crypto news and insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Enter your email" />
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500">Subscribe</Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-accent">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Articles */}
            <Card>
              <CardHeader>
                <CardTitle>Trending This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {articles.slice(0, 3).map((article, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="text-sm font-medium line-clamp-2 mb-1">{article.title}</h4>
                        <p className="text-xs text-muted-foreground">{article.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Widget */}
            <Card>
              <CardHeader>
                <CardTitle>Market Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Bitcoin</span>
                    <div className="text-right">
                      <div className="text-sm font-medium">$45,234</div>
                      <div className="text-xs text-green-500">+5.67%</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Ethereum</span>
                    <div className="text-right">
                      <div className="text-sm font-medium">$3,012</div>
                      <div className="text-xs text-green-500">+3.24%</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cardano</span>
                    <div className="text-right">
                      <div className="text-sm font-medium">$0.45</div>
                      <div className="text-xs text-red-500">-1.23%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
