import { Brain, Video, Upload, TrendingUp } from 'lucide-react';

const workflow = [
  { icon: Brain, label: 'AI Research & Strategy', gradient: 'from-navy-700 to-navy-900' },
  { icon: Video, label: 'Script/Video Generation', gradient: 'from-blue-500 to-primary-400' },
  { icon: Upload, label: 'Studio Editing & Publishing', gradient: 'from-primary-400 to-emerald-500' }
];

const metrics = [
  { value: '100+', label: 'Posts Live', color: 'text-navy-700' },
  { value: '15 min', label: 'Monthly Input', color: 'text-orange-400' },
  { value: '14', label: 'Platforms', color: 'text-navy-700' },
  { value: '40+', label: 'Posts/Month', color: 'text-orange-400' }
];

const techStack = ['N8n', 'ChatGPT API', 'Claude', 'HeyGen', 'ElevenLabs', 'Airtable', 'Metricool'];

const targetAudience = [
  'Content creators & agencies',
  'B2B SaaS companies',
  'Marketing departments',
  'Social media managers'
];

export default function ContentAutomation() {
  return (
    <section className="py-20 px-4 bg-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary-400/10 to-blue-500/10 border border-primary-300/20 mb-4">
            <span className="text-sm text-navy-700 font-semibold">SERVICE 01</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-navy-700 bg-clip-text text-transparent">
            Content Automation System
          </h2>
          <p className="text-primary-700 text-lg">40+ posts/month across 14 platforms with 0 hours of ongoing work</p>
        </div>

        <div className="mb-12" style={{ perspective: '1500px' }}>
          <h3 className="text-2xl font-bold text-navy-900 mb-6">3-Step Workflow</h3>
          <div className="flex flex-col md:flex-row gap-8">
            {workflow.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex-1 relative group" style={{ transformStyle: 'preserve-3d' }}>
                  <div
                    className="absolute inset-0 rounded-xl blur-xl opacity-50 transition-all duration-500 group-hover:opacity-70"
                    style={{
                      background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.4), rgba(59, 130, 246, 0.4))',
                      transform: 'translateZ(-40px) scale(1.05)',
                      boxShadow: '0 0 50px rgba(34, 211, 238, 0.4), 0 0 25px rgba(59, 130, 246, 0.3)'
                    }}
                  />
                  <div
                    className={`relative p-6 rounded-xl bg-gradient-to-br ${step.gradient} transition-all duration-500`}
                    style={{
                      transform: 'translateZ(0) rotateX(2deg) rotateY(-2deg)',
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 15px 30px -10px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.15), 0 0 40px rgba(34, 211, 238, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateZ(25px) rotateX(-2deg) rotateY(2deg) scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateZ(0) rotateX(2deg) rotateY(-2deg) scale(1)';
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
                        style={{
                          transform: 'translateZ(30px)',
                          boxShadow: '0 15px 30px rgba(6, 182, 212, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
                        }}
                      >
                        <Icon className="text-white" size={24} />
                      </div>
                      <span className="text-white font-semibold" style={{ transform: 'translateZ(20px)' }}>{step.label}</span>
                    </div>
                  </div>
                  {index < workflow.length - 1 && (
                    <div className="hidden md:block text-center text-primary-600 text-2xl my-4">→</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2">
              <TrendingUp className="text-navy-700" size={24} />
              Real Results
            </h3>
            <div className="grid grid-cols-2 gap-4" style={{ perspective: '1200px' }}>
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 ${index % 2 === 0 ? 'border-primary-300/30 bg-navy-700/5' : 'border-accent-600/30 bg-accent-600/5'} transition-all duration-300`}
                  style={{
                    transform: 'translateZ(0) rotateX(2deg)',
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 15px 30px -8px rgba(0, 0, 0, 0.3), inset 0 1px 3px rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(15px) rotateX(-2deg) scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(0) rotateX(2deg) scale(1)';
                  }}
                >
                  <div className={`text-3xl font-bold mb-1 ${metric.color}`} style={{ transform: 'translateZ(10px)' }}>
                    {metric.value}
                  </div>
                  <div className="text-primary-700 text-sm" style={{ transform: 'translateZ(5px)' }}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Perfect For</h3>
            <div className="space-y-3">
              {targetAudience.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white border border-primary-300/30 hover:border-primary-300/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-navy-700 to-navy-900 flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-primary-800">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy-900 mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-400/10 to-blue-500/10 border border-primary-300/30 text-primary-600 text-sm font-medium"
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
