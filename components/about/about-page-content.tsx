import { HandHeart, Leaf, ShieldCheck, Sparkles } from 'lucide-react'

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

const values = [
  {
    icon: ShieldCheck,
    title: 'Honest sourcing',
    blurb:
      'Product pages are designed to present clear information; supplier and manufacturing details must be configured with verified data before launch.',
  },
  {
    icon: Leaf,
    title: 'Kind to the planet',
    blurb:
      'The storefront is designed to support straightforward packaging and material information without making unsupported sustainability claims.',
  },
  {
    icon: HandHeart,
    title: 'Fair to everyone',
    blurb:
      "Pricing and supplier relationships should be based on the store owner's actual commercial arrangements.",
  },
  {
    icon: Sparkles,
    title: 'Considered range',
    blurb:
      'The catalog is intentionally presented as a focused demo collection.',
  },
]

export function AboutPageContent() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <Reveal className="flex flex-col gap-3">
        <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
          Our story
        </span>
        <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          Everyday essentials, made to be trusted
        </h2>
        <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
          <p>
            Amana Store began with a simple idea: everyday essentials should be
            beautifully made, honestly priced, and kind to the planet. We curate
            a small, considered range so every product earns its place.
          </p>
          <p>
            From product presentation to return information,
            we try to do right by our customers and the world they live in.
            Thank you for shopping with us.
          </p>
        </div>
      </Reveal>

      <div className="mt-14">
        <Reveal delay={0.06} className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold tracking-tight">
            What we stand for
          </h3>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground text-pretty">
            The four principles that shape every product decision we make.
          </p>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, blurb }) => (
            <RevealItem key={title}>
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl">
                <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-base font-semibold tracking-tight">
                    {title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {blurb}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
