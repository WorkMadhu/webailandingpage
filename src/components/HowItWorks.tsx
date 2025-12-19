const steps = [
  {
    number: '1',
    title: 'Discovery & Strategy',
    description: 'We analyze your business needs and design custom automation workflows'
  },
  {
    number: '2',
    title: 'Build & Automate',
    description: 'Connect AI tools and platforms into a seamless automated system'
  },
  {
    number: '3',
    title: 'Deploy & Optimize',
    description: 'Deploy your automation and continuously improve performance'
  },
  {
    number: '4',
    title: 'Scale & Support',
    description: 'Expand capabilities and provide ongoing maintenance'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-[#0F0F0F]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It <span className="text-[#00D9FF]">Works</span>
          </h2>
          <p className="text-[#CCCCCC] text-lg">
            Four simple steps to transform your business operations
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] border-t-2 border-dashed border-[#00D9FF]/30"></div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center" data-testid={`step-${index}`}>
                <div 
                  className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0F0F0F] border-2 border-[#00D9FF] mb-6 animate-float"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)'
                  }}
                >
                  <span className="text-[#00D9FF] text-xl font-bold">{step.number}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-[#999999] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
