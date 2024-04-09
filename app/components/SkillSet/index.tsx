// components/SkillSet.tsx
import { ISkill } from '@/app/types';
import React from 'react';

const SkillSet: React.FC<{ skills: ISkill[], label:string }> = ({ skills, label }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
      <h3 className="font-bold text-xl mb-4">{label}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <div key={index} className="text-gray-700 truncate ">{skill.name} - {skill.experience}</div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
