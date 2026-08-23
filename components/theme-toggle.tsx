'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'
  // Before mount, the real theme is unknown to the server, so every
  // theme-dependent value must fall back to a fixed default and only
  // switch once `mounted` is true — otherwise server and client render
  // different aria-labels and React throws a hydration mismatch.
  const showDark = mounted && isDark

  return (
    <button
      type="button"
      aria-label={showDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(showDark ? 'light' : 'dark')}
      className={cn(
        'relative grid size-10 place-items-center overflow-hidden rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none active:scale-95',
        className,
      )}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={mounted ? (isDark ? 'moon' : 'sun') : 'placeholder'}
          initial={{ y: 12, opacity: 0, rotate: -35 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -12, opacity: 0, rotate: 35 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="grid place-items-center"
        >
          {showDark ? (
            <Moon className="size-[18px]" strokeWidth={1.75} />
          ) : (
            <Sun className="size-[18px]" strokeWidth={1.75} />
          )}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">Toggle dark mode</span>
    </button>
  )
}
