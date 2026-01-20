const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a
            className="flex items-center gap-3"
            href="/"
          >
            <img
              src="./Check Mate Events_files/9f30352cf_Screenshot2026-01-17at24315PM.png"
              alt="Check Mate"
              className="h-12 w-auto mix-blend-screen"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#about"
              className="text-white/70 hover:text-amber-500 transition-colors text-sm tracking-wide"
            >
              About
            </a>
            <a
              href="/#services"
              className="text-white/70 hover:text-amber-500 transition-colors text-sm tracking-wide"
            >
              Services
            </a>
            <a
              href="/#events"
              className="text-white/70 hover:text-amber-500 transition-colors text-sm tracking-wide"
            >
              Events
            </a>
            <a
              href="/#portfolio"
              className="text-white/70 hover:text-amber-500 transition-colors text-sm tracking-wide"
            >
              Portfolio
            </a>
            <a
              href="/#contact"
              className="text-white/70 hover:text-amber-500 transition-colors text-sm tracking-wide"
            >
              Contact
            </a>
            <a
              href="/#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-full text-sm hover:shadow-lg hover:shadow-amber-500/25 transition-all"
            >
              Partner With Us
            </a>
          </nav>
          <button className="md:hidden p-2 text-white">
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
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
