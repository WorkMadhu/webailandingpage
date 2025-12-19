import { ArrowRight } from 'lucide-react';

export default function CTASections() {
  return (
    <section id="resources" className="py-20 px-4 bg-gradient-to-b from-[#0F0F0F] via-[#1A1A2E]/30 to-[#0F0F0F]">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to <span className="text-[#00D9FF]">Automate</span>?
        </h2>

        <p className="text-[#CCCCCC] text-lg mb-10 max-w-xl mx-auto">
          Join 500+ companies transforming their operations with WebAI Automations.
        </p>

        <a
          href="https://cal.com/anabless-dela-cruz-knutxw/consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-5 bg-[#00D9FF] text-black rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
          style={{ boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
          data-testid="button-cta-final"
        >
          Get Started Free
          <ArrowRight size={22} />
        </a>

        <p className="text-[#999999] text-sm mt-6">
          No credit card required - 14-day free trial
        </p>
      </div>
    </section>
  );
}
