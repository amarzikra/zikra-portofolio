'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ParallaxProps = {
  children: ReactNode
  className?: string
  strength?: number
  scale?: number
}

export function Parallax({ children, className, strength = 18, scale = 1.06 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    const frame = node?.parentElement
    if (!node || !frame) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let raf = 0

    const update = () => {
      raf = 0

      if (reducedMotion.matches) {
        node.style.transform = 'none'
        return
      }

      const rect = frame.getBoundingClientRect()
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight
      const limit = Math.max(0, (rect.height * (scale - 1)) / 2)
      const offset = Math.max(-limit, Math.min(limit, progress * strength))

      node.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0) scale(${scale})`
    }

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    reducedMotion.addEventListener('change', schedule)

    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      reducedMotion.removeEventListener('change', schedule)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [scale, strength])

  return (
    <div ref={ref} data-parallax className={cn('will-change-transform', className)}>
      {children}
    </div>
  )
}
