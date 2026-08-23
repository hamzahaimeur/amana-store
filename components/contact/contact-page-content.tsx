'use client'

import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@amanastore.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 012-3456',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '128 Evergreen Ave, Suite 4, Portland, OR 97204',
  },
  {
    icon: Clock,
    label: 'Business hours',
    value: 'Mon–Fri, 9:00 AM – 6:00 PM PST',
  },
]

export function ContactPageContent() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <Reveal className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-lg font-semibold tracking-tight">
            Send us a message
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            We usually reply within one business day.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Name
              </label>
              <Input id="name" name="name" placeholder="Jane Doe" required />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-foreground"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Write your message here…"
                className="w-full min-w-0 resize-y rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30"
              />
            </div>

            <div className="flex items-center gap-3">
              <Button type="submit" size="lg">
                Send Message
              </Button>
              {sent ? (
                <span
                  role="status"
                  className="text-sm font-medium text-primary"
                >
                  Message sent — thank you!
                </span>
              ) : null}
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.16} className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold tracking-tight">
            Store details
          </h2>
          <ul className="flex flex-col gap-3">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <li
                key={label}
                className="group flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-lg"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-4" strokeWidth={2} />
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                    {label}
                  </span>
                  <span className="text-sm text-foreground text-pretty">
                    {value}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
