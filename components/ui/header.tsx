import { useState } from "react";
import Link from "next/link";

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

        {/* כפתור מובייל */}
        <div className="sm:hidden ml-auto relative">
          <button
            className="px-3 py-1 rounded-lg bg-gray-100 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-200 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            תפריט
          </button>

          {/* תפריט נפתח במובייל */}
          {isOpen && (
            <div className="text-right absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-2xl py-3 px-4 space-y-2 z-50">
              <Link
                href="#gallery"
                className="block text-gray-800 text-sm font-semibold px-2 py-2 rounded-md hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
              >
                גלריה
              </Link>
              <Link
                href="#faq"
                className="block text-gray-800 text-sm font-semibold px-2 py-2 rounded-md hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
              >
                שאלות
              </Link>
              <Link
                href="#whyus"
                className="block text-gray-800 text-sm font-semibold px-2 py-2 rounded-md hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
              >
                למה אנחנו
              </Link>
              <Link
                href="#contact"
                className="block text-gray-800 text-sm font-semibold px-2 py-2 rounded-md hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
              >
                צור קשר
              </Link>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
