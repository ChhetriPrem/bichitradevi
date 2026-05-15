'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Book, GraduationCap, MapPin, Calendar } from 'lucide-react';

export function Bio() {
  return (
    <section className="py-32 px-4 max-w-6xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Doodle behind text */}
          <div className="absolute -top-10 -left-10 w-32 h-32 text-[#FFE4E1] opacity-30 select-none pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M10,50 Q25,25 50,50 T90,50" stroke="currentColor" fill="none" strokeWidth="2" />
              <path d="M10,60 Q25,35 50,60 T90,60" stroke="currentColor" fill="none" strokeWidth="2" />
            </svg>
          </div>

          <h2 className="font-serif text-5xl md:text-6xl mb-10 leading-[1.1] tracking-tight">
            Charting the Path of <br/> 
            <span className="italic text-[#DC9D9D]">Justice & Grace</span>
          </h2>
          <p className="text-[#666666] leading-relaxed mb-8 text-lg">
            A dreamer born in the winter of 2003, Bichitra Devi is weaving her passion for the law with a vibrant zest for life. Currently pursuing her BA LLB at the prestigious JB Law College, she believes that justice is as much about compassion as it is about codes.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FFE4E1] flex items-center justify-center text-[#DC9D9D]">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#999]">Born</p>
                <p className="font-medium">13th Dec 2003</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FFE4E1] flex items-center justify-center text-[#DC9D9D]">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#999]">Education</p>
                <p className="font-medium">BA LLB</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FFE4E1] flex items-center justify-center text-[#DC9D9D]">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#999]">Institute</p>
                <p className="font-medium">JB Law College</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FFE4E1] flex items-center justify-center text-[#DC9D9D]">
                <Book size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#999]">Focus</p>
                <p className="font-medium">Constitutional Law</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="aspect-[4/5] bg-neutral-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
             <Image 
               src="https://picsum.photos/seed/legal/800/1000" 
               alt="Bichitra in her element" 
               fill
               className="object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
          {/* Decorative frame */}
          <div className="absolute inset-0 border-2 border-[#DC9D9D]/20 rounded-[2.5rem] translate-x-6 translate-y-6 -z-0"></div>
          
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl max-w-[240px] -rotate-3 border border-[#FFE4E1] z-20">
             <div className="w-8 h-8 bg-[#FFE4E1] rounded-full flex items-center justify-center text-[#DC9D9D] mb-4">
                <Book size={16} />
             </div>
             <p className="font-serif italic text-xl leading-snug">&ldquo;The law is a tool for the heart.&rdquo;</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
