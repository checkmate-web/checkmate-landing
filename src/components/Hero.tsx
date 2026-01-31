const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="./Check Mate Events_files/hero-bg-image.png"
          alt="chess pieces over a chessboard"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-orange-900/60 via-orange-800/70 to-orange-900/80"></div> */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-transparent to-[#0a0a0f]"></div>
        {/* <div className="absolute inset-0 bg-black/30"></div> */}
      </div>
      <div className="relative z-10 text-center px-6">
        <div
          className="flex flex-col items-center"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="w-64 md:w-80 mb-8">
            <img
              src="./Check Mate Events_files/LOGO.png"
              alt="Check Mate Logo"
              className="w-full h-auto drop-shadow-2xl mix-blend-screen"
            />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white mb-4 drop-shadow-lg">
            CHECK MATE
          </h1>
          <p className="text-white/90 text-xs md:text-sm tracking-[0.3em] uppercase mb-12 font-light">
            Organization and Event Management
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
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
          className="lucide lucide-chevron-down w-8 h-8 text-white/50"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
