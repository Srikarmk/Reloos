/**
 * Base path for images in public/USED IMAGES FOR MVP
 * Next.js serves from public, so URL is /USED IMAGES FOR MVP/...
 */
const MVP = "/USED IMAGES FOR MVP";

export const MVP_IMAGES = {
  /** Hero + UPPAbaby Vista V3 PDP header */
  vistaHero: `${MVP}/240524_VistaV3_PDP_OldSite_Hdr-1.jpg`,
  /** UPPAbaby Vista V3 gallery (VSO = Vista Stroller) */
  vistaGallery: [
    `${MVP}/0303-VSO-JKE_1-1_(1).webp`,
    `${MVP}/0303-VSO-JKE_1-2.webp`,
    `${MVP}/0303-VSO-JKE_1-3 (1).webp`,
  ],
  /** Bugaboo Butterfly 2 */
  bugabooButterfly: `${MVP}/imgi_689_Bugaboo-Butterfly-2-travel-stroller-black-chassis-dusty-pink-fabrics-dusty-pink-sun-canopy-x-PV007938-07.png`,
  /** Bugaboo Butterfly 2 gallery */
  bugabooGallery: [
    `${MVP}/imgi_33_Bugaboo-Butterfly-2-travel-stroller-black-base-heritage-black-fabrics-heritage-black-sun-canopy-x-PV00766.avif`,
    `${MVP}/imgi_35_Bugaboo-Butterfly-2-travel-stroller-black-base-heritage-black-fabrics-heritage-black-sun-canopy-x-PV00766.avif`,
    `${MVP}/imgi_37_Bugaboo-Butterfly-2-travel-stroller-black-base-heritage-black-fabrics-heritage-black-sun-canopy-x-PV00766.avif`,
  ],
  /** Minu V3 */
  minuV3: `${MVP}/0803-MIN-NA-JKE_1-1.webp`,
  minuGallery: [
    `${MVP}/0803-MIN-NA-JKE_1-1.webp`,
    `${MVP}/0803-MIN-NA-JKE_1-2.webp`,
    `${MVP}/0803-MIN-NA-JKE_1-3.webp`,
  ],
  /** SNOO Smart Sleeper */
  snoo: `${MVP}/snoo-smart-sleeper-bassinet-by-happiest-baby-1-c.jpg`,
  snooHero: `${MVP}/snoo-sale-hero-updated-sept-24.png`,
  /** Cradlewise / bassinet (PDP gallery) */
  cradlewise: `${MVP}/Dizajn bez názvu (67).png`,
  /** Cradlewise card in Bassinets section (2nd) */
  cradlewiseCard: `${MVP}/b8dcd8f3e176786b580cd6907699ec736994fac9441d7a49c758d4630477325d__2_.jpg`,
  /** Carriers / generic product */
  carriers: `${MVP}/Dizajn bez názvu (62).png`,
  /** Baby monitors / generic */
  babyMonitors: `${MVP}/Dizajn bez názvu (66).png`,

  /** Shop Collections section – one image per category to match design */
  collectionsStrollers: `${MVP}/Dizajn bez názvu (61).png`,
  collectionsBassinets: `${MVP}/Dizajn bez názvu (67).png`,
  collectionsCarriers: `${MVP}/Dizajn bez názvu (62).png`,
  collectionsBabyMonitors: `${MVP}/Dizajn bez názvu (66).png`,
} as const;

/** Gallery images for product detail page (main + thumbnails). Falls back to main image repeated. */
export function getProductGalleryImages(productId: string, mainImage: string): string[] {
  switch (productId) {
    case "uppababy-vista-v3":
      return [...MVP_IMAGES.vistaGallery];
    case "bugaboo-butterfly-2":
      return [MVP_IMAGES.bugabooButterfly, ...MVP_IMAGES.bugabooGallery];
    case "minu-v3":
      return [...MVP_IMAGES.minuGallery];
    case "snoo-smart-sleeper":
      return [MVP_IMAGES.snoo, MVP_IMAGES.snooHero, MVP_IMAGES.snoo];
    case "cradlewise-convertible":
      return [MVP_IMAGES.cradlewise, MVP_IMAGES.cradlewise, MVP_IMAGES.cradlewise];
    default:
      return [mainImage, mainImage, mainImage];
  }
}
