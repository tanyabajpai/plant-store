export default function Reviews() {
  return (
    <section className="space-y-10">

      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Customer Reviews
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg">
          <h3 className="font-semibold text-xl">
            Shelly
          </h3>

          <p className="text-gray-300 mt-4">
            Beautiful healthy plants and very fast delivery.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg">
          <h3 className="font-semibold text-xl">
            Lula
          </h3>

          <p className="text-gray-300 mt-4">
            Amazing quality and elegant packaging.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg">
          <h3 className="font-semibold text-xl">
            Carol
          </h3>

          <p className="text-gray-300 mt-4">
            My room looks fresh and beautiful now.
          </p>
        </div>

      </div>

    </section>
  );
}