# BaggytheScribe EPK

Press kit site for the artist BaggytheScribe (Rhythm and Poetry). React 18 + Create React App, plain CSS, no other dependencies.

## Commands
- `npm install` then `npm start` (http://localhost:3000)
- `npm run build` for production (deploys to Vercel from GitHub)

## Structure (read this instead of exploring)
```
src/
  data/artist.js        ALL content: bio, tracks, links, photos, press files, email, tune
  components/           one component per file, one section per component
    Navbar Hero Bio Music PrivateProjects Gallery Press Booking Footer
    Photo.jsx           image with placeholder fallback (reuse, do not rebuild)
    BackgroundTune.jsx  audio player + autoplay logic
    BackgroundWaves.jsx canvas wave animation, reacts to the tune
  App.jsx               section order + tune state only
  index.css             design tokens (:root) and ALL styles, grouped by /* Section */ comments
public/
  images/ audio/ press/ drop-in files (names are listed in artist.js and README.md)
```

## Rules
- Content changes go in `src/data/artist.js` only. Never hardcode copy, links or file paths inside components.
- New section = new component file + one line in `App.jsx` + a link in `Navbar.jsx` + a block in `index.css`.
- Colours, fonts and spacing come from the `:root` variables in `index.css`. No hex values in components or new CSS.
- Palette: charcoal `--ink`, greys, one light orange `--amber`. Do not add a second accent colour.
- Fonts: Bricolage Grotesque (display), Newsreader (body). Do not add more.
- Keep the look quiet: no gradients on text, no emoji, no decorative motion beyond the hero reveal and the waves.
- Respect `prefers-reduced-motion` for any new animation.
- Missing media must never break the page: use `Photo`, and treat missing audio as "coming soon".
- Browsers block autoplay with sound, so the tune starts on load only if allowed, otherwise on the first click, tap or key.

## Working efficiently (saves tokens)
- Start from the structure above. Do not list or read the whole tree.
- Never open `package-lock.json`, `node_modules/`, `build/` or image/audio files. They are denied in `.claude/settings.json`.
- Use search to find a class or string, then read only that line range of the file.
- Make targeted edits (replace a block), not whole-file rewrites. Batch related edits in one pass.
- Data change = edit `artist.js` and stop. Do not touch components for copy or link changes.
- Do not restate or re-explain code that was not changed. Keep replies short: what changed, what to do next.
- Ask one question only when blocked. Otherwise pick the sensible default and say what you assumed.

## Verification
- If `npm install` is not possible (no network), check JSX syntax with the TypeScript compiler (`tsc --noEmit --jsx react-jsx --allowJs --skipLibCheck`) and confirm CSS braces balance.
- Look at the result in the browser for layout work. Type checks do not prove it looks right.

## Git
- Small commits, one change each, present tense: `Add gallery photo`, `Fix nav on mobile`.
- Branch for anything experimental: `git checkout -b <name>`.
- Never commit `node_modules/` or `build/` (already in `.gitignore`).
