import React from "react";
import { Link } from "react-router-dom";

const LegalPage = ({ title, intro, children }) => (
  <div>
    <div className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {intro && <p className="text-white/85 mt-3 max-w-3xl leading-relaxed">{intro}</p>}
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-10 space-y-6 text-gray-700 leading-relaxed">
        {children}
        <div className="pt-6 border-t border-gray-200 text-sm">
          Related: <Link to="/terms" className="text-[#ef7d1c] hover:underline mr-3">Terms</Link>
          <Link to="/disclaimer" className="text-[#ef7d1c] hover:underline mr-3">Disclaimer</Link>
          <Link to="/refund" className="text-[#ef7d1c] hover:underline">Refund Policy</Link>
        </div>
      </div>
    </div>
  </div>
);

export default LegalPage;
