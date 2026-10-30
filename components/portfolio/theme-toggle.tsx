'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

type ThemeToggleProps = {
  variant?: 'icon' | 'switch'
  className?: string
}

export function ThemeToggle({ variant = 'icon', className }: ThemeToggleProps) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains('dark'))
    sync()

    const observer = new MutationObserver(sync)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  function toggle() {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {}
    setDark(next)
  }

  const label = dark ? 'Switch to light mode' : 'Switch to dark mode'

  if (variant === 'switch') {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label={label}
        aria-pressed={dark}
        className={cn(
          'group inline-flex items-center gap-3 rounded-full border px-1.5 py-1.5 pr-4 text-muted-foreground transition-colors hover:text-foreground',
          className,
        )}
      >
        <span
          aria-hidden
          className={cn(
            'relative flex h-5 w-9 items-center rounded-full border bg-muted px-0.5 transition-colors duration-500',
            dark && 'bg-foreground/15',
          )}
        >
          <span
            className={cn(
              'size-4 rounded-full bg-foreground transition-transform duration-500 ease-editorial',
              dark && 'translate-x-4',
            )}
          />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
          {dark ? 'Dark' : 'Light'}
        </span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={dark}
      className={cn(
        'flex size-10 items-center justify-center rounded-xl border transition-colors hover:bg-muted',
        className,
      )}
    >
      <span className="relative flex size-4 items-center justify-center">
        <Sun
          aria-hidden
          className={cn(
            'absolute size-4 transition-all duration-500 ease-editorial',
            dark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100',
          )}
        />
        <Moon
          aria-hidden
          className={cn(
            'absolute size-4 transition-all duration-500 ease-editorial',
            dark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0',
          )}
        />
      </span>
    </button>
  )
}
