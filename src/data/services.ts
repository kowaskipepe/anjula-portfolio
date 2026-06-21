import eduIcon from '../assets/edu-icon.png'
import familyIcon from '../assets/family-icon.jpg'
import healthIcon from '../assets/health-icon.png'
import invesIcon from '../assets/inves-icon.png'
import retirementIcon from '../assets/retirement-icon.png'

export interface Service {
  id: string
  title: string
  icon: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'health',
    title: 'Health',
    icon: healthIcon,
    features: [
      'Unlimited Health Cover',
      'Super critical illness cover',
      'Income protection covers for hospitalization',
    ],
  },
  {
    id: 'income-protection',
    title: 'Income Protection',
    icon: familyIcon,
    features: [
      'Death covers',
      'Total permanent disability covers',
      'Family income covers',
    ],
  },
  {
    id: 'retirement',
    title: 'Retirement',
    icon: retirementIcon,
    features: [
      'Retirement funds',
      'Lifetime pension',
      'Forced retirement covers',
    ],
  },
  {
    id: 'child-education',
    title: 'Child Education',
    icon: eduIcon,
    features: [
      'Higher education covers',
      'Partial withdrawals for short term educational needs',
      'Total protection for the investment',
    ],
  },
  {
    id: 'savings-investment',
    title: 'Savings & Investment',
    icon: invesIcon,
    features: [
      'Tax free benefits',
      'Emergency funds for short term financial needs',
    ],
  },
]
