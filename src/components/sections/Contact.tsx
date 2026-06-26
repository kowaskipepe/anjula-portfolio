import { Mail, Phone } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import { FacebookIcon, LinkedInIcon } from '../ui/SocialIcons'
import { SECTION_IDS, SITE, SOCIAL } from '../../lib/constants'
import { Button } from '../ui/Button'
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

const inputClasses =
  'w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-primary placeholder:text-muted/70 transition-colors duration-200 focus-visible:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'

export function Contact() {
  const [state, handleSubmit, reset] = useForm(
    import.meta.env.VITE_FORMSPREE_FORM_ID,
  )

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

            <div>
              <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-primary md:text-left">
                Send a message
              </h3>

              {state.succeeded ? (
                <div className="mt-4 space-y-4 rounded-xl border border-border bg-white p-4 text-center md:text-left">
                  <p className="text-sm font-medium text-primary">
                    Thank you! Your message has been sent. I&apos;ll be in touch
                    with you soon.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Button type="button" variant="outline" onClick={reset}>
                      Send another message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 grid gap-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-primary"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Your full name"
                        className={inputClasses}
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="text-xs text-red-600"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-primary"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="you@example.com"
                        className={inputClasses}
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-xs text-red-600"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-primary"
                    >
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Your contact number"
                      className={inputClasses}
                    />
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                      className="text-xs text-red-600"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-primary"
                    >
                      Additional comments
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="How can I help you?"
                      className={`${inputClasses} resize-y`}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-xs text-red-600"
                    />
                  </div>

                  <div className="flex justify-center md:justify-start">
                    <Button type="submit" disabled={state.submitting}>
                      {state.submitting ? 'Sending…' : 'Send message'}
                    </Button>
                  </div>
                </form>
              )}
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
