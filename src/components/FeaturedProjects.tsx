import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Automated Hiring System',
    company: 'Enterprise SaaS Company',
    metric: '40+ Hours Saved / Month',
    description: 'Streamlined candidate screening and onboarding with AI-powered automation, reducing time-to-hire by 60%.',
    image: 'linear-gradient(135deg, #00D9FF 0%, #0088FF 50%, #7C3AED 100%)',
    link: 'https://www.upwork.com/freelancers/madhutarunsaim?referrer_url_path=/nx/search/talent/details/~0103dfcc01ba6b0369/profile&p=1799103999460208640'
  },
  {
    title: 'Personal Branding on Autopilot',
    company: 'Growth Partners Inc',
    metric: '3x Reply Rate',
    description: '40+ posts per month system that creates studio-quality content and auto-publishes across 14 platforms.',
    image: 'linear-gradient(135deg, #0088FF 0%, #7C3AED 50%, #00D9FF 100%)',
    link: 'https://www.upwork.com/freelancers/madhutarunsaim?referrer_url_path=/nx/search/talent/details/~0103dfcc01ba6b0369/profile&p=1799165823548141568'
  },
  {
    title: 'Lead Generation System',
    company: 'NextGen SaaS',
    metric: '5x Lead Volume',
    description: 'High-ticket automation system that researches prospects and generates personalized outreach at scale.',
    image: 'linear-gradient(135deg, #7C3AED 0%, #00D9FF 50%, #0088FF 100%)',
    link: 'https://www.upwork.com/freelancers/madhutarunsaim?referrer_url_path=/nx/search/talent/details/~0103dfcc01ba6b0369/profile&p=1990911937087201280'
  }
];

export default function FeaturedProjects() {
  return (
    <section id="customers" className="py-20 px-4 bg-[#0F0F0F]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#00D9FF]">Projects</span>
          </h2>
          <p className="text-[#CCCCCC] text-lg">
            Real results from our automation systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-[#1A1A2E] border border-[#1A1A2E] hover:border-[#00D9FF]/30 transition-all duration-500"
              data-testid={`card-project-${index}`}
            >
              <div 
                className="aspect-video relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-block px-4 py-2 bg-[#00D9FF]/20 backdrop-blur-sm rounded-lg border border-[#00D9FF]/30">
                    <span className="text-[#00D9FF] font-bold text-lg">{project.metric}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-[#999999] text-sm mb-2">{project.company}</div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-[#CCCCCC] text-sm leading-relaxed mb-4">{project.description}</p>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00D9FF] text-sm font-medium hover:gap-3 transition-all"
                  data-testid={`link-project-${index}`}
                >
                  View Case Study
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
