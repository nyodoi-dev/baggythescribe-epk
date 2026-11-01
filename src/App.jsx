import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Music from './components/Music';
import PrivateProjects from './components/PrivateProjects';
import Gallery from './components/Gallery';
import Press from './components/Press';
import Booking from './components/Booking';
import Footer from './components/Footer';
import BackgroundWaves from './components/BackgroundWaves';
import BackgroundTune from './components/BackgroundTune';
import { artist } from './data/artist';

export default function App() {
  const [tunePlaying, setTunePlaying] = useState(false);
  return (
    <>
      <BackgroundWaves active={tunePlaying} />
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Music />
        <PrivateProjects />
        <Gallery />
        <Press />
        <Booking />
      </main>
      <Footer />
      <BackgroundTune src={artist.backgroundTune} onChange={setTunePlaying} />
    </>
  );
}
