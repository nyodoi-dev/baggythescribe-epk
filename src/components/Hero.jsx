import React from 'react';
import Photo from './Photo';
import { artist } from '../data/artist';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap" style={{ width: '100%' }}>
        <h1 className="hero__name">{artist.name}</h1>
        <div className="hero__grid">
          <div>
            <p className="hero__tag">{artist.tagline}</p>
            <p className="hero__quote">{artist.pullQuote}</p>
            <div className="btns">
              <a href="#music" className="btn btn--solid">Listen now</a>
              <a href="#press" className="btn btn--line">Download press kit</a>
            </div>
          </div>
          <Photo className="hero__photo" src={artist.heroImage} alt={`Portrait of ${artist.name}`} label="Artist photo goes here" />
        </div>
      </div>
    </section>
  );
}
