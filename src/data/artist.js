// Everything on the site is edited here. Set a value to '' (or null) to hide or grey it out.

export const artist = {
  name: 'BaggytheScribe',
  tagline: 'Rhythm and Poetry artist',
  birthName: 'Bismark Boakye Kwabena Marfo',
  pullQuote: 'Genre is a cage that I refuse to put myself in.',

  // Put the photo files in /public/images with these names. Until then a placeholder shows.
  heroImage: '/images/hero.jpg',

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

  gallery: ['/images/gallery-1.jpg', '/images/gallery-2.jpg', '/images/gallery-3.jpg', '/images/gallery-4.jpg', '/images/gallery-5.jpg', '/images/gallery-6.jpg'],

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

  // Optional background tune. Drop an mp3 at /public/audio/background-tune.mp3
  backgroundTune: '/audio/background-tune.mp3',
};
