import Link from 'next/link';

export default function SeoContent() {
  return (
    <section className="px-6 py-16 bg-gray-50 border-t border-gray-100" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            כל מה שצריך לדעת על שירותים ניידים מפוארים להשכרה
          </h2>
          <p className="text-base md:text-[17px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            כאשר מתכננים אירוע בחיק הטבע, אחת הדאגות המרכזיות היא נוחיות האורחים. אנו בא.ל שירותים ניידים מבינים שאירוע מושלם דורש התייחסות לכל פרט ופרט, ולכן אנו מספקים קרונות מפוארים שמעניקים תחושה של בית מלון יוקרתי, גם באמצע היער או המדבר.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-base">✨</span>
              פינוק ויוקרה אמיתיים
            </h3>
            <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">
              השכרת שירותים ניידים מפוארים לאירועים הפכה לסטנדרט בחתונות טבע, כנסי חברה, ואירועי בוטיק. בניגוד לתאי פלסטיק בסיסיים, השירותים הניידים שלנו מציעים מרחב ממוזג, מראות גדולות, תאורת לד נעימה, כיורים מעוצבים, מים זורמים, וסבונים יוקרתיים. תוכלו להתרשם מחלק מהעיצובים שלנו ב<Link href="/#gallery" className="text-blue-600 font-semibold hover:underline">גלריית השירותים</Link>.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-base">🌍</span>
              פריסה ארצית וללא תלות בתשתיות
            </h3>
            <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">
              אנו מספקים שירות בפריסה ארצית. הצוות שלנו יגיע למקום ויתקין את התאים בצורה חלקה ומהירה. הקרונות שלנו עצמאיים לחלוטין ויכולים לפעול בכל תנאי שטח – ללא צורך בחיבור קבוע לתשתיות מים או ביוב. קראו עוד על <Link href="/#faq" className="text-blue-600 font-semibold hover:underline">למה לבחור בנו</Link>.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-base">⚙️</span>
              איך עובד התהליך?
            </h3>
            <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">
              אנו מאפיינים איתכם את הצרכים: כמות מוזמנים, מיקום, משך האירוע, ודרישות מיוחדות. ביום האירוע, הצוות מגיע מבעוד מועד ומציב את הקרונות במיקום האופטימלי. בסיום האירוע, נדאג לפינוי נקי ומהיר של התאים. <Link href="/" className="text-blue-600 font-semibold hover:underline">חזרו לדף הבית</Link> לקבלת הצעת מחיר.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-base">🧼</span>
              ניקיון והיגיינה ללא פשרות
            </h3>
            <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">
              הנוחות וההיגיינה הם בראש סדר העדיפויות שלנו. כל תא עובר ניקיון יסודי וחיטוי לפני הגעתו לאירוע, ומאובזר במוצרי היגיינה ברמה הגבוהה ביותר. אנו מספקים איש שירות צמוד שדואג לתחזוקה ולניקיון במהלך האירוע, כך שאתם יכולים לחגוג בראש שקט.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-xl rounded-3xl border border-gray-800 shadow-[0_8px_40px_rgba(0,0,0,0.12)] bg-[#111111] bg-[radial-gradient(ellipse_at_top,_#222,_#000_80%)] p-8 md:p-10 text-center relative overflow-hidden text-white">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 rounded-3xl border border-white/5 ring-1 ring-inset ring-white/10 pointer-events-none" aria-hidden="true" />
          
          <h3 className="text-xl md:text-2xl font-extrabold mb-3 relative z-10">אל תתפשרו על פחות מהטוב ביותר</h3>
          <p className="text-[15px] md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6 relative z-10 font-medium">
            שירותים ניידים מפוארים הם השקעה שמשתלמת ומבטיחה שהאורחים שלכם יזכרו את האירוע שלכם לטובה. צרו איתנו קשר עוד היום ונספק לכם את הפתרון המושלם. השירות ניתן 24/7 וזמין לכל סוגי האירועים, מאירועי בוטיק פרטיים ועד כנסים עסקיים.
          </p>
          <Link href="/#contact" className="relative z-10 inline-block bg-white text-gray-900 font-bold px-8 py-3 rounded-xl hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md text-[15px] md:text-base">
            לקבלת הצעת מחיר מותאמת אישית
          </Link>
        </div>
      </div>
    </section>
  );
}
