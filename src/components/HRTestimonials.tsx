import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Lisa Anderson',
    role: 'HR Director',
    company: 'TalentFirst Staffing',
    rating: 5,
    text: 'We cut hiring time from 6 weeks to 3 days. The AI candidate scoring is incredibly accurate and saves our team 20+ hours every week. This system transformed our entire operation.'
  },
  {
    name: 'Marcus Johnson',
    role: 'VP of Operations',
    company: 'Growth Staffing Solutions',
    rating: 5,
    text: 'The end-to-end automation from application to payroll is seamless. We went from drowning in manual work to scaling effortlessly. Best investment we\'ve made in our business.'
  },
  {
    name: 'Patricia Lee',
    role: 'Recruitment Manager',
    company: 'ProHire Agency',
    rating: 5,
    text: 'The automated interview scheduling alone saved us countless hours. Add in the AI scoring and contract automation, and we\'re processing 3x more candidates with the same team size.'
  },
  {
    name: 'Thomas Wright',
    role: 'CEO',
    company: 'Rapid Talent Group',
    rating: 5,
    text: 'From 100+ manual emails per hire to 5. The time tracking and payroll integration means we can scale without hiring more HR staff. The ROI is massive.'
  }
];

export default function HRTestimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Client <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-cyan-200/80 text-base">HR teams scaling effortlessly with automation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:border-blue-400/50 transition-all"
            >
              <Quote className="absolute top-4 right-4 text-white/20" size={32} />

              <div className="relative">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={14} />
                  ))}
                </div>

                <p className="text-cyan-100 mb-4 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-yellow-300 flex items-center justify-center text-black font-bold text-base">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-cyan-200/80 text-xs">{testimonial.role}, {testimonial.company}</div>
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
