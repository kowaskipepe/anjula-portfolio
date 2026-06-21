import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import { SECTION_IDS } from '../../lib/constants'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { FadeIn } from '../ui/FadeIn'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'

const INTERVAL_MS = 4500
const FADE_MS = 300

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback((index: number) => {
    setVisible(false)
    window.setTimeout(() => {
      setActiveIndex(index)
      setVisible(true)
    }, FADE_MS)
  }, [])

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % testimonials.length)
  }, [activeIndex, goTo])

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + testimonials.length) % testimonials.length)
  }, [activeIndex, goTo])

  useEffect(() => {
    if (isPaused) return

    const timer = window.setInterval(goNext, INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [isPaused, goNext])

  const current = testimonials[activeIndex]

  return (
    <Section id={SECTION_IDS.testimonials}>
      <Container>
        <FadeIn>
          <SectionHeading
            title="What clients say"
            subtitle="Real stories from people who found clarity and confidence in their protection plans."
          />
        </FadeIn>

        <FadeIn>
          <div
            className="relative mx-auto max-w-3xl"
            role="region"
            aria-label="Client testimonials carousel"
            aria-roledescription="carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsPaused(false)
              }
            }}
          >
            <Card className="relative min-h-[260px] px-6 py-8 md:px-10 md:py-10">
              <Quote className="h-8 w-8 text-primary/30" aria-hidden="true" />
              <div
                aria-live="polite"
                aria-atomic="true"
                className={`mt-4 transition-opacity duration-300 ${
                  visible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <blockquote className="text-base leading-relaxed text-muted md:text-lg">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <footer className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-primary"
                    aria-hidden="true"
                  >
                    {current.initials}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-primary">
                      {current.name}
                    </cite>
                    <p className="text-sm text-muted">{current.role}</p>
                  </div>
                </footer>
              </div>
            </Card>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="rounded-full border border-border p-2 text-primary transition-colors hover:border-primary/30 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    role="tab"
                    onClick={() => goTo(index)}
                    aria-label={`Go to testimonial ${index + 1} from ${testimonial.name}`}
                    aria-selected={index === activeIndex}
                    className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      index === activeIndex
                        ? 'w-8 bg-primary'
                        : 'w-2.5 bg-border hover:bg-primary/40'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="rounded-full border border-border p-2 text-primary transition-colors hover:border-primary/30 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-4 text-center text-sm text-muted" aria-hidden="true">
              {activeIndex + 1} / {testimonials.length}
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
