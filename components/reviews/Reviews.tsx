const reviews = [
  {
    name: "Shelly R.",
    role: "Plant Lover",
    rating: 5,
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier! The packaging was perfect and quality exceeded all expectations.",
  },
  {
    name: "Lula Rolfson",
    role: "Interior Designer",
    rating: 5,
    text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    name: "Carol Huels",
    role: "Nature Enthusiast",
    rating: 5,
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment — my plant collection has never looked better!",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-green-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-4">

      {/* Heading */}
      <div className="text-center space-y-3 mb-14">
        <p className="text-green-400 uppercase tracking-widest text-sm font-medium">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Customer Review
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-green-400 hover:-translate-y-1 transition duration-300"
          >
            {/* Avatar + name */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-base shrink-0">
                {r.name[0]}
              </div>
              <div>
                <h3 className="font-semibold text-base leading-tight">{r.name}</h3>
                <p className="text-sm text-gray-400">{r.role}</p>
                <StarRating count={r.rating} />
              </div>
            </div>

            {/* Review text */}
            <p className="text-gray-300 leading-7 text-sm">
              {r.text}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}