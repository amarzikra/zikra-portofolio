'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { GitHubMark, LinkedInMark } from './brand-icons'
import { Reveal, SectionLabel } from './reveal'

const email = siteConfig.links.email
const [emailUser, emailDomain] = email.split('@')

const socials = [
  { label: 'Email', href: `mailto:${email}`, icon: <Mail aria-hidden className="size-5" /> },
  { label: 'GitHub', href: siteConfig.links.github, icon: <GitHubMark className="size-5" /> },
  { label: 'LinkedIn', href: siteConfig.links.linkedin, icon: <LinkedInMark className="size-5" /> },
]

export function Contact() {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      const field = document.createElement('textarea')
      field.value = email
      field.setAttribute('readonly', '')
      field.style.position = 'fixed'
      field.style.opacity = '0'
      document.body.appendChild(field)
      field.select()
      document.execCommand('copy')
      document.body.removeChild(field)
    }

    setCopied(true)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden py-24 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 size-[520px] rounded-full bg-foreground/[0.04] blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 size-[420px] rounded-full bg-foreground/[0.03] blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <SectionLabel index="08">Contact</SectionLabel>
            </Reveal>

            <Reveal delay={100}>
              <h2
                id="contact-title"
                className="mt-10 text-[clamp(2.75rem,6.5vw,6.5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] md:mt-14"
              >
                <span className="block whitespace-nowrap">Let&apos;s work</span>
                <span className="block text-muted-foreground">Together</span>
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                Have a project in mind? Looking for a partner to help build your next big idea?
                I&apos;m always open to discussing new opportunities and challenges.
              </p>
            </Reveal>

            <Reveal delay={240} className="mt-10 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="flex size-12 items-center justify-center rounded-full border bg-muted/30 text-muted-foreground transition-colors duration-300 hover:border-transparent hover:bg-foreground hover:text-background"
                >
                  {social.icon}
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal delay={160} className="flex flex-col justify-center lg:pt-12">
            <div className="group flex min-h-[300px] flex-col justify-between border-t pt-8 transition-colors duration-500 hover:border-foreground/40 lg:min-h-[400px] lg:pt-12">
              <div className="flex items-start justify-between">
                <Mail
                  aria-hidden
                  className="size-8 text-muted-foreground transition-colors duration-500 group-hover:text-foreground"
                />
                <a
                  href={`mailto:${email}`}
                  aria-label={`Send an email to ${email}`}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground group-hover:rotate-45 group-hover:text-foreground"
                >
                  <ArrowUpRight aria-hidden className="size-8" />
                </a>
              </div>

              <div>
                <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Drop me a line
                </span>
                <a
                  href={`mailto:${email}`}
                  className="block break-words text-[clamp(1.5rem,3.4vw,3rem)] font-black uppercase leading-[0.95] tracking-[-0.04em]"
                >
                  <span className="block">{emailUser}</span>
                  <span className="block text-muted-foreground">@{emailDomain}</span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="mt-8 inline-flex items-center gap-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {copied ? (
                    <Check aria-hidden className="size-4" />
                  ) : (
                    <Copy aria-hidden className="size-4" />
                  )}
                  <span aria-live="polite">{copied ? 'Copied' : 'Copy address'}</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
