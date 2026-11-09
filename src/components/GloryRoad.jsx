import React from 'react';
import Photo from './Photo';
import { artist } from '../data/artist';

export default function GloryRoad() {
  const release = artist.gloryRoad;
  if (!release) return null;
  const { title, byline, listen, lead, story, lyric, quote, credits, pagesTitle, pages } = release;
  return (
    <div id="glory-road" className="glory-block">
        <h3 className="glory__title">{title}</h3>
        <p className="glory__byline">{byline}</p>
        {listen?.url && (
          <div className="btns glory__listen">
            <a className="btn btn--solid" href={listen.url} target="_blank" rel="noopener noreferrer">{listen.label}</a>
          </div>
        )}
        <div className="glory">
          <div className="glory__text">
            <p className="glory__lead">{lead}</p>
            {story.map((p, i) => <p key={i}>{p}</p>)}
            {lyric && <blockquote className="glory__lyric">{lyric}</blockquote>}
          </div>
          <aside>
            {quote && (
              <figure className="glory__quote">
                <blockquote>{quote.text}</blockquote>
                <figcaption>{quote.by}</figcaption>
              </figure>
            )}
            <dl className="glory__credits">
              {credits.map(({ role, names }) => (
                <div key={role}><dt>{role}</dt><dd>{names}</dd></div>
              ))}
            </dl>
          </aside>
        </div>
        {pages?.length > 0 && (
          <>
            <p className="glory__pages-title">{pagesTitle}</p>
            <div className="glory__pages">
              {pages.map(({ src, alt }) => (
                <a key={src} href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full size: ${alt}`}>
                  <Photo src={src} alt={alt} label="Press release page" />
                </a>
              ))}
            </div>
          </>
        )}
    </div>
  );
}
