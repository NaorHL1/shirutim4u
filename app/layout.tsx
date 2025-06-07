import "./css/style.css";
import Script from "next/script";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "שירותים ניידים מפוארים | א.ל שירותים ניידים",
  description: "...",
    icons: {
    icon: '/favicon.ico',
  },
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
