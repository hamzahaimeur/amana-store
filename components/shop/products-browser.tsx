'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { SlidersHorizontal, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { EmptyState } from '@/components/shop/empty-state'
import { FilterPanel, type Filters } from '@/components/shop/filter-panel'
import { ShopProductCard } from '@/components/shop/shop-product-card'
import { SortSelect } from '@/components/shop/sort-select'
import { Button } from '@/components/ui/button'
import {
  PRODUCTS_PER_PAGE,
  priceBounds,
  productCategories,
  shopProducts,
  type ProductCategory,
  type SortValue,
} from '@/lib/products-data'

const defaultFilters: Filters = {
  categories: [],
  price: [priceBounds.min, priceBounds.max],
}

export function ProductsBrowser() {
  const searchParams = useSearchParams()
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const [sort, setSort] = useState<SortValue>('newest')
  const [visible, setVisible] = useState(PRODUCTS_PER_PAGE)
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Pre-apply the category filter when arriving from a Collections link
  // (e.g. /products?category=Accessories).
  useEffect(() => {
    const requested = searchParams.get('category')
    if (!requested) return
    const match = productCategories.find((c) => c === requested)
    if (match) {
      setFilters((current) => ({ ...current, categories: [match] }))
    }
    // Only read the param on first load — after that, filters are user-driven.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Counts are computed from the full catalog so the sidebar totals stay stable.
  const counts = useMemo(() => {
    const base = Object.fromEntries(
      productCategories.map((c) => [c, 0]),
    ) as Record<ProductCategory, number>
    for (const product of shopProducts) base[product.category] += 1
    return base
  }, [])

  const results = useMemo(() => {
    const [min, max] = filters.price
    const filtered = shopProducts.filter(
      (product) =>
        (filters.categories.length === 0 ||
          filters.categories.includes(product.category)) &&
        product.price >= min &&
        product.price <= max,
    )

    const sorted = [...filtered]
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price)
    else if (sort === 'rating')
      sorted.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
    else sorted.sort((a, b) => b.addedOrder - a.addedOrder)

    return sorted
  }, [filters, sort])

  // Reset pagination whenever the result set changes.
  useEffect(() => {
    setVisible(PRODUCTS_PER_PAGE)
  }, [filters, sort])

  // Lock scroll while the mobile filter drawer is open.
  useEffect(() => {
    if (!drawerOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [drawerOpen])

  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [drawerOpen])

  const shown = results.slice(0, visible)
  const hasMore = visible < results.length
  const activeCount =
    filters.categories.length +
    (filters.price[0] !== priceBounds.min || filters.price[1] !== priceBounds.max
      ? 1
      : 0)

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <Reveal
          as="aside"
          aria-label="Product filters"
          className="hidden w-60 shrink-0 lg:block"
        >
          <div className="sticky top-28 rounded-2xl border border-border bg-card p-6">
            <FilterPanel filters={filters} onChange={setFilters} counts={counts} />
          </div>
        </Reveal>

        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <Reveal className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              Showing{' '}
              <span className="font-medium text-foreground tabular-nums">
                {shown.length}
              </span>{' '}
              of{' '}
              <span className="font-medium text-foreground tabular-nums">
                {results.length}
              </span>{' '}
              products
            </p>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setDrawerOpen(true)}
                aria-expanded={drawerOpen}
                className="h-10 rounded-full px-4 lg:hidden"
              >
                <SlidersHorizontal className="size-4" strokeWidth={1.9} />
                Filters
                {activeCount > 0 ? (
                  <span className="ml-1 grid min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-semibold text-primary-foreground tabular-nums">
                    {activeCount}
                  </span>
                ) : null}
              </Button>

              <SortSelect value={sort} onChange={setSort} />
            </div>
          </Reveal>

          {results.length === 0 ? (
            <EmptyState onReset={() => setFilters(defaultFilters)} />
          ) : (
            <>
              <RevealGroup
                key={`${sort}-${filters.categories.join()}-${filters.price.join()}`}
                stagger={0.06}
                immediate
                className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
              >
                {shown.map((product) => (
                  <RevealItem key={product.id} className="h-full">
                    <ShopProductCard product={product} />
                  </RevealItem>
                ))}
              </RevealGroup>

              {hasMore ? (
                <div className="mt-4 flex flex-col items-center gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setVisible((v) => v + PRODUCTS_PER_PAGE)}
                    className="h-11 rounded-full px-6"
                  >
                    Load more products
                  </Button>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {results.length - shown.length} remaining
                  </span>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {drawerOpen ? (
          <div className="fixed inset-0 z-60 lg:hidden">
            <motion.button
              type="button"
              aria-label="Close filters"
              onClick={() => setDrawerOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Product filters"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 left-0 flex w-[85%] max-w-xs flex-col border-r border-border bg-background"
            >
              <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
                <h2 className="text-base font-semibold tracking-tight">Filters</h2>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close filters"
                  className="grid size-9 place-items-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary active:scale-95"
                >
                  <X className="size-[18px]" strokeWidth={1.75} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6">
                <FilterPanel
                  filters={filters}
                  onChange={setFilters}
                  counts={counts}
                />
              </div>

              <div className="border-t border-border px-5 py-4">
                <Button
                  onClick={() => setDrawerOpen(false)}
                  className="h-11 w-full rounded-full"
                >
                  {`Show ${results.length} ${results.length === 1 ? 'product' : 'products'}`}
                </Button>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
