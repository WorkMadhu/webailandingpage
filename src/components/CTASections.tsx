import { ArrowRight, MessageCircle, Headphones } from 'lucide-react';

export default function CTASections() {

  return (
    <section id="resources" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Talk to our <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-yellow-200 bg-clip-text text-transparent">team</span>.
          </h2>
          <p className="text-cyan-200/80 text-xl font-medium">
            Want to get in touch with our team? We're just a click away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="relative p-10 rounded-3xl bg-white/10 backdrop-blur-sm border border-cyan-400/30 overflow-hidden group hover:shadow-2xl hover:border-cyan-400/50 transition-all">
            <div className="relative">
              <MessageCircle className="text-cyan-400 mb-6" size={48} strokeWidth={1.5} />

              <h3 className="text-3xl font-bold text-white mb-4">
                New to our services?
              </h3>

              <p className="text-cyan-100 mb-8 leading-relaxed text-lg">
                Speak to our team to discuss your automation strategy and our solution.
              </p>

              <a href="https://cal.com/anabless-dela-cruz-knutxw/consultation" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 text-black rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all flex items-center gap-2 group-hover:gap-3">
                Get in touch
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="relative p-10 rounded-3xl bg-white/10 backdrop-blur-sm border border-cyan-400/30 overflow-hidden group hover:shadow-2xl hover:border-cyan-400/50 transition-all">
            <div className="relative">
              <Headphones className="text-cyan-400 mb-6" size={48} strokeWidth={1.5} />

              <h3 className="text-3xl font-bold text-white mb-4">
                Already a client?
              </h3>

              <p className="text-cyan-100 mb-8 leading-relaxed text-lg">
                If you need help with your account, have questions for your team, or have other service-related issues, we're here.
              </p>

              <a href="https://cal.com/anabless-dela-cruz-knutxw/consultation" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 text-black rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all flex items-center gap-2 group-hover:gap-3">
                Get support
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
