import React, { useRef, useState } from 'react';

export default function BackgroundTune({ src, onChange }) {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);

  const toggle = async () => {
    const a = audio.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
      if (onChange) onChange(false);
      return;
    }
    try {
      a.volume = 0.35;
      await a.play();
      setPlaying(true);
      if (onChange) onChange(true);
    } catch (e) {
      setMissing(true);
    }
  };

  const label = missing ? 'Tune coming soon' : playing ? 'Pause background tune' : 'Play background tune';

  return (
    <div className="tune">
      <audio ref={audio} src={src} loop preload="none" onError={() => setMissing(true)} />
      <button className="tune__btn" onClick={toggle} disabled={missing} aria-label={label}>
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="4" width="5" height="16" /><rect x="14" y="4" width="5" height="16" /></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z" /></svg>
        )}
      </button>
      <span className={`tune__bars ${playing ? 'is-playing' : ''}`} aria-hidden="true"><i /><i /><i /><i /></span>
      <span className="tune__label">{label}</span>
    </div>
  );
}
