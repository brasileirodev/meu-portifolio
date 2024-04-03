// pages/Portfolio.tsx
import React from 'react';
import { profile,
  projects,
  skills,
  experiences,
  education } from './(PortfolioData)';
import Header from './components/Header';
import ProfileAside from './components/ProfileAside';
import SkillSet from './components/SkillSet';
import ProjectCard from './components/ProjectCard';
import ProfessionalExperience from './components/ProfessionalExperience';
import EducationAndCertifications from './components/EducationAndCertifications';
import Footer from './components/Footer';


const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header profile={profile} />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap -mx-4">
          <ProfileAside profile={profile} />
          <div className="w-full lg:w-2/3 px-4">
            <SkillSet skills={skills} />
            <section className="mb-12">
              <h2 className="text-3xl font-bold my-4">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </section>
            <ProfessionalExperience experiences={experiences} />
            <EducationAndCertifications education={education} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
