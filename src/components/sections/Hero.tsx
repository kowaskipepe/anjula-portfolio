import { ArrowRight, ShieldCheck } from 'lucide-react'
import heroPortrait from '../../assets/Anjula.jpeg'
import { SECTION_IDS } from '../../lib/constants'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Section } from '../layout/Section'

export function Hero() {
  return (
    <Section id={SECTION_IDS.hero} className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/80 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-muted">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              Senior Insurance and Financial  Planer @ HNB Life PLC
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl lg:leading-tight">
              Protect what matters most with{' '}
              <span className="text-accent">confidence</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
            Master of Insurance and Finance | Professional, Friendly and Excellent service. My purpose is help people to protect their financial happiness
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button href={`#${SECTION_IDS.contact}`}>
                Schedule a consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href={`#${SECTION_IDS.services}`} variant="outline">
                Explore services
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-3xl bg-secondary/60 blur-sm"
                aria-hidden="true"
              />
              <img
                src={heroPortrait}
                alt="Professional financial protection advisor"
                className="relative h-auto w-full rounded-2xl object-contain shadow-xl lg:max-h-[560px] lg:w-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
