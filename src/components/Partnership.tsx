import { Handshake, Zap, HeartHandshake } from 'lucide-react';

export default function Partnership() {
  return (
    <section id="company" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-yellow-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          We're not a point solution. <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">We're your partner in scaling operations.</span>
        </h2>
        <p className="text-cyan-200/80 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          At WebAIAutomations, we've created comprehensive automation systems delivering end-to-end, AI-powered solutions that's accessible to every business, everywhere. Proven results. Expert implementation. Support that doesn't stop.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="relative">
            <div className="w-48 h-48 rounded-full border-4 border-cyan-400/30 bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <div className="text-center">
                <Zap className="text-cyan-300 mx-auto mb-2" size={32} />
                <div className="text-white font-bold">Fast</div>
                <div className="text-cyan-200/80 text-sm">Implementation</div>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-56 h-56 rounded-full border-4 border-blue-400/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <Handshake className="text-blue-300 mx-auto mb-2" size={40} />
                <div className="text-white font-bold text-lg">Partnership</div>
                <div className="text-blue-300">Driven</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-48 h-48 rounded-full border-4 border-yellow-300/30 bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <div className="text-center">
                <HeartHandshake className="text-yellow-200 mx-auto mb-2" size={32} />
                <div className="text-white font-bold">Long-term</div>
                <div className="text-yellow-200 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-cyan-400/30">
            <div className="text-3xl font-bold text-cyan-300 mb-2">2-4 weeks</div>
            <div className="text-cyan-200/80">Average setup time</div>
          </div>
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-blue-400/30">
            <div className="text-3xl font-bold text-blue-300 mb-2">24/7</div>
            <div className="text-cyan-200/80">System monitoring</div>
          </div>
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-yellow-300/30">
            <div className="text-3xl font-bold text-yellow-200 mb-2">Ongoing</div>
            <div className="text-cyan-200/80">Optimization</div>
          </div>
        </div>
      </div>
    </section>
  );
}
