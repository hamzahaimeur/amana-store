'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useCart } from '@/components/cart/cart-provider'
import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { mainNav } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function SiteNavbar() {
  const { itemCount: cartCount } = useCart()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        scrolled
          ? 'border-border bg-background/85 backdrop-blur-xl'
          : 'border-transparent bg-background',
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6 lg:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {mainNav.map((link) => {
            const active =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative inline-flex items-center rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                    active
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Search products"
            className="hidden size-10 place-items-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none active:scale-95 sm:grid"
          >
            <Search className="size-[18px]" strokeWidth={1.75} />
          </button>

          <ThemeToggle />

          <Link
            href="/cart"
            aria-label={`Cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
            className="relative grid size-10 place-items-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none active:scale-95"
          >
            <ShoppingBag className="size-[18px]" strokeWidth={1.75} />
            {cartCount > 0 ? (
              <span className="absolute -top-1 -right-1 grid min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-semibold text-primary-foreground tabular-nums">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            ) : null}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary active:scale-95 md:hidden"
          >
            {open ? (
              <X className="size-[18px]" strokeWidth={1.75} />
            ) : (
              <Menu className="size-[18px]" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              {mainNav.map((link, i) => {
                const active =
                  link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'block rounded-xl px-3.5 py-3 text-[15px] font-medium transition-colors',
                        active
                          ? 'bg-accent text-accent-foreground'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
