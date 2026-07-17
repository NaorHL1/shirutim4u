import { googleReviews } from "./reviews-data";
import Image from "next/image";

export default function LargeTestimonial() {
  const row1 = googleReviews.slice(0, 23);
  const row2 = googleReviews.slice(23);

  const ReviewMarquee = ({ reviews, duration }: { reviews: typeof googleReviews, duration: string }) => (
    <div className="group flex w-full overflow-hidden" dir="rtl">
      <div 
        className="flex shrink-0 gap-3 md:gap-6 pl-3 md:pl-6 items-center animate-marquee-custom group-hover:[animation-play-state:paused]"
        style={{ animationDuration: duration }}
      >
        {reviews.map((review, index) => {
          const Content = (
            <blockquote 
              key={index} 
              className="w-[260px] md:w-[360px] flex-shrink-0 bg-gradient-to-tr from-white to-gray-50 border border-gray-200 shadow-sm p-4 md:p-6 rounded-2xl transition duration-300 hover:shadow-md text-sm cursor-pointer"
            >
              <div className="flex flex-row items-center gap-3 md:gap-4 mb-3">
                <div className="relative w-10 h-10 shrink-0">
                  {review.image ? (
                    <Image src={review.image} alt={review.name} fill className="rounded-full object-cover shadow-inner" sizes="40px" />
                  ) : (
                    <div className={`flex items-center justify-center w-full h-full rounded-full text-white font-bold text-lg ${review.color} shadow-inner`}>
                      {review.initial}
                    </div>
                  )}
                </div>
                <div className="flex flex-col text-right w-full overflow-hidden">
                  <span className="font-bold text-gray-900 truncate">{review.name}</span>
                  <span className="text-gray-500 text-xs">ביקורת גוגל ⭐️⭐️⭐️⭐️⭐️</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic" dir="rtl" title={review.text}>
                {review.text ? `"${review.text}"` : null}
              </p>
            </blockquote>
          );

          return review.link ? (
            <a href={review.link} target="_blank" rel="noopener noreferrer" key={index} className="block hover:opacity-95 transition-opacity">
              {Content}
            </a>
          ) : Content;
        })}
      </div>
      
      <div 
        className="flex shrink-0 gap-3 md:gap-6 pl-3 md:pl-6 items-center animate-marquee-custom group-hover:[animation-play-state:paused]"
        style={{ animationDuration: duration }}
        aria-hidden="true"
      >
        {reviews.map((review, index) => {
          const Content = (
            <blockquote 
              key={'dup-'+index} 
              className="w-[260px] md:w-[360px] flex-shrink-0 bg-gradient-to-tr from-white to-gray-50 border border-gray-200 shadow-sm p-4 md:p-6 rounded-2xl transition duration-300 hover:shadow-md text-sm cursor-pointer"
            >
              <div className="flex flex-row items-center gap-3 md:gap-4 mb-3">
                <div className="relative w-10 h-10 shrink-0">
                  {review.image ? (
                    <Image src={review.image} alt={review.name} fill className="rounded-full object-cover shadow-inner" sizes="40px" />
                  ) : (
                    <div className={`flex items-center justify-center w-full h-full rounded-full text-white font-bold text-lg ${review.color} shadow-inner`}>
                      {review.initial}
                    </div>
                  )}
                </div>
                <div className="flex flex-col text-right w-full overflow-hidden">
                  <span className="font-bold text-gray-900 truncate">{review.name}</span>
                  <span className="text-gray-500 text-xs">ביקורת גוגל ⭐️⭐️⭐️⭐️⭐️</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic" dir="rtl" title={review.text}>
                {review.text ? `"${review.text}"` : null}
              </p>
            </blockquote>
          );

          return review.link ? (
            <a href={review.link} target="_blank" rel="noopener noreferrer" key={'link-dup-'+index} className="block hover:opacity-95 transition-opacity">
              {Content}
            </a>
          ) : Content;
        })}
      </div>
    </div>
  );

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden text-right">
      <style>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        .animate-marquee-custom {
          animation-name: marquee-rtl;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-gray-50" aria-hidden="true" />
      
      <div className="relative z-10 px-4 md:px-6 mb-8 md:mb-12">
        <h3 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          מה הלקוחות שלנו אומרים?
        </h3>
        <p className="text-sm md:text-base text-center text-gray-500 max-w-2xl mx-auto">
          עשרות לקוחות מרוצים כבר בחרו בנו לאירוע שלהם ונהנו משירות אישי, ניקיון ברמה של בית מלון ואיכות ללא פשרות. הנה חלק מהביקורות האמיתיות שהשאירו לנו בגוגל.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:gap-8 relative z-10">
        <ReviewMarquee reviews={row1} duration="85s" />
        <ReviewMarquee reviews={row2} duration="110s" />
      </div>

      {/* Gradient fades for the edges */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-white z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-white z-20"></div>
    </section>
  );
}
