'use client';

import { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import Loader from '@/components/Loader/Loader';
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Process from '@/components/Process/Process';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <SmoothScroll>
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
