import type { Metadata } from 'next'

import { CheckoutHeader } from '@/components/checkout/checkout-header'
import { CheckoutPageContent } from '@/components/checkout/checkout-page-content'

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Enter your shipping and payment details to complete your order.',
}

export default function CheckoutPage() {
  return (
    <>
      <CheckoutHeader />
      <CheckoutPageContent />
    </>
  )
}
