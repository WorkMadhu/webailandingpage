import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-cyan-400/20 shadow-sm shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-yellow-200 bg-clip-text text-transparent">
              WebAIAutomations
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#solutions" className="text-sm text-cyan-200 hover:text-cyan-100 transition-colors">Solutions</a>
              <a href="#products" className="text-sm text-cyan-200 hover:text-cyan-100 transition-colors">Products</a>
              <a href="#company" className="text-sm text-cyan-200 hover:text-cyan-100 transition-colors">Company</a>
              <a href="#resources" className="text-sm text-cyan-200 hover:text-cyan-100 transition-colors">Resources</a>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm text-cyan-200 hover:text-cyan-100 transition-colors">
              Activate Kit
            </button>
            <button className="px-4 py-2 text-sm bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 text-black rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all font-semibold">
              Contact Us
            </button>
            <button className="px-4 py-2 text-sm text-cyan-200 hover:text-cyan-100 transition-colors">
              Sign In
            </button>
          </div>

          <button
            className="md:hidden text-cyan-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-cyan-400/20">
          <nav className="flex flex-col px-4 py-4 gap-3">
            <a href="#solutions" className="text-sm text-cyan-200 hover:text-cyan-100 py-2">Solutions</a>
            <a href="#products" className="text-sm text-cyan-200 hover:text-cyan-100 py-2">Products</a>
            <a href="#company" className="text-sm text-cyan-200 hover:text-cyan-100 py-2">Company</a>
            <a href="#resources" className="text-sm text-cyan-200 hover:text-cyan-100 py-2">Resources</a>
            <div className="flex flex-col gap-2 mt-4">
              <button className="px-4 py-2 text-sm text-cyan-200 hover:text-cyan-100">Activate Kit</button>
              <button className="px-4 py-2 text-sm bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 text-black rounded-lg font-semibold">Contact Us</button>
              <button className="px-4 py-2 text-sm text-cyan-200 hover:text-cyan-100">Sign In</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
