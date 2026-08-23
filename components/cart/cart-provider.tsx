'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import { shopProducts, type ShopProduct } from '@/lib/products-data'

export type CartItem = {
  /** Unique per product + variant combination. */
  key: string
  productId: string
  name: string
  unitPrice: number
  icon: ShopProduct['icon']
  category: string
  /** Selected size / variant label, when the product has one. */
  variant?: string
  quantity: number
}

export const MAX_QUANTITY = 10

/** Placeholder rates — a real store would resolve these at checkout. */
const SHIPPING_FLAT = 6.5
const FREE_SHIPPING_THRESHOLD = 120
const TAX_RATE = 0.0725

const PROMO_CODES: Record<string, { label: string; rate: number }> = {
  AMANA10: { label: 'AMANA10', rate: 0.1 },
  BARAKAH15: { label: 'BARAKAH15', rate: 0.15 },
}

function buildItem(
  productId: string,
  quantity: number,
  variant?: string,
): CartItem {
  const product = shopProducts.find((p) => p.id === productId)
  if (!product) throw new Error(`Unknown product: ${productId}`)
  return {
    key: variant ? `${productId}::${variant}` : productId,
    productId: product.id,
    name: product.name,
    unitPrice: product.price,
    icon: product.icon,
    category: product.category,
    variant,
    quantity,
  }
}

/** Seeded so the cart page has something to show on a fresh visit. */
const initialItems: CartItem[] = [
  buildItem('classic-cotton-shirt', 2, 'Medium'),
  buildItem('linen-kurta', 1, 'Large'),
  buildItem('stoneware-mug', 3),
]

export type CartTotals = {
  subtotal: number
  discount: number
  shipping: number
  tax: number
  total: number
}

type CartContextValue = {
  items: CartItem[]
  itemCount: number
  totals: CartTotals
  promo: { code: string; rate: number } | null
  addItem: (productId: string, quantity?: number, variant?: string) => void
  updateQuantity: (key: string, quantity: number) => void
  removeItem: (key: string) => void
  clearCart: () => void
  applyPromo: (code: string) => { ok: boolean; message: string }
  removePromo: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(initialItems)
  const [promo, setPromo] = useState<{ code: string; rate: number } | null>(null)

  const addItem = useCallback(
    (productId: string, quantity = 1, variant?: string) => {
      setItems((current) => {
        const next = buildItem(productId, quantity, variant)
        const existing = current.find((item) => item.key === next.key)
        if (!existing) return [...current, next]
        return current.map((item) =>
          item.key === next.key
            ? {
                ...item,
                quantity: Math.min(MAX_QUANTITY, item.quantity + quantity),
              }
            : item,
        )
      })
    },
    [],
  )

  const updateQuantity = useCallback((key: string, quantity: number) => {
    const clamped = Math.max(1, Math.min(MAX_QUANTITY, Math.round(quantity)))
    setItems((current) =>
      current.map((item) =>
        item.key === key ? { ...item, quantity: clamped } : item,
      ),
    )
  }, [])

  const removeItem = useCallback((key: string) => {
    setItems((current) => current.filter((item) => item.key !== key))
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
    setPromo(null)
  }, [])

  const applyPromo = useCallback((code: string) => {
    const match = PROMO_CODES[code.trim().toUpperCase()]
    if (!match) {
      return { ok: false, message: 'That code is not valid.' }
    }
    setPromo({ code: match.label, rate: match.rate })
    return { ok: true, message: `${match.label} applied` }
  }, [])

  const removePromo = useCallback(() => setPromo(null), [])

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )

  const totals = useMemo<CartTotals>(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0,
    )
    const discount = promo ? subtotal * promo.rate : 0
    const discounted = subtotal - discount
    const shipping =
      items.length === 0 || discounted >= FREE_SHIPPING_THRESHOLD
        ? 0
        : SHIPPING_FLAT
    const tax = discounted * TAX_RATE
    return {
      subtotal,
      discount,
      shipping,
      tax,
      total: discounted + shipping + tax,
    }
  }, [items, promo])

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount,
      totals,
      promo,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      applyPromo,
      removePromo,
    }),
    [
      items,
      itemCount,
      totals,
      promo,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      applyPromo,
      removePromo,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const FREE_SHIPPING_AT = FREE_SHIPPING_THRESHOLD
