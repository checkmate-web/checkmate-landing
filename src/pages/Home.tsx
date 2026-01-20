const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a
              className="flex items-center gap-3"
              href="https://check-mate-events-36b511fb.base44.app/Home"
            >
              <img
                src="./Check Mate Events_files/9f30352cf_Screenshot2026-01-17at24315PM.png"
                alt="Check Mate"
                className="h-12 w-auto mix-blend-screen"
              />
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="https://check-mate-events-36b511fb.base44.app/#about"
                className="text-white/70 hover:text-amber-500 transition-colors text-sm tracking-wide"
              >
                About
              </a>
              <a
                href="https://check-mate-events-36b511fb.base44.app/#services"
                className="text-white/70 hover:text-amber-500 transition-colors text-sm tracking-wide"
              >
                Services
              </a>
              <a
                href="https://check-mate-events-36b511fb.base44.app/#events"
                className="text-white/70 hover:text-amber-500 transition-colors text-sm tracking-wide"
              >
                Events
              </a>
              <a
                href="https://check-mate-events-36b511fb.base44.app/#portfolio"
                className="text-white/70 hover:text-amber-500 transition-colors text-sm tracking-wide"
              >
                Portfolio
              </a>
              <a
                href="https://check-mate-events-36b511fb.base44.app/#contact"
                className="text-white/70 hover:text-amber-500 transition-colors text-sm tracking-wide"
              >
                Contact
              </a>
              <a
                href="https://check-mate-events-36b511fb.base44.app/#contact"
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
                stroke-linecap="round"
                stroke-linejoin="round"
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
      <main>
        <div className="bg-[#0a0a0f] text-white min-h-screen w-screen">
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="./Check Mate Events_files/photo-1470229722913-7c0e2dbbafd3"
                alt="Concert crowd"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-orange-900/60 via-orange-800/70 to-orange-900/80"></div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="relative z-10 text-center px-6">
              <div
                className="flex flex-col items-center"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="w-64 md:w-80 mb-8">
                  <img
                    src="./Check Mate Events_files/9f30352cf_Screenshot2026-01-17at24315PM.png"
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
                <p
                  className="text-xl md:text-2xl text-white font-light tracking-wide"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Elevating Music Festivals
                </p>
              </div>
            </div>
            <div
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
              style={{ transform: "translateY(1.27412px)" }}
            >
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
          <section id="about" className="py-32 relative overflow-hidden">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] bg-gradient-to-l from-amber-500/5 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div style={{ opacity: 1, transform: "none" }}>
                  <span className="text-amber-500 tracking-[0.2em] uppercase text-sm font-medium">
                    About Check Mate
                  </span>
                  <h2 className="text-4xl md:text-5xl font-light mt-4 mb-8 leading-tight">
                    Where Culture
                    <span className="block text-amber-500 font-medium">
                      Meets Experience
                    </span>
                  </h2>
                  <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                    <p>
                      Check Mate is a cultural disruptor and premium experience
                      architect. We operate at the crossroads of cultural
                      relevance and experiential excellence, specializing in
                      fusing music, lifestyle, and luxury into custom-made
                      experiences.
                    </p>
                    <p>
                      Our passion is bringing exclusive narratives to life—ones
                      that resonate deeply with audiences across one-of-a-kind
                      events, annual experiences, yacht takeovers, resort
                      activations, nightlife venues, culinary concepts, and
                      large-scale destination festivals.
                    </p>
                    <p>
                      Check Mate's production division unites two premier teams
                      from Europe and The Middle East to deliver end-to-end
                      marketing and live-experience solutions to brands and
                      audiences.
                    </p>
                  </div>
                </div>
                <div
                  className="relative"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="relative aspect-square max-w-lg mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-64 h-64">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          <defs>
                            <linearGradient
                              id="goldGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#f59e0b"></stop>
                              <stop offset="100%" stopColor="#d97706"></stop>
                            </linearGradient>
                          </defs>
                          <line
                            x1="33.990663549646925"
                            y1="65.21426889480924"
                            x2="195.27992019940476"
                            y2="114.42690426302904"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="21.175490375308147"
                            y1="105.68070543542977"
                            x2="181.92814481508904"
                            y2="156.94779525504472"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="133.6734901301051"
                            y1="94.5690418545691"
                            x2="130.8025231102716"
                            y2="135.64807062520447"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="173.9609916141417"
                            y1="155.38892056185827"
                            x2="8.84447275765714"
                            y2="131.6682433005857"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="68.50111377025989"
                            y1="177.10252083778443"
                            x2="182.86412647510963"
                            y2="100.88499873014311"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="46.318943842531304"
                            y1="164.59957144964554"
                            x2="168.63153560531825"
                            y2="168.7355714433885"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="142.96881473944518"
                            y1="116.95840259185024"
                            x2="107.48721762850077"
                            y2="187.41314297149557"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="181.53873813873628"
                            y1="64.61580591580073"
                            x2="64.60578221360012"
                            y2="6.188226484132109"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="139.58601727586986"
                            y1="165.5116892051602"
                            x2="4.95823390440826"
                            y2="154.71031847608984"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="33.13166892302366"
                            y1="90.399089441918"
                            x2="185.07964188387078"
                            y2="58.239104144580466"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="198.34888834140267"
                            y1="118.62252063560467"
                            x2="139.0826665048315"
                            y2="35.508180469288874"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="11.816920371230122"
                            y1="179.52699135932957"
                            x2="74.47680735484501"
                            y2="115.8590598799604"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="182.05366452421123"
                            y1="176.16530919551357"
                            x2="147.17537649881942"
                            y2="41.642174899908646"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="127.447442156923"
                            y1="16.347301239262336"
                            x2="148.6449488958735"
                            y2="176.90964423773178"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="60.540582361824846"
                            y1="156.91820158047548"
                            x2="187.30979956705318"
                            y2="2.052072224307566"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="68.91094942877099"
                            y1="67.62724034666176"
                            x2="136.880532053194"
                            y2="174.87690806840124"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="15.240034776541545"
                            y1="146.37759840518964"
                            x2="68.81687499458953"
                            y2="96.22107971268228"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="35.77542444350754"
                            y1="125.54314046376436"
                            x2="52.67514717699693"
                            y2="30.80651207845053"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="99.30234207765261"
                            y1="109.46485590268962"
                            x2="25.192137362537316"
                            y2="150.18163734069788"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <line
                            x1="45.2642166947683"
                            y1="190.22610287306574"
                            x2="34.0772599983852"
                            y2="42.38011677383105"
                            stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="0.5"
                          ></line>
                          <path
                            d="M100 30 L115 60 L130 60 L120 80 L125 100 L100 90 L75 100 L80 80 L70 60 L85 60 Z"
                            fill="url(#goldGradient)"
                            className="drop-shadow-lg"
                          ></path>
                          <circle
                            cx="100"
                            cy="115"
                            r="12"
                            fill="url(#goldGradient)"
                          ></circle>
                          <rect
                            x="88"
                            y="125"
                            width="24"
                            height="15"
                            rx="2"
                            fill="url(#goldGradient)"
                          ></rect>
                          <rect
                            x="82"
                            y="138"
                            width="36"
                            height="8"
                            rx="2"
                            fill="url(#goldGradient)"
                          ></rect>
                          <circle
                            cx="52.68658090541647"
                            cy="23.208437206450604"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="53.30274356482396"
                            cy="187.7468028914299"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="44.835485241870934"
                            cy="190.42964526923734"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="151.80325587963947"
                            cy="175.65934221822351"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="11.148170831416726"
                            cy="25.11677283153113"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="24.10405135932281"
                            cy="141.2685046143161"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="74.03702631584352"
                            cy="16.417980108616504"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="49.78898656458326"
                            cy="115.49383936657762"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="8.57941271561453"
                            cy="131.89962375721902"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="33.07422478465156"
                            cy="85.48109381633522"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="196.57785265051214"
                            cy="173.2320140378554"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="56.61583640383163"
                            cy="194.780146049708"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="16.22664089193733"
                            cy="151.86870544586552"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="71.4983833159059"
                            cy="92.20719187542056"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="145.56821806517235"
                            cy="27.47533167667364"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="165.14762138068707"
                            cy="153.63722340523393"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="33.69320006053063"
                            cy="98.88349930592564"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="148.67918305013785"
                            cy="50.041329936720594"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="129.26743879966028"
                            cy="154.01001277846743"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="149.36425383049158"
                            cy="46.0806430281598"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="165.56311456948188"
                            cy="113.64189315584721"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="71.2518000678742"
                            cy="165.178444344269"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="98.88384256497027"
                            cy="152.75174216150714"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="41.183699074003634"
                            cy="31.454798527471283"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="151.50887641154242"
                            cy="56.1725540361717"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="105.10683064416347"
                            cy="198.0287131000689"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="143.8849154741266"
                            cy="43.62398260297995"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="23.758591858475153"
                            cy="10.229209499265334"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="53.81489616002919"
                            cy="78.91965330990207"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                          <circle
                            cx="182.46938664595623"
                            cy="90.24698725536706"
                            r="1.5"
                            fill="rgba(245, 158, 11, 0.5)"
                          ></circle>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 border border-amber-500/20 rounded-full"></div>
                    <div className="absolute inset-8 border border-amber-500/10 rounded-full"></div>
                  </div>
                  <div
                    className="absolute -bottom-4 right-0 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 rounded-full"
                    style={{ transform: "translateY(-3.253px)" }}
                  >
                    <span className="text-black font-bold text-lg italic">
                      READY TO PLAY?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-32 relative bg-gradient-to-b from-[#0a0a0f] to-[#0d1117]">
            <div className="max-w-7xl mx-auto px-6">
              <div
                className="text-center mb-20"
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="text-amber-500 tracking-[0.2em] uppercase text-sm font-medium">
                  Partner With Check Mate
                </span>
                <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">
                  Our{" "}
                  <span className="text-amber-500 font-medium">Services</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-lg">
                  Partner with us to design and architect events with precision
                  and impact. We craft compelling narratives ensuring every
                  brand touchpoint is strategically delivered.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                <div
                  className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-500/20 transition-all duration-500"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-sparkles w-7 h-7 text-amber-500"
                    >
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                      <path d="M20 3v4"></path>
                      <path d="M22 5h-4"></path>
                      <path d="M4 17v2"></path>
                      <path d="M5 18H3"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">
                    Creative Direction
                  </h3>
                  <p className="text-white/50">
                    Full-spectrum creative event direction and production
                  </p>
                </div>
                <div
                  className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-500/20 transition-all duration-500"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-building2 w-7 h-7 text-amber-500"
                    >
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                      <path d="M10 6h4"></path>
                      <path d="M10 10h4"></path>
                      <path d="M10 14h4"></path>
                      <path d="M10 18h4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">
                    Government &amp; Private
                  </h3>
                  <p className="text-white/50">
                    High-impact activations with public and private sectors
                  </p>
                </div>
                <div
                  className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-500/20 transition-all duration-500"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-users w-7 h-7 text-amber-500"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">
                    Brand Partnerships
                  </h3>
                  <p className="text-white/50">
                    Strategic partnerships and dynamic sponsorship packaging
                  </p>
                </div>
                <div
                  className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-500/20 transition-all duration-500"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-mic-vocal w-7 h-7 text-amber-500"
                    >
                      <path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"></path>
                      <path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"></path>
                      <circle cx="16" cy="7" r="5"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Talent Booking</h3>
                  <p className="text-white/50">
                    World-class talent booking and influencer integration
                  </p>
                </div>
                <div
                  className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-500/20 transition-all duration-500"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-video w-7 h-7 text-amber-500"
                    >
                      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                      <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Content Creation</h3>
                  <p className="text-white/50">
                    Innovative content creation and digital media amplification
                  </p>
                </div>
                <div
                  className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-500/20 transition-all duration-500"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-earth w-7 h-7 text-amber-500"
                    >
                      <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                      <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
                      <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">VIP Experiences</h3>
                  <p className="text-white/50">
                    Luxury hospitality and immersive storytelling
                  </p>
                </div>
              </div>
              <div
                className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent p-10"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <span className="text-amber-500 font-semibold uppercase tracking-wider text-sm">
                      Full 360 Package Offering
                    </span>
                    <h3 className="text-3xl font-light mt-3 mb-4">
                      Complete{" "}
                      <span className="text-amber-500 font-medium">
                        Solutions
                      </span>
                    </h3>
                    <p className="text-white/60 mb-6">
                      Check Mate offers bundled travel and experience packages,
                      ideal for international sponsors and partners bringing
                      guests.
                    </p>
                    <a
                      href="https://check-mate-events-36b511fb.base44.app/#contact"
                      className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors font-medium"
                    >
                      Book a Consultation
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-calendar-days w-5 h-5 text-amber-500"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                        <path d="M8 14h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 18h.01"></path>
                        <path d="M12 18h.01"></path>
                        <path d="M16 18h.01"></path>
                      </svg>
                      <span className="font-medium">Event</span>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-hotel w-5 h-5 text-amber-500"
                      >
                        <path d="M10 22v-6.57"></path>
                        <path d="M12 11h.01"></path>
                        <path d="M12 7h.01"></path>
                        <path d="M14 15.43V22"></path>
                        <path d="M15 16a5 5 0 0 0-6 0"></path>
                        <path d="M16 11h.01"></path>
                        <path d="M16 7h.01"></path>
                        <path d="M8 11h.01"></path>
                        <path d="M8 7h.01"></path>
                        <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                      </svg>
                      <span className="font-medium">Hotel</span>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-plane w-5 h-5 text-amber-500"
                      >
                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                      </svg>
                      <span className="font-medium">Flight Packages</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-32 relative">
            <div className="absolute inset-0 bg-[url(&#39;https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&#39;)] bg-cover bg-center opacity-5"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-transparent to-[#0a0a0f]"></div>
            <div className="max-w-7xl mx-auto px-6 relative">
              <div className="mb-16" style={{ opacity: 1, transform: "none" }}>
                <span className="text-amber-500 tracking-[0.2em] uppercase text-sm font-medium">
                  Focus Areas
                </span>
                <h2 className="text-4xl md:text-5xl font-light mt-4">
                  Types of{" "}
                  <span className="text-amber-500 font-medium">Events</span>
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                      From conferences and product launches to employee
                      recognition nights, we design experiences that strengthen
                      brand culture.
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                      From concerts and festivals to red-carpet experiences, we
                      craft high-energy, crowd-focused productions that
                      captivate audiences.
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-calendar w-6 h-6 text-amber-500"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium mb-3 group-hover:text-amber-500 transition-colors">
                      Annual Event
                    </h3>
                    <p className="text-white/50 leading-relaxed">
                      Celebrate milestones, anniversaries, and yearly
                      achievements with impactful and immersive event concepts.
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                      We unite communities and brands through powerful
                      experiences rooted in entertainment and culture.
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-flag w-6 h-6 text-amber-500"
                        >
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                          <line x1="4" x2="4" y1="22" y2="15"></line>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium mb-3 group-hover:text-amber-500 transition-colors">
                      Public Holidays &amp; Cultural
                    </h3>
                    <p className="text-white/50 leading-relaxed">
                      Bring communities together through themed celebrations
                      honoring national holidays and cultural heritage.
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-briefcase w-6 h-6 text-amber-500"
                        >
                          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                          <rect
                            width="20"
                            height="14"
                            x="2"
                            y="6"
                            rx="2"
                          ></rect>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium mb-3 group-hover:text-amber-500 transition-colors">
                      Executive &amp; Industry
                    </h3>
                    <p className="text-white/50 leading-relaxed">
                      Curated gatherings for leaders and professionals to
                      connect, exchange ideas, and explore partnerships.
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-32 relative bg-[#0d1117]">
            <div className="max-w-7xl mx-auto px-6">
              <div
                className="text-center mb-16"
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="text-amber-500 tracking-[0.2em] uppercase text-sm font-medium">
                  Sponsorship Opportunities
                </span>
                <h2 className="text-4xl md:text-5xl font-light mt-4 mb-4">
                  2025-2026{" "}
                  <span className="text-amber-500 font-medium">
                    Check Mate Season
                  </span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  Four major events across the UAE, each offering unique
                  sponsorship opportunities and brand visibility to global
                  audiences.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-10">
                <div
                  className="space-y-4"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="p-6 rounded-xl cursor-pointer transition-all duration-300 bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl font-bold text-amber-500">
                        01
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium mb-1 text-white">
                          2026 AD Race Weekend Experience
                        </h3>
                        <p className="text-white/50 text-sm">
                          Formula 1 Abu Dhabi Grand Prix
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chevron-right w-5 h-5 transition-transform text-amber-500 rotate-90"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl cursor-pointer transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05] border-l-4 border-transparent">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl font-bold text-white/20">
                        02
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium mb-1 text-white/70">
                          The Axis
                        </h3>
                        <p className="text-white/50 text-sm">
                          Traveling Stage Platform
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chevron-right w-5 h-5 transition-transform text-white/30"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl cursor-pointer transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05] border-l-4 border-transparent">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl font-bold text-white/20">
                        03
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium mb-1 text-white/70">
                          The Pulse: Outdoor Scape
                        </h3>
                        <p className="text-white/50 text-sm">
                          Open-Air Music Experience
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chevron-right w-5 h-5 transition-transform text-white/30"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl cursor-pointer transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05] border-l-4 border-transparent">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl font-bold text-white/20">
                        04
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium mb-1 text-white/70">
                          Isle of Sound
                        </h3>
                        <p className="text-white/50 text-sm">
                          Premium Island Experience
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chevron-right w-5 h-5 transition-transform text-white/30"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="relative"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="sticky top-8">
                    <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video">
                      <img
                        src="./Check Mate Events_files/photo-1568605117036-5fe5e7bab0b7"
                        alt="2026 AD Race Weekend Experience"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-amber-500 font-bold text-5xl opacity-20">
                          01
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-medium mb-4">
                      2026 AD Race Weekend Experience
                    </h3>
                    <p className="text-white/60 mb-6 leading-relaxed">
                      An electrifying large-scale music experience set against
                      the adrenaline-fueled backdrop of the Formula 1 weekend.
                      Positioned near the iconic Yas Marina Circuit, the event
                      brings together globally renowned DJs, world-class stage
                      production, and immersive visual storytelling.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-map-pin w-4 h-4 text-amber-500 mb-2"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <p className="text-xs text-white/50 mb-1">Location</p>
                        <p className="text-sm font-medium">
                          Yas Marina Circuit, Abu Dhabi
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-calendar w-4 h-4 text-amber-500 mb-2"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <p className="text-xs text-white/50 mb-1">Date</p>
                        <p className="text-sm font-medium">December 2026</p>
                      </div>
                      <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-users w-4 h-4 text-amber-500 mb-2"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <p className="text-xs text-white/50 mb-1">Audience</p>
                        <p className="text-sm font-medium line-clamp-2">
                          HNW guests, global creatives, luxury partners
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-32 relative">
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
                  href="https://check-mate-events-36b511fb.base44.app/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          </section>
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
          <section id="contact" className="py-32 relative">
            <div className="absolute inset-0 bg-[url(&#39;https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&#39;)] bg-cover bg-center opacity-5"></div>
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
        </div>
      </main>
      <footer className="bg-[#050508] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-white/50 text-sm">
                © 2026 Check Mate. All rights reserved.
              </span>
            </div>
            <div className="text-white/30 text-sm">
              Organization and Event Management
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
