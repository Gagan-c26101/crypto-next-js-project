import Footer from "@/components/footer"

export default function RiskDisclosurePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-6">Risk Disclosure for CredBull Exchange</h1>

          <p className="text-sm text-muted-foreground mb-8">
            <strong>Effective Date:</strong> March 1st 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              Trading and investing in cryptocurrencies, as well as using automated trading tools such as Spot Trading
              Bots, carry substantial risks. It is important that you fully understand these risks before engaging in
              any transactions on CredBull Exchange.
            </p>
            <p className="mb-4">By using CredBull Exchange, you acknowledge and accept that:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You are fully responsible for your decisions.</li>
              <li>You understand the risks involved in cryptocurrency trading and the use of trading bots.</li>
              <li>
                You agree that CredBull Exchange is not liable for any financial losses incurred as a result of your use
                of the platform or trading bots.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Cryptocurrency Trading Risks</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Market Volatility:</strong> Cryptocurrencies are known for their extreme volatility. Prices can
                rise or fall dramatically in a short period, and this can lead to significant gains or losses.
              </li>
              <li>
                <strong>Lack of Regulation:</strong> Cryptocurrencies are not subject to traditional financial
                regulations, which may make them more susceptible to fraud, market manipulation, and other risks.
              </li>
              <li>
                <strong>Liquidity Risks:</strong> Some cryptocurrencies may have limited liquidity, making it difficult
                to buy or sell at desired prices.
              </li>
              <li>
                <strong>Security Risks:</strong> Digital assets are subject to cybersecurity threats, including hacking,
                theft, and technical vulnerabilities.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Risks Associated with Spot Trading Bots</h2>
            <p className="mb-4">
              Spot Trading Bots are designed to automate your trading strategy, but they also carry specific risks:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Automated Trading Risks:</strong> Spot Trading Bots follow preset algorithms to execute trades
                automatically. While this can improve efficiency, it may also lead to unintended losses if market
                conditions change unexpectedly or if the bot's settings are misconfigured.
              </li>
              <li>
                <strong>Algorithmic Risks:</strong> Trading algorithms may not perform as expected in all market
                conditions, potentially leading to losses.
              </li>
              <li>
                <strong>Over-Optimization Risks:</strong> Bots may work well under specific historical market conditions
                but may fail in live markets where conditions are different. Over-optimized bots can cause unforeseen
                losses during live trading.
              </li>
              <li>
                <strong>Human Error:</strong> If you misconfigure the bot's settings or fail to adjust them in response
                to changing market conditions, the bot may trade in ways that lead to financial losses.
              </li>
              <li>
                <strong>No Guarantee of Profits:</strong> CredBull Exchange does not guarantee any returns or profits
                from the use of Spot Trading Bots. The bots operate in the highly volatile cryptocurrency market, and
                there is always a risk of loss.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Technical and System Risks</h2>
            <p className="mb-4">
              Trading on CredBull Exchange involves using complex technologies. There are certain technical risks
              associated with this:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>System Downtime:</strong> The platform or trading bots may experience temporary outages or
                technical issues that could affect your ability to trade or access your account. While we strive for
                maximum uptime, we cannot guarantee uninterrupted service.
              </li>
              <li>
                <strong>Connectivity Issues:</strong> Network interruptions or connectivity issues can disrupt trading,
                resulting in missed opportunities or losses.
              </li>
              <li>
                <strong>Data Latency:</strong> Delays in data transmission between your device and our servers can cause
                slippage or missed trades, especially in fast-moving markets.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Risk of Losses</h2>
            <p className="mb-4">By trading cryptocurrencies and using Spot Trading Bots, you acknowledge that:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>You may lose part or all of your investment:</strong> Cryptocurrency trading is inherently
                risky, and using trading bots increases the risk exposure.
              </li>
              <li>
                <strong>Spot Trading Bots cannot predict future market conditions:</strong> Their performance is based
                on historical data and predefined parameters, which do not guarantee future success.
              </li>
              <li>
                <strong>Unforeseen circumstances:</strong> There may be unforeseen circumstances, such as technical
                failures or extreme market conditions, which could lead to losses that are beyond your control.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Financial and Investment Advice</h2>
            <p className="mb-4">
              CredBull Exchange does not provide financial advice, investment advice, or recommendations. The
              information provided on our platform, including guides and support for Spot Trading Bots, is for
              educational purposes only.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                You should consult a professional financial advisor before engaging in cryptocurrency trading or using
                automated trading tools, particularly if you are not familiar with the inherent risks involved.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. User Responsibility</h2>
            <p className="mb-4">
              You are solely responsible for your trading decisions, the settings you configure for Spot Trading Bots,
              and your use of the platform. CredBull Exchange is not responsible for any errors, losses, or damages
              resulting from your actions or inactions.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Review and Monitor:</strong> Regularly review your trading bot settings and strategies. CredBull
                Exchange is not liable for any losses resulting from failure to monitor your trading bot.
              </li>
              <li>
                <strong>Account Security:</strong> Ensure the security of your account and trading bots by using strong
                passwords and enabling two-factor authentication.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Risk Acknowledgment</h2>
            <p className="mb-4">
              By using CredBull Exchange and its services, including Spot Trading Bots, you acknowledge the inherent
              risks involved in cryptocurrency trading and automated trading. You confirm that you fully understand
              these risks and agree to assume responsibility for your actions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                To the fullest extent permitted by applicable law, CredBull Exchange shall not be held liable for any
                losses, damages, or other consequences resulting from the use of the platform, including the Spot
                Trading Bots, or from trading in cryptocurrencies.
              </li>
              <li>
                You agree to hold CredBull Exchange harmless from any and all claims, liabilities, and damages arising
                from your use of the platform or automated trading tools.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to Risk Disclosure</h2>
            <p className="mb-4">
              CredBull Exchange reserves the right to update or modify this Risk Disclosure at any time. Users will be
              notified of significant changes. Continued use of the platform after such changes is considered acceptance
              of the updated Risk Disclosure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have any questions or concerns regarding the risks associated with using CredBull Exchange and the
              Spot Trading Bots, please contact our support team at{" "}
              <a href="mailto:support@credbull.in" className="text-orange-500 hover:text-orange-600 underline">
                support@credbull.in
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
