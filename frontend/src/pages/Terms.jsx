import React from "react";
import LegalPage from "../components/LegalPage";

const H = ({ children }) => <h2 className="text-xl font-bold text-[#1a2f57] mt-6">{children}</h2>;
const P = ({ children }) => <p className="text-sm text-gray-700 leading-relaxed">{children}</p>;

const Terms = () => (
  <LegalPage
    title="Terms and Conditions of Service"
    intro="Please read this document carefully. These Terms govern your use of the Platform and the administrative facilitation services provided by MarriageCounselIndia.org."
  >
    <P>
      Welcome to <b>MarriageCounselIndia.org</b> (the "Platform"). These Terms and Conditions ("Terms") form a legally binding agreement between you ("User/Client") and the Company (Omvin) operating the Platform ("Company", "we", "us").
      By accessing the Platform, submitting a request, or using the Services, you confirm that you have read, understood, and agree to these Terms.
    </P>

    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
      <b>Important Compliance Notice:</b> The Company is a <b>private administrative facilitation and case management platform</b>. We are <b>NOT</b> a law firm and we do <b>NOT</b> provide legal advice, legal counselling, or legal representation. Any legal advice, consultation, or representation is provided solely by an <b>independent lawyer</b> in his/her independent professional capacity, directly to the User.
    </div>

    <H>1. Definitions</H>
    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
      <li><b>Company:</b> The private entity operating MarriageCounselIndia.org.</li>
      <li><b>Platform:</b> The website, forms, communications, and software systems operated by the Company.</li>
      <li><b>User/Client:</b> Any person who visits the Platform or requests Services.</li>
      <li><b>Lawyer:</b> An independent legal professional enrolled with a State Bar Council in India.</li>
      <li><b>Services:</b> Administrative coordination, appointment scheduling facilitation, documentation organization (non-legal), status tracking, and communication support.</li>
      <li><b>Platform Fee:</b> The fee charged by the Company solely for the Services described above.</li>
      <li><b>Business Hours:</b> Hours published by the Company, which may vary and may exclude public holidays/weekends.</li>
    </ul>

    <H>2. Legal Nature of Platform</H>
    <P>
      The Platform operates strictly as an administrative facilitator and case-management support system. The Company does not practice law, does not render legal opinions, does not interpret legal provisions for Users, and does not draft legal content.
    </P>

    <H>3. Scope of Services</H>
    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
      <li>Appointment Facilitation (User-initiated).</li>
      <li>Documentation Organization (Non-Legal).</li>
      <li>Communication Support / Virtual Number.</li>
      <li>Case-Management Support (reminders and status tracking).</li>
      <li>No guarantee of availability or response time.</li>
    </ul>

    <H>4. Charges & Fee Structure</H>
    <P>
      Any amount paid on the Platform is strictly the Company's <b>Platform Fee</b> for administrative facilitation/case-management services. The Platform Fee does <b>NOT</b> include legal advice, court/government fees, or any professional fees charged by an independent lawyer.
    </P>

    <H>5. Contract Formation & Commencement</H>
    <P>
      A binding contract for administrative Services is formed when the User submits a request and pays the Platform Fee. No Lawyer-Client relationship is created by form submission or payment of the Platform Fee.
    </P>

    <H>6. Lawyer Relationship Disclaimer</H>
    <P>
      Lawyers are independent professionals. The Company does not supervise, direct, or control a Lawyer's professional judgement, legal advice, strategy, or conduct.
    </P>

    <H>7. No Recommendation / No Assignment</H>
    <P>
      The Company does not recommend, endorse, rank, certify, rate, or guarantee any Lawyer. The Platform does not assign Lawyers or solicit legal work on behalf of Lawyers.
    </P>

    <H>8. Disclaimer of Advice & Outcomes</H>
    <P>
      Nothing on the Platform constitutes legal advice or guarantees. The Company does not guarantee outcomes, timelines, success, or results in any matter.
    </P>

    <H>9. Refund / Cancellation</H>
    <P>
      Refunds (if any) are governed strictly by the Platform's Refund Policy. Refund eligibility relates only to the Platform Fee and administrative Services.
    </P>

    <H>10. User Obligations</H>
    <P>
      The User agrees to provide accurate and complete details and remain reasonably available for coordination after confirmation.
    </P>

    <H>11. Data Protection & Communication</H>
    <P>
      The Company processes User data for administrative facilitation, customer support, fraud prevention, and compliance. The Company does not sell personal data to third parties.
    </P>

    <H>12. Limitation of Liability</H>
    <P>
      The Company is not liable for any advice given by a Lawyer, any action/inaction by a Lawyer, or any legal outcome. The Company's aggregate liability shall be limited to the Platform Fee paid by the User.
    </P>

    <H>13. Governing Law / Jurisdiction</H>
    <P>
      These Terms shall be governed by the laws of India. Courts at Jhunjhunu, Rajasthan / Dehradun, Uttarakhand shall have jurisdiction.
    </P>

    <H>14. Grievance / Contact</H>
    <P>
      For support or grievances, contact us at <b>support@marriagecounselindia.org</b> / 0120-3134441.
    </P>
  </LegalPage>
);

export default Terms;
