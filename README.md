# MEDOMAS HEALTHCARE PVT. LTD.
## Corporate Website & Pharmaceutical Catalogue

> **Tagline:** Advancing Healthcare Through Quality, Science & Innovation  
> **Headquarters:** AP/631/A, Ramapuram, Thannimoodu P.O., Thiruvananthapuram, Kerala, India – 695123  
> **Phones:** +91 9645222639, +91 8921399610

---

### Project Architecture & Stack

* **Framework:** Next.js 16 (App Router + Turbopack)
* **Language:** TypeScript 5 (Strict Mode)
* **Styling:** Tailwind CSS v4 + Design System root variables
* **Animations:** Motion (`motion/react`) scroll parallax & staggered entrances
* **Validation:** React Hook Form + Zod
* **Icons:** Lucide React

---

### Routes & Information Architecture

| Route | Page Title / Role | Status |
|---|---|---|
| `/` | Cinematic Video Hero & Corporate Showcase | Complete |
| `/about` | Corporate Heritage, Kerala Roots & Governance | Complete |
| `/divisions` | Division Overview | Complete |
| `/divisions/meddent` | MEDDENT (12 Pharmaceutical Formulations) | Complete |
| `/divisions/ayumed` | AYUMED (Ayurvedic & Herbal Development) | Complete |
| `/products` | Interactive Searchable Product Catalogue | Complete |
| `/products/[slug]` | Dedicated Product Detail Pages (Pre-rendered) | Complete (12 Slugs) |
| `/collaborations` | 22 Partner Facilities & Nature Scientific R&D | Complete |
| `/careers` | Career Opportunities & Teamwork Culture | Complete |
| `/contact` | Working Enquiry Form & Head Office Details | Complete |
| `/privacy-policy` | Data Governance & Privacy Terms | Complete |
| `/disclaimer` | Medical, Pharmaceutical & Regulatory Disclaimer | Complete |
| `/sitemap.xml` | Dynamic XML Sitemap | Generated |
| `/robots.txt` | Search Engine Directives | Generated |

---

### Product Packaging & Images: How to Edit

All 12 products have placeholder packaging artworks in SVG format located at:
```text
medomas/public/images/products/[slug].svg
```

To update or replace any product pack shot with official photography or 3D renders:
1. Place your PNG/JPG image in `public/images/products/` (e.g. `public/images/products/acyfox-sp.png`).
2. Open `src/data/products.ts`.
3. Update the `image` field for that product:
   ```ts
   image: "/images/products/acyfox-sp.png",
   ```
4. Update packaging details such as `packSize`, `storageCondition`, or `tagline` directly in `src/data/products.ts`. All product pages and cards will automatically reflect the change.

---

### Running Development & Production Builds

#### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

#### Lint Verification
```bash
npm run lint
```

#### Production Build
```bash
npm run build
```
Generates 30 static pages with zero errors.
