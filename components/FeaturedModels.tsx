import { FeaturedModel } from '@/types'
import Link from 'next/link'

interface FeaturedModelsProps {
  featuredModels: FeaturedModel[]
}

export default function FeaturedModels({ featuredModels }: FeaturedModelsProps) {
  if (!featuredModels || featuredModels.length === 0) {
    return null
  }
  
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Featured Models</h2>
          <p className="text-xl text-gray-400">
            Discover our latest innovations in electric mobility
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {featuredModels.map((featured) => {
            const model = featured.metadata.car_model
            
            if (!model) return null
            
            const image = featured.metadata.hero_image?.imgix_url || model.thumbnail || ''
            
            return (
              <div key={featured.id} className="card overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-3xl mb-4">{featured.metadata.headline}</h3>
                    <p className="text-gray-400 mb-6">{featured.metadata.subheadline}</p>
                    
                    {featured.metadata.feature_description && (
                      <div 
                        className="prose prose-invert mb-6"
                        dangerouslySetInnerHTML={{ __html: featured.metadata.feature_description }}
                      />
                    )}
                    
                    <div className="flex gap-4">
                      <Link 
                        href={`/models/${model.slug}`}
                        className="btn-primary"
                      >
                        View Details
                      </Link>
                      {model.metadata.starting_price && (
                        <div className="flex items-center text-gray-400">
                          <span className="text-2xl font-bold text-accent">
                            ${model.metadata.starting_price.toLocaleString()}
                          </span>
                          <span className="ml-2">starting</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2">
                    <img
                      src={`${image}?w=800&h=600&fit=crop&auto=format,compress`}
                      alt={model.title}
                      className="w-full h-auto rounded-lg"
                      width="800"
                      height="600"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}