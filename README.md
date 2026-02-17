# Tondo Supply — Landing Page

A high-impact streetwear landing page for **Tondo Supply**, a sustainable clothing brand from Tondo, Manila, Philippines. Built with React 19, Tailwind CSS 4, and Framer Motion, featuring an industrial brutalist design aesthetic.

## Key Features

- Full-viewport cinematic hero section with animated text and CTA buttons
- Staggered masonry product collection grid with hover effects
- Asymmetric about section with community story and brand stats
- Sustainability manifesto section with three-pillar layout
- Social media CTA banner and comprehensive footer with store info
- Smooth scroll navigation with transparent-to-solid navbar
- Mobile-responsive design with full-screen hamburger menu overlay
- Scroll-triggered entrance animations throughout

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework |
| **TypeScript** | Type safety |
| **Tailwind CSS 4** | Utility-first styling |
| **Framer Motion** | Scroll and entrance animations |
| **shadcn/ui** | UI component primitives |
| **Wouter** | Client-side routing |
| **Vite 7** | Build tool and dev server |
| **Lucide React** | Icon library |

---

## Prerequisites

- **Node.js** 22 or higher
- **pnpm** 10+ (included as packageManager)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mltpascual/TondoSupply.git
cd TondoSupply
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
pnpm build
pnpm start
```

---

## Architecture

### Directory Structure

```
TondoSupply/
├── client/
│   ├── public/                    # Static assets
│   ├── index.html                 # HTML entry point (Google Fonts loaded here)
│   └── src/
│       ├── components/
│       │   ├── ui/                # shadcn/ui primitives (Button, Card, etc.)
│       │   ├── Navbar.tsx         # Fixed navigation with scroll detection
│       │   ├── HeroSection.tsx    # Full-viewport hero with cinematic imagery
│       │   ├── CollectionSection.tsx  # Product grid with staggered masonry
│       │   ├── AboutSection.tsx   # Brand story with stats and lifestyle image
│       │   ├── SustainabilitySection.tsx  # Eco-friendly manifesto
│       │   ├── ContactSection.tsx # Social CTA banner + footer
│       │   ├── ErrorBoundary.tsx  # React error boundary
│       │   └── Map.tsx            # Google Maps integration (unused)
│       ├── contexts/
│       │   └── ThemeContext.tsx    # Dark/light theme provider
│       ├── hooks/                 # Custom React hooks
│       ├── lib/
│       │   └── utils.ts           # Tailwind merge utility
│       ├── pages/
│       │   ├── Home.tsx           # Main landing page (assembles all sections)
│       │   └── NotFound.tsx       # 404 page
│       ├── App.tsx                # Router and providers
│       ├── main.tsx               # React entry point
│       └── index.css              # Global styles, design tokens, custom utilities
├── server/
│   └── index.ts                   # Express static server (production)
├── shared/
│   └── const.ts                   # Shared constants
├── DEVELOPMENT_GUIDELINES.md      # Comprehensive dev guidelines
├── ideas.md                       # Design brainstorm document
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Design System

The project uses a custom design system defined in `client/src/index.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-tondo-red` | `oklch(0.52 0.2 25)` | Primary accent, CTAs, highlights |
| `--color-charcoal` | `oklch(0.18 0.005 80)` | Background, dark surfaces |
| `--color-concrete` | `oklch(0.85 0.01 80)` | Body text, secondary content |
| `--color-offwhite` | `oklch(0.96 0.005 80)` | Headlines, primary text |
| `--font-display` | Bebas Neue | Headlines, section titles |
| `--font-body` | Space Grotesk | Body text, labels, buttons |

### Page Flow

```
Navbar (fixed, transparent → solid on scroll)
  ↓
HeroSection (full viewport, cinematic background, animated headline)
  ↓
CollectionSection (4-product staggered grid, hover effects)
  ↓
AboutSection (asymmetric 2-column: lifestyle image + brand story)
  ↓
SustainabilitySection (texture background, 3-pillar grid)
  ↓
ContactSection (red CTA banner + footer with store info)
```

---

## Brand Information

| Detail | Value |
|--------|-------|
| **Brand** | Tondo Supply |
| **Tagline** | Hood to Hood Across the Globe |
| **Location** | 2029 Cortez Tower Dagupan Ext., Tondo, Manila, Philippines 1012 |
| **Email** | tondosupply1213@gmail.com |
| **Hours** | Tuesday–Sunday, 1:00 PM – 9:00 PM |
| **Facebook** | [facebook.com/tondosupply](https://www.facebook.com/tondosupply/) |
| **Instagram** | [instagram.com/tondosupply](https://www.instagram.com/tondosupply/) |
| **TikTok** | [tiktok.com/@tondosupply](https://www.tiktok.com/@tondosupply) |
| **Shopee** | [shopee.ph/tondosupply](https://shopee.ph/tondosupply) |

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Vite dev server on port 3000 |
| `pnpm build` | Build for production |
| `pnpm start` | Run production server |
| `pnpm preview` | Preview production build |
| `pnpm check` | TypeScript type checking |
| `pnpm format` | Format code with Prettier |

---

## Deployment

This project is deployed via **Manus** with built-in hosting. To deploy:

1. Create a checkpoint in the Manus Management UI
2. Click the **Publish** button in the header
3. Configure custom domain in Settings → Domains

For alternative deployment, the `pnpm build` command outputs static files to `dist/public/` which can be served by any static hosting provider.

---

## License

MIT
