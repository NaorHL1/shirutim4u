import Head from "next/head";
import "./css/style.css";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" className="scroll-smooth">
      <Head>
        <title>השכרת שירותים ניידים מפוארים | א.ל שירותים ניידים</title>
        <meta
          name="description"
          content="אל תורידו את רמת האירוע: השכירו שירותים ניידים מפוארים מא.ל וקבלו תאי שירות נקיים, מרווחים ובעלי עיצוב יוקרתי לחתונות, כנסים ופסטיבלים. שירות ארצי ואחריות מלאה."
        />
        <meta name="keywords" content="שירותים ניידים, השכרת שירותים ניידים, שירותים ניידים מפוארים, שירותים ניידים לאירועים, שירותים כימיים להשכרה, תאי שירותים ניידים" />
        <meta property="og:title" content="השכרת שירותים ניידים מפוארים – א.ל שירותים ניידים" />
        <meta property="og:description" content="שירותים ניידים פרימיום, ריח מושלם, תא רחב ונקי – שירות מקצועי בפריסה ארצית." />
        <meta property="og:image" content="https://shirutim4u.com/images/toiletimg2.jpg" />
        <meta property="og:url" content="https://www.shirutim4u.com/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://www.shirutim4u.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}>
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
