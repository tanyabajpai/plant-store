export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-12 pb-8">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-green-300 flex items-center gap-2">
            🌿 FloraVision.
          </h2>
          <p className="text-gray-400 leading-7 text-sm">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted
            to thrive and elevate your living environment."
          </p>
          <div className="flex gap-3 pt-1">
            {["FB", "TW", "LI"].map((s) => (
              <button
                key={s}
                className="text-xs font-semibold text-gray-400 border border-white/10 px-3 py-1.5 rounded-full hover:border-green-400 hover:text-green-400 transition"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-4">
          <h3 className="font-semibold text-base text-white">Quick Link's</h3>
          <ul className="space-y-2.5 text-gray-400 text-sm">
            {["Home", "Types of plants", "Reviews", "Contact", "Privacy"].map((link) => (
              <li
                key={link}
                className="hover:text-green-400 cursor-pointer transition w-fit"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="space-y-4">
          <h3 className="font-semibold text-base text-white">For Every Update.</h3>
          <p className="text-gray-400 text-sm leading-6">
            Stay updated with our latest plants and offers.
          </p>
          <div className="flex gap-2 items-center">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 outline-none text-sm focus:border-green-400 transition text-white placeholder:text-gray-500"
            />
            <button className="shrink-0 bg-green-400 text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-green-300 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <p className="text-center text-gray-500 text-sm mt-12">
        FloraVision © All right reserve
      </p>

    </footer>
  );
}