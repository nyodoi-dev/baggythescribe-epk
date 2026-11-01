import React, { useEffect, useState } from 'react';
import { artist } from '../data/artist';

const LINKS = [
  ['Bio', '#bio'],
  ['Music', '#music'],
  ['Private projects', '#private'],
  ['Photos', '#photos'],
  ['Press', '#press'],
  ['Booking', '#booking'],
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${solid || open ? 'nav--solid' : ''}`}>
      <div className="wrap nav__in">
        <a href="#top" className="nav__brand">{artist.name}</a>
        <button className="nav__burger" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {LINKS.map(([label, href]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
        </ul>
      </div>
    </header>
  );
}
