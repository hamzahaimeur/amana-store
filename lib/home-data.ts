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
    href: '/shop/clothing',
    itemCount: '86 items',
    blurb: 'Breathable cottons and linens cut for everyday modest wear.',
    icon: 'shirt',
  },
  {
    name: 'Home & Living',
    href: '/shop/home',
    itemCount: '124 items',
    blurb: 'Hand-finished ceramics, textiles and small comforts for the home.',
    icon: 'home',
  },
  {
    name: 'Accessories',
    href: '/shop/accessories',
    itemCount: '52 items',
    blurb: 'Leather goods and quiet details made to outlast a season.',
    icon: 'watch',
  },
  {
    name: 'New Arrivals',
    href: '/shop/new',
    itemCount: '18 items',
    blurb: 'The latest pieces added to the Amana collection this month.',
    icon: 'sparkles',
  },
]

export const featuredProducts: Product[] = [
  {
    name: 'Classic Cotton Shirt',
    price: '$48.00',
    rating: 4.8,
    reviews: 214,
    icon: 'shirt',
    category: "Men's Clothing",
    badge: 'Bestseller',
  },
  {
    name: 'Full-Grain Leather Wallet',
    price: '$36.00',
    rating: 4.9,
    reviews: 168,
    icon: 'wallet',
    category: 'Accessories',
  },
  {
    name: 'Merino Wool Scarf',
    price: '$42.00',
    rating: 4.7,
    reviews: 96,
    icon: 'scarf',
    category: 'Accessories',
  },
  {
    name: 'Stoneware Ceramic Mug',
    price: '$18.00',
    rating: 4.6,
    reviews: 132,
    icon: 'mug',
    category: 'Home & Living',
  },
  {
    name: 'Washed Linen Throw',
    price: '$64.00',
    rating: 4.8,
    reviews: 74,
    icon: 'throw',
    category: 'Home & Living',
    badge: 'New',
  },
  {
    name: 'Canvas Strap Watch',
    price: '$79.00',
    rating: 4.5,
    reviews: 58,
    icon: 'watch',
    category: 'Accessories',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Ahmed Rahman',
    role: 'Customer since 2022',
    rating: 5,
    quote:
      'The cotton shirts have held their shape after a year of weekly wear. It is rare to find this kind of quality at a fair price.',
  },
  {
    name: 'Yusuf Karim',
    role: 'Verified buyer',
    rating: 5,
    quote:
      'Ordered on a Tuesday and it arrived Thursday, wrapped properly with no plastic. The wallet is exactly as pictured.',
  },
  {
    name: 'Omar Siddiqui',
    role: 'Customer since 2021',
    rating: 4,
    quote:
      'What keeps me coming back is the honesty — clear sourcing notes on every product and support that actually replies.',
  },
]
