// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
}

// Car Model interface
export interface CarModel extends CosmicObject {
  type: 'car-models';
  metadata: {
    model_name?: string;
    tagline?: string;
    description?: string;
    starting_price?: number;
    range?: number;
    top_speed?: number;
    acceleration?: number;
    seating?: number;
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    features?: CarFeature[];
    colors?: CustomizationOption[];
    in_stock?: boolean;
  };
}

// Car Feature interface
export interface CarFeature extends CosmicObject {
  type: 'car-features';
  metadata: {
    feature_name?: string;
    description?: string;
    icon?: string;
    feature_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Customization Option interface
export interface CustomizationOption extends CosmicObject {
  type: 'customization-options';
  metadata: {
    option_name?: string;
    category?: {
      key: string;
      value: string;
    };
    description?: string;
    additional_cost?: number;
    image?: {
      url: string;
      imgix_url: string;
    };
    color_code?: string;
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name?: string;
    review?: string;
    rating?: {
      key: string;
      value: string;
    };
    car_model?: CarModel;
    customer_photo?: {
      url: string;
      imgix_url: string;
    };
    date?: string;
  };
}

// Team Member interface
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name?: string;
    role?: string;
    department?: {
      key: string;
      value: string;
    };
    bio?: string;
    specialty?: string;
    email?: string;
    phone?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Auto Service interface
export interface AutoService extends CosmicObject {
  type: 'auto-services';
  metadata: {
    service_name?: string;
    description?: string;
    price?: number;
    duration?: string;
    service_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Featured Model interface
export interface FeaturedModel extends CosmicObject {
  type: 'featured-models';
  metadata: {
    headline?: string;
    subheadline?: string;
    car_model?: CarModel;
    feature_description?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    show_on_homepage?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}