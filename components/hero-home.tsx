'use client'

import Image from 'next/image'
import PageIllustration from '@/components/page-illustration'
import AddContactButton from '@/components/addcontactbutton'
import { motion, MotionConfig } from 'framer-motion'

const headerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function HeroHome() {

  const mediaItems = [
    { type: 'video', content: 'placeholder' },
    { type: 'image', src: '/images/toiletimg1.jpeg', alt: 'תא שירותים ניידים מפואר להשכרה' },
    { type: 'image', src: '/images/toiletimg2.jpeg', alt: 'תא שירותים ניידים מפואר מבפנים' },
    { type: 'image', src: '/images/toiletimg_new1.jpg', alt: 'תא שירותים ניידים מפואר - מבט נוסף 1' },
    { type: 'image', src: '/images/toiletimg_new2.jpg', alt: 'תא שירותים ניידים מפואר - מבט נוסף 2' },
    { type: 'image', src: '/images/toiletimg4.jpeg', alt: 'תא שירותים ניידים מבט נוסף' },
  ]

  return (
    <MotionConfig reducedMotion="never">
      <section className="relative bg-white text-center">
        <PageIllustration />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">

            <motion.div
              className="pb-12 text-center md:pb-16"
              variants={headerContainer}
              initial="hidden"
              animate="show"
              style={{ transform: 'translateZ(0)' }}
            >
              {/* H1 תוקן לשילוב שיווקי + SEO חזק */}
              <motion.h1
                variants={headerItem}
                style={{ willChange: 'transform, opacity' }}
                className="mb-6 text-5xl font-extrabold text-gray-900 leading-tight md:text-6xl"
              >
                שירותים ניידים מפוארים <br className="max-lg:hidden" />
                להשכרה לאירועים מיוחדים
              </motion.h1>

              <motion.div
                variants={headerItem}
                style={{ willChange: 'transform, opacity' }}
                className="mx-auto max-w-2xl"
              >
                {/* H2 שמשמש כתת-כותרת מחזק את הקשר הסמנטי */}
                <h2 className="mb-10 text-lg text-gray-600 md:text-xl font-normal">
                  חתונות בטבע, בר/בת מצווה וכנסים – אנחנו מביאים אליכם שירותים ניידים ברמה של אולם יוקרתי. שירות מקצועי בפריסה ארצית.
                </h2>

                <motion.div
                  variants={headerItem}
                  style={{ willChange: 'transform, opacity' }}
                  className="mx-auto flex justify-center"
                >
                  <div className="group inline-flex items-center gap-3 rounded-full bg-gray-900 px-6 py-3 text-white font-semibold shadow-lg hover:bg-gray-800 transition-transform duration-200 cursor-pointer">
                    <span className="text-blue-400 transition-transform group-hover:-translate-x-1">
                      &larr;
                    </span>
                    <AddContactButton />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <section id="gallery" className="w-full py-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 px-6">
                גלריית תאי שירותים מפוארים
              </h2>

              {/* MOBILE: Swipeable Gallery with Indicator */}
              <div className="md:hidden flex flex-col items-center">

                {/* Swipe Indicator */}
                <div className="w-full flex justify-center mb-4" dir="rtl">
                  <div className="inline-flex items-center gap-2 px-5 py-1.5 bg-gray-100 border border-gray-200 rounded-full shadow-sm text-gray-800">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    <span className="text-[15px] font-bold">החליקו לראות תמונות נוספות</span>
                  </div>
                </div>

                {/* Horizontal Swipe Photos */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {mediaItems.filter(item => item.type === 'image').map((item, idx) => (
                    <div key={idx} className="flex-shrink-0 w-[95vw] aspect-[3/4] snap-center rounded-3xl overflow-hidden relative shadow-lg bg-gray-200">
                      <Image
                        src={item.src!}
                        alt={item.alt!}
                        fill
                        priority={true}
                        sizes="95vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Vertical Video Block Underneath */}
                <div className="w-[85vw] aspect-[9/16] mt-2 rounded-3xl overflow-hidden relative shadow-xl bg-gray-100">
                  <video src="/images/toiletvideo.mov" className="w-full h-full object-cover relative z-0" autoPlay loop muted playsInline />
                </div>
              </div>

              {/* DESKTOP: Static Layout (Text/Video Top, 3 Photos Bottom) */}
              <div className="hidden md:flex flex-col gap-10 max-w-7xl mx-auto px-6 w-full" dir="rtl">

                {/* Top Row: Text (Right) and Video (Left) aligned to a 3-col grid */}
                <div className="grid grid-cols-3 gap-8 w-full items-center">

                  {/* Right Side: Text (spans 2 columns) */}
                  <div className="col-span-2 flex flex-col items-start text-right pr-4 lg:pr-12">
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                      שקט נפשי לאירוע מושלם
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                      אנו מציעים <strong className="font-semibold text-gray-900">שירותים ניידים מפוארים להשכרה</strong> שישדרגו כל אירוע בטבע. הקרונות שלנו מאובזרים בכיורים מעוצבים, תאורת אווירה נעימה, מראות ענקיות ורמת היגיינה ללא פשרות. אנו מספקים חוויה אסתטית ומפנקת ממש כמו במלון יוקרתי, כדי שאתם והאורחים שלכם תוכלו פשוט לחגוג בראש שקט.
                    </p>
                  </div>

                  {/* Left Side: Video (spans 1 column, aligns perfectly with bottom left photo) */}
                  <div className="col-span-1">
                    <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-gray-900/5 relative bg-gray-50">
                      <video src="/images/toiletvideo.mov" className="w-full h-full object-cover relative z-0" autoPlay loop muted playsInline />
                    </div>
                  </div>

                </div>

                {/* Bottom Row: 4 Photos Side-by-Side (Desktop only) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                  {mediaItems.filter(item => item.type === 'image').slice(0, 4).map((item, idx) => (
                    <div key={idx} className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-gray-900/5 relative bg-gray-50 group">
                      <Image
                        src={item.src!}
                        alt={item.alt!}
                        fill
                        priority={true}
                        sizes="25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>

              </div>
            </section>

            <section
              id="whyus"
              className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-inner"
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                למה לבחור בשירותים הניידים שלנו?
              </h2>
              <motion.div
                className="grid gap-10 max-w-5xl mx-auto sm:grid-cols-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeVariants}
              >
                {[
                  { title: 'יוקרה ונוחות ללא תחרות', desc: 'שירותים מוארים ומעוצבים – חוויה יוקרתית כמו באולם.' },
                  { title: 'מתאים לכל סוגי האירועים', desc: 'חתונות, בר/בת מצווה, אירועים עסקיים וחגיגות חוץ.' },
                  { title: 'שירות בפריסה ארצית', desc: 'מגיעים לכל אזור בארץ – מצפון ועד דרום.' },
                  { title: 'הובלה, התקנה וניקיון', desc: 'מגיעים בזמן, מתקינים, מנקים – הכל כלול בהשכרה.' },
                  { title: 'יחס אישי וזמינות', desc: 'מענה מהיר וליווי אישי לאורך כל הדרך.' },
                  { title: 'עצמאי לחלוטין בשטח', desc: 'לא נדרשת תשתית ביוב או מים – השירותים פועלים גם בטבע.' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="space-y-2"
                    initial="hidden"
                    whileInView="show"
                    variants={fadeVariants}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}