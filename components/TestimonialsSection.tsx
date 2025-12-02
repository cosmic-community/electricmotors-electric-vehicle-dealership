import { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }
  
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-400">
            Real experiences from real electric vehicle owners
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            const ratingValue = testimonial.metadata.rating?.key || '5'
            const rating = parseInt(ratingValue)
            
            return (
              <div key={testimonial.id} className="card">
                <div className="flex items-start gap-4 mb-4">
                  {testimonial.metadata.customer_photo && (
                    <img
                      src={`${testimonial.metadata.customer_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                      alt={testimonial.metadata.customer_name || 'Customer'}
                      className="w-16 h-16 rounded-full object-cover"
                      width="60"
                      height="60"
                    />
                  )}
                  
                  <div>
                    <h4 className="font-semibold">
                      {testimonial.metadata.customer_name}
                    </h4>
                    <div className="flex text-yellow-400 mt-1">
                      {Array.from({ length: 5 }, (_, index) => (
                        <svg
                          key={index}
                          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4">{testimonial.metadata.review}</p>
                
                {testimonial.metadata.car_model && (
                  <div className="text-sm text-accent">
                    Purchased: {testimonial.metadata.car_model.title}
                  </div>
                )}
                
                {testimonial.metadata.date && (
                  <div className="text-sm text-gray-500 mt-2">
                    {new Date(testimonial.metadata.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}