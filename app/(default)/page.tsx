export const metadata = {
  title: "שירותים ניידים מפוארים | א.ל שירותים ניידים",
  description:"השכרת שירותים ניידים מפוארים לאירועים. שירותים ניידים יוקרתיים, ממוזגים ונקיים לכל סוגי האירועים: חתונות, כנסים, אירועי שטח, פסטיבלים. א.ל שירותים ניידים."
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
