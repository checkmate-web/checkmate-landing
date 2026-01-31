import { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
          <a
            className="flex items-center gap-3"
            href="/"
          >
            <img
              src="./Check Mate Events_files/LOGO.png"
              alt="Check Mate"
              className="h-12 w-auto mix-blend-screen"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-white/70 hover:text-blue-800 transition-colors text-sm tracking-wide"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white/70 hover:text-blue-800 transition-colors text-sm tracking-wide"
            >
              Services
            </a>
            <a
              href="#events"
              className="text-white/70 hover:text-blue-800 transition-colors text-sm tracking-wide"
            >
              Events
            </a>
            <a
              href="#portfolio"
              className="text-white/70 hover:text-blue-800 transition-colors text-sm tracking-wide"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-white/70 hover:text-blue-800 transition-colors text-sm tracking-wide"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-800 to-blue-900 text-black font-semibold rounded-full text-sm hover:shadow-lg hover:shadow-blue-800/25 transition-all"
            >
              Partner With Us
            </a>
          </nav>
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white z-50 relative"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x w-6 h-6"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu w-6 h-6"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay */}
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={closeMobileMenu}
    ></div>

    {/* Mobile Menu Sidebar */}
    <nav
      className={`fixed top-0 right-0 h-full w-[280px] bg-[#0a0a0f] border-l border-white/10 z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full pt-24 px-6">
        <div className="flex flex-col space-y-6">
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="text-white/70 hover:text-blue-800 transition-colors text-lg tracking-wide py-2 border-b border-white/5"
          >
            About
          </a>
          <a
            href="#services"
            onClick={closeMobileMenu}
            className="text-white/70 hover:text-blue-800 transition-colors text-lg tracking-wide py-2 border-b border-white/5"
          >
            Services
          </a>
          <a
            href="#events"
            onClick={closeMobileMenu}
            className="text-white/70 hover:text-blue-800 transition-colors text-lg tracking-wide py-2 border-b border-white/5"
          >
            Events
          </a>
          <a
            href="#portfolio"
            onClick={closeMobileMenu}
            className="text-white/70 hover:text-blue-800 transition-colors text-lg tracking-wide py-2 border-b border-white/5"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="text-white/70 hover:text-blue-800 transition-colors text-lg tracking-wide py-2 border-b border-white/5"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-800 to-blue-900 text-black font-semibold rounded-full text-center hover:shadow-lg hover:shadow-blue-800/25 transition-all"
          >
            Partner With Us
          </a>
        </div>

        {/* Footer info in mobile menu */}
        <div className="mt-auto pb-8 pt-8 border-t border-white/10">
          <p className="text-white/40 text-xs tracking-wider uppercase mb-2">
            Check Mate
          </p>
          <p className="text-blue-800 text-sm font-medium">
            Organization and Event Management
          </p>
        </div>
      </div>
    </nav>
  </>
  );
};

export default Header;
