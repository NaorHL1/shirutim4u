import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export const metadata = {
  title: "שירותים ניידים מפוארים | א.ל שירותים ניידים",
  description: "אל תורידו את רמת האירוע: השכירו שירותים ניידים מפוארים מא.ל וקבלו תאי שירות נקיים, מרווחים ובעלי עיצוב יוקרתי לחתונות, כנסים ופסטיבלים. שירות ארצי ואחריות מלאה.",
  alternates: {
    canonical: 'https://www.shirutim4u.com/',
  },
};

export default function Home() {
  return (
    <>
      {/* שים לב: מחקנו מכאן את ה-Head ואת ה-script כי הם כבר נמצאים ב-Layout */}
      <Hero />
      <LargeTestimonial />
      <Cta />
      <FeaturesPlanet />
    </>
  );
}