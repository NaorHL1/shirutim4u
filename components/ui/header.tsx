import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-30 -translate-x-1/2 w-[90%] max-w-2xl">
      <div className="flex items-center justify-around rounded-xl bg-white px-4 py-2 shadow-lg border border-gray-200">
        {/* תפריט שמאל */}
        <nav className="hidden sm:flex gap-2">
          <Link
            href="#gallery"
            className="px-4 py-1.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 transition"
          >
            שאלות
          </Link>
          <Link
            href="#faq"
            className="px-4 py-1.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 transition"
          >
            צור קשר
          </Link>
        </nav>

        {/* לוגו במרכז */}
        <div className="flex-shrink-0">
          <img
            src="/images/ollogo.png"
            alt="Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* תפריט ימין */}
        <nav className="hidden sm:flex gap-2">
          <Link
            href="#whyus"
            className="px-4 py-1.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 transition"
          >
            למה אנחנו
          </Link>
          <Link
            href="#contact"
            className="px-4 py-1.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 transition"
          >
            גלריה
          </Link>
        </nav>

        {/* כפתורי מובייל */}
        <div className="sm:hidden ml-auto flex items-center space-x-3 relative">
          {/* כפתור טלפון */}
          <a
            href="tel:+972526525185"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
            aria-label="התקשר עכשיו"
          >
            <FaPhoneAlt size={24} />
          </a>

          {/* כפתור וואטסאפ */}
          <a
            href="https://wa.me/972526525185"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
            aria-label="שלח הודעת וואטסאפ"
          >
            <FaWhatsapp size={26} />
          </a>

          {/* כפתור תפריט וה- dropdown - מופרד ב"קופסה" כדי לא להשפיע על הפלקס */}
          <div className="relative">
            {/* כפתור המבורגר */}
            <button
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 text-gray-800 shadow-sm hover:bg-gray-200 transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="פתח תפריט"
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
                className="text-center absolute top-14 right-0 w-40 bg-white border border-gray-300 rounded-xl shadow-xl py-3 px-4 space-y-2 z-50"
              >
                <Link
                  href="#gallery"
                  className="block text-gray-800 text-md font-semibold px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                  onClick={() => setIsOpen(false)}
                >
                  גלריה
                </Link>
                <Link
                  href="#faq"
                  className="block text-gray-800 text-md font-semibold px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                  onClick={() => setIsOpen(false)}
                >
                  שאלות
                </Link>
                <Link
                  href="#whyus"
                  className="block text-gray-800 text-md font-semibold px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                  onClick={() => setIsOpen(false)}
                >
                  למה אנחנו
                </Link>
                <Link
                  href="#contact"
                  className="block text-gray-800 text-md font-semibold px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                  onClick={() => setIsOpen(false)}
                >
                  צור קשר
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
