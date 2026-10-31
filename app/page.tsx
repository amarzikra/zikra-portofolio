import { About } from '@/components/portfolio/about'
import { Achievements } from '@/components/portfolio/achievements'
import { Contact } from '@/components/portfolio/contact'
import { Credentials } from '@/components/portfolio/credentials'
import { Expertise } from '@/components/portfolio/expertise'
import { Hero } from '@/components/portfolio/hero'
import { Principles } from '@/components/portfolio/principles'
import { Projects } from '@/components/portfolio/projects'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { SiteNav } from '@/components/portfolio/site-nav'

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Expertise />
        <About />
        <Projects />
        <Principles />
        <Achievements />
        <Credentials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
