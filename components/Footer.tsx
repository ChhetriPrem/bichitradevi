'use client';

import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-4xl mb-4 italic">Bichitra Devi</h2>
            <p className="text-[#888] font-light max-w-xs">Building bridges between tradition and the future of justice.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-all">
               <Mail size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-all">
               <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-all">
               <Linkedin size={20} />
            </a>
          </div>

          <div>
             <button 
               onClick={scrollToTop}
               className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#1A1A1A] hover:scale-110 transition-transform"
             >
               <ArrowUp size={24} />
             </button>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#555]">
            &copy; {new Date().getFullYear()} Bichitra Devi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
