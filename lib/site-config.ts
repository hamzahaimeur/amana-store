export type NavLink = {
  label: string
  href: string
}

export const siteConfig = {
  name: 'Amana Store',
  tagline: 'A thoughtful demo store for everyday essentials',
  description:
    'Amana Store is a portfolio/demo storefront concept featuring modest, family-friendly clothing, home goods and accessories. Product and business details shown here are illustrative.',
  email: 'Contact details are not configured',
  phone: 'Contact details are not configured',
  address: 'Demo storefront — business address not configured',
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
      { label: 'Clothing', href: '/products?category=Men%27s%20Clothing' },
      { label: 'Home Goods', href: '/products?category=Home%20%26%20Living' },
      { label: 'Accessories', href: '/products?category=Accessories' },
      { label: 'New Arrivals', href: '/products?category=New%20Arrivals' },
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
