// types/index.ts

export interface IProject {
    title: string;
    technologies: string[];
    imageSrc: string;
    githubLink: string;
    deployLink: string;
  }
  
  export interface ISkill {
    name: string;
    experience: string;
  }
  
  export interface IExperience {
    role: string;
    company: string;
    description: string;
    period: string;
  }
  
  export interface IEducation {
    institution: string;
    degree: string;
    period: string;
  }
  
  export interface IProfile {
    name: string;
    role: string;
    about: string;
    email: string;
    linkedIn: string;
    github: string;
    contact: string;
    city: string;
    languages: string[];
    strengths: string[];
  }
  