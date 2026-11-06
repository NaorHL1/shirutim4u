import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "../blog-data";
import Cta from "@/components/cta";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | א.ל שירותים ניידים`,
      description: post.description,
      url: `https://www.shirutim4u.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.lastUpdated,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const pillarPost = post.pillarSlug ? getBlogPostBySlug(post.pillarSlug) : undefined;
  const relatedPosts = post.relatedSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://www.shirutim4u.com/blog/${post.slug}`,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: `https://www.shirutim4u.com${post.image}`,
        datePublished: post.date,
        dateModified: post.lastUpdated,
        inLanguage: "he-IL",
        author: {
          "@type": "Organization",
          name: post.author,
          url: "https://www.shirutim4u.com",
        },
        publisher: {
          "@type": "Organization",
          name: "א.ל שירותים ניידים",
          logo: {
            "@type": "ImageObject",
            url: "https://www.shirutim4u.com/images/ollogo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.shirutim4u.com/blog/${post.slug}`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-white pt-28 pb-16" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav aria-label="פירורי לחם" className="mb-6 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                דף הבית
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition">
                מדריכים ומאמרים
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-gray-900 truncate max-w-xs sm:max-w-md">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-blue-50 text-blue-700 font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span>מאת: <strong className="text-gray-800">{post.author}</strong></span>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <time dateTime={post.lastUpdated}>עודכן לאחרונה: {post.lastUpdated}</time>
          </div>

          <h1 className="text-[30px] sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-snug">
            {post.title}
          </h1>

          <p className="text-[15px] sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
            {post.description}
          </p>

          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        </header>

        {/* Pillar Cluster Backlink Banner (if cluster article) */}
        {pillarPost && (
          <div className="mb-8 p-4 rounded-2xl bg-blue-50 border border-blue-200 text-sm text-blue-900 flex items-center justify-between gap-4">
            <span>
              מאמר זה הוא חלק מנושא הליבה:{" "}
              <Link href={`/blog/${pillarPost.slug}`} className="font-bold underline hover:text-blue-700">
                {pillarPost.title}
              </Link>
            </span>
          </div>
        )}

        {/* Table of Contents */}
        <nav aria-label="תוכן עניינים" className="mb-10 sm:mb-12 p-5 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3">תוכן עניינים במדריך זה:</h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-600 font-medium text-[14px] sm:text-[15px]">
            {post.sections.map((sec) => (
              <li key={sec.id}>
                <a href={`#${sec.id}`} className="hover:underline">
                  {sec.heading}
                </a>
              </li>
            ))}
            <li>
              <a href="#article-faq" className="hover:underline">
                שאלות נפוצות בנושא {post.primaryKeyword}
              </a>
            </li>
          </ol>
        </nav>

        {/* Main Sections */}
        <div className="space-y-10 sm:space-y-12 text-gray-700 leading-relaxed text-[15px] sm:text-base md:text-lg">
          {post.sections.map((sec) => (
            <section key={sec.id} id={sec.id} className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3.5 sm:mb-4 leading-snug">
                {sec.heading}
              </h2>
              {sec.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="mb-4">
                  {paragraph}
                </p>
              ))}

              {sec.bullets && (
                <ul className="space-y-2.5 my-5 bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-100">
                  {sec.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-[14px] sm:text-[16px]">
                      <span className="text-blue-600 font-bold mt-0.5">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.table && (
                <div className="my-6 md:rounded-2xl md:border md:border-gray-200 md:overflow-hidden">
                  <table className="w-full text-right border-collapse text-[14px] sm:text-sm md:text-base">
                    <thead className="hidden md:table-header-group">
                      <tr className="bg-gray-100 border-b border-gray-200 text-gray-900">
                        {sec.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="py-3 px-4 font-bold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="block md:table-row-group space-y-3 md:space-y-0 md:divide-y md:divide-gray-200">
                      {sec.table.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className="block md:table-row rounded-2xl border border-gray-200 md:border-0 p-4 md:p-0 bg-gray-50/70 md:bg-white"
                        >
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`block md:table-cell ${
                                cIdx === 0
                                  ? "font-extrabold text-gray-900 text-[15px] md:text-base pb-2 mb-2 border-b border-gray-200/80 md:border-0 md:py-3 md:px-4 md:mb-0"
                                  : "py-1 md:py-3 md:px-4 text-gray-700"
                              }`}
                            >
                              {cIdx > 0 && sec.table?.headers[cIdx] && (
                                <span className="md:hidden font-bold text-gray-900 ml-1.5">
                                  {sec.table.headers[cIdx]}:
                                </span>
                              )}
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* E-E-A-T Verified Customer Testimonial Block */}
        <aside className="my-12 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-bold mb-2">
            <span>⭐️⭐️⭐️⭐️⭐️</span>
            <span>מהשטח: חוות דעת מאומתת של לקוח</span>
          </div>
          <blockquote className="text-lg md:text-xl italic leading-relaxed mb-4">
            &ldquo;{post.eeatQuote.text}&rdquo;
          </blockquote>
          <div className="text-sm text-gray-300">
            <strong>{post.eeatQuote.author}</strong> — {post.eeatQuote.role}
          </div>
        </aside>

        {/* Article FAQ Section */}
        <section id="article-faq" className="my-12 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            שאלות נפוצות בנושא {post.primaryKeyword}
          </h2>
          <div className="space-y-4">
            {post.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Cluster / Pillar Articles */}
        {relatedPosts.length > 0 && (
          <section className="my-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">מדריכים נוספים שיעניינו אתכם:</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="block p-5 rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-md transition"
                >
                  <span className="text-xs font-semibold text-blue-600 block mb-1">
                    {rel.category}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-1">{rel.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{rel.excerpt}</p>
                </Link>
              ))}
              <Link
                href="/services/mobile-toilets"
                className="block p-5 rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-md transition bg-gray-50"
              >
                <span className="text-xs font-semibold text-emerald-700 block mb-1">
                  שירותי החברה
                </span>
                <h3 className="font-bold text-gray-900 mb-1">
                  השכרת שירותים ניידים לכל מטרה – מפרט שירותים מלא
                </h3>
                <p className="text-sm text-gray-600">
                  הכירו את צי הקרונות המפוארים ותאי השירותים הניידים של א.ל שירותים ניידים.
                </p>
              </Link>
            </div>
          </section>
        )}
      </article>

      <Cta />
    </div>
  );
}
