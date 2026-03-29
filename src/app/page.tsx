import { Hero } from "@/components/Hero"
import { QuickValue } from "@/components/QuickValue"
import { ProdukShowcase } from "@/components/ProdukShowcase"
import { SocialProof } from "@/components/SocialProof"
import { ProcessTimeline } from "@/components/ProcessTimeline"
import { Pricing } from "@/components/Pricing"
import { FAQ } from "@/components/FAQ"
import { CTASection } from "@/components/CTASection"
import { FloatingCTA } from "@/components/FloatingCTA"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <QuickValue />
      <ProdukShowcase />
      <SocialProof />
      <ProcessTimeline />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
