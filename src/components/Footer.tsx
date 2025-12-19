import { Linkedin, Twitter, Mail, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Platform: ['Automation Studio', 'AI Workflows', 'Integrations', 'API Access'],
  Solutions: ['Content Automation', 'Outreach Systems', 'HR Automation', 'Custom Solutions'],
  Company: ['About Us', 'Careers', 'Partners', 'Contact'],
  Resources: ['Documentation', 'Case Studies', 'Blog', 'Support']
};

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-[#1A1A2E] py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold text-white mb-4 block">
              WebAI Automations
            </Link>
            <p className="text-[#999999] text-sm mb-6 leading-relaxed">
              Enterprise AI automation for modern businesses. Automate content, outreach, and HR at scale.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[#1A1A2E] hover:bg-[#00D9FF]/10 flex items-center justify-center transition-all border border-[#1A1A2E] hover:border-[#00D9FF]/30"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="text-[#999999] hover:text-[#00D9FF]" size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[#1A1A2E] hover:bg-[#00D9FF]/10 flex items-center justify-center transition-all border border-[#1A1A2E] hover:border-[#00D9FF]/30"
                data-testid="link-social-twitter"
              >
                <Twitter className="text-[#999999] hover:text-[#00D9FF]" size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[#1A1A2E] hover:bg-[#00D9FF]/10 flex items-center justify-center transition-all border border-[#1A1A2E] hover:border-[#00D9FF]/30"
                data-testid="link-social-mail"
              >
                <Mail className="text-[#999999] hover:text-[#00D9FF]" size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[#1A1A2E] hover:bg-[#00D9FF]/10 flex items-center justify-center transition-all border border-[#1A1A2E] hover:border-[#00D9FF]/30"
                data-testid="link-social-github"
              >
                <Github className="text-[#999999] hover:text-[#00D9FF]" size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#999999] hover:text-[#00D9FF] text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#1A1A2E] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#999999] text-sm">
            © 2024 WebAI Automations. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-[#999999] hover:text-[#00D9FF] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#999999] hover:text-[#00D9FF] transition-colors">Terms of Service</a>
            <a href="#" className="text-[#999999] hover:text-[#00D9FF] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
