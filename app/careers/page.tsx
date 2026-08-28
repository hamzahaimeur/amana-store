import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Amana Store is growing carefully. We value thoughtful people who care about customers, quality and doing work properly.',
}

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Reveal immediate as="nav" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link href="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li aria-hidden="true" className="flex items-center"><ChevronRight className="size-3.5" strokeWidth={2} /></li>
              <li aria-current="page" className="font-medium text-foreground">Careers</li>
            </ol>
          </Reveal>
          <Reveal immediate delay={0.08} className="mt-5 flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">Careers</span>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Build something worth trusting</h1>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">Amana Store is growing carefully. We value thoughtful people who care about customers, quality and doing work properly.</p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RevealItem key="01"><article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"><span className="text-xs font-semibold tracking-[0.14em] text-primary">01</span><h2 className="mt-3 text-base font-semibold tracking-tight">A small team</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">We keep the team focused so everyone can contribute ideas and take ownership.</p></article></RevealItem>
          <RevealItem key="02"><article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"><span className="text-xs font-semibold tracking-[0.14em] text-primary">02</span><h2 className="mt-3 text-base font-semibold tracking-tight">Quality over noise</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">We prefer useful improvements, clear communication and work that creates real value.</p></article></RevealItem>
          <RevealItem key="03"><article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"><span className="text-xs font-semibold tracking-[0.14em] text-primary">03</span><h2 className="mt-3 text-base font-semibold tracking-tight">Open opportunities</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">There are no current openings listed. Check back later as new roles are added.</p></article></RevealItem>
        </RevealGroup>
      </section>
    </>
  )
}
