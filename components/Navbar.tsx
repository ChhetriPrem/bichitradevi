'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Life & Vlogs', href: '#vlogs' },
  { name: 'Legal Work', href: '#legal' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Gallery', href: '#gallery' },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none"
    >
      <div className="bg-white/90 backdrop-blur-md border border-[#FADADD] px-6 md:px-8 py-3 rounded-full shadow-lg pointer-events-auto flex items-center gap-4 md:gap-8 max-w-[95vw] overflow-x-auto no-scrollbar">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-[10px] md:text-xs uppercase tracking-widest font-bold whitespace-nowrap hover:text-[#DC9D9D] transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
