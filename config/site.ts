export const siteConfig = {
  name: 'Urban Sports Collective München e. V.',
  shortName: 'USC München',
  statusSuffix: 'e. V.',
  address: {
    street: '[STRASSE]',
    zip: '[PLZ]',
    city: 'München'
  },
  contact: {
    email: '[EMAIL]',
    phone: '[TELEFON]'
  },
  board: ['Paul Jonathan Hajek', 'Vincent Kees'],
  register: {
    court: 'Amtsgericht München',
    number: '[noch leer]'
  },
  hosting: {
    provider: '[HOSTING-ANBIETER]',
    location: '[SERVERSTANDORT]'
  },
  training: {
    day: 'Mittwoch',
    time: '19:30 – 21:30 Uhr',
    venue: 'Sporthalle [PLATZHALTER]',
    address: '[HALLE-ADRESSE]'
  },
  membership: {
    founding: '56 € / Jahr (Gründungsmitglieder)',
    standardYear: '85 € / Jahr',
    standardMonthly: '10 € / Monat (Mindestlaufzeit 3 Monate)',
    cancellation: 'Kündigung schriftlich oder per E-Mail, Frist: [PLATZHALTER]. Es gilt die Satzung.'
  },
  documents: {
    statute: '/documents/satzung.pdf',
    membershipForm: '/documents/beitritt.pdf',
    contributionRules: '/documents/beitragsordnung.pdf',
    privacy: '/documents/datenschutzhinweise.pdf'
  },
  social: {
    instagram: '',
    facebook: '',
    linkedin: ''
  },
  seo: {
    baseUrl: 'https://usc.example',
    description:
      'Urban Sports Collective München e. V. – moderner Sportverein in München mit Hallentraining, klaren Strukturen und transparenter Kommunikation.',
    keywords: ['Sportverein', 'München', 'Hallensport', 'Training', 'Mitgliedschaft']
  }
};

export type SiteConfig = typeof siteConfig;
