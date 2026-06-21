import { navLinks } from '../../data/navLinks'
import { SITE } from '../../lib/constants'
import { Container } from '../ui/Container'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-primary-light/30 bg-primary py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-white">{SITE.name}</p>
            <p className="mt-1 text-sm text-white/70">{SITE.tagline}</p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 text-center text-sm text-white/60">
          &copy; {year} {SITE.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
