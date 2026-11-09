import React from 'react';
import Photo from './Photo';
import { artist } from '../data/artist';

export default function Press() {
  const features = artist.features || [];
  return (
    <section id="press" className="block">
      <div className="wrap">
        <h2 className="h2">Press</h2>
        {features.length > 0 && (
          <ul className="features">
            {features.map(({ outlet, title, note, image, alt, url }) => (
              <li key={`${outlet}-${title}`}>
                <Photo className="features__img" src={image} alt={alt} label={outlet} />
                <div>
                  <small>{outlet}</small>
                  <strong>{url ? <a href={url} target="_blank" rel="noopener noreferrer">{title}</a> : title}</strong>
                  <p>{note}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h3 className="press__sub">Press materials</h3>
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
