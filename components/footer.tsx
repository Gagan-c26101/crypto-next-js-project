import Link from "next/link"
import { TrendingUp, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Spot Trading", href: "/spot" },
        { name: "Futures Trading", href: "/futures" },
        { name: "Options", href: "/options" },
        { name: "Staking", href: "/staking" },
        { name: "NFT Marketplace", href: "/nft" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "API", href: "/api" },
        { name: "Institutional", href: "/institutional" },
        { name: "VIP Program", href: "/vip" },
        { name: "Referral", href: "/referral" },
        { name: "Launchpad", href: "/launchpad" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Trading Fees", href: "/fees" },
        { name: "Status", href: "/status" },
        { name: "Bug Bounty", href: "/bug-bounty" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "News", href: "/news" },
        { name: "Legal", href: "/legal" },
        { name: "Privacy", href: "/privacy" },
      ],
    },
  ]

  return (
    <footer className="bg-background border-t">
      <div className="w-full max-w-none px-4 lg:px-6 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">CryptoBull</span>
              </Link>
              <p className="text-muted-foreground text-sm mb-4">
                The world's leading cryptocurrency exchange platform. Trade with confidence.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4 text-sm sm:text-base">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t mt-8 lg:mt-12 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} CryptoBull. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 lg:space-x-6">
              <Link href="/terms" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/risk-disclosure" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
                Risk Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
