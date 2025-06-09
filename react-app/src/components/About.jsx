const bgImageUrl =
  'https://images.unsplash.com/photo-1489619249100-ea00f116cb72?auto=format&fit=crop&w=1350&q=80';

export default function About() {
  return (
    <section
      className="relative py-20 px-4 md:px-8 bg-fixed bg-center bg-cover text-white"
      id="about"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About EcoYaan</h2>
        <p className="mb-4">
          EcoYaan helps you save money, reduce emissions, and build community through shared rides.
        </p>
        <p className="font-semibold">
          Unlike other apps,{' '}
          <span className="font-bold">
            EcoYaan is a 0% commission ride-sharing platform. Drivers keep 100% of their earnings.
          </span>
        </p>
      </div>
    </section>
  );
}
