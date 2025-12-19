import { Link } from 'react-router-dom';

const services = [
  {
    number: '1',
    title: 'Content Automation System',
    description: 'System scrapes and analyzes existing content to learn tone, topics, and positioning',
    borderColor: 'border-cyan-400',
    iconBg: 'bg-cyan-500',
    link: '/content-automation'
  },
  {
    number: '2',
    title: 'Omnichannel Outreach System',
    description: 'Researches target audience problems and generates daily scripts with multiple hooks',
    borderColor: 'border-blue-500',
    iconBg: 'bg-blue-500',
    link: '/omnichannel-outreach'
  },
  {
    number: '3',
    title: 'HR Automations',
    description: 'Creates studio-quality assets and auto-publishes to 14 platforms via Metricool',
    borderColor: 'border-cyan-400',
    iconBg: 'bg-cyan-500',
    link: '/hr-automations'
  }
];

export default function CoreServices() {

  return (
    <section id="solutions" className="py-20 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="text-white">Core </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl font-medium">Enterprise automation solutions that deliver measurable results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto" style={{ perspective: '1500px' }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <div
                className="absolute inset-0 rounded-[3rem] blur-xl opacity-60 transition-all duration-500 group-hover:opacity-80"
                style={{
                  background: service.borderColor === 'border-cyan-400'
                    ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.4), rgba(59, 130, 246, 0.4))'
                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.3))',
                  transform: 'translateZ(-50px) scale(1.05)',
                  boxShadow: service.borderColor === 'border-cyan-400'
                    ? '0 0 60px rgba(34, 211, 238, 0.5), 0 0 30px rgba(59, 130, 246, 0.4)'
                    : '0 0 60px rgba(59, 130, 246, 0.5), 0 0 30px rgba(147, 51, 234, 0.4)'
                }}
              />

              <div
                className={`relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl ${service.borderColor} border-[3px] rounded-[3rem] p-8 transition-all duration-500 flex flex-col h-full`}
                style={{
                  transform: 'translateZ(0) rotateX(2deg) rotateY(-2deg)',
                  transformStyle: 'preserve-3d',
                  boxShadow: `
                    0 30px 60px -15px rgba(0, 0, 0, 0.7),
                    0 20px 40px -12px rgba(0, 0, 0, 0.5),
                    inset 0 2px 6px rgba(255, 255, 255, 0.15),
                    ${service.borderColor === 'border-cyan-400'
                      ? '0 0 50px rgba(34, 211, 238, 0.4), inset 0 0 30px rgba(34, 211, 238, 0.1)'
                      : '0 0 50px rgba(59, 130, 246, 0.4), inset 0 0 30px rgba(59, 130, 246, 0.1)'}
                  `,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateZ(30px) rotateX(-2deg) rotateY(2deg) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) rotateX(2deg) rotateY(-2deg) scale(1)';
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[2.85rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div
                  className={`${service.iconBg} rounded-3xl w-20 h-20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative`}
                  style={{
                    transform: 'translateZ(50px)',
                    boxShadow: `
                      0 25px 50px rgba(6, 182, 212, 0.5),
                      0 15px 30px rgba(59, 130, 246, 0.4),
                      inset 0 3px 6px rgba(255, 255, 255, 0.4),
                      0 0 40px rgba(6, 182, 212, 0.3)
                    `
                  }}
                >
                  <span className="text-white text-4xl font-bold drop-shadow-lg">{service.number}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 leading-tight relative" style={{ transform: 'translateZ(30px)' }}>
                  {service.title}
                </h3>

                <p className="text-gray-300 text-base leading-relaxed mb-6 flex-grow relative" style={{ transform: 'translateZ(20px)' }}>
                  {service.description}
                </p>

                <div className="flex gap-3 mt-auto relative" style={{ transform: 'translateZ(25px)' }}>
                  <a
                    href="https://cal.com/anabless-dela-cruz-knutxw/consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-bold text-sm py-3 px-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-400/50"
                  >
                    Book A Call →
                  </a>
                  <Link
                    to={service.link}
                    className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-3 px-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm border border-white/20"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
