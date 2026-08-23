'use client'

import { ProductCard } from '@/components/home/product-card'
import type { ShopProduct } from '@/lib/products-data'

/**
 * Bridges the shop's numeric-price product shape onto the Home Page
 * `ProductCard` so both pages render an identical card.
 */
export function ShopProductCard({ product }: { product: ShopProduct }) {
  return (
    <ProductCard
      product={{
        name: product.name,
        price: `$${product.price.toFixed(2)}`,
        rating: product.rating,
        reviews: product.reviews,
        icon: product.icon,
        category: product.category,
        badge: product.badge,
      }}
    />
  )
}
