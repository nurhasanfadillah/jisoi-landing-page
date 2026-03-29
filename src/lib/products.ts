export interface Product {
  id: string
  name: string
  image: string
  category: string
  bestSeller?: boolean
  description: string
}

export const products: Product[] = [
  {
    id: "cluta",
    name: "Clutch",
    image: "/products/cluta.png",
    category: "Souvenir",
    bestSeller: true,
    description: "Souvenir elegan, cocok untuk event & wedding",
  },
  {
    id: "axelo",
    name: "Pouch",
    image: "/products/axelo.png",
    category: "Merchandise",
    description: "Budget friendly, serbaguna untuk corporate gift",
  },
  {
    id: "apenta",
    name: "Handbag Premium",
    image: "/products/apenta.png",
    category: "Premium",
    bestSeller: true,
    description: "Best seller, cocok untuk merchandise brand",
  },
  {
    id: "selempang",
    name: "Tas Selempang",
    image: "/products/selempang.png",
    category: "Serbaguna",
    description: "Unisex, practical untuk brand activation",
  },
  {
    id: "aruma",
    name: "Tas Serut",
    image: "/products/aruma.png",
    category: "Goodie Bag",
    description: "Goodie bag favorit, ringan & murah",
  },
  {
    id: "bagpack",
    name: "Backpack",
    image: "/products/bagpack.png",
    category: "Premium",
    description: "Corporate gift & seminar kit premium",
  },
  {
    id: "athae",
    name: "Waist Bag",
    image: "/products/athae.png",
    category: "Trend",
    description: "Compact & stylish, cocok untuk brand streetwear",
  },
  {
    id: "taslaptop",
    name: "Tas Laptop",
    image: "/products/taslaptop.png",
    category: "Functional",
    description: "Proteksi maksimal, desain profesional",
  },
  {
    id: "waistbag",
    name: "Tote Bag",
    image: "/products/waistbag.png",
    category: "Everyday",
    description: "Ramah lingkungan, cocok untuk shopping bag brand",
  },
]
