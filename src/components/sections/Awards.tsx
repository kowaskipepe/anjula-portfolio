import { Sparkles } from 'lucide-react'
import { additionalAchievements, awardYears } from '../../data/awards'
import { SECTION_IDS } from '../../lib/constants'
import { Container } from '../ui/Container'
import { FadeIn } from '../ui/FadeIn'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { AchievementChip, AwardYearCard } from './AwardYearCard'

export function Awards() {
  const sortedYears = [...awardYears].sort((a, b) => Number(b.year) - Number(a.year))

  return (
    <Section id={SECTION_IDS.awards} alternate>
      <Container>
        <FadeIn>
          <SectionHeading
            title="Awards & recognition"
            subtitle="Industry honors earned through consistent client service and sales excellence."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {sortedYears.map((group) => (
            <FadeIn key={group.year}>
              <AwardYearCard {...group} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="card group relative mt-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-80"
              aria-hidden="true"
            />
            <header className="mb-6 flex items-center gap-3">
              <span className="inline-flex rounded-xl bg-secondary p-2.5 transition-transform duration-300 group-hover:scale-105">
                <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-primary">Additional Achievements</h3>
                <p className="text-sm text-muted">MDRT & COT milestones across consecutive years</p>
              </div>
            </header>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {additionalAchievements.map((item) => (
                <AchievementChip key={item.id} label={item.label} tier={item.tier} />
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
