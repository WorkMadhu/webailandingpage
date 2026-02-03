import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[70px] px-4 overflow-hidden bg-[#0F0F0F]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00D9FF]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0088FF]/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-[1200px] mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A2E] border border-[#00D9FF]/20 mb-8">
              <CheckCircle2 size={16} className="text-[#00D9FF]" />
              <span className="text-sm text-[#CCCCCC] font-medium">Top Rated Plus - 100% Job Success</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Automate Everything.{' '}
              <span className="text-[#00D9FF]">Scale Effortlessly.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#CCCCCC] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Connect 40+ tools, automate complex workflows, and scale your operations without hiring. Enterprise-grade AI automation for modern businesses.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://cal.com/tarunsai/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#00D9FF] text-black rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
                data-testid="button-get-started"
              >
                Get Started Free
                <ArrowRight size={20} />
              </a>
              <a
                href="https://cal.com/tarunsai/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center"
                data-testid="button-schedule-demo"
              >
                Schedule Demo
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D9FF]/20 via-[#0088FF]/20 to-[#7C3AED]/20 animate-glow-pulse"></div>
              
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#00D9FF]/10 via-[#0088FF]/10 to-[#7C3AED]/10 animate-rotate-slow"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40 animate-float">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D9FF] via-[#0088FF] to-[#7C3AED] opacity-80 blur-sm"></div>
                  <div className="absolute inset-[2px] rounded-2xl bg-[#0F0F0F] flex items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-[#00D9FF] via-[#0088FF] to-[#7C3AED] opacity-60"></div>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 left-8 w-3 h-3 rounded-full bg-[#00D9FF] animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-16 right-12 w-2 h-2 rounded-full bg-[#0088FF] animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-16 left-16 w-2 h-2 rounded-full bg-[#7C3AED] animate-float" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-[#00D9FF] animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 left-4 w-2 h-2 rounded-full bg-[#0088FF] animate-float" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute top-1/3 right-4 w-2 h-2 rounded-full bg-[#7C3AED] animate-float" style={{ animationDelay: '1.2s' }}></div>

              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                <line x1="50" y1="50" x2="200" y2="200" stroke="#00D9FF" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="350" y1="100" x2="200" y2="200" stroke="#0088FF" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <line x1="100" y1="350" x2="200" y2="200" stroke="#7C3AED" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <line x1="350" y1="300" x2="200" y2="200" stroke="#00D9FF" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
