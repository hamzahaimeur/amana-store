'use client'

import { motion, type MotionProps, type Variants } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

import { cn } from '@/lib/utils'

/** Shared easing + distance so every section animates identically. */
const EASE = [0.22, 1, 0.36, 1] as const
const DISTANCE = 24

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: DISTANCE },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

/** Parent wrapper that staggers its `<RevealItem>` children (e.g. product cards). */
export function staggerContainer(stagger = 0.08, delayChildren = 0.05): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  }
}

type RevealProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  delay?: number
  /** Animate on mount instead of when scrolled into view. */
  immediate?: boolean
} & Omit<MotionProps, 'variants' | 'initial' | 'animate' | 'whileInView'>

export function Reveal({
  children,
  className,
  as = 'div',
  delay = 0,
  immediate = false,
  ...rest
}: RevealProps) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      {...(immediate
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: { once: true, margin: '-80px' } })}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...(fadeUp.visible as object),
          transition: { duration: 0.6, ease: EASE, delay },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/** Use inside a container that has the `staggerContainer()` variants applied. */
export function RevealItem({
  children,
  className,
  as = 'div',
  ...rest
}: Omit<RevealProps, 'delay' | 'immediate'>) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  return (
    <MotionTag className={cn(className)} variants={fadeUp} {...rest}>
      {children}
    </MotionTag>
  )
}

/** Wrapper for a list/grid whose children should reveal one after another. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.05,
  immediate = false,
  ...rest
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
  immediate?: boolean
} & Omit<MotionProps, 'variants' | 'initial' | 'animate' | 'whileInView'>) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      {...(immediate
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: { once: true, margin: '-80px' } })}
      variants={staggerContainer(stagger, delayChildren)}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
