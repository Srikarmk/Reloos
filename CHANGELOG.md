# Changelog

All notable changes to the Reloos app will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Next.js 16 app with App Router and `src/` directory
- Tailwind CSS v4 with PostCSS
- TypeScript and ESLint
- Reloos metadata and placeholder home page (tagline: "Buy it. Use it. Return it back.")
- This changelog
- **Shop page** (home route `/`):
  - **Header**: Reloos logo (yellow circular icon + “Reloos”), nav links “Shop” and “My Gear”, cart icon
  - **Hero product section**: Featured UPPAbaby VISTA V3 with full-bleed background image, “Pick condition you want”, four condition/price buttons (New £999, Like New £799, Good £649, Fair £499), “Return when no longer needed and get 30% credit” banner
  - **Trending Right Now**: “The most loved gear by parents” heading, four product cards (UPPAbaby VISTA V3, SNOO Smart Sleeper, Nuna PIPA Lite LX, Doona Stroller) with starting prices and condition tags (New, Like New, Good)
  - **Why Parents Love Reloos**: “Making parenting more affordable and sustainable” subheading, three benefit cards (Safety First, Guaranteed Buyback, Free Pickup) with pastel backgrounds and icons
  - **CTA section**: Navy banner “Ready to Start Your Reloos Journey?”, subtext, “Browse All Gear” (yellow) and “Learn How It Works” (outline) buttons
  - **Help button**: Fixed bottom-right question mark
- **My Gear page** (`/my-gear`):
  - **Total Asset Value** card: dark navy rounded card with “Total Asset Value”, large “$99” total, “Add Outside Gear” (yellow + plus icon) and “Trade-In All” (yellow) buttons
  - **My Gear** section heading and list of gear items
  - **Gear item card**: product image (left), name, “Purchased” date with calendar icon, “Current Trade-In Value” in green, condition pill (e.g. “Like New”), “Get Quote” yellow button, scan/QR icon
- **Product detail page** (`/shop/[id]`) — when clicking an item in trending (or elsewhere):
  - **Header** (same as shop/My Gear)
  - **Two-column layout**: left — large product image (rounded, grayscale) + thumbnail with yellow border; right — product name, star rating + review count, current price, Color swatches (circular, selected with yellow border), Condition tiers (Brand New, Like New/Best Value, Good, Fair) with descriptions and prices, selected condition highlighted with light blue + checkmark, help icon next to Fair price
  - **Guaranteed Buyback** block: dark navy, “Purchase Price”, “Future Trade-in Value (30%)” in green, “Net Cost of Ownership”, values update when condition changes
  - **Add to Cart** yellow button
  - **Product guarantees**: three cards — Safety Certified (purple circle + shield), Professionally Disinfected (green circle + checkmark), Warranty Included (blue circle + heart); white cards with shadow
  - **Transparency Guarantee**: heading “Transparency Guarantee”, subtitle “Every item undergoes rigorous inspection.”, three cards — Physical Inspection (light blue, shield, bullet list with green checkmarks), Mechanical Testing (light green, refresh icon, bullets), Safety Certification (light purple, checkmark, bullets)
- Product data lib (`src/lib/products.ts`): product type, conditions, colors, `getProduct(id)`, `getAllProductIds()`; mock data for UPPAbaby VISTA V3, SNOO, Nuna PIPA Lite LX, Doona Stroller
- Hero “Pick condition you want” buttons and product title link to product page (`/shop/uppababy-vista-v3`); condition links include `?condition=` so product page opens with that condition pre-selected
- Reloos brand colors in CSS (yellow, navy, pastels for benefit cards, condition tags)
- Next.js image config for Unsplash

### Changed

- Home page replaced with full shop page (header, hero, trending grid, benefits, CTA)
- Header: active nav state (underline) for Shop and My Gear based on current route

### Fixed

- (none yet)

---

_Reloos — Circular economy marketplace for baby gear._
