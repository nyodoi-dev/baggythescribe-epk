import React from 'react';
import Photo from './Photo';
import GloryRoad from './GloryRoad';
import OutSoon from './OutSoon';
import { artist } from '../data/artist';

export default function Music() {
  const { latestRelease, streaming, tracks, videoId } = artist;
  return (
    <section id="music" className="block">
      <div className="wrap">
        <h2 className="h2">Music</h2>
        <div className="music">
          <Photo className="music__cover" src={latestRelease.cover} alt={`Cover art for ${latestRelease.title}`} label="Cover art" />
          <div>
            <h3 className="music__title">{latestRelease.title}</h3>
            <p className="music__info">{latestRelease.info}</p>
            <div className="chips">
              {streaming.map(({ label, url }) =>
                url ? (
                  <a key={label} className="chip" href={url} target="_blank" rel="noopener noreferrer">{label}</a>
                ) : (
                  <span key={label} className="chip chip--off" title="Link coming soon">{label}</span>
                )
              )}
            </div>
            <ul className="tracks">
              {tracks.map((t, i) => (
                <li key={i}>
                  <span>{t.url ? <a href={t.url} target="_blank" rel="noopener noreferrer">{t.title}</a> : t.title}</span>
                  <span>{t.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <OutSoon />
        <GloryRoad />
        <div className="video">
          {videoId ? (
            <iframe
              title={`${artist.name} video`}
              src={`https://www.youtube.com/embed/${videoId}`}
              allow="accelerometer; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="photo photo--empty" role="img" aria-label="Video placeholder">Featured video goes here</div>
          )}
        </div>
      </div>
    </section>
  );
}
