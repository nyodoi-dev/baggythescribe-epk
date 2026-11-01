import React from 'react';
import { artist } from '../data/artist';

export default function Press() {
  return (
    <section id="press" className="block">
      <div className="wrap">
        <h2 className="h2">Press materials</h2>
        <ul className="press">
          {artist.pressFiles.map(({ label, note, file }) => (
            <li key={label}>
              <div><strong>{label}</strong><small>{note}</small></div>
              {file ? (
                <a className="press__get" href={file} download>Download</a>
              ) : (
                <span className="press__soon">Coming soon</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
