import { ArrowRight, CheckCircle2, Mail, MessageSquare, Phone, Send, TrendingUp, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import OmnichannelTestimonials from '../components/OmnichannelTestimonials';
import OmnichannelProjects from '../components/OmnichannelProjects';

const benefits = [
  {
    icon: TrendingUp,
    title: '72% Open Rate',
    description: 'Multi-channel approach ensures your message gets seen'
  },
  {
    icon: Users,
    title: '36% Reply Rate',
    description: 'Personalized sequences drive real conversations'
  },
  {
    icon: Target,
    title: '11% Positive Rate',
    description: 'High-quality leads ready to convert'
  }
];

const campaign = [
  {
    day: 'Day 1',
    icon: Mail,
    title: 'Video Email',
    description: 'Personalized video message sent via email to capture attention with a human touch',
    color: 'cyan'
  },
  {
    day: 'Day 2',
    icon: MessageSquare,
    title: 'SMS Follow-up',
    description: 'Text message reminder with a clear call-to-action and easy response option',
    color: 'orange'
  },
  {
    day: 'Day 3',
    icon: Phone,
    title: 'Voicemail Drop',
    description: 'AI-powered voicemail that sounds natural and reinforces your message',
    color: 'cyan'
  },
  {
    day: 'Day 4',
    icon: Mail,
    title: 'Email Check-in',
    description: 'Value-added email with helpful resources and soft CTA',
    color: 'orange'
  },
  {
    day: 'Day 5',
    icon: MessageSquare,
    title: 'LinkedIn Message',
    description: 'Professional outreach via LinkedIn with personalized connection request',
    color: 'cyan'
  },
  {
    day: 'Day 6',
    icon: Send,
    title: 'Strategic Break',
    description: 'Pause to allow prospects time to process, then restart or move to next sequence',
    color: 'orange'
  }
];

const features = [
  {
    title: 'AI-Powered Personalization',
    description: 'Each message is customized based on prospect data, behavior, and engagement history',
    icon: Target
  },
  {
    title: 'Multi-Channel Orchestration',
    description: 'Seamlessly coordinate email, SMS, voicemail, and social touch-points',
    icon: MessageSquare
  },
  {
    title: 'Smart Timing Optimization',
    description: 'AI determines the best time to send each message for maximum engagement',
    icon: TrendingUp
  }
];

const results = [
  { metric: '72%', label: 'Open Rate', sublabel: 'Across all channels' },
  { metric: '36%', label: 'Reply Rate', sublabel: 'Active engagement' },
  { metric: '11%', label: 'Positive Reply', sublabel: 'Qualified leads' },
  { metric: '21%', label: 'Click Rate', sublabel: 'Content interaction' }
];

const pricing = [
  {
    name: 'Starter',
    price: '$3,497',
    period: '/month',
    description: 'Perfect for small sales teams',
    features: [
      '500 contacts per month',
      '5-touch campaign sequence',
      'Email + SMS channels',
      'Basic analytics',
      'Email support'
    ],
    highlighted: false
  },
  {
    name: 'Professional',
    price: '$6,997',
    period: '/month',
    description: 'Most popular for growing teams',
    features: [
      '2,000 contacts per month',
      'Full 5-day campaign',
      'All channels included',
      'Advanced analytics',
      'Priority support',
      'Custom sequences',
      'A/B testing'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored for large organizations',
    features: [
      'Unlimited contacts',
      'Custom campaigns',
      'Dedicated account manager',
      'API access',
      'White-label options',
      '24/7 support',
      'Training & onboarding'
    ],
    highlighted: false
  }
];

export default function OmnichannelOutreachPage() {

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
            <span className="text-sm text-white font-semibold">SERVICE 02</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Omnichannel Outreach
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">
              System
            </span>
          </h1>

          <p className="text-xl text-cyan-200/90 mb-10 max-w-3xl">
            5-day multi-touch campaign that drives 72% open rates and 36% reply rates.
            Coordinate video email, SMS, voicemail, and follow-ups automatically.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <a href="https://cal.com/anabless-dela-cruz-knutxw/consultation" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all flex items-center gap-2">
              Get Started Today
              <ArrowRight size={20} />
            </a>
            <a href="#campaign" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
              See Campaign Flow
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-cyan-400/30 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-cyan-200/80 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="campaign" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-300/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-20 right-1/3 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '6s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              6-Day <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">Campaign Sequence</span>
            </h2>
            <p className="text-cyan-200/80 text-lg max-w-2xl mx-auto">
              Each touchpoint is strategically timed and personalized to maximize engagement
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              {campaign.map((step, index) => {
                const Icon = step.icon;
                const cardGradients = [
                  'from-yellow-300/20 via-yellow-200/15 to-yellow-100/10',
                  'from-orange-300/20 via-orange-200/15 to-orange-100/10',
                  'from-cyan-400/20 via-cyan-300/15 to-blue-200/10',
                  'from-yellow-300/20 via-yellow-200/15 to-yellow-100/10',
                  'from-orange-300/20 via-orange-200/15 to-orange-100/10',
                  'from-cyan-400/20 via-cyan-300/15 to-blue-200/10'
                ];
                const iconGradients = [
                  'from-cyan-400 to-cyan-500',
                  'from-yellow-400 to-yellow-500',
                  'from-blue-400 to-cyan-400',
                  'from-cyan-400 to-cyan-500',
                  'from-yellow-400 to-yellow-500',
                  'from-orange-400 to-orange-500'
                ];

                return (
                  <div key={index} className="flex flex-col items-center w-full">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${iconGradients[index]} flex items-center justify-center flex-shrink-0 z-10 border-4 border-white shadow-xl`}>
                      <Icon className="text-white" size={24} />
                    </div>

                    {index < campaign.length - 1 && (
                      <div className="w-1 h-8 bg-gradient-to-b from-cyan-400/30 via-yellow-400/30 to-blue-400/30"></div>
                    )}

                    <div className={`w-full rounded-full bg-gradient-to-r ${cardGradients[index]} backdrop-blur-xl px-8 py-6 shadow-2xl border border-white/20 my-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-300/20`}>
                      <div className="text-center">
                        <div className="text-sm font-bold text-white/90 mb-1">{step.day}</div>
                        <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                        <p className="text-white/80 text-sm">{step.description}</p>
                      </div>
                    </div>

                    {index < campaign.length - 1 && (
                      <div className="w-1 h-8 bg-gradient-to-b from-blue-400/30 via-cyan-400/30 to-yellow-400/30"></div>
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
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-yellow-300/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-cyan-200/80 text-lg">Advanced automation technology that drives results</p>
          </div>

          <div className="max-w-6xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const cardGradients = [
                  'from-cyan-400/95 via-cyan-300/90 to-blue-200/85',
                  'from-yellow-300/95 via-yellow-200/90 to-yellow-100/85',
                  'from-blue-400/95 via-cyan-300/90 to-cyan-200/85'
                ];
                const iconGradients = [
                  'from-cyan-400 to-cyan-500',
                  'from-yellow-400 to-yellow-500',
                  'from-blue-400 to-cyan-400'
                ];
                return (
                  <div key={index} className="relative flex flex-col items-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${iconGradients[index]} flex items-center justify-center border-4 border-white shadow-xl z-10`}>
                      <Icon className="text-white" size={32} />
                    </div>

                    {index < features.length - 1 && (
                      <div className="hidden md:block absolute left-full top-10 w-32 h-2 bg-gradient-to-r from-cyan-400 to-yellow-400 -ml-2 -mr-2" style={{ width: '140px' }}></div>
                    )}

                    <div className={`mt-4 w-80 rounded-2xl bg-gradient-to-br ${cardGradients[index]} backdrop-blur-sm p-8 shadow-2xl border-2 border-white/30 min-h-[240px] flex flex-col justify-center transition-all duration-300 hover:scale-105 hover:shadow-cyan-300/20`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                      <p className="text-gray-800 text-center leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl bg-white/5 backdrop-blur-sm border-2 ${index % 2 === 0 ? 'border-cyan-400/30' : 'border-yellow-300/30'} text-center`}
              >
                <div className={`text-4xl font-bold mb-2 ${index % 2 === 0 ? 'text-cyan-300' : 'text-yellow-200'}`}>
                  {result.metric}
                </div>
                <div className="text-white font-semibold mb-1">{result.label}</div>
                <div className="text-cyan-200/80 text-sm">{result.sublabel}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">Campaign Analytics</span>
            </h2>
            <p className="text-cyan-200/80 text-lg">Live dashboard showing actual campaign performance</p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">OMNI CHANNEL OUTREACH SYSTEM</h3>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-cyan-200/70">2025-10-18</span>
                  <span className="text-sm text-cyan-200/70">2025-11-17</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">
                    Edit Dashboard
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-center text-lg font-bold text-white mb-6">OMNI CHANNEL STATS</h4>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-6 text-center border border-cyan-400/20">
                    <div className="text-xs text-cyan-200/70 mb-2 uppercase">Added to Campaign</div>
                    <div className="text-5xl font-bold text-white">501</div>
                    <div className="text-xs text-green-600 mt-2">↑ 100% vs Last 31 Days</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-6 text-center border border-cyan-400/20">
                    <div className="text-xs text-cyan-200/70 mb-2 uppercase">Email/SMS Interested Reply Received</div>
                    <div className="text-5xl font-bold text-white">4</div>
                    <div className="text-xs text-green-600 mt-2">↑ 100% vs Last 31 Days</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-6 text-center border border-cyan-400/20">
                    <div className="text-xs text-cyan-200/70 mb-2 uppercase">Emails Sent Till Now</div>
                    <div className="text-5xl font-bold text-white">501</div>
                    <div className="text-xs text-green-600 mt-2">↑ 100% vs Last 31 Days</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-6 text-center border border-cyan-400/20">
                    <div className="text-xs text-cyan-200/70 mb-2 uppercase">LinkedIn Verified Leads</div>
                    <div className="text-5xl font-bold text-white">458</div>
                    <div className="text-xs text-green-600 mt-2">↑ 100% vs Last 31 Days</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-6 text-center border border-cyan-400/20">
                    <div className="text-xs text-cyan-200/70 mb-2 uppercase">LinkedIn Reply</div>
                    <div className="text-5xl font-bold text-white">0</div>
                    <div className="text-xs text-green-600 mt-2">↑ 0% vs Last 31 Days</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-6 text-center border border-cyan-400/20">
                    <div className="text-xs text-cyan-200/70 mb-2 uppercase">Meeting Booked</div>
                    <div className="text-5xl font-bold text-white">23</div>
                    <div className="text-xs text-green-600 mt-2">↑ 100% vs Last 31 Days</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-8 border border-cyan-400/20">
                  <div className="text-xs text-cyan-200/70 mb-4 uppercase">Email Opened More Than 2 Times</div>
                  <div className="text-7xl font-bold text-white text-center">261</div>
                </div>
                <div className="bg-white/5 rounded-lg p-8 border border-cyan-400/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs text-cyan-200/70 mb-4 uppercase">Unsolicited Calendar Invites</div>
                    <div className="relative w-48 h-48 mx-auto">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="96" cy="96" r="80" stroke="#e5e7eb" strokeWidth="20" fill="none" />
                        <circle cx="96" cy="96" r="80" stroke="#3b82f6" strokeWidth="20" fill="none" strokeDasharray="502" strokeDashoffset="0" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">235</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8 border-b border-gray-700 pb-4">
                <div className="flex gap-8">
                  <button className="text-blue-400 font-semibold pb-2 border-b-2 border-blue-400">Analytics</button>
                  <button className="text-gray-400 font-semibold pb-2">Leads</button>
                  <button className="text-gray-400 font-semibold pb-2">Sequences</button>
                  <button className="text-gray-400 font-semibold pb-2">Schedule</button>
                  <button className="text-gray-400 font-semibold pb-2">Options</button>
                  <button className="text-gray-400 font-semibold pb-2">Subsequences</button>
                </div>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold flex items-center gap-2">
                  ▶ Resume campaign
                </button>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gray-400 text-sm">Status:</span>
                  <span className="text-white font-semibold">Paused</span>
                  <div className="flex-1 bg-gray-700 rounded-full h-2 max-w-xs">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <span className="text-white text-sm">15%</span>
                </div>

                <div className="grid grid-cols-5 gap-4 mb-8">
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-gray-400 text-xs mb-2 uppercase">Sequence started</div>
                    <div className="text-3xl font-bold text-white">505</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-gray-400 text-xs mb-2 uppercase">Open rate</div>
                    <div className="text-3xl font-bold text-white">72% <span className="text-lg text-gray-400">| 365</span></div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-gray-400 text-xs mb-2 uppercase">Click rate</div>
                    <div className="text-3xl font-bold text-white">4% <span className="text-lg text-gray-400">| 22</span></div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-gray-400 text-xs mb-2 uppercase">Reply rate</div>
                    <div className="text-3xl font-bold text-white">36.4% <span className="text-lg text-gray-400">| 184</span></div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-gray-400 text-xs mb-2 uppercase">Positive Reply Rate</div>
                    <div className="text-3xl font-bold text-white">11.4% <span className="text-lg text-gray-400">| 21</span></div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="text-center mb-4">
                    <div className="text-gray-400 text-xs mb-2 uppercase">Opportunities</div>
                    <div className="text-3xl font-bold text-white">21 <span className="text-lg text-gray-400">| $2,100</span></div>
                  </div>

                  <div className="relative h-64 mt-8">
                    <div className="absolute inset-0 flex items-end justify-between gap-1 px-4">
                      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 100, 95, 85].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end items-center">
                          {height > 0 && (
                            <div className="w-full bg-gradient-to-t from-yellow-500 via-green-500 to-blue-500 rounded-t" style={{ height: `${height}%` }}></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-2 px-4">
                    <span>01 Dec</span>
                    <span>01 Jan</span>
                    <span>01 Feb</span>
                    <span>01 Mar</span>
                    <span>01 Apr</span>
                    <span>01 May</span>
                    <span>01 Jun</span>
                    <span>01 Jul</span>
                    <span>01 Aug</span>
                    <span>01 Sep</span>
                    <span>01 Oct</span>
                    <span>01 Nov</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute inset-0 "></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, <span className="text-yellow-200">Transparent Pricing</span>
            </h2>
            <p className="text-white/90 text-lg">Choose the plan that fits your sales needs</p>
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
                  <p className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-primary-700'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={18} className={plan.highlighted ? 'text-white flex-shrink-0 mt-0.5' : 'text-blue-500 flex-shrink-0 mt-0.5'} />
                      <span className={`text-sm ${plan.highlighted ? 'text-white' : 'text-primary-800'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://cal.com/anabless-dela-cruz-knutxw/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg font-semibold transition-all text-sm flex items-center justify-center ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-primary-100'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-xl hover:shadow-blue-500/50'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OmnichannelTestimonials />

      <OmnichannelProjects />

      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Outreach?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join sales teams achieving 72% open rates and 36% reply rates
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://cal.com/anabless-dela-cruz-knutxw/consultation" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-primary-100 transition-all flex items-center gap-2">
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
