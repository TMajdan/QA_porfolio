import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, Terminal, Globe, Server } from 'lucide-react';

const HostingGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="hosting" className="py-20 bg-slate-900 text-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
             <Server className="text-accent" />
             Jak zahostować to portfolio?
           </h2>
           <p className="text-slate-400 max-w-2xl mx-auto">
             Kompletny przewodnik, jak wrzucić tę stronę do sieci za darmo, z certyfikatem SSL (HTTPS) i pod własną domeną.
           </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
            {/* Vercel Card - Primary Option */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 hover:border-accent transition-colors relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-32 h-32 text-white" viewBox="0 0 1155 1000" fill="currentColor"><path d="M577.344 0L1154.69 1000H0L577.344 0Z" /></svg>
               </div>
               
               <div className="flex items-center gap-4 mb-6 relative z-10">
                 <div className="bg-black p-3 rounded-xl border border-slate-700 shadow-lg">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 1155 1000" fill="currentColor"><path d="M577.344 0L1154.69 1000H0L577.344 0Z" /></svg>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white">Opcja 1: Vercel</h3>
                   <span className="text-xs text-accent font-semibold tracking-wider uppercase">Rekomendowane</span>
                 </div>
               </div>

               <div className="space-y-4 relative z-10">
                 <div className="flex gap-3 items-start">
                    <div className="bg-slate-700/50 p-1 rounded text-accent mt-0.5 text-xs font-mono">01</div>
                    <p className="text-sm text-slate-300">Wrzuć kod na swoje repozytorium GitHub.</p>
                 </div>
                 <div className="flex gap-3 items-start">
                    <div className="bg-slate-700/50 p-1 rounded text-accent mt-0.5 text-xs font-mono">02</div>
                    <p className="text-sm text-slate-300">Zaloguj się na <a href="https://vercel.com" className="text-white underline decoration-accent decoration-2 underline-offset-2">Vercel.com</a> przez GitHub.</p>
                 </div>
                 <div className="flex gap-3 items-start">
                    <div className="bg-slate-700/50 p-1 rounded text-accent mt-0.5 text-xs font-mono">03</div>
                    <p className="text-sm text-slate-300">Kliknij <strong>Add New Project</strong> i wybierz swoje repo.</p>
                 </div>
                 <div className="flex gap-3 items-start">
                    <div className="bg-slate-700/50 p-1 rounded text-accent mt-0.5 text-xs font-mono">04</div>
                    <p className="text-sm text-slate-300">Kliknij <strong>Deploy</strong>. Vercel sam wykryje Reacta.</p>
                 </div>
                 
                 <div className="mt-6 bg-green-900/20 border border-green-500/30 p-4 rounded-lg flex gap-3">
                   <CheckCircle className="text-green-400 w-5 h-5 shrink-0" />
                   <div className="text-xs text-green-200">
                     <strong>Zalety:</strong> Automatyczny HTTPS, szybki CDN, automatyczne odświeżanie po `git push`.
                   </div>
                 </div>
               </div>
            </div>

            {/* GitHub Pages Card */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 hover:border-white transition-colors">
               <div className="flex items-center gap-4 mb-6">
                 <div className="bg-slate-700 p-3 rounded-xl shadow-lg">
                    <Globe className="h-6 w-6 text-white" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white">Opcja 2: GitHub Pages</h3>
                   <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">Klasyczna metoda</span>
                 </div>
               </div>

               <div className="space-y-4 font-mono text-sm">
                 <div className="bg-black/50 p-3 rounded-lg border border-slate-700 text-slate-300">
                   <span className="text-slate-500"># 1. Zainstaluj deployer</span><br/>
                   <span className="text-accent">npm</span> install gh-pages --save-dev
                 </div>
                 <div className="bg-black/50 p-3 rounded-lg border border-slate-700 text-slate-300">
                   <span className="text-slate-500"># 2. Dodaj do package.json</span><br/>
                   "homepage": "https://user.github.io/repo",<br/>
                   "deploy": "gh-pages -d build"
                 </div>
                 <div className="bg-black/50 p-3 rounded-lg border border-slate-700 text-slate-300">
                   <span className="text-slate-500"># 3. Uruchom</span><br/>
                   <span className="text-accent">npm</span> run deploy
                 </div>
                 
                 <p className="text-xs text-slate-400 mt-2">
                   * Pamiętaj, aby w ustawieniach repozytorium (Settings &gt; Pages) wybrać branch `gh-pages` jako źródło.
                 </p>
               </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default HostingGuide;