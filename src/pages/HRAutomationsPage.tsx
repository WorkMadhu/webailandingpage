import { ArrowRight, CheckCircle2, FileText, Target, MessageCircle, Ligature as FileSignature, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import HRTestimonials from '../components/HRTestimonials';
import HRProjects from '../components/HRProjects';

const benefits = [
  {
    icon: Clock,
    title: '6 Weeks → 2-4 Days',
    description: 'Reduce hiring time by 90% with automated screening'
  },
  {
    icon: TrendingUp,
    title: '20+ Hours Saved Weekly',
    description: 'Free up your team to focus on strategic work'
  },
  {
    icon: Target,
    title: 'End-to-End Automation',
    description: 'From application to payroll, fully integrated'
  }
];

const pipeline = [
  {
    icon: FileText,
    title: 'Application Collection',
    description: 'Custom forms automatically capture all required candidate information with smart validation',
    color: 'purple'
  },
  {
    icon: Target,
    title: 'AI Scoring & Ranking',
    description: 'Machine learning evaluates candidates against your criteria and ranks them automatically',
    color: 'yellow'
  },
  {
    icon: MessageCircle,
    title: 'Interview Scheduling',
    description: 'Automated calendar coordination finds the best time for all parties and sends reminders',
    color: 'pink'
  },
  {
    icon: FileSignature,
    title: 'Contract & Onboarding',
    description: 'Digital contracts, e-signatures, and automated onboarding workflows get hires productive fast',
    color: 'cyan'
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Automated time tracking integrates with your project management and payroll systems',
    color: 'purple'
  },
  {
    icon: DollarSign,
    title: 'Payroll Integration',
    description: 'Seamless connection to payroll systems ensures accurate, on-time payments every time',
    color: 'yellow'
  }
];

const results = [
  { before: '2-4 days', after: '6 weeks', label: 'Hiring Time' },
  { before: '40 hrs/week', after: '20 hrs/week', label: 'Admin Time' },
  { before: '100+ emails', after: '5 emails', label: 'Manual Work' },
  { before: 'Manual', after: 'Automated', label: 'Process' }
];

const pricing = [
  {
    name: 'Starter',
    price: '$4,997',
    period: '/month',
    description: 'Perfect for growing companies',
    features: [
      'Up to 50 hires per year',
      'Application to interview',
      'AI candidate scoring',
      'Basic analytics',
      'Email support'
    ],
    highlighted: false
  },
  {
    name: 'Professional',
    price: '$8,997',
    period: '/month',
    description: 'Most popular for staffing agencies',
    features: [
      'Up to 200 hires per year',
      'Full pipeline automation',
      'Advanced AI scoring',
      'Time tracking included',
      'Priority support',
      'Custom workflows',
      'Integration support'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored for large organizations',
    features: [
      'Unlimited hires',
      'White-label option',
      'Dedicated account manager',
      'Custom integrations',
      'API access',
      '24/7 support',
      'Training & onboarding'
    ],
    highlighted: false
  }
];

export default function HRAutomationsPage() {

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute inset-0 "></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-sm text-white hover:text-cyan-300 mb-8">
            ← Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 mb-6">
            <CheckCircle2 size={16} className="text-white" />
            <span className="text-sm text-white font-semibold">SERVICE 03</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            HR Automation
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">
              System
            </span>
          </h1>

          <p className="text-xl text-cyan-200/90 mb-10 max-w-3xl">
            Complete hiring pipeline automation from application to payroll.
            Reduce hiring time from 6 weeks to 2-4 days and save 20+ hours weekly.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <a href="https://cal.com/tarunsai/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all flex items-center gap-2">
              Get Started Today
              <ArrowRight size={20} />
            </a>
            <a href="#pipeline" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
              See Full Pipeline
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-cyan-400/30 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4">
                    <Icon className="text-gray-900" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-cyan-200/80 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pipeline" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute inset-0 "></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Complete <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">Pipeline</span>
            </h2>
            <p className="text-cyan-200/80 text-lg max-w-2xl mx-auto">
              End-to-end automation from first application to final paycheck
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {pipeline.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                const boxColors = {
                  purple: 'border-cyan-400/40 bg-white/5 backdrop-blur-sm',
                  yellow: 'border-yellow-300/40 bg-white/5 backdrop-blur-sm',
                  pink: 'border-blue-400/40 bg-white/5 backdrop-blur-sm',
                  cyan: 'border-cyan-400/40 bg-white/5 backdrop-blur-sm'
                };
                const dotColors = {
                  purple: 'bg-gradient-to-br from-cyan-400 to-blue-500',
                  yellow: 'bg-gradient-to-br from-yellow-300 to-yellow-400',
                  pink: 'bg-gradient-to-br from-blue-400 to-cyan-500',
                  cyan: 'bg-gradient-to-br from-cyan-400 to-blue-500'
                };

                return (
                  <div key={index} className="relative mb-8 last:mb-0">
                    <div className={`flex items-start ${isEven ? 'justify-start' : 'justify-end'}`}>
                      <div className={`w-full max-w-md ${isEven ? 'mr-auto' : 'ml-auto'}`}>
                        <div className={`relative p-6 rounded-2xl border-4 ${boxColors[step.color as keyof typeof boxColors]} shadow-lg`}>
                          <div className={`absolute ${isEven ? '-right-3' : '-left-3'} top-8 w-12 h-12 rounded-full ${dotColors[step.color as keyof typeof dotColors]} border-4 border-gray-900 shadow-lg flex items-center justify-center z-10`}>
                            <Icon className="text-gray-900" size={20} />
                          </div>

                          <div className={isEven ? 'pr-8' : 'pl-8'}>
                            <div className="text-xs font-bold text-cyan-300 mb-2">STEP {index + 1}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-cyan-200/80 text-sm leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {index < pipeline.length - 1 && (
                      <div className={`flex ${isEven ? 'justify-start' : 'justify-end'} mt-4 mb-4`}>
                        <div className={`${isEven ? 'ml-[calc(50%-1.5rem)]' : 'mr-[calc(50%-1.5rem)]'}`}>
                          <div className="w-1 h-12 bg-cyan-400/50 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute inset-0 "></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transformation <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-cyan-200/80 text-lg">Real improvements from real clients</p>
          </div>

          <div className="max-w-3xl mx-auto px-4">
            <div className="relative bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl overflow-visible">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl"></div>

              <div className="relative space-y-8 ml-0 md:ml-8">
                {results.map((result, index) => {
                  const isLeftAligned = index % 2 === 1;

                  return (
                    <div key={index} className="relative flex items-center gap-0">
                      <div className="absolute -left-32 md:-left-48 top-1/2 -translate-y-1/2 z-10">
                        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-r-full shadow-lg border-l-4 border-cyan-400">
                          <div className="text-xs md:text-sm font-bold uppercase tracking-wide whitespace-nowrap">
                            {result.label}
                          </div>
                        </div>
                      </div>

                      <div className={`flex items-center gap-4 w-full ${isLeftAligned ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className={`flex-1 ${isLeftAligned ? 'text-right' : 'text-left'}`}>
                          <div className="inline-block bg-blue-400 text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm md:text-base shadow-lg">
                            {result.before}
                          </div>
                        </div>

                        <div className="relative flex-shrink-0">
                          <svg width="50" height="50" viewBox="0 0 60 60" className="drop-shadow-lg">
                            <polygon
                              points="30,5 50,15 50,45 30,55 10,45 10,15"
                              fill="#2563eb"
                              stroke="#1e40af"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>

                        <div className={`flex-1 ${isLeftAligned ? 'text-left' : 'text-right'}`}>
                          <div className="inline-block bg-cyan-300 text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm md:text-base shadow-lg">
                            {result.after}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 p-12 rounded-2xl bg-gray-900">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white">Perfect For</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'Staffing Agencies', color: 'from-green-500 to-emerald-400' },
                { title: 'Growing Companies', color: 'from-blue-500 to-blue-400' },
                { title: 'HR Departments', color: 'from-orange-500 to-amber-400' }
              ].map((audience, idx) => (
                <div key={idx} className="relative">
                  <div className={`rounded-3xl p-8 bg-gradient-to-br ${audience.color} relative overflow-hidden group hover:scale-105 transition-transform duration-300`}>
                    <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
                    <div className="relative flex items-center justify-center h-40">
                      <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-30">
                        <path
                          d="M50 10 L80 30 L80 70 L50 90 L20 70 L20 30 Z"
                          fill="currentColor"
                          className="text-white"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="60" height="60" viewBox="0 0 60 60" className="text-white">
                          <path
                            d="M15 25 L30 15 L45 25"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="relative text-center mt-4">
                      <h4 className="text-xl font-bold text-white">{audience.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-300 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute inset-0 "></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">Transparent Pricing</span>
            </h2>
            <p className="text-cyan-200/80 text-lg">Choose the plan that fits your hiring needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white shadow-2xl scale-105'
                    : 'bg-white border-2 border-primary-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-yellow-400 text-navy-900 text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-navy-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-navy-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-base mb-1 ${plan.highlighted ? 'text-white/80' : 'text-primary-700'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm ${plan.highlighted ? 'text-cyan-200/80' : 'text-primary-700'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={18} className={plan.highlighted ? 'text-white flex-shrink-0 mt-0.5' : 'text-purple-500 flex-shrink-0 mt-0.5'} />
                      <span className={`text-sm ${plan.highlighted ? 'text-white' : 'text-primary-800'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://cal.com/tarunsai/30min?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center ${
                    plan.highlighted
                      ? 'bg-white text-secondary-600 hover:bg-primary-100'
                      : 'bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white hover:shadow-xl hover:shadow-cyan-500/50'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HRTestimonials />

      <HRProjects />

      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl mb-8 text-cyan-200/80">
            Join HR teams reducing hiring time by 90% and saving 20+ hours weekly
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://cal.com/tarunsai/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-secondary-600 rounded-lg font-semibold hover:bg-primary-100 transition-all flex items-center gap-2">
              Schedule Free Consultation
              <ArrowRight size={20} />
            </a>
            <Link to="/" className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
