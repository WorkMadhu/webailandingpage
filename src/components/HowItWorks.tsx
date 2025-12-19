import { Search, Cpu, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Strategy',
    description: 'We analyze your business needs and design custom automation workflows',
    borderColor: 'border-primary-300'
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Build & Integration',
    description: 'Connect AI tools and platforms into a seamless automated system',
    borderColor: 'border-blue-500'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Optimize',
    description: 'Deploy your automation and continuously improve performance',
    borderColor: 'border-primary-300'
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Scale & Support',
    description: 'Expand capabilities and provide ongoing maintenance',
    borderColor: 'border-blue-500'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-cyan-200/80 text-lg">Four simple steps to transform your business operations</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-yellow-300"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <div className={`relative p-6 rounded-xl bg-white/10 backdrop-blur-sm border-2 ${step.borderColor} hover:bg-white/20 transition-all group`}>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-yellow-300 flex items-center justify-center text-black text-sm font-bold border-4 border-gray-900">
                    {index + 1}
                  </div>

                  <div className="mt-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-400 to-yellow-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-black" size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-cyan-200/80 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
