import type { Metadata } from 'next'

import { CollectionsGrid } from '@/components/collections/collections-grid'
import { CollectionsHeader } from '@/components/collections/collections-header'

export const metadata: Metadata = {
  title: 'Collections',
  description:
    'Browse the Amana Store catalog by collection — clothing, home goods, accessories and new arrivals.',
}

export default function CollectionsPage() {
  return (
    <>
      <CollectionsHeader />
      <CollectionsGrid />
    </>
  )
}
