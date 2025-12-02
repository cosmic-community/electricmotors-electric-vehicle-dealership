import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all car models with connected data
export async function getCarModels() {
  try {
    const response = await cosmic.objects
      .find({ type: 'car-models' })
      .props(['id', 'title', 'slug', 'metadata', 'thumbnail'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch car models');
  }
}

// Fetch single car model by slug
export async function getCarModel(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'car-models',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata', 'thumbnail'])
      .depth(1);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch car model');
  }
}

// Fetch featured models for homepage
export async function getFeaturedModels() {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'featured-models',
        'metadata.show_on_homepage': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured models');
  }
}

// Fetch all testimonials
export async function getTestimonials() {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch testimonials');
  }
}

// Fetch team members by department
export async function getTeamMembers(department?: string) {
  try {
    const query: Record<string, any> = { type: 'team-members' };
    
    if (department) {
      query['metadata.department.key'] = department;
    }
    
    const response = await cosmic.objects
      .find(query)
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch team members');
  }
}

// Fetch auto services
export async function getAutoServices() {
  try {
    const response = await cosmic.objects
      .find({ type: 'auto-services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch auto services');
  }
}

// Fetch car features
export async function getCarFeatures() {
  try {
    const response = await cosmic.objects
      .find({ type: 'car-features' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch car features');
  }
}