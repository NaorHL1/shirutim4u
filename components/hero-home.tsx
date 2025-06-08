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
            <h1
              className="mb-6 text-5xl font-extrabold text-gray-900 leading-tight md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              הפתרון האלגנטי <br className="max-lg:hidden" />
              הנוח והנקי לאירועים מרגשים
            </h1>
            <div className="mx-auto max-w-2xl">
              <p
                className="mb-10 text-lg text-gray-600 md:text-xl"
                data-aos="zoom-y-out"
                data-aos-delay={300}
                dir="rtl"
              >
                חתונות, בר/בת מצווה, כנסים ואירועים פרטיים – אנחנו מביאים את השירותים ברמה של אולם יוקרתי לכל מקום. שירות מקצועי, איכות ללא פשרות, ואחריות מלאה – עם א.ל שירותים ניידים מפוארים.</p>
              <div className="mx-auto flex justify-center" data-aos="zoom-y-out" data-aos-delay={450}>
                <a
                  href="#0"
                  className="group inline-flex items-center gap-3 rounded-full bg-gray-900 px-6 py-3 text-white font-semibold shadow-lg hover:bg-gray-800 transition duration-300"
                >
                  <span className="text-blue-400 transition-transform group-hover:-translate-x-1">&larr;</span>
                  <AddContactButton />
                </a>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <section id="gallery" className="px-6 py-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">גלריה</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="h-115 w-full rounded-2xl bg-gray-200 shadow-inner overflow-hidden group relative">
                <Image
                  src="/images/toiletimg1.jpg"
                  alt="luxury toilet"
                  fill
                  className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105 group-hover:opacity-95"
                />
              </div>
              <div className="h-115 w-full rounded-2xl bg-gray-200 shadow-inner overflow-hidden group relative">
                <Image
                  src="/images/toiletimg2.jpg"
                  alt="luxury toilet"
                  fill
                  className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105 group-hover:opacity-95"
                />
              </div>
              <div className="h-115 w-full rounded-2xl bg-gray-200 shadow-inner overflow-hidden group relative">
                <Image
                  src="/images/toiletimg1.jpg"
                  alt="luxury toilet"
                  fill
                  className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105 group-hover:opacity-95"
                />
              </div>
            </div>
          </section>

          {/* Why Us Section */}
          <section id="whyus" className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-inner">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">?למה לבחור בנו</h3>
            <div dir="rtl" className="grid gap-10 max-w-5xl mx-auto sm:grid-cols-2">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">יוקרה ונוחות ללא תחרות</h4>
                <p className="text-gray-600">שירותים מוארים ומעוצבים – חוויה יוקרתית כמו באולם.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">מתאים לכל סוגי האירועים</h4>
                <p className="text-gray-600">חתונות, בר/בת מצווה, אירועים עסקיים וחגיגות חוץ.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">שירות בפריסה ארצית</h4>
                <p className="text-gray-600">מגיעים לכל אזור בארץ – מצפון ועד דרום.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">הובלה, התקנה וניקיון</h4>
                <p className="text-gray-600">מגיעים בזמן, מתקינים, מנקים – הכל כלול.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">יחס אישי וזמינות</h4>
                <p className="text-gray-600">מענה מהיר וליווי אישי לאורך כל הדרך.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">עצמאי לחלוטין</h4>
                <p className="text-gray-600">לא נדרש בהוספת תשתית – השירותים פועלים גם במדבר.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}