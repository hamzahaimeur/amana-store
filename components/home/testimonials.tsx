import { Reveal } from '@/components/motion/reveal'

export function Testimonials() {
  return (
    <section aria-labelledby="trust-heading" className="border-b border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
            About this storefront
          </span>
          <h2 id="trust-heading" className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Clear product information, without invented reviews or certifications.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            This portfolio/demo store does not present fictional customer testimonials,
            review counts or third-party certifications as real-world facts.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
