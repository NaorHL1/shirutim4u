'use client'

import Image from 'next/image'
import PageIllustration from '@/components/page-illustration'
import AddContactButton from '@/components/addcontactbutton'
import { motion, MotionConfig, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

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

const mediaItems = [
  { type: 'video' as const, content: 'placeholder' },
  { type: 'image' as const, src: '/images/toiletimg1.jpeg', alt: 'תא שירותים ניידים מפואר להשכרה' },
  { type: 'image' as const, src: '/images/toiletimg2.jpeg', alt: 'תא שירותים ניידים מפואר מבפנים' },
  { type: 'image' as const, src: '/images/toiletimg_new1.jpg', alt: 'תא שירותים ניידים מפואר - מבט נוסף 1' },
  { type: 'image' as const, src: '/images/toiletimg_new2.jpg', alt: 'תא שירותים ניידים מפואר - מבט נוסף 2' },
  { type: 'image' as const, src: '/images/toiletimg4.jpeg', alt: 'תא שירותים ניידים מבט נוסף' },
]

const imageItems = mediaItems.filter(item => item.type === 'image')

export default function HeroHome() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', src: string } | null>(null)

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (selectedMedia?.type === 'image') {
      const idx = imageItems.findIndex(item => item.src === selectedMedia.src)
      if (isLeftSwipe && idx > 0) {
        setSelectedMedia({ type: 'image', src: imageItems[idx - 1].src! })
      } else if (isRightSwipe && idx < imageItems.length - 1) {
        setSelectedMedia({ type: 'image', src: imageItems[idx + 1].src! })
      }
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMedia || selectedMedia.type !== 'image') return
      const idx = imageItems.findIndex(item => item.src === selectedMedia.src)
      
      if (e.key === 'ArrowRight' && idx > 0) {
        setSelectedMedia({ type: 'image', src: imageItems[idx - 1].src! })
      } else if (e.key === 'ArrowLeft' && idx < imageItems.length - 1) {
        setSelectedMedia({ type: 'image', src: imageItems[idx + 1].src! })
      } else if (e.key === 'Escape') {
        setSelectedMedia(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedMedia])

  useEffect(() => {
    if (selectedMedia?.type === 'image') {
      const idx = imageItems.findIndex(item => item.src === selectedMedia.src)
      if (idx !== -1 && slideRefs.current[idx]) {
        slideRefs.current[idx]?.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' })
      }
    }
  }, [selectedMedia])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.getAttribute('data-index'))
          if (!isNaN(idx)) setCurrentIndex(idx)
        }
      })
    }, { root: scrollRef.current, threshold: 0.5 })

    slideRefs.current.forEach(slide => {
      if (slide) observer.observe(slide)
    })

    return () => observer.disconnect()
  }, [])


  const canScrollRight = currentIndex > 0 // Right means go back to previous (start)
  const canScrollLeft = currentIndex < imageItems.length - 1 // Left means go to next

  const scrollLeft = () => {
    const nextIdx = Math.min(currentIndex + 1, imageItems.length - 1)
    slideRefs.current[nextIdx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  const scrollRight = () => {
    const prevIdx = Math.max(currentIndex - 1, 0)
    slideRefs.current[prevIdx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }


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
                <div className="relative w-full">
                  {canScrollRight && (
                    <button onClick={scrollRight} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg text-gray-900 rounded-full p-2 hover:bg-white transition-all pointer-events-auto">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  )}
                  {canScrollLeft && (
                    <button onClick={scrollLeft} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg text-gray-900 rounded-full p-2 hover:bg-white transition-all pointer-events-auto">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                  )}
                  <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {imageItems.map((item, idx) => (
                      <div 
                        key={idx} 
                        data-index={idx}
                        ref={el => { slideRefs.current[idx] = el }}
                        className="flex-shrink-0 w-[95vw] aspect-[3/4] snap-center rounded-3xl overflow-hidden relative shadow-lg bg-gray-200 cursor-pointer"
                        onClick={() => setSelectedMedia({ type: 'image', src: item.src! })}
                      >
                        <Image
                          src={item.src!}
                          alt={item.alt!}
                          fill
                          priority={idx === 0}
                          sizes="95vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vertical Video Block Underneath */}
                <div 
                  className="w-[85vw] aspect-[9/16] mt-2 rounded-3xl overflow-hidden relative shadow-xl bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedMedia({ type: 'video', src: '/images/toiletvideo.mov' })}
                >
                  <video src="/images/toiletvideo.mov" className="w-full h-full object-cover relative z-0 pointer-events-none" autoPlay loop muted playsInline />
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
                    <div 
                      className="w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-gray-900/5 relative bg-gray-50 cursor-pointer group"
                      onClick={() => setSelectedMedia({ type: 'video', src: '/images/toiletvideo.mov' })}
                    >
                      <video src="/images/toiletvideo.mov" className="w-full h-full object-cover relative z-0 pointer-events-none transition-transform duration-700 group-hover:scale-105" autoPlay loop muted playsInline />
                    </div>
                  </div>

                </div>

                {/* Bottom Row: 4 Photos Side-by-Side (Desktop only) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                  {mediaItems.filter(item => item.type === 'image').slice(0, 4).map((item, idx) => (
                    <div 
                      key={idx} 
                      className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-gray-900/5 relative bg-gray-50 group cursor-pointer"
                      onClick={() => setSelectedMedia({ type: 'image', src: item.src! })}
                    >
                      <Image
                        src={item.src!}
                        alt={item.alt!}
                        fill
                        priority={idx === 0}
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

      {/* Fullscreen Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 cursor-pointer backdrop-blur-sm"
            onClick={() => setSelectedMedia(null)}
          >


            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative inline-block cursor-default outline-none max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <button
                className="absolute -top-4 -right-4 md:-top-5 md:-right-5 z-[110] bg-white text-gray-900 hover:bg-gray-200 rounded-full p-2 transition-colors cursor-pointer shadow-xl"
                onClick={() => setSelectedMedia(null)}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {selectedMedia.type === 'image' && (
                <>
                  {imageItems.findIndex(item => item.src === selectedMedia.src) > 0 && (
                    <button
                      className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 z-[110] bg-black/50 hover:bg-black/80 text-white rounded-full p-2 md:p-3 transition-colors cursor-pointer flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        const idx = imageItems.findIndex(item => item.src === selectedMedia.src);
                        setSelectedMedia({ type: 'image', src: imageItems[idx - 1].src! });
                      }}
                    >
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  )}
                  {imageItems.findIndex(item => item.src === selectedMedia.src) < imageItems.length - 1 && (
                    <button
                      className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 z-[110] bg-black/50 hover:bg-black/80 text-white rounded-full p-2 md:p-3 transition-colors cursor-pointer flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        const idx = imageItems.findIndex(item => item.src === selectedMedia.src);
                        setSelectedMedia({ type: 'image', src: imageItems[idx + 1].src! });
                      }}
                    >
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                  )}
                </>
              )}

              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.src}
                  alt="Enlarged view"
                  className="max-h-[85vh] max-w-[90vw] md:max-w-[80vw] object-contain rounded-xl shadow-2xl"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  className="max-h-[85vh] max-w-[90vw] md:max-w-[80vw] object-contain rounded-xl shadow-2xl"
                  autoPlay
                  controls
                  muted
                  playsInline
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  )
}