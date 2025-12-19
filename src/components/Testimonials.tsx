import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'VP of Marketing',
    company: 'TechFlow Solutions',
    rating: 5,
    text: 'WebAI Automations transformed our content strategy. We went from 10 posts a month to 40+, with zero additional workload. The ROI is incredible.'
  },
  {
    name: 'Michael Chen',
    role: 'Sales Director',
    company: 'Growth Partners Inc',
    rating: 5,
    text: 'The omnichannel outreach system increased our reply rates by 3x. The automation is seamless and the results speak for themselves.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'HR Manager',
    company: 'Talent Bridge',
    rating: 5,
    text: 'Our hiring process went from 6 weeks to 3 days. The AI scoring and automation saved us 20+ hours every week. Game changer!'
  },
  {
    name: 'David Park',
    role: 'CEO',
    company: 'NextGen SaaS',
    rating: 5,
    text: 'Professional, reliable, and results-driven. The team delivered exactly what they promised and the ongoing support is excellent.'
  }
];

export default function Testimonials() {
  return (
    <section id="resources" className="py-20 px-4 bg-[#0F0F0F]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-[#00D9FF]">Clients Say</span>
          </h2>
          <p className="text-[#CCCCCC] text-lg">
            Trusted by leading B2B companies worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl bg-[#0F0F0F] border border-[#1A1A2E] border-l-4 border-l-[#00D9FF] hover:border-[#00D9FF]/30 transition-all duration-300 group"
              style={{
                animation: `float 6s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`
              }}
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[#00D9FF] fill-[#00D9FF]" size={16} />
                ))}
              </div>

              <p className="text-white text-base leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00D9FF] via-[#0088FF] to-[#7C3AED] flex items-center justify-center text-black font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-[#999999] text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
