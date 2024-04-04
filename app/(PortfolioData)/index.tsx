// PortfolioData.tsx
import { IProject, ISkill, IExperience, IEducation, IProfile } from '../types';

const profilePT_BR: IProfile = {
  name: 'Marcel Brasileiro Leão',
  role: 'Analista de Engenharia de Software',
  about: `Sou Desenvolvedor Front-End Sênior especializado em React, com mais de 4 anos de experiência. Busco constantemente aprimorar minhas habilidades e contribuir com soluções inovadoras que melhorem os produtos e processos das empresas para as quais trabalho. Minha especialidade está no desenvolvimento de soluções web avançadas, focando na eficiência e na experiência do usuário. Atualmente, estou em busca de oportunidades onde possa aplicar meu conhecimento para criar soluções web líderes no mercado.`,
  email: 'brasileirodev@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/marcel-brasileiro/',
  github: 'https://github.com/brasileirodev',
  contact: '+55 21 98672-8152',
  city: 'Rio de Janeiro – RJ/Brasil',
  languages: ['Português (Nativo)', 'Inglês (Fluente)'],
  strengths: [
    'Desenvolvimento Avançado Front-End com React (React 18 e Vite)',
    'Experiência em Gerenciamento de Estado (Redux, Context API, MobX)',
    'Design de UI Responsivo (StyledComponent, Tailwind CSS)',
    'Desenvolvimento Full-Stack (NodeJS, Express, MongoDB, Oracle, PostgreSQL)',
    'Práticas de Integração Contínua/Implantação Contínua (CI/CD) (Docker, AWS, Azure DevOps, CodePipeline, GitFlow)',
    'Estratégias Abrangentes de Testes (Jest, Cypress, ViTest)',
    'Proficiência em Ferramentas de Desenvolvimento Web (ReactQuery, Axios, React-use-WebSocket)',
    'Gestão do Ciclo de Vida do Projeto (da consulta do cliente à implantação da solução)',
    'Planejamento Estratégico e Análise de Negócios',
    'Comunicação, Liderança e Colaboração em Equipe'
  ],
};

const profileEN: IProfile = {
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

const projectsPT_BR: IProject[] = [
  {
    title: 'Integração do MVP do Sistema de Vendas de Farmácia',
    technologies: ['React 18', 'Vite', 'Context API', 'RESTful API', 'StyledComponent', 'Axios'],
    imageSrc: '/assets/MVP_FP.jpg',
    links: [
      {
        label: 'Figma',
        url: 'https://www.figma.com/proto/nll4Du3xfax2CdWjdndnvh/Farm%C3%A1cia-Popular-(MVP)?type=design&node-id=2239-14909&t=1vVuXeP8tGIZ7iqN-0&scaling=scale-down&page-id=1201%3A23532&starting-point-node-id=2207%3A15482',
        color: 'text-green-500 hover:text-green-700',
      },
    ],
    details: {
      label: 'Detalhes',
      value: 'Liderou o desenvolvimento de um MVP integrando o sistema de vendas do produto Farmácia Popular subsidiada pelo governo. Esta fase foi fundamental para validação de tecnologia e conceito antes de finalizar a arquitetura do sistema.',
    },
    outcome: {
      label: 'Resultado',
      value: 'Validou com sucesso a integração do sistema, garantindo a viabilidade operacional nas lojas e estabelecendo uma base sólida para a próxima fase do projeto com uma arquitetura final bem planejada.',
    },
  },
  {
    title: 'Pharmacy Sales Release',
    technologies: ['React 18', 'Vite', 'Context API', 'MobX', 'StyledComponent', 'React-use-WebSocket', 'ReactQuery', 'Axios', 'CodePipeline', 'GitFlow', 'Jest', 'Cypress', 'ViTest'],
    imageSrc: '/assets/Release_pharmacy.jpg',
    links: [
      {
        label: 'Figma',
        url: 'https://www.figma.com/proto/bSDYz5YyaBXS9UDI7cJS7J/balcao-2.0-webapp-%5Btailwind%5D?type=design&node-id=1429-50926&scaling=min-zoom&page-id=1429%3A48767&starting-point-node-id=1429%3A49546',
        color: 'text-green-500 hover:text-green-700',
      },
    ],
    details: {
      label: 'Detalhes',
      value: 'Papel integral no desenvolvimento de ciclo completo, desde o planejamento até a implantação, melhorando a experiência do usuário e a eficiência operacional para a Yduqs.',
    },
    outcome: {
      label: 'Resultado',
      value: 'Melhorou a eficiência e escalabilidade das aplicações web.',
    },
  },
  {
    title: 'Suporte N3 para Sistema de Alto Tráfego',
    technologies: ['Node.js', 'NestJS', 'MongoDB', 'Oracle', 'PostgreSQL', 'Docker', 'AWS', 'Azure DevOps', 'CI/CD'],
    imageSrc: '/assets/cerc.jpg',
    links: [
      {
        label: 'Site do Projeto',
        url: 'https://conteudo.cerc.inf.br/recebiveis-de-cartoes-cerc',
        color: 'text-blue-500 hover:text-blue-700',
      },
    ],
    details: {
      label: 'Detalhes',
      value: 'Focado no desenvolvimento de back-end e gerenciamento de banco de dados, garantindo a confiabilidade do sistema em um sistema de alto tráfego.',
    },
    outcome: {
      label: 'Resultado',
      value: 'Aprimorou a qualidade do código e o desempenho do sistema em um ambiente de CI/CD.',
    },
  },
  {
    title: 'Sistema de gestão de matricula Universidade Yduqs',
    technologies: ['React', 'Node.js', 'Redux', 'ReactQuery', 'StyledComponent', 'MongoDB', 'Oracle', 'PostgreSQL', 'Docker', 'AWS', 'Azure DevOps', 'GIT', 'CodePipeline', 'GitFlow', 'Jest', 'Cypress'],
    imageSrc: 'https://www.handtalk.me/br/wp-content/uploads/sites/8/2018/11/capa-blog-2.png',
    links: [
      {
        label: 'Vídeo de descrição do projeto',
        url: 'https://www.youtube.com/watch?v=v8qFUFOKogk&t=0s',
        color: 'text-red-500 hover:text-red-700',
      },
    ],
    details: {
      label: 'Detalhes',
      value: 'Papel integral no desenvolvimento de ciclo completo, desde o planejamento até a implantação, melhorando a experiência do usuário e a eficiência operacional para a Yduqs.',
    },
    outcome: {
      label: 'Resultado',
      value: 'Entregou uma solução de software de alta qualidade, melhorando o processo de matrícula.',
    },
  },
  {
    title: 'Meu Site de Portfólio',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    imageSrc: '/assets/meu_portifolio.jpg',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/brasileirodev/meu-portifolio',
        color: 'text-blue-500 hover:text-blue-700',
      },
      {
        label: 'Deploy',
        url: 'https://meu-portifolio-three-chi.vercel.app/',
        color: 'text-green-500 hover:text-green-700',
      },
    ],
    details: {
      label: 'Detalhes',
      value: 'Projetado e desenvolvido um site de portfólio pessoal usando React, TypeScript, Next.js e Tailwind CSS para exibir meus projetos, habilidades e experiência.',
    },
    outcome: {
      label: 'Resultado',
      value: 'Lançamento bem-sucedido do site de portfólio, recebendo feedback positivo de colegas e potenciais empregadores. Aumentou a visibilidade online e estabeleceu uma presença online profissional.',
    },
  },
];

const projectsEN: IProject[] = [
  {
    title: 'Pharmacy Sales System MVP Integration',
    technologies: ['React 18', 'Vite', 'Context API', 'RESTful API', 'StyledComponent', 'Axios'],
    imageSrc: '/assets/MVP_FP.jpg',
    links: [
      {
        label: 'Figma',
        url: 'https://www.figma.com/proto/nll4Du3xfax2CdWjdndnvh/Farm%C3%A1cia-Popular-(MVP)?type=design&node-id=2239-14909&t=1vVuXeP8tGIZ7iqN-0&scaling=scale-down&page-id=1201%3A23532&starting-point-node-id=2207%3A15482',
        color: 'text-green-500 hover:text-green-700',
      },
    ],
    details: {
      label: 'Details',
      value: 'Led the development of an MVP integrating the government-subsidized Popular Pharmacy product sales system. This phase was key for technology and concept validation before finalizing the system architecture.',
    },
    outcome: {
      label: 'Outcome',
      value: 'Successfully validated system integration, ensuring operational viability in stores and laying a solid foundation for the next project phase with a well-planned final architecture.',
    },
  },
  {
    title: 'Pharmacy Sales Release',
    technologies: ['React 18', 'Vite', 'Context API', 'MobX', 'StyledComponent', 'React-use-WebSocket', 'ReactQuery', 'Axios', 'CodePipeline', 'GitFlow', 'Jest', 'Cypress', 'ViTest'],
    imageSrc: '/assets/Release_pharmacy.jpg',
    links: [
      {
        label: 'Figma',
        url: 'https://www.figma.com/proto/bSDYz5YyaBXS9UDI7cJS7J/balcao-2.0-webapp-%5Btailwind%5D?type=design&node-id=1429-50926&scaling=min-zoom&page-id=1429%3A48767&starting-point-node-id=1429%3A49546',
        color: 'text-green-500 hover:text-green-700',
      },
    ],
    details: {
      label: 'Details',
      value: 'Integral role in full-cycle development, from planning to deployment, enhancing user experience and operational efficiency for Yduqs.',
    },
    outcome: {
      label: 'Outcome',
      value: 'Improved efficiency and scalability of web applications.',
    },
  },
  {
    title: 'N3 Support for High-Traffic System',
    technologies: ['Node.js', 'NestJS', 'MongoDB', 'Oracle', 'PostgreSQL', 'Docker', 'AWS', 'Azure DevOps', 'CI/CD'],
    imageSrc: '/assets/cerc.jpg',
    links: [
      {
        label: 'Project Site',
        url: 'https://conteudo.cerc.inf.br/recebiveis-de-cartoes-cerc',
        color: 'text-blue-500 hover:text-blue-700',
      },
    ],
    details: {
      label: 'Details',
      value: 'Focused on back-end development and database management, ensuring system reliability in a high-traffic system.',
    },
    outcome: {
      label: 'Outcome',
      value: 'Enhanced code quality and system performance in a CI/CD environment.',
    },
  },
  {
    title: 'Student Enrollment System Development for Yduqs University',
    technologies: ['React', 'Node.js', 'Redux', 'ReactQuery', 'StyledComponent', 'MongoDB', 'Oracle', 'PostgreSQL', 'Docker', 'AWS', 'Azure DevOps', 'GIT', 'CodePipeline', 'GitFlow', 'Jest', 'Cypress'],
    imageSrc: '/assets/renova.jpg',
    links: [
      {
        label: 'Project video description',
        url: 'https://www.youtube.com/watch?v=v8qFUFOKogk&t=0s',
        color: 'text-red-500 hover:text-red-700',
      },
    ],
    details: {
      label: 'Details',
      value: 'Integral role in full-cycle development, from planning to deployment, enhancing user experience and operational efficiency for Yduqs.',
    },
    outcome: {
      label: 'Outcome',
      value: 'Delivered a high-quality software solution, improving the enrollment process.',
    },
  },
  {
    title: 'My Portfolio Website',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    imageSrc: '/assets/meu_portifolio.jpg',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/brasileirodev/meu-portifolio',
        color: 'text-blue-500 hover:text-blue-700',
      },
      {
        label: 'Live Demo',
        url: 'https://meu-portifolio-three-chi.vercel.app/',
        color: 'text-green-500 hover:text-green-700',
      },
    ],
    details: {
      label: 'Details',
      value: 'Designed and developed a personal portfolio website using React, TypeScript, Next.js, and Tailwind CSS to showcase my projects, skills, and experience.',
    },
    outcome: {
      label: 'Outcome',
      value: 'Successfully launched the portfolio website, receiving positive feedback from peers and potential employers. Increased online visibility and established a professional online presence.',
    },
  },
];



const skillsPT_BR: ISkill[] = [
  { name: 'ReactJS', experience: '5 anos' },
  { name: 'NodeJs', experience: '3 anos' },
  { name: 'NextJs', experience: '1 ano' },
  { name: 'NestJS', experience: '3 anos' },
  { name: 'JavaScript', experience: '5 anos' },
  { name: 'Express', experience: '3 anos' },
  { name: 'TypeScript', experience: '4 anos' },
  { name: 'Docker', experience: '2 anos' },
  { name: 'Jest', experience: '5 anos' },
  { name: 'Cypress', experience: '2 anos' },
  { name: 'Redux', experience: '1 ano' },
  { name: 'PostgreSQL', experience: '3 anos' },
  { name: 'ReactQuery', experience: '2 anos' },
  { name: 'MongoDB', experience: '2 anos' },
  { name: 'StyledComponent', experience: '5 anos' },
  { name: 'API Rest', experience: '3 anos' },
  { name: 'CodePipeline', experience: '3 anos' },
  { name: 'GitFlow', experience: '3 anos' },
];

const skillsEN: ISkill[] = [
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

const experiencesPT_BR: IExperience[] = [
  {
    role: 'Analista de Engenharia de Software',
    company: 'Grupo DPSP',
    description: 'Liderou o desenvolvimento de um MVP integrando o sistema de vendas do produto Farmácia Popular subsidiada pelo governo. Esta fase foi fundamental para validação de tecnologia e conceito antes de finalizar a arquitetura do sistema.',
    period: 'Agosto de 2022 – Atual',
  },
  {
    role: 'Analista de Desenvolvimento Back-End | NodeJS',
    company: 'Reply',
    description: 'Focado no desenvolvimento de back-end e gerenciamento de banco de dados, garantindo a confiabilidade do sistema em um sistema de alto tráfego.',
    period: 'Março de 2022 - Agosto de 2022',
  },
  {
    role: 'Engenheiro de Software FullStack | React | NodeJS | FullStack',
    company: 'Avanade',
    description: 'Papel integral no desenvolvimento de ciclo completo, desde o planejamento até a implantação, melhorando a experiência do usuário e a eficiência operacional para a Yduqs.',
    period: 'Março de 2021 - Março de 2022',
  },
  {
    role: 'Engenheiro de Software Freelancer | React | NodeJS | FullStack',
    company: 'BrasileiroDev',
    description: 'Gerenciou o ciclo completo do projeto, desde a consulta do cliente até a implantação da solução técnica, desenvolvendo plataformas de comércio eletrônico e sites institucionais.',
    period: 'Fevereiro de 2020 - Março de 2021',
  },
];

const experiencesEN: IExperience[] = [
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
];

const educationPT_BR: IEducation[] = [
  {
    institution: 'Universidade de Ciência da Computação',
    degree: 'Bacharelado em Ciência da Computação',
    period: 'Jan 2023 – Dez 2027',
  },
  {
    institution: 'Rocketseat',
    degree: 'Bootcamp de React & Node.js',
    period: 'Jan 2018 – Dez 2019',
  },
];

const educationEN: IEducation[] = [
  {
    institution: 'University of Computer Science',
    degree: 'Computer Science Degree',
    period: 'Jan 2023 – Dec 2027',
  },
  {
    institution: 'Rocketseat',
    degree: 'React & Node.js Bootcamp',
    period: 'Jan 2018 – Dec 2019',
  },
];

const portfolioData = {
  pt_BR: {
    profile: profilePT_BR,
    projects: projectsPT_BR,
    skills: skillsPT_BR,
    experiences: experiencesPT_BR,
    education: educationPT_BR,
  },
  en: {
    profile: profileEN,
    projects: projectsEN,
    skills: skillsEN,
    experiences: experiencesEN,
    education: educationEN,
  },
};

export default portfolioData;
