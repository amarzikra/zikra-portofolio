import Image from 'next/image'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { LiveClock } from './live-clock'
import { Parallax } from './parallax'
import { ThemeToggle } from './theme-toggle'

const { hero, availability } = siteConfig

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-5 right-5 hidden lg:block md:left-10 md:right-10"
        >
          <div className="absolute inset-y-0 left-[57.5%] w-px bg-border/70" />
          <div className="absolute inset-y-0 right-0 w-px bg-border/70" />
          <div className="absolute right-0 top-[70%] h-px w-[42.5%] bg-border/70" />
        </div>

        <div className="relative flex min-h-svh flex-col pb-8 pt-24 md:pt-28 lg:pb-10">
          <div className="grid flex-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col lg:col-span-7 lg:pr-8">
              <h1
                id="hero-title"
                className="text-[clamp(3.2rem,13vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.06em] lg:text-[clamp(3.4rem,8.6vw,8.25rem)]"
              >
                <span className="line-mask">
                  <span>Software</span>
                </span>
                <span
                  className="line-mask"
                  style={{ '--line-delay': '120ms' } as React.CSSProperties}
                >
                  <span>Engineer</span>
                </span>
              </h1>

              <ul className="mt-7 flex flex-wrap gap-2 md:mt-9">
                {siteConfig.heroStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <figure className="mt-10 md:mt-14">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted sm:aspect-[2.4/1]">
                  <Parallax className="absolute inset-0" strength={18} scale={1.06}>
                    <Image
                      src={hero.image.src}
                      alt={hero.image.alt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover object-[50%_40%] transition-transform duration-[2000ms] ease-editorial hover:scale-[1.03] sm:object-[50%_62%]"
                    />
                  </Parallax>
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 size-5 border-l border-t border-foreground/40"
                  />
                  <span
                    aria-hidden
                    className="absolute bottom-0 right-0 size-5 border-b border-r border-foreground/40"
                  />
                </div>
                <figcaption className="mt-5 flex items-start gap-8 md:gap-14">
                  <ArrowRight aria-hidden className="mt-1 size-4 shrink-0" />
                  <p className="max-w-[32ch] font-mono text-[10px] uppercase leading-[1.9] tracking-[0.16em] text-muted-foreground md:text-[11px]">
                    {hero.bio}
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="flex flex-col gap-12 lg:col-span-5 lg:items-end lg:pt-1 lg:text-right">
              <div className="flex w-full flex-col items-start gap-3 lg:items-end">
                <span className="inline-flex items-center gap-2 rounded-full border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em]">
                  <span aria-hidden className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-50 [animation-duration:2.4s]" />
                    <span className="relative inline-flex size-2 rounded-full bg-signal" />
                  </span>
                  {availability.shortLabel}
                </span>
                <p className="font-mono text-[10px] uppercase leading-[1.9] tracking-[0.16em] text-muted-foreground">
                  <span className="block">{hero.index}</span>
                  {hero.locationLine}
                </p>
              </div>

              <div className="flex w-full flex-col items-start gap-8 lg:mt-auto lg:items-end">
                <p className="font-mono text-[10px] uppercase leading-[1.9] tracking-[0.16em] text-muted-foreground md:text-[11px]">
                  {hero.taglineLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="mt-4 block">{hero.statusLines[0]}</span>
                  <span className="block">{hero.statusLines[1]}</span>
                </p>

                <p className="text-[clamp(3.6rem,8.5vw,8.5rem)] font-black uppercase leading-[0.8] tracking-[-0.055em]">
                  {hero.nameLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                <div className="flex w-full flex-col items-start gap-5 lg:items-end">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {hero.year}
                  </p>
                  <a
                    href="#work"
                    className="group inline-flex h-12 items-center gap-4 rounded-full border px-6 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-500 hover:bg-foreground hover:text-background"
                  >
                    Selected work
                    <ArrowDownRight
                      aria-hidden
                      className="size-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1 group-hover:translate-y-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between md:mt-16">
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {hero.credit}
              </p>
              <ThemeToggle variant="switch" className="self-start" />
            </div>
            <LiveClock className="sm:text-right" />
          </div>
        </div>
      </div>
    </section>
  )
}
