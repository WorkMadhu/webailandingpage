import { CheckCircle2, TrendingUp, Clock, Target, Zap, Users, BarChart3, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    number: '01',
    title: 'Content Automation System',
    subtitle: 'Boosted Content Output by 300% with AI-Powered Automation',
    gradient: 'from-cyan-400 via-blue-500 to-cyan-500',
    accentColor: 'cyan',
    problem: {
      title: 'The Challenge',
      points: [
        '2–3 hours per video editing',
        'Multiple apps to manage',
        'Rewriting for each platform',
        'Inconsistent posting schedule'
      ]
    },
    solution: {
      title: 'The Solution',
      points: [
        'AI video repurposing pipeline',
        'Auto-generated captions, titles & hashtags',
        'Automated posting workflow',
        'Centralized dashboard control',
        'Recording templates & workflows'
      ]
    },
    results: {
      title: 'Results in 30 Days',
      metrics: [
        { icon: TrendingUp, label: 'Content Output', value: '+300%' },
        { icon: Clock, label: 'Time Saved', value: '80%' },
        { icon: Target, label: 'Daily Posts', value: '4 Channels' },
        { icon: BarChart3, label: 'Engagement', value: 'Improved' }
      ]
    },
    tools: ['AI Workflows', 'Automation Apps', 'Scheduling Tools'],
    cta: 'Ready to automate your content?'
  },
  {
    number: '02',
    title: 'Omnichannel Outreach System',
    subtitle: 'Booked 40+ Warm Leads Monthly With Automated Outreach',
    gradient: 'from-blue-500 via-blue-600 to-cyan-500',
    accentColor: 'blue',
    problem: {
      title: 'The Challenge',
      points: [
        'Slow manual outreach process',
        'Limited channel coverage',
        'No follow-up automation',
        'Inconsistent lead generation'
      ]
    },
    solution: {
      title: 'The Solution',
      points: [
        'Personalized messages across Instagram, email, TikTok, LinkedIn',
        'AI pre-qualifies and routes leads',
        'Automatic call scheduling',
        'Real-time analytics dashboards',
        'Smart follow-up sequences'
      ]
    },
    results: {
      title: 'Results',
      metrics: [
        { icon: Users, label: 'Leads/Month', value: '40+' },
        { icon: Zap, label: 'Efficiency', value: '5x Faster' },
        { icon: CheckCircle2, label: 'Follow-ups', value: 'Zero Missed' },
        { icon: TrendingUp, label: 'Response Rate', value: 'Improved' }
      ]
    },
    tools: ['AI Personalization', 'CRM Automation', 'Tracking Dashboards', 'Scheduling Tools'],
    cta: 'Want daily booked calls?'
  },
  {
    number: '03',
    title: 'HR Automations',
    subtitle: 'Saved 15 Hours Weekly on Hiring',
    gradient: 'from-cyan-500 via-blue-500 to-blue-600',
    accentColor: 'cyan',
    problem: {
      title: 'The Challenge',
      points: [
        'Manual applicant screening',
        'Repetitive messaging overhead',
        'Interview scheduling chaos',
        'Onboarding delays and confusion'
      ]
    },
    solution: {
      title: 'The Solution',
      points: [
        'AI-powered applicant screening',
        'Automated interview scheduling',
        'Auto-generated job descriptions',
        'Onboarding workflow automation',
        'Centralized workflow dashboards'
      ]
    },
    results: {
      title: 'Results in 1 Month',
      metrics: [
        { icon: Clock, label: 'Time Saved', value: '15 hrs/week' },
        { icon: Zap, label: 'Interview Speed', value: 'Faster' },
        { icon: Target, label: 'Pipeline', value: 'Clearer' },
        { icon: Users, label: 'Quality', value: 'Higher' }
      ]
    },
    tools: ['Automated Forms', 'Calendar Integration', 'AI Screening', 'Workflow Dashboards'],
    cta: 'Want to automate HR tasks?'
  }
];

export default function CaseStudies() {

  return (
    <section id="case-studies" className="py-24 px-4 bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="text-white">Case </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Studies</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl font-medium">Real results from real implementations</p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                transform: 'translateZ(0)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div
                className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-[3rem] overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
                style={{
                  transform: 'rotateX(2deg)',
                  transformStyle: 'preserve-3d',
                  boxShadow: `
                    0 30px 60px -15px rgba(0, 0, 0, 0.7),
                    0 20px 40px -15px rgba(0, 0, 0, 0.5),
                    inset 0 2px 4px rgba(255, 255, 255, 0.1),
                    ${study.accentColor === 'cyan' ? '0 0 60px rgba(34, 211, 238, 0.2)' : '0 0 60px rgba(59, 130, 246, 0.2)'}
                  `,
                  border: `3px solid ${study.accentColor === 'cyan' ? 'rgba(34, 211, 238, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${study.gradient}`}></div>

                <div className="p-8 md:p-12">
                  <div className="flex items-start gap-6 mb-8">
                    <div
                      className={`bg-gradient-to-br ${study.gradient} rounded-2xl w-20 h-20 flex items-center justify-center flex-shrink-0 relative`}
                      style={{
                        transform: 'translateZ(40px)',
                        boxShadow: `
                          0 20px 40px ${study.accentColor === 'cyan' ? 'rgba(34, 211, 238, 0.4)' : 'rgba(59, 130, 246, 0.4)'},
                          0 10px 20px ${study.accentColor === 'cyan' ? 'rgba(34, 211, 238, 0.3)' : 'rgba(59, 130, 246, 0.3)'},
                          inset 0 2px 4px rgba(255, 255, 255, 0.3)
                        `
                      }}
                    >
                      <span className="text-white text-3xl font-black">{study.number}</span>
                    </div>
                    <div className="flex-1" style={{ transform: 'translateZ(20px)' }}>
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
                        {study.title}
                      </h3>
                      <p className={`text-lg md:text-xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                        {study.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                    <div className="space-y-4" style={{ transform: 'translateZ(15px)' }}>
                      <h4 className="text-xl font-bold text-red-400 flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        {study.problem.title}
                      </h4>
                      <ul className="space-y-3">
                        {study.problem.points.map((point, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-3">
                            <span className="text-red-400 mt-1">•</span>
                            <span className="text-base leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4" style={{ transform: 'translateZ(15px)' }}>
                      <h4 className="text-xl font-bold text-yellow-400 flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        {study.solution.title}
                      </h4>
                      <ul className="space-y-3">
                        {study.solution.points.map((point, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                            <span className="text-base leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4" style={{ transform: 'translateZ(15px)' }}>
                      <h4 className={`text-xl font-bold ${study.accentColor === 'cyan' ? 'text-cyan-400' : 'text-blue-400'} flex items-center gap-2 mb-4`}>
                        <span className={`w-2 h-2 ${study.accentColor === 'cyan' ? 'bg-cyan-400' : 'bg-blue-400'} rounded-full`}></span>
                        {study.results.title}
                      </h4>
                      <div className="space-y-4">
                        {study.results.metrics.map((metric, idx) => {
                          const Icon = metric.icon;
                          return (
                            <div key={idx} className="flex items-center gap-3">
                              <div
                                className={`p-2.5 rounded-lg bg-gradient-to-br ${study.gradient}`}
                                style={{
                                  boxShadow: `0 4px 12px ${study.accentColor === 'cyan' ? 'rgba(34, 211, 238, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`
                                }}
                              >
                                <Icon size={18} className="text-white" />
                              </div>
                              <div>
                                <div className="text-white font-bold text-lg">{metric.value}</div>
                                <div className="text-gray-400 text-sm">{metric.label}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8" style={{ transform: 'translateZ(10px)' }}>
                    <span className="text-gray-400 text-sm font-semibold">Tools:</span>
                    {study.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          study.accentColor === 'cyan'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'
                            : 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4" style={{ transform: 'translateZ(20px)' }}>
                    <a
                      href="https://cal.com/tarunsai/30min?overlayCalendar=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${study.gradient} text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden group/btn`}
                      style={{
                        boxShadow: `
                          0 15px 30px ${study.accentColor === 'cyan' ? 'rgba(34, 211, 238, 0.4)' : 'rgba(59, 130, 246, 0.4)'},
                          0 8px 16px ${study.accentColor === 'cyan' ? 'rgba(34, 211, 238, 0.3)' : 'rgba(59, 130, 246, 0.3)'},
                          inset 0 1px 2px rgba(255, 255, 255, 0.3)
                        `
                      }}
                    >
                      <span className="relative z-10">{study.cta}</span>
                      <ArrowRight size={22} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    </a>
                    <span className="text-gray-400 text-base font-semibold">Book your consultation today!</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
