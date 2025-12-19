export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0a0f1a] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="relative" style={{ perspective: '1000px' }}>
              <div
                className="w-24 h-24 rounded-full relative transition-transform duration-300 hover:scale-110"
                style={{
                  background: 'conic-gradient(from 0deg, #06b6d4 0deg 120deg, #3b82f6 120deg 240deg, #0ea5e9 240deg 360deg)',
                  boxShadow: '0 20px 60px rgba(6, 182, 212, 0.4), 0 8px 16px rgba(59, 130, 246, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.2)',
                  transform: 'rotateX(15deg) rotateY(-5deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div
                  className="absolute inset-4 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #1a1a2e, #0a0f1a)',
                    boxShadow: 'inset 0 4px 12px rgba(0, 0, 0, 0.6)'
                  }}
                ></div>
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
                    opacity: 0.4
                  }}
                ></div>
              </div>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight bg-gradient-to-r from-cyan-400 via-cyan-300 to-amber-200 bg-clip-text text-transparent">
            Why WebAI Automations
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            WebAI Automations' approach doesn't just make business automation more connected—it drives action. <span className="font-black">In the first year alone, we see 3-5x ROI</span> with our solution, setting in motion earlier optimizations that improve efficiency and reduce costs.<sup className="text-sm">1</sup>
          </p>
        </div>
      </div>
    </section>
  );
}
