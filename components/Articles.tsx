'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, Scale } from 'lucide-react';

const articles = [
  { 
    title: "The Evolution of Constitutional Rights in India", 
    desc: "A deep dive into how rights have adapted to the digital age and the challenges of the 21st century.",
    tag: "Constitutional Law",
    date: "March 15, 2026"
  },
  { 
    title: "Legal Implications of AI in Judiciary", 
    desc: "Analyzing whether artificial intelligence can truly assist in delivering unbiased justice.",
    tag: "Tech & Law",
    date: "Jan 20, 2026"
  },
  { 
    title: "Environmental Litigation: A New Frontier", 
    desc: "How JB Law College students are leading talks on sustainable legal frameworks.",
    tag: "Environmental Law",
    date: "Oct 12, 2025"
  }
];

export function Articles() {
  return (
    <section id="legal" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
           <h2 className="font-serif text-5xl mb-4 italic">Legal Articles</h2>
           <p className="text-[#666] max-w-sm">Pens and paper met with intellectual curiosity. Browse through recent legal thoughts.</p>
        </div>
        <div className="w-16 h-16 bg-[#FFE4E1] rounded-full flex items-center justify-center text-[#DC9D9D] -rotate-12 animate-pulse">
           <Scale size={32} />
        </div>
      </div>

      <div className="space-y-12">
        {articles.map((article, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer border-b border-[#FADADD] pb-8 flex flex-col md:flex-row gap-6 justify-between items-start"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                 <span className="text-[10px] uppercase tracking-widest font-bold text-[#DC9D9D] px-2 py-0.5 bg-[#FFF0F0] rounded">{article.tag}</span>
                 <span className="text-[10px] uppercase tracking-widest text-[#AAA]">{article.date}</span>
              </div>
              <h3 className="font-serif text-3xl mb-4 leading-tight group-hover:italic group-hover:pl-4 transition-all duration-300 tracking-tight">
                {article.title}
              </h3>
              <p className="text-[#888] line-clamp-2 max-w-2xl">{article.desc}</p>
            </div>
            <div className="bg-[#FFE4E1] p-4 rounded-full text-[#DC9D9D] group-hover:bg-[#DC9D9D] group-hover:text-white transition-all">
              <ArrowUpRight size={24} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
