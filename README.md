# BaggytheScribe EPK

Dark grey and light orange press kit site (React).

## Edit the content
Everything lives in `src/data/artist.js`: bio, tracks, streaming links, YouTube video id, press files and booking email.

## Add media
- Photos: put `hero.jpg`, `cover.jpg`, `gallery-1.jpg` to `gallery-6.jpg` in `public/images`
- Background tune: put `background-tune.mp3` in `public/audio` (visitors press play, browsers block autoplay)
- Press files: add to `public/press` and set the `file` path in `artist.js`

## Run
npm install, then npm start. Build with npm run build.
