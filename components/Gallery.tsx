'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const galleryImages = [
  "https://picsum.photos/seed/gal1/800/1000",
  "https://picsum.photos/seed/gal2/800/600",
  "https://picsum.photos/seed/gal3/800/800",
  "https://picsum.photos/seed/gal4/800/900",
  "https://picsum.photos/seed/gal5/800/700",
  "https://picsum.photos/seed/gal6/800/1100",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-6xl italic text-[#DC9D9D]">Gallery</h2>
          <p className="text-xs uppercase tracking-widest opacity-40 mt-2">Life through the lens</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative group rounded-3xl overflow-hidden shadow-md"
            >
              <Image 
                src={src} 
                alt={`Gallery ${idx}`} 
                width={800}
                height={1000}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-pink-100/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                   <span className="text-2xl">+</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
