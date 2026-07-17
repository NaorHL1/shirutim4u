'use client';
import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section id="contact" className="bg-white py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-gray-300 shadow-[0_8px_40px_rgba(0,0,0,0.1)] bg-black bg-[radial-gradient(circle_at_top_left,_#1f1f1f,_#0c0c0c_80%)] p-5 sm:p-10 relative overflow-hidden">
        {/* Futuristic Border Glow */}
        <div className="absolute inset-0 rounded-[2rem] border border-blue-300/10 ring-1 ring-inset ring-blue-400/10 blur-[2px] pointer-events-none" aria-hidden="true" />

        <h2 dir="rtl" className="text-3xl md:text-4xl font-extrabold text-white text-center mb-4">
          מחפש פתרון יוקרתי ונוח לאירוע שלך?
        </h2>
        <p dir="rtl" className="text-gray-300 text-center mb-8">
          השאר פרטים ונדאג לחזור אליך בהקדם עם הצעה משתלמת במיוחד:
        </p>

        {/* Contact Form */}
        <form
          dir="rtl"
          action="https://formspree.io/f/xyzjyazl" // <-- שים כאן את ה-ID שלך
          method="POST"
          className="space-y-2 max-w-md mx-auto"
        >
          {/* שם מלא */}
          <div className="flex flex-col space-y-1">
            <label className="text-right text-white font-bold text-sm">שם מלא</label>
            <input
              type="text"
              name="full-name" // חובה name
              placeholder="שם מלא"
              className="w-full p-3 sm:p-4 rounded-xl bg-gray-100 text-right text-black font-bold placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
              required
            />
          </div>

          {/* מספר טלפון */}
          <div className="flex flex-col space-y-1">
            <label className="text-right text-white font-bold text-sm">מספר נייד</label>
            <input
              type="text"
              name="phone" // חובה name
              inputMode="numeric"
              pattern="[0-9]*"
              dir="rtl"
              placeholder="מספר נייד"
              className="w-full p-3 sm:p-4 rounded-xl bg-gray-100 text-right text-black font-bold placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
              maxLength={10}
              required
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                input.value = input.value.replace(/[^0-9]/g, '');
              }}
            />
          </div>

          {/* הודעה (רשות) */}
          <div className="flex flex-col space-y-1">
            <label className="text-right text-white font-bold text-sm">הודעה</label>
            <textarea
              name="message" // חובה name
              placeholder="הודעה (לא חובה)"
              rows={4}
              className="w-full p-3 sm:p-4 rounded-xl bg-gray-100 text-right text-black font-bold placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
            ></textarea>
          </div>

          {/* כפתור שליחה */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-gradient-to-r from-white to-gray-100 text-gray-900 font-bold py-3 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-gray-200 hover:to-white hover:scale-105 active:scale-95 transition-all duration-300 border border-gray-300 text-lg tracking-wide mt-4"
          >
            שלח לי הצעת מחיר עכשיו
          </button>
        </form>

        {/* Contact Info */}
        <div className="text-center mt-4 sm:mt-10">
          <p className="text-gray-100 text-lg mb-2">:או דברו איתנו ישירות</p>
          <div className="text-xl sm:text-lg font-semibold flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 text-center">
            <a href="tel:+972526920346" className="text-cyan-400 hover:underline">📱052-6920346</a>
          </div>
          <a
            href="https://wa.me/972526920346"
            className="text-xl sm:text-base inline-block mt-6 px-6 py-3 bg-green-500 rounded-full text-white font-semibold hover:bg-green-600 transition transform hover:scale-105 shadow-md"
          >
            שלחו לנו הודעת וואטסאפ
          </a>
        </div>
      </div>
    </section>
  );
}
