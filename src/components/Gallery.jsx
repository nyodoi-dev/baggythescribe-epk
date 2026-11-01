import React from 'react';
import Photo from './Photo';
import { artist } from '../data/artist';

export default function Gallery() {
  return (
    <section id="photos" className="block">
      <div className="wrap">
        <h2 className="h2">Photos</h2>
        <div className="gallery">
          {artist.gallery.map((src, i) => (
            <Photo key={src} src={src} alt={`${artist.name} photo ${i + 1}`} label="Press photo" />
          ))}
        </div>
      </div>
    </section>
  );
}
