import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://jisoi.com"),
  title: "JISOI — Tas Custom Harga Pabrik | MOQ 10 Pcs",
  description:
    "Produksi tas custom untuk event, merchandise, dan branding. Harga pabrik langsung, MOQ 10 pcs, kapasitas 30.000+ pcs/bulan. Konsultasi gratis via WhatsApp.",
  openGraph: {
    title: "JISOI — Tas Custom Harga Pabrik | MOQ 10 Pcs",
    description:
      "Produksi tas custom untuk event, merchandise, dan branding. Harga pabrik langsung, MOQ 10 pcs. Konsultasi gratis.",
    url: "https://jisoi.com",
    siteName: "JISOI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JISOI — Tas Custom Harga Pabrik",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JISOI — Tas Custom Harga Pabrik | MOQ 10 Pcs",
    description:
      "Produksi tas custom untuk event, merchandise, dan branding. Harga pabrik langsung, MOQ 10 pcs.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  )
}
