import Image from "next/image";

export default function LargeTestimonial() {
  return (
    <section className="relative px-6 py-20 bg-white text-right">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-gray-50" aria-hidden="true" />

      <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">מה הלקוחות שלנו אומרים?</h3>

      <div className="relative max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:gap-8">
        {[
          {
            name: "Morz",
            location: "ביקורת גוגל ⭐️⭐️⭐️⭐️⭐️",
            text: "ליאב ואושרי המקצוענים. הזמנו אותם לחתונה בטבע שעשינו לפני חצי שנה. אף אחד מהאורחים לא ציפה לשירות כזה פשוט מדהים ומומלץ בחום!! הכל הגיע בזמן , נקי ומצוחצח ברמות הכי גבוהות ושירות מעבר למצופה ... כל הבקשות וכל הדרישות נענו בשמחה ללא צל דופי.",
            image: "/images/moran.png"
          },
          {
            name: "Or Hadar",
            location: "ביקורת גוגל ⭐️⭐️⭐️⭐️⭐️",
            text: "רוצה להמליץ מכל הלב! מעבר לזה שהקרונות עצמם מפוארים, מריחים מעולה ומאובזרים בכל מה שצריך, השירות של הצוות היה פשוט מעל ומעבר. הם דאגו לכל פרט קטן עם חיוך, ושמרו על המקום מבריק לאורך כל הערב. מקצוענים אמיתיים שנותנים שקט נפשי מלא.",
            image: "/images/tomer.jpg"
          },
          {
            name: "Avi Kazav",
            location: "ביקורת גוגל ⭐️⭐️⭐️⭐️⭐️",
            text: "עשינו חתונה והיינו צריכים שירותים מפוארים לאורחים, וכך הגענו לליאב שנתן שירות מדהים. שירותים מפוארים עם איש תחזוקה בשטח לאורך כל האירוע ברמה של מלון 5 כוכבים!!! תודה רבה על הכול.",
            image: "/images/yahel.jpg"
          },
          {
            name: "Gal musix",
            location: "ביקורת גוגל ⭐️⭐️⭐️⭐️⭐️",
            text: "הזמנו שירותים ניידים לאירוע וקיבלנו שירות מצויין. השירותים הגיעו בזמן, היו נקיים ומתחוזקים לאורך כל האירוע. הצוות היה מקצועי ואדיב, ודאג לכל מה שהיה צריך במהירות. פתרון נוח ואיכותי לאירועים בשטח או בטבע. ממליץ מאוד!",
            image: "/images/micheal.jpg"
          }
        ].map((review, index) => (
          <blockquote key={index} className="relative bg-gradient-to-tr from-white to-gray-50 border border-gray-200 shadow-md p-6 rounded-2xl transition duration-300 hover:shadow-xl text-sm">
            <div className="flex flex-row items-center gap-4 mb-3">
              <Image
                src={review.image}
                alt="face"
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
