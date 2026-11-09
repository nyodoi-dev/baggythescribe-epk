import React from 'react';
import { artist } from '../data/artist';

export default function Booking() {
  const { email, phone } = artist.contact;
  const live = (artist.socials || []).filter((s) => s.url);
  return (
    <section id="booking" className="block">
      <div className="wrap">
        <h2 className="h2">Book {artist.name}</h2>
        <p style={{ marginBottom: '1.6rem', color: 'var(--ash)', maxWidth: '46ch' }}>
          For shows, features, interviews and press, send an email{phone ? ' or call' : ''}.
        </p>
        <a className="booking__mail" href={`mailto:${email}`}>{email}</a>
        {phone && (
          <p className="booking__phone">
            <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
          </p>
        )}
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
