import Image from "next/image";
import PlanetImg from "/images/planet.png";
import PlanetOverlayImg from "/images/planet-overlay.svg";

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
          <div className="pb-16 md:pb-20 flex justify-center" data-aos="zoom-y-out">
            <div className="relative w-50 h-50 md:w-65 md:h-65 rounded-full border-8 border-blue-100 bg-gradient-to-tr from-blue-50 to-white shadow-xl flex items-center justify-center">
              <Image
                className="rounded-full object-cover"
                src={PlanetImg}
                width={300}
                height={300}
                alt="Planet"
              />
              <div className="absolute -right-10 -top-10 w-32 h-32 opacity-30">
                <Image src={PlanetOverlayImg} alt="Decoration" width={128} height={128} />
              </div>
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center sm:text-right">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">האם צריך נקודת חשמל באירוע?</h3>
              <p className="text-gray-600">לא נדרש חיבור לחשמל – השירותים פועלים באופן עצמאי לחלוטין.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">האם צריך נקודת מים?</h3>
              <p className="text-gray-600">לא. היחידות מצוידות במיכלי מים פנימיים המספקים מים נקיים ונוחים לשימוש.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">האם אתם דואגים להובלה והתקנה?</h3>
              <p className="text-gray-600">בוודאי! השירות כולל הובלה, התקנה מקצועית, ניקיון ופינוי.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">כמה יחידות צריך לאירוע?</h3>
              <p className="text-gray-600">יחידה אחת מתאימה לכ-150 אורחים למשך 7–8 שעות. נתאים לך את הכמות לפי מספר משתתפים ומשך האירוע.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">האם השירות כולל ניקיון בזמן האירוע?</h3>
              <p className="text-gray-600">בהחלט. הניקיון והתחזוקה במהלך האירוע כלולים ונותנים שקט מלא.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}