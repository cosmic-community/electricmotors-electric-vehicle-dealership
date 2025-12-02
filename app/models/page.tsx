import { getCarModels } from '@/lib/cosmic'
import ModelsGrid from '@/components/ModelsGrid'

export const metadata = {
  title: 'Our Models - ElectricMotors',
  description: 'Explore our complete lineup of premium electric vehicles.',
}

export default async function ModelsPage() {
  const models = await getCarModels()
  
  return (
    <div className="container-custom section-padding">
      <div className="text-center mb-16">
        <h1 className="mb-4">Our Electric Vehicle Lineup</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Discover the perfect electric vehicle for your lifestyle. Each model combines cutting-edge technology with sustainable design.
        </p>
      </div>
      
      <ModelsGrid models={models} showAll={true} />
    </div>
  )
}