import Link from 'next/link';
import Image from 'next/image';

export default function SeoContent() {
  return (
    <section className="px-4 sm:px-6 py-14 sm:py-20 bg-gray-50 border-t border-gray-100" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Split Layout: Text & New Image */}
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="lg:w-1/2 text-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-snug">
              כל מה שצריך לדעת על השכרת שירותים ניידים ושירותים מפוארים להשכרה
            </h2>
            <p className="text-[15px] sm:text-lg text-gray-600 leading-relaxed mb-4">
              כאשר מתכננים חתונה בטבע, כנס עסקי או הפקת חוץ ומחפשים <strong className="text-gray-900">שירותים לאירועים</strong>, אחת הדאגות המרכזיות היא נוחות האורחים ורמת ההיגיינה. אנו ב<strong className="text-gray-900">א.ל שירותים ניידים</strong> מספקים <strong className="text-gray-900">תאי שירותים להשכרה</strong> ושירותים מפוארים להשכרה שמעניקים תחושה של בית מלון 5 כוכבים – גם בלב היער, בחוף הים או במדבר.
            </p>
            <p className="text-[15px] sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
              אם אתם רוצים <strong className="text-gray-900">להשכיר שירותים ניידים</strong> לחתונה או מחפשים <Link href="/services/mobile-toilets" className="text-blue-600 font-semibold hover:underline">שירותים ניידים להשכרה לכל מטרה</Link>, המערך שלנו ערוך לתת מענה מיידי, אסתטי ועצמאי לחלוטין ללא צורך בתשתיות מים, ביוב או חשמל. קראו גם את <Link href="/blog/luxury-portable-toilets" className="text-blue-600 font-semibold hover:underline">המדריך לבחירת שירותים ניידים מפוארים</Link>.
            </p>
          </div>
          <div className="lg:w-1/2 w-full relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <Image 
              src="/images/toiletimg_new1.jpg" 
              alt="שירותים מפוארים להשכרה ותאי שירותים להשכרה לאירועים בשטח - א.ל שירותים ניידים" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* 4 Key Value Cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {/* Card 1 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2.5 sm:mb-3 flex items-center gap-2.5 sm:gap-3">
              <span className="w-8 h-8 shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-base" aria-hidden="true">✨</span>
              <span>פינוק ויוקרה אמיתיים באירועי חוץ</span>
            </h3>
            <p className="text-[14px] sm:text-base text-gray-700 leading-relaxed">
              השכרת שירותים ניידים מפוארים הפכה לסטנדרט בחתונות טבע, כנסי חברה ואירועי בוטיק. בניגוד לתאי פלסטיק בסיסיים, היחידות שלנו מציעות מרחב מרווח ומעוצב, מראות גדולות, תאורת לד נעימה, כיורים מעוצבים, מים זורמים וסבונים יוקרתיים. התרשמו מהתאים ב<Link href="/#gallery" className="text-blue-600 font-semibold hover:underline">גלריית השירותים המפוארים</Link>.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2.5 sm:mb-3 flex items-center gap-2.5 sm:gap-3">
              <span className="w-8 h-8 shrink-0 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-base" aria-hidden="true">🌍</span>
              <span>פריסה ארצית וללא תלות בתשתיות (Off-Grid)</span>
            </h3>
            <p className="text-[14px] sm:text-base text-gray-700 leading-relaxed">
              אנו מספקים שירות בפריסה ארצית מלאה – מצפון ועד דרום. הקרונות שלנו עצמאיים לחלוטין ויכולים לפעול בכל תנאי שטח ללא חיבור קבוע למים, ביוב או חשמל. קראו עוד במדריך על <Link href="/blog/offgrid-portable-toilets" className="text-blue-600 font-semibold hover:underline">שירותים ניידים לאירועים ללא תשתית מים</Link>.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2.5 sm:mb-3 flex items-center gap-2.5 sm:gap-3">
              <span className="w-8 h-8 shrink-0 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-base" aria-hidden="true">⚙️</span>
              <span>איך עובד תהליך ההשכרה וההצבה?</span>
            </h3>
            <p className="text-[14px] sm:text-base text-gray-700 leading-relaxed">
              אנו מאפיינים איתכם את הצרכים המדויקים: כמות מוזמנים, מיקום השטח, משך האירוע וגישה לרכב גרר. ביום האירוע הצוות מגיע מבעוד מועד, מציב ומפלס את הקרונות, ובסיום האירוע דואג לפינוי מהיר ונקי. <Link href="/#contact" className="text-blue-600 font-semibold hover:underline">צרו קשר</Link> להתאמה אישית.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2.5 sm:mb-3 flex items-center gap-2.5 sm:gap-3">
              <span className="w-8 h-8 shrink-0 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-base" aria-hidden="true">🧼</span>
              <span>איש שירות צמוד וניקיון ללא פשרות</span>
            </h3>
            <p className="text-[14px] sm:text-base text-gray-700 leading-relaxed">
              כל קרון עובר חיטוי יסודי לפני היציאה לשטח ומאובזר בנייר טואלט איכותי, מגבות נייר, סבון ידיים ומפיצי ריח יוקרתיים. באירועים אנו מעמידים איש תחזוקה צמוד ששומר על התאים מבריקים וריחניים לאורך כל הערב.
            </p>
          </div>
        </div>

        {/* Comparison Table: Luxury Trailer vs Standard Portable Toilet */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-10 shadow-sm border border-gray-200 mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-snug">
            השוואה: שירותים מפוארים להשכרה לעומת תאי שירותים להשכרה רגילים
          </h2>
          <p className="text-gray-600 mb-5 sm:mb-6 text-[14px] sm:text-base leading-relaxed">
            מתלבטים אילו שירותים לאירועים או לפרויקט כדאי להזמין? בטבלה הבאה ריכזנו את ההבדלים המרכזיים כאשר בוחרים להשכיר שירותים ניידים מפוארים לעומת תאי שירותים סטנדרטיים:
          </p>
          <div>
            <table className="w-full text-right border-collapse">
              <thead className="hidden md:table-header-group">
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-gray-900">
                  <th className="py-3.5 px-4 font-bold text-base">מאפיין</th>
                  <th className="py-3.5 px-4 font-bold text-base text-blue-700">שירותים ניידים מפוארים (VIP)</th>
                  <th className="py-3.5 px-4 font-bold text-base text-gray-700">שירותים ניידים סטנדרטיים / כימיים</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group space-y-3.5 md:space-y-0 md:divide-y md:divide-gray-200 text-[14px] sm:text-sm md:text-base text-gray-700">
                {[
                  {
                    feature: 'קהל יעד ושימוש עיקרי',
                    vip: 'חתונות בטבע, אירועי בוטיק, כנסים עסקיים, אירועי VIP',
                    std: 'הפקות שטח גדולות, פסטיבלים, אתרי בנייה ותשתיות',
                  },
                  {
                    feature: 'עיצוב פנים ותאורה',
                    vip: 'עיצוב מרווח ויוקרתי, תאורת LED נעימה ומראות גדולות',
                    std: 'מבנה פלסטיק בסיסי ללא מראות ותאורה מעוצבת',
                  },
                  {
                    feature: 'מערכת מים והיגיינה',
                    vip: 'כיורים מעוצבים עם מים זורמים, סבונים יוקרתיים ומפיצי ריח',
                    std: 'מיכל אגירה אטום עם חומרים כימיים מנטרלי ריחות',
                  },
                  {
                    feature: 'תלות בתשתיות שטח',
                    vip: '100% עצמאי בשטח (Off-Grid) – פועל ללא צורך בחיבור למים, ביוב או חשמל',
                    std: 'עצמאי בשטח ללא צורך במים או חשמל',
                  },
                  {
                    feature: 'תחזוקה ושירות',
                    vip: 'איש שירות וניקיון צמוד לאורך כל שעות האירוע',
                    std: 'שאיבה, שטיפה וחיטוי תקופתי באמצעות משאית שירות',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="block md:table-row rounded-2xl border border-gray-200 md:border-0 p-4 md:p-0 bg-gray-50/70 md:bg-transparent"
                  >
                    <td className="block md:table-cell pb-2 md:py-3.5 md:px-4 font-extrabold text-gray-900 text-[15px] md:text-base border-b border-gray-200/80 md:border-0 mb-2.5 md:mb-0">
                      {row.feature}
                    </td>
                    <td className="block md:table-cell py-1.5 md:py-3.5 md:px-4 text-gray-800 leading-relaxed">
                      <span className="md:hidden inline-block text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/70 px-2 py-0.5 rounded-md ml-1.5 mb-0.5">
                        שירותים מפוארים (VIP):
                      </span>
                      {row.vip}
                    </td>
                    <td className="block md:table-cell pt-2 md:py-3.5 md:px-4 text-gray-600 leading-relaxed border-t border-dashed border-gray-200 md:border-0 mt-1.5 md:mt-0">
                      <span className="md:hidden inline-block text-xs font-semibold text-gray-600 bg-gray-200/70 px-2 py-0.5 rounded-md ml-1.5 mb-0.5">
                        שירותים רגילים / כימיים:
                      </span>
                      {row.std}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Capacity Guide & Regional Coverage Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Capacity Guide */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-200">
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-snug">
              כמה תאי שירותים ניידים צריך לאירוע?
            </h2>
            <p className="text-gray-600 mb-4 text-[14px] sm:text-[15px] leading-relaxed">
              התאמת כמות התאים למספר האורחים מונעת תורים ושומרת על רמת היגיינה גבוהה. כלל האצבע המקצועי שלנו ב<strong className="text-gray-900">א.ל שירותים ניידים</strong>:
            </p>
            <ul className="space-y-3 text-[14px] sm:text-[15px] text-gray-700 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>עד 200 אורחים (אירוע עד 6 שעות):</strong> יחידת שירותים מפוארת (2 תאים מרווחים) מספקת מענה מצוין וללא המתנה.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>200 עד 400 אורחים:</strong> מומלץ להציב 3–4 תאים מפוארים עם דייל ניקיון צמוד.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>400+ אורחים והפקות ענק:</strong> מערך משולב של יחידות שירותים מפוארים למתחם האירוח המרכזי ותאי שירותים נוספים לצוותים.</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              לפירוט מלא קראו את <Link href="/blog/portable-toilets-rent" className="text-blue-600 font-semibold hover:underline">המדריך המקיף להשכרת שירותים ניידים לאירועים</Link>.
            </p>
          </div>

          {/* Regional Coverage */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-200">
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-snug">
              אזורי שירות – השכרת שירותים ניידים בפריסה ארצית
            </h2>
            <p className="text-gray-600 mb-4 text-[14px] sm:text-[15px] leading-relaxed">
              צי הרכבים והקרונות שלנו ערוך להובלה והצבה מהירה בכל נקודה בישראל, כולל שטחים חקלאיים, יערות קק״ל, חופים ומצפים:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-[14px] sm:text-[15px] text-gray-700 mb-5">
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

