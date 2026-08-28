import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Order Tracking',
  description: 'Your order information is the best way to understand where your purchase is in the delivery process.',
}

export default function OrdersPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Reveal immediate as="nav" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link href="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li aria-hidden="true" className="flex items-center"><ChevronRight className="size-3.5" strokeWidth={2} /></li>
              <li aria-current="page" className="font-medium text-foreground">Order Tracking</li>
            </ol>
          </Reveal>
          <Reveal immediate delay={0.08} className="mt-5 flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">Order Tracking</span>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Keep an eye on your order</h1>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">Your order information is the best way to understand where your purchase is in the delivery process.</p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RevealItem key="01"><article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"><span className="text-xs font-semibold tracking-[0.14em] text-primary">01</span><h2 className="mt-3 text-base font-semibold tracking-tight">Have your order number ready</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Use the order number from your confirmation email when contacting support.</p></article></RevealItem>
          <RevealItem key="02"><article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"><span className="text-xs font-semibold tracking-[0.14em] text-primary">02</span><h2 className="mt-3 text-base font-semibold tracking-tight">Tracking availability</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Tracking details are shared when a carrier tracking number is available for your shipment.</p></article></RevealItem>
          <RevealItem key="03"><article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"><span className="text-xs font-semibold tracking-[0.14em] text-primary">03</span><h2 className="mt-3 text-base font-semibold tracking-tight">Still waiting?</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">If an expected delivery date has passed, contact us and we will help investigate the shipment.</p></article></RevealItem>
        </RevealGroup>
      </section>
    </>
  )
}
