'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { ArrowUpRight } from 'lucide-react'
import { credentials } from '@/lib/credentials'
import { CredentialModal } from './credential-modal'
import { Reveal, SectionLabel } from './reveal'

export function Credentials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const activeCredential = credentials[activeIndex]
  const total = String(credentials.length).padStart(2, '0')

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <section
        id="credentials"
        aria-labelledby="credentials-title"
        className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32"
      >
        <p aria-live="polite" className="sr-only">
          Previewing {activeCredential.title}
        </p>

        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <SectionLabel index="07">Credentials</SectionLabel>
            <h2
              id="credentials-title"
              className="mt-5 text-[clamp(2.75rem,6vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]"
            >
              Proof of
              <br />
              <span className="text-muted-foreground">Learning</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pb-2">
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A selection of certificates and programs that support the work — from data science and AI to spec-driven
              development.
            </p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="text-foreground">{total}</span> credentials{' '}
              <span className="mx-2 text-border">/</span> 2026
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {credentials.map((credential, i) => (
            <Reveal key={credential.slug} delay={i * 70} rootMargin="0px 0px 12% 0px">
              <Dialog.Trigger
                data-credential-trigger={credential.slug}
                onClick={() => setActiveIndex(i)}
                aria-label={`View ${credential.title} certificate`}
                className="group block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="relative block aspect-[1.4/1] overflow-hidden border bg-muted/30 p-2 transition-colors duration-500 group-hover:border-foreground/40 sm:p-3">
                  <span className="relative block h-full w-full">
                    <Image
                      src={credential.image.src}
                      alt={credential.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </span>
                </span>
                <span className="mt-4 flex items-start justify-between gap-4 border-t pt-4">
                  <span className="min-w-0">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                      {credential.type} <span className="mx-1.5 text-border">/</span> {credential.date}
                    </span>
                    <span className="mt-2 block text-lg font-black uppercase leading-[1.05] tracking-tight md:text-xl">
                      {credential.title}
                    </span>
                    <span className="mt-2 block font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                      {credential.issuer}
                      {credential.platform ? ` · ${credential.platform}` : ''}
                    </span>
                  </span>
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                    <ArrowUpRight aria-hidden className="size-3.5" />
                  </span>
                </span>
              </Dialog.Trigger>
            </Reveal>
          ))}
        </div>
      </section>

      <CredentialModal credential={activeCredential} index={activeIndex} total={credentials.length} />
    </Dialog.Root>
  )
}
