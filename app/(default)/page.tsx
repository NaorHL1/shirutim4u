import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import SeoContent from "@/components/seo-content";

export default function Home() {
  // הגדרת סכמה (Schema.org) לקידום מקומי חזק בגוגל
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'א.ל שירותים ניידים',
    image: 'https://www.shirutim4u.com/images/toiletimg2.jpg',
    description: 'השכרת שירותים ניידים מפוארים לאירועים, חתונות וכנסים בפריסה ארצית.',
    url: 'https://www.shirutim4u.com',
    telephone: '052-6290346',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IL',
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'אזור המרכז'
      },
      {
        '@type': 'State',
        name: 'אזור הדרום'
      },
      {
        '@type': 'State',
        name: 'אזור הצפון'
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <LargeTestimonial />
      <Cta />
      <FeaturesPlanet />
      <SeoContent />
    </>
  );
}