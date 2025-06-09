export default function Features() {
  return (
    <section className="bg-green-50 py-12 px-4 md:px-8" id="features">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Features You'll Love</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">🚫 Zero Commission Model</h3>
            <p>We don’t take a cut from ride fares. Drivers pay a flat subscription — which means you earn more per trip.</p>
          </li>
          <li className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">📅 Smart Scheduling</h3>
            <p>Whether it’s daily or one-off rides, our dynamic scheduling adapts to your routine.</p>
          </li>
          <li className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">🔐 Verified Accounts</h3>
            <p>Only users with social logins (LinkedIn/Google) can access the platform, increasing trust and accountability.</p>
          </li>
          <li className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">🏆 Rider Rewards (Coming Soon)</h3>
            <p>Earn points for frequent carpooling and redeem for partner discounts, events, or eco-friendly gear.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
