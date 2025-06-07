export default function Team() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8" id="team">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold">Masoom</h3>
            <p className="text-sm">Vision & Mobile Dev</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold">Kinjal</h3>
            <p className="text-sm">UI/UX Design</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold">Anandi</h3>
            <p className="text-sm">Backend & Infrastructure</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold">Vaishali</h3>
            <p className="text-sm">React Native Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
