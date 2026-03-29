"use client"

import { motion } from "framer-motion"
import { MessageCircle, ChevronDown } from "lucide-react"
import { generateWhatsAppLink, whatsappMessages } from "@/lib/whatsapp"
import { events } from "@/lib/analytics"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F0F1A] via-[#1A1A2E] to-[#16213E]">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle,rgba(233,69,96,0.15)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle,rgba(37,211,102,0.1)_0%,transparent_50%)] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Social proof badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          500+ Bisnis Sudah Pakai JISOI
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Tas Custom,{" "}
          <span className="bg-gradient-to-r from-[#E94560] to-[#FF6B6B] bg-clip-text text-transparent">
            Harga Pabrik
          </span>{" "}
          Langsung
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
        >
          Produksi sendiri, MOQ mulai 10 pcs. Cocok untuk event, merchandise
          corporate, dan brand kamu.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={generateWhatsAppLink(whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              events.ctaClick("hero", "Konsultasi Gratis via WhatsApp")
              events.whatsappClick("hero")
            }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/25"
          >
            <MessageCircle className="w-5 h-5" />
            Konsultasi Gratis via WhatsApp
          </a>
          <a
            href="#produk"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/20 transition-all duration-300"
          >
            Lihat Produk
            <ChevronDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on mobile to avoid CTA overlap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-3 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
