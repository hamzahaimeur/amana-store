import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'This page explains the basic way Amana Store handles information provided through the website.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Reveal immediate as="nav" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link href="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li aria-hidden="true" className="flex items-center"><ChevronRight className="size-3.5" strokeWidth={2} /></li>
              <li aria-current="page" className="font-medium text-foreground">Privacy Policy</li>
            </ol>
          </Reveal>
          <Reveal immediate delay={0.08} className="mt-5 flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">Privacy Policy</span>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Your privacy matters</h1>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">This page explains the basic way Amana Store handles information provided through the website.</p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <RevealGroup className="grid gap-4 sm:grid-cols-2">
          <RevealItem key="01"><article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"><span className="text-xs font-semibold tracking-[0.14em] text-primary">01</span><h2 className="mt-3 text-base font-semibold tracking-tight">Information you provide</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">We may receive information you choose to provide when you contact us, place an order or use a website form.</p></article></RevealItem>
          <RevealItem key="02"><article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"><span className="text-xs font-semibold tracking-[0.14em] text-primary">02</span><h2 className="mt-3 text-base font-semibold tracking-tight">How information is used</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Information is used to provide requested services, communicate about orders and improve the shopping experience.</p></article></RevealItem>
          <RevealItem key="03"><article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"><span className="text-xs font-semibold tracking-[0.14em] text-primary">03</span><h2 className="mt-3 text-base font-semibold tracking-tight">Protection and retention</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">We take reasonable steps to protect information and retain it only as needed for legitimate business purposes or legal requirements.</p></article></RevealItem>
          <RevealItem key="04"><article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"><span className="text-xs font-semibold tracking-[0.14em] text-primary">04</span><h2 className="mt-3 text-base font-semibold tracking-tight">Questions</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">For privacy questions, please contact us through the Contact page.</p></article></RevealItem>
        </RevealGroup>
      </section>
    </>
  )
}
