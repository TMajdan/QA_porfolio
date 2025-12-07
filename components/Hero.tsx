import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Download, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 bg-sky-500 rounded-full mr-2 animate-pulse"></span>
              Open to work
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
              Cześć, jestem <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6">
              {PERSONAL_INFO.role}
            </h2>
            
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.summary}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a 
                href="/cv.pdf" 
                download
                className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Pobierz CV
              </a>
              <div className="flex gap-4">
                 {SOCIAL_LINKS.filter(l => l.name !== 'CV').map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 bg-white border border-slate-200 rounded-full hover:border-accent hover:text-accent text-slate-600 transition-all shadow-sm hover:shadow-md"
                    aria-label={link.name}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-indigo-500 rounded-[2rem] rotate-6 opacity-30 group-hover:rotate-12 transition-transform duration-500 blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-[2rem] border-4 border-white shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Doświadczenie</p>
                  <p className="text-sm font-bold text-slate-800">5+ Lat w QA</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;