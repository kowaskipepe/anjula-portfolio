export type AwardTier = 'platinum' | 'gold' | 'featured' | 'standard'

export interface YearlyAward {
  id: string
  title: string
  tier: AwardTier
}

export interface AwardYearGroup {
  year: string
  awards: YearlyAward[]
}

export interface Achievement {
  id: string
  label: string
  tier: 'mdrt' | 'cot'
}

export const awardYears: AwardYearGroup[] = [
  {
    year: '2025',
    awards: [
      { id: '2025-sales', title: 'Best Sales Person – 1st Runner-up', tier: 'standard' },
      { id: '2025-cot', title: 'COT Winner', tier: 'featured' },
      { id: '2025-premier', title: 'Premier Gold Award Winner', tier: 'gold' },
    ],
  },
  {
    year: '2024',
    awards: [
      { id: '2024-quality', title: 'Quality Award – Platinum Winner', tier: 'platinum' },
      { id: '2024-cot', title: 'COT Winner', tier: 'featured' },
      { id: '2024-premier', title: 'Premier Gold Award Winner', tier: 'gold' },
      { id: '2024-sales', title: 'Best Sales Person – 2nd Runner-up', tier: 'standard' },
    ],
  },
  {
    year: '2023',
    awards: [
      { id: '2023-cot', title: 'COT Winner', tier: 'featured' },
      { id: '2023-premier', title: 'Premier Gold Award Winner', tier: 'gold' },
      { id: '2023-sales', title: 'Best Salesperson – 1st Runner-up', tier: 'standard' },
    ],
  },
]

export const additionalAchievements: Achievement[] = [
  { id: 'ach-2021-mdrt', label: '2021 MDRT', tier: 'mdrt' },
  { id: 'ach-2022-mdrt', label: '2022 MDRT', tier: 'mdrt' },
  { id: 'ach-2023-cot', label: '2023 COT', tier: 'cot' },
  { id: 'ach-2024-cot', label: '2024 COT', tier: 'cot' },
  { id: 'ach-2025-cot', label: '2025 COT', tier: 'cot' },
]

export const tierLabels: Record<AwardTier, string | null> = {
  platinum: 'Platinum',
  gold: 'Gold',
  featured: null,
  standard: null,
}
