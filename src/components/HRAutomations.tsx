import { FileText, Target, MessageCircle, FileSignature, Clock, DollarSign } from 'lucide-react';

const pipeline = [
  { step: 'Application', icon: FileText, color: 'from-cyan-400 to-blue-500' },
  { step: 'AI Scoring', icon: Target, color: 'from-yellow-300 to-yellow-400' },
  { step: 'Interview', icon: MessageCircle, color: 'from-cyan-400 to-blue-500' },
  { step: 'Contract', icon: FileSignature, color: 'from-yellow-300 to-yellow-400' },
  { step: 'Tracking', icon: Clock, color: 'from-cyan-400 to-blue-500' },
  { step: 'Payroll', icon: DollarSign, color: 'from-yellow-300 to-yellow-400' }
];

const metrics = [
  { before: '6 weeks', after: '2-4 days', label: 'Hiring Time' },
  { before: '40 hrs', after: '20 hrs', label: 'Weekly Savings' },
  { before: 'Manual', after: 'Automated', label: 'Process' }
];

const techStack = ['Typeform', 'Make.com', 'ClickUp', 'HubSpot', 'PandaDoc', 'RIZE', 'Toggl', 'Gusto'];

const targetAudience = [
  'Staffing agencies',
  'Growing companies',
  'Remote teams',
  'HR departments'
];

export default function HRAutomations() {
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
            <span className="text-sm text-white font-semibold">SERVICE 03</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">HR Automations</span>
          </h2>
          <p className="text-cyan-200/80 text-lg">Complete hiring pipeline automation from application to payroll</p>
        </div>

        <div className="mb-12" style={{ perspective: '1500px' }}>
          <h3 className="text-2xl font-bold text-white mb-6">Complete Pipeline</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pipeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col items-center group" style={{ transformStyle: 'preserve-3d' }}>
                  <div
                    className={`relative w-full aspect-square rounded-xl bg-gradient-to-br ${item.color} p-1 mb-3 transition-all duration-300`}
                    style={{
                      transform: 'translateZ(0) rotateX(2deg)',
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 10px 20px -8px rgba(0, 0, 0, 0.4), 0 0 30px rgba(6, 182, 212, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateZ(20px) rotateX(-2deg) scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateZ(0) rotateX(2deg) scale(1)';
                    }}
                  >
                    <div
                      className="w-full h-full bg-black/30 backdrop-blur-sm rounded-lg flex items-center justify-center"
                      style={{ transform: 'translateZ(10px)' }}
                    >
                      <Icon className="text-gray-900" size={32} />
                    </div>
                    {index < pipeline.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 transform translate-x-full w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                    )}
                  </div>
                  <span className="text-white text-sm font-medium text-center" style={{ transform: 'translateZ(5px)' }}>{item.step}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Transformation Results</h3>
            <div className="space-y-4" style={{ perspective: '1200px' }}>
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-cyan-400/30 transition-all duration-300"
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
                  <div className="text-sm text-cyan-200/80 mb-2" style={{ transform: 'translateZ(5px)' }}>{metric.label}</div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-red-400 text-xl font-bold line-through" style={{ transform: 'translateZ(10px)' }}>{metric.before}</div>
                    </div>
                    <div className="text-2xl text-cyan-300" style={{ transform: 'translateZ(12px)' }}>→</div>
                    <div className="flex-1">
                      <div className="text-emerald-400 text-2xl font-bold" style={{ transform: 'translateZ(10px)' }}>{metric.after}</div>
                    </div>
                  </div>
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
