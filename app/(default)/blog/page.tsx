import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "./blog-data";
import Cta from "@/components/cta";

export const metadata: Metadata = {
  title: "מדריכים ומאמרים על השכרת שירותים ניידים מפוארים",
  description:
    "מרכז הידע של א.ל שירותים ניידים: מדריכים מקצועיים על השכרת שירותים ניידים מפוארים לחתונות בטבע, הפקות שטח ללא תשתיות מים וחשמל, חישוב כמות תאים ומחירים.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "מדריכים ומאמרים על השכרת שירותים ניידים | א.ל שירותים ניידים",
    description:
      "כל מה שצריך לדעת לפני שמזמינים שירותים ניידים לאירוע בטבע, חתונה או הפקת שטח.",
    url: "https://www.shirutim4u.com/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
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
            name: "מדריכים ומאמרים",
            item: "https://www.shirutim4u.com/blog",
          },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "מדריכים ומאמרים - א.ל שירותים ניידים",
        url: "https://www.shirutim4u.com/blog",
        description:
          "מדריכים מקצועיים בנושא השכרת שירותים ניידים מפוארים לאירועים, חתונות בטבע ופתרונות סניטציה לשטח.",
      },
    ],
  };

  return (
    <div className="bg-white pt-28 pb-16" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav aria-label="פירורי לחם" className="mb-6 text-sm text-gray-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                דף הבית
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-gray-900">מדריכים ומאמרים</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10 sm:mb-12 text-right max-w-3xl">
          <h1 className="text-[26px] sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-snug">
            מדריכים וטיפים להשכרת שירותים ניידים לאירועים
          </h1>
          <p className="text-[15px] sm:text-lg text-gray-600 leading-relaxed">
            מתכננים חתונה בטבע, אירוע חברה או הפקת שטח? ריכזנו עבורכם את כל הידע המקצועי של צוות <strong>א.ל שירותים ניידים</strong> – מבחירת קרון שירותים מפואר ועד פתרונות לעבודה ללא תשתיות מים וחשמל.
          </p>
        </header>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] w-full bg-gray-100 block overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 right-3 bg-gray-900/85 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </Link>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{post.readingTime}</span>
                    <span>•</span>
                    <span>עודכן: {post.lastUpdated}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition mt-2"
                >
                  <span>קראו את המדריך המלא</span>
                  <span aria-hidden="true">&larr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Cta />
    </div>
  );
}
