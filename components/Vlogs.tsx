'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Play } from 'lucide-react';

const vlogs = [
  { id: 1, title: "A Day in My Law Student Life", thumbnail: "https://picsum.photos/seed/vlog1/600/400", duration: "10:24" },
  { id: 2, title: "My 20th Birthday Celebration!", thumbnail: "https://picsum.photos/seed/vlog2/600/400", duration: "15:10" },
  { id: 3, title: "How to Survive Finals at JB Law", thumbnail: "https://picsum.photos/seed/vlog3/600/400", duration: "08:45" },
];

export function Vlogs() {
  return (
    <section id="vlogs" className="py-24 bg-[#FFF9F9]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="font-serif text-4xl mb-4 italic">Vlogs & Life</h2>
          <p className="text-sm uppercase tracking-widest text-[#999]">Captured Moments</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {vlogs.map((vlog, idx) => (
            <motion.div
              key={vlog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-lg">
                <Image 
                  src={vlog.thumbnail} 
                  alt={vlog.title} 
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                   <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-[#DC9D9D] scale-0 group-hover:scale-100 transition-transform duration-300">
                     <Play fill="currentColor" size={20} />
                   </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 px-2 py-1 rounded text-[10px] font-bold tracking-tighter">
                  {vlog.duration}
                </div>
              </div>
              <h3 className="font-serif text-lg leading-tight group-hover:text-[#DC9D9D] transition-colors">{vlog.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button className="border-b-2 border-[#FFE4E1] pb-1 text-xs uppercase tracking-[0.2em] font-bold hover:text-[#DC9D9D] hover:border-[#DC9D9D] transition-all">
            See All Vlogs
          </button>
        </motion.div>
      </div>
    </section>
  );
}
