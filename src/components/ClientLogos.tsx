const clients = [
  { name: 'TechFlow Solutions' },
  { name: 'Growth Partners' },
  { name: 'Talent Bridge' },
  { name: 'NextGen SaaS' },
  { name: 'Enterprise Co' },
  { name: 'Scale Ventures' }
];

export default function ClientLogos() {
  return (
    <section className="py-16 px-4 bg-[#0F0F0F] border-y border-[#1A1A2E]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#999999] text-sm uppercase tracking-wider">
            Trusted by 500+ companies worldwide
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-[#666666] text-xl font-semibold hover:text-white transition-all duration-300 cursor-default"
              style={{ opacity: 0.7 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.7';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              data-testid={`logo-client-${index}`}
            >
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
