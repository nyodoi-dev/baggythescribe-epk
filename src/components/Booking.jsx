import React from 'react';
import { artist } from '../data/artist';

export default function Booking() {
  const { email, socials } = artist.contact;
  const live = socials.filter(s => s.url);
  return (
    <section id="booking" className="block">
      <div className="wrap">
        <h2 className="h2">Book {artist.name}</h2>
        <p style={{ marginBottom: '1.6rem', color: 'var(--ash)', maxWidth: '46ch' }}>
          For shows, features, interviews and press, send an email.
        </p>
        <a className="booking__mail" href={`mailto:${email}`}>{email}</a>
        {live.length > 0 && (
          <div className="booking__soc">
            {live.map(({ label, url }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer">{label}</a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
