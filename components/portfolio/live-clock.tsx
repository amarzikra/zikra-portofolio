'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

function format(date: Date) {
  const day = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    timeZone: siteConfig.timeZone,
  })
    .format(date)
    .toUpperCase()

  const time = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: siteConfig.timeZone,
  })
    .format(date)
    .toUpperCase()
    .replace('AM', 'A.M')
    .replace('PM', 'P.M')

  return `${day} ${time}`
}

export function LiveClock({ className }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const interval = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <p className={cn('font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground', className)}>
      {now ? format(now) : '—'}
    </p>
  )
}
