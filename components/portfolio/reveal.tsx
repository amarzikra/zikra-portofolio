'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
  rootMargin?: string
  threshold?: number
}

export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className,
  rootMargin = '0px 0px 10% 0px',
  threshold = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={cn('reveal', className)}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      <span className="text-foreground">{index}</span>
      <span aria-hidden className="h-px w-8 bg-border" />
      {children}
    </p>
  )
}
