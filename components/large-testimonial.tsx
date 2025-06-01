import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  return (
    <section className="relative px-6 py-20 bg-white text-right">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-gray-50" aria-hidden="true" />

      <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">?מה הלקוחות שלנו אומרים</h3>

      <div className="relative max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:gap-8">
        {[ 
          {
            name: "מור ואורן",
            location: "חתונה בקיבוץ",
            text: "השירותים היו נקיים, מרווחים ומעוצבים לא מתקרב לגועל של שירותים כימיים!"
          },
          {
            name: "תומר",
            location: "כנס בהרצליה",
            text: "רמה אחרת לגמרי. נקי, נעים, מסודר – פשוט שידרג את כל האירוע!"
          },
          {
            name: "יעל",
            location: "אירוע פרטי ברמת גן",
            text: "הופתעתי מרמת השירות. הכל היה מושלם ומדויק. בהחלט נשכיר מהם שוב!"
          },
          {
            name: "מיכאל",
            location: "אירוע חברה בצפון",
            text: "השירות היה מקצועי, מהיר ונקי. האורחים שמו לב והשאיר רושם מעולה."
          }
        ].map((review, index) => (
          <blockquote key={index} className="relative bg-gradient-to-tr from-white to-gray-50 border border-gray-200 shadow-md p-6 rounded-2xl transition duration-300 hover:shadow-xl text-sm">
            <div className="flex flex-row-reverse items-center gap-4 mb-3">
              <Image
                src={TestimonialImg}
                alt="Person"
                width={40}
                height={40}
                className="rounded-full border border-gray-300 shadow-sm"
              />
              <div>
                <p className="font-bold text-gray-800 text-sm">{review.name}</p>
                <p className="text-xs text-gray-500">{review.location}</p>
              </div>
            </div>
            <p className="text-yellow-400 text-lg leading-none mb-3">★★★★★</p>
            <p dir="rtl" className="text-gray-700 leading-relaxed italic">"{review.text}"</p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
