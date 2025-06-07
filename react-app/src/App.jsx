import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import Waitlist from './components/Waitlist';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="bg-white text-gray-800">
      <Hero />
      <About />
      <Mission />
      <HowItWorks />
      <Team />
      <Waitlist />
      <Contact />
      <Footer />
    </div>
  );
}
