import { getAutoServices } from '@/lib/cosmic'
import ServicesGrid from '@/components/ServicesGrid'

export const metadata = {
  title: 'Services - ElectricMotors',
  description: 'Professional maintenance and installation services for your electric vehicle.',
}

export default async function ServicesPage() {
  const services = await getAutoServices()
  
  return (
    <div className="container-custom section-padding">
      <div className="text-center mb-16">
        <h1 className="mb-4">Our Services</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Keep your electric vehicle running at peak performance with our professional maintenance and installation services.
        </p>
      </div>
      
      <ServicesGrid services={services} />
    </div>
  )
}