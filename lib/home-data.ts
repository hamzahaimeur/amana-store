export type Category = {
  name: string
  href: string
  itemCount: string
  blurb: string
  icon: 'shirt' | 'home' | 'watch' | 'sparkles'
}

export type ProductIcon = 'shirt' | 'wallet' | 'scarf' | 'mug' | 'throw' | 'watch'

export type Product = {
  name: string
  price: string
  rating: number
  reviews: number
  icon: ProductIcon
  category: string
  badge?: string
}

export type Testimonial = {
  name: string
  role: string
  rating: number
  quote: string
}

export const categories: Category[] = [
  {
    name: "Men's Clothing",
    href: '/products?category=Men%27s%20Clothing',
    itemCount: 'Collection',
    blurb: 'Breathable cottons and linens cut for everyday modest wear.',
    icon: 'shirt',
  },
  {
    name: 'Home & Living',
    href: '/products?category=Home%20%26%20Living',
    itemCount: 'Collection',
    blurb: 'Ceramics, textiles and practical home items in the demo catalog.',
    icon: 'home',
  },
  {
    name: 'Accessories',
    href: '/products?category=Accessories',
    itemCount: 'Collection',
    blurb: 'Leather goods and practical accessories in the demo catalog.',
    icon: 'watch',
  },
  {
    name: 'New Arrivals',
    href: '/products?category=New%20Arrivals',
    itemCount: 'Collection',
    blurb: 'Items presented as recent additions in this demo catalog.',
    icon: 'sparkles',
  },
]

export const featuredProducts: Product[] = [
  {
    name: 'Classic Cotton Shirt',
    price: '$48.00',
    rating: 0,
    reviews: 0,
    icon: 'shirt',
    category: "Men's Clothing",
  },
  {
    name: 'Full-Grain Leather Wallet',
    price: '$36.00',
    rating: 0,
    reviews: 0,
    icon: 'wallet',
    category: 'Accessories',
  },
  {
    name: 'Merino Wool Scarf',
    price: '$42.00',
    rating: 0,
    reviews: 0,
    icon: 'scarf',
    category: 'Accessories',
  },
  {
    name: 'Stoneware Ceramic Mug',
    price: '$18.00',
    rating: 0,
    reviews: 0,
    icon: 'mug',
    category: 'Home & Living',
  },
  {
    name: 'Washed Linen Throw',
    price: '$64.00',
    rating: 0,
    reviews: 0,
    icon: 'throw',
    category: 'Home & Living',
  },
  {
    name: 'Canvas Strap Watch',
    price: '$79.00',
    rating: 0,
    reviews: 0,
    icon: 'watch',
    category: 'Accessories',
  },
]

export const testimonials: Testimonial[] = []
