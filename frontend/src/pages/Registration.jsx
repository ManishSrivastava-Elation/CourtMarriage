import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { indianStates, religions } from "../mock";

const SectionHead = ({ badge, title, subtitle }) => (
  <div className="flex items-start mb-5">
    <span className="section-badge">{badge}</span>
    <div>
      <h3 className="text-lg font-bold text-[#1a2f57]">{title}</h3>
      {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
    </div>
  </div>
);

const Registration = () => {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [alreadyMarried, setAlreadyMarried] = useState("Yes");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex items-center gap-2 text-[#ef7d1c] text-sm font-semibold">
            <AlertTriangle size={16} /> Note
          </div>
          <p className="text-white/85 text-sm max-w-4xl mt-2 leading-relaxed">
            This platform is intended solely for submitting a service request for administrative facilitation and counselling coordination related to marriage certificate and court marriage matters. The platform is operated by an independent private entity and does not provide legal advice, legal representation, or government services, and is not affiliated with, authorized by, or endorsed by any government department or authority.
          </p>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold">Marriage Certificate</h1>
          <p className="text-white/85 mt-2">Simplifying the Couple's Journey Through Counselling Facilitation</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          {submitted && (
            <div className="mb-5 bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-0.5" size={20} />
              <div>
                <div className="font-semibold">Request submitted (demo)</div>
                <div className="text-sm">This is a mocked demo submission. In production, your details would proceed to payment and verification.</div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-[#1a2f57]">Information Form <span className="text-gray-500 text-sm font-normal">/  जानकारी फ़ॉर्म</span></h2>
            <h3 className="text-base font-semibold text-gray-700 mt-1">Applicant Information Form</h3>
            <p className="text-xs text-gray-500 mt-1">कृपया सभी विवरण सही-सही भरें</p>

            <form onSubmit={handleSubmit} className="mt-6">
              {/* Marriage Details */}
              <SectionHead badge={"1"} title="Marriage Details" subtitle="Provide the date your marriage was solemnized." />
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="label-text">Date of Marriage</label>
                  <input type="date" className="input-field" />
                  <div className="helper-text">Enter the date your marriage was solemnized (DD/MM/YYYY).</div>
                </div>
                <div>
                  <label className="label-text">Marriage Solemnized?</label>
                  <div className="flex gap-2">
                    {["Yes", "No"].map((v) => (
                      <button
                        type="button"
                        key={v}
                        onClick={() => setAlreadyMarried(v)}
                        className={`px-5 py-2 rounded-md text-sm font-semibold border transition-colors ${
                          alreadyMarried === v
                            ? "bg-[#ef7d1c] text-white border-[#ef7d1c]"
                            : "bg-white text-gray-700 border-gray-300 hover:border-[#ef7d1c]"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                  <div className="helper-text">Marriage certificate can be obtained after marriage only.</div>
                </div>
              </div>

              <div className="h-px bg-gray-100 my-8" />

              {/* Groom */}
              <SectionHead badge={"A"} title="Groom (Boy) Details" />
              <PersonFields />

              <div className="h-px bg-gray-100 my-8" />

              {/* Bride */}
              <SectionHead badge={"B"} title="Bride (Girl) Details" />
              <PersonFields />

              <div className="h-px bg-gray-100 my-8" />

              <label className="flex gap-3 items-start text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 accent-[#ef7d1c] w-4 h-4"
                />
                <span>
                  I hereby confirm that I have carefully read, understood, and agreed to the <Link to="/terms" className="text-[#ef7d1c] underline">Terms of Service</Link>. By clicking Submit Application and proceeding with payment, I acknowledge that I am voluntarily initiating a service request with a private platform that assists in administrative facilitation, case management support, and appointment scheduling for legal counselling with independent lawyers.
                </span>
              </label>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={!agreed}
                  className={`btn-primary ${!agreed ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Submit Application <ArrowRight size={18} />
                </button>
                <button
                  type="reset"
                  className="px-5 py-3 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Instructions */}
        <aside className="space-y-5">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-[#1a2f57] text-lg">Instructions to Fill</h3>
            <p className="text-xs text-gray-500 mt-0.5">फ़ॉर्म भरने के निर्देश</p>
            <div className="section-underline mt-3" />

            {[
              { t: "1. Date of Marriage", d: "Enter the actual date when the marriage ceremony was performed in DD/MM/YYYY format." },
              { t: "2. Groom Details", d: "Enter the groom's full name as mentioned on Aadhaar / Passport. Groom must be at least 21 years old." },
              { t: "3. Groom Address", d: "Enter complete current address including house/flat number, street, area, city, state and 6-digit PIN." },
              { t: "4. Bride Details", d: "Enter the bride's full name as mentioned on Aadhaar / Passport. Bride must be at least 18 years old." },
              { t: "5. Bride Address", d: "Address details should be accurate for communication and processing purposes." },
              { t: "6. Before Submission", d: "Verify all names, mobile numbers, emails and dates. Tick the Terms checkbox before submitting." },
            ].map((x) => (
              <div key={x.t} className="mt-4">
                <div className="font-semibold text-sm text-[#1a2f57]">{x.t}</div>
                <div className="text-sm text-gray-600 mt-1 leading-relaxed">{x.d}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#1a2f57] text-white rounded-xl p-6">
            <h4 className="font-semibold">Need Help?</h4>
            <p className="text-sm text-white/80 mt-2">Reach our support team for any queries related to your request.</p>
            <Link to="/contact" className="btn-primary mt-4">Contact Support <ArrowRight size={16} /></Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

const PersonFields = () => (
  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <label className="label-text">Full Name</label>
      <input className="input-field" placeholder="As per official ID" />
    </div>
    <div>
      <label className="label-text">Email ID</label>
      <input type="email" className="input-field" placeholder="you@example.com" />
    </div>
    <div>
      <label className="label-text">Mobile Number</label>
      <input className="input-field" placeholder="10-digit number" maxLength={10} />
    </div>
    <div>
      <label className="label-text">Date of Birth</label>
      <input type="date" className="input-field" />
    </div>
    <div>
      <label className="label-text">Marital Status</label>
      <select className="input-field">
        <option>Married</option>
        <option>Unmarried</option>
        <option>Divorced</option>
        <option>Widowed</option>
      </select>
    </div>
    <div>
      <label className="label-text">Religion</label>
      <select className="input-field">
        <option value="">Select...</option>
        {religions.map((r) => (
          <option key={r}>{r}</option>
        ))}
      </select>
    </div>
    <div className="md:col-span-2 mt-2">
      <div className="font-semibold text-sm text-[#1a2f57] mb-2">Current Address</div>
      <div className="grid md:grid-cols-2 gap-4">
        <input className="input-field" placeholder="Address Line 1 (House/Flat, Street)" />
        <input className="input-field" placeholder="Address Line 2 (Area, Landmark) - Optional" />
        <input className="input-field" placeholder="City / District" />
        <select className="input-field">
          <option value="">Select State</option>
          {indianStates.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <input className="input-field" placeholder="PIN Code (6-digit)" maxLength={6} />
      </div>
    </div>
  </div>
);

export default Registration;
