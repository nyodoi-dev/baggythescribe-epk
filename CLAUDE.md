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
    ListenMenu.jsx      hero "Listen now" dropdown, built from artist.streaming
    OutSoon.jsx         "Out soon" upcoming release block inside Music (artist.outSoon, null hides it)
    GloryRoad.jsx       Glory Road story, credits and press-release pages inside Music
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
Avoid all 30 common 'vibecoded' AI design clichés (no glowing orbs, bento grids, glassmorphism, or untouched shadcn defaults)."


## Working efficiently (saves tokens)
- Start from the structure above. Do not list or read the whole tree.
- Never open `package-lock.json`, `node_modules/`, `build/` or image/audio files. They are denied in `.claude/settings.json`.
- Use search to find a class or string, then read only that line range of the file.
- Make targeted edits (replace a block), not whole-file rewrites. Batch related edits in one pass.
- Data change = edit `artist.js` and stop. Do not touch components for copy or link changes.
- Do not restate or re-explain code that was not changed. Keep replies short: what changed, what to do next.
- Ask one question only when blocked. Otherwise pick the sensible default and say what you assumed.

## Project facts
- Music section order: latest release + discography, Out soon, Glory Road, then the YouTube video (`videoId` = the id only, not the full URL).
- Glory Road is a single. Kie Lawaa Wowa (2024, 7 songs) is the album. Discography source: Spotify artist 55aoaq10q2CaknbAvVjEKy.
- Press downloads in `public/press`: photo zip (10 best photos, max 3000px) and a one-page one-sheet PDF. The gallery shows fewer photos than the zip.
- The one-sheet is HTML rendered to PDF with headless Edge (`--headless=new --print-to-pdf`, own `--user-data-dir`, wait with a timeout). Regenerate it when bio, releases, press or contact change.
- CI: `.github/workflows/ci.yml` runs tests and build with `CI=true`, so lint warnings fail the build. Check with `CI=true npm run build`.

## Tooling gotchas (Windows)
- Images: resize/crop with PowerShell System.Drawing. Cast to `[double]` in `[math]::Min` or it picks the int overload and returns 0. Dispose images (or `GC.Collect()`) before replacing a file, or it stays locked.
- PowerShell swallows `--` in `npm test -- --watchAll=false`; run it from bash.
- Headless screenshots ignore `#hash` and the 100vh hero fills the frame; to see one section, use a temporary page that hides the others, then delete it.
- Notion pages return an empty JS shell to fetchers; read public ones via `POST <site>/api/v3/loadCachedPageChunk` with the page id.

## Model routing (which model for which job)
Turn effort up before switching models; switch only when the model had full context and was still wrong.
- Haiku, low effort: codebase search, renames, copy and link edits in `artist.js`. Read the diff.
- Sonnet, medium: building a planned feature, writing tests.
- Opus, medium to high: UI and layout work, hard bugs (max effort when stuck), code review by a different model from the writer.
- Fable, high to xhigh: planning big changes, security audits.
- Do not switch models mid-task (the prompt cache is per model, so the next request pays for the whole history). Switch between tasks or hand work to a subagent.
- After one failed cheap attempt, move up a model instead of retrying.
- Subagents can pin a model and effort in `.claude/agents/<name>.md` frontmatter (`model: haiku|sonnet|opus|fable`, `effort: low..max`). `/model` and `/effort` change the session.

## Verification
- If `npm install` is not possible (no network), check JSX syntax with the TypeScript compiler (`tsc --noEmit --jsx react-jsx --allowJs --skipLibCheck`) and confirm CSS braces balance.
- Look at the result in the browser for layout work. Type checks do not prove it looks right.

## Git
- Small commits, one change each, present tense: `Add gallery photo`, `Fix nav on mobile`.
- Branch for anything experimental: `git checkout -b <name>`.
- Never commit `node_modules/` or `build/` (already in `.gitignore`).
