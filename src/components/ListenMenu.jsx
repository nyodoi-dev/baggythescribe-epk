import React, { useEffect, useRef, useState } from 'react';
import { artist } from '../data/artist';

// "Listen now" button that opens a list of the artist's profiles on every platform with a link.
export default function ListenMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const links = artist.streaming.filter((s) => s.url);

  useEffect(() => {
    if (!open) return undefined;
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // No profile links yet: fall back to scrolling to the Music section.
  if (links.length === 0) return <a href="#music" className="btn btn--solid">Listen now</a>;

  return (
    <div className="listen" ref={ref}>
      <button type="button" className="btn btn--solid" aria-expanded={open} aria-controls="listen-menu" onClick={() => setOpen(!open)}>
        Listen now
      </button>
      {open && (
        <ul id="listen-menu" className="listen__menu">
          {links.map(({ label, url }) => (
            <li key={label}>
              <a href={url} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
