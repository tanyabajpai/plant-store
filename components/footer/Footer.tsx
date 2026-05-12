export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-10 pb-12">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-green-300">
            FloraVision
          </h2>

          <p className="text-gray-400">
            Beautiful indoor plants for your healthy lifestyle.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-xl">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Plants</li>
            <li>Reviews</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-xl">
            Newsletter
          </h3>

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 outline-none"
          />
        </div>

      </div>

      <p className="text-center text-gray-500 mt-10">
        FloraVision © All Rights Reserved
      </p>

    </footer>
  );
}