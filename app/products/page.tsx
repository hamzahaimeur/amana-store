import type { Metadata } from 'next'
import { Suspense } from 'react'

import { ProductsBrowser } from '@/components/shop/products-browser'
import { ShopHeader } from '@/components/shop/shop-header'

export const metadata: Metadata = {
  title: 'All Products',
  description:
    'Browse the full Amana Store collection — clothing, home goods and accessories, filterable by category and price.',
}

export default function ProductsPage() {
  return (
    <>
      <ShopHeader />
      <div className="pt-10 sm:pt-12">
        <Suspense fallback={null}>
          <ProductsBrowser />
        </Suspense>
      </div>
    </>
  )
}
