// Everything on the site is edited here. Set a value to '' (or null) to hide or grey it out.

export const artist = {
  name: 'BaggytheScribe',
  tagline: 'Rhythm and Poetry artist',
  birthName: 'Bismark Boakye Kwabena Marfo',
  pullQuote: 'Genre is a cage that I refuse to put myself in.',

  // Put the photo files in /public/images with these names. Until then a placeholder shows.
  heroImage: '/images/hero.jpg',
  heroAlt: 'BaggytheScribe in a white jacket and layered chains, black and white portrait',

  bioLead: 'You\u2019re here? You\u2019re blessed.',
  bio: [
    'My parents named me Bismark Boakye Kwabena Marfo. I\u2019m their 3rd son. Destiny named me BaggytheScribe, I\u2019m her only son.',
    'As my name implies, I\u2019m the last of the Scribes of the Neteru but in this age, I came as a Rhythm and Poetry artist.',
    'Born into a family of music lovers, my own journey into that world was inevitable. I have seen, eaten, drank, walked, breathed and been music.',
    'I intend to live forever and so I document my life in my songs. Every song in my catalogue is a buildup from somewhere.',
    'Genre is a cage that I refuse to put myself in. I only put my reality on beats that fit my message. I hope you stick around long enough to say you witnessed my greatness.',
  ],

  // Streaming links: paste a URL to switch a platform on.
  streaming: [
    { label: 'Spotify', url: '' },
    { label: 'Apple Music', url: '' },
    { label: 'YouTube', url: '' },
    { label: 'Audiomack', url: '' },
  ],

  latestRelease: { title: 'Latest release title', info: 'Add the release date and format', cover: '/images/cover.jpg' },

  tracks: [
    { title: 'Track title', info: 'Release info' },
    { title: 'Track title', info: 'Release info' },
    { title: 'Track title', info: 'Release info' },
    { title: 'Track title', info: 'Release info' },
  ],

  // YouTube video id, e.g. 'dQw4w9WgXcQ'. Leave '' to show the placeholder frame.
  videoId: '',

  // Add more photos by dropping files in /public/images and adding a line here.
  gallery: [
    { src: '/images/gallery-1.jpg', alt: 'BaggytheScribe laughing, gold teeth in colour against a black and white frame' },
    { src: '/images/gallery-2.jpg', alt: 'BaggytheScribe in white, posing on a blue trunk' },
    { src: '/images/gallery-3.jpg', alt: 'BaggytheScribe by the water in black and white, wearing a cross chain' },
    { src: '/images/gallery-4.jpg', alt: 'Profile of BaggytheScribe looking down, in black and white' },
  ],

  // Private listening links, shown in the Private projects section.
  privateProjects: [
    { title: 'Private project', note: 'Listen on Untitled', url: 'https://untitled.stream/library/project/olPa2p6gydVbzHXXIXKmg' },
  ],

  // Files in /public/press. Set file to null until it exists.
  pressFiles: [
    { label: 'Artist bio', note: 'Plain text, ready to paste', file: '/press/BaggytheScribe-bio.txt' },
    { label: 'High-resolution photos', note: 'Zip of press photos', file: null },
    { label: 'Logo and artwork', note: 'PNG and SVG', file: null },
    { label: 'One-sheet', note: 'Single page PDF', file: null },
  ],

  contact: {
    email: 'your-email@example.com',
    socials: [
      { label: 'Instagram', url: '' },
      { label: 'X', url: '' },
      { label: 'TikTok', url: '' },
    ],
  },

  // Optional background tune. Drop your file at /public/audio/background-tune.mp4 (mp3 also works: change the extension below)
  backgroundTune: '/audio/background-tune.mp4',
  // true: starts on load if the browser allows it, otherwise on the visitor's first click, tap or key press.
  autoplayTune: true,
};
