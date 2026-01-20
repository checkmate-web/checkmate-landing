const Partners = () => {
  return (
    <section className="py-32 relative bg-gradient-to-b from-[#0a0a0f] to-[#0d1117]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div
          className="text-center mb-20"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-amber-500 tracking-[0.2em] uppercase text-sm font-medium">
            Check Mate UAE
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-4">
            Our{" "}
            <span className="text-amber-500 font-medium">Partners</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A team of visionary leaders uniting expertise from Europe and
            the Middle East to deliver world-class experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="group"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-500/30 transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="./Check Mate Events_files/photo-1507003211169-0a1dd7228f2d"
                  alt="Ahmed Al Nuaimi"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent"></div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30">
                  <span className="text-amber-500 text-xs font-bold">
                    MBA
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">
                  Ahmed Al Nuaimi
                </h3>
                <p className="text-amber-500 text-sm font-medium mb-4">
                  CO-CEO | Managing Director
                </p>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-4">
                  A regional powerhouse in partnerships, Ahmed brings
                  extensive experience in connecting high-level sponsors,
                  venues, and government stakeholders. His strategic input
                  and GCC relationships have been vital to Check Mate's
                  expansion into the UAE and broader MENA region.
                </p>
              </div>
            </div>
          </div>
          <div
            className="group"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-500/30 transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="./Check Mate Events_files/photo-1472099645785-5658abf4ff4e"
                  alt="Oren Faribi"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent"></div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30">
                  <span className="text-amber-500 text-xs font-bold">
                    MBA
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Oren Faribi</h3>
                <p className="text-amber-500 text-sm font-medium mb-4">
                  CO-CEO | Founder
                </p>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-4">
                  Entertainment mogul and entrepreneur, owning seven of
                  the largest venues across the region. He is recognized
                  as one of the top producers with direct ties to global
                  artists. His ventures have redefined live entertainment
                  in the region.
                </p>
              </div>
            </div>
          </div>
          <div
            className="group"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-500/30 transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="./Check Mate Events_files/photo-1519345182560-3f2917c472ef"
                  alt="Andreas Panagos"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent"></div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30">
                  <span className="text-amber-500 text-xs font-bold">
                    MBA
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">
                  Andreas Panagos
                </h3>
                <p className="text-amber-500 text-sm font-medium mb-4">
                  COO
                </p>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-4">
                  Founder of Primer Festival, attracting over 30,000
                  attendees yearly. He also manages boutique restaurants
                  and leading hotels in Athens, bringing extensive
                  expertise in global entertainment, lifestyle, and luxury
                  hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
