import type { Metadata } from "next"
import Header from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, Star, Target, Calendar, Gift, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Task Center - CryptoBull",
  description:
    "Complete daily tasks, weekly challenges, and earn rewards. Track your progress and unlock achievements on CryptoBull.",
}

const dailyTasks = [
  {
    id: 1,
    title: "Daily Login",
    description: "Log in to your account",
    reward: "10 CB Points",
    progress: 100,
    completed: true,
    streak: 7,
  },
  {
    id: 2,
    title: "Make a Trade",
    description: "Execute at least one trade",
    reward: "25 CB Points",
    progress: 100,
    completed: true,
    streak: 5,
  },
  {
    id: 3,
    title: "Check Market News",
    description: "Read 3 market analysis articles",
    reward: "15 CB Points",
    progress: 67,
    completed: false,
    streak: 0,
  },
  {
    id: 4,
    title: "Social Share",
    description: "Share a trading insight on social media",
    reward: "20 CB Points",
    progress: 0,
    completed: false,
    streak: 0,
  },
]

const weeklyTasks = [
  {
    id: 1,
    title: "Complete KYC",
    description: "Verify your identity for enhanced security",
    reward: "500 CB Points + $10 Bonus",
    progress: 100,
    completed: true,
    difficulty: "Easy",
    timeLeft: "Completed",
  },
  {
    id: 2,
    title: "Refer 3 Friends",
    description: "Invite friends to join CryptoBull",
    reward: "1000 CB Points + $50 Bonus",
    progress: 33,
    completed: false,
    difficulty: "Medium",
    timeLeft: "4d 12h",
  },
  {
    id: 3,
    title: "Trade $10,000 Volume",
    description: "Reach $10,000 in total trading volume",
    reward: "750 CB Points + Premium Features",
    progress: 65,
    completed: false,
    difficulty: "Medium",
    timeLeft: "5d 8h",
  },
  {
    id: 4,
    title: "Complete Education Course",
    description: "Finish the Advanced Trading course",
    reward: "300 CB Points + Certificate",
    progress: 80,
    completed: false,
    difficulty: "Easy",
    timeLeft: "6d 15h",
  },
]

const achievements = [
  {
    id: 1,
    title: "First Trade",
    description: "Complete your first trade",
    icon: "🎯",
    unlocked: true,
    rarity: "Common",
  },
  {
    id: 2,
    title: "Week Warrior",
    description: "Login for 7 consecutive days",
    icon: "🔥",
    unlocked: true,
    rarity: "Common",
  },
  {
    id: 3,
    title: "Volume Master",
    description: "Trade $100,000 in total volume",
    icon: "💎",
    unlocked: false,
    rarity: "Rare",
    progress: 45,
  },
  {
    id: 4,
    title: "Social Butterfly",
    description: "Refer 10 successful users",
    icon: "🦋",
    unlocked: false,
    rarity: "Epic",
    progress: 20,
  },
  {
    id: 5,
    title: "Crypto Scholar",
    description: "Complete all education courses",
    icon: "🎓",
    unlocked: false,
    rarity: "Legendary",
    progress: 60,
  },
]

const userStats = {
  totalPoints: 2847,
  dailyStreak: 7,
  weeklyCompleted: 12,
  achievementsUnlocked: 8,
  currentLevel: 5,
  nextLevelPoints: 3500,
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-500"
    case "Medium":
      return "bg-yellow-500"
    case "Hard":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "Common":
      return "text-gray-500"
    case "Rare":
      return "text-blue-500"
    case "Epic":
      return "text-purple-500"
    case "Legendary":
      return "text-orange-500"
    default:
      return "text-gray-500"
  }
}

export default function TaskCenterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10 dark:from-black dark:via-black dark:to-gray-900/20">
      <Header />

      <main className="container mx-auto px-4 py-8 lg:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
              <Target className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Task Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete tasks, earn rewards, and unlock achievements to level up your trading journey
          </p>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          <Card className="text-center border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-orange-500">{userStats.totalPoints.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">CB Points</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">{userStats.dailyStreak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-500">{userStats.weeklyCompleted}</div>
              <div className="text-sm text-muted-foreground">Weekly Done</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-500">{userStats.achievementsUnlocked}</div>
              <div className="text-sm text-muted-foreground">Achievements</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-500">Level {userStats.currentLevel}</div>
              <div className="text-sm text-muted-foreground">Current Level</div>
            </CardContent>
          </Card>
        </div>

        {/* Level Progress */}
        <Card className="mb-8 border-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Level {userStats.currentLevel} Progress</span>
              <span className="text-sm text-muted-foreground">
                {userStats.totalPoints} / {userStats.nextLevelPoints} points
              </span>
            </div>
            <Progress value={(userStats.totalPoints / userStats.nextLevelPoints) * 100} className="h-3" />
            <div className="text-sm text-muted-foreground mt-2">
              {userStats.nextLevelPoints - userStats.totalPoints} points to Level {userStats.currentLevel + 1}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Daily Tasks */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-500" />
              <h2 className="text-2xl font-bold">Daily Tasks</h2>
            </div>
            <div className="space-y-4">
              {dailyTasks.map((task) => (
                <Card
                  key={task.id}
                  className={`border-0 bg-card/50 backdrop-blur-sm ${task.completed ? "opacity-75" : ""}`}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{task.title}</h3>
                          {task.completed && <CheckCircle className="h-4 w-4 text-green-500" />}
                          {task.streak > 0 && (
                            <Badge variant="outline" className="text-xs">
                              {task.streak} day streak
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{task.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-orange-500">{task.reward}</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Progress value={task.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{task.progress}% Complete</span>
                        {!task.completed && <span>Resets in 18h 24m</span>}
                      </div>
                    </div>
                    {!task.completed && (
                      <Button
                        size="sm"
                        className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                      >
                        {task.progress > 0 ? "Continue" : "Start Task"}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Weekly Tasks */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-orange-500" />
              <h2 className="text-2xl font-bold">Weekly Challenges</h2>
            </div>
            <div className="space-y-4">
              {weeklyTasks.map((task) => (
                <Card
                  key={task.id}
                  className={`border-0 bg-card/50 backdrop-blur-sm ${task.completed ? "opacity-75" : ""}`}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{task.title}</h3>
                          {task.completed && <CheckCircle className="h-4 w-4 text-green-500" />}
                          <div
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getDifficultyColor(task.difficulty)}`}
                          >
                            {task.difficulty}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {task.timeLeft}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-orange-500">{task.reward}</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Progress value={task.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{task.progress}% Complete</span>
                      </div>
                    </div>
                    {!task.completed && (
                      <Button
                        size="sm"
                        className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                      >
                        {task.progress > 0 ? "Continue" : "Start Challenge"}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-orange-500" />
              <h2 className="text-2xl font-bold">Achievements</h2>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className={`border-0 bg-card/50 backdrop-blur-sm ${achievement.unlocked ? "bg-gradient-to-r from-orange-500/10 to-red-500/10" : "opacity-60"}`}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{achievement.title}</h3>
                          {achievement.unlocked && <CheckCircle className="h-4 w-4 text-green-500" />}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                        <Badge variant="outline" className={getRarityColor(achievement.rarity)}>
                          {achievement.rarity}
                        </Badge>
                        {!achievement.unlocked && achievement.progress && (
                          <div className="mt-3 space-y-1">
                            <Progress value={achievement.progress} className="h-2" />
                            <div className="text-xs text-muted-foreground">{achievement.progress}% Complete</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm">
            <CardContent className="py-12">
              <Gift className="h-16 w-16 mx-auto mb-6 text-orange-500" />
              <h2 className="text-3xl font-bold mb-4">Keep Earning Rewards!</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Complete more tasks, unlock achievements, and climb the leaderboard to maximize your rewards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  View All Tasks
                </Button>
                <Button size="lg" variant="outline">
                  Redeem Points
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
