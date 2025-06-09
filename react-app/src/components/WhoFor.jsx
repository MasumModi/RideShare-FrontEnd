export default function WhoFor() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8" id="who">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">🎯 Who Can Use Carpool Connect?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">🎓 Students</h3>
            <p>Save big on gas and transit fees. Whether you're commuting from Brampton to Waterloo or back from a part-time job, ride-sharing just got easier.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">🧑‍💼 Working Professionals</h3>
            <p>No more stressful solo drives or packed GO trains. Enjoy peaceful, productive travel time — and maybe even make a new friend.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">🚘 Everyday Travelers</h3>
            <p>Weekend road trip? Attending an event? Use our flexible ride-matching system to find companions for any type of journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
