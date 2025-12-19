import { Mail, MessageSquare, Phone, Send } from 'lucide-react';

const campaign = [
  { day: 'Day 1', action: 'Video Email', icon: Mail, color: 'cyan' },
  { day: 'Day 2', action: 'SMS', icon: MessageSquare, color: 'orange' },
  { day: 'Day 3', action: 'Voicemail', icon: Phone, color: 'cyan' },
  { day: 'Day 4', action: 'Email', icon: Mail, color: 'orange' },
  { day: 'Day 5', action: 'Break', icon: Send, color: 'cyan' }
];

const metrics = [
  { value: '72%', label: 'Open Rate', color: 'cyan' },
  { value: '36%', label: 'Reply Rate', color: 'orange' },
  { value: '11%', label: 'Positive Replies', color: 'cyan' },
  { value: '21%', label: 'Click Rate', color: 'orange' }
];

const techStack = ['Instantly.ai', 'HeyReach', 'Apollo.io', 'GHL + Vapi', 'Make.com'];

const targetAudience = [
  'Staffing agencies',
  'B2B SaaS companies',
  'Service providers',
  'Sales teams'
];

export default function OmnichannelOutreach() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-400/30 mb-4">
            <span className="text-sm text-white font-semibold">SERVICE 02</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">Omnichannel Outreach</span> System
          </h2>
          <p className="text-cyan-200/80 text-lg">5-day multi-touch campaign sequence with proven conversion rates</p>
        </div>

        <div className="mb-12" style={{ perspective: '1500px' }}>
          <h3 className="text-2xl font-bold text-white mb-6">Campaign Sequence</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 opacity-30"></div>

            {campaign.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 relative z-10 group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div
                    className={`w-16 h-16 rounded-full ${step.color === 'cyan' ? 'bg-gradient-to-br from-cyan-400 to-blue-500' : 'bg-gradient-to-br from-yellow-300 to-yellow-400'} flex items-center justify-center transition-all duration-300`}
                    style={{
                      transform: 'translateZ(20px)',
                      boxShadow: step.color === 'cyan'
                        ? '0 20px 40px rgba(6, 182, 212, 0.5), 0 10px 20px rgba(59, 130, 246, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
                        : '0 20px 40px rgba(253, 224, 71, 0.5), 0 10px 20px rgba(250, 204, 21, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateZ(30px) scale(1.1) rotate(5deg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateZ(20px) scale(1) rotate(0deg)';
                    }}
                  >
                    <Icon className="text-gray-900" size={24} />
                  </div>
                  <div
                    className={`mt-2 px-4 py-2 rounded-lg border-2 ${step.color === 'cyan' ? 'border-cyan-400/30 bg-cyan-400/10' : 'border-yellow-300/30 bg-yellow-300/10'} backdrop-blur-sm transition-all duration-300`}
                    style={{
                      transform: 'translateZ(10px)',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateZ(15px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateZ(10px)';
                    }}
                  >
                    <div className="text-center">
                      <div className="text-xs text-cyan-200/70 mb-1">{step.day}</div>
                      <div className={`text-sm font-semibold ${step.color === 'cyan' ? 'text-cyan-300' : 'text-yellow-200'}`}>
                        {step.action}
                      </div>
                    </div>
                  </div>
                  {index < campaign.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-current to-transparent opacity-30"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-4" style={{ perspective: '1200px' }}>
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 ${metric.color === 'cyan' ? 'border-cyan-400/30 bg-cyan-400/10' : 'border-yellow-300/30 bg-yellow-300/10'} backdrop-blur-sm transition-all duration-300`}
                  style={{
                    transform: 'translateZ(0) rotateX(2deg)',
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 15px 30px -8px rgba(0, 0, 0, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(15px) rotateX(-2deg) scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(0) rotateX(2deg) scale(1)';
                  }}
                >
                  <div className={`text-3xl font-bold mb-1 ${metric.color === 'cyan' ? 'text-cyan-300' : 'text-yellow-200'}`} style={{ transform: 'translateZ(10px)' }}>
                    {metric.value}
                  </div>
                  <div className="text-cyan-200/80 text-sm" style={{ transform: 'translateZ(5px)' }}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Perfect For</h3>
            <div className="space-y-3">
              {targetAudience.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-gray-900 text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
