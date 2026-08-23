import type { Metadata } from 'next'

import { CartHeader } from '@/components/cart/cart-header'
import { CartPageContent } from '@/components/cart/cart-page-content'
import { RecommendedProducts } from '@/components/cart/recommended-products'

export const metadata: Metadata = {
  title: 'Your Cart',
  description: 'Review the items in your cart before checkout.',
}

export default function CartPage() {
  return (
    <>
      <CartHeader />
      <CartPageContent />
      <RecommendedProducts />
    </>
  )
}
