import React from 'react';
import { artist } from '../data/artist';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">© {new Date().getFullYear()} {artist.name}. All rights reserved.</div>
    </footer>
  );
}
