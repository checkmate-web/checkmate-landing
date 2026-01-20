const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-[#0a0a0f]"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div
          className="text-center mb-16"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-amber-500 tracking-[0.2em] uppercase text-sm font-medium">
            Next Steps
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-4">
            Let's Create{" "}
            <span className="text-amber-500 font-medium">Together</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Book your consultation to begin ideation, scoping, and
            planning for your next unforgettable event.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className="space-y-6"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="group p-8 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent hover:border-amber-500/50 transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl font-medium mb-3">
                Create Your Own Event
              </h3>
              <p className="text-white/60 mb-6">
                Begin ideation, scoping and planning for your custom event
                experience.
              </p>
              <div className="flex items-center gap-2 text-amber-500 font-medium group-hover:gap-4 transition-all">
                Get Started{" "}
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
                  className="lucide lucide-arrow-right w-5 h-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-500/30 transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl font-medium mb-3">
                Sponsorship Opportunities
              </h3>
              <p className="text-white/60 mb-6">
                Explore sponsorship packages for Check Mate Season
                2025-2026.
              </p>
              <div className="flex items-center gap-2 text-amber-500 font-medium group-hover:gap-4 transition-all">
                View Packages{" "}
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
                  className="lucide lucide-arrow-right w-5 h-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-500/30 transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl font-medium mb-3">
                Schedule Consultation
              </h3>
              <p className="text-white/60 mb-6">
                Book a call with our team to discuss your vision and
                objectives.
              </p>
              <div className="flex items-center gap-2 text-amber-500 font-medium group-hover:gap-4 transition-all">
                Book Now{" "}
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
                  className="lucide lucide-arrow-right w-5 h-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
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
                    className="lucide lucide-phone w-6 h-6 text-amber-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Phone</h4>
                  <p className="text-white/60">+971 56 128 8882</p>
                  <p className="text-white/60">+971 58 890 4503</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
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
                    className="lucide lucide-mail w-6 h-6 text-amber-500"
                  >
                    <rect
                      width="20"
                      height="16"
                      x="2"
                      y="4"
                      rx="2"
                    ></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Email</h4>
                  <p className="text-white/60">
                    partnership@checkmate.ae
                  </p>
                  <p className="text-amber-500">checkmate.ae</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
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
                    className="lucide lucide-map-pin w-6 h-6 text-amber-500"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Address</h4>
                  <p className="text-white/60">Al Khalidiya</p>
                  <p className="text-white/60">Abu Dhabi</p>
                  <p className="text-white/60">
                    Al Rahi St, East Block 8
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-3xl font-light text-white/20">
                Check Mate —
              </p>
              <p className="text-xl text-amber-500 font-medium mt-1">
                Where Culture Meets Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
