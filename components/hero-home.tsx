import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import AddContactButton from "@/components/addcontactbutton";

export default function HeroHome() {
  return (
    <section className="relative bg-white text-center">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1 className="mb-6 text-5xl font-extrabold text-gray-900 leading-tight md:text-6xl">
              הפתרון האלגנטי <br className="max-lg:hidden" />
              הנוח והנקי לאירועים מרגשים
            </h1>
            <div className="mx-auto max-w-2xl">
              <p className="mb-10 text-lg text-gray-600 md:text-xl" dir="rtl">
                חתונות, בר/בת מצווה, כנסים ואירועים פרטיים – אנחנו מביאים את השירותים ברמה של אולם יוקרתי לכל מקום. שירות מקצועי, איכות ללא פשרות, ואחריות מלאה – עם א.ל שירותים ניידים מפוארים.
              </p>
              <div className="mx-auto flex justify-center">
                <a
                  href="#0"
                  className="group inline-flex items-center gap-3 rounded-full bg-gray-900 px-6 py-3 text-white font-semibold shadow-lg hover:bg-gray-800 transition duration-300"
                >
                  <span className="text-blue-400 transition-transform group-hover:-translate-x-1">
                    &larr;
                  </span>
                  <AddContactButton />
                </a>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <section id="gallery" className="px-6 py-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
              גלריה
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {["toiletimg1.jpg", "toiletimg2.jpg", "toiletimg1.jpg"].map(
                (img, index) => (
                  <div
                    key={index}
                    className="h-115 w-full rounded-2xl bg-gray-200 shadow-inner overflow-hidden group relative"
                  >
                    <Image
                      src={`/images/${img}`}
                      alt="luxury toilet"
                      fill
                      priority={index === 0} // רק על הראשונה נשים priority
                      className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105 group-hover:opacity-95"
                    />
                  </div>
                )
              )}
            </div>
          </section>

          {/* Why Us Section */}
          <section
            id="whyus"
            className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-inner"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              ?למה לבחור בנו
            </h3>
            <div
              dir="rtl"
              className="grid gap-10 max-w-5xl mx-auto sm:grid-cols-2"
            >
              {[
                {
                  title: "יוקרה ונוחות ללא תחרות",
                  desc: "שירותים מוארים ומעוצבים – חוויה יוקרתית כמו באולם.",
                },
                {
                  title: "מתאים לכל סוגי האירועים",
                  desc: "חתונות, בר/בת מצווה, אירועים עסקיים וחגיגות חוץ.",
                },
                {
                  title: "שירות בפריסה ארצית",
                  desc: "מגיעים לכל אזור בארץ – מצפון ועד דרום.",
                },
                {
                  title: "הובלה, התקנה וניקיון",
                  desc: "מגיעים בזמן, מתקינים, מנקים – הכל כלול.",
                },
                {
                  title: "יחס אישי וזמינות",
                  desc: "מענה מהיר וליווי אישי לאורך כל הדרך.",
                },
                {
                  title: "עצמאי לחלוטין",
                  desc: "לא נדרש בהוספת תשתית – השירותים פועלים גם במדבר.",
                },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
