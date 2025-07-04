import './css/style.css'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'השכרת שירותים ניידים מפוארים | א.ל שירותים ניידים',
  description:
    'אל תורידו את רמת האירוע: השכירו שירותים ניידים מפוארים מא.ל וקבלו תאי שירות נקיים, מרווחים ובעלי עיצוב יוקרתי לחתונות, כנסים ופסטיבלים. שירות ארצי ואחריות מלאה.',
  keywords: [
    'שירותים ניידים',
    'השכרת שירותים ניידים',
    'שירותים ניידים מפוארים',
    'שירותים ניידים לאירועים',
    'שירותים כימיים להשכרה',
    'תאי שירותים ניידים',
  ],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'השכרת שירותים ניידים מפוארים – א.ל שירותים ניידים',
    description:
      'שירותים ניידים פרימיום, ריח מושלם, תא רחב ונקי – שירות מקצועי בפריסה ארצית.',
    url: 'https://www.shirutim4u.com/',
    images: [
      {
        url: 'https://shirutim4u.com/images/toiletimg2.jpg',
        width: 1200,
        height: 630,
        alt: 'luxury mobile toilet',
      },
    ],
    type: 'website',
  },
  icons: { icon: '/favicon.ico' },
  alternates: { canonical: 'https://www.shirutim4u.com/' },
}

// מגדירים את ה-viewport בנפרד כדי לא לקבל אזהרות ב-Next.js 14
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" className="scroll-smooth">
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
  )
}
