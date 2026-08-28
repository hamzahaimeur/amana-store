import type { ProductIcon } from '@/lib/home-data'

export type ShopProduct = {
  id: string
  name: string
  /** Numeric price in USD — used for filtering and sorting. */
  price: number
  rating: number
  reviews: number
  icon: ProductIcon
  category: ProductCategory
  badge?: string
  /** Higher is newer — used for the "Newest" sort. */
  addedOrder: number
}

export const productCategories = [
  "Men's Clothing",
  'Home & Living',
  'Accessories',
  'New Arrivals',
] as const

export type ProductCategory = (typeof productCategories)[number]

export const sortOptions = [
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
] as const

export type SortValue = (typeof sortOptions)[number]['value']

export const shopProducts: ShopProduct[] = [
  {
    id: 'classic-cotton-shirt',
    name: 'Classic Cotton Shirt',
    price: 48,
    rating: 0,
    reviews: 0,
    icon: 'shirt',
    category: "Men's Clothing",
    addedOrder: 4,
  },
  {
    id: 'leather-wallet',
    name: 'Full-Grain Leather Wallet',
    price: 36,
    rating: 0,
    reviews: 0,
    icon: 'wallet',
    category: 'Accessories',
    addedOrder: 6,
  },
  {
    id: 'merino-wool-scarf',
    name: 'Merino Wool Scarf',
    price: 42,
    rating: 0,
    reviews: 0,
    icon: 'scarf',
    category: 'Accessories',
    addedOrder: 5,
  },
  {
    id: 'stoneware-mug',
    name: 'Stoneware Ceramic Mug',
    price: 18,
    rating: 0,
    reviews: 0,
    icon: 'mug',
    category: 'Home & Living',
    addedOrder: 3,
  },
  {
    id: 'washed-linen-throw',
    name: 'Washed Linen Throw',
    price: 64,
    rating: 0,
    reviews: 0,
    icon: 'throw',
    category: 'Home & Living',
    addedOrder: 13,
  },
  {
    id: 'canvas-strap-watch',
    name: 'Canvas Strap Watch',
    price: 79,
    rating: 0,
    reviews: 0,
    icon: 'watch',
    category: 'Accessories',
    addedOrder: 7,
  },
  {
    id: 'linen-kurta',
    name: 'Handwoven Linen Kurta',
    price: 68,
    rating: 0,
    reviews: 0,
    icon: 'shirt',
    category: "Men's Clothing",
    addedOrder: 9,
  },
  {
    id: 'brushed-flannel-overshirt',
    name: 'Brushed Flannel Overshirt',
    price: 86,
    rating: 0,
    reviews: 0,
    icon: 'shirt',
    category: "Men's Clothing",
    addedOrder: 8,
  },
  {
    id: 'ribbed-knit-sweater',
    name: 'Ribbed Cotton Knit Sweater',
    price: 94,
    rating: 0,
    reviews: 0,
    icon: 'shirt',
    category: "Men's Clothing",
    addedOrder: 2,
  },
  {
    id: 'olive-wood-serving-board',
    name: 'Olive Wood Serving Board',
    price: 32,
    rating: 0,
    reviews: 0,
    icon: 'throw',
    category: 'Home & Living',
    addedOrder: 10,
  },
  {
    id: 'clay-tea-set',
    name: 'Hand-Thrown Clay Tea Set',
    price: 58,
    rating: 0,
    reviews: 0,
    icon: 'mug',
    category: 'Home & Living',
    addedOrder: 1,
  },
  {
    id: 'cotton-prayer-mat',
    name: 'Quilted Cotton Prayer Mat',
    price: 54,
    rating: 0,
    reviews: 0,
    icon: 'throw',
    category: 'New Arrivals',
    addedOrder: 14,
  },
  {
    id: 'wool-felt-slippers',
    name: 'Wool Felt House Slippers',
    price: 44,
    rating: 0,
    reviews: 0,
    icon: 'throw',
    category: 'New Arrivals',
    addedOrder: 12,
  },
  {
    id: 'leather-card-holder',
    name: 'Slim Leather Card Holder',
    price: 24,
    rating: 0,
    reviews: 0,
    icon: 'wallet',
    category: 'Accessories',
    addedOrder: 11,
  },
  {
    id: 'brass-desk-clock',
    name: 'Brushed Brass Desk Clock',
    price: 112,
    rating: 0,
    reviews: 0,
    icon: 'watch',
    category: 'New Arrivals',
    addedOrder: 15,
  },
  {
    id: 'waffle-cotton-towel-set',
    name: 'Waffle Cotton Towel Set',
    price: 72,
    rating: 0,
    reviews: 0,
    icon: 'throw',
    category: 'Home & Living',
    addedOrder: 16,
  },
]

export const priceBounds = {
  min: Math.min(...shopProducts.map((p) => p.price)),
  max: Math.max(...shopProducts.map((p) => p.price)),
}

export const PRODUCTS_PER_PAGE = 8
