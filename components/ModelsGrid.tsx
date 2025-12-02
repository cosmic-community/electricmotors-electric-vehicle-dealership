import { CarModel } from '@/types'
import Link from 'next/link'

interface ModelsGridProps {
  models: CarModel[]
  showAll?: boolean
}

export default function ModelsGrid({ models, showAll = false }: ModelsGridProps) {
  const displayModels = showAll ? models : models.slice(0, 3)
  
  if (!displayModels || displayModels.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No models available at this time.</p>
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayModels.map((model) => {
        const image = model.thumbnail || model.metadata.gallery?.[0]?.imgix_url || ''
        
        return (
          <Link 
            key={model.id}
            href={`/models/${model.slug}`}
            className="card group cursor-pointer"
          >
            <div className="mb-6 overflow-hidden rounded-lg">
              <img
                src={`${image}?w=600&h=400&fit=crop&auto=format,compress`}
                alt={model.title}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                width="600"
                height="400"
              />
            </div>
            
            <h3 className="text-2xl mb-2 group-hover:text-accent transition-colors">
              {model.metadata.model_name || model.title}
            </h3>
            
            {model.metadata.tagline && (
              <p className="text-gray-400 mb-4">{model.metadata.tagline}</p>
            )}
            
            <div className="flex items-center justify-between">
              {model.metadata.starting_price && (
                <div>
                  <span className="text-2xl font-bold text-accent">
                    ${model.metadata.starting_price.toLocaleString()}
                  </span>
                  <span className="text-gray-400 ml-2">starting</span>
                </div>
              )}
              
              {model.metadata.range && (
                <div className="text-gray-400">
                  <span className="font-semibold">{model.metadata.range}</span> miles range
                </div>
              )}
            </div>
            
            {model.metadata.in_stock !== undefined && (
              <div className="mt-4">
                {model.metadata.in_stock ? (
                  <span className="text-green-500 text-sm">✓ Available Now</span>
                ) : (
                  <span className="text-yellow-500 text-sm">⚠ Pre-order Only</span>
                )}
              </div>
            )}
          </Link>
        )
      })}
    </div>
  )
}