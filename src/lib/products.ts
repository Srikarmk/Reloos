export type ConditionTier = {
  id: string;
  label: string;
  price: number;
  description: string;
  bestValue?: boolean;
  showHelp?: boolean;
};

export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  colors: ProductColor[];
  conditions: ConditionTier[];
};

const DEFAULT_CONDITIONS: ConditionTier[] = [
  {
    id: "brand-new",
    label: "Brand New",
    price: 999,
    description: "Factory sealed. Full manufacturer warranty.",
  },
  {
    id: "like-new",
    label: "Like New",
    price: 799,
    description:
      "Certified Excellent. Motor tested. Minimal signs of use.",
    bestValue: true,
  },
  {
    id: "good",
    label: "Good Condition",
    price: 649,
    description:
      "Fully functional. Some visible wear. All safety tests passed.",
  },
  {
    id: "fair",
    label: "Fair Condition",
    price: 499,
    description:
      "Noticeable wear. Fully functional. Passes all safety tests.",
    showHelp: true,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "uppababy-vista-v3",
    name: "UPPAbaby VISTA V3",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 1523,
    colors: [
      { name: "Charcoal", hex: "#4b5563" },
      { name: "Blue", hex: "#1e3a5f" },
      { name: "Black", hex: "#171717" },
    ],
    conditions: DEFAULT_CONDITIONS,
  },
  {
    id: "snoo-smart-sleeper",
    name: "SNOO Smart Sleeper",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 892,
    colors: [
      { name: "Gray", hex: "#6b7280" },
      { name: "White", hex: "#f5f5f5" },
    ],
    conditions: DEFAULT_CONDITIONS.map((c) =>
      c.id === "like-new"
        ? { ...c, price: 799, description: "Motor tested. Minimal signs of use. All items inspected by certified technicians." }
        : c
    ),
  },
  {
    id: "nuna-pipa-lite-lx",
    name: "Nuna PIPA Lite LX",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 456,
    colors: [
      { name: "Black", hex: "#171717" },
      { name: "Silver", hex: "#9ca3af" },
    ],
    conditions: [
      { id: "brand-new", label: "Brand New", price: 349, description: "Factory sealed. Full manufacturer warranty." },
      { id: "like-new", label: "Like New", price: 279, description: "Certified Excellent. Minimal signs of use.", bestValue: true },
      { id: "good", label: "Good Condition", price: 229, description: "Fully functional. Some visible wear. All safety tests passed." },
      { id: "fair", label: "Fair Condition", price: 179, description: "Noticeable wear. Fully functional. Passes all safety tests.", showHelp: true },
    ],
  },
  {
    id: "doona-stroller",
    name: "Doona Stroller",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 1204,
    colors: [
      { name: "Black", hex: "#171717" },
      { name: "Gray", hex: "#6b7280" },
    ],
    conditions: [
      { id: "brand-new", label: "Brand New", price: 499, description: "Factory sealed. Full manufacturer warranty." },
      { id: "like-new", label: "Like New", price: 399, description: "Certified Excellent. Minimal signs of use.", bestValue: true },
      { id: "good", label: "Good Condition", price: 349, description: "Fully functional. Some visible wear. All safety tests passed." },
      { id: "fair", label: "Fair Condition", price: 279, description: "Noticeable wear. Fully functional. Passes all safety tests.", showHelp: true },
    ],
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getAllProductIds(): string[] {
  return PRODUCTS.map((p) => p.id);
}
