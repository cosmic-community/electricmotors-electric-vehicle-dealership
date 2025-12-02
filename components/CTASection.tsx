import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-accent/20 to-primary">
      <div className="container-custom text-center">
        <h2 className="mb-6">Ready to Go Electric?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the future of driving. Schedule a test drive or visit our showroom today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/models" className="btn-primary">
            Explore Models
          </Link>
          <Link href="/team" className="btn-secondary">
            Meet Our Team
          </Link>
        </div>
      </div>
    </section>
  )
}