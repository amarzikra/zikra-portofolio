'use client'

import Image from 'next/image'
import { Dialog } from '@base-ui/react/dialog'
import { ArrowUpRight, Check, GitBranch, ShieldCheck, X } from 'lucide-react'
import type { Project } from '@/lib/projects'

type ProjectModalProps = {
  project: Project
  total: number
}

export function ProjectModal({ project, total }: ProjectModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop
        data-lenis-prevent
        className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-[3px] transition-opacity duration-500 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0"
      />
      <Dialog.Viewport
        data-lenis-prevent
        className="fixed inset-0 z-[71] grid place-items-center overflow-hidden p-3 sm:p-6"
      >
        <Dialog.Popup
          data-lenis-prevent
          className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-6xl overflow-y-auto overscroll-contain rounded-sm border bg-background text-foreground shadow-[0_40px_120px_-30px_rgb(0_0_0/0.65)] outline-none transition-[opacity,transform] duration-500 ease-editorial data-[ending-style]:translate-y-4 data-[ending-style]:opacity-0 data-[starting-style]:translate-y-6 data-[starting-style]:opacity-0 sm:max-h-[calc(100dvh-3rem)]"
        >
          <div className="sticky top-0 z-30 flex h-12 items-center justify-between border-b bg-background/95 px-4 backdrop-blur sm:px-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Case study <span className="mx-2 text-border">/</span> {project.index} of{' '}
              {String(total).padStart(2, '0')}
            </p>
            <Dialog.Close
              aria-label="Close case study"
              className="flex size-8 items-center justify-center border border-transparent transition-colors hover:border-border hover:bg-muted focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <X aria-hidden className="size-4" />
            </Dialog.Close>
          </div>

          <div className="relative bg-black">
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-transparent sm:bg-linear-to-t sm:from-black/40 sm:via-transparent" />
            </div>
            <div className="relative z-10 px-5 pb-6 pt-4 sm:absolute sm:inset-x-0 sm:bottom-0 sm:bg-linear-to-t sm:from-black sm:via-black/80 sm:to-transparent sm:p-8 sm:pb-10 md:p-10">
              <p className="inline-flex border border-white/20 bg-black/45 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
                {project.category}
              </p>
              <Dialog.Title className="mt-3 max-w-3xl text-balance text-[clamp(1.9rem,4.5vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight text-white drop-shadow-[0_2px_24px_rgb(0_0_0/0.35)]">
                {project.title}
              </Dialog.Title>
              <Dialog.Description className="mt-3 line-clamp-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                {project.description}
              </Dialog.Description>
            </div>
          </div>

          <div className="border-b px-5 py-5 sm:px-8 md:px-10">
            <dl className="grid gap-5 sm:grid-cols-3">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Role
                </dt>
                <dd className="mt-1.5 text-sm">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Year
                </dt>
                <dd className="mt-1.5 text-sm">{project.year}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Stack
                </dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border bg-muted/50 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-10 p-5 sm:p-8 md:p-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-8 lg:col-span-7">
              <div className="border-t pt-6">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="text-foreground">01</span> / Problem
                </h3>
                <p className="mt-3 leading-relaxed text-foreground/75">{project.problem}</p>
              </div>
              <div className="border-t pt-6">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="text-foreground">02</span> / Approach
                </h3>
                <p className="mt-3 leading-relaxed text-foreground/75">{project.approach}</p>
              </div>
              <div className="border-t pt-6">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="text-foreground">03</span> / Outcome
                </h3>
                <p className="mt-3 leading-relaxed text-foreground/75">{project.outcome}</p>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="border bg-muted/30 p-5 sm:p-6">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Key features
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed text-foreground/75">
                      <Check aria-hidden className="mt-0.5 size-3.5 shrink-0 text-signal" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="border-t px-5 py-8 sm:px-8 md:px-10 md:py-10">
            <div className="flex items-center justify-between gap-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Interface
              </h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Selected screen
              </p>
            </div>
            <div className="relative mt-5 aspect-[16/10] overflow-hidden border bg-muted">
              <Image
                src={project.gallery.src}
                alt={project.gallery.alt}
                fill
                sizes="(min-width: 1152px) 1072px, 100vw"
                className="object-cover"
              />
            </div>
            {project.note && (
              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                <ShieldCheck aria-hidden className="mt-0.5 size-3.5 shrink-0" />
                {project.note}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5 border-t bg-muted/40 px-5 py-5 sm:px-8 md:px-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Source code on GitHub
            </p>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-background transition-colors hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <GitBranch aria-hidden className="size-3.5" />
              View repository
              <ArrowUpRight aria-hidden className="size-3.5" />
            </a>
          </div>
        </Dialog.Popup>
      </Dialog.Viewport>
    </Dialog.Portal>
  )
}
