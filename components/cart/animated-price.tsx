'use client'

import { animate, useMotionValue, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { formatCurrency } from '@/lib/format'
import { cn } from '@/lib/utils'

/**
 * Tweens between the previous and next value so quantity changes read as a
 * smooth count rather than a jarring jump.
 */
export function AnimatedPrice({
  value,
  className,
}: {
  value: number
  className?: string
}) {
  const reduceMotion = useReducedMotion()
  const motionValue = useMotionValue(value)
  const [display, setDisplay] = useState(value)
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      setDisplay(value)
      motionValue.set(value)
      return
    }

    if (reduceMotion) {
      motionValue.set(value)
      setDisplay(value)
      return
    }

    const controls = animate(motionValue, value, {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest),
    })

    return () => controls.stop()
  }, [value, motionValue, reduceMotion])

  return (
    <span className={cn('tabular-nums', className)}>
      {formatCurrency(display)}
    </span>
  )
}
