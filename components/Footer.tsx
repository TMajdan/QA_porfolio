import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Wszystkie prawa zastrzeżone.</p>
        <p className="text-sm mt-2">Stworzono przy użyciu React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;