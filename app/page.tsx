import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Bio } from '@/components/Bio';
import { Vlogs } from '@/components/Vlogs';
import { Articles } from '@/components/Articles';
import { Achievements } from '@/components/Achievements';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <Bio />
      <Vlogs />
      <Articles />
      <Achievements />
      <Gallery />
      <Footer />
    </main>
  );
}
