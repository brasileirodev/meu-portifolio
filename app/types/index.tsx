// types/index.ts

export interface IProject {
    title: string;
    technologies: string[];
    imageSrc: string;
    links: {
      label: string;
      url: string;
      color: string;
    }[];
    details: {
      label: string;
      value: string;
    }
    outcome: {
      label: string;
      value: string;
    }
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
  