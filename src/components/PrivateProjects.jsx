import React from 'react';
import Photo from './Photo';
import { artist } from '../data/artist';

export default function PrivateProjects() {
  return (
    <section id="private" className="block">
      <div className="wrap">
        <h2 className="h2">Private projects</h2>
        <ul className="press">
          {artist.privateProjects.map(({ title, note, url, image, alt }) => (
            <li key={url}>
              <div className="private__item">
                {image && <Photo className="private__img" src={image} alt={alt || title} label="Artwork" />}
                <div><strong>{title}</strong><small>{note}</small></div>
              </div>
              <a className="press__get" href={url} target="_blank" rel="noopener noreferrer">Listen</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
