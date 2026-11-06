import React, { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";

// --------------------- Types ---------------------
export type LegalType = "terms" | "privacy" | "accessibility";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: LegalType;
}

// --------------------- Data ----------------------
const legalContent: Record<LegalType, { title: string; body: ReactNode }> = {
  terms: {
    title: "תקנון האתר ותנאי שימוש – א.ל שירותים ניידים",
    body: (
      <div className="space-y-4 text-sm leading-7 text-gray-700 max-h-[62vh] overflow-y-auto pl-2 text-right">
        <p className="text-xs text-gray-500">עודכן לאחרונה: נובמבר 2026</p>
        <p>
          ברוכים הבאים לאתר <strong>shirutim4u.com</strong> (להלן: &quot;האתר&quot;), המופעל על ידי <strong>א.ל שירותים ניידים</strong> (להלן: &quot;מפעיל האתר&quot; או &quot;החברה&quot;). האתר מיועד להצגת מידע מקצועי על שירותי השכרת שירותים ניידים מפוארים ותאי שירותים לאירועים ולשטח, וליצירת קשר לצורך קבלת ייעוץ והצעת מחיר. הגלישה והשימוש באתר מהווים הסכמה לתנאים המפורטים בתקנון זה.
        </p>

        <h4 className="font-bold text-gray-900">1. שימוש מותר באתר</h4>
        <p>
          השימוש באתר מיועד לצרכים פרטיים או עסקיים חוקיים של התעניינות בשירותי החברה. אין לעשות באתר כל שימוש בלתי חוקי, לרבות העתקה, סריקה אוטומטית (Scraping), הפצת קוד זדוני או פגיעה בפעילותו התקינה של האתר.
        </p>

        <h4 className="font-bold text-gray-900">2. מידע מקצועי והצעות מחיר</h4>
        <p>
          התכנים, התמונות, הסרטונים והמדריכים המופיעים באתר נועדו להתרשמות כללית ולמתן מידע מקצועי בלבד, ואינם מהווים הצעה מחייבת לכריתת חוזה. האתר אינו מבצע סליקה או רכישה מקוונת. כל הזמנת שירות, תיאום תאריך, מפרט תאים ותמחור סופי ייקבעו אך ורק בהתקשרות ישירה מול נציגי א.ל שירותים ניידים ובהתאם למאפייני האירוע, מיקום ההצבה ותנאי השטח.
        </p>

        <h4 className="font-bold text-gray-900">3. השארת פרטים ויצירת קשר</h4>
        <p>
          המשתמש רשאי להשאיר פרטים בטופס יצירת הקשר באתר (שם מלא, מספר טלפון והודעה) או לפנות ישירות בטלפון ובוואטסאפ. המשתמש מצהיר כי הפרטים שמסר הינם נכונים ומדויקים. מסירת הפרטים מהווה הסכמה לכך שנציג מטעם א.ל שירותים ניידים יחזור אל המשתמש בטלפון או בהודעה לצורך מענה לפנייתו ומתן הצעת מחיר.
        </p>

        <h4 className="font-bold text-gray-900">4. קניין רוחני וזכויות יוצרים</h4>
        <p>
          מלוא זכויות היוצרים והקניין הרוחני באתר – לרבות תמונות תאי השירותים, סרטונים, לוגו החברה, עיצוב האתר, טקסטים ומדריכים מקצועיים – שייכים ל-א.ל שירותים ניידים (או לצדדים שלישיים שהתירו לחברה להשתמש בהם). אין להעתיק, לשכפל, להפיץ או לפרסם כל חלק מהאתר ללא אישור מראש ובכתב ממפעיל האתר.
        </p>

        <h4 className="font-bold text-gray-900">5. הגבלת אחריות</h4>
        <p>
          האתר ותכניו ניתנים לשימוש כפי שהם (&quot;AS-IS&quot;). החברה עושה מאמץ רב לשמור על דיוק המידע באתר, אך ייתכנו שינויים במפרטי היחידות או בזמינותן. מפעיל האתר לא יישא באחריות לכל נזק ישיר או עקיף שייגרם כתוצאה מהסתמכות על מידע כללי באתר ללא תיאום פרטני מראש מול החברה.
        </p>

        <h4 className="font-bold text-gray-900">6. קישורים חיצוניים ורשתות חברתיות</h4>
        <p>
          האתר כולל קישורים לעמודי החברה ברשתות החברתיות (פייסבוק, אינסטגרם, טיקטוק), לוואטסאפ ולביקורות לקוחות בגוגל. השימוש בפלטפורמות חיצוניות אלו כפוף לתנאי השימוש של אותן פלטפורמות.
        </p>

        <h4 className="font-bold text-gray-900">7. דין, סמכות שיפוט ויצירת קשר</h4>
        <p>
          על תקנון זה יחולו דיני מדינת ישראל בלבד, וסמכות השיפוט הבלעדית נתונה לבתי המשפט המוסמכים במחוז מרכז/תל אביב. לכל שאלה או בירור ניתן לפנות אלינו בטלפון: <strong>052-6920346</strong> (ליאב) / <strong>052-6525185</strong> (אושרי) או בדוא״ל: <strong>shirutim4u@gmail.com</strong>.
        </p>
      </div>
    ),
  },
  privacy: {
    title: "מדיניות פרטיות – א.ל שירותים ניידים",
    body: (
      <div className="space-y-4 text-sm leading-7 text-gray-700 max-h-[62vh] overflow-y-auto pl-2 text-right">
        <p className="text-xs text-gray-500">עודכן לאחרונה: נובמבר 2026</p>
        <p>
          <strong>א.ל שירותים ניידים</strong> (להלן: &quot;החברה&quot;) מכבדת את פרטיות הגולשים באתר <strong>shirutim4u.com</strong> ופועלת בהתאם להוראות חוק הגנת הפרטיות, התשמ״א-1981 (כולל תיקון 13). מסמך זה מפרט איזה מידע נאסף באתר וכיצד נעשה בו שימוש.
        </p>

        <h4 className="font-bold text-gray-900">1. איזה מידע אנו אוספים?</h4>
        <ul className="list-disc list-inside space-y-1.5">
          <li>
            <strong>מידע שנמסר ביוזמת המשתמש:</strong> כאשר אתם משאירים פרטים בטופס יצירת הקשר באתר, נאספים הפרטים שהזנתם ידנית: שם מלא, מספר טלפון נייד ותוכן ההודעה (אם הוזנה). מסירת המידע תלויה ברצונכם החופשי, אך ללא שם ומספר טלפון לא נוכל לחזור אליכם עם הצעת מחיר.
          </li>
          <li>
            <strong>מידע טכני וסטטיסטי אנונימי:</strong> בעת הגלישה באתר נאסף מידע סטטיסטי לא מזהה (כגון סוג דפדפן, מכשיר, עמודים שנצפו ומשך השהייה) באמצעות כלי המדידה הרשמי <strong>Google Analytics</strong>, לצורך ניתוח תנועת הגולשים ושיפור חוויית המשתמש באתר.
          </li>
        </ul>

        <h4 className="font-bold text-gray-900">2. מטרות השימוש במידע</h4>
        <p>
          הפרטים האישיים שתמסרו בטופס יצירת הקשר ישמשו אך ורק לצורך יצירת קשר חוזר, מתן ייעוץ מקצועי והפקת הצעת מחיר להשכרת שירותים ניידים. איננו שולחים הודעות ספאם ואיננו מצרפים את פרטיכם לרשימות תפוצה פרסומיות.
        </p>

        <h4 className="font-bold text-gray-900">3. העברת מידע לצדדים שלישיים</h4>
        <p>
          החברה אינה מוכרת, אינה משכירה ואינה מעבירה את פרטיכם האישיים לצדדים שלישיים למטרות מסחריות. תפעול טופס יצירת הקשר מתבצע באמצעות תשתית טכנולוגית מאובטחת (Formspree) המעבירה את הפנייה ישירות לנציגי החברה, או כאשר הדבר נדרש על פי צו שיפוטי/הוראת חוק.
        </p>

        <h4 className="font-bold text-gray-900">4. קבצי עוגיות (Cookies)</h4>
        <p>
          האתר עושה שימוש בעוגיות (Cookies) חיוניות לתפקודו התקין (כגון שמירת העדפות נגישות) ובעוגיות סטטיסטיות של Google Analytics. באפשרותכם לחסום או למחוק עוגיות בכל עת דרך הגדרות הדפדפן שלכם.
        </p>

        <h4 className="font-bold text-gray-900">5. אבטחת מידע</h4>
        <p>
          האתר פועל תחת פרוטוקול הצפנה מאובטח (SSL / HTTPS), והגישה לפרטי הפניות שמורה לנציגי א.ל שירותים ניידים המורשים בלבד.
        </p>

        <h4 className="font-bold text-gray-900">6. זכות עיון, תיקון ומחיקה ויצירת קשר</h4>
        <p>
          על פי חוק הגנת הפרטיות, כל אדם זכאי לעיין במידע שעליו, או לבקש את תיקונו או מחיקתו. לכל פנייה בנושא פרטיות ניתן ליצור קשר בדוא״ל: <strong>shirutim4u@gmail.com</strong> או בטלפון: <strong>052-6920346</strong>.
        </p>
      </div>
    ),
  },
  accessibility: {
    title: "הצהרת נגישות – א.ל שירותים ניידים",
    body: (
      <div className="space-y-4 text-sm leading-7 text-gray-700 max-h-[62vh] overflow-y-auto pl-2 text-right">
        <p className="text-xs text-gray-500">עודכן לאחרונה: נובמבר 2026</p>
        <p>
          ב-<strong>א.ל שירותים ניידים</strong> אנו רואים חשיבות עליונה במתן שירות שוויוני, מכבד ונגיש לכלל הלקוחות והגולשים, לרבות אנשים עם מוגבלות. אנו משקיעים משאבים בהנגשת האתר <strong>shirutim4u.com</strong> בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013 ובהתאם לתקן הישראלי <strong>ת״י 5568</strong> המבוסס על הנחיות <strong>WCAG 2.0 ברמת AA</strong>.
        </p>

        <h4 className="font-bold text-gray-900">1. התאמות הנגישות שבוצעו באתר</h4>
        <ul className="list-disc list-inside space-y-1.5">
          <li>מבנה סמנטי ברור והיררכיית כותרות תקנית (H1, H2, H3) להתמצאות קלה עם קוראי מסך.</li>
          <li>תמיכה בניווט מקלדת מלא (באמצעות מקשי Tab, Shift+Tab, Enter ו-Escape לסגירת חלונות).</li>
          <li>הוספת תיאורים חלופיים (Alt) לתמונות ותוויות נגישות (aria-label) לכפתורים ולקישורים.</li>
          <li>עיצוב רספונסיבי מלא המותאם למחשבים, טאבלטים וטלפונים ניידים בכל גודל מסך, כולל תמיכה בהגדלת תצוגה (Zoom) עד 200%.</li>
          <li>ניגודיות צבעים ברורה וגופן עברי קריא וחד (Rubik).</li>
        </ul>

        <h4 className="font-bold text-gray-900">2. סרגל הנגישות באתר (MicAccessTool)</h4>
        <p>
          בפינה השמאלית התחתונה של האתר מוטמע כפתור נגישות ייעודי (ניתן להפעלה גם באמצעות קיצור המקלדת <strong>Ctrl + F2</strong>). סרגל הנגישות מאפשר בין היתר:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>הגדלה והקטנה של גודל הטקסט והחלפה לפונט קריא.</li>
          <li>שינוי ניגודיות צבעים (ניגודיות גבוהה, ניגודיות הפוכה, תצוגת מונוכרום/גווני אפור).</li>
          <li>הדגשת קישורים וכותרות ברחבי האתר.</li>
          <li>הגדלת סמן העכבר (שחור או לבן) והצגת תיאורי תמונות.</li>
          <li>ביטול הבהובים ואנימציות ואיפוס מיידי של הגדרות הנגישות.</li>
        </ul>

        <h4 className="font-bold text-gray-900">3. נגישות השירות והמענה האנושי</h4>
        <p>
          החברה מספקת שירות בפריסה ארצית עד למיקום האירוע או הפרויקט (ללא צורך בהגעה פיזית למשרדי החברה). ניתן לקבל ייעוץ, מידע והצעת מחיר במגוון ערוצים נגישים לבחירתכם: שיחה טלפונית, הודעת וואטסאפ כתובה או מוקלטת, דואר אלקטרוני או טופס האתר.
        </p>

        <h4 className="font-bold text-gray-900">4. פניות ורכז נגישות</h4>
        <p>
          אנו ממשיכים לפעול לשיפור מתמיד של נגישות האתר. אם נתקלתם בקושי בגלישה או שיש לכם בקשה להתאמת נגישות, נשמח לעמוד לרשותכם ולטפל בפנייה במהירות:
        </p>
        <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 text-xs sm:text-sm space-y-1">
          <div><strong>איש קשר לנושאי נגישות:</strong> ליאב</div>
          <div><strong>טלפון / וואטסאפ:</strong> <a href="tel:+972526920346" className="text-blue-600 font-semibold hover:underline">052-6920346</a></div>
          <div><strong>דוא״ל:</strong> <a href="mailto:shirutim4u@gmail.com" className="text-blue-600 font-semibold hover:underline">shirutim4u@gmail.com</a></div>
        </div>
      </div>
    ),
  },
};

// --------------------- Component -----------------
export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose} dir="rtl">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-3xl bg-white p-6 sm:p-8 text-right align-middle shadow-2xl border border-gray-200 transition-all">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
                  <Dialog.Title className="text-lg sm:text-xl font-extrabold text-gray-900">
                    {legalContent[type].title}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    aria-label="סגור חלון"
                    className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 flex items-center justify-center transition cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                {legalContent[type].body}
                <div className="mt-6 pt-3 border-t border-gray-100 text-center">
                  <button
                    onClick={onClose}
                    className="cursor-pointer inline-flex justify-center rounded-xl bg-gradient-to-b from-zinc-700 via-zinc-900 to-black px-6 py-2.5 text-sm font-bold text-white shadow-md hover:from-zinc-600 hover:to-zinc-900 transition-all focus:outline-none"
                  >
                    סגור חלון
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

