import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import HowItWorks from './components/HowItWorks';
import WhyChoose from './components/WhyChoose';
import WhoFor from './components/WhoFor';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
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
      <HowItWorks />
      <WhyChoose />
      <WhoFor />
      <Testimonials />
      <Features />
      <Mission />
      <Team />
      <Waitlist />
      <Contact />
      <Footer />
    </div>
  );
}
