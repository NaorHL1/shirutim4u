import Link from 'next/link';
import Image from 'next/image';

export default function SeoContent() {
  return (
    <section className="px-6 py-20 bg-gray-50 border-t border-gray-100" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Split Layout: Text & New Image */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2 text-right">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              כל מה שצריך לדעת על השכרת שירותים ניידים מפוארים
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              כאשר מתכננים חתונה בטבע, כנס עסקי או אירוע שטח, אחת הדאגות המרכזיות היא נוחות האורחים ורמת ההיגיינה. אנו ב<strong className="text-gray-900">א.ל שירותים ניידים</strong> מבינים שאירוע מושלם דורש התייחסות לכל פרט, ולכן אנו מספקים קרונות שירותים ניידים מפוארים שמעניקים תחושה של בית מלון 5 כוכבים – גם בלב היער, בחוף הים או במדבר.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              בין אם אתם מחפשים <Link href="/blog/luxury-portable-toilets" className="text-blue-600 font-semibold hover:underline">שירותים ניידים מפוארים לחתונה</Link> או <Link href="/services/mobile-toilets" className="text-blue-600 font-semibold hover:underline">השכרת שירותים ניידים לכל מטרה</Link>, המערך שלנו ערוך לתת מענה מיידי, אסתטי ועצמאי לחלוטין ללא צורך בתשתיות מים, ביוב או חשמל.
            </p>
          </div>
          <div className="lg:w-1/2 w-full relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <Image 
              src="/images/toiletimg_new1.jpg" 
              alt="קרון שירותים ניידים מפוארים מוכן לאירוע שטח - א.ל שירותים ניידים" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* 4 Key Value Cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-base" aria-hidden="true">✨</span>
              פינוק ויוקרה אמיתיים באירועי חוץ
            </h3>
            <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">
              השכרת שירותים ניידים מפוארים לאירועים הפכה לסטנדרט בחתונות טבע, כנסי חברה ואירועי בוטיק. בניגוד לתאי פלסטיק בסיסיים, הקרונות שלנו מציעים מרחב ממוזג, מראות גדולות, תאורת לד נעימה, כיורים מעוצבים, מים זורמים וסבונים יוקרתיים. התרשמו מהתאים ב<Link href="/#gallery" className="text-blue-600 font-semibold hover:underline">גלריית השירותים המפוארים</Link>.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-base" aria-hidden="true">🌍</span>
              פריסה ארצית וללא תלות בתשתיות (Off-Grid)
            </h3>
            <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">
              אנו מספקים שירות בפריסה ארצית מלאה – מצפון ועד דרום. הקרונות שלנו עצמאיים לחלוטין ויכולים לפעול בכל תנאי שטח ללא חיבור קבוע למים, ביוב או חשמל. קראו עוד במדריך על <Link href="/blog/offgrid-portable-toilets" className="text-blue-600 font-semibold hover:underline">שירותים ניידים לאירועים ללא תשתית מים</Link>.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-base" aria-hidden="true">⚙️</span>
              איך עובד תהליך ההשכרה וההצבה?
            </h3>
            <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">
              אנו מאפיינים איתכם את הצרכים המדויקים: כמות מוזמנים, מיקום השטח, משך האירוע וגישה לרכב גרר. ביום האירוע הצוות מגיע מבעוד מועד, מציב ומפלס את הקרונות, ובסיום האירוע דואג לפינוי מהיר ונקי. <Link href="/#contact" className="text-blue-600 font-semibold hover:underline">צרו קשר</Link> להתאמה אישית.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-base" aria-hidden="true">🧼</span>
              איש שירות צמוד וניקיון ללא פשרות
            </h3>
            <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">
              כל קרון עובר חיטוי יסודי לפני היציאה לשטח ומאובזר בנייר טואלט איכותי, מגבות נייר, סבון ידיים ומפיצי ריח יוקרתיים. באירועים אנו מעמידים איש תחזוקה צמוד ששומר על התאים מבריקים וריחניים לאורך כל הערב.
            </p>
          </div>
        </div>

        {/* Comparison Table: Luxury Trailer vs Standard Portable Toilet */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200 mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            השוואה: קרון שירותים ניידים מפואר לעומת שירותים כימיים רגילים
          </h2>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            מתלבטים איזה פתרון מתאים לאירוע או לפרויקט שלכם? בטבלה הבאה ריכזנו את ההבדלים המרכזיים בין השכרת קרון שירותים מפואר לאירועים לבין תאי שירותים ניידים סטנדרטיים:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-gray-900">
                  <th className="py-3.5 px-4 font-bold text-sm md:text-base">מאפיין</th>
                  <th className="py-3.5 px-4 font-bold text-sm md:text-base text-blue-700">קרון שירותים ניידים מפואר (VIP)</th>
                  <th className="py-3.5 px-4 font-bold text-sm md:text-base text-gray-700">שירותים ניידים סטנדרטיים / כימיים</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm md:text-base text-gray-700">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">קהל יעד ושימוש עיקרי</td>
                  <td className="py-3.5 px-4">חתונות בטבע, אירועי בוטיק, כנסים עסקיים, אירועי VIP</td>
                  <td className="py-3.5 px-4">הפקות שטח גדולות, פסטיבלים, אתרי בנייה ותשתיות</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">מיזוג אוויר ותאורה</td>
                  <td className="py-3.5 px-4">מיזוג אוויר מלא (קירור/חימום) + תאורת LED ומראות ענק</td>
                  <td className="py-3.5 px-4">אוורור טבעי ותאורה בסיסית</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">מערכת מים ושטיפה</td>
                  <td className="py-3.5 px-4">אסלות חרסינה עם הדחת מים זורמים וכיורים מעוצבים</td>
                  <td className="py-3.5 px-4">מיכל אגירה אטום עם חומרים מנטרלי ריחות וכיור שטיפה</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">תלות בתשתיות שטח</td>
                  <td className="py-3.5 px-4">עצמאי לחלוטין (מיכלי מים מובנים ואפשרות לגנרטור שקט)</td>
                  <td className="py-3.5 px-4">100% עצמאי בשטח ללא כל צורך במים או חשמל</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">תחזוקה ושירות</td>
                  <td className="py-3.5 px-4">איש שירות וניקיון צמוד לאורך כל שעות האירוע</td>
                  <td className="py-3.5 px-4">שאיבה, שטיפה וחיטוי תקופתי באמצעות משאית שירות</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Capacity Guide & Regional Coverage Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Capacity Guide */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              כמה תאי שירותים ניידים צריך לאירוע?
            </h2>
            <p className="text-gray-600 mb-4 text-[15px] leading-relaxed">
              התאמת כמות התאים למספר האורחים מונעת תורים ושומרת על רמת היגיינה גבוהה. כלל האצבע המקצועי שלנו ב<strong className="text-gray-900">א.ל שירותים ניידים</strong>:
            </p>
            <ul className="space-y-3 text-[15px] text-gray-700 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>עד 200 אורחים (אירוע עד 6 שעות):</strong> קרון שירותים מפואר כפול (2 תאים מרווחים) מספק מענה מצוין וללא המתנה.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>200 עד 400 אורחים:</strong> מומלץ להציב 3–4 תאים מפוארים (או צמד קרונות) עם דייל ניקיון צמוד.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>400+ אורחים והפקות ענק:</strong> מערך משולב של קרונות VIP ממוזגים לתחם האירוח המרכזי ותאי שירותים נוספים לצוותים.</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              לפירוט מלא קראו את <Link href="/blog/portable-toilets-rent" className="text-blue-600 font-semibold hover:underline">המדריך המקיף להשכרת שירותים ניידים לאירועים</Link>.
            </p>
          </div>

          {/* Regional Coverage */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              אזורי שירות – השכרת שירותים ניידים בפריסה ארצית
            </h2>
            <p className="text-gray-600 mb-4 text-[15px] leading-relaxed">
              צי הרכבים והקרונות שלנו ערוך להובלה והצבה מהירה בכל נקודה בישראל, כולל שטחים חקלאיים, יערות קק״ל, חופים ומצפים:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-[15px] text-gray-700 mb-5">
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                <strong className="block text-gray-900 mb-1">שירותים ניידים במרכז והשרון</strong>
                תל אביב, ראשון לציון, פתח תקווה, נתניה, הרצליה, כפר סבא, רעננה, מודיעין ומושבי השרון והשפלה.
              </div>
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                <strong className="block text-gray-900 mb-1">שירותים ניידים בצפון</strong>
                חיפה, קריות, עמק יזרעאל, כרמיאל, טבריה, סובב כנרת, גליל עליון ותחתון ורמת הגולן.
              </div>
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                <strong className="block text-gray-900 mb-1">שירותים ניידים בדרום</strong>
                אשדוד, אשקלון, באר שבע, רחובות, גדרה, יבנה, עוטף עזה, מצפה רמון והנגב.
              </div>
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                <strong className="block text-gray-900 mb-1">ירושלים והרי יהודה</strong>
                ירושלים, בית שמש, מבשרת ציון, יער בן שמן, עמק האלה ויישובי מטה יהודה.
              </div>
            </div>
            <p className="text-sm text-gray-500">
              מתכננים חתונה בשטח? היכנסו למדריך <Link href="/blog/nature-wedding-toilets" className="text-blue-600 font-semibold hover:underline">איך לבחור שירותים ניידים לחתונה בטבע</Link>.
            </p>
          </div>
        </div>

        {/* Bottom Dark CTA Box */}
        <div className="mx-auto max-w-xl rounded-3xl border border-gray-800 shadow-[0_8px_40px_rgba(0,0,0,0.12)] bg-[#111111] bg-[radial-gradient(ellipse_at_top,_#222,_#000_80%)] p-8 md:p-10 text-center relative overflow-hidden text-white">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 rounded-3xl border border-white/5 ring-1 ring-inset ring-white/10 pointer-events-none" aria-hidden="true" />
          
          <h3 className="text-xl md:text-2xl font-extrabold mb-3 relative z-10">אל תתפשרו על פחות מהטוב ביותר לאורחים שלכם</h3>
          <p className="text-[15px] md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6 relative z-10 font-medium">
            שירותים ניידים מפוארים הם ההבדל בין אירוע שטח מאולתר לאירוע יוקרתי ובלתי נשכח. צרו איתנו קשר עוד היום לייעוץ חינם והצעת מחיר מותאמת אישית. זמינות 24/7 בפריסה ארצית.
          </p>
          <Link href="/#contact" className="relative z-10 inline-block bg-white text-gray-900 font-bold px-8 py-3 rounded-xl hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md text-[15px] md:text-base">
            לקבלת הצעת מחיר מותאמת אישית
          </Link>
        </div>
      </div>
    </section>
  );
}

