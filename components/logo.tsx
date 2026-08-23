import Link from 'next/link'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn(
        'group inline-flex items-center gap-2.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
        className,
      )}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-primary text-base font-semibold text-primary-foreground transition-transform duration-300 group-hover:scale-105">
        A
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight text-foreground">
          Amana
        </span>
        <span className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Store
        </span>
      </span>
    </Link>
  )
}
