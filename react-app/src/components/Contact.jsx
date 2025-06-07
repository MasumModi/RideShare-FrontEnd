export default function Contact() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8" id="contact">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border rounded p-3" />
          <input type="email" placeholder="Email" className="w-full border rounded p-3" />
          <textarea placeholder="Message" className="w-full border rounded p-3" rows="4"></textarea>
          <button type="button" className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition w-full">Send</button>
        </form>
      </div>
    </section>
  );
}
