# Smart Kitchen - Premium Organic Tea E-commerce

A modern, high-performance e‑commerce storefront for premium organic tea and wellness blends from the Nilgiri Hills. Built with Next.js 15, TypeScript, and Tailwind CSS 4.

![Smart Kitchen Banner](https://img.shields.io/badge/Smart%20Kitchen-Premium%20Organic%20Tea-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC)

## 🌿 About Smart Kitchen

Smart Kitchen curates premium, organically grown teas from the pristine Nilgiri Hills. Explore high‑altitude teas, healing herbs, and vibrant spices — ethically sourced, naturally powerful, and crafted for everyday wellness.

### Highlights

- **Premium Tea Collection**: Black, Green, and Herbal teas
- **Organic & Pesticide‑Free**: Sourced from high‑altitude, pesticide‑free gardens
- **E‑commerce Core**: Product catalog, cart, and streamlined checkout basics
- **Modern UI/UX**: Responsive, accessible, and fast by default
- **SEO‑Ready**: Metadata, sitemap, robots, and structured data
- **Performance Focus**: Turbopack dev/build, lazy loading, image optimization

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Jotai](https://jotai.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Lint/Format**: [Biome](https://biomejs.dev/)
- **Bundle Analysis**: `@next/bundle-analyzer`

## 📦 Project Structure

```
smart-kitchen-ecommerce/
├── src/
│   ├── app/                    # App Router
│   │   ├── cart/               # Cart pages & routes
│   │   ├── products/           # Product catalog routes
│   │   ├── layout.tsx          # Root layout & metadata
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   ├── sitemap.ts          # Sitemap
│   │   └── robots.ts           # Robots
│   ├── components/             # Reusable UI
│   │   ├── ui/                 # shadcn/ui wrappers
│   │   ├── layout/             # Navbar, Footer, etc.
│   │   ├── cart-sheet.tsx      # Cart sidebar
│   │   └── providers/          # Context providers
│   ├── modules/                # Feature modules
│   │   ├── home/
│   │   └── products/
│   ├── data/                   # Static data & constants
│   ├── lib/                    # Utilities
│   ├── hooks/                  # Custom React hooks
│   └── assets/                 # Icons, fonts, static assets
├── public/                     # Static assets
├── components.json             # shadcn/ui config
└── next.config.ts              # Next.js config
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/itzTedx/smart-kitchen--sport-tea- smart-kitchen
   cd smart-kitchen
   ```

2. Install dependencies
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open your browser
   Navigate to [http://localhost:3000](http://localhost:3000).

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build for production with Turbopack |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Biome linter |
| `pnpm lint:fix` | Fix linting issues automatically |
| `pnpm format` | Format code with Biome |
| `pnpm analyze` | Build with bundle analyzer enabled |
| `pnpm build:analyze` | Production build with bundle analyzer |
| `pnpm bundle-report` | Open Next.js bundle analyzer report |
| `pnpm build:webpack` | Build using Webpack (fallback) |
| `pnpm dev:webpack` | Dev server using Webpack (fallback) |

## 🎨 Design System

- **shadcn/ui** for accessible primitives and consistent UI
- **Tailwind CSS 4** utility‑first styling
- **Custom Icons** aligned to tea/wellness theme
- **Typography** tuned for readability
- **Light/Dark** themes with brand palette

### UX Principles

- **Responsive**: Mobile‑first, adaptive layouts
- **Accessible**: Semantic HTML, ARIA, keyboard navigation
- **Performant**: Code splitting, lazy loading, image optimization
- **SEO**: Metadata, structured data, sitemap/robots

## 🛒 E‑commerce Features

### Product Catalog
- Categories: Black, Green, Herbal
- Product details: images, descriptions, benefits, pricing
- Search & Filter for discovery

### Shopping Experience
- Cart with quantity controls (persistent)
- One‑click add to cart
- Update quantities and remove items
- Streamlined checkout flow (extensible)

### Product Content
- Detailed descriptions and brewing guides
- Health benefits and sourcing/origin
- Organic certification notes

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Example
NEXT_PUBLIC_SITE_URL=https://https://smartkitchen.store/
```

### Next.js Configuration

Performance‑oriented setup with:
- Turbopack for fast dev/build
- Image optimization (WebP/AVIF)
- Bundle analysis via `@next/bundle-analyzer`
- SEO friendly defaults (sitemap, robots)

## 📱 Performance

- Turbopack acceleration
- Lazy loading for non‑critical components
- Optimized images and responsive sizes
- Route‑level code splitting

## 🧪 Quality

- TypeScript for type safety
- Biome for linting/formatting
- ESLint config included
- Basic performance tooling

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy on push to `main`

### Other Platforms

Works anywhere Next.js runs:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Development Guidelines

- Follow TypeScript best practices
- Keep components small and composable
- Use semantic HTML and ARIA where appropriate
- Optimize images and assets
- Test across devices and browsers

## 📄 License

MIT — see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

## 📞 Contact

- **Website**: [https://https://smartkitchen.store/](https://https://smartkitchen.store/)
- **Email**: hello@https://smartkitchen.store/
- **Social**: [Facebook](https://facebook.com/smart-kitchen) • [Twitter](https://twitter.com/smart-kitchen) • [Instagram](https://instagram.com/smart-kitchen)

---

**Smart Kitchen** — Nature's Essence, Boldly Brewed with Spice and Soul 🌿
