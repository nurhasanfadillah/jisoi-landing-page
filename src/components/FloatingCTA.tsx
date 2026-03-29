"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { generateWhatsAppLink, whatsappMessages } from "@/lib/whatsapp"
import { events } from "@/lib/analytics"

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) setVisible(true)
    }
    // Small delay to avoid flash on load
    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll)
    }, 2000)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <>
          {/* Mobile: Bottom bar */}
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 dark:bg-[#1A1A2E]/95 backdrop-blur-lg border-t border-gray-200 dark:border-white/10 p-3"
          >
            <a
              href={generateWhatsAppLink(whatsappMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                events.ctaClick("floating-mobile", "Chat WhatsApp Sekarang")
                events.whatsappClick("floating")
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white font-semibold rounded-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Chat WhatsApp Sekarang
            </a>
          </motion.div>

          {/* Desktop: Floating button */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-end gap-2"
          >
            {/* Tooltip */}
            <div className="bg-white dark:bg-[#1A1A2E] rounded-xl px-4 py-2 shadow-lg border border-gray-100 dark:border-white/10 text-sm text-[#1A1A2E] dark:text-white">
              Ada yang bisa dibantu? 👋
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setDismissed(true)}
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4 text-gray-600 dark:text-white/60" />
              </button>
              <a
                href={generateWhatsAppLink(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  events.ctaClick("floating-desktop", "WhatsApp")
                  events.whatsappClick("floating")
                }}
                className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
