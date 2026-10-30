import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

const paragraphs = [
  'Junior Software Engineer & Fullstack Developer with a background in Informatics Engineering and experience building scalable web applications using React, TypeScript, Next.js, Laravel, and Node.js. Skilled in RESTful APIs, MySQL, and responsive user interfaces, with practical hands-on experience in Information Technology through an internship at the General Election Commission (KPU).',
  'Possesses a strong technical foundation in full-stack web development, database management, and system troubleshooting using Python, PHP, JavaScript, Laravel, and SQL.',
  'Passionate about clean code, problem-solving, and collaboration, with a focus on delivering high-performance, user-centered applications. Highly motivated, adaptable, and eager to leverage both technical expertise and business-oriented leadership in Junior Software Engineering or Full-Stack Development roles.',
]

type StackItem = {
  name: string
  icon: string
  invertOnDark?: boolean
}

const stack: { label: string; items: StackItem[] }[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'JavaScript', icon: '/images/about/frontend/JavaScript.svg' },
      { name: 'TypeScript', icon: '/images/about/frontend/TypeScript.svg' },
      { name: 'React', icon: '/images/about/frontend/React.svg' },
      { name: 'Next.js', icon: '/images/about/frontend/Next.js.svg', invertOnDark: true },
      { name: 'Tailwind CSS', icon: '/images/about/frontend/Tailwind CSS.svg' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: '/images/about/backend/Node.js.svg' },
      { name: 'Python', icon: '/images/about/backend/Python.svg' },
      { name: 'PHP', icon: '/images/about/backend/PHP.svg' },
      { name: 'Laravel', icon: '/images/about/backend/Laravel.svg' },
    ],
  },
  {
    label: 'Database',
    items: [
      { name: 'MySQL', icon: '/images/about/database/MySQL.svg' },
      { name: 'PostgreSQL', icon: '/images/about/database/PostgreSQL.svg' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', icon: '/images/about/tools/Git.svg' },
      { name: 'Docker', icon: '/images/about/tools/Docker.svg' },
    ],
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-x-clip py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-16 xl:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.2em] text-foreground">03</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                About
              </span>
              <div aria-hidden className="h-px flex-1 bg-border" />
            </div>

            <h2
              id="about-title"
              className="mt-5 text-[clamp(2.5rem,calc(1.2rem+4vw),5rem)] font-black uppercase leading-[0.95] tracking-tight"
            >
              About
            </h2>

            <div className="mt-8 max-w-xl space-y-5">
              <p className="text-pretty text-lg leading-relaxed text-foreground/75 md:text-xl">
                {paragraphs[0]}
              </p>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                {paragraphs[1]}
              </p>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                {paragraphs[2]}
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:self-center">
            <div className="grid gap-10 md:gap-12">
              {stack.map((group, i) => (
                <Reveal
                  key={group.label}
                  delay={i * 80}
                  className="grid gap-4 sm:grid-cols-12 sm:items-center sm:gap-6"
                >
                  <h3 className="text-2xl font-black uppercase leading-[1.05] tracking-tight text-foreground/45 sm:col-span-4 md:text-3xl md:text-4xl xl:text-[2.5rem]">
                    {group.label}
                  </h3>

                  <ul className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:col-span-8 md:gap-x-6">
                    {group.items.map((item) => (
                      <li key={item.name} className="flex items-center gap-2.5">
                        <Image
                          src={item.icon}
                          alt=""
                          width={40}
                          height={40}
                          className={cn(
                            'size-7 shrink-0 sm:size-8 md:size-9 lg:size-10',
                            item.invertOnDark && 'dark:invert',
                          )}
                        />
                        <span className="font-mono text-[10px] uppercase leading-snug tracking-wide text-muted-foreground sm:text-xs md:text-sm">
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
