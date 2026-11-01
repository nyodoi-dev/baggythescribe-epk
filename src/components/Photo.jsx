import React, { useState } from 'react';

export default function Photo({ src, alt, label, className = '' }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return <div className={`photo photo--empty ${className}`} role="img" aria-label={alt}>{label}</div>;
  }
  return (
    <div className={`photo ${className}`}>
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
    </div>
  );
}
