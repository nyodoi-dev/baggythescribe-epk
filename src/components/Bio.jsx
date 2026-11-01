import React from 'react';
import { artist } from '../data/artist';

export default function Bio() {
  return (
    <section id="bio" className="block">
      <div className="wrap">
        <h2 className="h2">{artist.bioLead}</h2>
        <div className="bio">
          <div className="bio__text">
            {artist.bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <dl className="bio__facts">
            <div><dt>Artist name</dt><dd>{artist.name}</dd></div>
            <div><dt>Born</dt><dd>{artist.birthName}</dd></div>
            <div><dt>Sound</dt><dd>{artist.tagline.replace(' artist', '')}</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
