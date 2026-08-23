import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { StarRating } from '@/components/star-rating'
import { testimonials } from '@/lib/home-data'

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-b border-border bg-secondary/40"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
            Reviews
          </span>
          <h2
            id="testimonials-heading"
            className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            What customers say
          </h2>
        </Reveal>

        <RevealGroup stagger={0.1} className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <RevealItem
              key={testimonial.name}
              className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/30"
            >
              <StarRating rating={testimonial.rating} size={15} />

              <blockquote className="flex-1 text-sm leading-relaxed text-foreground text-pretty">
                {`"${testimonial.quote}"`}
              </blockquote>

              <footer className="flex items-center gap-3 border-t border-border pt-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                  {testimonial.name.charAt(0)}
                </span>
                <span className="flex flex-col">
                  <cite className="text-sm font-medium not-italic">
                    {testimonial.name}
                  </cite>
                  <span className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </span>
                </span>
              </footer>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
