export const SITE = {
  name: 'Anjula Thilakarathne',
  tagline: 'Platinum Financial Planer',
  email: 'anjula.hnba@gmail.com',
  phone: '0773737965',
} as const

export const FORMSPREE_FORM_ID =
  import.meta.env.VITE_FORMSPREE_FORM_ID || 'xaqgonkd'

export const SOCIAL = {
  facebook:
    'https://www.facebook.com/ANJULA.thilakarathne?mibextid=wwXIfr&mibextid=wwXIfr',
  linkedin: 'https://www.linkedin.com/in/anjula-thilakarathne-1a7535191',
} as const

export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  services: 'services',
  awards: 'awards',
  testimonials: 'testimonials',
  contact: 'contact',
} as const

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS]
