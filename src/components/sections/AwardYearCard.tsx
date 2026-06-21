import { Award, Medal, Trophy, type LucideIcon } from 'lucide-react'
import type { AwardTier, AwardYearGroup } from '../../data/awards'
import { tierLabels } from '../../data/awards'

const tierIcons: Record<AwardTier, LucideIcon> = {
  platinum: Trophy,
  gold: Trophy,
  featured: Trophy,
  standard: Medal,
}

const tierItemStyles: Record<AwardTier, string> = {
  platinum:
    'border-l-4 border-accent bg-gradient-to-r from-accent/10 via-secondary/40 to-white shadow-sm',
  gold: 'border-l-4 border-accent/80 bg-accent/5',
  featured: 'hover:border-l-4 hover:border-l-primary hover:pl-[calc(0.75rem-4px)]',
  standard: '',
}

const tierIconStyles: Record<AwardTier, string> = {
  platinum: 'bg-accent text-accent-foreground ring-2 ring-accent/30',
  gold: 'bg-accent/90 text-accent-foreground',
  featured: 'bg-primary text-white',
  standard: 'bg-secondary text-primary',
}

interface AwardListItemProps {
  title: string
  tier: AwardTier
}

function AwardListItem({ title, tier }: AwardListItemProps) {
  const Icon = tierIcons[tier]
  const badge = tierLabels[tier]

  return (
    <li
      className={`group/item flex items-start gap-3 rounded-xl border border-transparent px-3 py-3 transition-all duration-200 hover:border-border hover:bg-secondary/60 hover:shadow-sm ${tierItemStyles[tier]}`}
    >
      <span
        className={`inline-flex shrink-0 rounded-lg p-2 transition-transform duration-200 group-hover/item:scale-110 ${tierIconStyles[tier]}`}
        aria-hidden="true"
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1 pt-0.5">
        <div className="flex flex-wrap items-center gap-2">
          {badge && (
            <span className="inline-flex rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
              {badge}
            </span>
          )}
          <span
            className={`text-sm leading-relaxed transition-colors duration-200 ${
              tier === 'platinum' || tier === 'gold'
                ? 'font-semibold text-primary'
                : 'text-muted group-hover/item:text-foreground'
            }`}
          >
            {title}
          </span>
        </div>
      </div>
    </li>
  )
}

export function AwardYearCard({ year, awards }: AwardYearGroup) {
  return (
    <article className="card group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <header className="relative mb-5 flex items-center gap-3 border-b border-border pb-4">
        <span className="inline-flex rounded-xl bg-primary p-2.5 transition-transform duration-300 group-hover:scale-105">
          <Trophy className="h-5 w-5 text-accent" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-2xl font-semibold text-primary">{year}</h3>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            {awards.length} {awards.length === 1 ? 'award' : 'awards'}
          </p>
        </div>
      </header>
      <ul className="relative space-y-1">
        {awards.map((award) => (
          <AwardListItem key={award.id} title={award.title} tier={award.tier} />
        ))}
      </ul>
    </article>
  )
}

export function AchievementChip({
  label,
  tier,
}: {
  label: string
  tier: 'mdrt' | 'cot'
}) {
  const Icon = tier === 'mdrt' ? Medal : Trophy
  const isPremium = tier === 'mdrt'

  return (
    <li
      className={`group/chip flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        isPremium
          ? 'border-accent/40 bg-gradient-to-br from-accent/15 to-secondary hover:border-accent'
          : 'border-border bg-white hover:border-primary/30 hover:bg-secondary/50'
      }`}
    >
      <span
        className={`inline-flex rounded-lg p-2 transition-transform duration-200 group-hover/chip:rotate-6 group-hover/chip:scale-110 ${
          isPremium ? 'bg-accent text-accent-foreground' : 'bg-primary text-white'
        }`}
        aria-hidden="true"
      >
        <Icon className="h-4 w-4" />
      </span>
      <span
        className={`text-sm font-medium transition-colors duration-200 ${
          isPremium ? 'text-primary' : 'text-muted group-hover/chip:text-primary'
        }`}
      >
        {label}
      </span>
      {isPremium && (
        <Award className="ml-auto h-4 w-4 text-accent opacity-0 transition-opacity duration-200 group-hover/chip:opacity-100" aria-hidden="true" />
      )}
    </li>
  )
}
