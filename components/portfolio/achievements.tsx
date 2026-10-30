import { Code2, Rocket, Trophy, Zap, type LucideIcon } from 'lucide-react'
import { achievements, type AchievementIcon } from '@/lib/achievements'
import { Reveal, SectionLabel } from './reveal'

const icons: Record<AchievementIcon, LucideIcon> = {
  trophy: Trophy,
  rocket: Rocket,
  code: Code2,
  zap: Zap,
}

export function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <SectionLabel index="06">Achievements</SectionLabel>
          <h2
            id="achievements-title"
            className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-black uppercase italic leading-[0.9] tracking-[-0.055em]"
          >
            Recognition &amp; Milestones
          </h2>
          <p className="mt-5 max-w-2xl font-serif text-base italic leading-relaxed text-muted-foreground md:text-lg">
            A focused set of highlights that represent impact, delivery, and innovation.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {achievements.map((achievement, i) => {
            const Icon = icons[achievement.icon]
            return (
              <Reveal
                key={achievement.title}
                delay={i * 80}
                rootMargin="0px 0px 15% 0px"
                className="group flex flex-col border bg-muted/20 p-6 transition-colors duration-500 hover:border-foreground/30"
              >
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span>{achievement.year}</span>
                  <span aria-hidden className="h-px flex-1 bg-border" />
                  <span>{achievement.category}</span>
                </div>

                <span className="mt-8 flex size-11 items-center justify-center border bg-background text-foreground transition-colors duration-500 group-hover:bg-foreground group-hover:text-background">
                  <Icon aria-hidden className="size-5" strokeWidth={1.6} />
                </span>

                <h3 className="mt-5 text-xl font-black uppercase leading-[1.05] tracking-tight md:text-2xl">
                  {achievement.title}
                </h3>
                <p className="mt-4 font-serif text-sm italic leading-relaxed text-muted-foreground">
                  {achievement.body}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
