import { ArrowRight, CheckCircle2, Brain, Video, Upload, TrendingUp, Clock, Target, Zap, X, Camera, Users2, Sparkles, Instagram, Youtube, Twitter, Linkedin, Facebook, Send, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContentTestimonials from '../components/ContentTestimonials';
import ContentProjects from '../components/ContentProjects';

const painPoints = [
  {
    icon: Camera,
    title: 'Hours of Camera Retakes',
    description: 'Stop wasting time sitting in front of the camera doing endless retakes'
  },
  {
    icon: Target,
    title: 'No Strategic Planning',
    description: 'Missing proper content strategy, measurable outcomes, and conversion funnels'
  },
  {
    icon: Clock,
    title: 'Inconsistent Posting',
    description: 'Stuck on 1-2 platforms like Instagram or YouTube instead of reaching 14+ platforms'
  },
  {
    icon: Sparkles,
    title: 'Limited Creativity',
    description: 'Can\'t test multiple strategies or hooks. Low video quality without targeting the right audience'
  }
];

const workflow = [
  {
    icon: Brain,
    title: 'AI Research & Strategy',
    description: 'You provide 5 core topics + brand voice + 3-min video. Our AI researches your niche, identifies your target audience, analyzes top 5 influencers in your space, and creates a complete content roadmap. Human content strategists review and enhance with custom brand fonts, styles, and everything needed.',
    features: ['Niche research & audience targeting', 'Top influencer analysis', 'Content roadmap creation', 'Brand style development']
  },
  {
    icon: Video,
    title: 'Script & Video Generation',
    description: 'AI pulls top influencer content, scores it with virality tracker, rewrites with better hooks (no "godfather" tactics), creates stunning scripts with 3 different hooks. Generates avatar videos via HeyGen API, plus written content for Twitter/LinkedIn and ManyChat DM keywords.',
    features: ['Virality-scored content', '3 unique hook variations', 'HeyGen AI avatar videos', 'Cross-platform content formats']
  },
  {
    icon: Upload,
    title: 'Studio Editing & Publishing',
    description: 'Human video editor elevates to studio-quality. Content strategist approves. N8n checks status and adds to Metricool, scheduling across 14+ platforms with channel-specific descriptions, captions, and lead magnet automations via ManyChat. Similar process for carousels.',
    features: ['Studio-quality editing', 'Multi-platform scheduling', 'Lead magnet automations', 'Strategy optimization every 2-4 weeks']
  }
];

const platforms = [
  { name: 'Instagram', icon: Instagram },
  { name: 'YouTube', icon: Youtube },
  { name: 'TikTok', icon: Video },
  { name: 'LinkedIn', icon: Linkedin },
  { name: 'Twitter', icon: Twitter },
  { name: 'Facebook', icon: Facebook },
  { name: 'Pinterest', icon: Target },
  { name: 'Medium', icon: Upload },
  { name: 'Reddit', icon: MessageCircle },
  { name: 'Threads', icon: MessageCircle },
  { name: 'WhatsApp', icon: MessageCircle },
  { name: 'Telegram', icon: Send },
  { name: 'Discord', icon: MessageCircle },
  { name: 'Email', icon: Mail }
];

const beforeAfter = [
  {
    before: 'Manual posting 1-2x/week',
    after: '7 reels + 3 carousels weekly',
    label: 'Content Volume'
  },
  {
    before: 'Hours of camera retakes',
    after: '15 min monthly recording',
    label: 'Time Investment'
  },
  {
    before: '1-2 platforms only',
    after: '14+ platforms simultaneously',
    label: 'Platform Reach'
  },
  {
    before: 'No strategic planning',
    after: 'Industry expert in 3-6 months',
    label: 'Brand Authority'
  }
];

const targetClients = [
  {
    title: 'Executive Sales Coaches',
    description: 'Build authority and attract high-ticket clients with consistent expert content'
  },
  {
    title: 'Coaches & Consultants',
    description: 'Establish thought leadership and generate qualified leads on autopilot'
  },
  {
    title: 'SaaS Founders',
    description: 'Drive product awareness and demo bookings through strategic content marketing'
  },
  {
    title: 'E-commerce Store Owners',
    description: 'Scale your brand presence and drive sales across all major platforms'
  }
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

export default function ContentAutomationPage() {

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
          <Link to="/" className="inline-flex items-center text-sm text-white hover:bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent mb-8">
            ← Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 mb-6">
            <CheckCircle2 size={16} className="text-white" />
            <span className="text-sm text-white font-semibold">SERVICE 01</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Stop Sitting In Front of
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">
              The Camera for Hours
            </span>
          </h1>

          <p className="text-xl text-cyan-200/90 mb-10 max-w-3xl">
            Generate 40+ studio-quality posts per month across 14+ platforms. Just 15 minutes of monthly recording.
            No retakes. No editing. No posting. Become an industry expert in 3-6 months.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <a href="https://cal.com/anabless-dela-cruz-knutxw/consultation" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all flex items-center gap-2">
              Get Started Today
              <ArrowRight size={20} />
            </a>
            <a href="#how-it-works" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
              See How It Works
            </a>
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
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Problems We <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">Solve</span>
            </h2>
            <p className="text-cyan-200/80 text-lg">The pain points every content creator faces</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {painPoints.map((pain, index) => {
              const Icon = pain.icon;
              const colors = [
                'from-orange-500 to-orange-600',
                'from-yellow-500 to-yellow-600',
                'from-yellow-400 to-yellow-500',
                'from-cyan-400 to-cyan-500'
              ];
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-24 h-16 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-cyan-400/20 shadow-lg">
                    <h3 className="text-base font-bold text-white mb-1">{pain.title}</h3>
                    <p className="text-cyan-200/80 text-xs">{pain.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute inset-0 "></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-cyan-200/80 text-lg max-w-2xl mx-auto">
              Our proven 3-step system with human oversight at every stage
            </p>
          </div>

          <div className="space-y-12">
            {workflow.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-start gap-8 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-cyan-400/30 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                        <Icon className="text-white" size={32} />
                      </div>
                      <div className="text-sm font-semibold text-cyan-300">STEP {index + 1}</div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-cyan-200/80 text-lg mb-6 leading-relaxed">{step.description}</p>
                    <div className="grid gap-3">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-cyan-200/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-400/20 flex items-center justify-center">
                      <Icon className="text-cyan-400/30" size={120} />
                    </div>
                  </div>
                </div>
              );
            })}
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
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Before → <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">After</span>
            </h2>
            <p className="text-cyan-200/80 text-lg">Real transformation you can expect</p>
          </div>

          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative flex items-center justify-center py-12" style={{ height: '450px' }}>
              {/* Center Circle */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-cyan-400/30 shadow-2xl flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">Your</div>
                  <div className="text-2xl font-bold text-cyan-300">Content</div>
                </div>
              </div>

              {/* Before Items - Left Side */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-5 w-72">
                {beforeAfter.map((item, index) => {
                  const colors = [
                    'bg-gradient-to-r from-cyan-400 to-cyan-500',
                    'bg-gradient-to-r from-yellow-300 to-yellow-400',
                    'bg-gradient-to-r from-cyan-400 to-blue-500',
                    'bg-gradient-to-r from-blue-400 to-cyan-500'
                  ];
                  const dotColors = [
                    'bg-cyan-400',
                    'bg-yellow-300',
                    'bg-cyan-500',
                    'bg-blue-400'
                  ];
                  return (
                    <div key={index} className="relative">
                      {/* Connection Line */}
                      <div className="absolute left-full top-1/2 w-36 h-0.5 bg-gradient-to-r from-white/50 to-transparent"></div>
                      {/* Connection Dot */}
                      <div className={`absolute left-full top-1/2 transform translate-x-36 -translate-y-1/2 w-3 h-3 rounded-full ${dotColors[index]}`}></div>

                      {/* Before Card */}
                      <div className={`${colors[index]} rounded-full px-6 py-3 shadow-lg flex items-center gap-3 relative`}>
                        <div className="w-8 h-8 rounded-full bg-white/30 flex-shrink-0"></div>
                        <div className="flex-1 text-white text-sm font-medium truncate">{item.before}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* After Items - Right Side */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-5 w-72">
                {beforeAfter.map((item, index) => {
                  const colors = [
                    'bg-gradient-to-r from-cyan-500 to-cyan-600',
                    'bg-gradient-to-r from-yellow-300 to-yellow-500',
                    'bg-gradient-to-r from-cyan-500 to-blue-600',
                    'bg-gradient-to-r from-blue-500 to-cyan-600'
                  ];
                  const dotColors = [
                    'bg-cyan-500',
                    'bg-yellow-400',
                    'bg-cyan-600',
                    'bg-blue-500'
                  ];
                  return (
                    <div key={index} className="relative">
                      {/* Connection Line */}
                      <div className="absolute right-full top-1/2 w-36 h-0.5 bg-gradient-to-l from-white/50 to-transparent"></div>
                      {/* Connection Dot */}
                      <div className={`absolute right-full top-1/2 transform -translate-x-36 -translate-y-1/2 w-3 h-3 rounded-full ${dotColors[index]}`}></div>

                      {/* After Card */}
                      <div className={`${colors[index]} rounded-full px-6 py-3 shadow-lg flex items-center gap-3 relative`}>
                        <div className="w-8 h-8 rounded-full bg-white/30 flex-shrink-0"></div>
                        <div className="flex-1 text-white text-sm font-medium truncate">{item.after}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              14+ Platforms, <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">One System</span>
            </h3>
            <p className="text-cyan-200/80 text-sm mb-4">Your content automatically published everywhere that matters</p>
          </div>

          <div className="flex flex-nowrap justify-center gap-2 overflow-x-auto max-w-fit mx-auto px-4">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <div
                  key={platform.name}
                  className="w-9 h-9 flex-shrink-0 rounded-lg bg-white/5 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center hover:border-cyan-400/50 hover:shadow-md transition-all group"
                  title={platform.name}
                >
                  <Icon size={18} className="text-cyan-300 group-hover:scale-110 transition-transform" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Perfect <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">For</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">Who gets the best results from this system</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative perspective-1000">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent z-0"></div>

            {targetClients.map((client, index) => {
              const colors = [
                'from-cyan-400 to-cyan-500',
                'from-yellow-300 to-yellow-400',
                'from-blue-400 to-cyan-500',
                'from-cyan-500 to-blue-500'
              ];
              const borderColors = [
                'border-gray-600',
                'border-yellow-400',
                'border-blue-500',
                'border-cyan-500'
              ];
              const glowColors = [
                'shadow-none',
                'shadow-[0_0_30px_rgba(250,204,21,0.3)]',
                'shadow-[0_0_30px_rgba(59,130,246,0.4)]',
                'shadow-[0_0_30px_rgba(6,182,212,0.4)]'
              ];

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
                    className={`relative p-8 rounded-2xl bg-gradient-to-br ${colors[index]} border-2 ${borderColors[index]} ${glowColors[index]} transition-all duration-500 h-full flex flex-col`}
                    style={{
                      transform: 'rotateX(3deg) rotateY(-3deg)',
                      transformStyle: 'preserve-3d',
                      boxShadow: `
                        0 25px 50px -12px rgba(0, 0, 0, 0.6),
                        0 15px 30px -10px rgba(0, 0, 0, 0.4),
                        inset 0 2px 4px rgba(255, 255, 255, 0.1),
                        ${glowColors[index] !== 'shadow-none' ? glowColors[index].replace('shadow-[', '').replace(']', '') : ''}
                      `
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div
                      className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 text-sm font-bold shadow-lg border-4 border-gray-900 z-10 transition-all duration-500 group-hover:scale-110"
                      style={{
                        transform: 'translateZ(30px)',
                        boxShadow: '0 15px 30px rgba(255, 255, 255, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      {index + 1}
                    </div>

                    <div className="mt-6 mb-4 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-4 relative" style={{ transform: 'translateZ(20px)' }}>
                        {client.title}
                      </h3>
                      <p className="text-white/95 text-sm leading-relaxed relative flex-grow" style={{ transform: 'translateZ(10px)' }}>
                        {client.description}
                      </p>
                    </div>

                    <div
                      className="absolute bottom-6 left-8 flex gap-2"
                      style={{ transform: 'translateZ(15px)' }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
                    </div>

                    {index < targetClients.length - 1 && (
                      <div
                        className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20"
                        style={{ transform: 'translateZ(25px) translateY(-50%)' }}
                      >
                        <div className="w-5 h-5 border-t-3 border-r-3 border-white rotate-45 opacity-70"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute inset-0 "></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">Transparent Pricing</span>
            </h2>
            <p className="text-cyan-200/80 text-lg">Choose the plan that fits your growth goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl ${
                  plan.highlighted
                    ? 'bg-gray-900 border-2 border-gray-800 text-white shadow-2xl'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-yellow-300 to-yellow-400 text-black text-xs font-bold rounded-full uppercase tracking-wide">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-6 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-blue-600'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.highlighted ? 'text-gray-400' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-base ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className={plan.highlighted ? 'text-white flex-shrink-0 mt-0.5' : 'text-blue-600 flex-shrink-0 mt-0.5'} />
                      <span className={`text-base ${plan.highlighted ? 'text-white' : 'text-gray-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://cal.com/anabless-dela-cruz-knutxw/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-semibold text-base transition-all flex items-center justify-center ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-cyan-200/80">
            <p className="text-sm">Only requirement: 3-5 different video recordings (15 minutes total per month)</p>
          </div>
        </div>
      </section>

      <ContentTestimonials />

      <ContentProjects />

      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Become an Industry Expert?
          </h2>
          <p className="text-xl mb-8 text-cyan-200/80">
            Stop wasting hours on retakes. Start building authority across 14+ platforms with just 15 minutes monthly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://cal.com/anabless-dela-cruz-knutxw/consultation" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition-all flex items-center gap-2">
              Schedule Free Consultation
              <ArrowRight size={20} />
            </a>
            <Link to="/" className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
