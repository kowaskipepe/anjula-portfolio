import type { Service } from '../../data/services'
import { Card } from '../ui/Card'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group h-full">
      <div className="mb-4 flex justify-center">
        <div className="inline-flex rounded-xl bg-secondary p-3 transition-transform duration-200 group-hover:scale-110">
          <img
            src={service.icon}
            alt={`${service.title} icon`}
            className="h-12 w-12 object-contain"
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
      <ul className="mt-4 space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-muted">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  )
}
