import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Exhibition from './components/Exhibition';
import Tickets from './components/Tickets';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Exhibition />
      <Tickets />
      <Contact />
    </div>
  );
}

export default App;