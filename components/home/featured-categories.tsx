import { ArrowUpRight, House, Shirt, Sparkles, Watch } from 'lucide-react'
import Link from 'next/link'

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { categories, type Category } from '@/lib/home-data'

const iconMap = {
  shirt: Shirt,
  home: House,
  watch: Watch,
  sparkles: Sparkles,
} satisfies Record<Category['icon'], typeof Shirt>

export function FeaturedCategories() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="border-b border-border bg-secondary/40"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
            Browse
          </span>
          <h2
            id="categories-heading"
            className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Featured categories
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
            Four edits that cover most of what people come to us for.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon]
            return (
              <RevealItem key={category.name}>
                <Link
                  href={category.href}
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>

                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-semibold tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                      {category.blurb}
                    </p>
                  </div>

                  <span className="mt-auto flex items-center justify-between pt-2 text-xs font-medium text-muted-foreground">
                    {category.itemCount}
                    <ArrowUpRight
                      className="size-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </span>
                </Link>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
