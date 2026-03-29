const WHATSAPP_NUMBER = "6285717561096"

export function generateWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

export const whatsappMessages = {
  default: "Halo JISOI, saya ingin konsultasi tas custom",
  produk: (name: string) =>
    `Halo JISOI, saya tertarik produk ${name}, boleh info harga?`,
  pricing: (qty: string, model: string) =>
    `Halo JISOI, saya butuh quotation untuk ${qty} pcs tas ${model}`,
  event: (qty: string, deadline: string) =>
    `Halo JISOI, saya butuh tas untuk event ${qty} pcs, deadline ${deadline}`,
  custom: "Halo JISOI, saya mau bikin tas custom model sendiri, bisa bantu?",
}
