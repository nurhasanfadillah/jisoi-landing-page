"use client"

import { motion } from "framer-motion"
import { MessageCircle, PenTool, Factory, Truck } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "Konsultasi",
    desc: "Diskusi kebutuhan, pilih model & bahan",
    time: "Hari 1",
  },
  {
    icon: PenTool,
    title: "Desain",
    desc: "Kami bantu rapiin desain, konfirmasi sample",
    time: "Hari 2-3",
  },
  {
    icon: Factory,
    title: "Produksi",
    desc: "QC ketat di setiap pcs, update progres",
    time: "Hari 4-12",
  },
  {
    icon: Truck,
    title: "Kirim",
    desc: "Packaging aman, kirim ke seluruh Indonesia",
    time: "Hari 13-14",
  },
]

export function ProcessTimeline() {
  return (
    <section className="py-20 bg-white dark:bg-[#16213E]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] dark:text-white mb-4">
            Cara Order — Mudah & Transparan
          </h2>
          <p className="text-gray-500 dark:text-white/60">
            4 langkah dari konsultasi sampai barang sampai
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-white/10 -translate-x-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div className="z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[#E94560] flex items-center justify-center shadow-lg shadow-[#E94560]/25">
                <step.icon className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <div
                className={`flex-1 ${
                  i % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                <span className="inline-block px-3 py-1 text-xs font-medium bg-[#E94560]/10 text-[#E94560] rounded-full mb-2">
                  {step.time}
                </span>
                <h3 className="text-lg font-semibold text-[#1A1A2E] dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-white/60 mt-1">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
