"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

const mobileNavLinks = [
  { href: "/#gallery", label: "גלריית תמונות וסרטון", badge: "VIP" },
  { href: "/services/mobile-toilets", label: "שירותים ניידים להשכרה", badge: null },
  { href: "/blog", label: "מדריכים ומאמרים", badge: null },
  { href: "/#whyus", label: "למה לבחור בנו", badge: null },
  { href: "/#faq", label: "שאלות נפוצות", badge: null },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on Escape or resize to desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Subtle backdrop when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/20 sm:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="fixed top-3.5 sm:top-4 left-1/2 z-30 -translate-x-1/2 w-[94%] sm:w-[92%] max-w-3xl">
        <div className="relative flex items-center justify-between rounded-full bg-white/95 sm:bg-white/95 sm:backdrop-blur-md px-4 sm:px-3.5 md:px-5 py-2.5 sm:py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:shadow-[0_10px_35px_rgba(0,0,0,0.07)] border border-gray-200/80 ring-1 ring-black/[0.03]">
          
          {/* תפריט ימין בדסקטופ (מסכים גדולים - RTL) */}
          <nav aria-label="ניווט ראשי" className="hidden sm:flex sm:flex-1 items-center justify-start gap-1 md:gap-1.5">
            <Link
              href="/services/mobile-toilets"
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/90 transition-all duration-200 cursor-pointer"
            >
              שירותים
            </Link>
            <Link
              href="/#gallery"
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/90 transition-all duration-200 cursor-pointer"
            >
              גלריה
            </Link>
            <Link
              href="/#whyus"
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/90 transition-all duration-200 cursor-pointer"
            >
              למה אנחנו
            </Link>
          </nav>

          {/* לוגו - במובייל מוצמד לימין (RTL), בדסקטופ ממורכז בדיוק באמצע */}
          <div className="flex-shrink-0 sm:order-none order-2 sm:mx-2">
            <Link href="/" aria-label="א.ל שירותים ניידים - דף הבית" onClick={() => setIsOpen(false)}>
              <Image
                src="/images/ollogo.png"
                alt="א.ל שירותים ניידים - השכרת שירותים ניידים מפוארים"
                width={120}
                height={56}
                priority
                className="h-12 sm:h-12 md:h-[52px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* תפריט שמאל בדסקטופ (מסכים גדולים - RTL) */}
          <nav aria-label="ניווט משני" className="hidden sm:flex sm:flex-1 items-center justify-end gap-1 md:gap-1.5">
            <Link
              href="/blog"
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/90 transition-all duration-200 cursor-pointer"
            >
              מדריכים
            </Link>
            <Link
              href="/#faq"
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/90 transition-all duration-200 cursor-pointer"
            >
              שאלות
            </Link>
            <Link
              href="/#contact"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-b from-zinc-700 via-zinc-900 to-black text-white text-sm font-bold shadow-[0_4px_12px_rgba(0,0,0,0.2)] ring-1 ring-zinc-800 hover:from-zinc-600 hover:via-zinc-800 hover:to-zinc-950 hover:shadow-[0_6px_18px_rgba(0,0,0,0.28)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" aria-hidden="true" />
              <span>צור קשר</span>
            </Link>
          </nav>

          {/* --- אזור מובייל בלבד --- */}
          <div className="sm:hidden flex items-center gap-2.5 order-1">
            {/* כפתור תפריט אלגנטי בצורת קפסולה כהה */}
            <button
              type="button"
              className="h-11 px-4 rounded-full bg-zinc-900 hover:bg-zinc-800 active:scale-95 text-white flex items-center gap-2 text-sm font-bold shadow-sm transition-all cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "סגור תפריט ניווט" : "פתח תפריט ניווט"}
              aria-expanded={isOpen}
            >
              <svg
                className="h-5 w-5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 7h16M4 12h16M4 17h11" />
                )}
              </svg>
              <span>{isOpen ? "סגור" : "תפריט"}</span>
            </button>

            {/* כפתורי חיוג ו-WhatsApp מוגדלים וברורים */}
            <a
              href="tel:+972526920346"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-800 hover:bg-zinc-200 active:scale-95 transition-all cursor-pointer"
              aria-label="התקשר עכשיו ל-052-6920346"
            >
              <FaPhoneAlt size={18} />
            </a>

            <a
              href="https://wa.me/972526920346"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-emerald-50 text-[#1da851] ring-1 ring-emerald-500/25 hover:bg-emerald-100 active:scale-95 transition-all cursor-pointer"
              aria-label="שלח הודעת וואטסאפ"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>

          {/* תפריט מובייל נפתח - כרטיס רחב, נקי ויוקרתי מתחת לסרגל העליון */}
          {isOpen && (
            <div
              dir="rtl"
              className="sm:hidden absolute top-[calc(100%+10px)] inset-x-0 bg-white rounded-3xl border border-gray-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-4 z-50"
            >
              <nav aria-label="תפריט מובייל" className="flex flex-col divide-y divide-gray-100">
                {mobileNavLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3.5 text-[17px] font-bold text-gray-800 hover:text-gray-950 hover:bg-gray-50 active:bg-gray-100 rounded-xl transition cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center gap-2.5">
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-xs font-extrabold bg-zinc-900 text-white px-2.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Link>
                ))}
              </nav>

              <div className="mt-3.5 pt-3.5 border-t border-gray-100 flex flex-col gap-2.5">
                <Link
                  href="/#contact"
                  className="flex items-center justify-center gap-2.5 text-white bg-gradient-to-b from-zinc-700 via-zinc-900 to-black text-base font-bold py-3.5 px-4 rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.2)] ring-1 ring-zinc-700/80 active:scale-[0.99] transition-all cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" aria-hidden="true" />
                  <span>צור קשר להצעת מחיר</span>
                </Link>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="tel:+972526920346"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-bold transition"
                  >
                    <FaPhoneAlt size={15} />
                    <span>052-6920346</span>
                  </a>
                  <a
                    href="https://wa.me/972526920346"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#1da851] ring-1 ring-emerald-500/20 text-sm font-bold transition"
                  >
                    <FaWhatsapp size={19} />
                    <span>וואטסאפ מהיר</span>
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </header>
    </>
  );
}