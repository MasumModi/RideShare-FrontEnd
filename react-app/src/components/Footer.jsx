export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p>&copy; 2024 EcoYaan</p>
        <nav className="space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}
