import React from 'react';
import { artist } from '../data/artist';

export default function Footer() {
  const live = (artist.socials || []).filter((s) => s.url);
  return (
    <footer className="foot">
      <div className="wrap foot__in">
        <span>© {new Date().getFullYear()} {artist.name}. All rights reserved.</span>
        {live.length > 0 && (
          <nav className="foot__soc" aria-label="Social links">
            {live.map(({ label, url }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer">{label}</a>
            ))}
          </nav>
        )}
      </div>
    </footer>
  );
}
