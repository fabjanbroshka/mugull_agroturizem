/* ============================================================
   MUGULL AGROTURIZEM — Site copy
   Edit strings here; components import from this file.
   ============================================================ */

export const site = {
  name:    'Mugull Agroturizem',
  tagline: 'Where culinary heritage meets refinement.',
  phone:   '069 608 5591',
  phoneHref: 'tel:0696085591',
  reservationUrl: 'https://seatme.al/r/mugull-agroturizem',
  email:   'hello@mugull.al',
  address: 'Fshat Mugull, Shkodër, Albania',
  city:    'Shkodër',
  distanceFromCity: '2 h from Tirana',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.761819515898!2d19.7026808!3d41.219157200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135025d299b7f01d%3A0x9bb48e81ff5f35a8!2sMUGULL!5e1!3m2!1sen!2s!4v1780668555451!5m2!1sen!2s',
  hours: 'Monday – Sunday  ·  12:00 – 22:00',
  social: {
    instagram: 'https://instagram.com',
    facebook:  'https://facebook.com',
  },
};

export const nav = {
  links: [
    { label: 'About',      href: '/about'   },
    { label: 'Menu',       href: '/menu'    },
    { label: 'Gallery',    href: '/gallery' },
    { label: 'Events',     href: '/events'  },
    { label: 'Contact',    href: '/contact' },
  ],
  cta: 'Reserve',
};

export const hero = {
  eyebrow: '',
  headline: 'From farm\nto table',
  subtext: 'Fresh ingredients, traditional recipes, mountain air.',
  ctaPrimary:   { label: 'Reserve a table', href: '#book'  },
  ctaSecondary: { label: 'Explore the farm', href: '#about' },
  slides: [
    {
      // Desktop: ~2560×1440 (16:9) | Mobile: ~1080×1350 (4:5)
      srcDesktop: '/image1D.jpg',
      srcMobile:  '/image2M.jpg',
      alt: 'The Mugull farm at golden hour — rolling green hills and terraced land',
    },
    {
      srcDesktop: '/image3D.jpg',
      srcMobile:  '/Image7M.jpg',
      alt: 'Freshly harvested vegetables, herbs and wild greens from the farm garden',
    },
    {
      srcDesktop: '/image4D.jpg',
      srcMobile:  '/Image8M.jpg',
      alt: 'Signature slow-cooked lamb with roasted vegetables and mountain herbs',
    },
    {
      srcDesktop: '/Image5D.jpg',
      srcMobile:  '/image2M.jpg',
      alt: 'Guests dining on the open terrace with mountain views in the background',
    },
  ],
};

export const story = {
  label:    'Our story',
  headline: 'Where the mountains feed the table',
  body: [
    'Three generations ago, our family settled in the highland village of Mugull with a simple belief: that the best food comes from land you tend with your own hands. Today, nothing has changed — except there is more room at the table.',
    'Every ingredient that reaches your plate was grown, picked, or raised within walking distance. Albanian tradition, a touch of Italian warmth, and the quiet magic of mountain air do the rest.',
  ],
  cta: { label: 'Reserve a table', href: '#book' },
  // Image: ~1200×900 — farm landscape or family cooking scene
  image: { src: '/Image6D.jpg', alt: 'The farm family preparing a meal in the open kitchen' },
};

export const offerings = {
  label:    'What we offer',
  headline: 'A complete rural experience',
  items: [
    { image: { src: '/image4D.jpg',  alt: 'Dishes served at the farm restaurant' },       title: 'Restaurant',      desc: 'Traditional Albanian and Italian dishes cooked with ingredients picked that morning.' },
    { image: { src: '/image1D.jpg',  alt: 'Walking through the farm fields' },            title: 'Farm visits',     desc: 'Walk the land, meet the animals, and see where your food begins its journey.' },
    { image: { src: '/image3D.jpg',  alt: 'Rustic guesthouse surrounded by nature' },     title: 'Accommodation',   desc: 'Stay the night in our rustic guesthouses and wake to birdsong and mountain mist.' },
    { image: { src: '/Image5D.jpg',  alt: 'Private event setup at the farm' },            title: 'Private events',  desc: 'Weddings, birthdays, corporate retreats — we host them all with heart and detail.' },
    { image: { src: '/Image6D.jpg',  alt: 'Cooking class in the farm kitchen' },          title: 'Cooking classes', desc: 'Learn the recipes that have lived in our family for generations. Aprons provided.' },
  ],
};

export const specialties = {
  label:    'Signature dishes',
  headline: 'What we cook',
  items: [
    {
      name: 'Tavë Dheu',
      desc: 'Slow-baked lamb shoulder with yoghurt, eggs, and butter. The dish that built our reputation.',
      // Image: ~1080×1080
      image: { src: '/image4D.jpg', alt: 'Tavë Dheu — baked lamb in a clay pot' },
    },
    {
      name: 'Pasta e Bjeshkës',
      desc: 'Hand-rolled pasta with wild mushrooms, sage butter, and aged pecorino from the valley below.',
      image: { src: '/Image5D.jpg', alt: 'Pasta e Bjeshkës — hand-rolled pasta with wild mushrooms' },
    },
    {
      name: 'Trofta e Lumit',
      desc: 'River trout pan-fried in olive oil, garlic, and lemon from our own orchard. Served the same day it is caught.',
      image: { src: '/Image6D.jpg', alt: 'River trout with herbs and lemon on a wooden board' },
    },
  ],
};

export const testimonials = {
  label:    'What guests say',
  headline: 'Straight from the table',
  items: [
    {
      quote: 'The best meal Ive had in Albania — maybe anywhere. The lamb was unreal and the view from the terrace made it completely magical.',
      author: 'Sarah M.',
      source: 'Google Reviews',
    },
    {
      quote: 'We hosted our wedding here and the team handled everything perfectly. The food, the setting, the warmth of the family — absolutely unforgettable.',
      author: 'Luca & Elena B.',
      source: 'TripAdvisor',
    },
    {
      quote: 'I came for lunch and stayed until sunset. The fresh pasta alone is worth the drive from Tirana. Already planning my next visit.',
      author: 'Fjolla K.',
      source: 'Google Reviews',
    },
  ],
};

export const events = {
  label:    'Private events',
  headline: 'Celebrate with us',
  subtext:  'From intimate birthday dinners to grand wedding receptions, Mugull opens its doors for your most special moments. Our team handles every detail — you just bring the people you love.',
  cta: { label: 'Enquire about an event', href: '#book' },
  items: [
    { image: { src: '/Image7M.jpg',  alt: 'Birthday celebration table set up at the farm' },     title: 'Birthday celebrations', desc: 'Private dining space, custom menu, and a cake baked in our kitchen.' },
    { image: { src: '/image1D.jpg',  alt: 'Wedding reception in the mountain setting' },          title: 'Wedding receptions',    desc: 'Intimate ceremonies and grand receptions with mountains as your backdrop.' },
    { image: { src: '/image3D.jpg',  alt: 'Corporate retreat dinner in nature' },                 title: 'Corporate retreats',    desc: 'Team dinners and away-days in a setting that sparks real conversation.' },
    { image: { src: '/Image8M.jpg',  alt: 'Family gathering around a long outdoor table' },       title: 'Family gatherings',     desc: 'Reunions, christenings, anniversaries — our long tables were made for this.' },
  ],
};

export const location = {
  label:    'Find us',
  headline: 'Getting here',
  address:  'Fshat Mugull, Shkodër, Albania',
  distance: '2 h from Tirana',
  directions: 'Take the road north from Shkodër toward the Accursed Mountains. Follow signs for Fshat Mugull — look for the stone gate on the left.',
  phone:    '069 608 5591',
  phoneHref: 'tel:0696085591',
  email:    'hello@mugull.al',
};

export const cta = {
  headline:   'Ready for a real meal?',
  subtext:    'Reserve your table online or give us a call. We confirm within a few hours.',
  reserve:    { label: 'Reserve a table', href: 'https://seatme.al/r/mugull-agroturizem' },
  phone:      { label: '069 608 5591',    href: 'tel:0696085591' },
};

export const footer = {
  hours:    'Mon – Sun  ·  12:00 – 22:00',
  phone:    '069 608 5591',
  email:    'hello@mugull.al',
  address:  'Fshat Mugull, Shkodër, Albania',
  copyright: `© ${new Date().getFullYear()} Mugull Agroturizem. All rights reserved.`,
};
