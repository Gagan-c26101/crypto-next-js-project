import type { Metadata } from "next"
import Header from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Gift, Sparkles, Star, TrendingUp, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Mystery Boxes - CryptoBull",
  description:
    "Open mystery boxes and discover amazing rewards! From crypto bonuses to exclusive NFTs, unlock surprises with CryptoBull mystery boxes.",
}

const mysteryBoxes = [
  {
    id: 1,
    name: "Common Box",
    price: "100 CB Points",
    rarity: "Common",
    description: "Basic rewards for everyday traders",
    rewards: ["5-50 CB Points", "Small trading bonuses", "Basic badges"],
    dropRate: "Guaranteed reward",
    color: "from-gray-400 to-gray-600",
    icon: "📦",
  },
  {
    id: 2,
    name: "Rare Box",
    price: "500 CB Points",
    rarity: "Rare",
    description: "Better rewards with higher value",
    rewards: ["50-200 CB Points", "$5-25 bonuses", "Rare badges", "Trading tools"],
    dropRate: "85% chance rare+",
    color: "from-blue-400 to-blue-600",
    icon: "💎",
  },
  {
    id: 3,
    name: "Epic Box",
    price: "1000 CB Points",
    rarity: "Epic",
    description: "Premium rewards for serious traders",
    rewards: ["200-500 CB Points", "$25-100 bonuses", "Epic NFTs", "VIP features"],
    dropRate: "60% chance epic+",
    color: "from-purple-400 to-purple-600",
    icon: "⭐",
  },
  {
    id: 4,
    name: "Legendary Box",
    price: "$50 or 2500 CB Points",
    rarity: "Legendary",
    description: "The ultimate mystery experience",
    rewards: ["500-2000 CB Points", "$100-500 bonuses", "Legendary NFTs", "Exclusive access"],
    dropRate: "30% chance legendary",
    color: "from-orange-400 to-red-600",
    icon: "🏆",
  },
]

const recentWins = [
  {
    user: "CryptoKing",
    avatar: "/placeholder.svg?height=32&width=32",
    reward: "Legendary NFT",
    value: "$250",
    box: "Legendary Box",
    time: "2 minutes ago",
  },
  {
    user: "DiamondHands",
    avatar: "/placeholder.svg?height=32&width=32",
    reward: "$100 Bonus",
    value: "$100",
    box: "Epic Box",
    time: "5 minutes ago",
  },
  {
    user: "MoonTrader",
    avatar: "/placeholder.svg?height=32&width=32",
    reward: "500 CB Points",
    value: "$50",
    box: "Rare Box",
    time: "8 minutes ago",
  },
  {
    user: "BullRunner",
    avatar: "/placeholder.svg?height=32&width=32",
    reward: "VIP Access",
    value: "$200",
    box: "Epic Box",
    time: "12 minutes ago",
  },
  {
    user: "AlphaWolf",
    avatar: "/placeholder.svg?height=32&width=32",
    reward: "$75 Bonus",
    value: "$75",
    box: "Rare Box",
    time: "15 minutes ago",
  },
]

const luckBoosters = [
  {
    name: "Lucky Charm",
    description: "+10% better rewards for next 5 boxes",
    price: "200 CB Points",
    duration: "5 boxes",
    boost: "+10%",
  },
  {
    name: "Fortune Cookie",
    description: "+25% better rewards for next 3 boxes",
    price: "400 CB Points",
    duration: "3 boxes",
    boost: "+25%",
  },
  {
    name: "Golden Horseshoe",
    description: "+50% better rewards for next box",
    price: "600 CB Points",
    duration: "1 box",
    boost: "+50%",
  },
]

const userStats = {
  totalBoxesOpened: 47,
  totalValueWon: 1250,
  bestReward: "Epic NFT ($300)",
  currentStreak: 3,
  cbPoints: 2847,
  activeBoosters: 1,
}

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "Common":
      return "text-gray-500 border-gray-500"
    case "Rare":
      return "text-blue-500 border-blue-500"
    case "Epic":
      return "text-purple-500 border-purple-500"
    case "Legendary":
      return "text-orange-500 border-orange-500"
    default:
      return "text-gray-500 border-gray-500"
  }
}

export default function MysteryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10 dark:from-black dark:via-black dark:to-gray-900/20">
      <Header />

      <main className="container mx-auto px-4 py-8 lg:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
              <Gift className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Mystery Boxes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock amazing rewards with our mystery boxes! From crypto bonuses to exclusive NFTs, discover what fortune
            awaits you.
          </p>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          <Card className="text-center border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-orange-500">{userStats.cbPoints.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">CB Points</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-500">{userStats.totalBoxesOpened}</div>
              <div className="text-sm text-muted-foreground">Boxes Opened</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">${userStats.totalValueWon}</div>
              <div className="text-sm text-muted-foreground">Total Won</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-500">{userStats.currentStreak}</div>
              <div className="text-sm text-muted-foreground">Win Streak</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-500">{userStats.activeBoosters}</div>
              <div className="text-sm text-muted-foreground">Active Boosters</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mystery Boxes */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">Available Mystery Boxes</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {mysteryBoxes.map((box) => (
                <Card
                  key={box.id}
                  className="overflow-hidden border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-200"
                >
                  <div className={`h-2 bg-gradient-to-r ${box.color}`} />
                  <CardHeader className="text-center space-y-4">
                    <div className="text-4xl">{box.icon}</div>
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{box.name}</CardTitle>
                      <Badge variant="outline" className={getRarityColor(box.rarity)}>
                        {box.rarity}
                      </Badge>
                      <CardDescription>{box.description}</CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500 mb-1">{box.price}</div>
                      <div className="text-sm text-muted-foreground">{box.dropRate}</div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">Possible Rewards:</h4>
                      <ul className="space-y-1">
                        {box.rewards.map((reward, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Sparkles className="h-3 w-3 text-orange-500" />
                            {reward}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className={`w-full bg-gradient-to-r ${box.color} hover:opacity-90 text-white`}>
                      Open Box
                      <Package className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Luck Boosters */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Luck Boosters</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {luckBoosters.map((booster, index) => (
                  <Card
                    key={index}
                    className="border-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm"
                  >
                    <CardHeader className="text-center">
                      <div className="text-2xl mb-2">🍀</div>
                      <CardTitle className="text-lg">{booster.name}</CardTitle>
                      <CardDescription className="text-sm">{booster.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-orange-500">{booster.price}</div>
                        <Badge variant="outline" className="mt-1 text-green-500 border-green-500">
                          {booster.boost} Luck
                        </Badge>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        Activate Booster
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Wins */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-orange-500" />
                  Recent Wins
                </CardTitle>
                <CardDescription>Live feed of recent mystery box rewards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentWins.map((win, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={win.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{win.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{win.user}</div>
                      <div className="text-xs text-muted-foreground">won {win.reward}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-500">{win.value}</div>
                      <div className="text-xs text-muted-foreground">{win.time}</div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full bg-transparent">
                  View All Wins
                </Button>
              </CardContent>
            </Card>

            {/* Best Reward */}
            <Card className="border-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Your Best Reward
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-3xl">🏆</div>
                <div>
                  <div className="text-lg font-bold">{userStats.bestReward}</div>
                  <div className="text-sm text-muted-foreground">From Epic Box</div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View Collection
                </Button>
              </CardContent>
            </Card>

            {/* Mystery Stats */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Mystery Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Success Rate</span>
                  <span className="font-medium">87%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Rare+ Rate</span>
                  <span className="font-medium">34%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Epic+ Rate</span>
                  <span className="font-medium">12%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Legendary Rate</span>
                  <span className="font-medium">3%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm">
            <CardContent className="py-12">
              <Sparkles className="h-16 w-16 mx-auto mb-6 text-orange-500" />
              <h2 className="text-3xl font-bold mb-4">Feeling Lucky?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Open your first mystery box today and discover amazing rewards waiting for you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  Open Mystery Box
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
