import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import GodParents from './components/GodParents';
import DressCode from './components/DressCode';

function App() {
  return (
    <>
      <Navbar />
      {/* <img
        src={butterfly}
        alt="Butterfly"
        style={{
          position: 'absolute',
          top: '100px',         // just below the navbar
          left: '20%',
          transform: 'translateX(-50%)',
          width: '60px',      // adjust size as needed
          opacity: 0.4,        // subtle background effect
          zIndex: 0,           // behind main content
          pointerEvents: 'none'
        }}
      /> */}
      <Hero />
      <EventDetails />
      <GodParents />
      <DressCode />
    </>
  );
}

export default App;
