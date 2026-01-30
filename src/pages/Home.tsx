import { useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />
      <main>
        <div className="bg-[#0a0a0f] text-white min-h-screen w-screen">
          <Hero />
          <About />
          <Events />
          <Services isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} openModal={openModal} />
          <Sponsorship />
          <Portfolio />
          <Partners />
          <Contact openModal={openModal} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
