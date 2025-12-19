import { Linkedin, Twitter, Mail, Github } from 'lucide-react';

const footerLinks = {
  Solutions: ['Content Automation', 'Outreach Systems', 'HR Automation', 'Custom Solutions'],
  Products: ['N8n Integration', 'AI Tools', 'Analytics', 'API Access'],
  Company: ['About Us', 'Careers', 'Partners', 'Contact'],
  Resources: ['Documentation', 'Case Studies', 'Blog', 'Support']
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-black to-gray-950 border-t border-cyan-400/20 py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-yellow-200 bg-clip-text text-transparent mb-4">
              WebAIAutomations
            </div>
            <p className="text-cyan-200/80 text-sm mb-4">
              Content creation with AI: stay consistent, save time, and maximize reach
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-500/20 flex items-center justify-center transition-all group border border-cyan-400/20">
                <Linkedin className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-500/20 flex items-center justify-center transition-all group border border-cyan-400/20">
                <Twitter className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-500/20 flex items-center justify-center transition-all group border border-cyan-400/20">
                <Mail className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-500/20 flex items-center justify-center transition-all group border border-cyan-400/20">
                <Github className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-cyan-200/80 hover:text-cyan-300 text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-cyan-400/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-cyan-200/80 text-sm">
            © 2024 WebAIAutomations. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-cyan-200/80 hover:text-cyan-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-cyan-200/80 hover:text-cyan-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-cyan-200/80 hover:text-cyan-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
