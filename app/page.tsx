import { FeaturedCategories } from '@/components/home/featured-categories'
import { FeaturedProducts } from '@/components/home/featured-products'
import { Hero } from '@/components/home/hero'
import { Newsletter } from '@/components/home/newsletter'
import { Testimonials } from '@/components/home/testimonials'

export default function Page() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
    </>
  )
}
