import React from "react";
import LegalPage from "../components/LegalPage";

const H = ({ children }) => <h2 className="text-xl font-bold text-[#1a2f57] mt-6">{children}</h2>;
const P = ({ children }) => <p className="text-sm text-gray-700 leading-relaxed">{children}</p>;

const Refund = () => (
  <LegalPage
    title="Refund & Cancellation Policy"
    intro="This policy describes eligibility and process for refunds related to the Platform Facilitation Fee."
  >
    <H>1. Scope of the Refund Policy</H>
    <P>The Refund Policy applies only to the Platform Fee paid for administrative facilitation services. It does not cover professional fees payable to an independent lawyer, government fees, notary/stamp charges, or third-party expenses.</P>

    <H>2. When You May Be Eligible</H>
    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
      <li>If administrative facilitation has not yet commenced and you request cancellation within 2 hours of payment.</li>
      <li>If duplicate payment is made due to a technical error.</li>
      <li>Where the Company is unable to provide the administrative facilitation for reasons attributable to the Company.</li>
    </ul>

    <H>3. When You Are Not Eligible</H>
    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
      <li>If administrative facilitation has already commenced (verification, coordination, scheduling).</li>
      <li>Non-response, incorrect details, missed contact attempts, or client non-cooperation.</li>
      <li>Any legal outcome or advice provided by an independent lawyer.</li>
      <li>Chargebacks initiated without prior communication with the support team.</li>
    </ul>

    <H>4. Special Consideration</H>
    <P>In unique and exceptional circumstances, at our sole discretion, we may offer a partial refund of up to 20% as a gesture of goodwill.</P>

    <H>5. How to Request a Refund</H>
    <P>Send an email to <b>support@marriagecounselindia.org</b> from your registered email, with the subject "Refund Request  [Application ID]". Our team will respond within 24 business hours.</P>

    <H>6. Processing Time</H>
    <P>Approved refunds are processed within 715 business days to the original payment source.</P>
  </LegalPage>
);

export default Refund;
