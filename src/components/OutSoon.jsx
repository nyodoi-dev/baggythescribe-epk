import React from 'react';
import Photo from './Photo';
import { artist } from '../data/artist';

export default function OutSoon() {
  const r = artist.outSoon;
  if (!r) return null;
  return (
    <div id="out-soon" className="soon">
      <p className="soon__tag">Out soon</p>
      <div className="soon__grid">
        <Photo className="soon__cover" src={r.cover} alt={r.alt || `Cover art for ${r.title}`} label="Cover art" />
        <div className="soon__text">
          <h3 className="soon__title">{r.title}</h3>
          <p className="soon__info">{r.info}</p>
          {r.story.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>
  );
}
