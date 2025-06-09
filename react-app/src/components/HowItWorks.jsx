export default function HowItWorks() {
  return (
    <section className="py-12 px-4 md:px-8" id="how">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          🛣️ How Carpool Connect Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="font-semibold mb-2">Step 1 – Post or Search Rides</h3>
            <p>
              Open the app to post your trip as a driver or search for available
              rides as a rider. Filter by location, time, and travel frequency.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="font-semibold mb-2">Step 2 – Match with Compatible Riders</h3>
            <p>
              We connect you with commuters who share similar interests,
              destinations, and safety preferences — because sharing a ride should
              feel safe and social.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="font-semibold mb-2">Step 3 – Travel Smart</h3>
            <p>
              Meet at the pickup point, enjoy the ride, split costs, and reduce
              your carbon footprint. No commission, no complicated fees — just a
              simple, smart carpool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
