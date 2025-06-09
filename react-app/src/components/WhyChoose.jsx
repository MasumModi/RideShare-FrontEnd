export default function WhyChoose() {
  return (
    <section className="py-12 px-4 md:px-8" id="why">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">🌟 Why People Love Us</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Save on Daily Commute Costs</h3>
            <p>Drivers set their own price. Riders split the fare. There’s no middleman taking a commission. Everyone wins.</p>
          </li>
          <li className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Go Green, Together</h3>
            <p>Less cars, more savings. Every shared ride cuts emissions — making your commute part of the solution.</p>
          </li>
          <li className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Build Real Connections</h3>
            <p>Travel with people from your campus, workplace, or city who share your hobbies, interests, or even podcast taste.</p>
          </li>
          <li className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Safety Comes First</h3>
            <p>All users are verified through LinkedIn or Google. You can view ride history, ratings, and mutual connections before accepting.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
