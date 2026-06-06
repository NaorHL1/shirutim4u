import './css/style.css'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shirutim4u.com'),
  title: 'השכרת שירותים ניידים מפוארים לאירועים | א.ל שירותים ניידים',
  description: 'מחפשים שירותים ניידים להשכרה? א.ל מציעה תאי שירות מפוארים, נקיים ומרווחים לאירועי שטח וחתונות. שירות מקצועי בפריסה ארצית ואחריות מלאה.',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'השכרת שירותים ניידים מפוארים לאירועים | א.ל שירותים ניידים',
    description:
      'שירותים ניידים פרימיום, ריח מושלם, תא רחב ונקי – שירות מקצועי בפריסה ארצית.',
    url: '/',
    siteName: 'א.ל שירותים ניידים',
    locale: 'he_IL',
    images: [
      {
        url: '/images/toiletimg2.jpg',
        width: 1200,
        height: 630,
        alt: 'תא שירותים נייד מפואר מבפנים',
      },
    ],
    type: 'website',
  },
  icons: { icon: '/favicon.ico' },
}

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
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>

        {/* סקריפט הנגישות */}
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

        {/* רכיב Analytics הרשמי - מבטיח מעקב נכון ב-SPA */}
        <GoogleAnalytics gaId="G-EPTQYXQ530" />
      </body>
    </html>
  )
}