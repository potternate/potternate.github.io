// gitprofile.config.js

const config = {
  github: {
    username: 'potternate', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'natex',
    twitter: 'peepthispic',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'natepotter35',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'natepotter35@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'AWS',
    'Python',
    'Java',
    'Git',
    'Linux',
    'Tableau',
    'Docker',
    'Snowflake',
    'Terraform',
    'Spark',
    'Kubernetes',
    'HTML',
    'CSS',
  ],
  experiences: [
    {
      company: 'Topcon Positioning Systems',
      position: 'Data Engineer Intern',
      from: 'May 2022',
      to: 'August 2022',
      companyLink: 'https://www.topconpositioning.com/',
    },
    {
      company: 'Build Group',
      position: 'Engineer Intern',
      from: 'May 2021',
      to: 'August 2021',
      companyLink: 'https://www.buildgc.com',
    },
  ],
  certifications: [
    {
      name: 'AWS',
      body: 'Solutions Architect Associate',
      year: '',
      link: 'https://www.credly.com/badges/e8828d56-7e10-45ae-b769-1318ad32e490'
    },
    {
      name: 'AWS',
      body: 'Cloud Practitioner',
      year: '',
      link: 'https://www.credly.com/badges/2c903953-c747-4dbd-bf63-b9e0e049e3f6'
    },
  ],
  education: [
    {
      institution: 'University of Wisconsin - Madison',
      degree: 'B.S. Data Science',
      from: '2018',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Website Development',
      description:
        'I built a website for a valet company using HTML, CSS, and JavaScript.',
      imageUrl: 'https://drive.google.com/file/d/1HbUd93GjlCiUKMucxArhSo00Toyw71mU/view?usp=sharing',
      link: 'https://precision-parking-valet.web.app',
    },
    {
      title: 'Spotify Analysis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'natepotter35', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

};

export default config;
