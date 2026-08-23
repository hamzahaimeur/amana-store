'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { Reveal } from '@/components/motion/reveal'

export function ContactHeader() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Reveal immediate as="nav" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <ChevronRight className="size-3.5" strokeWidth={2} />
            </li>
            <li aria-current="page" className="font-medium text-foreground">
              Contact
            </li>
          </ol>
        </Reveal>

        <Reveal immediate delay={0.08} className="mt-5 flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
            Contact us
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Get in touch
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
            Have a question about an order, a product, or anything else? Send us
            a message and we&apos;ll get back to you shortly.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
