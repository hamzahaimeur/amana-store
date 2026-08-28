import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'By using Amana Store, you agree to use the website responsibly and to the terms described below.',
}

export default function TermsPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Reveal immediate as="nav" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link href="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li aria-hidden="true" className="flex items-center"><ChevronRight className="size-3.5" strokeWidth={2} /></li>
              <li aria-current="page" className="font-medium text-foreground">Terms of Service</li>
            </ol>
          </Reveal>
          <Reveal immediate delay={0.08} className="mt-5 flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">Terms of Service</span>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Simple terms for using Amana Store</h1>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">By using Amana Store, you agree to use the website responsibly and to the terms described below.</p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <RevealGroup className="grid gap-4 sm:grid-cols-2">
          <RevealItem key="01"><article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"><span className="text-xs font-semibold tracking-[0.14em] text-primary">01</span><h2 className="mt-3 text-base font-semibold tracking-tight">Products and information</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">We work to keep product descriptions, availability and pricing accurate, but information may change without notice.</p></article></RevealItem>
          <RevealItem key="02"><article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"><span className="text-xs font-semibold tracking-[0.14em] text-primary">02</span><h2 className="mt-3 text-base font-semibold tracking-tight">Orders</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">An order is subject to availability and confirmation. We may contact you if information needs to be clarified before fulfillment.</p></article></RevealItem>
          <RevealItem key="03"><article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"><span className="text-xs font-semibold tracking-[0.14em] text-primary">03</span><h2 className="mt-3 text-base font-semibold tracking-tight">Website use</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Do not misuse the website, attempt unauthorized access, or interfere with its operation.</p></article></RevealItem>
          <RevealItem key="04"><article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"><span className="text-xs font-semibold tracking-[0.14em] text-primary">04</span><h2 className="mt-3 text-base font-semibold tracking-tight">Changes</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">These terms may be updated as the store evolves. The latest version will be displayed on this page.</p></article></RevealItem>
        </RevealGroup>
      </section>
    </>
  )
}
