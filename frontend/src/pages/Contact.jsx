import React, { useState } from "react";
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const change = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <div>
      <div className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <span className="chip">New</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-4">Contact Us</h1>
          <p className="text-white/85 mt-3 max-w-2xl">
            We're here to help. Reach out to us with your questions, concerns, or feedback. For queries about our services, please contact us directly via the details below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#1a2f57]">Contact Information</h3>
            <div className="section-underline mt-2" />

            <InfoRow icon={MapPin} title="Address">
              3, Kursi Rd, Tedhi Pulia,<br />Adil Nagar, Lucknow,<br />Uttar Pradesh 226022
            </InfoRow>
            <InfoRow icon={Phone} title="Phone">
              <a href="tel:+917985755455" className="text-[#ef7d1c] hover:underline">07985755455</a> <span className="text-gray-500 text-sm">(Office)</span>
            </InfoRow>
            <InfoRow icon={Mail} title="Email">
              <a href="mailto:support@courtmarriagelucknow.com" className="text-[#ef7d1c] hover:underline break-all">support@courtmarriagelucknow.com</a>
            </InfoRow>
            <InfoRow icon={MessageSquare} title="Grievance Cell">
              For official grievances, contact our Grievance Officer at <b>support@courtmarriagelucknow.com</b> with "Grievance" in the subject line.
            </InfoRow>
          </div>

          <div className="bg-[#1a2f57] text-white rounded-xl p-6">
            <h4 className="font-semibold">Working Hours</h4>
            <div className="text-white/85 text-sm mt-2">Monday  Saturday</div>
            <div className="text-white/85 text-sm">10:00 AM  06:00 PM</div>
            <div className="text-white/70 text-xs mt-3">Closed on public holidays. Response time within 24 business hours.</div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#1a2f57]">Send Us a Message</h3>
            <p className="text-sm text-gray-500 mt-1">We will respond within 24 business hours (Mon-Sat).</p>
            <div className="section-underline mt-2" />

            {sent && (
              <div className="my-4 bg-green-50 border border-green-200 rounded-lg p-3 text-green-800 text-sm flex gap-2">
                <CheckCircle2 size={18} /> Thank you! Your message has been recorded (demo).
              </div>
            )}

            <form onSubmit={submit} className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="label-text">Your Name</label>
                <input required value={form.name} onChange={change("name")} className="input-field" placeholder="Full name" />
              </div>
              <div>
                <label className="label-text">Email</label>
                <input required type="email" value={form.email} onChange={change("email")} className="input-field" placeholder="you@example.com" />
              </div>
              <div className="md:col-span-2">
                <label className="label-text">Subject</label>
                <input required value={form.subject} onChange={change("subject")} className="input-field" placeholder="How can we help?" />
              </div>
              <div className="md:col-span-2">
                <label className="label-text">Message</label>
                <textarea required rows={5} value={form.message} onChange={change("message")} className="input-field" placeholder="Write your message here..." />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="btn-primary">Send Message <Send size={16} /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ icon: Icon, title, children }) => (
  <div className="mt-5">
    <div className="flex items-center gap-2 text-[#1a2f57] font-semibold">
      <Icon size={18} className="text-[#ef7d1c]" />
      <span>{title}</span>
    </div>
    <div className="text-gray-600 text-sm mt-1 leading-relaxed pl-6">{children}</div>
  </div>
);

export default Contact;
