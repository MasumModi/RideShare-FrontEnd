export default function Hero() {
  return (
    <header className="bg-gradient-to-r from-green-200 to-green-100 py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            🚗 Share Rides. Save Money. Make Connections.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Tired of high commuting costs and long, lonely trips? Carpool Connect helps
            students and professionals in Ontario find reliable, affordable rides — all while
            reducing carbon emissions and meeting like-minded commuters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#waitlist"
              className="bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition"
            >
              👉 Join the Waitlist for Early Access
            </a>
            <a
              href="https://forms.gle/5DWXcYTWEw1J8NrH8"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-full hover:bg-green-600 hover:text-white transition"
            >
              📋 Take Our 1-Min Survey
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0 relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1592433241388-0d7b97ffa5ec?auto=format&fit=crop&w=400&q=80"
            alt="App screenshot"
            className="w-64 md:w-80 rounded-lg shadow-lg"
          />
          <span className="absolute left-0 top-1/2 -translate-y-1/2 animate-bounce text-3xl">
            🚗
          </span>
          <span className="absolute right-0 bottom-1/4 animate-pulse text-3xl">
            💬
          </span>
        </div>
      </div>
    </header>
  );
}
