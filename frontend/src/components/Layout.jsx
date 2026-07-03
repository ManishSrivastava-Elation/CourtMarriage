import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Menu, X, ArrowUp, Phone, Mail, MapPin, AlertCircle } from "lucide-react";
import { navLinks } from "../mock";

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div>
      {/* Top strip */}
      <div className="w-full bg-white border-b border-gray-200 text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex-1" />
          <div className="text-gray-700 font-medium tracking-wide">
            Timing: 10 AM - 6 PM , MON - SAT
          </div>
          <div className="flex-1 flex justify-end">
            <Link
              to="/contact"
              className="bg-[#ef7d1c] hover:bg-[#d96c15] text-white px-3 py-1 rounded font-semibold transition-colors"
            >
              Complaint
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a2f57] to-[#223e6b] flex items-center justify-center text-white font-bold text-lg">
              CM
            </div>
            <div className="leading-tight">
              <div className="font-serif text-xl font-bold text-[#1a2f57]">Court Marriage</div>
              <div className="text-[#ef7d1c] font-semibold text-sm border-t border-gray-300 pt-0.5">Lucknow</div>
            </div>
          </Link>

          <div className="hidden md:block text-center">
            <div className="text-[#1a2f57] font-bold text-base">Lucknow Private Platform for Court Marriage Counselling Facilitation</div>
            <div className="text-gray-600 text-sm mt-1">लखनऊ में कोर्ट मैरिज काउंसलिंग सुविधा हेतु निजी मंच</div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          <div className="hidden md:block w-24" />
        </div>
      </header>

      {/* Nav */}
      <nav className="bg-[#1a2f57] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex items-center gap-2 py-2">
            <Link
              to="/"
              className="nav-btn bg-[#ef7d1c] hover:bg-[#d96c15] text-white w-10 h-10 rounded-md flex items-center justify-center"
            >
              <Home size={18} />
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-btn text-sm font-semibold px-4 py-2 rounded-md ${
                  location.pathname === link.to
                    ? "bg-[#d96c15] text-white"
                    : "bg-[#ef7d1c] hover:bg-[#d96c15] text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {mobileOpen && (
            <div className="md:hidden flex flex-col gap-2 py-3">
              <Link to="/" className="bg-[#ef7d1c] text-white px-3 py-2 rounded-md text-sm font-semibold">Home</Link>
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} className="bg-[#ef7d1c] text-white px-3 py-2 rounded-md text-sm font-semibold">
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#0f1e3a] text-gray-300 mt-10">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ef7d1c] to-[#d96c15] flex items-center justify-center text-white font-bold">CM</div>
              <div>
                <div className="font-serif text-white font-bold">Court Marriage Lucknow</div>
                <div className="text-xs text-gray-400">Private Facilitation Platform</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              A private administrative facilitation platform that assists couples in Lucknow with request intake, verification and appointment coordination for court marriage.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}><Link className="footer-link" to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="footer-link" to="/terms">Terms of Service</Link></li>
              <li><Link className="footer-link" to="/disclaimer">Disclaimer</Link></li>
              <li><Link className="footer-link" to="/refund">Refund Policy</Link></li>
              <li><Link className="footer-link" to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2"><MapPin size={16} className="text-[#ef7d1c] mt-0.5" /><span>3, Kursi Rd, Tedhi Pulia, Adil Nagar, Lucknow, Uttar Pradesh 226022</span></li>
              <li className="flex gap-2"><Phone size={16} className="text-[#ef7d1c] mt-0.5" /><span>07985755455</span></li>
              <li className="flex gap-2"><Mail size={16} className="text-[#ef7d1c] mt-0.5" /><span>support@courtmarriagelucknow.com</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-start md:items-center gap-2 justify-between text-xs text-gray-400">
            <div className="flex items-start gap-2">
              <AlertCircle size={14} className="mt-0.5 text-[#ef7d1c] flex-shrink-0" />
              <span>Private platform. Not a law firm. Not affiliated with any government body.</span>
            </div>
            <div> {new Date().getFullYear()} courtmarriagelucknow.com  All rights reserved.</div>
          </div>
        </div>
      </footer>

      {showTop && (
        <div className="top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUp size={20} />
        </div>
      )}
    </div>
  );
};

export default Layout;
