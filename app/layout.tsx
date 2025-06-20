import "./css/style.css";
import Script from "next/script";
import type { Metadata } from "next";


import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ------------  Meta Tags  ------------ */
export const metadata: Metadata = {
  title: "השכרת שירותים ניידים מפוארים | א.ל שירותים ניידים",

  /* Description ≈ 155 תווים – קריאה לפעולה ברורה */
  description:
    "אל תורידו את רמת האירוע: השכירו שירותים ניידים מפוארים מא.ל וקבלו תאי שירות נקיים, מרווחים ובעלי עיצוב יוקרתי לחתונות, כנסים ופסטיבלים. שירות ארצי ואחריות מלאה.",

  /* Keywords – לא מכביד, עדיין מועיל במנועים משניים וב-schema */
  keywords: [
    "שירותים ניידים",
    "השכרת שירותים ניידים",
    "שירותים ניידים מפוארים",
    "שירותים ניידים לאירועים",
    "שירותים כימיים להשכרה",
    "תאי שירותים ניידים"
  ],

  /* Robots – מאפשר סניפט ותצוגת-תמונה/וידאו מלאים; אין nocache */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },

  /* Canonical – כתובת מדויקת עם ‎https ו-‎www (לפי ההגדרה באתר) */
  alternates: {
    canonical: "https://www.shirutim4u.com/"
  },

  /* Open Graph – CTR גבוה בשיתופים (וגם רמז טוב לגוגל) */
  openGraph: {
    type: "website",
    url: "https://www.shirutim4u.com/",
    siteName: "א.ל שירותים ניידים",
    title: "השכרת שירותים ניידים מפוארים – א.ל שירותים ניידים",
    description:
      "שירותים ניידים פרימיום, ריח מושלם, תא רחב ונקי – שירות מקצועי בפריסה ארצית.",
    images: [
      {
        url: "https://shirutim4u.com/images/toiletimg2.jpg",
        width: 1200,
        height: 630,
        alt: "תאי שירותים ניידים מפוארים באירוע חוץ"
      }
    ],
    locale: "he_IL"
  },
   icons: {
    icon: "/favicon.ico"
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
        <Script src="/acctoolbar.min.js" strategy="afterInteractive" />
        <Script id="init-acctoolbar" strategy="afterInteractive">
          {`
    function initMicAccessTool() {
      if (typeof MicAccessTool !== 'undefined') {
        window.micAccessTool = new MicAccessTool({
          link: '/',
          contact: 'mailto:shirutim4u@gmail.com',
          buttonPosition: 'left',
          forceLang: 'he-IL'
        });
      } else {
        setTimeout(initMicAccessTool, 50);
      }
    }
    initMicAccessTool();
  `}
        </Script>


      </body>
    </html>
  );
}
