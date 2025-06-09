export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-6">
      <div className="max-w-5xl mx-auto grid gap-6 px-4 md:grid-cols-3">
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <p className="text-sm">
            Built by a passionate team of commuters and engineers who care about
            affordability, sustainability, and human connection.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <nav className="space-y-1">
            <a href="#contact" className="block hover:underline">Contact</a>
            <a href="#" className="block hover:underline">FAQ</a>
            <a href="#" className="block hover:underline">Privacy Policy</a>
            <a href="#" className="block hover:underline">Terms of Use</a>
          </nav>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <nav className="space-y-1">
            <a href="#" className="block hover:underline">LinkedIn</a>
            <a href="#" className="block hover:underline">Instagram</a>
            <a href="#" className="block hover:underline">Blog</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
