import React from 'react';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/data';
import StarBorder from '@/components/StarBorder';

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-background relative z-10 border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-[0.2em] uppercase text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Project Database
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-zinc-400 to-transparent mx-auto mb-6"></div>
          <p className="mx-auto max-w-[700px] text-gray-400 font-mono text-sm md:text-base">
            // ACCESSING CLASSIFIED PROJECTS... <span className="animate-pulse">_</span>
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={project.id} className="group relative flex flex-col items-center">

              <div className="mb-8 w-full max-w-[500px] relative z-20 group/image">
                <StarBorder as="div" color="#ffffff" speed="5s" className="w-full h-full">
                  <div className="relative h-[300px] sm:h-[350px] w-full overflow-hidden rounded-[20px] bg-black/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-105 opacity-90 group-hover/image:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60"></div>
                  </div>
                </StarBorder>
              </div>

              <div className="w-full max-w-[500px] space-y-4 bg-white/5 border border-white/5 hover:border-white/30 p-6 transition-all duration-300 relative overflow-hidden group-hover:bg-white/[0.07]">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50"></div>

                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold font-headline text-white tracking-wide group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">ID: 00{index + 1}</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="bg-black/40 p-3 border-l-2 border-zinc-500/30">
                  <ul className="text-gray-500 text-xs font-mono space-y-1">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-zinc-400 mr-2">{'>'}</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="font-mono text-xs border-white/10 text-zinc-300 bg-white/5 hover:bg-white/20 hover:text-white transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
