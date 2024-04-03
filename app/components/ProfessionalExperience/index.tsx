// components/ProfessionalExperience.tsx
import { IExperience } from '@/app/types';
import React from 'react';

const ProfessionalExperience: React.FC<{ experiences: IExperience[] }> = ({ experiences }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
      <h3 className="font-bold text-xl mb-4">Experiência Profissional</h3>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-6">
          <h4 className="font-semibold">{experience.role} - {experience.company}</h4>
          <p className="text-gray-600">{experience.period}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalExperience;
