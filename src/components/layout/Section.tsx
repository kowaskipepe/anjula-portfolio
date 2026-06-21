import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  alternate?: boolean
}

export function Section({ id, children, className = '', alternate = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${alternate ? 'bg-surface' : 'bg-white'} ${className}`}
    >
      {children}
    </section>
  )
}
