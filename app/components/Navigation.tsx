"use client";

import { Menu } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-brand-card/90 backdrop-blur-lg border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="font-outfit font-bold text-2xl leading-none">
              <span className="text-[#2E2C6E]">Web</span>
              <span className="text-brand-purple">AI</span>
              <div className="text-brand-muted text-[10px] font-dm-sans font-medium tracking-[0.26em] uppercase mt-0.5">
                AUTOMATIONS
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#platform" className="text-white hover:text-brand-cyan transition font-dm-sans font-medium">
              Platform
            </a>
            <a href="#solutions" className="text-white hover:text-brand-cyan transition font-dm-sans font-medium">
              Solutions
            </a>
            <a href="#customers" className="text-white/60 hover:text-brand-cyan transition font-dm-sans font-medium">
              Customers
            </a>
            <a href="#resources" className="text-white/60 hover:text-brand-cyan transition font-dm-sans font-medium">
              Resources
            </a>
            <a href="#company" className="text-white/60 hover:text-brand-cyan transition font-dm-sans font-medium">
              Company
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-brand-cyan to-brand-cyan-hover text-brand-bg font-semibold px-5 py-2 rounded-xl hover:brightness-110 transition font-dm-sans">
              Get Started Free →
            </button>

            <button className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
