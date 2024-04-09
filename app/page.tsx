'use client'

import React, { useState } from 'react';
import portfolioData from './(PortfolioData)';
import Header from './components/Header';
import ProfileArticle from './components/ProfileAside';
import SkillSet from './components/SkillSet';
import ProjectCard from './components/ProjectCard';
import ProfessionalExperience from './components/ProfessionalExperience';
import EducationAndCertifications from './components/EducationAndCertifications';
import Footer from './components/Footer';
import LanguageButton from './components/LanguageButton';

type Language = keyof typeof portfolioData;

const Portfolio: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en'); // Default language is set to English

  const handleChangeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const currentLanguageData = portfolioData[language];

  if (!currentLanguageData) {
    return <div>Selected language not found.</div>;
  }

  const { profile: currentProfile, projects: currentProjects, skills: currentSkills, experiences: currentExperiences, education: currentEducation, labels } = currentLanguageData;

  return (
    <div className="min-h-screen flex flex-col">
      <Header profile={currentProfile} />
      
      <div className="flex justify-center my-4 gap-4">
        {Object.keys(portfolioData).map((lang) => (
          <LanguageButton
            key={lang}
            label={lang}
            active={language === lang}
            onClick={() => handleChangeLanguage(lang as Language)}
          />
        ))}
      </div>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap -mx-4">
          <ProfileArticle profile={currentProfile} label={labels.about}/>
          <div className="w-full px-4">
            <SkillSet skills={currentSkills} label={labels.habilities}/>
            <section className="mb-12">
              <h2 className="text-3xl font-bold my-4">{labels.Projects}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </section>
            <ProfessionalExperience experiences={currentExperiences} label={labels.experience}/>
            <EducationAndCertifications education={currentEducation} label={labels.education}/>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
