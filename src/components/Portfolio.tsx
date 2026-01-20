const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="text-center mb-20"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-amber-500 tracking-[0.2em] uppercase text-sm font-medium">
            Check Mate IP
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-4">
            Our{" "}
            <span className="text-amber-500 font-medium">Portfolio</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Proven track record of creating unforgettable experiences
            across Europe and the Middle East.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div
            className="group relative overflow-hidden rounded-3xl"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="absolute inset-0">
              <img
                src="./Check Mate Events_files/photo-1470225620780-dba8ba36b745"
                alt="Sound Sphere"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent"></div>
            </div>
            <div className="relative p-8 pt-48">
              <div className="absolute top-8 right-8 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10">
                <span className="text-sm font-medium">Since 2018</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">Sound Sphere</h3>
              <p className="text-amber-500 text-sm font-medium mb-4">
                Lifestyle Event Series
              </p>
              <p className="text-white/60 mb-6 leading-relaxed">
                A premium lifestyle event series featuring world-class DJs
                including Black Coffee, Korolova, Tale Of Us, Peggy Gou,
                Dixou, and Amelie Lens.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-amber-500 font-bold w-12">
                    2018
                  </span>
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-white/70 text-sm">
                    Lifestyle event series launched
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-amber-500 font-bold w-12">
                    2024
                  </span>
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-white/70 text-sm">
                    DJ Korolova at Café Del Mar, Abu Dhabi – 450+ guests
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-amber-500 font-bold w-12">
                    2025
                  </span>
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-white/70 text-sm">
                    International expansion to Cyprus
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="group relative overflow-hidden rounded-3xl"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="absolute inset-0">
              <img
                src="./Check Mate Events_files/photo-1459749411175-04bf5292ceea"
                alt="Primer Festival"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent"></div>
            </div>
            <div className="relative p-8 pt-48">
              <div className="absolute top-8 right-8 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-red-500/20 backdrop-blur-sm border border-white/10">
                <span className="text-sm font-medium">Since 2018</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">Primer Festival</h3>
              <p className="text-amber-500 text-sm font-medium mb-4">
                One of Greece's Largest Electronic Festivals
              </p>
              <p className="text-white/60 mb-6 leading-relaxed">
                Record-breaking two-stage edition in Athens featuring
                Armin van Buuren, David Guetta, Tiësto, Martin Garrix,
                Eric Prydz, Boris Brejcha, and more.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-amber-500 font-bold w-12">
                    2018
                  </span>
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-white/70 text-sm">
                    Festival founded in Greece
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-amber-500 font-bold w-12">
                    2022
                  </span>
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-white/70 text-sm">
                    25,000+ visitors in a single year
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-amber-500 font-bold w-12">
                    2024
                  </span>
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-white/70 text-sm">
                    Record-breaking two-stage edition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-center mt-16"
          style={{ opacity: 1, transform: "none" }}
        >
          <p className="text-amber-500 text-xl font-medium mb-4">
            Sponsorship Opportunities Available for 2026
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
          >
            Inquire Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
