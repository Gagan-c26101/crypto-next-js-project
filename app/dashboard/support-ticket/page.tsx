"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Headphones, Plus, MessageCircle, Clock, CheckCircle, AlertTriangle, FileText, Send } from "lucide-react"

export default function SupportTicketPage() {
  const [isCreating, setIsCreating] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null)

  const tickets = [
    {
      id: 1,
      subject: "Unable to withdraw funds",
      category: "Withdrawal",
      status: "open",
      priority: "high",
      created: "2024-01-15",
      lastUpdate: "2024-01-16",
      messages: 3,
    },
    {
      id: 2,
      subject: "Two-factor authentication issues",
      category: "Security",
      status: "in_progress",
      priority: "medium",
      created: "2024-01-10",
      lastUpdate: "2024-01-12",
      messages: 5,
    },
    {
      id: 3,
      subject: "Trading fee clarification",
      category: "Trading",
      status: "resolved",
      priority: "low",
      created: "2024-01-05",
      lastUpdate: "2024-01-08",
      messages: 2,
    },
    {
      id: 4,
      subject: "API documentation request",
      category: "Technical",
      status: "closed",
      priority: "low",
      created: "2023-12-28",
      lastUpdate: "2024-01-02",
      messages: 4,
    },
  ]

  const ticketMessages = [
    {
      id: 1,
      sender: "You",
      message: "I'm having trouble withdrawing my Bitcoin. The transaction keeps failing with error code 500.",
      timestamp: "2024-01-15 10:30 AM",
      isSupport: false,
    },
    {
      id: 2,
      sender: "Support Team",
      message:
        "Thank you for contacting us. We're looking into this issue. Can you please provide your transaction ID?",
      timestamp: "2024-01-15 2:15 PM",
      isSupport: true,
    },
    {
      id: 3,
      sender: "You",
      message: "The transaction ID is: tx_abc123def456. This has been happening for the past 2 days.",
      timestamp: "2024-01-16 9:00 AM",
      isSupport: false,
    },
  ]

  const handleCreateTicket = async () => {
    setIsCreating(true)
    // Simulate ticket creation
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsCreating(false)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      case "in_progress":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
      case "resolved":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "closed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Support Tickets</h1>
          <p className="text-muted-foreground">Manage your support requests and get help from our team.</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="primary">
              <Plus className="h-4 w-4 mr-2" />
              New Ticket
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create Support Ticket</DialogTitle>
              <DialogDescription>Describe your issue and we'll get back to you as soon as possible.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Brief description of your issue" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trading">Trading</SelectItem>
                    <SelectItem value="deposit">Deposit</SelectItem>
                    <SelectItem value="withdrawal">Withdrawal</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                    <SelectItem value="verification">Verification</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Please provide detailed information about your issue..."
                  rows={5}
                />
              </div>

              <Button onClick={handleCreateTicket} disabled={isCreating} className="w-full" variant="primary">
                <FileText className="h-4 w-4 mr-2" />
                {isCreating ? "Creating..." : "Create Ticket"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tickets Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">Open</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                <Clock className="h-4 w-4 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-muted-foreground">Resolved</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-4 w-4 text-gray-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-muted-foreground">Closed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tickets List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Headphones className="h-5 w-5" />
            <span>Your Support Tickets</span>
          </CardTitle>
          <CardDescription>View and manage all your support requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                onClick={() => setSelectedTicket(ticket.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium">
                        #{ticket.id} - {ticket.subject}
                      </h3>
                      <Badge variant="outline" className={getStatusColor(ticket.status)}>
                        {ticket.status.replace("_", " ")}
                      </Badge>
                      <Badge variant="outline" className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>Category: {ticket.category}</span>
                      <span>Created: {ticket.created}</span>
                      <span>Last Update: {ticket.lastUpdate}</span>
                      <span>{ticket.messages} messages</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <Dialog open={!!selectedTicket} onOpenChange={() => setSelectedTicket(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Ticket #{selectedTicket} - Unable to withdraw funds</DialogTitle>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                  Open
                </Badge>
                <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
                  High Priority
                </Badge>
                <span className="text-sm text-muted-foreground">Category: Withdrawal</span>
              </div>
            </DialogHeader>

            <div className="space-y-4">
              <Separator />

              {/* Messages */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {ticketMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isSupport ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        msg.isSupport ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{msg.sender}</span>
                        <span className="text-xs opacity-70">{msg.timestamp}</span>
                      </div>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Reply Form */}
              <div className="space-y-3">
                <Label htmlFor="reply">Reply to ticket</Label>
                <Textarea id="reply" placeholder="Type your message here..." rows={3} />
                <div className="flex justify-end">
                  <Button variant="primary">
                    <Send className="h-4 w-4 mr-2" />
                    Send Reply
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
