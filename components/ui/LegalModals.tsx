import React from 'react';
import { ReactNode } from "react";


import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

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
    title: "תקנון האתר ותנאי שימוש",
    body: (
      <div className="space-y-4 text-sm leading-7 text-gray-700 max-h-[60vh] overflow-y-auto pr-2 rtl:text-right">
        <p>
          אתר זה (להלן: "האתר") מופעל על ידי מפעיל האתר ומיועד להצגת מידע על שירותי השכרת שירותים ניידים. השימוש באתר כפוף לתנאים אלה ולהוראות הדין בישראל. השימוש באתר מהווה הסכמה לתנאים אלו.
        </p>
        <h4 className="font-semibold text-gray-900">1. שימוש באתר</h4>
        <p>
          השימוש באתר הוא אישי ובלתי מסחרי. אין לעשות באתר שימוש בלתי חוקי או מפר, לרבות העלאת תכנים פוגעניים או הפעלת תוכנות לא מורשות.
        </p>
        <h4 className="font-semibold text-gray-900">2. היעדר פעילות מסחרית</h4>
        <p>
          האתר אינו מאפשר רכישות מקוונות או סליקה. כל ההתקשרות עם מפעיל האתר מתבצעת ישירות, מחוץ למסגרת האתר.
        </p>
        <h4 className="font-semibold text-gray-900">3. מסירת פרטים בטופס</h4>
        <p>
          המשתמש רשאי להזין שם מלא ומספר טלפון באופן ידני. הפרטים ישמשו ליצירת קשר בלבד ולא יועברו לצדדים שלישיים.
        </p>
        <h4 className="font-semibold text-gray-900">4. קניין רוחני</h4>
        <p>
          כל תכני האתר מוגנים בזכויות יוצרים ואין להעתיקם או להשתמש בהם ללא אישור מראש ובכתב.
        </p>
        <h4 className="font-semibold text-gray-900">5. אחריות מוגבלת</h4>
        <p>
          התכנים באתר ניתנים "כפי שהם" (AS-IS). מפעיל האתר אינו אחראי לדיוק או שלמות המידע באתר ולא יישא באחריות לכל נזק שייגרם עקב שימוש במידע.
        </p>
        <h4 className="font-semibold text-gray-900">6. קישורים לאתרים חיצוניים</h4>
        <p>
          האתר עשוי לכלול קישורים לאתרים חיצוניים. אין למפעיל האתר שליטה על אתרים אלו והוא לא יישא באחריות לתוכנם.
        </p>
        <h4 className="font-semibold text-gray-900">7. פרטיות ומידע אנליטי</h4>
        <p>
          נאסף מידע אנונימי באמצעות Google Analytics לצרכים סטטיסטיים. בנוסף, נאספים רק שם מלא ומספר טלפון שמוזנים ידנית על ידי המשתמש.
        </p>
        <h4 className="font-semibold text-gray-900">8. שינויים בתנאים</h4>
        <p>
          מפעיל האתר רשאי לעדכן את התנאים בכל עת. המשך שימוש באתר מהווה הסכמה לתנאים המעודכנים.
        </p>
        <h4 className="font-semibold text-gray-900">9. דין וסמכות שיפוט</h4>
        <p>
          על תנאים אלו יחולו דיני מדינת ישראל. סמכות השיפוט הבלעדית נתונה לבתי המשפט במחוז תל אביב.
        </p>
      </div>
    ),
  },
  privacy: {
    title: "מדיניות פרטיות",
    body: (
      <div className="space-y-4 text-sm leading-7 text-gray-700 max-h-[60vh] overflow-y-auto pr-2 rtl:text-right">
        <p>
          פרטיות המשתמשים חשובה לנו. באתר נאסף מידע סטטיסטי אנונימי (כגון כתובת IP ונתוני גלישה) באמצעות Google Analytics.
        </p>
        <h4 className="font-semibold text-gray-900">1. מידע שנאסף</h4>
        <p>
          שם מלא ומספר טלפון מוזנים ידנית על ידי המשתמש בטופס יצירת קשר. מידע נוסף נאסף באופן אנונימי באמצעות עוגיות לצורך שיפור האתר.
        </p>
        <h4 className="font-semibold text-gray-900">2. שימוש במידע</h4>
        <p>
          המידע ישמש ליצירת קשר בלבד ולהפקת סטטיסטיקות אנונימיות. לא נעשה שימוש מסחרי במידע ולא נעשה בו שימוש לצורך פרופיל אישי.
        </p>
        <h4 className="font-semibold text-gray-900">3. אבטחת מידע</h4>
        <p>
          המידע נשמר באופן מאובטח בהתאם לדרישות החוק. אנו נוקטים באמצעים סבירים להגן על המידע.
        </p>
        <h4 className="font-semibold text-gray-900">4. זכויות המשתמש</h4>
        <p>
          ניתן לפנות אלינו לבקשת עיון, תיקון או מחיקה של המידע. אין שימוש במידע מעבר למה שתואר לעיל.
        </p>
        <h4 className="font-semibold text-gray-900">5. עוגיות</h4>
        <p>
          האתר עושה שימוש בעוגיות בסיסיות לצורך תפקודו התקין ושיפור חווית המשתמש. ניתן לשלוט בהגדרות אלו דרך הדפדפן.
        </p>
        <h4 className="font-semibold text-gray-900">6. יצירת קשר</h4>
        <p>
          לפניות בנושאי פרטיות ניתן ליצור קשר דרך טופס יצירת הקשר באתר או בדוא"ל: shirutim4u@gmail.com
        </p>
      </div>
    ),
  },
  accessibility: {
    title: "הצהרת נגישות",
    body: (
      <div className="space-y-4 text-sm leading-7 text-gray-700 max-h-[60vh] overflow-y-auto pr-2 rtl:text-right">
        <p>
          אנו פועלים להנגיש את האתר בהתאם לתקן הישראלי ת"י 5568 (בהתאם ל־WCAG 2.0 AA).
        </p>
        <h4 className="font-semibold text-gray-900">1. תוסף MicAccessTool</h4>
        <p>
          באתר מוטמע תוסף MicAccessTool המאפשר התאמות נגישות מגוונות כגון: שינוי גודל טקסט, שינוי ניגודיות, הדגשת קישורים, התאמות עבור קוראי מסך, ניווט מקלדת ועוד.
        </p>
        <h4 className="font-semibold text-gray-900">2. הפעלת התפריט</h4>
        <p>
          ניתן להפעיל את תפריט הנגישות באמצעות לחיצה על סמל הנגישות באתר או על ידי קיצור מקלדת Ctrl+F2.
        </p>
        <h4 className="font-semibold text-gray-900">3. שיפור מתמיד</h4>
        <p>
          אנו שואפים להנגיש את כלל רכיבי האתר. במידה ונתקלתם בבעיה, נשמח לקבל פניה ולפעול לתיקון.
        </p>
        <h4 className="font-semibold text-gray-900">4. יצירת קשר בנושאי נגישות</h4>
        <p>
          לפניות בנושא נגישות ניתן לפנות בדוא"ל: shirutim4u@gmail.com או בטלפון: 052-6525185
        </p>
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
          <div className="fixed inset-0 bg-black/40" />
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
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-right align-middle shadow-xl transition-all">
                <Dialog.Title className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
                  {legalContent[type].title}
                </Dialog.Title>
                {legalContent[type].body}
                <div className="mt-6 text-center">
                  <button
                    onClick={onClose}
                    className="cursor-pointer inline-flex justify-center rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none"
                  >
                    סגור
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
