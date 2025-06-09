export default function Mission() {
  return (
    <section className="bg-green-50 py-12 px-4 md:px-8" id="mission">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          🚀 Be Part of Something Bigger
        </h2>
        <p className="mb-4">
          You’re not just saving on gas — you’re helping build a smarter, more
          sustainable commuting culture in Ontario.
        </p>
        <p>
          Every ride shared is one less car on the road and one step closer to a
          cleaner, more connected future.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#waitlist"
            className="bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition"
          >
            Join the Waitlist
          </a>
          <a
            href="https://forms.gle/5DWXcYTWEw1J8NrH8"
            className="border border-green-600 text-green-600 px-6 py-3 rounded-full hover:bg-green-600 hover:text-white transition"
          >
            Help Shape the App – Take the Survey
          </a>
        </div>
      </div>
    </section>
  );
}
