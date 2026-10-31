'use client'

import Image from 'next/image'
import { Dialog } from '@base-ui/react/dialog'
import { ArrowUpRight, X } from 'lucide-react'
import type { Credential } from '@/lib/credentials'

type CredentialModalProps = {
  credential: Credential
  index: number
  total: number
}

export function CredentialModal({ credential, index, total }: CredentialModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop
        data-lenis-prevent
        className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-[3px] transition-opacity duration-500 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0"
      />
      <Dialog.Viewport
        data-lenis-prevent
        className="fixed inset-0 z-[71] grid place-items-center overflow-hidden p-3 sm:p-6"
      >
        <Dialog.Popup
          data-lenis-prevent
          className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl overflow-y-auto overscroll-contain rounded-sm border bg-background text-foreground shadow-[0_40px_120px_-30px_rgb(0_0_0/0.65)] outline-none transition-[opacity,transform] duration-500 ease-editorial data-[ending-style]:translate-y-4 data-[ending-style]:opacity-0 data-[starting-style]:translate-y-6 data-[starting-style]:opacity-0 sm:max-h-[calc(100dvh-3rem)]"
        >
          <div className="sticky top-0 z-30 flex h-12 items-center justify-between border-b bg-background/95 px-4 backdrop-blur sm:px-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Credential <span className="mx-2 text-border">/</span> {String(index + 1).padStart(2, '0')} of{' '}
              {String(total).padStart(2, '0')}
            </p>
            <Dialog.Close
              aria-label="Close credential"
              className="flex size-8 items-center justify-center border border-transparent transition-colors hover:border-border hover:bg-muted focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <X aria-hidden className="size-4" />
            </Dialog.Close>
          </div>

          <div className="bg-muted/20 p-3 sm:p-6">
            <div className="relative aspect-[1.4/1] w-full overflow-hidden border bg-white sm:aspect-auto sm:h-[min(54vh,34rem)]">
              <Image
                src={credential.image.src}
                alt={credential.image.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="border-t px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {credential.type} <span className="mx-2 text-border">/</span> {credential.date}
            </p>
            <Dialog.Title className="mt-3 max-w-4xl text-balance text-[clamp(1.65rem,3.5vw,2.75rem)] font-black uppercase leading-[0.95] tracking-tight">
              {credential.title}
            </Dialog.Title>
            <Dialog.Description className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Issued by {credential.issuer}
              {credential.platform ? ` through ${credential.platform}` : ''} on {credential.date}.
            </Dialog.Description>

            <dl className="mt-8 grid gap-5 border-t pt-6 sm:grid-cols-3">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Issuer</dt>
                <dd className="mt-1.5 text-sm">{credential.issuer}</dd>
              </div>
              {credential.platform && (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Platform</dt>
                  <dd className="mt-1.5 text-sm">{credential.platform}</dd>
                </div>
              )}
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Issued</dt>
                <dd className="mt-1.5 text-sm">{credential.date}</dd>
              </div>
              {credential.validUntil && (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Valid until
                  </dt>
                  <dd className="mt-1.5 text-sm">{credential.validUntil}</dd>
                </div>
              )}
              {credential.credentialId && (
                <div className="sm:col-span-2">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Credential ID
                  </dt>
                  <dd className="mt-1.5 break-all font-mono text-xs leading-relaxed text-foreground/80">
                    {credential.credentialId}
                  </dd>
                </div>
              )}
            </dl>

            {credential.credentialUrl && (
              <div className="mt-7 border-t pt-6">
                <a
                  href={credential.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-background transition-colors hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  Verify credential
                  <ArrowUpRight aria-hidden className="size-3.5" />
                </a>
              </div>
            )}
          </div>
        </Dialog.Popup>
      </Dialog.Viewport>
    </Dialog.Portal>
  )
}
