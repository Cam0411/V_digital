
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Strengths from './components/Strengths';
import Workflow from './components/Workflow';
import Team from './components/Team';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach((el) => observer.observe(el));

    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-vdc-bg text-vdc-text font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Strengths />
        <Workflow />
        <Team />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default App;