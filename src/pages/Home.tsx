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
    <div className="min-h-screen bg-[#0a0a0f] relative">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920')] bg-cover bg-center opacity-5"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-[#0d1117] via-transparent to-[#0a0a0f]"></div>
      <div className="relative z-10">
        <Header openModal={openModal} />
        <main>
          <div className="text-white min-h-screen w-screen">
            <Hero />
            <About />
            <Events />
            <Services isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} openModal={openModal} />
            <Sponsorship />
            <Portfolio openModal={openModal} />
            <Partners />
            <Contact openModal={openModal} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
