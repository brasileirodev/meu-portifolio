// components/ProfileAside.tsx
import { IProfile } from '@/app/types';
import React from 'react';

const ProfileArticle: React.FC<{ profile: IProfile }> = ({ profile }) => {
  return (
    <article className="w-full p-4">
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h3 className="font-bold text-xl mb-4">Sobre Mim</h3>
        <p>{profile.about}</p>
        {/* Aqui você pode adicionar mais elementos do perfil como e-mail, contatos, etc */}
      </div>
    </article>
  );
};

export default ProfileArticle;
