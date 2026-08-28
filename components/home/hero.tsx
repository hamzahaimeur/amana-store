import {
  ArrowRight,
  BadgeCheck,
  Coffee,
  Leaf,
  Shirt,
  Truck,
  Wallet,
  Watch,
} from 'lucide-react'
import Link from 'next/link'

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'

const proofPoints = [
  { value: '12k+', label: 'Orders delivered' },
  { value: '16', label: 'Demo products' },
  { value: '48h', label: 'Dispatch window' },
]

const collage = [
  { icon: Shirt, label: 'Clothing', tone: 'bg-card' },
  { icon: Coffee, label: 'Home', tone: 'bg-accent' },
  { icon: Wallet, label: 'Leather', tone: 'bg-accent' },
  { icon: Watch, label: 'Accessories', tone: 'bg-card' },
]

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <div className="flex flex-col gap-7">
          <Reveal immediate>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <BadgeCheck className="size-3.5 text-primary" strokeWidth={2} />
              Modest, family-friendly selection
            </span>
          </Reveal>

          <Reveal immediate delay={0.08}>
            <h1
              id="hero-heading"
              className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              Thoughtful Everyday Essentials
            </h1>
          </Reveal>

          <Reveal immediate delay={0.16}>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              Amana Store brings together clothing, home goods and accessories chosen
              for their intended use and presented with clear, straightforward information. This
              portfolio storefront uses illustrative catalog content.
            </p>
          </Reveal>

          <Reveal immediate delay={0.24} className="flex flex-wrap items-center gap-3">
            <Button
              className="group h-12 rounded-full px-6 text-[15px]"
              nativeButton={false}
              render={<Link href="#featured-products" />}
            >
              Shop Now
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full border-border px-6 text-[15px]"
              nativeButton={false}
              render={<Link href="/about" />}
            >
              Learn More
            </Button>
          </Reveal>

          <RevealGroup
            immediate
            delayChildren={0.34}
            stagger={0.07}
            className="mt-2 flex flex-wrap gap-x-10 gap-y-5 border-t border-border pt-7"
          >
            {proofPoints.map((point) => (
              <RevealItem key={point.label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-semibold tracking-tight tabular-nums">
                  {point.value}
                </span>
                <span className="text-xs text-muted-foreground">{point.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal immediate delay={0.18} className="relative">
          <div className="rounded-[2rem] border border-border bg-secondary/60 p-4 sm:p-6">
            <RevealGroup
              immediate
              delayChildren={0.34}
              stagger={0.09}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {collage.map((tile, index) => {
                const Icon = tile.icon
                return (
                  <RevealItem
                    key={tile.label}
                    className={`flex aspect-square flex-col justify-between rounded-2xl border border-border/70 p-4 sm:p-5 ${tile.tone} ${
                      index % 3 === 0 ? 'translate-y-0' : 'sm:translate-y-3'
                    }`}
                  >
                    <Icon
                      className="size-7 text-primary sm:size-8"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                    <span className="text-xs font-medium tracking-wide text-muted-foreground">
                      {tile.label}
                    </span>
                  </RevealItem>
                )
              })}
            </RevealGroup>

            <RevealGroup
              immediate
              delayChildren={0.7}
              stagger={0.08}
              className="mt-4 flex flex-col gap-3 sm:mt-7"
            >
              <RevealItem className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card px-4 py-3.5">
                <Truck className="size-5 shrink-0 text-primary" strokeWidth={1.5} />
                <span className="text-sm leading-snug text-foreground">
                  Shipping details are shown at checkout for this demo storefront
                </span>
              </RevealItem>
              <RevealItem className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card px-4 py-3.5">
                <Leaf className="size-5 shrink-0 text-primary" strokeWidth={1.5} />
                <span className="text-sm leading-snug text-foreground">
                  Product information is presented as illustrative demo content
                </span>
              </RevealItem>
            </RevealGroup>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
