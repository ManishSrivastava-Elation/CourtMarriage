import React from "react";
import { Link } from "react-router-dom";
import {
  FileCheck2,
  UserCheck,
  CalendarClock,
  Scale,
  Users,
  BadgeIndianRupee,
  ShieldCheck,
  FileText,
  IdCard,
  Home as HomeIcon,
  Camera,
  BookOpenCheck,
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

const heroBadges = [
  "Same-Day Guidance",
  "Independent Lawyers",
  "Lucknow Focused",
  "Transparent Fees",
];

const processSteps = [
  {
    icon: FileText,
    title: "1. Submit Request",
    desc: "Fill a short online form with the basic details of both partners  identity, address, DOB and preferred date.",
  },
  {
    icon: UserCheck,
    title: "2. Administrative Verification",
    desc: "Our team reviews the request, verifies basic details and shares document checklist over email/WhatsApp.",
  },
  {
    icon: BadgeIndianRupee,
    title: "3. Platform Fee Payment",
    desc: "Confirm the request by paying the Platform Facilitation Fee. This does not include lawyer/government fees.",
  },
  {
    icon: CalendarClock,
    title: "4. Scheduling Coordination",
    desc: "We coordinate scheduling for an interaction with an independent lawyer empanelled in Lucknow (if you request).",
  },
  {
    icon: Scale,
    title: "5. Notice / Registrar Steps",
    desc: "For Special Marriage Act  30 days notice period. For Hindu Marriage Act  registration after ceremony.",
  },
  {
    icon: FileCheck2,
    title: "6. Marriage Certificate",
    desc: "Post successful registration at the Marriage Officer's office, the certificate is issued as per applicable law.",
  },
];

const documents = [
  { icon: IdCard, title: "Age & Identity Proof", desc: "Aadhaar Card, PAN Card, Passport, Voter ID or Driving Licence (any one) of both partners." },
  { icon: HomeIcon, title: "Address Proof", desc: "Aadhaar / Passport / Ration Card / Utility Bill of Lucknow (or applicable jurisdiction) for at least one partner." },
  { icon: FileText, title: "Date of Birth Proof", desc: "10th class certificate, birth certificate or Aadhaar clearly showing DOB (Groom 21+, Bride 18+ / 21+ for SMA)." },
  { icon: Camera, title: "Passport Size Photos", desc: "68 recent color passport-size photographs of both partners with white background." },
  { icon: Users, title: "Witnesses", desc: "2 witnesses for Hindu Marriage Act, 3 witnesses for Special Marriage Act, each with their ID proof." },
  { icon: BookOpenCheck, title: "Marriage Proof (if already married)", desc: "Wedding invitation card, ceremony photos, priest / Arya Samaj certificate (as applicable)." },
  { icon: ShieldCheck, title: "Affidavits", desc: "Joint affidavit of marital status, nationality and no legal impediment (as required by the Registrar)." },
  { icon: FileCheck2, title: "Divorce / Death Certificate", desc: "If either partner was previously married  certified copy of decree of divorce or death certificate of spouse." },
];

const feeInclusions = [
  "Request intake & administrative verification",
  "Document checklist and format guidance (non-legal)",
  "Scheduling coordination with an independent lawyer",
  "Follow-up reminders and status updates",
  "Support over email / phone / WhatsApp during business hours",
];

const feeExclusions = [
  "Professional fees of the independent lawyer",
  "Government fees / Registrar office charges",
  "Notary, stamp paper and affidavit charges",
  "Travel or physical appearance charges",
  "Any outcome / result guarantee",
];

const benefits = [
  { title: "Legal Recognition", desc: "A marriage certificate is universally accepted legal proof of marriage across India and abroad." },
  { title: "Passport & Visa", desc: "Required for surname change, spouse visa applications and joint travel documents." },
  { title: "Joint Bank Accounts", desc: "Enables joint bank accounts, loans, insurance nominations and property registration." },
  { title: "Women's Protection", desc: "Strengthens legal rights and protection of women under family and matrimonial laws." },
  { title: "Inheritance & Nominee", desc: "Simplifies inheritance, pension, PF nomination and life insurance claims." },
  { title: "Government Records", desc: "Makes it easier to update marital status on Aadhaar, PAN and other IDs." },
];

const timeline = [
  { label: "Day 12", text: "Request submission, document checklist and administrative verification." },
  { label: "Day 35", text: "Scheduling coordination with independent lawyer, appointment confirmation." },
  { label: "Day 715", text: "Notice filing (for Special Marriage Act) or registration appointment (for Hindu Marriage Act)." },
  { label: "Day 3045", text: "Post 30-day notice period (SMA), solemnisation & registration at the Marriage Officer's office." },
  { label: "Day 4560", text: "Certificate issued and shared. Timelines vary based on Registrar office and jurisdiction." },
];

const faqs = [
  { q: "Where in Lucknow does the court marriage take place?", a: "Court marriages in Lucknow are usually solemnised at the office of the concerned Marriage Officer / Sub-Registrar of Marriages under the jurisdiction of the applicants' residence in the city." },
  { q: "What is the minimum age for court marriage?", a: "Under the Special Marriage Act, 1954, both the groom and bride must be at least 21 years old. Under the Hindu Marriage Act, 1955, the groom must be 21 and the bride 18." },
  { q: "How many witnesses are required?", a: "For registration under the Hindu Marriage Act, 2 witnesses are required. For Court Marriage under the Special Marriage Act, 3 witnesses are mandatory, each with valid photo ID and address proof." },
  { q: "Is a 30-day notice period always mandatory?", a: "The 30-day notice period is mandatory for Special Marriage Act (Court Marriage). It is not required for registration of an already-solemnised Hindu marriage under the Hindu Marriage Act." },
  { q: "Can inter-religion couples marry in Lucknow?", a: "Yes. Inter-religion couples typically marry under the Special Marriage Act, 1954, which permits a civil marriage regardless of religion, subject to the 30-day notice period." },
  { q: "Do both partners need to be present?", a: "Yes. Both partners must appear personally before the Marriage Officer at the time of notice, solemnisation and registration, along with the required witnesses." },
];

const WhatsAppButton = ({ text = "Chat on WhatsApp", className = "" }) => (
  <a
    href="https://wa.me/917985755455?text=Hi%2C%20I%20am%20interested%20in%20Court%20Marriage%20services%20in%20Lucknow."
    target="_blank"
    rel="noreferrer"
    className={`inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb954] text-white font-semibold px-5 py-3 rounded-md transition-colors ${className}`}
  >
    <MessageCircle size={18} /> {text}
  </a>
);

const CourtMarriage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <span>Court Marriage in Lucknow</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mt-6 items-start">
            <div className="lg:col-span-2 fade-up">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Court Marriage in Lucknow  End-to-End Administrative Facilitation
              </h1>
              <p className="mt-4 text-white/85 leading-relaxed max-w-3xl">
                Planning a court marriage in Lucknow? We help couples with document guidance,
                appointment scheduling and coordination with an <b>independent lawyer</b> empanelled with the platform 
                so the process feels simple, transparent and stress-free.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {heroBadges.map((b) => (
                  <span key={b} className="chip">{b}</span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/registration" className="btn-primary">
                  Start Court Marriage Request <ArrowRight size={18} />
                </Link>
                <a href="tel:+917985755455" className="btn-outline">
                  <Phone size={16} /> Call 07985755455
                </a>
                <WhatsAppButton />
              </div>

              <div className="mt-6 notice-box">
                <b>Note:</b> courtmarriagelucknow.com is a <b>private facilitation platform</b> based in Lucknow.
                We are <b>not a law firm</b> and do <b>not</b> provide legal advice. Any interaction with a lawyer,
                if facilitated on your request, is with an <b>independent lawyer</b>. We have <b>no</b> affiliation
                or authorization from any government body.
              </div>
            </div>

            <aside className="bg-white/[0.06] border border-white/15 rounded-xl p-6 backdrop-blur-sm fade-up">
              <div className="text-white/70 text-xs uppercase tracking-wider">Quick Facts</div>
              <ul className="mt-3 space-y-3 text-sm">
                {[
                  { l: "Applicable Acts", v: "Hindu Marriage Act, 1955 / Special Marriage Act, 1954" },
                  { l: "Minimum Age", v: "Groom 21 yrs, Bride 18 yrs (SMA: both 21)" },
                  { l: "Witnesses", v: "2 (HMA) / 3 (SMA)" },
                  { l: "Notice Period (SMA)", v: "30 days" },
                  { l: "Fees Start From", v: "500/- Platform Fee" },
                ].map((x) => (
                  <li key={x.l} className="flex flex-col border-b border-white/10 pb-2 last:border-0">
                    <span className="text-white/60 text-xs">{x.l}</span>
                    <span className="text-white font-medium">{x.v}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-white/15 text-xs text-white/70">
                Timelines vary by Registrar office, documentation completeness and applicable Act.
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="section-title">How the Court Marriage Process Works</h2>
        <div className="section-underline" />
        <p className="text-gray-600 max-w-3xl">
          A simple step-by-step overview of how we facilitate court marriage requests in Lucknow.
          Legal steps and decisions are handled by the independent lawyer; we only assist with administrative coordination.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {processSteps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="benefit-card">
                <div className="w-11 h-11 rounded-lg bg-[#ef7d1c]/10 text-[#ef7d1c] flex items-center justify-center mb-3">
                  <Icon size={22} />
                </div>
                <h4 className="font-semibold text-[#1a2f57] mb-1">{s.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Documents */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Documents Required for Court Marriage</h2>
          <div className="section-underline" />
          <p className="text-gray-600 max-w-3xl">
            Keep the following documents ready. The exact requirement may vary based on jurisdiction and applicable Act.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {documents.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#ef7d1c] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#1a2f57]/5 text-[#1a2f57] flex items-center justify-center mb-3">
                    <Icon size={18} />
                  </div>
                  <div className="font-semibold text-[#1a2f57] text-sm">{d.title}</div>
                  <p className="text-gray-600 text-xs mt-1 leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 text-sm text-amber-900">
            <AlertTriangle size={20} className="text-amber-600 flex-shrink-0" />
            <div>
              <b>Please note:</b> Documents must be original & valid. Photocopies should be self-attested.
              Additional documents may be requested by the Marriage Officer or independent lawyer based on your specific case.
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="section-title">Expected Timeline</h2>
        <div className="section-underline" />

        <div className="mt-8 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#ef7d1c]/30" />
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <div key={t.label} className={`flex md:items-center gap-4 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block flex-1" />
                <div className="w-8 h-8 rounded-full bg-[#ef7d1c] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 relative z-10 border-4 border-white shadow">{i + 1}</div>
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-5">
                  <div className="text-[#ef7d1c] font-semibold text-sm">{t.label}</div>
                  <div className="text-gray-700 text-sm mt-1 leading-relaxed">{t.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6 text-center">
          Timelines are indicative and depend on documentation completeness, Registrar availability and applicable Act.
        </p>
      </section>

      {/* Fees */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Fees & Transparency</h2>
          <div className="section-underline" />
          <p className="text-gray-600 max-w-3xl">
            Our Platform Facilitation Fee is for administrative coordination only. Legal fees of an independent
            lawyer, government charges and other statutory costs are separate and payable directly.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <div className="bg-white border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2 text-green-700 font-semibold">
                <CheckCircle2 size={20} /> Included in Platform Fee
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mt-3">
                {feeInclusions.map((x) => (
                  <li key={x} className="flex gap-2"><CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-0.5" />{x}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2 text-red-700 font-semibold">
                <AlertTriangle size={20} /> Not Included in Platform Fee
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mt-3">
                {feeExclusions.map((x) => (
                  <li key={x} className="flex gap-2"><AlertTriangle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />{x}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-[#1a2f57] text-white rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <div className="text-lg font-semibold">Starts with 500/- Platform Facilitation Fee</div>
              <div className="text-white/80 text-sm mt-1">Speak to us for a detailed quote based on your specific case.</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link to="/registration" className="btn-primary">Start Request <ArrowRight size={16} /></Link>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="section-title">Why Register Your Marriage in Court</h2>
        <div className="section-underline" />
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {benefits.map((b) => (
            <div key={b.title} className="benefit-card">
              <div className="w-10 h-10 rounded-full bg-[#ef7d1c]/10 text-[#ef7d1c] flex items-center justify-center mb-3">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-semibold text-[#1a2f57] mb-1">{b.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Court Marriage in Lucknow  FAQs</h2>
          <div className="section-underline" />
          <div className="space-y-3 mt-6">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item group">
                <summary className="flex justify-between items-center px-5 py-4 cursor-pointer list-none">
                  <span className="font-semibold text-[#1a2f57]">{f.q}</span>
                  <ChevronRight size={18} className="text-[#ef7d1c] group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="hero-gradient rounded-2xl px-6 md:px-10 py-10 text-white flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to start your court marriage in Lucknow?</h3>
            <p className="text-white/85 mt-2 max-w-xl">Submit your request in a few minutes and our team will guide you through the next steps.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/registration" className="btn-primary">Start Request <ArrowRight size={16} /></Link>
            <a href="tel:+917985755455" className="btn-outline"><Phone size={16} /> 07985755455</a>
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourtMarriage;
