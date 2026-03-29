export interface Product {
  id: string
  name: string
  priceFrom: number
  image: string
  category: string
  bestSeller?: boolean
  description: string
}

export const products: Product[] = [
  {
    id: "cluta",
    name: "Clutch",
    priceFrom: 12500,
    image: "/products/cluta.svg",
    category: "Souvenir",
    bestSeller: true,
    description: "Souvenir elegan, cocok untuk event & wedding",
  },
  {
    id: "pouch",
    name: "Pouch / Ransel",
    priceFrom: 11500,
    image: "/products/pouch.svg",
    category: "Merchandise",
    description: "Budget friendly, serbaguna untuk corporate gift",
  },
  {
    id: "handbag",
    name: "Handbag Premium",
    priceFrom: 34000,
    image: "/products/handbag.svg",
    category: "Premium",
    bestSeller: true,
    description: "Best seller, cocok untuk merchandise brand",
  },
  {
    id: "selempang",
    name: "Tas Selempang",
    priceFrom: 18000,
    image: "/products/selempang.svg",
    category: "Serbaguna",
    description: "Unisex, practical untuk brand activation",
  },
  {
    id: "serut",
    name: "Tas Serut",
    priceFrom: 11000,
    image: "/products/serut.svg",
    category: "Goodie Bag",
    description: "Goodie bag favorit, ringan & murah",
  },
  {
    id: "backpack",
    name: "Backpack",
    priceFrom: 32500,
    image: "/products/backpack.svg",
    category: "Premium",
    description: "Corporate gift & seminar kit premium",
  },
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}
