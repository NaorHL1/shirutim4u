import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-30 -translate-x-1/2 w-[92%] max-w-3xl">
      <div className="flex items-center justify-around rounded-xl bg-white px-4 py-2 shadow-lg border border-gray-200">
        
        {/* תפריט שמאל (מסכים גדולים) */}
        <nav aria-label="ניווט משני" className="hidden sm:flex items-center gap-2">
          <Link
            href="/blog"
            className="px-3.5 py-1.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 hover:border-gray-400 transition cursor-pointer"
          >
            מדריכים
          </Link>
          <Link
            href="/#faq"
            className="px-3.5 py-1.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 hover:border-gray-400 transition cursor-pointer"
          >
            שאלות
          </Link>
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-b from-zinc-700 via-zinc-900 to-black text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.22)] ring-1 ring-zinc-700/80 hover:from-zinc-600 hover:via-zinc-800 hover:to-zinc-950 hover:shadow-[0_6px_20px_rgba(37,99,235,0.28)] hover:ring-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" aria-hidden="true" />
            <span>צור קשר</span>
          </Link>
        </nav>

        {/* לוגו במרכז - מקושר לדף הבית */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label="א.ל שירותים ניידים - דף הבית">
            <Image
              src="/images/ollogo.png"
              alt="א.ל שירותים ניידים - השכרת שירותים ניידים מפוארים"
              width={120}
              height={56}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>

        {/* תפריט ימין (מסכים גדולים) */}
        <nav aria-label="ניווט ראשי" className="hidden sm:flex items-center gap-2">
          <Link
            href="/services/mobile-toilets"
            className="px-3.5 py-1.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 hover:border-gray-400 transition cursor-pointer"
          >
            שירותים
          </Link>
          <Link
            href="/#whyus"
            className="px-3.5 py-1.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 hover:border-gray-400 transition cursor-pointer"
          >
            למה אנחנו
          </Link>
          <Link
            href="/#gallery"
            className="px-3.5 py-1.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 hover:border-gray-400 transition cursor-pointer"
          >
            גלריה
          </Link>
        </nav>

        {/* --- אזור מובייל בלבד --- */}
        <div className="sm:hidden flex-1 flex items-center justify-between pr-4">
          
          {/* כפתורי שיחה (מוצמדים לימין, קרובים ללוגו) */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+972526920346"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition cursor-pointer"
              aria-label="התקשר עכשיו ל-052-6920346"
            >
              <FaPhoneAlt size={24} />
            </a>

            <a
              href="https://wa.me/972526920346"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition cursor-pointer"
              aria-label="שלח הודעת וואטסאפ"
            >
              <FaWhatsapp size={26} />
            </a>
          </div>

          {/* אזור כפתור תפריט (מוצמד לשמאל הקיצוני) */}
          <div className="relative">
            <button
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 text-gray-800 shadow-sm hover:bg-gray-200 transition cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="פתח תפריט ניווט"
              aria-expanded={isOpen}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* תפריט נפתח */}
            {isOpen && (
              <div
                dir="rtl"
                className="text-center absolute top-14 left-0 w-48 bg-white border border-gray-300 rounded-xl shadow-xl py-3 px-4 space-y-2 z-50"
              >
                <Link
                  href="/#gallery"
                  className="block text-gray-800 text-md font-semibold px-3 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  גלריה
                </Link>
                <Link
                  href="/services/mobile-toilets"
                  className="block text-gray-800 text-md font-semibold px-3 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  שירותים ניידים
                </Link>
                <Link
                  href="/blog"
                  className="block text-gray-800 text-md font-semibold px-3 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  מדריכים ומאמרים
                </Link>
                <Link
                  href="/#faq"
                  className="block text-gray-800 text-md font-semibold px-3 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  שאלות נפוצות
                </Link>
                <Link
                  href="/#whyus"
                  className="block text-gray-800 text-md font-semibold px-3 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  למה אנחנו
                </Link>
                <Link
                  href="/#contact"
                  className="flex items-center justify-center gap-2 text-white bg-gradient-to-b from-zinc-700 via-zinc-900 to-black text-md font-bold px-3 py-2.5 rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.22)] ring-1 ring-zinc-700/80 hover:from-zinc-600 hover:to-zinc-900 transition-all cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" aria-hidden="true" />
                  <span>צור קשר</span>
                </Link>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </header>
  );
}