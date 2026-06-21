import { useEffect } from 'react'
import { X } from 'lucide-react'
import { navLinks } from '../../data/navLinks'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  activeSection: string
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav className="absolute right-0 top-0 flex h-full w-full max-w-xs flex-col bg-white p-6 shadow-xl">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-muted hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? 'bg-secondary text-primary font-semibold'
                      : 'text-muted hover:bg-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
