import fs from 'fs';
import path from 'path';
import SmoothScroll from '@/components/SmoothScroll';
import Loader from '@/components/Loader/Loader';
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Process from '@/components/Process/Process';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

function findPortraitSrc(): string | null {
  const candidates = [
    'profile_pic_portfolio.png',
    'profile_pic_portfolio.jpg',
    'profile_pic_portfolio.jpeg',
    'profile_pic_portfolio.webp',
    'ravi-portrait.jpg',
    'ravi-portrait.jpeg',
    'ravi-portrait.png',
    'ravi-portrait.webp',
  ];
  for (const filename of candidates) {
    const filePath = path.join(process.cwd(), 'public', 'images', filename);
    if (fs.existsSync(filePath)) {
      return `/images/${filename}`;
    }
  }
  return null;
}

export default function Home() {
  const portraitSrc = findPortraitSrc();

  return (
    <SmoothScroll>
      <Loader />
      <Navigation />
      <main id="main-content">
        <Hero />
        <About portraitSrc={portraitSrc} />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
