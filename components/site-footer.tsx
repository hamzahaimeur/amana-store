import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

import { Logo } from '@/components/logo'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'
import { footerNav, siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <RevealGroup className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <RevealItem className="flex flex-col gap-5 lg:col-span-2">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" strokeWidth={1.75} />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" strokeWidth={1.75} />
                <a
                  href={`tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0 text-primary" strokeWidth={1.75} />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </RevealItem>

          {footerNav.map((group) => (
            <RevealItem key={group.title} className="flex flex-col gap-4">
              <h2 className="text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
                {group.title}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link
                href="/privacy"
                className="text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                Terms of Service
              </Link>
            </li>
            <li className="text-xs font-medium text-primary">Modest &amp; family-friendly selection</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
