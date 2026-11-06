import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import SeoContent from "@/components/seo-content";

export default function Home() {
  // הגדרת סכמה (Schema.org @graph) לקידום מקומי, חיפוש AI ותוצאות עשירות בגוגל
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.shirutim4u.com/#organization',
        name: 'א.ל שירותים ניידים',
        alternateName: 'shirutim4u',
        image: [
          'https://www.shirutim4u.com/images/toiletimg2.jpeg',
          'https://www.shirutim4u.com/images/toiletimg1.jpeg',
          'https://www.shirutim4u.com/images/toiletimg_new1.jpg',
        ],
        logo: 'https://www.shirutim4u.com/images/ollogo.png',
        description:
          'השכרת שירותים ניידים מפוארים לאירועים, חתונות בטבע, כנסים והפקות שטח בפריסה ארצית. תאי שירותים מעוצבים ועצמאיים בשטח ללא צורך בתשתיות מים וחשמל, כולל איש שירות צמוד.',
        url: 'https://www.shirutim4u.com',
        telephone: '+972-52-6920346',
        email: 'shirutim4u@gmail.com',
        priceRange: '$$',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            opens: '00:00',
            closes: '23:59',
          },
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+972-52-6920346',
            contactType: 'customer service',
            name: 'ליאב',
            areaServed: 'IL',
            availableLanguage: ['Hebrew'],
          },
          {
            '@type': 'ContactPoint',
            telephone: '+972-52-6525185',
            contactType: 'sales',
            name: 'אושרי',
            areaServed: 'IL',
            availableLanguage: ['Hebrew'],
          },
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IL',
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'אזור המרכז' },
          { '@type': 'AdministrativeArea', name: 'אזור הצפון' },
          { '@type': 'AdministrativeArea', name: 'אזור הדרום' },
          { '@type': 'AdministrativeArea', name: 'ירושלים והסביבה' },
          { '@type': 'AdministrativeArea', name: 'אזור השרון' },
        ],
        sameAs: [
          'https://www.facebook.com/people/%D7%90%D7%9C-%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D-%D7%A0%D7%99%D7%99%D7%93%D7%99%D7%9D/61576869609037/',
          'https://www.instagram.com/shirutim4u',
          'https://www.tiktok.com/@shirutim4u',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'שירותי השכרת שירותים ניידים',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'השכרת שירותים ניידים מפוארים לחתונות ואירועים בטבע',
                description:
                  'תאי שירותים ניידים מרווחים ומעוצבים ברמת מלון 5 כוכבים עם מים זורמים, תאורת לד, מראות גדולות ואיש תחזוקה צמוד.',
                url: 'https://www.shirutim4u.com/#gallery',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'השכרת שירותים ניידים לכל מטרה, הפקות שטח ואתרי בנייה',
                description:
                  'תאי שירותים ניידים עצמאיים לחלוטין ללא צורך בחיבור למים, ביוב או חשמל, כולל הובלה, הצבה ושאיבה.',
                url: 'https://www.shirutim4u.com/services/mobile-toilets',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.shirutim4u.com/#website',
        url: 'https://www.shirutim4u.com',
        name: 'א.ל שירותים ניידים',
        alternateName: ['shirutim4u', 'א.ל השכרת שירותים ניידים מפוארים'],
        inLanguage: 'he-IL',
        publisher: {
          '@id': 'https://www.shirutim4u.com/#organization',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.shirutim4u.com/#faqpage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'לאילו אירועים מתאימה השכרת שירותים ניידים מפוארים?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'השירותים הניידים המפוארים שלנו מתאימים לחתונות בטבע, בר/בת מצווה, כנסים עסקיים, אירועי בוטיק, פסטיבלים והפקות חוץ ברמה הגבוהה ביותר.',
            },
          },
          {
            '@type': 'Question',
            name: 'לאילו אזורים בארץ אתם מגיעים?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'אנו מספקים שירות השכרת שירותים ניידים בפריסה ארצית מלאה: אזור המרכז, השרון, ירושלים והסביבה, אזור הצפון ואזור הדרום.',
            },
          },
          {
            '@type': 'Question',
            name: 'האם צריך חיבור למים או ביוב בשטח האירוע?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'לא. קרונות השירותים שלנו עצמאיים לחלוטין (Off-Grid) ומצוידים במיכלי מים נקיים ומיכלי אגירה אטומים, כך שאינם דורשים חיבור לתשתיות מים או ביוב קבועות.',
            },
          },
          {
            '@type': 'Question',
            name: 'האם נדרש חיבור חשמל בשטח?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'לא נדרש חיבור חיצוני לרשת החשמל – השירותים הניידים פועלים באופן מלא ועצמאי גם בלב היער, בחוף הים או במדבר.',
            },
          },
          {
            '@type': 'Question',
            name: 'כמה תאי שירותים ניידים צריך להזמין לאירוע?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'יחידה מפוארת אחת מתאימה לכ-200 אורחים. אנו מתאימים את כמות התאים והרכב הקרונות למספר המשתתפים המדויק, משך האירוע ואופי הקהל.',
            },
          },
          {
            '@type': 'Question',
            name: 'האם השכרת השירותים הניידים כוללת ניקיון והתקנה?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'בוודאי. השירות כולל הובלה עד למיקום האירוע, הצבה והתקנה מקצועית, איש שירות צמוד לניקיון וחיטוי שוטף לאורך כל האירוע, ופינוי מלא בסיומו.',
            },
          },
        ],
      },
    ],
  };

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