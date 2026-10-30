import { siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="mx-auto max-w-[1440px] overflow-hidden px-5 pb-8 pt-24 md:px-10 md:pt-32">
      <p
        aria-hidden
        className="select-none text-center text-[clamp(3rem,13vw,10rem)] font-semibold leading-[0.75] tracking-[-0.07em]"
      >
        {siteConfig.wordmark}
      </p>
      <div className="mt-10 flex flex-col gap-3 border-t pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <p>Designed & built by {siteConfig.name}</p>
        <a href="#top" className="link-underline self-start pb-0.5 hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
