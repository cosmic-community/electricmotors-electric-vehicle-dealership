import { FeaturedModel } from '@/types'
import Link from 'next/link'

interface HeroSectionProps {
  featuredModels: FeaturedModel[]
}

export default function HeroSection({ featuredModels }: HeroSectionProps) {
  const featured = featuredModels[0]
  
  if (!featured) {
    return (
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="text-center container-custom">
          <h1 className="mb-6">Experience Electric</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the future of sustainable transportation
          </p>
          <Link href="/models" className="btn-primary">
            Explore Our Models
          </Link>
        </div>
      </section>
    )
  }
  
  const heroImage = featured.metadata.hero_image?.imgix_url || 
                    featured.metadata.car_model?.thumbnail ||
                    'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=600&fit=crop'
  
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage}?w=1920&h=1080&fit=crop&auto=format,compress)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
      </div>
      
      <div className="relative container-custom z-10">
        <div className="max-w-3xl">
          <h1 className="mb-4">
            {featured.metadata.headline}
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            {featured.metadata.subheadline}
          </p>
          {featured.metadata.car_model && (
            <div className="flex gap-4">
              <Link 
                href={`/models/${featured.metadata.car_model.slug}`}
                className="btn-primary"
              >
                Learn More
              </Link>
              <Link href="/models" className="btn-secondary">
                View All Models
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}