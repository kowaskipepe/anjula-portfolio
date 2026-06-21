import { SECTION_IDS } from '../lib/constants'

export const navLinks = [
  { label: 'About', href: `#${SECTION_IDS.about}` },
  { label: 'Services', href: `#${SECTION_IDS.services}` },
  { label: 'Awards', href: `#${SECTION_IDS.awards}` },
  { label: 'Testimonials', href: `#${SECTION_IDS.testimonials}` },
  { label: 'Contact', href: `#${SECTION_IDS.contact}` },
] as const
