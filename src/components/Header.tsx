import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-[70px] transition-all duration-300 ${
        scrolled ? 'bg-[#0F0F0F]/95 backdrop-blur-md' : 'bg-transparent'
      }`}
      data-testid="header-main"
    >
      <div className="max-w-[1200px] mx-auto px-10 h-full">
        <div className="flex items-center justify-between h-full">
          <Link 
            to="/" 
            className="text-xl font-bold text-white tracking-tight"
            data-testid="link-logo"
          >
            WebAI Automations
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#platform" 
              className="text-sm text-[#CCCCCC] hover:text-white transition-colors"
              data-testid="link-platform"
            >
              Platform
            </a>
            <a 
              href="#solutions" 
              className="text-sm text-[#CCCCCC] hover:text-white transition-colors"
              data-testid="link-solutions"
            >
              Solutions
            </a>
            <a 
              href="#customers" 
              className="text-sm text-[#CCCCCC] hover:text-white transition-colors"
              data-testid="link-customers"
            >
              Customers
            </a>
            <a 
              href="#resources" 
              className="text-sm text-[#CCCCCC] hover:text-white transition-colors"
              data-testid="link-resources"
            >
              Resources
            </a>
            <a 
              href="#company" 
              className="text-sm text-[#CCCCCC] hover:text-white transition-colors"
              data-testid="link-company"
            >
              Company
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="https://cal.com/anabless-dela-cruz-knutxw/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              data-testid="button-contact-sales"
            >
              Contact Sales
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F0F]/98 backdrop-blur-md border-t border-[#1A1A2E]">
          <nav className="flex flex-col px-6 py-6 gap-4">
            <a href="#platform" className="text-base text-[#CCCCCC] hover:text-white py-2">Platform</a>
            <a href="#solutions" className="text-base text-[#CCCCCC] hover:text-white py-2">Solutions</a>
            <a href="#customers" className="text-base text-[#CCCCCC] hover:text-white py-2">Customers</a>
            <a href="#resources" className="text-base text-[#CCCCCC] hover:text-white py-2">Resources</a>
            <a href="#company" className="text-base text-[#CCCCCC] hover:text-white py-2">Company</a>
            <div className="pt-4 border-t border-[#1A1A2E]">
              <a
                href="https://cal.com/anabless-dela-cruz-knutxw/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white hover:text-black transition-all"
                data-testid="button-contact-sales-mobile"
              >
                Contact Sales
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
