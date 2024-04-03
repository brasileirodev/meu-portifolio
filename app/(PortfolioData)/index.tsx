// PortfolioData.tsx
import { IProject, ISkill, IExperience, IEducation,IProfile } from '../types';

export const profile: IProfile = {
  name: 'Marcel Brasileiro Leão',
  role: 'Software Engineering Analyst',
  about: `I'm a Senior Front-End Developer specializing in React, with over 4 years of experience. I continuously seek to enhance my skills and contribute innovative solutions that improve the products and processes of the companies I work for. My expertise lies in developing advanced web solutions, focusing on efficiency and user experience. Currently, I'm looking for opportunities where I can apply my knowledge to create leading web solutions in the market.`,
  email: 'brasileirodev@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/marcel-brasileiro/',
  github: 'https://github.com/brasileirodev',
  contact: '+55 21 98672-8152',
  city: 'Rio de Janeiro – RJ/Brazil',
  languages: ['Portuguese (Native)', 'English (Bilingual)'],
  strengths: [
    'Advanced Front-End Development with React (React 18 e Vite)',
    'State Management Expertise (Redux, Context API, MobX)',
    'Responsive UI Design (StyledComponent, Tailwind CSS)',
    'Full-Stack Development (NodeJS, Express, MongoDB, Oracle, PostgreSQL)',
    'Continuous Integration/Continuous Deployment (CI/CD) Practices (Docker, AWS, Azure DevOps, CodePipeline, GitFlow)',
    'Comprehensive Testing Strategies (Jest, Cypress, ViTest)',
    'Web Development Tools Proficiency (ReactQuery, Axios, React-use-WebSocket)',
    'Project Lifecycle Management (from client consultation to solution deployment)',
    'Strategic Planning and Business Analysis',
    'Communication, Leadership, and Team Collaboration'
  ],
};

export const projects: IProject[] = [
  {
    title: 'Renova',
    technologies: ['React', 'Node.js', 'Styled Components', 'REST API'],
    imageSrc: 'https://www.handtalk.me/br/wp-content/uploads/sites/8/2018/11/capa-blog-2.png',
    githubLink: 'https://github.com/renova/projeto',
    deployLink: 'https://renova.com',
  },
  {
    title: 'DrogStore MVP',
    technologies: ['React', 'Node.js', 'Styled Components'],
    imageSrc: 'https://www.handtalk.me/br/wp-content/uploads/sites/8/2018/11/capa-blog-2.png',
    githubLink: 'https://github.com/drogstore/mvp',
    deployLink: 'https://drogstoremvp.com',
  },
  {
    title: 'DrogStore System',
    technologies: ['React', 'Redux', 'Styled Components'],
    imageSrc: 'https://www.handtalk.me/br/wp-content/uploads/sites/8/2018/11/capa-blog-2.png',
    githubLink: 'https://github.com/drogstore/system',
    deployLink: 'https://drogstoresystem.com',
  },
  {
    title: 'Payment Audit System',
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    imageSrc: 'https://www.handtalk.me/br/wp-content/uploads/sites/8/2018/11/capa-blog-2.png',
    githubLink: 'https://github.com/paymentaudit/system',
    deployLink: 'https://paymentauditsystem.com',
  },
  // ... continue com outros projetos conforme necessário
];

export const skills: ISkill[] = [
  { name: 'ReactJS', experience: '5 years' },
  { name: 'NodeJs', experience: '3 years' },
  { name: 'NextJs', experience: '1 year' },
  { name: 'NestJS', experience: '3 years' },
  { name: 'JavaScript', experience: '5 years' },
  { name: 'Express', experience: '3 years' },
  { name: 'TypeScript', experience: '4 years' },
  { name: 'Docker', experience: '2 years' },
  { name: 'Jest', experience: '5 years' },
  { name: 'Cypress', experience: '2 years' },
  { name: 'Redux', experience: '1 year' },
  { name: 'PostgreSQL', experience: '3 years' },
  { name: 'ReactQuery', experience: '2 years' },
  { name: 'MongoDB', experience: '2 years' },
  { name: 'StyledComponent', experience: '5 years' },
  { name: 'API Rest', experience: '3 years' },
  { name: 'CodePipeline', experience: '3 years' },
  { name: 'GitFlow', experience: '3 years' },
];

export const experiences: IExperience[] = [
  {
    role: 'Software Engineering Analyst',
    company: 'Grupo DPSP',
    description: 'Led the development of an MVP integrating the government-subsidized Popular Pharmacy product sales system. This phase was key for technology and concept validation before finalizing the system architecture.',
    period: 'August 2022 – Current',
  },
  {
    role: 'Back-End Development Analyst | NodeJS',
    company: 'Reply',
    description: 'Focused on back-end development and database management, ensuring system reliability in a high-traffic system.',
    period: 'March 2022 - August 2022',
  },
  {
    role: 'FullStack Software Engineer | React | NodeJS | FullStack',
    company: 'Avanade',
    description: 'Integral role in full-cycle development, from planning to deployment, enhancing user experience and operational efficiency for Yduqs.',
    period: 'March 2021 - March 2022',
  },
  {
    role: 'Software Engineer Freelance | React | NodeJS | FullStack',
    company: 'BrasileiroDev',
    description: 'Managed full project lifecycle, from client consultation to technical solution deployment, developing e-commerce platforms and institutional websites.',
    period: 'February 2020 - March 2021',
  },
  // ... continue com outras experiências conforme necessário
];

export const education: IEducation[] = [
  {
    institution: 'University of Computer Science',
    degree: 'Computer Science Degree',
    period: 'Jan 2023 – Dec 2024',
  },
  {
    institution: 'Rocketseat',
    degree: 'React & Node.js Bootcamp',
    period: 'Jan 2018 – Dec 2019',
  },
  // ... continue com outras formações educacionais conforme necessário
];
