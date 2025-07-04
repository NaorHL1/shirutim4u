'use client'

import Image from 'next/image'
import PageIllustration from '@/components/page-illustration'
import AddContactButton from '@/components/addcontactbutton'
import { motion, MotionConfig } from 'framer-motion'

// Container שמבצע Stagger קל בין הילדים
const headerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // הפרדה קטנה בין כל child
    },
  },
}

// פריטי האנימציה של הכותרת
const headerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

// שאר האנימציות (לגלריה ולמידע)
const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0 },
}

export default function HeroHome() {
  return (
    <MotionConfig reducedMotion="never">
      <section className="relative bg-white text-center">
        <PageIllustration />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">

            {/* רק הקטע הזה של הכותרת השתנה */}
            <motion.div
              className="pb-12 text-center md:pb-16"
              variants={headerContainer}
              initial="hidden"
              animate="show"
              style={{ transform: 'translateZ(0)' }} // דרבון GPU compositing
            >
              <motion.h1
                variants={headerItem}
                style={{ willChange: 'transform, opacity' }}
                className="mb-6 text-5xl font-extrabold text-gray-900 leading-tight md:text-6xl"
              >
                הפתרון האלגנטי <br className="max-lg:hidden" />
                הנוח והנקי לאירועים מרגשים
              </motion.h1>

              <motion.div
                variants={headerItem}
                style={{ willChange: 'transform, opacity' }}
                className="mx-auto max-w-2xl"
              >
                <p className="mb-10 text-lg text-gray-600 md:text-xl" dir="rtl">
                  חתונות, בר/בת מצווה, כנסים ואירועים פרטיים – אנחנו מביאים את
                  השירותים ברמה של אולם יוקרתי לכל מקום. שירות מקצועי, איכות ללא
                  פשרות, ואחריות מלאה – עם א.ל שירותים ניידים מפוארים.
                </p>

                <motion.div
                  variants={headerItem}
                  style={{ willChange: 'transform, opacity' }}
                  className="mx-auto flex justify-center"
                >
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="group inline-flex items-center gap-3 rounded-full bg-gray-900 px-6 py-3 text-white font-semibold shadow-lg hover:bg-gray-800 transition-transform duration-200"
                  >
                    <span className="text-blue-400 transition-transform group-hover:-translate-x-1">
                      &larr;
                    </span>
                    <AddContactButton />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* כל שאר הקוד – ללא שינוי */}
            <section id="gallery" className="px-6 py-16">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
                גלריה
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {['toiletimg1.jpg','toiletimg2.jpg','toiletimg1.jpg'].map((img, i) => (
                  <motion.div
                    key={i}
                    className="h-115 w-full rounded-2xl bg-gray-200 shadow-inner overflow-hidden relative"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeVariants}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                  >
                    <Image
                      src={`/images/${img}`}
                      alt="luxury toilet"
                      fill
                      priority={i === 0}
                      className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105 group-hover:opacity-95"
                    />
                  </motion.div>
                ))}
              </div>
            </section>

            <section
              id="whyus"
              className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-inner"
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                ?למה לבחור בנו
              </h3>
              <motion.div
                dir="rtl"
                className="grid gap-10 max-w-5xl mx-auto sm:grid-cols-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeVariants}
              >
                {[
                  { title: 'יוקרה ונוחות ללא תחרות', desc: 'שירותים מוארים ומעוצבים – חוויה יוקרתית כמו באולם.' },
                  { title: 'מתאים לכל סוגי האירועים',    desc: 'חתונות, בר/בת מצווה, אירועים עסקיים וחגיגות חוץ.' },
                  { title: 'שירות בפריסה ארצית',         desc: 'מגיעים לכל אזור בארץ – מצפון ועד דרום.' },
                  { title: 'הובלה, התקנה וניקיון',         desc: 'מגיעים בזמן, מתקינים, מנקים – הכל כלול.' },
                  { title: 'יחס אישי וזמינות',             desc: 'מענה מהיר וליווי אישי לאורך כל הדרך.' },
                  { title: 'עצמאי לחלוטין',                desc: 'לא נדרש בהוספת תשתית – השירותים פועלים גם במדבר.' }
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
                    <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
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
