import type { Metadata } from "next"
import Header from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Clock, Users, TrendingUp, Medal, Crown, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Trade Contest - CryptoBull",
  description:
    "Compete with traders worldwide in our exciting trading contests. Win prizes, climb leaderboards, and prove your trading skills.",
}

const activeContests = [
  {
    id: 1,
    title: "Weekly Championship",
    description: "Compete for the highest trading volume this week",
    prizePool: "$10,000",
    participants: 1247,
    timeLeft: "3d 14h 22m",
    difficulty: "Medium",
    entry: "Free",
    status: "active",
    progress: 65,
    rules: ["Minimum 10 trades", "Any trading pair", "Volume-based ranking"],
  },
  {
    id: 2,
    title: "Futures Master",
    description: "Show your futures trading skills",
    prizePool: "$25,000",
    participants: 892,
    timeLeft: "1d 8h 45m",
    difficulty: "Hard",
    entry: "$100",
    status: "active",
    progress: 80,
    rules: ["Futures trading only", "Minimum $1,000 volume", "PnL-based ranking"],
  },
  {
    id: 3,
    title: "Altcoin Explorer",
    description: "Trade altcoins and climb the leaderboard",
    prizePool: "$5,000",
    participants: 2156,
    timeLeft: "5d 12h 30m",
    difficulty: "Easy",
    entry: "Free",
    status: "active",
    progress: 45,
    rules: ["Altcoins only (no BTC/ETH)", "Minimum 5 trades", "ROI-based ranking"],
  },
  {
    id: 4,
    title: "Monthly Mega Contest",
    description: "The ultimate trading challenge",
    prizePool: "$100,000",
    participants: 5432,
    timeLeft: "18d 6h 15m",
    difficulty: "Expert",
    entry: "$500",
    status: "active",
    progress: 25,
    rules: ["All trading pairs", "Minimum $10,000 volume", "Complex scoring system"],
  },
]

const leaderboard = [
  {
    rank: 1,
    username: "CryptoKing2024",
    avatar: "/placeholder.svg?height=40&width=40",
    score: "125,847",
    prize: "$5,000",
    change: "+2.5%",
  },
  {
    rank: 2,
    username: "TradeMaster",
    avatar: "/placeholder.svg?height=40&width=40",
    score: "118,293",
    prize: "$3,000",
    change: "+1.8%",
  },
  {
    rank: 3,
    username: "BullRunner",
    avatar: "/placeholder.svg?height=40&width=40",
    score: "112,456",
    prize: "$2,000",
    change: "+3.2%",
  },
  {
    rank: 4,
    username: "AlphaTrader",
    avatar: "/placeholder.svg?height=40&width=40",
    score: "108,721",
    prize: "$1,000",
    change: "-0.5%",
  },
  {
    rank: 5,
    username: "DiamondHands",
    avatar: "/placeholder.svg?height=40&width=40",
    score: "105,892",
    prize: "$500",
    change: "+1.2%",
  },
]

const pastWinners = [
  {
    contest: "November Championship",
    winner: "ProTrader99",
    prize: "$15,000",
    date: "Nov 2024",
  },
  {
    contest: "Halloween Special",
    winner: "SpookyTrader",
    prize: "$8,000",
    date: "Oct 2024",
  },
  {
    contest: "October Futures",
    winner: "FuturesGod",
    prize: "$20,000",
    date: "Oct 2024",
  },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-500"
    case "Medium":
      return "bg-yellow-500"
    case "Hard":
      return "bg-red-500"
    case "Expert":
      return "bg-purple-500"
    default:
      return "bg-gray-500"
  }
}

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="h-5 w-5 text-yellow-500" />
    case 2:
      return <Medal className="h-5 w-5 text-gray-400" />
    case 3:
      return <Award className="h-5 w-5 text-amber-600" />
    default:
      return <span className="text-sm font-bold">#{rank}</span>
  }
}

export default function TradeContestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10 dark:from-black dark:via-black dark:to-gray-900/20">
      <Header />

      <main className="container mx-auto px-4 py-8 lg:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
              <Trophy className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Trading Contests
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compete with traders worldwide, showcase your skills, and win amazing prizes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Contests */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">Active Contests</h2>
            <div className="space-y-6">
              {activeContests.map((contest) => (
                <Card key={contest.id} className="overflow-hidden border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-500 text-white border-0">
                            Live
                          </Badge>
                          <Badge variant="secondary">{contest.entry}</Badge>
                          <div
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getDifficultyColor(contest.difficulty)}`}
                          >
                            {contest.difficulty}
                          </div>
                        </div>
                        <CardTitle className="text-xl">{contest.title}</CardTitle>
                        <CardDescription className="text-base">{contest.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-500">{contest.prizePool}</div>
                        <div className="text-sm text-muted-foreground">Prize Pool</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Contest Progress</span>
                        <span>{contest.progress}%</span>
                      </div>
                      <Progress value={contest.progress} className="h-2" />
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{contest.timeLeft}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{contest.participants.toLocaleString()} participants</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">Contest Rules:</h4>
                      <ul className="space-y-2">
                        {contest.rules.map((rule, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      Join Contest
                      <Trophy className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Live Leaderboard */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-orange-500" />
                  Live Leaderboard
                </CardTitle>
                <CardDescription>Weekly Championship Rankings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {leaderboard.map((trader) => (
                  <div key={trader.rank} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center justify-center w-8 h-8">{getRankIcon(trader.rank)}</div>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={trader.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{trader.username[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{trader.username}</div>
                      <div className="text-xs text-muted-foreground">Score: {trader.score}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-orange-500">{trader.prize}</div>
                      <div className={`text-xs ${trader.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                        {trader.change}
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full bg-transparent">
                  View Full Leaderboard
                </Button>
              </CardContent>
            </Card>

            {/* Past Winners */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-yellow-500" />
                  Past Winners
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {pastWinners.map((winner, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm font-medium">{winner.contest}</div>
                        <div className="text-xs text-muted-foreground">{winner.date}</div>
                      </div>
                      <Badge variant="outline" className="text-orange-500 border-orange-500">
                        {winner.prize}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Winner: <span className="font-medium text-foreground">{winner.winner}</span>
                    </div>
                    {index !== pastWinners.length - 1 && <div className="border-b border-muted/30" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contest Stats */}
            <Card className="border-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Contest Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Prizes Awarded</span>
                  <span className="font-medium">$2.8M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Active Participants</span>
                  <span className="font-medium">9.7K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Contests Completed</span>
                  <span className="font-medium">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Average Prize</span>
                  <span className="font-medium">$18K</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm">
            <CardContent className="py-12">
              <TrendingUp className="h-16 w-16 mx-auto mb-6 text-orange-500" />
              <h2 className="text-3xl font-bold mb-4">Ready to Compete?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our trading contests and compete with the best traders worldwide. Prove your skills and win amazing
                prizes!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  Join Contest Now
                </Button>
                <Button size="lg" variant="outline">
                  View Contest Rules
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
