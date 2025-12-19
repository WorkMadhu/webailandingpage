import { Workflow, Cpu, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Workflow,
    title: 'Automation Studio',
    description: 'Build complex workflows visually with our drag-and-drop interface. Connect apps, set triggers, and automate repetitive tasks in minutes.',
    link: '/content-automation'
  },
  {
    icon: Cpu,
    title: 'AI-Powered Workflows',
    description: 'Let AI generate, route, and optimize your automation steps. Our intelligent system learns from your patterns to suggest improvements.',
    link: '/omnichannel-outreach'
  },
  {
    icon: Shield,
    title: 'Enterprise Integration',
    description: 'Secure connections to CRMs, ad platforms, HR systems, and more. SOC 2 compliant with enterprise-grade security.',
    link: '/hr-automations'
  }
];

export default function CoreServices() {
  return (
    <section id="solutions" className="py-20 px-4 bg-[#0F0F0F]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="text-[#00D9FF]">WebAI Automations</span>?
          </h2>
          <p className="text-[#CCCCCC] text-lg max-w-2xl mx-auto">
            Enterprise automation solutions that deliver measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-xl bg-[#0F0F0F] border border-[#1A1A2E] transition-all duration-500 group hover:border-[#00D9FF]/30"
                style={{
                  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(2deg) rotateY(-2deg)';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 217, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                data-testid={`card-service-${index}`}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1A1A2E] flex items-center justify-center group-hover:bg-[#00D9FF]/10 transition-colors">
                    <Icon className="text-[#00D9FF]" size={24} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-[#999999] text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="text-[#00D9FF] text-sm font-medium hover:underline inline-flex items-center gap-1"
                  data-testid={`link-service-${index}`}
                >
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
