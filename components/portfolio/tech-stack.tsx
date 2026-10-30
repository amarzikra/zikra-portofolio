import { cn } from '@/lib/utils'
import { Reveal, SectionLabel } from './reveal'

const groups = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'TanStack Start'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'Python', 'FastAPI'],
  },
  {
    label: 'Data & Vision',
    items: ['PostgreSQL', 'MySQL', 'Drizzle ORM', 'SQL', 'OpenCV'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Vercel', 'Playwright'],
  },
]

const marqueeItems = [
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Next.js',
  'Python',
  'Drizzle ORM',
  'Tailwind CSS',
  'Laravel',
  'TanStack Start',
  'MySQL',
  'Docker',
  'FastAPI',
  'PHP',
  'Git',
  'Express.js',
  'SQL',
  'GitHub',
  'JavaScript',
  'Vercel',
  'Playwright',
  'OpenCV',
]

const rowOne = marqueeItems
const rowTwo = [...marqueeItems].reverse()

function StackMarquee({
  items,
  reverse = false,
  muted = false,
}: {
  items: string[]
  reverse?: boolean
  muted?: boolean
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'select-none overflow-hidden whitespace-nowrap font-black uppercase italic leading-none tracking-[-0.055em] transition-colors duration-500',
        'text-[clamp(2.6rem,7vw,7rem)]',
        muted
          ? 'text-foreground/[0.11] hover:text-foreground/25'
          : 'text-foreground/[0.18] hover:text-foreground/40',
      )}
    >
      <div
        className={cn(
          'flex w-max will-change-transform',
          reverse
            ? 'motion-safe:animate-[marquee_72s_linear_infinite_reverse]'
            : 'motion-safe:animate-[marquee_54s_linear_infinite]',
        )}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <span key={`${copy}-${item}-${i}`} className="flex shrink-0 items-center gap-4 pr-4 md:gap-7 md:pr-7">
                <span>{item}</span>
                <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-current opacity-50 md:size-2" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="scroll-mt-24 overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="04">Technical Stack</SectionLabel>
          </div>
          <h2
            id="stack-title"
            className="text-balance text-3xl font-medium leading-[1.05] tracking-[-0.035em] md:text-5xl lg:col-span-8"
          >
            A small, deliberate toolkit — <span className="text-muted-foreground">learned properly, used daily.</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-16 border-y md:mt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background via-background/80 to-transparent sm:w-28 md:w-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background via-background/80 to-transparent sm:w-28 md:w-40"
        />
        <div className="space-y-2 py-7 md:space-y-3 md:py-10">
          <StackMarquee items={rowOne} />
          <StackMarquee items={rowTwo} reverse muted />
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-12 px-5 md:mt-24 md:px-10 lg:grid-cols-4">
        {groups.map((group, i) => (
          <Reveal key={group.label} delay={i * 80} className="border-t pt-5">
            <h3 className="flex justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {group.label}
              <span>{String(group.items.length).padStart(2, '0')}</span>
            </h3>
            <ul className="mt-6 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-xl tracking-tight md:text-2xl">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
