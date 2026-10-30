'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems, siteConfig } from '@/lib/site-config'
import { AvailabilityBadge } from './availability-badge'
import { GitHubStars } from './github-stars'
import { ThemeToggle } from './theme-toggle'

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled && !open ? 'border-b bg-background/90 backdrop-blur-sm' : 'border-b border-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="relative z-50 mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-[72px] md:px-10"
      >
        <a
          href="#top"
          className="relative z-50 text-[15px] font-semibold tracking-[-0.01em]"
          onClick={() => setOpen(false)}
        >
          {siteConfig.wordmark}
          <span className="sr-only"> — back to top</span>
        </a>

        <div className="flex items-center gap-2 md:gap-3">
          <span className="hidden items-center gap-2 text-[12px] text-muted-foreground lg:flex">
            <span aria-hidden className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-50 [animation-duration:2.4s]" />
              <span className="relative inline-flex size-2 rounded-full bg-signal" />
            </span>
            {siteConfig.availability.shortLabel}
          </span>

          <a
            href={`mailto:${siteConfig.links.email}`}
            className="hidden h-10 items-center gap-2 rounded-full border px-4 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:bg-muted sm:inline-flex"
          >
            <MessageCircle aria-hidden className="size-3.5" />
            Messages
          </a>

          <GitHubStars className="hidden md:inline-flex" />

          <ThemeToggle />

          <button
            type="button"
            className="relative z-50 flex size-10 items-center justify-center"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden className="relative block h-3 w-5">
              <span
                className={cn(
                  'absolute left-0 top-0 h-px w-5 bg-foreground transition-transform duration-500 ease-editorial',
                  open && 'top-[5.5px] rotate-45',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-[5.5px] h-px w-5 bg-foreground transition-opacity duration-300',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute bottom-0 left-0 h-px w-5 bg-foreground transition-transform duration-500 ease-editorial',
                  open && 'bottom-[5.5px] -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        data-lenis-prevent
        className={cn(
          'fixed inset-0 z-40 flex flex-col justify-between bg-background px-5 pb-10 pt-28 transition-[clip-path] duration-700 ease-editorial md:px-10 md:pt-36',
          open ? '[clip-path:inset(0_0_0_0)]' : 'pointer-events-none [clip-path:inset(0_0_100%_0)]',
        )}
        aria-hidden={!open}
      >
        <ul className="flex flex-col">
          {navItems.map((item, i) => (
            <li key={item.href} className="overflow-hidden border-b">
              <a
                href={item.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-baseline justify-between py-4 text-4xl font-medium tracking-tight transition-transform duration-700 ease-editorial md:py-5 md:text-6xl',
                  open ? 'translate-y-0' : 'translate-y-full',
                )}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
              >
                {item.label}
                <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-5">
          <AvailabilityBadge />
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <a
              href={`mailto:${siteConfig.links.email}`}
              tabIndex={open ? 0 : -1}
              className="link-underline pb-0.5 hover:text-foreground"
            >
              {siteConfig.links.email}
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="link-underline pb-0.5 hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="link-underline pb-0.5 hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
