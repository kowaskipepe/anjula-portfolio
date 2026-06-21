export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'neel',
    quote:
      "Anjula's insurance recommendations saved our family from financial disaster when I was diagnosed with a serious illness. His foresight and expertise were life-changing.",
    name: 'Neel Dharmaraj',
    role: 'Cancer Survivor',
    initials: 'ND',
  },
  {
    id: 'harsha',
    quote:
      'I am truly grateful for the outstanding support provided by my insurance advisor, Anjula Thilakarathne. During one of the most challenging times in my life',
    name: 'Mr Harsha',
    role: 'Villa Owner',
    initials: 'MH',
  },
  {
    id: 'family',
    quote:
      'Thank you, Anuja Preasath Thilakarathne, for your countless support with the HNB Assurance process during my daughter\u2019s medical condition.',
    name: 'Family appreciation',
    role: 'Client',
    initials: 'FA',
  },
]
