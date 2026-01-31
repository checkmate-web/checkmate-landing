const Events = () => {
  return (
    <section id="events" className="py-32 relative">
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-transparent to-[#0a0a0f]"></div> */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-16" style={{ opacity: 1, transform: "none" }}>
          <span className="text-amber-500 tracking-[0.2em] uppercase text-sm font-medium">
            Focus Areas
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-4">
            Types of <span className="text-amber-500 font-medium">Events</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="group relative overflow-hidden"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0f]/80 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 h-full">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center">
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
                    className="lucide lucide-building w-6 h-6 text-amber-500"
                  >
                    <rect
                      width="16"
                      height="20"
                      x="4"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 10h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M8 14h.01"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-amber-500 transition-colors">
                Corporate Event
              </h3>
              <p className="text-white/50 leading-relaxed">
                From conferences and product launches to employee recognition
                nights, we design experiences that strengthen brand culture and
                corporate identity.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
          <div
            className="group relative overflow-hidden"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0f]/80 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 h-full">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center">
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
                    className="lucide lucide-music4 w-6 h-6 text-amber-500"
                  >
                    <path d="M9 18V5l12-2v13"></path>
                    <path d="m9 9 12-2"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-amber-500 transition-colors">
                Entertainment Event
              </h3>
              <p className="text-white/50 leading-relaxed">
                From concerts and festivals to red-carpet experiences , we craft
                high-energy, crowd-focused productions that captivate audiences
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
          <div
            className="group relative overflow-hidden"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0f]/80 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 h-full">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center">
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
                    className="lucide lucide-calendar w-6 h-6 text-amber-500"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-amber-500 transition-colors">
                Annual Event
              </h3>
              <p className="text-white/50 leading-relaxed">
                Celebrate milestones, anniversaries, and yearly achievements
                with impactful and immersive event concepts that leave a lasting
                impression.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
          <div
            className="group relative overflow-hidden"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0f]/80 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 h-full">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center">
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
                    className="lucide lucide-users w-6 h-6 text-amber-500"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-amber-500 transition-colors">
                Community Event
              </h3>
              <p className="text-white/50 leading-relaxed">
                We unite communities and brands through powerful experiences rooted in entertainment and culture - creating moments that inspire, connect, and endure.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
          <div
            className="group relative overflow-hidden"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0f]/80 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 h-full">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center">
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
                    className="lucide lucide-flag w-6 h-6 text-amber-500"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" x2="4" y1="22" y2="15"></line>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-amber-500 transition-colors">
                Public Holidays &amp; Cultural Event
              </h3>
              <p className="text-white/50 leading-relaxed">
                Bring communities together through themed celebrations honoring national holidays, cultural heritage, and social unity.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
          <div
            className="group relative overflow-hidden"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0f]/80 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 h-full">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center">
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
                    className="lucide lucide-briefcase w-6 h-6 text-amber-500"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-amber-500 transition-colors">
                Executive &amp; Industry Event
              </h3>
              <p className="text-white/50 leading-relaxed">
                Curated gatherings for leaders and professionals to connect, exchange ideas, and explore new partnerships.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
