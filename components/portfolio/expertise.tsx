'use client'

import { useEffect, useRef } from 'react'

const services = [
  'Frontend Development',
  'Backend Systems',
  'Responsive Design',
  'API Integration',
]

const focus = ['Performance', 'Accessibility', 'Clean UI', 'Great UX']

const mobileExpertise = [...services, 'Database Architecture']

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value))

export function Expertise() {
  const sectionRef = useRef<HTMLElement>(null)
  const firstRowRef = useRef<HTMLDivElement>(null)
  const secondRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const firstRow = firstRowRef.current
    const secondRow = secondRowRef.current
    if (!section || !firstRow || !secondRow) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const update = () => {
      frame = 0

      if (reducedMotion.matches) {
        firstRow.style.transform = 'none'
        secondRow.style.transform = 'none'
        return
      }

      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const rect = section.getBoundingClientRect()
      const progress = clamp((viewportHeight - rect.top) / (rect.height + viewportHeight))

      const firstX = viewportWidth * (0.46 - 0.73 * progress)
      const secondX = viewportWidth * (-0.46 + 0.73 * progress)

      firstRow.style.transform = `translate3d(${firstX.toFixed(2)}px, 0, 0)`
      secondRow.style.transform = `translate3d(${secondX.toFixed(2)}px, 0, 0)`
    }

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    reducedMotion.addEventListener('change', schedule)

    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      reducedMotion.removeEventListener('change', schedule)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="expertise"
      aria-labelledby="expertise-title"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24"
    >
      <h2 id="expertise-title" className="sr-only">
        Expertise
      </h2>

      <div className="relative hidden lg:block">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-background to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-background to-transparent"
        />

        <div className="flex w-full flex-col justify-center gap-12 lg:gap-14">
          <div
            ref={firstRowRef}
            className="flex items-center whitespace-nowrap will-change-transform"
          >
            <span className="select-none text-[clamp(6rem,12vw,14rem)] font-black leading-[0.9] tracking-tighter">
              Web Dev
            </span>
            <span className="mx-14 select-none text-[clamp(3rem,5vw,5rem)] font-light italic text-foreground/20">
              &amp;
            </span>
            <span className="select-none text-[clamp(6rem,12vw,14rem)] font-black leading-[0.9] tracking-tighter">
              App Dev
            </span>
            <div className="ml-24 flex flex-col gap-2 pr-32">
              <span className="font-mono text-base uppercase tracking-[0.2em] text-foreground/45">
                Services
              </span>
              <div aria-hidden className="mb-2 h-px w-8 bg-foreground/20" />
              {services.map((service) => (
                <span
                  key={service}
                  className="text-xl font-bold uppercase tracking-tight text-foreground/70"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div
            ref={secondRowRef}
            className="flex items-center whitespace-nowrap will-change-transform"
          >
            <span className="select-none text-[clamp(2.9rem,6vw,7.25rem)] font-black leading-[0.9] tracking-tighter">
              Software Engineer
            </span>
            <span className="mx-6 select-none text-[clamp(1.5rem,3vw,3.5rem)] font-light italic text-foreground/20 lg:mx-14">
              &amp;
            </span>
            <span className="select-none text-[clamp(2.9rem,6vw,7.25rem)] font-black leading-[0.9] tracking-tighter">
              Fullstack Dev
            </span>
            <div className="ml-24 flex flex-col gap-2 pr-32 text-right">
              <span className="font-mono text-base uppercase tracking-[0.2em] text-foreground/45">
                Focus
              </span>
              <div aria-hidden className="mb-2 ml-auto h-px w-8 bg-foreground/20" />
              {focus.map((item) => (
                <span
                  key={item}
                  className="text-xl font-bold uppercase tracking-tight text-foreground/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 px-5 lg:hidden">
        <div className="space-y-2">
          <div className="translate-x-12 whitespace-nowrap">
            <span className="text-7xl font-black uppercase leading-none tracking-tighter">
              Web Dev
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div aria-hidden className="h-px flex-1 bg-border" />
            <span className="text-3xl font-light italic text-foreground/30">&amp;</span>
            <div aria-hidden className="h-px flex-1 bg-border" />
          </div>
          <div className="-translate-x-12 flex justify-end whitespace-nowrap">
            <span className="text-7xl font-black uppercase leading-none tracking-tighter">
              App Dev
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-8">
          <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/45">
            Expertise
          </span>
          {mobileExpertise.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span aria-hidden className="size-1.5 rounded-full bg-foreground/25" />
              <span className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium tracking-tight text-foreground/60">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


