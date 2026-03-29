"use client"

import { motion } from "framer-motion"
import { MessageCircle, Clock } from "lucide-react"
import { generateWhatsAppLink, whatsappMessages } from "@/lib/whatsapp"
import { events } from "@/lib/analytics"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F0F1A] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E94560]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Siap Bikin Tas Custom{" "}
            <span className="bg-gradient-to-r from-[#E94560] to-[#FF6B6B] bg-clip-text text-transparent">
              untuk Bisnis Kamu?
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-xl mx-auto mb-8">
            Konsultasi gratis, tanpa komitmen. Kirim brief, kita kasih
            quotation dalam 24 jam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={generateWhatsAppLink(whatsappMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                events.ctaClick("final-cta", "Konsultasi Gratis Sekarang")
                events.whatsappClick("final-cta")
              }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/25"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi Gratis Sekarang
            </a>
            <a
              href={generateWhatsAppLink(whatsappMessages.custom)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                events.ctaClick("final-cta", "Minta Quotation")
                events.whatsappClick("final-cta")
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/20 transition-all"
            >
              Minta Quotation
            </a>
          </div>

          {/* Urgency */}
          <div className="flex items-center justify-center gap-2 mt-6 text-white/40 text-sm">
            <Clock className="w-4 h-4" />
            <span>Slot produksi terbatas setiap bulan</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
