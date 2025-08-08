import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy & Policy</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
              <p className="text-sm text-muted-foreground mb-6">
                <strong>Effective Date:</strong> 1st March 2025
              </p>

              <p className="mb-4">
                At CredBull Exchange, we respect your privacy and are committed to protecting your personal data. This
                Privacy Policy outlines how we collect, use, store, and share your personal information across our
                platforms, including the CredBull Exchange website (www.credbull.in), mobile and desktop applications
                (the App), and services offered through the platform (collectively, the Services). By using the
                Services, you consent to the collection, processing, and use of your personal data as described in this
                Policy.
              </p>

              <p className="mb-4">
                As we have introduced Spot Trading Bots (Grid and DCA), this Policy also covers how your data is used
                when engaging with these features. Please review this policy carefully to understand our views and
                practices regarding your personal data.
              </p>

              <p className="mb-6">
                This Privacy Policy may change from time to time. Any changes will be posted on this page, and your
                continued use of the Services will constitute acceptance of those changes. We recommend that you
                periodically check this Policy for updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>

              <h3 className="text-xl font-medium mb-3">Information You Provide to Us</h3>
              <p className="mb-4">
                When you create an account or use our Services, you provide us with personal information, including but
                not limited to:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Identification Information:</strong> Name, photo, and other details necessary for
                  registration.
                </li>
                <li>
                  <strong>National Identifiers:</strong> Information from government-issued identity cards to verify
                  your identity.
                </li>
                <li>
                  <strong>Correspondence Information:</strong> Email, phone, and postal addresses used to communicate
                  with you.
                </li>
                <li>
                  <strong>Financial Data:</strong> Bank account details, UPI, tax ID, and digital asset information
                  (including wallet addresses) for transaction processing.
                </li>
                <li>
                  <strong>Location Data:</strong> Location information to provide region-specific services or prevent
                  fraudulent activity.
                </li>
              </ul>

              <p className="mb-6">
                In addition, you may voluntarily share further information with us during customer service interactions,
                surveys, or legal proceedings.
              </p>

              <h3 className="text-xl font-medium mb-3">Information We Collect About You</h3>
              <p className="mb-4">
                We automatically collect certain technical data when you interact with our platforms, including:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Device & Browser Information:</strong> IP address, browser specifications, operating system
                  details, and device type.
                </li>
                <li>
                  <strong>User Activity:</strong> Information about your visits, such as clickstream data, page load
                  times, search history, transaction records, and interactions with the site.
                </li>
                <li>
                  <strong>Spot Trading Bot Activity:</strong> We may collect data related to your usage of Spot Trading
                  Bots, such as trading preferences, bot configurations, and executed transactions.
                </li>
                <li>
                  <strong>Cookies & Tracking Technologies:</strong> We use cookies and similar tracking technologies to
                  enhance user experience, which may be shared with trusted third parties for analytical purposes.
                </li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Information We Collect from External Sources</h3>
              <p className="mb-6">
                We may also receive information about you from third parties, such as financial institutions, analytics
                providers, or other partners, to improve the services we offer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Main Purpose of Data Collection</h2>
              <p className="mb-4">The personal data collected is used for:</p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Account Setup & Transaction Processing:</strong> To create your account, verify your identity,
                  and facilitate trading and financial transactions, including Spot Trading Bots functionality.
                </li>
                <li>
                  <strong>Security & Fraud Prevention:</strong> To detect and prevent fraudulent activities and ensure a
                  secure trading environment.
                </li>
                <li>
                  <strong>Customer Support:</strong> To assist you with any queries, troubleshooting, or technical
                  support.
                </li>
                <li>
                  <strong>Improvement of Services:</strong> To enhance the performance of the Spot Trading Bots and
                  other services offered through the platform.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Policy for Children</h2>
              <p className="mb-6">
                CredBull Exchange is not intended for use by individuals under the age of 21. We do not knowingly
                collect personal data from children. If you are a parent or guardian and believe we have collected
                personal data of a minor, please contact us immediately at{" "}
                <a href="mailto:support@credbull.in" className="text-primary hover:underline">
                  support@credbull.in
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Mailing Policy</h2>
              <p className="mb-4">
                We may use the email addresses you provide to keep you informed about the latest updates, promotions,
                and press releases related to CredBull Exchange and its features, including the Spot Trading Bots. You
                may opt out of marketing emails by clicking the "Unsubscribe" link provided in each communication.
              </p>
              <p className="mb-6">
                We will never rent or sell your email address to third parties. However, we may share it with trusted
                partners for customer support, technical services, or legal obligations as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to the Privacy Policy</h2>
              <p className="mb-6">
                This Privacy Policy may be updated from time to time. Any significant changes to this Policy will be
                communicated via email or a notice on the website. We encourage you to review this Policy periodically
                to stay informed about how we are protecting your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security Precautions</h2>
              <p className="mb-6">
                We implement technical and organizational security measures to protect your personal data from
                unauthorized access, loss, or misuse. These measures include encryption, secure servers, and access
                control procedures. However, please be aware that no method of data transmission over the internet is
                100% secure, and we cannot guarantee the absolute security of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Storage & Retention</h2>
              <p className="mb-6">
                We retain your data for as long as necessary to provide our services and comply with legal requirements.
                This includes retaining data related to Spot Trading Bots activities for regulatory compliance or to
                resolve disputes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Compliance with Laws</h2>
              <p className="mb-6">
                CredBull Exchange is a registered private limited company in India, fully complying with applicable
                government regulations and laws, including the Financial Intelligence Unit (FIU) regulations and
                anti-money laundering (AML) requirements.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
