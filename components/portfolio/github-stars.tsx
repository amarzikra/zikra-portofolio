'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { GitHubMark } from './brand-icons'

export function GitHubStars({ className }: { className?: string }) {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    let active = true

    fetch(`https://api.github.com/users/${siteConfig.githubUsername}/repos?per_page=100`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((response) => (response.ok ? response.json() : []))
      .then((repos: Array<{ stargazers_count?: number; fork?: boolean }>) => {
        if (!active || !Array.isArray(repos)) return
        setStars(
          repos.reduce((total, repo) => total + (repo.fork ? 0 : (repo.stargazers_count ?? 0)), 0),
        )
      })
      .catch(() => {})

    return () => {
      active = false
    }
  }, [])

  return (
    <a
      href={siteConfig.links.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={stars === null ? 'GitHub profile' : `GitHub profile — ${stars} stars`}
      className={cn(
        'inline-flex h-10 items-center gap-2 rounded-full border px-4 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:bg-muted',
        className,
      )}
    >
      <GitHubMark className="size-3.5" />
      {stars !== null && <span className="tabular-nums">{stars}</span>}
      <Star aria-hidden className="size-3" />
    </a>
  )
}
