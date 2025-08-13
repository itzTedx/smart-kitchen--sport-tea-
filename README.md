# SportTea - Premium Organic Tea E-commerce

A modern, high-performance e-commerce platform for premium organic tea and wellness products from the Nilgiri Hills. Built with Next.js 15, TypeScript, and Tailwind CSS.

![SportTea Banner](https://img.shields.io/badge/SportTea-Premium%20Organic%20Tea-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC)

## 🌿 About SportTea

SportTea offers a curated collection of premium organic teas sourced from the pristine Nilgiri Hills. Our platform showcases high-altitude teas, healing herbs, and vibrant spices — ethically sourced and naturally powerful.

### Key Features

- **Premium Tea Collection**: Black, Green, and Herbal teas
- **Organic & Pesticide-Free**: All products grown in high-altitude, pesticide-free soil
- **E-commerce Functionality**: Shopping cart, product catalog, and checkout
- **Modern UI/UX**: Beautiful, responsive design with accessibility features
- **SEO Optimized**: Structured data, meta tags, and performance optimization
- **Performance Focused**: Turbopack, lazy loading, and image optimization

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Jotai](https://jotai.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting & Formatting**: [Biome](https://biomejs.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📦 Project Structure

```
sporttea-ecommerce/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── cart/              # Shopping cart functionality
│   │   ├── products/          # Product catalog pages
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Homepage with lazy loading
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── layout/           # Layout components (Navbar, Footer, etc.)
│   │   ├── cart-sheet.tsx    # Shopping cart sidebar
│   │   └── providers/        # Context providers
│   ├── modules/              # Feature-based modules
│   │   ├── home/             # Homepage sections
│   │   └── products/         # Product-related features
│   ├── data/                 # Static data and constants
│   ├── lib/                  # Utility functions
│   ├── hooks/                # Custom React hooks
│   └── assets/               # Icons, fonts, and static assets
├── public/                   # Static assets
└── components.json           # shadcn/ui configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sporttea-ecommerce.git
   cd sporttea-ecommerce
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build for production with Turbopack |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Biome linter |
| `pnpm lint:fix` | Fix linting issues automatically |
| `pnpm format` | Format code with Biome |
| `pnpm analyze` | Analyze bundle size |
| `pnpm build:analyze` | Build and analyze bundle |

## 🎨 Design System

The project uses a comprehensive design system built with:

- **shadcn/ui**: Modern, accessible component library
- **Tailwind CSS 4**: Utility-first CSS framework
- **Custom Icons**: SVG icons for tea and wellness themes
- **Typography**: Moret and Helvetica font families
- **Color Palette**: Brand-consistent colors with dark/light mode support

### Key Design Features

- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Performance**: Lazy loading, image optimization, code splitting
- **SEO**: Structured data, meta tags, sitemap generation

## 🛒 E-commerce Features

### Product Catalog
- **Product Categories**: Black tea, Green tea, Herbal tea
- **Product Details**: Images, descriptions, benefits, pricing
- **Search & Filter**: Product discovery and filtering

### Shopping Experience
- **Shopping Cart**: Persistent cart with quantity controls
- **Add to Cart**: One-click product addition
- **Cart Management**: Update quantities, remove items
- **Checkout Flow**: Streamlined purchase process

### Product Information
- **Detailed Descriptions**: Comprehensive product overviews
- **Health Benefits**: Wellness and nutritional information
- **Sourcing Details**: Origin and organic certification
- **Brewing Guides**: Preparation instructions

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://sporttea.in
```

### Tailwind Configuration

The project uses Tailwind CSS 4 with custom configuration for:
- Brand colors and typography
- Responsive breakpoints
- Custom animations and transitions

### Next.js Configuration

Optimized for performance with:
- Turbopack for faster builds
- Image optimization (WebP, AVIF)
- Bundle analysis capabilities
- SEO-friendly settings

## 📱 Performance Optimizations

- **Turbopack**: Faster development and builds
- **Lazy Loading**: Non-critical components loaded on demand
- **Image Optimization**: WebP/AVIF formats with responsive sizing
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Built-in bundle size monitoring

## 🧪 Testing

The project includes:
- TypeScript for type safety
- Biome for linting and formatting
- ESLint configuration for code quality
- Performance monitoring tools

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify


### Development Guidelines

- Follow TypeScript best practices
- Use Biome for code formatting and linting
- Write semantic HTML with proper accessibility
- Optimize images and assets for performance
- Test across different devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives

## 📞 Contact

- **Website**: [https://sporttea.in](https://sporttea.in)
- **Email**: hello@sporttea.in
- **Social Media**: 
  - [Facebook](https://facebook.com/sporttea)
  - [Twitter](https://twitter.com/sporttea)
  - [Instagram](https://instagram.com/sporttea)

---

**SportTea** - Nature's Essence, Boldly Brewed with Spice and Soul 🌿
