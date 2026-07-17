import { googleReviews } from "./reviews-data";

export default function LargeTestimonial() {
  const row1 = googleReviews.slice(0, 23);
  const row2 = googleReviews.slice(23);

  const ReviewMarquee = ({ reviews, duration }: { reviews: typeof googleReviews, duration: string }) => (
    <div className="flex w-full overflow-hidden" dir="rtl">
      <div 
        className="flex shrink-0 gap-4 md:gap-6 pl-4 md:pl-6 items-center"
        style={{ animation: `marquee-rtl ${duration} linear infinite` }}
      >
        {reviews.map((review, index) => (
          <blockquote 
            key={index} 
            className="w-[280px] md:w-[360px] flex-shrink-0 bg-gradient-to-tr from-white to-gray-50 border border-gray-200 shadow-sm p-6 rounded-2xl transition duration-300 hover:shadow-md text-sm"
          >
            <div className="flex flex-row items-center gap-4 mb-3">
              <div className={`flex shrink-0 items-center justify-center w-10 h-10 rounded-full text-white font-bold text-lg ${review.color} shadow-inner`}>
                {review.initial}
              </div>
              <div className="flex flex-col text-right w-full overflow-hidden">
                <span className="font-bold text-gray-900 truncate">{review.name}</span>
                <span className="text-gray-500 text-xs">ביקורת גוגל ⭐️⭐️⭐️⭐️⭐️</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic line-clamp-4" dir="rtl" title={review.text}>
              "{review.text}"
            </p>
          </blockquote>
        ))}
      </div>
      <div 
        className="flex shrink-0 gap-4 md:gap-6 pl-4 md:pl-6 items-center"
        style={{ animation: `marquee-rtl ${duration} linear infinite` }}
        aria-hidden="true"
      >
        {reviews.map((review, index) => (
          <blockquote 
            key={'dup-'+index} 
            className="w-[280px] md:w-[360px] flex-shrink-0 bg-gradient-to-tr from-white to-gray-50 border border-gray-200 shadow-sm p-6 rounded-2xl transition duration-300 hover:shadow-md text-sm"
          >
            <div className="flex flex-row items-center gap-4 mb-3">
              <div className={`flex shrink-0 items-center justify-center w-10 h-10 rounded-full text-white font-bold text-lg ${review.color} shadow-inner`}>
                {review.initial}
              </div>
              <div className="flex flex-col text-right w-full overflow-hidden">
                <span className="font-bold text-gray-900 truncate">{review.name}</span>
                <span className="text-gray-500 text-xs">ביקורת גוגל ⭐️⭐️⭐️⭐️⭐️</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic line-clamp-4" dir="rtl" title={review.text}>
              "{review.text}"
            </p>
          </blockquote>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative py-20 bg-white overflow-hidden text-right">
      <style>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        
        /* Pause animations on hover so users can read */
        .pause-on-hover:hover > div {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-gray-50" aria-hidden="true" />
      
      <div className="relative z-10 px-6 mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          מה הלקוחות שלנו אומרים?
        </h3>
        <p className="text-center text-gray-500 max-w-2xl mx-auto">
          עשרות לקוחות מרוצים כבר בחרו בנו לאירוע שלהם ונהנו משירות אישי, ניקיון ברמה של בית מלון ואיכות ללא פשרות. הנה חלק מהביקורות האמיתיות שהשאירו לנו בגוגל.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 relative z-10 pause-on-hover">
        <ReviewMarquee reviews={row1} duration="85s" />
        <ReviewMarquee reviews={row2} duration="110s" />
      </div>

      {/* Gradient fades for the edges */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-white z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-white z-20"></div>
    </section>
  );
}
