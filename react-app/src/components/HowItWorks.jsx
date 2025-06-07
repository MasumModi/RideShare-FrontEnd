export default function HowItWorks() {
  return (
    <section className="py-12 px-4 md:px-8" id="how">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4l3-3m0 0l3-3 3 3m-3-3v12" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Find or list a ride</h3>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M4 6h16M4 6v10a2 2 0 002 2h3m10-12h1a2 2 0 012 2v4m-6-6V4a2 2 0 012-2h3" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Connect with riders or drivers</h3>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 17l6-6m0 0l6-6m-6 6v12" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Ride together affordably & sustainably</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
