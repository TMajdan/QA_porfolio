import React from 'react';
import { EXPERIENCE, PROJECTS } from '../constants';
import { Briefcase, Calendar, Github, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience Timeline */}
        <div className="mb-24">
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {EXPERIENCE.map((job, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                
                {/* Icon on the line */}
                <div className="absolute left-0 md:left-1/2 top-0 flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-white shadow shrink-0 md:-translate-x-1/2">
                  <Briefcase className="w-4 h-4 text-accent" />
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="font-bold text-lg text-slate-800">{job.role}</h3>
                    <span className="text-xs font-semibold text-accent bg-sky-50 px-2 py-1 rounded-full mt-1 sm:mt-0 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-slate-500 mb-4">{job.company}</div>
                  <ul className="space-y-2">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div id="projects" className="opacity-0 animate-fade-in-up delay-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-slate-900 rounded-lg">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                
                <div className="px-6 pb-6 pt-0 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;