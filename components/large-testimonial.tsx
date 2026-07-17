import Image from "next/image";

export default function LargeTestimonial() {
  return (
    <section className="relative px-6 py-20 bg-white text-right">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-gray-50" aria-hidden="true" />

      <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">מה הלקוחות שלנו אומרים?</h3>

      <div className="relative max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:gap-8">
        {[
          {
            name: "Or Hadar",
            location: "ביקורת גוגל ⭐️⭐️⭐️⭐️⭐️",
            text: "רוצה להמליץ מכל הלב! מעבר לזה שהקרונות עצמם מפוארים, מריחים מעולה ומאובזרים בכל מה שצריך, השירות של הצוות היה פשוט מעל ומעבר. הם דאגו לכל פרט קטן עם חיוך, ושמרו על המקום מבריק לאורך כל הערב. האורחים הרגישו שהשקיעו בהם עד הסוף. מקצוענים אמיתיים שנותנים שקט נפשי מלא.",
            initial: "O",
            color: "bg-blue-500"
          },
          {
            name: "Avi Kazav",
            location: "ביקורת גוגל ⭐️⭐️⭐️⭐️⭐️",
            text: "עשינו חתונה והיינו צריכים שירותים מפוארים לאורחים, וכך הגענו לליאב שנתן שירות מדהים. שירותים מפוארים עם איש תחזוקה בשטח לאורך כל האירוע ברמה של מלון 5 כוכבים!!! תודה רבה על הכול",
            initial: "A",
            color: "bg-emerald-500"
          },
          {
            name: "Gal musix",
            location: "ביקורת גוגל ⭐️⭐️⭐️⭐️⭐️",
            text: "הזמנו שירותים ניידים לאירוע וקיבלנו שירות מצוין. השירותים הגיעו בזמן, היו נקיים ומתוחזקים לאורך כל האירוע. הצוות היה מקצועי ואדיב, ודאג לכל מה שהיה צריך במהירות. פתרון נוח ואיכותי לאירועים בשטח או בטבע. ממליץ מאוד!",
            initial: "G",
            color: "bg-purple-500"
          },
          {
            name: "yoheved hyayev",
            location: "ביקורת גוגל ⭐️⭐️⭐️⭐️⭐️",
            text: "שירות ממש מעולה ניקיון מטורף וריח מושלם שאין לתאר!! שמחה מאוד שבחרתי בכם אין אחד שלא החמיא לכם תודה רבה על השירות 🏆🥳🥰",
            initial: "Y",
            color: "bg-rose-500"
          }
        ].map((review, index) => (
          <blockquote key={index} className="relative bg-gradient-to-tr from-white to-gray-50 border border-gray-200 shadow-md p-6 rounded-2xl transition duration-300 hover:shadow-xl text-sm">
            <div className="flex flex-row items-center gap-4 mb-3">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-lg ${review.color} shadow-inner`}>
                {review.initial}
              </div>
              <div className="flex flex-col text-right w-full">
                <span className="font-bold text-gray-900">{review.name}</span>
                <span className="text-gray-500 text-xs">{review.location}</span>
              </div>
            </div>
            <p className="text-yellow-400 text-lg leading-none mb-3" dir="ltr">★★★★★</p>
            <p className="text-gray-700 leading-relaxed italic" dir="rtl">
              "{review.text}"
            </p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
