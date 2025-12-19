const metrics = [
  {
    number: '3-5x',
    label: 'ROI',
    description: 'Average return in year 1'
  },
  {
    number: '40+',
    label: 'Integrations',
    description: 'Connect all your tools'
  },
  {
    number: '500+',
    label: 'Companies',
    description: 'Trusted worldwide'
  }
];

export default function TrustMetrics() {
  return (
    <section className="py-20 px-4 bg-[#0F0F0F]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl bg-[#0F0F0F] border border-[#1A1A2E] border-l-4 border-l-[#00D9FF] transition-all duration-300 hover:border-[#00D9FF]/50 group"
              style={{
                boxShadow: 'inset 0 0 0 1px rgba(26, 26, 46, 0.5)'
              }}
              data-testid={`card-metric-${index}`}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00D9FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="text-5xl font-bold text-[#00D9FF] mb-2">
                  {metric.number}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {metric.label}
                </div>
                <div className="text-[#999999] text-sm">
                  {metric.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
