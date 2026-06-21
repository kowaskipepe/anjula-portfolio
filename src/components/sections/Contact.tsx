import { Mail, Phone } from 'lucide-react'
import { FacebookIcon, LinkedInIcon } from '../ui/SocialIcons'
import { SECTION_IDS, SITE, SOCIAL } from '../../lib/constants'
import { Container } from '../ui/Container'
import { FadeIn } from '../ui/FadeIn'
import { Section } from '../layout/Section'

const socialLinks = [
  {
    id: 'facebook',
    href: SOCIAL.facebook,
    label: 'Visit Anjula on Facebook',
    icon: FacebookIcon,
  },
  {
    id: 'linkedin',
    href: SOCIAL.linkedin,
    label: 'Visit Anjula on LinkedIn',
    icon: LinkedInIcon,
  },
] as const

export function Contact() {
  return (
    <Section id={SECTION_IDS.contact} alternate>
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl space-y-8">
            <div className="text-center md:text-left">
              <h2 className="heading-section">Contact Me</h2>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                Ready to discuss your protection plan or explore the right coverage for
                you and your family? Reach out — I&apos;d be happy to help you find
                clarity and confidence in your financial future.
              </p>
            </div>

            <div>
              <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-primary md:text-left">
                Contact details
              </h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="group flex h-full items-center gap-4 rounded-xl border border-border bg-white p-4 transition-all duration-200 hover:border-primary/30 hover:bg-secondary hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span
                      className="inline-flex rounded-lg bg-secondary p-2.5 text-primary transition-colors duration-200 group-hover:bg-accent group-hover:text-accent-foreground"
                      aria-hidden="true"
                    >
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-muted">
                        Email
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-primary">
                        {SITE.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="group flex h-full items-center gap-4 rounded-xl border border-border bg-white p-4 transition-all duration-200 hover:border-primary/30 hover:bg-secondary hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span
                      className="inline-flex rounded-lg bg-secondary p-2.5 text-primary transition-colors duration-200 group-hover:bg-accent group-hover:text-accent-foreground"
                      aria-hidden="true"
                    >
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-muted">
                        Phone
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-primary">
                        {SITE.phone}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Social media
              </h3>
              <div className="mt-4 flex justify-center gap-3 md:justify-start">
                {socialLinks.map(({ id, href, label, icon: Icon }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex rounded-xl border border-border bg-white p-3.5 text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
