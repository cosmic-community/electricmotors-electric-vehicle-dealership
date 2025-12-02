# ElectricMotors - Electric Vehicle Dealership

![App Preview](https://imgix.cosmicjs.com/91f82950-cfb7-11f0-8f69-6fd7eec3187d-photo-1617788138017-80ad40651399-1764704778038.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, high-performance electric vehicle dealership website built with Next.js 16 and Cosmic CMS. Showcase your complete EV inventory with stunning visual design, interactive model exploration, customer testimonials, team profiles, and service offerings.

## ✨ Features

- 🚗 **Dynamic Vehicle Showcase** - Complete car model catalog with specifications, galleries, and customization options
- 🎨 **Interactive Model Pages** - Detailed vehicle pages with performance stats, features, colors, and pricing
- ⭐ **Customer Testimonials** - Real reviews with ratings, photos, and model associations
- 👥 **Team Directory** - Sales and engineering team profiles with contact information
- 🔧 **Service Offerings** - Professional auto services with pricing and descriptions
- ⚡ **Featured Models** - Homepage spotlight on new and featured vehicles
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🚀 **Performance Optimized** - Fast load times with Next.js 16 and optimized images
- 🎯 **SEO Optimized** - Proper meta tags, structured data, and semantic HTML
- ♿ **Accessible** - WCAG compliant with keyboard navigation and screen reader support

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=692f40cd1729eae03fa5aaa7&clone_repository=692f43821729eae03fa5aaf7)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a electric auto dealership website with car models, car features, car customisation (colours, wheels, line), auto services, sales and engineer team members, testimonials, and featured new models"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK** - Official SDK for data fetching
- **React 19** - Latest React features

## 📋 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account and bucket
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd electric-motors-dealership
```

2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Cosmic SDK Examples

### Fetching Car Models with Connected Objects

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all car models with features and colors
const { objects: models } = await cosmic.objects
  .find({ type: 'car-models' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Include connected features and colors

// Access connected objects
models.forEach(model => {
  console.log(model.metadata.features) // Array of feature objects
  console.log(model.metadata.colors) // Array of color options
})
```

### Fetching Team Members by Department

```typescript
// Fetch sales team members
const { objects: salesTeam } = await cosmic.objects
  .find({ 
    type: 'team-members',
    'metadata.department.key': 'sales'
  })
  .props(['id', 'title', 'slug', 'metadata'])
```

### Fetching Featured Models for Homepage

```typescript
// Fetch featured models that should appear on homepage
const { objects: featured } = await cosmic.objects
  .find({ 
    type: 'featured-models',
    'metadata.show_on_homepage': true
  })
  .depth(1) // Include connected car model data
```

## 🎨 Cosmic CMS Integration

This application uses Cosmic as a headless CMS with the following content types:

- **Car Models** - Vehicle specifications, galleries, features, and pricing
- **Car Features** - Autopilot, fast charging, battery technology
- **Customization Options** - Colors, wheels, and trim lines
- **Testimonials** - Customer reviews with ratings
- **Team Members** - Sales and engineering staff profiles
- **Auto Services** - Maintenance and installation services
- **Featured Models** - Homepage featured vehicle promotions

All content is managed through your Cosmic dashboard at [https://app.cosmicjs.com](https://app.cosmicjs.com).

## 🌐 Deployment Options

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push your code to GitHub
2. Import your repository in Netlify
3. Add environment variables in Netlify dashboard
4. Deploy!

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Support

For support with Cosmic CMS, visit [https://www.cosmicjs.com/docs](https://www.cosmicjs.com/docs)

---

Built with ⚡ by Cosmic
<!-- README_END -->