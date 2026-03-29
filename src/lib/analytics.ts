declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params)
  }
}

export const events = {
  ctaClick: (location: string, text: string) =>
    trackEvent("cta_click", { cta_location: location, cta_text: text }),

  whatsappClick: (source: string) =>
    trackEvent("whatsapp_click", { source_section: source }),

  productView: (name: string, category: string) =>
    trackEvent("product_view", { product_name: name, product_category: category }),

  faqExpand: (question: string) =>
    trackEvent("faq_expand", { question }),

  scrollDepth: (percent: number) =>
    trackEvent("scroll_depth", { percent_scrolled: percent }),
}
