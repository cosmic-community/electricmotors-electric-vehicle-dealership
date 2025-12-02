import { getTeamMembers } from '@/lib/cosmic'
import TeamGrid from '@/components/TeamGrid'

export const metadata = {
  title: 'Our Team - ElectricMotors',
  description: 'Meet the dedicated professionals behind ElectricMotors.',
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()
  
  return (
    <div className="container-custom section-padding">
      <div className="text-center mb-16">
        <h1 className="mb-4">Meet Our Team</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Our experienced team of sales consultants and engineers are here to help you find the perfect electric vehicle and keep it running at peak performance.
        </p>
      </div>
      
      <TeamGrid teamMembers={teamMembers} />
    </div>
  )
}