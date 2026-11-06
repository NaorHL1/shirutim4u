import { googleReviews } from "./reviews-data";

export default function LargeTestimonial() {
  // Keep each marquee strip well below iOS WebKit's 16,384px Metal texture limit (10 cards * ~272px * 3x Retina = ~8,160px)
  const validReviews = googleReviews.filter((r) => r.text && r.text.trim().length > 0);
  const row1 = validReviews.slice(0, 10);
  const row2 = validReviews.slice(10, 20);

  const ReviewCard = ({
    review,
    keyPrefix,
  }: {
    review: (typeof googleReviews)[number];
    keyPrefix: string;
  }) => {
    const Content = (
      <blockquote className="w-[250px] md:w-[340px] flex-shrink-0 bg-gradient-to-tr from-white to-gray-50 border border-gray-200 shadow-sm p-4 md:p-6 rounded-2xl transition duration-300 hover:shadow-md text-[15px] cursor-pointer">
        <div className="flex flex-row items-center gap-3 md:gap-4 mb-3">
          <div className="relative w-10 h-10 shrink-0">
            {review.image ? (
              <img
                src={review.image}
                alt={review.name}
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="w-10 h-10 rounded-full object-cover shadow-inner"
              />
            ) : (
              <div
                className={`flex items-center justify-center w-full h-full rounded-full text-white font-bold text-lg ${review.color} shadow-inner`}
              >
                {review.initial}
              </div>
            )}
          </div>
          <div className="flex flex-col text-right w-full overflow-hidden">
            <span className="font-bold text-gray-900 truncate">{review.name}</span>
            <span className="text-gray-500 text-sm">ביקורת גוגל ⭐️⭐️⭐️⭐️⭐️</span>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed italic" dir="rtl" title={review.text}>
          {review.text ? `"${review.text}"` : null}
        </p>
      </blockquote>
    );

    return review.link ? (
      <a
        href={review.link}
        target="_blank"
        rel="noopener noreferrer"
        key={keyPrefix}
        className="block hover:opacity-95 transition-opacity"
      >
        {Content}
      </a>
    ) : (
      <div key={keyPrefix}>{Content}</div>
    );
  };

  const ReviewMarquee = ({
    reviews,
    duration,
  }: {
    reviews: typeof googleReviews;
    duration: string;
  }) => (
    <div className="group flex w-full overflow-hidden" dir="rtl">
      <div
        className="flex shrink-0 gap-3 md:gap-6 pl-3 md:pl-6 items-center animate-marquee-custom group-hover:[animation-play-state:paused]"
        style={{ animationDuration: duration }}
      >
        {reviews.map((review, index) => (
          <ReviewCard key={`orig-${index}`} review={review} keyPrefix={`orig-${index}`} />
        ))}
      </div>

      <div
        className="flex shrink-0 gap-3 md:gap-6 pl-3 md:pl-6 items-center animate-marquee-custom group-hover:[animation-play-state:paused]"
        style={{ animationDuration: duration }}
        aria-hidden="true"
      >
        {reviews.map((review, index) => (
          <ReviewCard key={`dup-${index}`} review={review} keyPrefix={`dup-${index}`} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden text-right">
      <style>{`
        @keyframes marquee-rtl {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(100%, 0, 0); }
        }
        .animate-marquee-custom {
          animation-name: marquee-rtl;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-gray-50" aria-hidden="true" />

      <div className="relative z-10 px-4 md:px-6 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          מה הלקוחות שלנו אומרים?
        </h2>
        <p className="text-[15px] md:text-base text-center text-gray-500 max-w-2xl mx-auto">
          עשרות לקוחות מרוצים כבר בחרו בנו לאירוע שלהם ונהנו משירות אישי, ניקיון ברמה של בית מלון ואיכות ללא פשרות. הנה חלק מהביקורות האמיתיות שהשאירו לנו בגוגל.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:gap-8 relative z-10">
        <ReviewMarquee reviews={row1} duration="45s" />
        <ReviewMarquee reviews={row2} duration="55s" />
      </div>

      {/* Gradient fades for the edges */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-white z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-white z-20"></div>
    </section>
  );
}

