import { Reveal, SectionLabel } from './reveal'

const principles = [
  {
    title: 'Thoughtful Engineering',
    body: 'Every decision has a reason. I would rather choose the simple, well-understood option and explain why than reach for complexity by default.',
  },
  {
    title: 'Clean & Maintainable Code',
    body: 'Code is read far more than it is written. Clear names, small modules, and honest structure make the next change easier — for anyone.',
  },
  {
    title: 'User-Centered Problem Solving',
    body: 'Software exists to help someone. I start from the person using it and work backward to the architecture that serves them.',
  },
]

export function Principles() {
  return (
    <section aria-labelledby="principles-title" className="bg-foreground text-background">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="[&_p]:text-background/60 [&_span.text-foreground]:text-background [&_span.bg-border]:bg-background/20">
            <SectionLabel index="05">Principles</SectionLabel>
          </div>
          <h2 id="principles-title" className="font-mono text-[11px] uppercase tracking-[0.18em] text-background/60">
            Three things I hold myself to
          </h2>
        </Reveal>

        <ol className="mt-14 border-t border-background/15 md:mt-20 [&:hover>li:not(:hover)]:opacity-35">
          {principles.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 100}
              rootMargin="0px 0px 20% 0px"
              className="group border-b border-background/15 transition-opacity duration-500"
            >
              <div className="grid gap-6 py-10 md:py-14 lg:grid-cols-12 lg:items-end lg:gap-10">
                <span className="font-mono text-[11px] text-background/50 lg:col-span-1 lg:pb-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-balance text-[clamp(2.25rem,6vw,5.75rem)] font-medium leading-[0.92] tracking-[-0.05em] transition-transform duration-700 ease-editorial group-hover:translate-x-3 lg:col-span-7">
                  {p.title}
                </h3>
                <p className="max-w-sm leading-relaxed text-background/65 lg:col-span-4 lg:pb-3">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
