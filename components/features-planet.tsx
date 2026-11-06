import Image from "next/image";

export default function FeaturesPlanet() {
  return (
    <section id="faq" dir="rtl" className="relative bg-white py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-10 sm:pb-16 text-center md:pb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
              שאלות נפוצות – כל מה שצריך לדעת על השירותים הניידים שלנו
            </h2>
            <p className="mt-3 sm:mt-4 text-[15px] sm:text-lg text-gray-600 leading-relaxed">
              ריכזנו עבורכם את כל המידע החיוני על פתרונות השירותים הניידים המפוארים שלנו.
            </p>
          </div>

          {/* Planet visual */}
        <div className="pb-12 sm:pb-16 md:pb-20 flex justify-center custom-zoom-in">
          <div className="relative w-[220px] h-[220px] sm:w-[288px] sm:h-[288px] rounded-full border-8 border-blue-100 bg-gradient-to-tr from-blue-50 to-white shadow-xl flex items-center justify-center overflow-hidden">
            <Image
              className="rounded-full object-cover"
              src="/images/planet.png"
              width={300}
              height={300}
              alt="השכרת שירותים ניידים בפריסה ארצית - מצפון ועד דרום"
            />
            <div className="absolute -right-10 -top-10 w-32 h-32 opacity-30 pointer-events-none">
              <Image src="/images/planet-overlay.svg" alt="" aria-hidden="true" width={128} height={128} />
            </div>
          </div>
        </div>

          {/* FAQ Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center sm:text-right">
            {/* Box 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">לאילו אירועים מתאימה השכרת שירותים ניידים מפוארים?</h3>
              <p className="text-gray-600 text-[15px]">השירותים הניידים המפוארים שלנו מתאימים לחתונות בטבע, בר/בת מצווה, כנסים עסקיים, אירועי בוטיק, פסטיבלים והפקות חוץ ברמה הגבוהה ביותר.</p>
            </div>
            {/* Box 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">לאילו אזורים בארץ אתם מגיעים?</h3>
              <p className="text-gray-600 text-[15px]">אנו מספקים שירות השכרת שירותים ניידים בפריסה ארצית מלאה: אזור המרכז, השרון, ירושלים והסביבה, אזור הצפון ואזור הדרום.</p>
            </div>
            {/* Box 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">האם צריך חיבור למים או ביוב בשטח האירוע?</h3>
              <p className="text-gray-600 text-[15px]">לא. קרונות השירותים שלנו עצמאיים לחלוטין (Off-Grid) ומצוידות במיכלי מים נקיים ומיכלי אגירה אטומים, כך שאינם דורשים חיבור לתשתיות מים או ביוב קבועות.</p>
            </div>
            {/* Box 4 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">האם נדרש חיבור חשמל בשטח?</h3>
              <p className="text-gray-600 text-[15px]">לא נדרש חיבור חיצוני לרשת החשמל – השירותים הניידים פועלים באופן מלא ועצמאי גם בלב היער, בחוף הים או במדבר.</p>
            </div>
            {/* Box 5 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">כמה תאי שירותים ניידים צריך להזמין לאירוע?</h3>
              <p className="text-gray-600 text-[15px]">יחידה מפוארת אחת מתאימה לכ-200 אורחים. אנו מתאימים את כמות התאים והרכב הקרונות למספר המשתתפים המדויק, משך האירוע ואופי הקהל.</p>
            </div>
            {/* Box 6 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">האם השכרת השירותים הניידים כוללת ניקיון והתקנה?</h3>
              <p className="text-gray-600 text-[15px]">בוודאי. השירות כולל הובלה עד למיקום האירוע, הצבה והתקנה מקצועית, איש שירות צמוד לניקיון וחיטוי שוטף לאורך כל האירוע, ופינוי מלא בסיומו.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}