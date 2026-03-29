"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rina K.",
    role: "Event Organizer",
    text: "Order 500 goodie bag untuk event perusahaan, deadline 2 minggu. JISOI selesai tepat waktu dan kualitasnya konsisten semua. Recommended!",
    rating: 5,
  },
  {
    name: "Ahmad F.",
    role: "Brand Owner",
    text: "Awalnya coba 50 pcs dulu buat brand clothing gue. Hasilnya bikin kaget — kualitas pabrik beneran. Sekarang udah repeat order ke-4.",
    rating: 5,
  },
  {
    name: "Dewi S.",
    role: "Procurement Manager",
    text: "Butuh vendor tas untuk merchandise 3 divisi. JISOI kasih quotation dalam sehari, harga transparan, dan QC-nya ketat. Jadi vendor tetap kita.",
    rating: 5,
  },
]

const stats = [
  { value: "2.000+", label: "Order Selesai" },
  { value: "500+", label: "Bisnis Terlayani" },
  { value: "40%+", label: "Repeat Order" },
  { value: "4.9/5", label: "Rating" },
]

export function SocialProof() {
  return (
    <section className="py-20 bg-[#FAFAFA] dark:bg-[#0F0F1A]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#E94560]">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-white/60 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] dark:text-white mb-4">
            Kata Mereka yang Sudah Pakai
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-[#1A1A2E] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-white/10"
            >
              <Quote className="w-8 h-8 text-[#E94560]/20 mb-4" />
              <p className="text-gray-600 dark:text-white/70 text-sm leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-[#1A1A2E] dark:text-white text-sm">
                  {t.name}
                </p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
