import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 bg-dot-pattern">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default App;