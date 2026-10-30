import { Quote, Star } from 'lucide-react'
import { testimonials, type Testimonial } from '@/lib/testimonials'
import { Reveal, SectionLabel } from './reveal'

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="group flex w-[320px] shrink-0 flex-col justify-between border-t pt-8 transition-colors duration-500 hover:border-foreground/40 sm:w-[400px] md:w-[500px]">
      <div>
        <Quote aria-hidden className="size-8 text-foreground/30" />
        <blockquote className="mt-6 text-lg font-light leading-relaxed text-foreground/80 md:text-xl">
          <p>&ldquo;{testimonial.quote}&rdquo;</p>
        </blockquote>
      </div>

      <figcaption className="mt-10 flex items-center gap-4">
        <span role="img" aria-label="Rated 5 out of 5" className="flex shrink-0 gap-0.5 opacity-50">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} aria-hidden className="size-2.5 fill-current" />
          ))}
        </span>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted font-mono text-[11px] font-semibold tracking-[0.08em] text-muted-foreground">
          {testimonial.initials}
        </span>
        <span className="min-w-0">
          <span className="block text-xs font-bold uppercase tracking-[0.14em]">{testimonial.name}</span>
          <span className="mt-1 block font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
            {testimonial.role}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <SectionLabel index="07">Testimonials</SectionLabel>
          <h2
            id="testimonials-title"
            className="mt-5 text-[clamp(2.75rem,6vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]"
          >
            What people
            <br />
            Say
          </h2>
        </Reveal>
      </div>

      <div className="group relative mt-16 w-full overflow-hidden motion-reduce:overflow-x-auto md:mt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-linear-to-r from-background to-transparent md:w-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent sm:w-28 md:w-40"
        />

        <div className="pl-5 md:pl-[max(2.5rem,calc((100%-1440px)/2+2.5rem))]">
          <div className="flex w-max will-change-transform motion-safe:animate-[marquee_120s_linear_infinite] motion-safe:[animation-delay:-30s] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none">
            {[0, 1, 2, 3].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-6 pr-6" aria-hidden={copy !== 0}>
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={`${copy}-${testimonial.name}`} testimonial={testimonial} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
