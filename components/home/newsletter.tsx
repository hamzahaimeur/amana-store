'use client'

import { Check, Mail } from 'lucide-react'
import { useState } from 'react'

import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <section aria-labelledby="newsletter-heading" className="bg-primary">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-lg flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1.5 text-xs font-medium text-primary-foreground">
              <Mail className="size-3.5" strokeWidth={2} />
              One email a month, no more
            </span>
            <h2
              id="newsletter-heading"
              className="text-3xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-4xl"
            >
              Stay Updated on New Arrivals
            </h2>
            <p className="text-sm leading-relaxed text-primary-foreground/80 text-pretty sm:text-base">
              Restocks, new pieces and the occasional sourcing note. Unsubscribe any
              time.
            </p>
          </div>

          {subscribed ? (
            <div className="flex w-full max-w-md items-center gap-3 rounded-2xl bg-primary-foreground/15 p-5 text-primary-foreground">
              <Check className="size-5 shrink-0" strokeWidth={2.25} />
              <p className="text-sm leading-relaxed">
                Thank you — check your inbox to confirm your subscription.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                if (email.trim()) setSubscribed(true)
              }}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="h-12 rounded-full border-primary-foreground/25 bg-primary-foreground/10 px-5 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:border-primary-foreground focus-visible:ring-primary-foreground/30 dark:bg-primary-foreground/10"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 shrink-0 rounded-full bg-primary-foreground px-7 text-primary hover:bg-primary-foreground/90"
              >
                Subscribe
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
