'use client'

import { ArrowRight, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'

export function EmptyCart() {
  return (
    <Reveal
      immediate
      className="flex flex-col items-center gap-5 rounded-2xl border border-dashed border-border bg-card/60 px-6 py-16 text-center"
    >
      <span className="relative grid size-20 place-items-center rounded-full bg-secondary">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-accent/60"
        />
        <ShoppingBag
          className="relative size-9 text-primary"
          strokeWidth={1.2}
          aria-hidden="true"
        />
      </span>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold tracking-tight">
          Your cart is empty
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
          Nothing here yet — browse the collection and add a few pieces you can
          trust for years to come.
        </p>
      </div>

      <Button
        className="group h-11 rounded-full px-6"
        nativeButton={false}
        render={<Link href="/products" />}
      >
        Continue Shopping
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      </Button>
    </Reveal>
  )
}
