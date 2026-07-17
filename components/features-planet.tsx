import Image from "next/image";

export default function FeaturesPlanet() {
  return (
    <section id="faq" dir="rtl" className="relative bg-white py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              שאלות נפוצות – כל מה שצריך לדעת על השירותים הניידים שלנו
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              ריכזנו עבורכם את כל המידע החיוני על פתרונות השירותים הניידים המפוארים שלנו.
            </p>
          </div>

          {/* Planet visual */}
        <div className="pb-16 md:pb-20 flex justify-center custom-zoom-in">
          <div className="relative w-[288px] h-[288px] rounded-full border-8 border-blue-100 bg-gradient-to-tr from-blue-50 to-white shadow-xl flex items-center justify-center overflow-hidden">
            <Image
              className="rounded-full object-cover"
              src="/images/planet.png"
              width={300}
              height={300}
              alt="Planet"
            />
            <div className="absolute -right-10 -top-10 w-32 h-32 opacity-30 pointer-events-none">
              <Image src="/images/planet-overlay.svg" alt="Decoration" width={128} height={128} />
            </div>
          </div>
        </div>

          {/* FAQ Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center sm:text-right">
            {/* Box 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">לאילו אירועים זה מתאים?</h3>
              <p className="text-gray-600 text-[15px]">חתונות בטבע, בר/בת מצווה, כנסים, הפקות ענק ואירועים פרטיים ברמה הגבוהה ביותר.</p>
            </div>
            {/* Box 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">לאילו אזורים מגיעים?</h3>
              <p className="text-gray-600 text-[15px]">אנו מספקים שירות בפריסה ארצית רחבה: באזור המרכז, אזור הצפון ואזור הדרום.</p>
            </div>
            {/* Box 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">האם צריך חיבור למים או ביוב?</h3>
              <p className="text-gray-600 text-[15px]">לא. היחידות עצמאיות לחלוטין ומצוידות במיכלים המספקים חוויה נקייה וללא תשתיות קבועות.</p>
            </div>
            {/* Box 4 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">האם נדרש חשמל בשטח?</h3>
              <p className="text-gray-600 text-[15px]">לא נדרש חיבור חיצוני לחשמל – השירותים פועלים באופן מלא ועצמאי בשטח הפתוח.</p>
            </div>
            {/* Box 5 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">כמה יחידות צריך לאירוע?</h3>
              <p className="text-gray-600 text-[15px]">יחידה אחת מתאימה לכ-200 אורחים. נתאים את הכמות המדויקת למספר המשתתפים ומשך האירוע.</p>
            </div>
            {/* Box 6 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">השירות כולל ניקיון והתקנה?</h3>
              <p className="text-gray-600 text-[15px]">בוודאי. השירות כולל הובלה, התקנה, ניקיון שוטף במהלך האירוע ופינוי מלא בסיומו.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}