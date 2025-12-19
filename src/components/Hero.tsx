import { ArrowRight, CheckCircle2, Workflow, MessageSquare, Bot, Video, Volume2, Mail, Zap, Database, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const techStack = [
  { name: 'n8n', icon: Workflow },
  { name: 'ChatGPT', icon: MessageSquare },
  { name: 'Claude', icon: Bot },
  { name: 'HeyGen', icon: Video },
  { name: 'ElevenLabs', icon: Volume2 },
  { name: 'Instantly.ai', icon: Mail },
  { name: 'Make', icon: Zap },
  { name: 'Airtable', icon: Database },
  { name: 'HeyReach', icon: Target }
];

export default function Hero() {

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 backdrop-blur-sm border border-cyan-400/30 mb-6">
          <CheckCircle2 size={16} className="text-cyan-400" />
          <span className="text-sm text-cyan-200 font-medium">Top Rated Plus • 100% Job Success Score</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent mb-6 leading-tight">
          Maximize impact, minimize effort—<br />Automate content, outreach, and HR.
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://cal.com/anabless-dela-cruz-knutxw/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 text-black rounded-lg font-semibold hover:shadow-2xl transition-all shadow-lg shadow-cyan-400/50 flex items-center gap-2"
          >
            Get Started
            <ArrowRight size={20} />
          </a>
          <Link
            to="/case-studies"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-cyan-100 rounded-lg font-semibold hover:bg-white/20 transition-all border border-cyan-400/30 shadow-md"
          >
            View Case Studies
          </Link>
        </div>

        <div
          className="max-w-4xl mx-auto py-4 px-6 overflow-visible relative"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          <div
            className="absolute inset-0 rounded-xl blur-xl opacity-50"
            style={{
              background: 'linear-gradient(45deg, rgba(6, 182, 212, 0.4), rgba(59, 130, 246, 0.4), rgba(253, 224, 71, 0.3))',
              transform: 'translateZ(-50px) scale(1.1)',
              boxShadow: '0 0 80px rgba(6, 182, 212, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)',
              animation: 'pulse 3s ease-in-out infinite'
            }}
          />
          <div className="relative z-10">
            <div className="text-xs text-cyan-300 uppercase tracking-wider font-medium mb-3 text-center">
              Tech Stack
            </div>
            <div className="relative">
              <div className="flex items-center gap-8 animate-scroll">
                {[...techStack, ...techStack].map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={`${tech.name}-${index}`}
                      className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-all flex-shrink-0 group"
                      style={{
                        transform: 'translateZ(30px)',
                        filter: 'drop-shadow(0 4px 12px rgba(6, 182, 212, 0.5))'
                      }}
                    >
                      <div
                        className="relative p-3 rounded-lg transition-transform group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))',
                          boxShadow: '0 8px 16px rgba(6, 182, 212, 0.3), 0 4px 8px rgba(59, 130, 246, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
                          transform: 'translateZ(10px)',
                          border: '1px solid rgba(6, 182, 212, 0.3)'
                        }}
                      >
                        <Icon size={24} className="text-cyan-400" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-bold text-cyan-400 tracking-wide whitespace-nowrap">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
