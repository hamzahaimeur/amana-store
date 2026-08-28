import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'A few quick answers about products, orders, delivery and returns.',
}

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Reveal immediate as="nav" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link href="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li aria-hidden="true" className="flex items-center"><ChevronRight className="size-3.5" strokeWidth={2} /></li>
              <li aria-current="page" className="font-medium text-foreground">FAQ</li>
            </ol>
          </Reveal>
          <Reveal immediate delay={0.08} className="mt-5 flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">FAQ</span>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Answers to common questions</h1>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">A few quick answers about products, orders, delivery and returns.</p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RevealItem key="Can I return an item?"><article className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"><h2 className="text-base font-semibold tracking-tight">Can I return an item?</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Yes. Eligible products can be returned within 30 days of delivery. Please contact support before sending an item back.</p></article></RevealItem>
          <RevealItem key="How do I track my order?"><article className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"><h2 className="text-base font-semibold tracking-tight">How do I track my order?</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">When tracking is available, it is provided with your shipment information. You can also contact support with your order number.</p></article></RevealItem>
          <RevealItem key="How long does shipping take?"><article className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"><h2 className="text-base font-semibold tracking-tight">How long does shipping take?</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Delivery time depends on the destination and carrier. Your shipment information will contain the latest available details.</p></article></RevealItem>
          <RevealItem key="Are the products responsibly sourced?"><article className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"><h2 className="text-base font-semibold tracking-tight">Are the products responsibly sourced?</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">We aim for clear sourcing information and prefer suppliers and materials that meet our quality standards.</p></article></RevealItem>
          <RevealItem key="How can I contact Amana Store?"><article className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"><h2 className="text-base font-semibold tracking-tight">How can I contact Amana Store?</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Use our Contact page and include your order number when your question is about an existing order.</p></article></RevealItem>
        </RevealGroup>
      </section>
    </>
  )
}
