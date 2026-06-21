import { useState } from 'react'
import { Menu, ShieldCheck } from 'lucide-react'
import { navLinks } from '../../data/navLinks'
import { SITE, SECTION_IDS, type SectionId } from '../../lib/constants'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { MobileMenu } from '../ui/MobileMenu'

const spySections: SectionId[] = [
  SECTION_IDS.hero,
  SECTION_IDS.about,
  SECTION_IDS.services,
  SECTION_IDS.awards,
  SECTION_IDS.testimonials,
  SECTION_IDS.contact,
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useScrollSpy(spySections)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-primary-light/30 bg-primary shadow-sm">
        <Container>
          <div className="flex h-16 items-center justify-between md:h-18">
            <a
              href={`#${SECTION_IDS.hero}`}
              className="flex items-center gap-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            >
              <ShieldCheck className="h-7 w-7 text-accent" aria-hidden="true" />
              <span className="text-lg font-semibold tracking-tight">{SITE.name}</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1 py-0.5 ${
                      isActive
                        ? 'text-accent'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                href={`#${SECTION_IDS.contact}`}
                className="hidden sm:inline-flex"
              >
                Get in touch
              </Button>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="rounded-lg p-2 text-white/80 hover:bg-primary-light hover:text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  )
}
