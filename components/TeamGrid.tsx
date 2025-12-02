import { TeamMember } from '@/types'

interface TeamGridProps {
  teamMembers: TeamMember[]
}

export default function TeamGrid({ teamMembers }: TeamGridProps) {
  if (!teamMembers || teamMembers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No team members available.</p>
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member) => (
        <div key={member.id} className="card text-center">
          {member.metadata.photo && (
            <img
              src={`${member.metadata.photo.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
              alt={member.metadata.full_name || member.title}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              width="128"
              height="128"
            />
          )}
          
          <h3 className="text-xl mb-2">
            {member.metadata.full_name || member.title}
          </h3>
          
          <p className="text-accent font-semibold mb-1">
            {member.metadata.role}
          </p>
          
          {member.metadata.department && (
            <p className="text-sm text-gray-400 mb-4">
              {member.metadata.department.value}
            </p>
          )}
          
          {member.metadata.specialty && (
            <p className="text-sm text-gray-400 mb-4">
              <strong>Specialty:</strong> {member.metadata.specialty}
            </p>
          )}
          
          {member.metadata.bio && (
            <p className="text-gray-400 mb-4 text-sm">
              {member.metadata.bio}
            </p>
          )}
          
          <div className="space-y-2 text-sm">
            {member.metadata.email && (
              <a 
                href={`mailto:${member.metadata.email}`}
                className="block text-accent hover:text-blue-400 transition-colors"
              >
                {member.metadata.email}
              </a>
            )}
            
            {member.metadata.phone && (
              <a 
                href={`tel:${member.metadata.phone}`}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {member.metadata.phone}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}