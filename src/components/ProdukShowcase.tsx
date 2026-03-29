"use client"

import { motion } from "framer-motion"
import { MessageCircle, Star } from "lucide-react"
import Image from "next/image"
import { products } from "@/lib/products"
import { generateWhatsAppLink, whatsappMessages } from "@/lib/whatsapp"
import { events } from "@/lib/analytics"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ProdukShowcase() {
  return (
    <section id="produk" className="py-20 bg-white dark:bg-[#16213E]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] dark:text-white mb-4">
            Produk Unggulan Kami
          </h2>
          <p className="text-gray-500 dark:text-white/60 max-w-xl mx-auto">
            24 model tas custom siap produksi. Harga pabrik, kualitas premium.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="group relative bg-[#FAFAFA] dark:bg-[#1A1A2E] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all duration-300"
              onClick={() =>
                events.productView(product.name, product.category)
              }
            >
              {/* Best seller badge */}
              {product.bestSeller && (
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-1 bg-[#E94560] text-white text-xs font-semibold rounded-full">
                  <Star className="w-3 h-3 fill-current" />
                  Best Seller
                </div>
              )}

              {/* Image placeholder */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-[#0F0F1A] dark:to-[#1A1A2E]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <span className="text-xs text-[#E94560] font-medium">
                  {product.category}
                </span>
                <h3 className="font-semibold text-[#1A1A2E] dark:text-white mt-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-white/50 mt-1 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-400 dark:text-white/40">
                    MOQ 10 pcs
                  </span>
                  <a
                    href={generateWhatsAppLink(
                      whatsappMessages.produk(product.name)
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation()
                      events.ctaClick("produk", `Tanya Harga ${product.name}`)
                      events.whatsappClick("produk")
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-full transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Tanya Harga
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
