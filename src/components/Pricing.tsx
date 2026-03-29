"use client"

import { motion } from "framer-motion"
import { MessageCircle, Check } from "lucide-react"
import { generateWhatsAppLink, whatsappMessages } from "@/lib/whatsapp"
import { events } from "@/lib/analytics"

const packages = [
  {
    name: "Basic",
    desc: "Cocok untuk order kecil / coba-coba",
    price: "Rp11.000",
    unit: "/pcs",
    moq: "Min. 10 pcs",
    features: [
      "1 model tas",
      "Sablon DTF 1 warna",
      "Bahan D300",
      "QC standar",
      "Estimasi 7-10 hari",
    ],
    cta: "Tanya Harga Basic",
    popular: false,
  },
  {
    name: "Standard",
    desc: "Paling populer untuk event & merchandise",
    price: "Rp18.000",
    unit: "/pcs",
    moq: "Min. 25 pcs",
    features: [
      "Pilihan model & bahan",
      "Sablon DTF full color",
      "5 bahan tersedia",
      "QC ketat",
      "Estimasi 10-14 hari",
      "Free desain rapi",
    ],
    cta: "Tanya Harga Standard",
    popular: true,
  },
  {
    name: "Premium",
    desc: "Untuk brand & corporate yang butuh best quality",
    price: "Rp34.000",
    unit: "/pcs",
    moq: "Min. 50 pcs",
    features: [
      "Full custom model",
      "Sablon / Bordir premium",
      "Kulit sintetis / Canvas",
      "QC premium + sample",
      "Estimasi 2-4 minggu",
      "Free desain + sample",
      "Priority production",
    ],
    cta: "Tanya Harga Premium",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="harga" className="py-20 bg-[#FAFAFA] dark:bg-[#0F0F1A]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] dark:text-white mb-4">
            Harga Transparan, Tanpa Hidden Cost
          </h2>
          <p className="text-gray-500 dark:text-white/60 max-w-xl mx-auto">
            Harga pabrik langsung. Pilih paket sesuai kebutuhan, atau minta
            quotation spesifik.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg ${
                pkg.popular
                  ? "bg-white dark:bg-[#1A1A2E] border-[#E94560] shadow-md shadow-[#E94560]/10"
                  : "bg-white dark:bg-[#1A1A2E] border-gray-100 dark:border-white/10"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#E94560] text-white text-xs font-semibold rounded-full">
                  Paling Populer
                </div>
              )}

              <h3 className="text-xl font-bold text-[#1A1A2E] dark:text-white">
                {pkg.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-white/50 mt-1">
                {pkg.desc}
              </p>

              <div className="mt-4 mb-4">
                <span className="text-3xl font-bold text-[#1A1A2E] dark:text-white">
                  {pkg.price}
                </span>
                <span className="text-gray-400">{pkg.unit}</span>
                <p className="text-xs text-gray-400 mt-1">{pkg.moq}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-white/70"
                  >
                    <Check className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={generateWhatsAppLink(
                  whatsappMessages.pricing(pkg.moq.replace(/\D/g, ""), pkg.name)
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  events.ctaClick("pricing", pkg.cta)
                  events.whatsappClick("pricing")
                }}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-[#25D366] hover:bg-[#20BD5A] text-white"
                    : "bg-[#1A1A2E] dark:bg-white/10 hover:bg-[#2A2A4E] text-white"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
