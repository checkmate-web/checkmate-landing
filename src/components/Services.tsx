import { useState } from 'react';

interface ServicesProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  openModal: () => void;
}

const Services = ({ isModalOpen, setIsModalOpen, openModal }: ServicesProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    number: '',
    message: ''
  });
  
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ companyName: '', email: '', number: '', message: '' });
    setSubmitStatus('idle');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      setIsSubmitting(false);

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  return (
    <>
    <section id="services" className="py-32 relative bg-gradient-to-b from-[#0a0a0f] to-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="text-center mb-16"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-amber-500 tracking-[0.2em] uppercase text-sm font-medium">
            Partner With Check Mate
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">
            Our <span className="text-amber-500 font-medium">Services</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Partner with us to design and architect events with precision and
            impact. Whether hosted in the UAE with world-class talent or
            expanded globally across any region, we work with our partners to
            craft a compelling narrative and ensure every brand touchpoints are
            strategically delivered.<br /> Book your consultation to begin ideation,
            scoping and planning.
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
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles w-7 h-7 text-amber-500"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Creative Direction</h3>
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
                strokeLinecap="round"
                strokeLinejoin="round"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users w-7 h-7 text-amber-500"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Brand Partnerships</h3>
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
                strokeLinecap="round"
                strokeLinejoin="round"
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
                strokeLinecap="round"
                strokeLinejoin="round"
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
                strokeLinecap="round"
                strokeLinejoin="round"
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
                <span className="text-amber-500 font-medium">Solutions</span>
              </h3>
              <p className="text-white/60 mb-6">
                Check Mate offers bundled travel and experience packages, ideal
                for international sponsors and partners bringing guests.
              </p>
              <a
                href="#contact"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={openModal}
                className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all cursor-pointer"
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
              </button>
              {/* <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10">
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
              </div> */}
              {/* <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10">
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
                  className="lucide lucide-plane w-5 h-5 text-amber-500"
                >
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                </svg>
                <span className="font-medium">Flight Packages</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Modal */}
    {isModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        ></div>
        
        {/* Modal Content */}
        <div className="relative bg-[#0d1117] border border-white/10 rounded-2xl max-w-md w-full p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
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
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>

          <h3 className="text-2xl font-bold text-white mb-2 text-left">Event Inquiry</h3>
          <p className="text-white/60 mb-6 text-left">Fill out the form and we'll get back to you shortly.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-white/80 mb-2 text-left">
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-amber-500/50 transition-colors"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2 text-left">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-amber-500/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="number" className="block text-sm font-medium text-white/80 mb-2 text-left">
                Phone Number *
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-amber-500/50 transition-colors"
                placeholder="+971 XX XXX XXXX"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2 text-left">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                placeholder="Tell us about your event requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </button>

            {submitStatus === 'success' && (
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm text-center">
                ✓ Your inquiry has been sent successfully!
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
                ✗ Failed to send inquiry. Please try again or contact us directly.
              </div>
            )}
          </form>
        </div>
      </div>
    )}
  </>
  );
};

export default Services;
