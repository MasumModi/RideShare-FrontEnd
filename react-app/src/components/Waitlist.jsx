export default function Waitlist() {
  return (
    <section className="py-12 px-4 md:px-8" id="waitlist">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Waitlist</h2>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input type="email" placeholder="Your Email" className="border rounded p-3 flex-1" />
          <a href="https://forms.gle/5DWXcYTWEw1J8NrH8" className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition">Join</a>
        </form>
      </div>
    </section>
  );
}
