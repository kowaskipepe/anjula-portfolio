import { aboutParagraphs, aboutStats, milestones } from '../../data/about'
import { SECTION_IDS } from '../../lib/constants'
import { Container } from '../ui/Container'
import { FadeIn } from '../ui/FadeIn'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <Section id={SECTION_IDS.about} alternate>
      <Container>
        <FadeIn>
          <SectionHeading
            title="About me"
            subtitle="A trusted leader in Sri Lanka's insurance industry, committed to excellence, ethics, and client-first financial planning."
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <FadeIn className="space-y-6 lg:col-span-3">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-muted md:text-lg">
                {paragraph.split(
                  /(Court of the Table \(COT\)|MDRT USA|MDRT Zonal Chair|Platinum Quality Award|National Award Winner)/g,
                ).map((part, i) => {
                  const isHighlight =
                    part === 'MDRT USA' ||
                    part === 'Court of the Table (COT)' ||
                    part === 'Platinum Quality Award' ||
                    part === 'MDRT Zonal Chair' ||
                    part === 'National Award Winner'
                  return isHighlight ? (
                    <strong key={i} className="font-semibold text-primary">
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                })}
              </p>
            ))}
          </FadeIn>

          <FadeIn className="lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Key milestones
              </h3>
              {milestones.map((milestone) => {
                const Icon = milestone.icon
                return (
                  <article
                    key={milestone.id}
                    className={`group rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      milestone.highlight
                        ? 'border-accent/40 bg-gradient-to-br from-accent/10 to-secondary hover:border-accent'
                        : 'border-border bg-white hover:border-primary/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`inline-flex shrink-0 rounded-lg p-2 transition-transform duration-200 group-hover:scale-110 ${
                          milestone.highlight
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-secondary text-primary'
                        }`}
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="font-semibold text-primary">{milestone.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <dl className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="card group text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20"
              >
                <dt className="text-2xl font-semibold text-primary transition-colors duration-200 group-hover:text-accent md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-xs text-muted md:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </Container>
    </Section>
  )
}
