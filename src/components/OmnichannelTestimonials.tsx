import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer Williams',
    role: 'Sales Manager',
    company: 'TechSolutions Pro',
    rating: 5,
    text: 'Our reply rate went from 8% to 36% in the first month. The 5-day multi-touch sequence is pure gold. We\'re booking more meetings than we can handle.'
  },
  {
    name: 'Robert Martinez',
    role: 'VP of Sales',
    company: 'Enterprise Growth Partners',
    rating: 5,
    text: 'The omnichannel approach is genius. Email, SMS, voicemail, LinkedIn - all coordinated perfectly. 72% open rates across channels is insane. This system pays for itself 10x over.'
  },
  {
    name: 'Amanda Foster',
    role: 'Business Development Director',
    company: 'Scale Ventures',
    rating: 5,
    text: 'We were doing manual outreach and burning out our team. Now it\'s completely automated with better results. The personalization is so good, prospects think we\'re reaching out individually.'
  },
  {
    name: 'James Thompson',
    role: 'Founder',
    company: 'HighTicket Consulting',
    rating: 5,
    text: '11% positive reply rate means qualified leads every single day. The AI timing optimization ensures we reach prospects when they\'re most likely to respond. Revolutionary for our sales process.'
  }
];

export default function OmnichannelTestimonials() {
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
          <p className="text-cyan-200/80 text-base">Sales teams crushing their outreach goals</p>
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
