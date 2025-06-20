export const metadata = {
  title: "שירותים ניידים מפוארים | א.ל שירותים ניידים",
  description:"אל תורידו את רמת האירוע: השכירו שירותים ניידים מפוארים מא.ל וקבלו תאי שירות נקיים, מרווחים ובעלי עיצוב יוקרתי לחתונות, כנסים ופסטיבלים. שירות ארצי ואחריות מלאה."
};

import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import { Description } from "@headlessui/react";

export default function Home() {
  return (
    <>
      <Hero />
      <LargeTestimonial />
      <Cta />
      <FeaturesPlanet />
    </>
  );
}
