import { CarModel } from '@/types'

interface ModelFeaturesProps {
  model: CarModel
}

export default function ModelFeatures({ model }: ModelFeaturesProps) {
  const features = model.metadata.features
  
  if (!features || features.length === 0) {
    return null
  }
  
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-center mb-12">Features & Technology</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="card text-center">
              {feature.metadata.icon && (
                <div className="text-6xl mb-4">
                  {feature.metadata.icon}
                </div>
              )}
              
              {feature.metadata.feature_image && !feature.metadata.icon && (
                <img
                  src={`${feature.metadata.feature_image.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
                  alt={feature.metadata.feature_name || feature.title}
                  className="w-full h-auto rounded-lg mb-4"
                  width="400"
                  height="300"
                />
              )}
              
              <h3 className="text-xl mb-3">
                {feature.metadata.feature_name || feature.title}
              </h3>
              
              {feature.metadata.description && (
                <p className="text-gray-400">
                  {feature.metadata.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}