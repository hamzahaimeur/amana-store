import type { Metadata } from 'next'

import { ContactHeader } from '@/components/contact/contact-header'
import { ContactPageContent } from '@/components/contact/contact-page-content'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Amana Store — questions about orders, products, and more.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactPageContent />
    </>
  )
}
