import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Press from './components/Press';
import Booking from './components/Booking';
import Footer from './components/Footer';
import BackgroundTune from './components/BackgroundTune';
import { artist } from './data/artist';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Music />
        <Gallery />
        <Press />
        <Booking />
      </main>
      <Footer />
      <BackgroundTune src={artist.backgroundTune} />
    </>
  );
}
