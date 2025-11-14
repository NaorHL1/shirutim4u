export const metadata = {
  title: "שירותים ניידים מפוארים | א.ל שירותים ניידים",
  description: "אל תורידו את רמת האירוע: השכירו שירותים ניידים מפוארים מא.ל וקבלו תאי שירות נקיים, מרווחים ובעלי עיצוב יוקרתי לחתונות, כנסים ופסטיבלים. שירות ארצי ואחריות מלאה."
};

import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import { Description } from "@headlessui/react";
import Head from 'next/head';


<link rel="canonical" href="https://www.shirutim4u.com/" />


export default function Home() {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T3DT74HVR0"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T3DT74HVR0');
        </script>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://www.shirutim4u.com/" />
      </Head>

      <Hero />
      <LargeTestimonial />
      <Cta />
      <FeaturesPlanet />
    </>
  );
}
