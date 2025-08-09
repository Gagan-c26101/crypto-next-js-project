export default function StatsSection() {
  const stats = [
    { value: "$2.1T+", label: "Total Trading Volume" },
    { value: "10M+", label: "Registered Users" },
    { value: "100+", label: "Listed Cryptocurrencies" },
    { value: "180+", label: "Countries Supported" },
  ]

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-r from-orange-500 to-red-500">
      <div className="w-full max-w-none px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Millions Worldwide
            </h2>
            <p className="text-orange-100 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
              Join the largest cryptocurrency exchange platform with proven track record
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-orange-100 text-xs sm:text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
