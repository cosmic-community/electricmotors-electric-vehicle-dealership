import { getFeaturedModels, getCarModels, getTestimonials } from '@/lib/cosmic'
import HeroSection from '@/components/HeroSection'
import FeaturedModels from '@/components/FeaturedModels'
import ModelsGrid from '@/components/ModelsGrid'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

export default async function HomePage() {
  const [featuredModels, carModels, testimonials] = await Promise.all([
    getFeaturedModels(),
    getCarModels(),
    getTestimonials(),
  ])
  
  return (
    <>
      <HeroSection featuredModels={featuredModels} />
      <FeaturedModels featuredModels={featuredModels} />
      <ModelsGrid models={carModels} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </>
  )
}