import { AutoService } from '@/types'

interface ServicesGridProps {
  services: AutoService[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  if (!services || services.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No services available at this time.</p>
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service) => (
        <div key={service.id} className="card">
          {service.metadata.service_image && (
            <img
              src={`${service.metadata.service_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
              alt={service.metadata.service_name || service.title}
              className="w-full h-auto rounded-lg mb-6"
              width="800"
              height="400"
            />
          )}
          
          <h3 className="text-2xl mb-4">
            {service.metadata.service_name || service.title}
          </h3>
          
          {service.metadata.description && (
            <div 
              className="prose prose-invert mb-6"
              dangerouslySetInnerHTML={{ __html: service.metadata.description }}
            />
          )}
          
          <div className="flex items-center justify-between pt-6 border-t border-gray-700">
            <div>
              {service.metadata.price !== undefined && (
                <div className="text-2xl font-bold text-accent">
                  ${service.metadata.price.toLocaleString()}
                </div>
              )}
              {service.metadata.duration && (
                <div className="text-sm text-gray-400">
                  Duration: {service.metadata.duration}
                </div>
              )}
            </div>
            
            <button className="btn-primary">
              Book Service
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}