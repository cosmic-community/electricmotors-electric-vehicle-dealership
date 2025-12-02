import { CarModel } from '@/types'

interface ModelDetailHeroProps {
  model: CarModel
}

export default function ModelDetailHero({ model }: ModelDetailHeroProps) {
  const heroImage = model.thumbnail || model.metadata.gallery?.[0]?.imgix_url || ''
  
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage}?w=1920&h=1080&fit=crop&auto=format,compress)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      </div>
      
      <div className="relative container-custom z-10">
        <div className="max-w-2xl">
          <h1 className="mb-4">
            {model.metadata.model_name || model.title}
          </h1>
          {model.metadata.tagline && (
            <p className="text-2xl text-gray-300 mb-8">
              {model.metadata.tagline}
            </p>
          )}
          {model.metadata.starting_price && (
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-bold text-accent">
                ${model.metadata.starting_price.toLocaleString()}
              </span>
              <span className="text-gray-400">starting price</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}