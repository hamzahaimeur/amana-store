import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { ProductCard } from '@/components/home/product-card'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { featuredProducts } from '@/lib/home-data'

export function FeaturedProducts() {
  return (
    <section
      id="featured-products"
      aria-labelledby="products-heading"
      className="scroll-mt-24 border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              This month
            </span>
            <h2
              id="products-heading"
              className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              Featured products
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
              Everything here is in stock and ships within 48 hours.
            </p>
          </div>

          <Link
            href="/products"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            View all products
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </Reveal>

        <RevealGroup
          stagger={0.07}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProducts.map((product) => (
            <RevealItem key={product.name} className="h-full">
              <ProductCard product={product} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
