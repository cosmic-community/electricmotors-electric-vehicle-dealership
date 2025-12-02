import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-accent">
            ⚡ ElectricMotors
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/models" className="text-gray-300 hover:text-white transition-colors">
              Models
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
              Team
            </Link>
            <Link href="/models" className="btn-primary">
              Explore Vehicles
            </Link>
          </div>
          
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}