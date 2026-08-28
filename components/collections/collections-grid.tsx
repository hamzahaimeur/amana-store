import { ArrowUpRight, House, Shirt, Sparkles, Watch } from 'lucide-react'
import Link from 'next/link'

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { shopProducts, type ProductCategory } from '@/lib/products-data'

const collectionDetails: Record<
  ProductCategory,
  { icon: typeof Shirt; blurb: string }
> = {
  "Men's Clothing": {
    icon: Shirt,
    blurb: 'Breathable cottons and linens cut for everyday modest wear.',
  },
  'Home & Living': {
    icon: House,
    blurb:
      'Ceramics, textiles and practical home items in the demo catalog.',
  },
  Accessories: {
    icon: Watch,
    blurb: 'Leather goods and practical accessories in the demo catalog.',
  },
  'New Arrivals': {
    icon: Sparkles,
    blurb: 'Items presented as recent additions in this demo catalog.',
  },
}

export function CollectionsGrid() {
  const collections = (
    Object.keys(collectionDetails) as ProductCategory[]
  ).map((category) => ({
    category,
    ...collectionDetails[category],
    count: shopProducts.filter((p) => p.category === category).length,
  }))

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <RevealGroup className="grid gap-5 sm:grid-cols-2">
        {collections.map(({ category, icon: Icon, blurb, count }) => (
          <RevealItem key={category}>
            <Link
              href={`/products?category=${encodeURIComponent(category)}`}
              className="group flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none sm:p-8"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" strokeWidth={1.75} />
              </span>

              <div className="flex flex-col gap-1.5">
                <h2 className="text-xl font-semibold tracking-tight">
                  {category}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {blurb}
                </p>
              </div>

              <span className="mt-auto flex items-center justify-between pt-2 text-xs font-medium text-muted-foreground">
                {`${count} ${count === 1 ? 'item' : 'items'}`}
                <span className="inline-flex items-center gap-1 text-primary">
                  Shop now
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </span>
              </span>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
