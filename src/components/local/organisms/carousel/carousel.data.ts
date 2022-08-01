type TProject = {
  title: string;
  description: string;
  languages?: Array<string>;
  technologies?: Array<string>;
  tools?: Array<string>;
  images?: Array<string>;
  link?: string;
};

const projects: Array<TProject> = [
  {
    title: 'Tabpik',
    description:
      'Tabpik is a tab manager that lets you organize your tabs' +
      ' by topics, with the purpose of continuing the use of ' +
      'those tabs across devices and for later use',
    languages: [
      'Typescript',
      'Javascript',
      'HTML',
      // "Bash",
      'SCSS',
    ],
    technologies: [
      'Angular',
      'Chrome Extension API',
      'Angular Material',
      'RxJS',
    ],
    tools: [
      'Chrome Developer Tools',
      'Zeplin',
      'Photoshop',
      'Webstorm',
      // "Ubuntu"
    ],
    images: ['tabpikOne', 'tabpikTwo', 'tabpikThree'],
    link: '#',
  },
  {
    title: 'Project Num 2',
    description:
      'Tabpik is a tab manager that lets you organize your tabs' +
      ' by topics, with the purpose of continuing the use of ' +
      'those tabs across devices and for later use',
    languages: [
      'Typescript',
      'Javascript',
      'HTML',
      // "Bash",
      'SCSS',
    ],
    technologies: [
      'Angular',
      'Chrome Extension API',
      'Angular Material',
      'RxJS',
    ],
    tools: [
      'Chrome Developer Tools',
      'Zeplin',
      'Photoshop',
      'Webstorm',
      // "Ubuntu"
    ],
    images: ['tabpikOne', 'tabpikTwo', 'tabpikThree'],
    link: '#',
  },
  {
    title: 'Project Num 3',
    description:
      'Tabpik is a tab manager that lets you organize your tabs' +
      ' by topics, with the purpose of continuing the use of ' +
      'those tabs across devices and for later use',
    languages: [
      'Typescript',
      'Javascript',
      'HTML',
      // "Bash",
      'SCSS',
    ],
    technologies: [
      'Angular',
      'Chrome Extension API',
      'Angular Material',
      'RxJS',
    ],
    tools: ['Chrome Developer Tools', 'Zeplin', 'Photoshop', 'Webstorm'],
    images: ['tabpikOne', 'tabpikTwo', 'tabpikThree'],
    link: '#',
  },
];

export default projects;
