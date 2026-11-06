import React from 'react';

const AddContactButton = () => {
  return (
    <>
      <a
        href="tel:+972526920346"
        aria-label="התקשר עכשיו ל-052-6920346"
        className="group inline-flex md:hidden items-center gap-3 rounded-full bg-gradient-to-b from-zinc-800 via-zinc-900 to-black px-7 py-3.5 text-white font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.25)] ring-1 ring-white/15 hover:from-zinc-700 hover:to-zinc-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer tracking-tight"
      >
        <span className="text-blue-400 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
          &larr;
        </span>
        <span>התקשר עכשיו</span>
      </a>
      <a
        href="#contact"
        aria-label="השאר פרטים ליצירת קשר"
        className="group hidden md:inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-zinc-800 via-zinc-900 to-black px-7 py-3.5 text-white font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.25)] ring-1 ring-white/15 hover:from-zinc-700 hover:to-zinc-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer tracking-tight"
      >
        <span className="text-blue-400 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
          &larr;
        </span>
        <span>התקשר עכשיו</span>
      </a>
    </>
  );
};

export default AddContactButton;

