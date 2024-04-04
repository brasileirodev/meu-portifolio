import React from 'react';

interface LanguageButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ label, active, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md ${active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default LanguageButton;
