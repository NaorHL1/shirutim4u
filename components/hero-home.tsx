'use client'

import Image from 'next/image'
import PageIllustration from '@/components/page-illustration'
import AddContactButton from '@/components/addcontactbutton'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect, useCallback } from 'react'

const headerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const headerItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

const mediaItems = [
  { type: 'video' as const, content: 'placeholder' },
  { type: 'image' as const, src: '/images/toiletimg1.jpeg', alt: 'קרון שירותים ניידים מפוארים להשכרה לאירועים בטבע - א.ל שירותים ניידים' },
  { type: 'image' as const, src: '/images/toiletimg2.jpeg', alt: 'תא שירותים נייד מפואר מבפנים עם כיור מעוצב, מראה ותאורת לד' },
  { type: 'image' as const, src: '/images/toiletimg_new1.jpg', alt: 'השכרת שירותים ניידים מפוארים לחתונה בשטח - מראה חיצוני יוקרתי' },
  { type: 'image' as const, src: '/images/toiletimg_new2.jpg', alt: 'תאי שירותים ניידים מעוצבים ונקיים לאירועי חוץ וכנסים' },
  { type: 'image' as const, src: '/images/toiletimg4.jpeg', alt: 'הצבת קרון שירותים ניידים מפואר בשטח ללא צורך בתשתיות' },
]

const imageItems = mediaItems.filter(item => item.type === 'image')

export default function HeroHome() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const mobileVideoRef = useRef<HTMLVideoElement>(null)
  const desktopVideoRef = useRef<HTMLVideoElement>(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', src: string } | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  const touchStartRef = useRef<number | null>(null)
  const touchEndRef = useRef<number | null>(null)

  const minSwipeDistance = 50

  // Detect desktop vs mobile so we only activate ONE hardware video decoder on iOS
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Pause inline video when offscreen or when Lightbox modal is open to save iOS GPU/RAM
  useEffect(() => {
    const activeVideo = isDesktop ? desktopVideoRef.current : mobileVideoRef.current
    const inactiveVideo = isDesktop ? mobileVideoRef.current : desktopVideoRef.current

    if (inactiveVideo && !inactiveVideo.paused) {
      inactiveVideo.pause()
    }

    if (!activeVideo) return

    if (selectedMedia) {
      activeVideo.pause()
      return
    }

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !selectedMedia) {
            activeVideo.play().catch(() => {})
          } else {
            activeVideo.pause()
          }
        })
      },
      { rootMargin: '300px 0px', threshold: 0 }
    )

    videoObserver.observe(activeVideo)
    return () => videoObserver.disconnect()
  }, [isDesktop, selectedMedia])

  // Horizontal container-only scroll helper (never scrolls window/body on iOS)
  const scrollToSlide = useCallback((idx: number, behavior: ScrollBehavior = 'smooth') => {
    const container = scrollRef.current
    const slide = slideRefs.current[idx]
    if (!container || !slide) return
    const targetLeft = slide.offsetLeft - (container.clientWidth - slide.clientWidth) / 2
    container.scrollTo({ left: targetLeft, behavior })
  }, [])

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndRef.current = null
    touchStartRef.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return
    const distance = touchStartRef.current - touchEndRef.current
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
    if (selectedMedia?.type === 'image' && !isDesktop) {
      const idx = imageItems.findIndex(item => item.src === selectedMedia.src)
      if (idx !== -1) {
        scrollToSlide(idx, 'auto')
      }
    }
  }, [selectedMedia, isDesktop, scrollToSlide])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'))
            if (!isNaN(idx)) setCurrentIndex(idx)
          }
        })
      },
      { root: container, threshold: 0.5 }
    )

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide)
    })

    return () => observer.disconnect()
  }, [])

  const canScrollRight = currentIndex > 0
  const canScrollLeft = currentIndex < imageItems.length - 1

  const scrollLeft = () => {
    const nextIdx = Math.min(currentIndex + 1, imageItems.length - 1)
    scrollToSlide(nextIdx, 'smooth')
  }

  const scrollRight = () => {
    const prevIdx = Math.max(currentIndex - 1, 0)
    scrollToSlide(prevIdx, 'smooth')
  }

  return (
    <>
      <section className="relative bg-white text-center">
        <PageIllustration />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-10 pt-24 sm:pt-32 md:pb-20 md:pt-40">

            <motion.div
              className="pb-8 sm:pb-12 text-center md:pb-16"
              variants={headerContainer}
              initial="hidden"
              animate="show"
            >
              {/* H1 תוקן לשילוב שיווקי + SEO חזק ומותאם בגודל למובייל */}
              <motion.h1
                variants={headerItem}
                className="mb-4 sm:mb-6 text-[28px] sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-[1.22] tracking-tight"
              >
                השכרת שירותים ניידים מפוארים <br className="max-lg:hidden" />
                לאירועים וחתונות בטבע
              </motion.h1>

              <motion.div
                variants={headerItem}
                className="mx-auto max-w-2xl"
              >
                {/* פסקת פתיחה סמנטית */}
                <p className="mb-7 sm:mb-10 text-[15px] sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed px-1">
                  חתונות בטבע, בר/בת מצווה, כנסים והפקות שטח – א.ל שירותים ניידים מביאים אליכם תאי שירותים מפוארים ברמה של מלון 5 כוכבים, עצמאיים לחלוטין בשטח עם איש שירות צמוד בפריסה ארצית.
                </p>

                <motion.div
                  variants={headerItem}
                  className="mx-auto flex justify-center"
                >
                  <AddContactButton />
                </motion.div>
              </motion.div>
            </motion.div>

            <section id="gallery" className="w-full py-10 sm:py-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-10 px-4">
                גלריית תאי שירותים ניידים מפוארים
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
                    <button onClick={scrollRight} aria-label="תמונה קודמת" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg text-gray-900 rounded-full p-2 hover:bg-white transition-all pointer-events-auto cursor-pointer">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  )}
                  {canScrollLeft && (
                    <button onClick={scrollLeft} aria-label="תמונה הבאה" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg text-gray-900 rounded-full p-2 hover:bg-white transition-all pointer-events-auto cursor-pointer">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                  )}
                  <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {imageItems.map((item, idx) => (
                      <div
                        key={idx}
                        data-index={idx}
                        ref={el => { slideRefs.current[idx] = el }}
                        className="flex-shrink-0 w-[90vw] aspect-[3/4] snap-center rounded-3xl overflow-hidden relative shadow-lg bg-gray-200 cursor-pointer"
                        onClick={() => setSelectedMedia({ type: 'image', src: item.src! })}
                      >
                        <Image
                          src={item.src!}
                          alt={item.alt!}
                          fill
                          priority={idx === 0}
                          loading={idx === 0 ? undefined : 'lazy'}
                          sizes="(max-width: 768px) 90vw, 25vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vertical Video Block Underneath (Mounted/played only on mobile) */}
                <div
                  className="w-[85vw] aspect-[9/16] mt-2 rounded-3xl overflow-hidden relative shadow-xl bg-neutral-900 cursor-pointer"
                  style={{ backgroundImage: "url('/images/video-first-frame.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                  onClick={() => setSelectedMedia({ type: 'video', src: '/images/toiletvideo.mov' })}
                >
                  {!isDesktop && (
                    <video
                      ref={mobileVideoRef}
                      src="/images/toiletvideo.mov"
                      preload="auto"
                      aria-label="סרטון הצגת תא שירותים נייד מפואר מבפנים"
                      className="w-full h-full object-cover relative z-0 pointer-events-none"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  )}
                </div>
              </div>

              {/* DESKTOP: Static Layout (Text/Video Top, 4 Photos Bottom) */}
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

                  {/* Left Side: Video (Mounted/played only on desktop) */}
                  <div className="col-span-1">
                    <div
                      className="w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-gray-900/5 relative bg-neutral-900 cursor-pointer group"
                      style={{ backgroundImage: "url('/images/video-first-frame.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                      onClick={() => setSelectedMedia({ type: 'video', src: '/images/toiletvideo.mov' })}
                    >
                      {isDesktop && (
                        <video
                          ref={desktopVideoRef}
                          src="/images/toiletvideo.mov"
                          preload="auto"
                          aria-label="סרטון סיור בתוך קרון שירותים ניידים מפואר"
                          className="w-full h-full object-cover relative z-0 pointer-events-none transition-transform duration-700 group-hover:scale-105"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      )}
                    </div>
                  </div>

                </div>

                {/* Bottom Row: 4 Photos Side-by-Side (Desktop only) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                  {imageItems.slice(0, 4).map((item, idx) => (
                    <div
                      key={idx}
                      className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-gray-900/5 relative bg-gray-50 group cursor-pointer"
                      onClick={() => setSelectedMedia({ type: 'image', src: item.src! })}
                    >
                      <Image
                        src={item.src!}
                        alt={item.alt!}
                        fill
                        loading="lazy"
                        sizes="(max-width: 1024px) 45vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>

              </div>
            </section>

            <section
              id="whyus"
              className="px-4 sm:px-6 py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-inner"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
                למה לבחור בשירותים הניידים שלנו?
              </h2>
              <div className="grid gap-6 sm:gap-10 max-w-5xl mx-auto sm:grid-cols-2">
                {[
                  { title: 'יוקרה ונוחות ללא תחרות', desc: 'שירותים מוארים ומעוצבים – חוויה יוקרתית כמו באולם.' },
                  { title: 'מתאים לכל סוגי האירועים', desc: 'חתונות, בר/בת מצווה, אירועים עסקיים וחגיגות חוץ.' },
                  { title: 'שירות בפריסה ארצית', desc: 'מגיעים לכל אזור בארץ – מצפון ועד דרום.' },
                  { title: 'הובלה, התקנה וניקיון', desc: 'מגיעים בזמן, מתקינים, מנקים – הכל כלול בהשכרה.' },
                  { title: 'יחס אישי וזמינות', desc: 'מענה מהיר וליווי אישי לאורך כל הדרך.' },
                  { title: 'עצמאי לחלוטין בשטח', desc: 'לא נדרשת תשתית ביוב או מים – השירותים פועלים גם בטבע.' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">{item.title}</h3>
                    <p className="text-[15px] sm:text-base text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Fullscreen Media Modal (iOS Memory Safe: no backdrop-blur over video, bounded image sizes) */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 cursor-pointer"
            onClick={() => setSelectedMedia(null)}
          >
            <div
              className="relative inline-block cursor-default outline-none max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <button
                aria-label="סגור תצוגה מוגדלת"
                className="absolute -top-4 -right-4 md:-top-5 md:-right-5 z-[110] bg-white text-gray-900 hover:bg-gray-200 rounded-full p-2 transition-colors cursor-pointer shadow-xl"
                onClick={() => setSelectedMedia(null)}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {selectedMedia.type === 'image' && (
                <>
                  {imageItems.findIndex(item => item.src === selectedMedia.src) > 0 && (
                    <button
                      aria-label="תמונה קודמת"
                      className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 z-[110] bg-black/60 hover:bg-black/85 text-white rounded-full p-2 md:p-3 transition-colors cursor-pointer flex items-center justify-center"
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
                      aria-label="תמונה הבאה"
                      className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 z-[110] bg-black/60 hover:bg-black/85 text-white rounded-full p-2 md:p-3 transition-colors cursor-pointer flex items-center justify-center"
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
                <Image
                  src={selectedMedia.src}
                  alt="תצוגה מוגדלת של תא שירותים נייד מפואר"
                  width={800}
                  height={1066}
                  sizes="(max-width: 768px) 90vw, 720px"
                  className="max-h-[85vh] max-w-[90vw] md:max-w-[80vw] w-auto h-auto object-contain rounded-xl shadow-2xl"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}