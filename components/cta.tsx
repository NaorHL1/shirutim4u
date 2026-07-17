'use client';
import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section id="contact" className="bg-white py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-2xl rounded-3xl border border-gray-800 shadow-[0_8px_40px_rgba(0,0,0,0.12)] bg-[#111111] bg-[radial-gradient(ellipse_at_top,_#222,_#000_80%)] p-8 sm:p-12 relative overflow-hidden">
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 rounded-3xl border border-white/5 ring-1 ring-inset ring-white/10 pointer-events-none" aria-hidden="true" />

        <h2 dir="rtl" className="text-3xl md:text-4xl font-extrabold text-white text-center mb-3 relative z-10">
          מחפש פתרון יוקרתי לאירוע?
        </h2>
        <p dir="rtl" className="text-base text-gray-300 text-center mb-8 relative z-10 font-medium">
          השאר פרטים ונדאג לחזור אליך בהקדם עם הצעה משתלמת:
        </p>

        {/* Contact Form */}
        <form
          dir="rtl"
          action="https://formspree.io/f/mnjepzrq" // <-- שים כאן את ה-ID שלך
          method="POST"
          className="w-full flex flex-col gap-4 relative z-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* שם מלא */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="full-name" className="text-right text-white font-semibold text-[15px]">שם מלא</label>
              <input
                id="full-name"
                type="text"
                name="full-name" // חובה name
                placeholder="הכנס שם מלא"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-right text-white font-medium placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300"
                required
              />
            </div>

            {/* מספר טלפון */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="phone" className="text-right text-white font-semibold text-[15px]">מספר נייד</label>
              <input
                id="phone"
                type="text"
                name="phone" // חובה name
                inputMode="numeric"
                pattern="[0-9]*"
                dir="rtl"
                placeholder="05X-XXXXXXX"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-right text-white font-medium placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300"
                maxLength={10}
                required
                onInput={(e) => {
                  const input = e.target as HTMLInputElement;
                  input.value = input.value.replace(/[^0-9]/g, '');
                }}
              />
            </div>
          </div>

          {/* הודעה (רשות) */}
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="message" className="text-right text-white font-semibold text-[15px]">הודעה</label>
            <textarea
              id="message"
              name="message" // חובה name
              placeholder="כתוב הודעה (לא חובה)"
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-right text-white font-medium placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* כפתור שליחה */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-white text-gray-900 font-bold py-3.5 rounded-xl shadow-lg hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-lg tracking-wide mt-2"
          >
            שלח לי הצעת מחיר עכשיו
          </button>
        </form>

        {/* Contact Info */}
        <div className="text-center mt-6 pt-5 border-t border-white/10 relative z-10">
          <p className="text-gray-400 text-sm mb-2">או דברו איתנו ישירות:</p>
          <div className="text-xl font-bold flex justify-center items-center gap-4">
            <a href="tel:+972526920346" aria-label="התקשרו אלינו למספר 052-6920346" className="text-white hover:text-gray-300 transition-colors">📱 052-6920346</a>
          </div>
          <a
            href="https://wa.me/972526920346"
            aria-label="שלחו לנו הודעה בווטסאפ"
            className="inline-block mt-4 px-6 py-2.5 text-[15px] bg-[#25D366] rounded-full text-white font-semibold hover:bg-[#20bd5a] transition transform hover:scale-105 shadow-md"
          >
            שלחו הודעת וואטסאפ
          </a>
        </div>
      </div>
    </section>
  );
}
