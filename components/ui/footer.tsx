import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";
import LegalModal, { LegalType } from "./LegalModals";

export default function Footer({ border = false }: { border?: boolean }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<LegalType>("terms");

  const open = (type: LegalType) => {
    setModalType(type);
    setModalOpen(true);
  };
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 text-sm" dir="rtl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-8 sm:grid-cols-12 md:py-8 ${border
            ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-350),transparent)1]"
            : ""
            }`}
        >
          {/* 1st block - Logo + Copyright */}
          <div className="sm:col-span-12 lg:col-span-4 space-y-3 text-right">
            <div>
              <img
                src="/images/ollogo.png"
                alt="Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} כל הזכויות שמורות.
            </div>
          </div>

          {/* 2nd block - קישורים ראשיים */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 space-y-2 text-right">
            <h3 className="text-sm font-bold mb-2">תפריט ראשי</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#gallery" className="hover:text-blue-600 transition">גלריה</Link>
              </li>
              <li>
                <Link href="#whyus" className="hover:text-blue-600 transition">למה אנחנו</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-600 transition">צור קשר</Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-blue-600 transition">שאלות ותשובות</Link>
              </li>
            </ul>
          </div>

          {/* 3rd block - עמודים משפטיים */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 space-y-2 text-right">
            <h3 className="text-sm font-bold mb-2">מידע משפטי</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => open("terms")}
                  className="text-blue-600 hover:underline transition cursor-pointer"
                >
                  תקנון האתר
                </button>
              </li>
              <li>
                <button
                  onClick={() => open("privacy")}
                  className="text-blue-600 hover:underline transition cursor-pointer"
                >
                  מדיניות פרטיות
                </button>
              </li>
              <li>
                <button
                  onClick={() => open("accessibility")}
                  className="text-blue-600 hover:underline transition cursor-pointer"
                >
                  הצהרת נגישות
                </button>
              </li>
            </ul>
          </div>


          {/* 4th block - רשתות חברתיות */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 space-y-2 text-right">
            <h3 className="text-sm font-bold mb-2">עקבו אחרינו</h3>
            <ul className="flex gap-3">
              <li>
                <Link href="https://www.facebook.com/people/%25D7%2590%25D7%259C-%25D7%25A9%25D7%2599%25D7%25A8%25D7%2595%25D7%25AA%25D7%2599%25D7%259D-%25D7%25A0%25D7%2599%25D7%2599%25D7%2593%25D7%2599%25D7%259D/61576869609037/?rdid=8aIuk0O4uX8gw8Px&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F167Bc2tDRB%252F" className="hover:text-blue-500 transition" aria-label="Facebook">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3H14v7A10 10 0 0 0 22 12z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/shirutim4u" className="hover:text-pink-500 transition" aria-label="Instagram">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3a3 3 0 1 0 0-6zm5.2-2.3a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="https://www.tiktok.com/@shirutim4uט" className="hover:text-blue-400 transition" aria-label="Tiktok" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M208.1 75.6a59.2 59.2 0 0 1-35.1-11.5v61.8a66.5 66.5 0 1 1-66.5-66.5c3.3 0 6.5.3 9.7.9v35.3a31.2 31.2 0 1 0 22.5 30.2V0h34.6a59.4 59.4 0 0 0 35.8 54.8z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LegalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </footer>
  );
}
