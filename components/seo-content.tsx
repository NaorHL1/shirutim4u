import Link from 'next/link';

export default function SeoContent() {
  return (
    <section className="px-6 py-24 bg-gray-50 border-t border-gray-100" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            כל מה שצריך לדעת על שירותים ניידים מפוארים להשכרה
          </h2>
          <p className="text-[17px] md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            כאשר מתכננים אירוע בחיק הטבע, אחת הדאגות המרכזיות היא נוחיות האורחים. אנו בא.ל שירותים ניידים מבינים שאירוע מושלם דורש התייחסות לכל פרט ופרט, ולכן אנו מספקים קרונות מפוארים שמעניקים תחושה של בית מלון יוקרתי, גם באמצע היער או המדבר.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl">✨</span>
              פינוק ויוקרה אמיתיים
            </h3>
            <p className="text-[17px] text-gray-700 leading-relaxed">
              השכרת שירותים ניידים מפוארים לאירועים הפכה לסטנדרט בחתונות טבע, כנסי חברה, ואירועי בוטיק. בניגוד לתאי פלסטיק בסיסיים, השירותים הניידים שלנו מציעים מרחב ממוזג, מראות גדולות, תאורת לד נעימה, כיורים מעוצבים, מים זורמים, וסבונים יוקרתיים. תוכלו להתרשם מחלק מהעיצובים שלנו ב<Link href="/#gallery" className="text-blue-600 font-semibold hover:underline">גלריית השירותים</Link>.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl">🌍</span>
              פריסה ארצית וללא תלות בתשתיות
            </h3>
            <p className="text-[17px] text-gray-700 leading-relaxed">
              אנו מספקים שירות בפריסה ארצית. הצוות שלנו יגיע למקום ויתקין את התאים בצורה חלקה ומהירה. הקרונות שלנו עצמאיים לחלוטין ויכולים לפעול בכל תנאי שטח – ללא צורך בחיבור קבוע לתשתיות מים או ביוב. קראו עוד על <Link href="/#faq" className="text-blue-600 font-semibold hover:underline">למה לבחור בנו</Link>.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl">⚙️</span>
              איך עובד התהליך?
            </h3>
            <p className="text-[17px] text-gray-700 leading-relaxed">
              אנו מאפיינים איתכם את הצרכים: כמות מוזמנים, מיקום, משך האירוע, ודרישות מיוחדות. ביום האירוע, הצוות מגיע מבעוד מועד ומציב את הקרונות במיקום האופטימלי. בסיום האירוע, נדאג לפינוי נקי ומהיר של התאים. <Link href="/" className="text-blue-600 font-semibold hover:underline">חזרו לדף הבית</Link> לקבלת הצעת מחיר.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xl">🧼</span>
              ניקיון והיגיינה ללא פשרות
            </h3>
            <p className="text-[17px] text-gray-700 leading-relaxed">
              הנוחות וההיגיינה הם בראש סדר העדיפויות שלנו. כל תא עובר ניקיון יסודי וחיטוי לפני הגעתו לאירוע, ומאובזר במוצרי היגיינה ברמה הגבוהה ביותר. אנו מספקים איש שירות צמוד שדואג לתחזוקה ולניקיון במהלך האירוע, כך שאתם יכולים לחגוג בראש שקט.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-4">אל תתפשרו על פחות מהטוב ביותר</h3>
          <p className="text-[17px] md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
            שירותים ניידים מפוארים הם השקעה שמשתלמת ומבטיחה שהאורחים שלכם יזכרו את האירוע שלכם לטובה. צרו איתנו קשר עוד היום ונספק לכם את הפתרון המושלם. השירות ניתן 24/7 וזמין לכל סוגי האירועים, מאירועי בוטיק פרטיים ועד כנסים עסקיים.
          </p>
          <Link href="/#contact" className="inline-block bg-white text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-md text-lg">
            לקבלת הצעת מחיר מותאמת אישית
          </Link>
        </div>
      </div>
    </section>
  );
}
