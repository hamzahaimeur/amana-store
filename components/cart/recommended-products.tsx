'use client'

import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { useCart } from '@/components/cart/cart-provider'
import { ShopProductCard } from '@/components/shop/shop-product-card'
import { shopProducts } from '@/lib/products-data'

const RECOMMENDATION_COUNT = 4

export function RecommendedProducts() {
  const { items } = useCart()
  const inCart = new Set(items.map((item) => item.productId))

  // Prefer highly rated pieces the shopper does not already have in the cart.
  const recommendations = shopProducts
    .filter((product) => !inCart.has(product.id))
    .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
    .slice(0, RECOMMENDATION_COUNT)

  if (recommendations.length === 0) return null

  return (
    <section
      aria-labelledby="recommended-heading"
      className="border-t border-border bg-secondary/30"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal className="flex flex-col gap-2">
          <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
            Handpicked for you
          </span>
          <h2
            id="recommended-heading"
            className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
          >
            You Might Also Like
          </h2>
        </Reveal>

        <RevealGroup className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recommendations.map((product) => (
            <RevealItem key={product.id} className="h-full">
              <ShopProductCard product={product} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
