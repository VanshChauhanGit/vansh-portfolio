import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <div id="skills">
          <Skills />
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
