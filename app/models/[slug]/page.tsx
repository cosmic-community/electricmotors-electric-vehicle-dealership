// app/models/[slug]/page.tsx
import { getCarModel, getCarModels } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import ModelDetailHero from '@/components/ModelDetailHero'
import ModelSpecs from '@/components/ModelSpecs'
import ModelFeatures from '@/components/ModelFeatures'
import ModelGallery from '@/components/ModelGallery'
import ModelCustomization from '@/components/ModelCustomization'
import { CarModel } from '@/types'

export async function generateStaticParams() {
  const models = await getCarModels()
  
  return models.map((model) => ({
    slug: model.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const model = await getCarModel(slug) as CarModel | null
  
  if (!model) {
    return {
      title: 'Model Not Found',
    }
  }
  
  return {
    title: `${model.metadata.model_name} - ElectricMotors`,
    description: model.metadata.tagline || 'Premium electric vehicle',
  }
}

export default async function ModelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const model = await getCarModel(slug) as CarModel | null
  
  if (!model) {
    notFound()
  }
  
  return (
    <>
      <ModelDetailHero model={model} />
      <ModelSpecs model={model} />
      <ModelFeatures model={model} />
      <ModelGallery model={model} />
      <ModelCustomization model={model} />
    </>
  )
}