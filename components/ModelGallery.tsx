import { CarModel } from '@/types'

interface ModelGalleryProps {
  model: CarModel
}

export default function ModelGallery({ model }: ModelGalleryProps) {
  const gallery = model.metadata.gallery
  
  if (!gallery || gallery.length === 0) {
    return null
  }
  
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <h2 className="text-center mb-12">Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gallery.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={`${image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                alt={`${model.title} - Image ${index + 1}`}
                className="w-full h-auto hover:scale-105 transition-transform duration-300"
                width="1200"
                height="800"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}