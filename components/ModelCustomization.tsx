import { CarModel } from '@/types'

interface ModelCustomizationProps {
  model: CarModel
}

export default function ModelCustomization({ model }: ModelCustomizationProps) {
  const colors = model.metadata.colors
  
  if (!colors || colors.length === 0) {
    return null
  }
  
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-center mb-12">Available Colors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {colors.map((color) => (
            <div key={color.id} className="card">
              {color.metadata.image && (
                <img
                  src={`${color.metadata.image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                  alt={color.metadata.option_name || color.title}
                  className="w-full h-auto rounded-lg mb-4"
                  width="600"
                  height="400"
                />
              )}
              
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl">
                  {color.metadata.option_name || color.title}
                </h3>
                {color.metadata.color_code && (
                  <div 
                    className="w-10 h-10 rounded-full border-2 border-gray-600"
                    style={{ backgroundColor: color.metadata.color_code }}
                  />
                )}
              </div>
              
              {color.metadata.description && (
                <p className="text-gray-400 mb-4">
                  {color.metadata.description}
                </p>
              )}
              
              {color.metadata.additional_cost !== undefined && (
                <div className="text-accent font-semibold">
                  {color.metadata.additional_cost === 0 
                    ? 'Included' 
                    : `+$${color.metadata.additional_cost.toLocaleString()}`
                  }
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}