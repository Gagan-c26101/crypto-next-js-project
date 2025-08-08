import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Terms of Use for CredBull Exchange</h2>
              <p className="text-sm text-muted-foreground mb-6">Effective Date: 1st March 2025</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">1. Introduction</h3>
              <p className="mb-4">
                Welcome to CredBull Exchange, a platform where users can buy, sell, and trade a variety of digital
                assets. By accessing and using the services provided by CredBull Exchange, you agree to be bound by
                these Terms of Use. These Terms govern your use of our website, mobile apps, and any associated
                services, including Spot Trading Bots. If you do not agree to these Terms, please do not use our
                platform.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">2. Account Creation and Responsibilities</h3>
              <p className="mb-4">
                To access our platform, you must create a user account and provide certain personal information,
                including but not limited to name, email address, and government-issued identification. You are
                responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Maintaining the confidentiality of your account credentials.</li>
                <li>All activities under your account, including transactions made via Spot Trading Bots.</li>
                <li>Ensuring that the information you provide is accurate and up-to-date.</li>
              </ul>
              <p>If you suspect any unauthorized activity or account breach, immediately notify CredBull Exchange.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">3. Spot Trading Bots</h3>
              <p className="mb-4">
                By using Spot Trading Bots available on CredBull Exchange, you acknowledge and agree to the following:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Bot Functionality:</h4>
                  <p>
                    Our Spot Trading Bots are designed to automate trading strategies on your behalf. These bots utilize
                    algorithms to execute trades based on predefined parameters.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Risk Disclosure:</h4>
                  <p>
                    While Spot Trading Bots are designed to assist in your trading, they do not guarantee profits and
                    may result in significant losses due to market fluctuations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Bot Settings:</h4>
                  <p>
                    You are responsible for configuring your trading bot settings. CredBull Exchange provides guidance
                    and tools for optimal usage, but you should regularly review and adjust your bot's settings
                    according to your trading goals and risk tolerance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Performance Disclaimer:</h4>
                  <p>
                    CredBull Exchange does not guarantee the success or profitability of trades made via the Spot
                    Trading Bots. You agree that trading bots are used at your own risk, and CredBull Exchange is not
                    responsible for any losses incurred through their use.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">4. Data Privacy and Security</h3>
              <p>
                At CredBull Exchange, we take data privacy seriously. By using our services, you agree to the
                collection, storage, and processing of your personal data as outlined in our Privacy Policy. We
                implement reasonable security measures to protect your data, but please note that no system is
                completely secure, and we cannot guarantee absolute protection.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">5. Compliance with Laws</h3>
              <p className="mb-4">
                CredBull Exchange complies with all applicable financial and regulatory laws. By using our platform, you
                agree to adhere to the following:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Know Your Customer (KYC) Requirements:</h4>
                  <p>
                    You agree to submit the required documentation for KYC verification, ensuring compliance with
                    anti-money laundering (AML) regulations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Anti-Fraud and Security Measures:</h4>
                  <p>
                    We reserve the right to monitor transactions and suspend accounts suspected of fraudulent activity
                    or non-compliance with these Terms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Regulatory Compliance:</h4>
                  <p>
                    As a registered entity, CredBull Exchange adheres to relevant regulations in the jurisdictions where
                    we operate. We continuously update our policies to comply with changing regulations.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">6. Risk Acknowledgment</h3>
              <p className="mb-4">
                Cryptocurrency trading and automated trading through Spot Trading Bots carry substantial risks,
                including but not limited to:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Volatility:</h4>
                  <p>Cryptocurrency markets are highly volatile, and prices can fluctuate significantly.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Market Risks:</h4>
                  <p>The automated nature of Spot Trading Bots does not mitigate the inherent risks of the market.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Technical Risks:</h4>
                  <p>
                    Issues like server downtime or system failures may impact the performance of the platform or bots,
                    leading to potential losses.
                  </p>
                </div>
              </div>
              <p className="mt-4">
                You acknowledge that you are responsible for your decisions, and by using CredBull Exchange, you do so
                at your own risk.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">7. Termination and Suspension of Accounts</h3>
              <p className="mb-4">CredBull Exchange reserves the right to suspend or terminate your account for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violation of these Terms of Use.</li>
                <li>Engagement in fraudulent activities or violations of applicable laws.</li>
                <li>Inactivity for an extended period or failure to complete necessary verifications.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">8. Liability and Indemnity</h3>
              <p>
                CredBull Exchange will not be liable for any indirect, incidental, special, or consequential damages
                arising from your use of the platform, including losses resulting from the use of Spot Trading Bots. You
                agree to indemnify and hold harmless CredBull Exchange, its employees, and partners from any claims or
                damages arising from your use of the services.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">9. Dispute Resolution</h3>
              <p>
                Any disputes arising from these Terms or your use of CredBull Exchange services shall be resolved
                through binding arbitration, in accordance with the laws of India. By agreeing to these Terms, you waive
                your right to participate in class-action lawsuits.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">10. Amendments to Terms of Use</h3>
              <p>
                CredBull Exchange reserves the right to amend these Terms of Use at any time. You will be notified of
                any material changes via email or platform notifications. Continued use of the platform constitutes
                acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">11. Contact Information</h3>
              <p>
                If you have any questions or concerns regarding these Terms of Use or the Spot Trading Bots, please
                contact us at{" "}
                <a href="mailto:support@credbull.in" className="text-primary hover:underline">
                  support@credbull.in
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
