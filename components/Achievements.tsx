'use client';

import { motion } from 'motion/react';
import { Trophy, Star, Award } from 'lucide-react';

const achievements = [
  { year: "2024", title: "Best Speaker Award", event: "National Moot Court Competition", icon: Trophy },
  { year: "2023", title: "Editor-in-Chief", event: "College Law Journal", icon: Star },
  { year: "2022", title: "Top Rank Holder", event: "Semester Merit List", icon: Award },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-5xl mb-16 text-center italic">Milestones</h2>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 bg-[#FFF9F9] p-10 rounded-[40px] border border-[#FFE4E1] text-center hover:shadow-2xl transition-all hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#DC9D9D] mx-auto mb-6 shadow-sm group-hover:bg-[#FFE4E1] transition-colors">
                 <item.icon size={32} />
              </div>
              <p className="text-[#999] text-xs font-bold tracking-widest uppercase mb-2">{item.year}</p>
              <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
              <p className="text-[#666] text-sm italic">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5">
         <Trophy size={400} />
      </div>
    </section>
  );
}
