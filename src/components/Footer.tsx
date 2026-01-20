const Footer = () => {
  return (
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
  );
};

export default Footer;
