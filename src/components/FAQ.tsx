"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircle } from "lucide-react"
import { generateWhatsAppLink, whatsappMessages } from "@/lib/whatsapp"
import { events } from "@/lib/analytics"

const faqs = [
  {
    q: "Berapa minimum order?",
    a: "Untuk custom logo/teks, minimum 10 pcs dengan harga grosir. Kalau full custom model, mulai dari 50 pcs. Tas polos tanpa logo bisa satuan, tapi harga beda.",
  },
  {
    q: "Berapa harga per pcs?",
    a: "Harga tergantung model dan bahan, mulai dari Rp11.000/pcs untuk tas serut, sampai Rp46.000/pcs untuk backpack premium. Semua harga pabrik langsung — produksi sendiri, bukan makelar.",
  },
  {
    q: "Berapa lama produksi?",
    a: "Estimasi standar 7-14 hari kerja tergantung jumlah dan kompleksitas. Order partai besar (500+ pcs) bisa 2-4 minggu. Kalau deadline ketat, kita bisa diskusikan prioritas.",
  },
  {
    q: "Bisa bikin sample dulu?",
    a: "Bisa! Biaya sample tergantung model, dan bisa dikurangi dari total order. Tujuannya biar bisa lihat kualitas langsung sebelum produksi massal.",
  },
  {
    q: "Bahan apa aja yang tersedia?",
    a: "Kita ada 5 pilihan bahan: D300/Dinir (standar, kuat), Cordura (premium, tahan air ringan), Canvas (natural, cocok branding), Bimo Waterproof (anti air), dan Kulit Sintetis (elegan).",
  },
  {
    q: "Ada garansi?",
    a: "Setiap pcs melewati QC ketat. Kalau ada defect dari produksi, langsung kita ganti. Kualitas konsisten di setiap batch — itu komitmen kita.",
  },
  {
    q: "Bisa kirim ke luar kota?",
    a: "Bisa, kita kirim ke seluruh Indonesia via ekspedisi (JNE, J&T, SiCepat). Ongkir sesuai tujuan, ditanggung pembeli kecuali ada promo khusus.",
  },
  {
    q: "Desain belum siap, bisa dibantu?",
    a: "Nggak masalah. Kasih tau konsep atau referensi, kita bantu rapiin desainnya. Gratis untuk konsultasi awal.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white dark:bg-[#16213E]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] dark:text-white mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-gray-100 dark:border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => {
                  const newIndex = openIndex === i ? null : i
                  setOpenIndex(newIndex)
                  if (newIndex !== null) events.faqExpand(faq.q)
                }}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-[#1A1A2E] dark:text-white pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-sm text-gray-600 dark:text-white/60 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 dark:text-white/50 mb-4">
            Masih ada pertanyaan? Langsung tanya aja.
          </p>
          <a
            href={generateWhatsAppLink(whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              events.ctaClick("faq", "Tanya via WhatsApp")
              events.whatsappClick("faq")
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Tanya via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
