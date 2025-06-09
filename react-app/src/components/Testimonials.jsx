export default function Testimonials() {
  return (
    <section className="py-12 px-4 md:px-8" id="testimonials">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Early User Stories</h2>
        <div className="space-y-6">
          <blockquote className="bg-white rounded-lg shadow p-6">
            <p className="italic">"I already carpool with friends sometimes, but it's hard to coordinate. If an app can handle that part and make it easy to find safe, verified riders — I’m in."</p>
            <footer className="mt-2 text-right">— Ritu, University of Waterloo Student</footer>
          </blockquote>
          <blockquote className="bg-white rounded-lg shadow p-6">
            <p className="italic">"As someone who drives to Mississauga every day, I’d love to reduce my fuel costs. And I don’t mind good company."</p>
            <footer className="mt-2 text-right">— Akash, IT Professional, Kitchener</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
