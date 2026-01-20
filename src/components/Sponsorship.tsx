import { useState } from 'react';

const events = [
  {
    id: 1,
    number: "01",
    title: "2026 AD Race Weekend Experience",
    subtitle: "Formula 1 Abu Dhabi Grand Prix",
    description: "An electrifying large-scale music experience set against the adrenaline-fueled backdrop of the Formula 1 weekend. Positioned near the iconic Yas Marina Circuit, the event brings together globally renowned DJs, world-class stage production, and immersive visual storytelling.",
    image: "./Check Mate Events_files/photo-1568605117036-5fe5e7bab0b7",
    location: "Yas Marina Circuit, Abu Dhabi",
    date: "December 2026",
    audience: "HNW guests, global creatives, luxury partners"
  },
  {
    id: 2,
    number: "02",
    title: "The Axis",
    subtitle: "Traveling Stage Platform",
    description: "A revolutionary mobile entertainment platform bringing world-class performances to multiple venues across the UAE. The Axis features state-of-the-art production capabilities and creates intimate yet powerful experiences for audiences.",
    image: "./Check Mate Events_files/photo-1470229722913-7c0e2dbbafd3",
    location: "Multiple Venues, UAE",
    date: "Q2 2026",
    audience: "Music enthusiasts, cultural explorers"
  },
  {
    id: 3,
    number: "03",
    title: "The Pulse: Outdoor Scape",
    subtitle: "Open-Air Music Experience",
    description: "An immersive outdoor festival showcasing the best in electronic and contemporary music. Set in breathtaking landscapes, The Pulse combines natural beauty with cutting-edge sound and visual technology.",
    image: "./Check Mate Events_files/photo-1459749411175-04bf5292ceea",
    location: "Desert Venue, Dubai",
    date: "March 2026",
    audience: "Festival-goers, outdoor enthusiasts"
  },
  {
    id: 4,
    number: "04",
    title: "Isle of Sound",
    subtitle: "Premium Island Experience",
    description: "An exclusive island retreat combining luxury hospitality with premium live performances. Isle of Sound offers an unparalleled multi-day experience featuring boutique accommodations, gourmet dining, and world-renowned artists.",
    image: "./Check Mate Events_files/photo-1470225620780-dba8ba36b745",
    location: "Private Island, UAE",
    date: "October 2026",
    audience: "VIP clientele, luxury seekers"
  }
];

const Sponsorship = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  return (
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
            {events.map((event) => (
              <div 
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-l-4 ${
                  selectedEvent.id === event.id
                    ? 'bg-gradient-to-r from-amber-500/10 to-transparent border-amber-500'
                    : 'bg-white/[0.02] hover:bg-white/[0.05] border-transparent hover:border-amber-500/30'
                }`}
              >
              <div className="flex items-start gap-4">
                <span className={`text-2xl font-bold ${
                  selectedEvent.id === event.id ? 'text-amber-500' : 'text-white/20'
                }`}>
                  {event.number}
                </span>
                <div className="flex-1">
                  <h3 className={`text-xl font-medium mb-1 ${
                    selectedEvent.id === event.id ? 'text-white' : 'text-white/70'
                  }`}>
                    {event.title}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {event.subtitle}
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-chevron-right w-5 h-5 transition-transform ${
                    selectedEvent.id === event.id 
                      ? 'text-amber-500 rotate-90' 
                      : 'text-white/30'
                  }`}
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
            </div>
            ))}
          </div>
          <div
            className="relative"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="sticky top-8">
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-amber-500 font-bold text-5xl opacity-20">
                    {selectedEvent.number}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-4">
                {selectedEvent.title}
              </h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                {selectedEvent.description}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin w-4 h-4 text-amber-500 mb-2"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p className="text-xs text-white/50 mb-1">Location</p>
                  <p className="text-sm font-medium">
                    {selectedEvent.location}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  <p className="text-sm font-medium">{selectedEvent.date}</p>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users w-4 h-4 text-amber-500 mb-2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <p className="text-xs text-white/50 mb-1">Audience</p>
                  <p className="text-sm font-medium line-clamp-2">
                    {selectedEvent.audience}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
