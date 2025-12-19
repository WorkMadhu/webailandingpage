import { Briefcase, Video, Layers, Zap, ArrowRight } from 'lucide-react';

const projects = [
  {
    number: 1,
    icon: Briefcase,
    title: 'Personal Branding on Autopilot',
    description: '40+ Posts/Month, 14 Platforms',
    link: 'https://www.upwork.com/freelancers/madhutarunsaim?referrer_url_path=/nx/search/talent/details/~0103dfcc01ba6b0369/profile&p=1799165823548141568',
    borderColor: 'border-gray-600',
    glowColor: 'shadow-none'
  },
  {
    number: 2,
    icon: Video,
    title: 'AI Video Avatar System',
    description: 'Studio-Quality Content',
    link: 'https://www.upwork.com/freelancers/madhutarunsaim?referrer_url_path=/nx/search/talent/details/~0103dfcc01ba6b0369/profile&p=1799165823548141568',
    borderColor: 'border-blue-500',
    glowColor: 'shadow-[0_0_30px_rgba(59,130,246,0.4)]'
  },
  {
    number: 3,
    icon: Layers,
    title: 'Multi-Platform Content Engine',
    description: 'LinkedIn, Instagram, YouTube+',
    link: 'https://www.upwork.com/freelancers/madhutarunsaim?referrer_url_path=/nx/search/talent/details/~0103dfcc01ba6b0369/profile&p=1799165823548141568',
    borderColor: 'border-gray-600',
    glowColor: 'shadow-none'
  },
  {
    number: 4,
    icon: Zap,
    title: 'Lead Magnet Automation',
    description: 'ManyChat DM Integration',
    link: 'https://www.upwork.com/freelancers/madhutarunsaim?referrer_url_path=/nx/search/talent/details/~0103dfcc01ba6b0369/profile&p=1799165823548141568',
    borderColor: 'border-blue-500',
    glowColor: 'shadow-[0_0_30px_rgba(59,130,246,0.4)]'
  }
];

export default function ContentProjects() {
  return (
    <section id="products" className="py-20 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg font-light">Content automation systems we've built</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative perspective-1000">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent z-0"></div>

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="relative group"
                style={{
                  transform: 'translateZ(0)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div
                  className={`relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-2 ${project.borderColor} ${project.glowColor} transition-all duration-500 h-full flex flex-col`}
                  style={{
                    transform: 'rotateX(3deg) rotateY(-3deg)',
                    transformStyle: 'preserve-3d',
                    boxShadow: `
                      0 25px 50px -12px rgba(0, 0, 0, 0.6),
                      0 15px 30px -10px rgba(0, 0, 0, 0.4),
                      inset 0 2px 4px rgba(255, 255, 255, 0.1),
                      ${project.glowColor !== 'shadow-none' ? '0 0 40px rgba(59, 130, 246, 0.3)' : ''}
                    `
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div
                    className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-sm font-bold shadow-lg border-4 border-gray-900 z-10 transition-all duration-500 group-hover:scale-110"
                    style={{
                      transform: 'translateZ(30px)',
                      boxShadow: '0 15px 30px rgba(6, 182, 212, 0.4), 0 8px 16px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.5)'
                    }}
                  >
                    {project.number}
                  </div>

                  <div className="mt-6 mb-4 flex-grow">
                    <div
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-400 to-yellow-300 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        transform: 'translateZ(40px)',
                        boxShadow: `
                          0 20px 40px rgba(6, 182, 212, 0.4),
                          0 10px 20px rgba(59, 130, 246, 0.3),
                          inset 0 2px 4px rgba(255, 255, 255, 0.3)
                        `
                      }}
                    >
                      <Icon className="text-gray-900" size={28} strokeWidth={2.5} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 relative" style={{ transform: 'translateZ(20px)' }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed relative" style={{ transform: 'translateZ(10px)' }}>
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 relative" style={{ transform: 'translateZ(15px)' }}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-bold text-xs py-2.5 px-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1.5 shadow-lg hover:shadow-cyan-400/50"
                    >
                      Learn More
                      <ArrowRight size={14} />
                    </a>
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
