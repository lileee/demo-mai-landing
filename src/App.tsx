import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App font-inter">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;