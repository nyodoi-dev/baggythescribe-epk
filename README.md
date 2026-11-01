# BaggytheScribe EPK

Dark grey and light orange press kit site (React).

## Edit the content
Everything lives in `src/data/artist.js`: bio, tracks, streaming links, YouTube video id, press files and booking email.

## Add media
- Photos: the five supplied photos are already in `public/images`. To add more, drop a file there and add a line to `gallery` in `artist.js`
- Background tune: put `background-tune.mp4` in `public/audio` (visitors press play, browsers block autoplay)
- Press files: add to `public/press` and set the `file` path in `artist.js`

## Run
npm install, then npm start. Build with npm run build.
