import { CarModel } from '@/types'

interface ModelSpecsProps {
  model: CarModel
}

export default function ModelSpecs({ model }: ModelSpecsProps) {
  const specs = [
    { label: 'Range', value: model.metadata.range ? `${model.metadata.range} miles` : null },
    { label: 'Top Speed', value: model.metadata.top_speed ? `${model.metadata.top_speed} mph` : null },
    { label: '0-60 mph', value: model.metadata.acceleration ? `${model.metadata.acceleration}s` : null },
    { label: 'Seating', value: model.metadata.seating ? `${model.metadata.seating} passengers` : null },
  ].filter(spec => spec.value !== null)
  
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {model.metadata.description && (
          <div className="max-w-4xl mx-auto mb-12">
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: model.metadata.description }}
            />
          </div>
        )}
        
        {specs.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specs.map((spec) => (
              <div key={spec.label} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">
                  {spec.value}
                </div>
                <div className="text-gray-400">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}