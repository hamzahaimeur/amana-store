export type NavLink = {
  label: string
  href: string
}

export const siteConfig = {
  name: 'Amana Store',
  tagline: 'Trusted essentials for the modern home',
  description:
    'Amana Store offers thoughtfully sourced halal, family-friendly clothing, home goods and accessories — chosen for quality, modesty and everyday trust.',
  email: 'salam@amanastore.com',
  phone: '+1 (555) 018-2245',
  address: '24 Cedar Court, Suite 300, Springfield',
} as const

export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/products' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Shop',
    links: [
      { label: 'Clothing', href: '/shop/clothing' },
      { label: 'Home Goods', href: '/shop/home' },
      { label: 'Accessories', href: '/shop/accessories' },
      { label: 'New Arrivals', href: '/shop/new' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Sourcing', href: '/sourcing' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Shipping', href: '/shipping' },
      { label: 'Returns', href: '/returns' },
      { label: 'Order Tracking', href: '/orders' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
]
