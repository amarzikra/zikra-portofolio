'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { ProjectModal } from './project-modal'
import { Reveal, SectionLabel } from './reveal'

const repositoriesUrl = `${siteConfig.links.github}?tab=repositories`

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const activeProject = projects[activeIndex]
  const total = String(projects.length).padStart(2, '0')

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <section
        id="work"
        aria-labelledby="work-title"
        className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32 xl:py-40"
      >
        <p aria-live="polite" className="sr-only">
          Previewing {activeProject.title}
        </p>

        <div className="xl:hidden">
          <Reveal>
            <SectionLabel index="04">Selected Projects</SectionLabel>
            <h2 className="mt-5 text-[clamp(3rem,10vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
              Featured
              <br />
              <span className="text-muted-foreground">Work</span>
              <sup className="ml-3 font-mono text-xs font-normal tracking-normal text-foreground">
                ({total})
              </sup>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Three systems built end to end — from data model and API to the interface people actually use. Open any
              preview for the decisions behind it.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col gap-14 sm:mt-16 sm:gap-16">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <Dialog.Trigger
                  data-project-trigger={project.slug}
                  onClick={() => setActiveIndex(i)}
                  className="group block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="relative block aspect-[16/10] overflow-hidden rounded-sm border bg-muted">
                    <Image
                      src={project.cover.src}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 90vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.02]"
                    />
                    <span className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/5" />
                    <span className="absolute left-4 top-4 border border-white/25 bg-black/35 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                      {project.index} / {total}
                    </span>
                    <span className="absolute bottom-4 right-4 flex size-9 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight aria-hidden className="size-4" />
                    </span>
                  </span>
                  <span className="mt-4 block text-xl font-black uppercase leading-tight tracking-tight sm:mt-5 sm:text-2xl">
                    {project.title}
                  </span>
                  <span className="mt-2 block font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground">
                    {project.stack.slice(0, 3).map((tech, index) => (
                      <span key={tech}>
                        {index > 0 && ' / '}
                        {tech}
                      </span>
                    ))}
                  </span>
                </Dialog.Trigger>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 border-t pt-8 sm:mt-14">
            <a
              href={repositoriesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-foreground px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-foreground/85"
            >
              View all
              <ArrowUpRight aria-hidden className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="hidden gap-10 xl:grid xl:grid-cols-[340px_minmax(0,1fr)] xl:items-start 2xl:gap-14">
          <Reveal className="flex flex-col">
            <SectionLabel index="04">Selected Projects</SectionLabel>
            <h2
              id="work-title"
              className="mt-5 text-[clamp(3rem,4.4vw,4rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]"
            >
              Featured
              <br />
              <span className="text-muted-foreground">Work</span>
              <sup className="ml-2 font-mono text-xs font-normal tracking-normal text-foreground">({total})</sup>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground xl:text-base">
              Three systems built end to end — from data model and API to the interface people actually use. Open any
              preview for the decisions behind it.
            </p>

            <div className="mt-9 flex flex-col gap-3">
              {projects.map((project, i) => {
                const isActive = i === activeIndex
                return (
                  <button
                    key={project.slug}
                    type="button"
                    aria-pressed={isActive}
                    aria-label={`Preview ${project.title}`}
                    onClick={() => setActiveIndex(i)}
                    className="group flex items-center gap-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span
                      className={cn(
                        'relative h-14 w-24 shrink-0 overflow-hidden rounded-sm border bg-muted transition-opacity duration-300',
                        isActive
                          ? 'opacity-100 ring-1 ring-foreground ring-offset-2 ring-offset-background'
                          : 'opacity-55 group-hover:opacity-100',
                      )}
                    >
                      <Image
                        src={project.cover.src}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          'block truncate text-sm font-medium tracking-tight transition-colors',
                          isActive ? 'text-foreground' : 'text-foreground/65 group-hover:text-foreground',
                        )}
                      >
                        {project.title}
                      </span>
                      <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                        {project.category.split(' / ')[0]}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        'size-1.5 shrink-0 rounded-[1px] transition-colors',
                        isActive ? 'bg-foreground' : 'bg-border group-hover:bg-muted-foreground',
                      )}
                    />
                  </button>
                )
              })}
            </div>

            <div className="mt-8 border-t pt-6">
              <a
                href={repositoriesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-foreground px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:bg-foreground/85"
              >
                View all
                <ArrowUpRight aria-hidden className="size-3.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <Dialog.Trigger
              data-project-trigger={activeProject.slug}
              className="group relative block aspect-[16/11] min-h-[600px] w-full overflow-hidden rounded-sm border bg-muted text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="absolute inset-0">
                {projects.map((project, i) => (
                  <Image
                    key={project.slug}
                    src={project.cover.src}
                    alt=""
                    fill
                    sizes="(min-width: 1440px) 1000px, (min-width: 1280px) 68vw, 100vw"
                    className={cn(
                      'object-cover transition-[opacity,transform] duration-[1200ms] ease-editorial',
                      i === activeIndex
                        ? 'scale-100 opacity-100 group-hover:scale-[1.015]'
                        : 'scale-[1.03] opacity-0',
                    )}
                  />
                ))}
              </span>
              <span className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/20" />
              <span className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-black/70 to-transparent" />

              <span aria-hidden className="absolute left-4 top-4 size-3 border-l border-t border-white/30 sm:left-5 sm:top-5" />
              <span aria-hidden className="absolute right-4 top-4 size-3 border-r border-t border-white/30 sm:right-5 sm:top-5" />
              <span aria-hidden className="absolute bottom-4 left-4 size-3 border-b border-l border-white/30 sm:bottom-5 sm:left-5" />
              <span aria-hidden className="absolute bottom-4 right-4 size-3 border-b border-r border-white/30 sm:bottom-5 sm:right-5" />

              <span className="absolute inset-x-0 top-0 block p-6 sm:p-8">
                <span className="flex items-start justify-between gap-6">
                  <span className="border border-white/15 bg-black/35 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/75 backdrop-blur-sm">
                    {activeProject.index} / {total}
                  </span>
                  <span className="max-w-[55%] border border-white/15 bg-black/35 px-2 py-1 text-right font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-white/70 backdrop-blur-sm">
                    {activeProject.category}
                  </span>
                </span>
              </span>

              <span className="absolute inset-x-0 bottom-0 block p-6 sm:p-8">
                <span
                  key={activeProject.slug}
                  className="block animate-in fade-in slide-in-from-bottom-3 duration-500"
                >
                  <span className="block max-w-2xl text-balance text-[clamp(2rem,3.8vw,3.75rem)] font-black uppercase leading-[0.92] tracking-[-0.045em] text-white drop-shadow-[0_2px_20px_rgb(0_0_0/0.35)]">
                    {activeProject.title}
                  </span>
                  <span className="mt-4 block font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-white/60">
                    {activeProject.stack.slice(0, 3).map((tech, index) => (
                      <span key={tech}>
                        {index > 0 && ' · '}
                        [{tech}]
                      </span>
                    ))}
                  </span>
                  <span className="mt-4 flex flex-wrap gap-1.5">
                    {activeProject.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white/80 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </span>
                </span>

                <span aria-hidden className="mt-6 flex gap-1.5">
                  {projects.map((project, i) => (
                    <span key={project.slug} className="h-0.5 min-w-0 flex-1 overflow-hidden bg-white/20">
                      <span
                        className={cn(
                          'block h-full origin-left bg-white transition-[transform,opacity] duration-700 ease-editorial',
                          i === activeIndex ? 'scale-x-100 opacity-100' : 'scale-x-[0.12] opacity-35',
                        )}
                      />
                    </span>
                  ))}
                </span>
                <span className="mt-3 flex items-center justify-between gap-6">
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/55">
                    Click to open case study
                  </span>
                  <span className="flex size-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight aria-hidden className="size-4" />
                  </span>
                </span>
              </span>
            </Dialog.Trigger>
          </Reveal>
        </div>
      </section>

      <ProjectModal project={activeProject} total={projects.length} />
    </Dialog.Root>
  )
}
