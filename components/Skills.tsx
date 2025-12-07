import React from 'react';
import { SKILLS } from '../constants';
import { Code, Database, Layout, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = {
    'Automation': { icon: Terminal, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    'Languages': { icon: Code, color: 'text-sky-500', bg: 'bg-sky-50' },
    'Tools': { icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    'Manual': { icon: Layout, color: 'text-amber-500', bg: 'bg-amber-50' }
  };

  const getCategoryIcon = (cat: string) => {
    // @ts-ignore
    return categories[cat] || { icon: Code, color: 'text-slate-500', bg: 'bg-slate-50' };
  };

  const uniqueCategories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {uniqueCategories.map((category, idx) => {
            const { icon: Icon, color, bg } = getCategoryIcon(category);
            return (
              <div 
                key={category} 
                className="bg-slate-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${bg}`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {SKILLS.filter(s => s.category === category).map((skill) => (
                    <div 
                      key={skill.name} 
                      className="group relative bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:border-accent hover:text-accent transition-colors cursor-default"
                    >
                      {skill.name}
                      {/* Tooltip for level */}
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-slate-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Poziom: {skill.level}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;