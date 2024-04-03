// components/EducationAndCertifications.tsx
import { IEducation } from '@/app/types';
import React from 'react';

const EducationAndCertifications: React.FC<{ education: IEducation[] }> = ({ education }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h3 className="font-bold text-xl mb-4">Educação e Certificações</h3>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-semibold">{edu.degree} - {edu.institution}</h4>
          <p className="text-gray-600">{edu.period}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationAndCertifications;
