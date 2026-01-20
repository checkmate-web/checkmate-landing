import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Events from '../components/Events';
import Sponsorship from '../components/Sponsorship';
import Portfolio from '../components/Portfolio';
import Partners from '../components/Partners';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />
      <main>
        <div className="bg-[#0a0a0f] text-white min-h-screen w-screen">
          <Hero />
          <About />
          <Services />
          <Events />
          <Sponsorship />
          <Portfolio />
          <Partners />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
