import { Award, Crown, Globe, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Milestone {
  id: string
  title: string
  description: string
  icon: LucideIcon
  highlight?: boolean
}

export const aboutParagraphs: string[] = [
  'With a solid foundation built on over 12 years of service at Hatton National Bank and a successful career spanning over 11 years with HNB Life, I stand as a leading figure in Sri Lanka\u2019s insurance industry.',
  'I have been a proud member of the Premier Association of Financial Professionals (MDRT USA) since 2021, achieving international recognition for consistent excellence in client service and performance. I reached the prestigious Court of the Table (COT) level in 2023, 2024 and 2025 \u2014 a testament to my dedication, ethical practice, and elite performance in the insurance and financial planning sector.',
  'Since 2015, I have been recognized annually as a National Award Winner by HNB Life, showcasing my unwavering commitment to quality and client satisfaction. In 2024, I further elevated my professional standing by winning the coveted Platinum Quality Award.',
  'In 2025, I was honored to be appointed as the MDRT Zonal Chair, a leadership role entrusted to individuals who embody professionalism, mentorship, and industry leadership.',
  'Whether serving clients or mentoring fellow professionals, I continue to shape the future of financial services in Sri Lanka with passion, precision, and purpose.',
]

export const milestones: Milestone[] = [
  {
    id: 'mdrt',
    title: 'MDRT USA',
    description: 'Member since 2021 \u2014 international recognition for client service excellence',
    icon: Globe,
  },
  {
    id: 'cot',
    title: 'Court of the Table (COT)',
    description: 'Achieved in 2023, 2024 & 2025 \u2014 elite performance in financial planning',
    icon: Trophy,
    highlight: true,
  },
  {
    id: 'platinum',
    title: 'Platinum Quality Award',
    description: '2024 winner \u2014 HNB Assurance\u2019s highest quality honor',
    icon: Award,
    highlight: true,
  },
  {
    id: 'zonal-chair',
    title: 'MDRT Zonal Chair',
    description: 'Appointed 2025 \u2014 leadership in mentorship and industry standards',
    icon: Crown,
    highlight: true,
  },
]

export const aboutStats = [
  { value: '12+', label: 'Years at Hatton National Bank' },
  { value: '11+', label: 'Years with HNB Life' },
  { value: '2015', label: 'National Award Winner since' },
  { value: '2021', label: 'MDRT member since' },
]
