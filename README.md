# 🌿 FloraVision

A beautiful, responsive indoor plant store built with **Next.js 14**, **Tailwind CSS v4**, and **TypeScript** — deployed on Vercel.

---

## 🖥️ Live Demo

[plant-store-kappa.vercel.app](https://plant-store-kappa.vercel.app)

---

## 📸 Preview

> Dark green, nature-inspired e-commerce landing page with hero section, trending plants, product listings, customer reviews, and O₂ plant info section.

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Poppins (Google Fonts) | Typography |
| Vercel | Deployment |

---

## 📁 Project Structure

```
floravision/
├── app/
│   ├── globals.css          # Global styles + Tailwind import
│   ├── layout.tsx           # Root layout with font and metadata
│   └── page.tsx             # Main page composition
│
├── components/
│   ├── navbar/
│   │   └── Navbar.tsx       # Responsive navbar with mobile drawer
│   ├── hero/
│   │   └── Hero.tsx         # Hero section with plant circle + floating card
│   ├── plants/
│   │   ├── TrendingPlants.tsx   # Trending Now 3-card grid
│   │   ├── Products.tsx         # Top Selling Plants 6-card grid
│   │   ├── PlantCard.tsx        # Reusable plant card component
│   │   └── Oxygen.tsx           # O₂ plants feature section
│   ├── reviews/
│   │   └── Reviews.tsx      # Customer testimonials section
│   └── footer/
│       └── Footer.tsx       # Footer with links and newsletter
│
└── public/
    └── images/              # Plant images (plant.png, plant2–6.png)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tanyabajpai/plant-store.git
cd floravision

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Design Reference

The UI was implemented from a Figma design file provided as part of a frontend internship assessment.

**Design highlights:**
- Dark green background (`#021b11`) with radial gradient overlays
- Accent color: `green-400` (`#4ade80`)
- Font: Poppins (300–700 weights)
- Rounded cards with `border border-white/10` glass morphism style
- Smooth hover animations: scale, translate, border color transition

---

## 📦 Key Components

### `Navbar`
Responsive navigation with desktop links + mobile full-screen drawer. Uses `react-icons` for search, cart, and user icons.

### `Hero`
Two-column layout with large typography on the left, a circular plant image with green gradient background on the right, and a floating glass-morphism info card.

### `TrendingPlants` & `Products`
Plant card grids pulling from local data arrays. `PlantCard` is a shared component used by the Products section.

### `Reviews`
Three testimonial cards with avatar initials, star ratings rendered via SVG, and reviewer role labels.

### `Oxygen`
Split layout section highlighting O₂ air-purifying plants with a feature image and CTA buttons.

### `Footer`
Three-column footer: brand info + social links, quick navigation links, and email newsletter subscription input.

---

## 🌐 Deployment

Deployed on **Vercel** via GitHub integration. Every push to `main` triggers an automatic deployment.

```bash
# Or deploy manually via Vercel CLI
npx vercel --prod
```

---

## 📄 License

This project was built as part of a frontend internship technical assessment.

---

*Made with 🌱 and Next.js*