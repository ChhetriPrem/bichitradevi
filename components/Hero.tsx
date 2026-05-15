'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="mb-6 relative inline-block">
          <div className="w-40 h-40 md:w-64 md:h-64 rounded-[2rem] border-8 border-white overflow-hidden shadow-2xl mx-auto rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/Profile.png"
              alt="Bichitra Devi"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/* Doodle Sparkle */}
          <motion.div
             animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
             transition={{ duration: 3, repeat: Infinity }}
             className="absolute -top-6 -left-6 w-16 h-16 text-[#DC9D9D] opacity-80"
          >
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
              <path d="M50 10 L50 30 M50 70 L50 90 M10 50 L30 50 M70 50 L90 50 M22 22 L36 36 M64 64 L78 78 M22 78 L36 64 M64 36 L78 22" />
            </svg>
          </motion.div>
          {/* Doodle Heart */}
          <motion.div
             animate={{ y: [0, -5, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="absolute -bottom-4 -right-10 w-14 h-14 text-[#FFB6C1] opacity-90 drop-shadow-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl tracking-tighter text-[#2C2C2C] leading-none">
            Bichitra <span className="text-[#DC9D9D] relative italic">Devi
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FADADD] -rotate-1 hidden md:block"></div>
            </span>
          </h1>
          
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-[#8E8E8E] max-w-sm mx-auto">
            Future Jurist • Storyteller • Life Explorer
          </p>
        </div>

        <motion.div className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFE4E1] hover:bg-[#FADADD] text-[#2C2C2C] px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-[0_10px_30px_-10px_rgba(255,182,193,0.5)] border border-white/50"
          >
            Explore Her World
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[15%] text-[#FFE4E1] opacity-40 hidden md:block"
        >
          <svg width="80" height="80" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" fill="none" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[10%] text-[#FFE4E1] opacity-40"
        >
          <svg width="60" height="60" viewBox="0 0 100 100">
            <path d="M10,50 Q50,0 90,50 T130,50" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
