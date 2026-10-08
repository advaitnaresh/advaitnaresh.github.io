"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/data";
import { ProjectArchitecture } from "@/components/work/ProjectArchitecture";

export function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PROJECTS[activeIndex] ?? PROJECTS[0];

  return (
    <section id="work" className="section-padding">
      <div className="container-wide">
        <div className="mb-16">
          <span className="font-mono text-sm text-mute">03 — Selected work</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4">
            Systems I&apos;ve <span className="font-instrument italic font-normal">built.</span>
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 xl:grid-cols-8 border-y border-line mb-5">
            {PROJECTS.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(idx)}
                  aria-pressed={isActive}
                  className={`min-w-0 text-left px-3 py-4 border-r border-line last:border-r-0 transition-colors ${
                    isActive ? "bg-ink text-paper" : "bg-card hover:bg-soft"
                  }`}
                >
                  <span className={`font-mono text-[9px] block mb-2 ${isActive ? "text-paper/50" : "text-mute"}`}>
                    {project.index}
                  </span>
                  <span className="text-xs font-medium leading-tight line-clamp-2">
                    {project.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-[28px] border border-line bg-card overflow-hidden p-8 lg:p-10 grid grid-cols-2 gap-8 lg:gap-12 min-h-[610px]">
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-4 mb-5">
                <span className="font-mono text-sm text-ink bg-paper px-2 py-1 rounded">
                  {activeProject.index}
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-mute">
                  {activeProject.kicker}
                </span>
              </div>

              <h3 className="text-3xl lg:text-5xl font-bold tracking-tighter leading-[0.95] mb-6">
                {activeProject.title}
              </h3>
              <p className="text-ink-2 leading-relaxed mb-8 max-w-xl">
                {activeProject.description}
              </p>

              {activeProject.features.length > 0 && (
                <ul className="space-y-3 mb-auto">
                  {activeProject.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-ink mt-1 text-xs">→</span>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 pt-6 border-t border-line">
                <div className="flex flex-wrap gap-2 mb-5">
                  {activeProject.tech.map((technology) => (
                    <span key={technology} className="text-[10px] font-mono px-3 py-1 bg-paper text-ink rounded-full border border-line">
                      {technology}
                    </span>
                  ))}
                </div>

                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-mute transition-colors group"
                  >
                    View source
                    <span className="font-mono text-xs group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                )}
              </div>
            </div>

            <ProjectArchitecture projectId={activeProject.id} />
          </div>
        </div>

        {/* Mobile Layout (Vertical Accordion) */}
        <div className="flex md:hidden flex-col gap-4">
          {PROJECTS.map((project, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={project.id}
                className="rounded-2xl border border-line bg-card overflow-hidden transition-all duration-500 flex flex-col"
              >
                <button
                  onClick={() => setActiveIndex(idx === activeIndex ? -1 : idx)}
                  className="w-full text-left p-6 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-mute">{project.index}</span>
                    <span className="font-medium tracking-tight text-lg">{project.title}</span>
                  </div>
                  <span className={`text-xl transition-transform duration-300 ${isActive ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${
                    isActive ? "max-h-[1000px] pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-widest uppercase text-mute block mb-4">
                    {project.kicker}
                  </span>
                  <p className="text-sm text-ink-2 mb-6">
                    {project.description}
                  </p>

                  <div className="h-[360px] mb-6">
                    <ProjectArchitecture projectId={project.id} />
                  </div>
                  
                  {project.features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="text-ink mt-1 text-[10px]">→</span>
                          <span className="text-xs font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-mono px-2 py-1 bg-paper text-ink rounded-full border border-line">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 text-xs font-medium border-b border-ink pb-0.5"
                    >
                      View source ↗
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
