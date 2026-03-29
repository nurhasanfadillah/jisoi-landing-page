"use client"

import { MessageCircle, Mail, AtSign } from "lucide-react"
import { generateWhatsAppLink, whatsappMessages } from "@/lib/whatsapp"

export function Footer() {
  return (
    <footer className="py-12 bg-[#0F0F1A] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">JISOI</h3>
            <p className="text-sm text-white/50 mb-4">
              Partner manufaktur tas custom untuk bisnis kamu.
              <br />
              PT Redone Berkah Mandiri Utama
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-white mb-3">Kontak</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={generateWhatsAppLink(whatsappMessages.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  0857 1756 1096 (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href="mailto:redoneberkahmandiri@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  redoneberkahmandiri@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Marketplace */}
          <div>
            <h4 className="font-semibold text-white mb-3">Ikuti Kami</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/jisoi.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-[#E94560] transition-colors"
                >
                  <AtSign className="w-4 h-4" />
                  @jisoi.official
                </a>
              </li>
              <li>
                <a
                  href="https://shopee.co.id/jisoi.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-[#E94560] transition-colors"
                >
                  🛒 Shopee — jisoi.official
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/30">
            &copy; 2026 PT Redone Berkah Mandiri Utama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
