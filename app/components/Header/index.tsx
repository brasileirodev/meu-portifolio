import { IProfile } from '@/app/types';
import React from 'react';

const Header: React.FC<{ profile: IProfile }> = ({ profile }) => {
  return (
    <header className="bg-gray-800 text-white p-4 text-center sm:text-left">
      <h1 className="text-4xl font-bold">{profile.name}</h1>
      <p className="text-xl">{profile.role}</p>
    </header>
  );
};

export default Header;