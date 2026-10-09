export const experiences = {
  'smk-rus': {
    id: 'smk-rus',
    title: 'PPLG Major (Software & Game Development)',
    company: 'SMK Raden Umar Said Kudus',
    year: '2021 - 2024',
    desc: 'Learned the fundamentals of software engineering, game development, and modern programming paradigms. Simultaneously (2022 - 2023), I worked as a Mobile & Web Developer, building real-time chat applications with Firebase, Google Sign-In auth, and a Laravel-based admin system.',
    category: 'EDUCATION',
    color: 'var(--yellow)',
    photos: [
      { url: 'https://placehold.co/800x400/FFD200/111?text=SMK+RUS+Photo+1', title: 'School Activities', subtitle: 'Learning software development' },
      { url: 'https://placehold.co/800x400/FFD200/111?text=SMK+RUS+Photo+2', title: 'Graduation', subtitle: 'Class of 2024' },
      { url: 'https://placehold.co/800x400/FF66B2/111?text=Internship+Project', title: 'Project Demo', subtitle: 'Real-time chat implementation' }
    ],
    portfolio: [
      {
        title: 'Real-time Chat App',
        desc: 'Developed a robust chat application using Firebase and secure Google Sign-In auth.',
        image: 'https://placehold.co/600x400/FFD200/111?text=Chat+App'
      },
      {
        title: 'Laravel Admin Panel',
        desc: 'Built a comprehensive content management system and dashboard using Laravel.',
        image: 'https://placehold.co/600x400/FF66B2/111?text=Admin+System'
      }
    ]
  },
  'nocola': {
    id: 'nocola',
    title: 'UI/UX Designer & Mobile Developer',
    company: 'PT Nocola IOT Solution',
    year: '2023 - 2024',
    desc: 'Designed user-centered interfaces and developed mobile apps using Ionic, collaborating with backend teams for API integration.',
    category: 'WORK EXPERIENCE',
    color: 'var(--green)',
    photos: [
      { url: 'https://placehold.co/800x400/00E676/111?text=Nocola+Office', title: 'Working at Nocola', subtitle: 'UI/UX Design Session' },
      { url: 'https://placehold.co/800x400/00E676/111?text=App+Demo', title: 'Ionic App', subtitle: 'Mobile front-end development' }
    ]
  },
  'binus': {
    id: 'binus',
    title: 'Computer Science Major (Cyber Security Track)',
    company: 'Bina Nusantara University',
    year: '2024 - Present',
    desc: 'Pursuing a degree in Computer Science with a specialized focus on Cyber Security and system vulnerabilities.',
    category: 'EDUCATION',
    color: 'var(--blue)',
    photos: [
      { url: 'https://placehold.co/800x400/3366FF/111?text=Binus+Campus', title: 'Binus Malang', subtitle: 'Campus Life' }
    ]
  },
  'gdg': {
    id: 'gdg',
    title: 'Co-Lead & Core Team (Creative Design)',
    company: 'Google Developer Group Binus Malang',
    year: '2024 - Present',
    desc: 'Led event roadmaps, coordinated cross-divisional collaborations, and developed visual identities.',
    category: 'ORGANIZATION',
    color: 'var(--orange)',
    photos: [
      { url: 'https://placehold.co/800x400/FF7B00/111?text=GDG+Event', title: 'GDG Meetup', subtitle: 'Tech community gathering' },
      { url: 'https://placehold.co/800x400/FF7B00/111?text=Core+Team', title: 'Core Team', subtitle: 'Planning the next big event' }
    ]
  }
};

export const experienceOrder = ['smk-rus', 'nocola', 'binus', 'gdg'];
