"use client"

import { motion } from "framer-motion"
import { Factory, Package, TrendingUp, ShieldCheck } from "lucide-react"

const values = [
  {
    icon: Factory,
    title: "Produksi Sendiri",
    desc: "Bukan makelar, harga pabrik langsung",
  },
  {
    icon: Package,
    title: "MOQ 10 Pcs",
    desc: "Order kecil tetap kita layani",
  },
  {
    icon: TrendingUp,
    title: "30.000+ pcs/Bulan",
    desc: "Kapasitas besar, siap order partai",
  },
  {
    icon: ShieldCheck,
    title: "QC Ketat",
    desc: "Setiap pcs dicek sebelum kirim",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function QuickValue() {
  return (
    <section className="py-20 bg-[#FAFAFA] dark:bg-[#0F0F1A]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={item}
              className="bg-white dark:bg-[#1A1A2E] rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-white/10"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#E94560]/10 flex items-center justify-center">
                <v.icon className="w-6 h-6 text-[#E94560]" />
              </div>
              <h3 className="font-semibold text-[#1A1A2E] dark:text-white mb-1">
                {v.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-white/60">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
