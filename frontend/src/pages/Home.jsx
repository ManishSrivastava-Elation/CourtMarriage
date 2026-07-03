import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  CreditCard,
  ShieldCheck,
  CalendarCheck,
  Users,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Info,
} from "lucide-react";
import { processSteps, benefits, faqs } from "../mock";

const iconMap = [FileText, CreditCard, ShieldCheck, CalendarCheck, Users];

const Home = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 py-14 grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 fade-up">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Private Platform for fixing Appointment with Lawyers for Counselling related to Marriage certificate/Divorce/Marriage
            </h1>
            <p className="mt-5 text-white/85 leading-relaxed max-w-3xl">
              Submit your request and pay a <b>Platform Facilitation Fee</b> for administrative coordination, verification, and scheduling support. If you <b>expressly request</b> it, we may facilitate coordination for an interaction with an <b>independent lawyer</b> (subject to availability and the lawyer's independent acceptance).
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/registration" className="btn-primary">
                Start Request (Starts with 500/-)
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline">Contact Support</Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip">1) Submit details</span>
              <span className="chip">2) Verification & coordination</span>
              <span className="chip">3) Scheduling support (if requested)</span>
            </div>

            <div className="mt-8 notice-box">
              <b>Important:</b> MarriageCounselIndia.org is a <b>private platform</b>. We are <b>not a law firm</b> and do <b>not</b> provide legal advice, legal counselling, or legal representation. We do <b>not</b> represent any government authority and have <b>no</b> affiliation, authorization, or endorsement (direct or implied) with any government body. Any interaction with a lawyer (if facilitated) is with an <b>independent lawyer</b> directly and is based solely on your request and consent. The platform does <b>not</b> recommend, rank, select, assign, or guarantee any lawyer.
              <div className="mt-2 text-[13px]">
                Read: <Link className="underline" to="/terms">Terms</Link>  <Link className="underline" to="/disclaimer">Disclaimer</Link>  <Link className="underline" to="/refund">Refund Policy</Link>
                <span className="mx-2">|</span>
                <b>Response time:</b> usually within <b>24 business hours</b> (excluding weekends/holidays).
              </div>
            </div>
          </div>

          {/* Sidebar card */}
          <aside className="bg-white/[0.06] border border-white/15 rounded-xl p-6 backdrop-blur-sm fade-up">
            <h3 className="text-lg font-semibold text-white">What your fees covers</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Administrative request handling & verification",
                "Coordination and scheduling assistance",
                "Status updates and communication support",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-white/90 text-sm">
                  <CheckCircle2 size={18} className="text-[#ef7d1c] mt-0.5 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-white/15 text-sm text-white/80">
              <b>Not included:</b> Government fees, court/office fees, notary/stamp/courier costs, or any outcome guarantee.
            </div>
          </aside>
        </div>
      </section>

      {/* Info & Process Overview */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="section-title">Information & Process Overview</h2>
        <div className="section-underline" />
        <p className="text-gray-600 max-w-3xl">
          General, administrative information to help you understand the process. For legal advice, consult an independent lawyer directly.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 text-[#1a2f57] font-bold text-lg"><Info size={20} className="text-[#ef7d1c]" /> What We Are</div>
            <p className="text-gray-700 mt-3 leading-relaxed text-sm">
              Marriage Counsel India is a <b>private administrative facilitation platform</b> that assists users with request intake, basic verification, coordination, and appointment-scheduling support related to marriage-registration processes.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed text-sm">
              We are <b>not a law firm</b> and we do <b>not</b> provide legal advice, legal counselling, or legal representation. Our role is limited to <b>administrative coordination</b> to help users connect with an <b>independent lawyer</b>, strictly upon the user's request and subject to availability.
            </p>

            <h4 className="mt-5 font-semibold text-[#1a2f57]">What We Do</h4>
            <ol className="list-decimal ml-5 text-sm text-gray-700 mt-2 space-y-1">
              <li>Collect and review user-submitted information for administrative coordination purposes.</li>
              <li>Facilitate scheduling support for a phone interaction with an independent lawyer, if requested.</li>
              <li>Share appointment details and call instructions after confirmation and verification.</li>
            </ol>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 text-[#1a2f57] font-bold text-lg"><ShieldCheck size={20} className="text-[#ef7d1c]" /> How the Platform Works</div>
            <ol className="list-decimal ml-5 text-sm text-gray-700 mt-4 space-y-2 leading-relaxed">
              <li>You submit a brief information form with your basic details and requirements.</li>
              <li>Our team performs administrative verification and coordination.</li>
              <li>You make payment for the <b>Platform Facilitation Fee</b> to confirm your request.</li>
              <li>If you request it, we may facilitate scheduling for an interaction with an <b>independent lawyer</b>.</li>
              <li>Any consultation, advice, or guidance is provided solely by the independent lawyer.</li>
            </ol>
            <div className="mt-4 text-xs text-gray-500 border-l-2 border-[#ef7d1c] pl-3">
              <b>Note:</b> The platform provides administrative facilitation only. Any legal advice (if any) is provided solely by an independent lawyer.
            </div>
          </div>
        </div>

        {/* Process cards */}
        <div className="mt-10">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-[#1a2f57]">How the Platform Works</h3>
            <p className="text-gray-700 mt-2 text-sm">Request submission  administrative verification  coordination & scheduling support (as applicable).</p>
            <p className="text-[#ef7d1c] mt-1 text-sm">We do not recommend, rank, certify, or guarantee any lawyer. Availability may vary by location, time, and the lawyer's independent acceptance.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[i];
              return (
                <div key={step.title} className="process-card">
                  <div className="mx-auto w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <Icon size={22} />
                  </div>
                  <div className="font-semibold text-sm mb-1">{step.title}</div>
                  <div className="text-xs text-white/85">{step.desc}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 bg-[#1a2f57] text-white rounded-xl p-5">
            <div className="flex-1 min-w-[260px]">
              <div className="font-semibold">Need administrative facilitation for a marriage-Law related process?</div>
              <div className="text-white/80 text-sm mt-1">Start your request today. It only takes a few minutes.</div>
            </div>
            <Link to="/registration" className="btn-primary">Start Request <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Benefits Of Marriage Registration</h2>
          <div className="section-underline" />
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {benefits.map((b) => (
              <div key={b.title} className="benefit-card">
                <div className="w-10 h-10 rounded-full bg-[#ef7d1c]/10 text-[#ef7d1c] flex items-center justify-center mb-3">
                  <CheckCircle2 size={20} />
                </div>
                <h4 className="font-semibold text-[#1a2f57] mb-2">{b.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="section-title">FAQ Of Marriage Registration</h2>
        <div className="section-underline" />
        <div className="space-y-3 mt-6">
          {faqs.map((f, i) => (
            <div key={f.q} className="faq-item">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <span className="font-semibold text-[#1a2f57]">{f.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-[#ef7d1c] transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
