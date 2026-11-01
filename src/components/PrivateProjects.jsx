import React from 'react';
import { artist } from '../data/artist';

export default function PrivateProjects() {
  return (
    <section id="private" className="block">
      <div className="wrap">
        <h2 className="h2">Private projects</h2>
        <ul className="press">
          {artist.privateProjects.map(({ title, note, url }) => (
            <li key={url}>
              <div><strong>{title}</strong><small>{note}</small></div>
              <a className="press__get" href={url} target="_blank" rel="noopener noreferrer">Listen</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
