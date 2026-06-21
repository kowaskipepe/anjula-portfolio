import { services } from '../../data/services'
import { SECTION_IDS } from '../../lib/constants'
import { Container } from '../ui/Container'
import { FadeIn } from '../ui/FadeIn'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { ServiceCard } from './ServiceCard'

export function Services() {
  return (
    <Section id={SECTION_IDS.services}>
      <Container>
        <FadeIn>
          <SectionHeading
            title="Services"
            subtitle="Comprehensive protection solutions tailored to every stage of your financial journey."
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <FadeIn key={service.id}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}
