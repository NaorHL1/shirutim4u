import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Cta from "@/components/cta";

export const metadata: Metadata = {
  title: "השכרת שירותים ניידים | תאי שירותים להשכרה ושירותים לאירועים",
  description:
    "מחפשים להשכיר שירותים ניידים? אנו מציעים שירותים ניידים להשכרה, שירותים מפוארים להשכרה ותאי שירותים להשכרה לאירועים, הפקות שטח ואתרי בנייה בפריסה ארצית.",
  keywords: [
    "השכרת שירותים ניידים",
    "שירותים ניידים להשכרה",
    "שירותים מפוארים להשכרה",
    "שירותים לאירועים",
    "תאי שירותים להשכרה",
    "להשכיר שירותים ניידים",
  ],
  alternates: {
    canonical: "/services/mobile-toilets",
  },
  openGraph: {
    title: "השכרת שירותים ניידים ותאי שירותים להשכרה | א.ל שירותים ניידים",
    description:
      "פתרונות סניטציה ניידים מתקדמים: שירותים מפוארים להשכרה, שירותים לאירועים ותאי שירותים להשכרה לשטח ולאתרי בנייה בפריסה ארצית.",
    url: "https://www.shirutim4u.com/services/mobile-toilets",
    images: [
      {
        url: "/images/toiletimg1.jpeg",
        width: 1200,
        height: 630,
        alt: "השכרת שירותים ניידים ותאי שירותים להשכרה - א.ל שירותים ניידים",
      },
    ],
  },
};

export default function MobileToiletsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "דף הבית",
            item: "https://www.shirutim4u.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "השכרת שירותים ניידים ותאי שירותים להשכרה",
            item: "https://www.shirutim4u.com/services/mobile-toilets",
          },
        ],
      },
      {
        "@type": "Service",
        name: "השכרת שירותים ניידים, תאי שירותים להשכרה ושירותים לאירועים",
        provider: {
          "@type": "LocalBusiness",
          name: "א.ל שירותים ניידים",
          telephone: "+972-52-6920346",
          url: "https://www.shirutim4u.com",
        },
        areaServed: "IL",
        description:
          "שירותים ניידים להשכרה, שירותים מפוארים להשכרה ותאי שירותים להשכרה לאירועים בטבע, הפקות חוץ, כנסים ואתרי בנייה בפריסה ארצית מלאה, כולל הובלה, הצבה, שאיבה ותחזוקה שוטפת.",
      },
    ],
  };

  return (
    <div className="bg-white pt-28 pb-16" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav aria-label="פירורי לחם" className="mb-6 text-sm text-gray-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                דף הבית
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-gray-900">השכרת שירותים ניידים לכל מטרה</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <header className="mb-10 sm:mb-12 text-right">
          <h1 className="text-[26px] sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-snug">
            השכרת שירותים ניידים ותאי שירותים להשכרה לכל מטרה
          </h1>
          <p className="text-[15px] sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
            א.ל שירותים ניידים מספקת פתרונות תברואה וסניטציה ניידים מתקדמים בפריסה ארצית. אם אתם מעוניינים <strong>להשכיר שירותים ניידים</strong>, אנו מתאימים את הפתרון המדויק עבורכם – החל מ<Link href="/blog/luxury-portable-toilets" className="text-blue-600 font-semibold hover:underline">שירותים מפוארים להשכרה (שירותים לאירועים וחתונות)</Link> ועד <strong>תאי שירותים להשכרה</strong> עמידים להפקות שטח ואתרי בנייה.
          </p>
        </header>

        {/* Featured Visual + Core Intro */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center mb-12 sm:mb-16 bg-gray-50 p-5 sm:p-6 md:p-8 rounded-3xl border border-gray-100">
          <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] sm:text-base">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
              שירותים ניידים להשכרה – פתרון אוטונומי ללא צורך בתשתיות
            </h2>
            <p>
              <strong>שירותים ניידים להשכרה</strong> מציעים פתרון סניטרי איכותי, נגיש ונוח עבור מגוון רחב של שימושים: <strong>שירותים לאירועים</strong> וחתונות בטבע, פסטיבלים, אירועי ספורט, מחנות שטח ואתרי בנייה או תשתית.
            </p>
            <p>
              המפרט של השירותים הניידים שאנו מספקים כולל מבנים מבודדים ועמידים בפני תנאי שטח ופגעי מזג האוויר. כל יחידה מצוידת במיכל מים נקיים ומיכל אגירה אטום, המאפשרים שימוש רציף, היגייני ונוח לאורך זמן ללא כל צורך בחיבור לתשתיות ביוב או מים מקומיות.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/toiletimg1.jpeg"
              alt="השכרת שירותים ניידים לאירועים ופרויקטים בשטח - א.ל שירותים ניידים"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Service Categories */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 sm:mb-8 leading-snug">
            התאמת סוג השירותים הניידים לצורך שלכם
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                1. שירותים ניידים מפוארים (VIP) לאירועים
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                מיועדים לחתונות בטבע, אירועי בוטיק, כנסים ואירועי חברה. כוללים עיצוב מרווח ויוקרתי, כיורים מעוצבים עם מים זורמים, מראות גדולות, תאורת LED נעימה, סבונים ומפיצי ריח יוקרתיים ואיש שירות צמוד לאורך האירוע.
              </p>
              <Link href="/blog/luxury-portable-toilets" className="text-blue-600 font-semibold text-sm hover:underline">
                קראו עוד על שירותים ניידים מפוארים &larr;
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. תאי שירותים ניידים להפקות ואירועי המונים
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                תאים מרווחים ואסתטיים המשתלבים בקלות בכל תנאי שטח. המבנה החכם מאפשר שינוע יעיל, הצבה מהירה בנקודות מפתח במתחם האירוע ופינוי חלק ומהיר מיד עם סיום ההפקה.
              </p>
              <Link href="/blog/portable-toilets-rent" className="text-blue-600 font-semibold text-sm hover:underline">
                למדריך השכרת שירותים ניידים &larr;
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3. שירותים כימיים לאתרי בנייה ותשתיות
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                השכרה לטווח קצר או ארוך עבור קבלנים, אתרי בנייה ופרויקטים הנדסיים. כולל סבבי שאיבה קבועים במשאית ביובית, שטיפה בלחץ מים, חיטוי יסודי ומילוי חומרים כימיים מנטרלי ריחות, נייר טואלט וסבון.
              </p>
              <Link href="/#contact" className="text-blue-600 font-semibold text-sm hover:underline">
                קבלו הצעת מחיר לפרויקט &larr;
              </Link>
            </div>
          </div>
        </section>

        {/* Maintenance & Hygiene Process */}
        <section className="mb-16 bg-blue-50/50 p-6 md:p-10 rounded-3xl border border-blue-100">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            תהליך ניקוי, חיטוי ותחזוקה חסר פשרות
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            תהליך הניקוי והתחזוקה שלנו ב<strong>א.ל שירותים ניידים</strong> הוא קפדני במיוחד. אנו משתמשים בחומרים סניטריים וכימיים מתקדמים המסייעים בפירוק פסולת וניטרול ריחות באופן מיידי:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-[15px] text-gray-700">
            <div className="bg-white p-4 rounded-xl border border-gray-100">
              <strong className="text-gray-900 block mb-1">✓ חיטוי מלא לפני כל אספקה</strong>
              כל קרון ותא עוברים שטיפה בקיטור וחיטוי משטחים מלא לפני יציאתם ללקוח.
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100">
              <strong className="text-gray-900 block mb-1">✓ איבזור היגייני מלא</strong>
              אספקה שוטפת של נייר טואלט דו-שכבתי, סבון ידיים אנטי-בקטריאלי, מגבות נייר ומבשמים.
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100">
              <strong className="text-gray-900 block mb-1">✓ שירותי שאיבה וביובית מסודרים</strong>
              בהשכרות ממושכות אנו מבצעים שאיבה מסודרת, שטיפת מיכלים ורענון חומרים כימיים בתיאום מלא.
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100">
              <strong className="text-gray-900 block mb-1">✓ זמינות מלאה בפריסה ארצית</strong>
              צוותי השירות שלנו זמינים 24/7 לקריאות שירות, הובלה והצבה במרכז, בצפון, בדרום ובירושלים.
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            מדריכים ומידע נוסף בבחירת שירותים ניידים
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/blog/offgrid-portable-toilets"
              className="block p-5 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition"
            >
              <h3 className="font-bold text-gray-900 mb-1">
                שירותים ניידים לאירועים ללא תשתית מים – איך זה עובד?
              </h3>
              <p className="text-sm text-gray-600">
                הסבר טכני מקיף על מערכות המים, האגירה והחשמל בקרונות שירותים עצמאיים בשטח.
              </p>
            </Link>
            <Link
              href="/blog/luxury-toilets-cost-value"
              className="block p-5 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition"
            >
              <h3 className="font-bold text-gray-900 mb-1">
                השכרת שירותים ניידים מפוארים – מה משפיע על המחיר?
              </h3>
              <p className="text-sm text-gray-600">
                כל השיקולים בתמחור השכרת שירותים ניידים ואיך לבחור את החבילה המשתלמת ביותר לאירוע.
              </p>
            </Link>
          </div>
        </section>
      </div>

      <Cta />
    </div>
  );
}