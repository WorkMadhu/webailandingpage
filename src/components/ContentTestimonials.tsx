import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Executive Sales Coach',
    company: 'Revenue Mastery',
    rating: 5,
    text: 'I went from spending 8 hours a week on content to just 15 minutes a month. Now I post 40+ times across 14 platforms and my personal brand has exploded. Best investment I\'ve made.'
  },
  {
    name: 'Michael Chen',
    role: 'SaaS Founder',
    company: 'CloudSync Pro',
    rating: 5,
    text: 'The AI-powered content system transformed our brand presence. We\'re getting demo requests from LinkedIn, Instagram, and platforms we didn\'t even know existed. The studio-quality editing is incredible.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Business Coach',
    company: 'Scale & Thrive',
    rating: 5,
    text: 'From unknown to industry expert in 4 months. The content strategy they built for me actually works. I\'m getting speaking invitations and high-ticket clients reaching out to me directly.'
  },
  {
    name: 'David Park',
    role: 'E-commerce Owner',
    company: 'Urban Lifestyle Co',
    rating: 5,
    text: 'No more sitting in front of the camera for hours doing retakes. The HeyGen avatars look professional and the content performs better than what I was creating manually. Absolute game changer.'
  }
];

export default function ContentTestimonials() {
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
          <p className="text-cyan-200/80 text-base">Content creators building authority on autopilot</p>
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
