export const metadata = {
  title: "shirutim4u",
  description: "אתר א.ל שירותים ניידים מפוארים — שירותי השכרת שירותים ניידים ברמה הגבוהה ביותר לאירועים, חתונות, כנסים ומופעים. עיצוב יוקרתי, נוחות מרבית והתאמה מלאה לדרישות הלקוח. האתר נגיש ומותאם לכלל המשתמשים.",
};

import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

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
