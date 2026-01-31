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
            Our <span className="text-amber-500 font-medium">Partners</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A team of visionary leaders uniting expertise from Europe and the
            Middle East to deliver world-class experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group" style={{ opacity: 1, transform: "none" }}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-500/30 transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="./Check Mate Events_files/ceo-image.png"
                  alt="Ahmed Al Nuaimi"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent"></div>
                {/* <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30">
                  <span className="text-amber-500 text-xs font-bold">
                    MBA
                  </span>
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Ahmed Al Nuaimi</h3>
                <p className="text-amber-500 text-sm font-medium mb-4">
                  CO-CEO | Managing Director
                </p>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-4">
                  A driving force behind meaningful collaborations, Ahmed
                  specializes in connecting brands, venues, and institutions to
                  create impactful experiences. With a deep understanding of the
                  regional landscape and strong GCC relationships, he has been
                  instrumental in shaping Check Mate’s growth across the UAE and
                  the wider MENA region.
                </p>
              </div>
            </div>
          </div>
          <div className="group" style={{ opacity: 1, transform: "none" }}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-500/30 transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="./Check Mate Events_files/co-founder-image.png"
                  alt="Oren Faribi"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent"></div>
                {/* <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30">
                  <span className="text-amber-500 text-xs font-bold">
                    MBA
                  </span>
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Oren Faribi</h3>
                <p className="text-amber-500 text-sm font-medium mb-4">
                  CO-CEO | Founder
                </p>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-4">
                  in addition to owning multiple venues and running these
                  events,He leverages his extensive network across multiple
                  sectors, bringing fresh perspectives to every event.
                </p>
              </div>
            </div>
          </div>
          <div className="group" style={{ opacity: 1, transform: "none" }}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-500/30 transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="./Check Mate Events_files/coo-image.png"
                  alt="Andreas Panagos"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent"></div>
                {/* <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30">
                  <span className="text-amber-500 text-xs font-bold">
                    MBA
                  </span>
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Andreas Panagos</h3>
                <p className="text-amber-500 text-sm font-medium mb-4">COO</p>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-4">
                  With Stailos as a strategic partner, we tap into a realm of
                  large-scale experiences shaped by global insight and cultural
                  finesse. His ability to orchestrate events for tens of
                  thousands, combined with a lifestyle-driven approach, brings a
                  rare blend of scale and intimacy to our productions.
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
