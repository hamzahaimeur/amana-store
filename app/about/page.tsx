import type { Metadata } from 'next'

import { AboutHeader } from '@/components/about/about-header'
import { AboutPageContent } from '@/components/about/about-page-content'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn the story behind Amana Store and get in touch with our team.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <AboutPageContent />
    </>
  )
}
