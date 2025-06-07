export const metadata = {
  title: "שירותים ניידים מפוארים | א.ל שירותים ניידים",
  description:"מחפשים שירותים ניידים מפוארים להשכרה? בא.ל שירותים ניידים תמצאו שירותים יוקרתיים, מרווחים ונקיים לכל סוגי האירועים: חתונות, כנסים, אירועי שטח, פסטיבלים ואירועים פרטיים. פתרון איכותי ומקצועי לשירותים ניידים."
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
