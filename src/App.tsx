import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Villain } from './components/Villain';
import { ScrollyTelling } from './components/ScrollyTelling';
import { BentoGrid } from './components/BentoGrid';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-stone-200 font-sans bg-stone-950 selection:bg-blueprint selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Villain />
        <ScrollyTelling />
        <BentoGrid />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
