import React from "react";
import LegalPage from "../components/LegalPage";

const H = ({ children }) => <h2 className="text-xl font-bold text-[#1a2f57] mt-6">{children}</h2>;
const P = ({ children }) => <p className="text-sm text-gray-700 leading-relaxed">{children}</p>;

const Disclaimer = () => (
  <LegalPage
    title="Disclaimer"
    intro="Please read this page carefully before using the Platform or submitting any request."
  >
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
      <b>Very Important: Private Platform  Not a Law Firm / Not a Government Website.</b>
      courtmarriagelucknow.com is a private administrative facilitation and case-management platform. We are NOT a law firm, we do NOT provide legal advice, legal counselling, or legal representation, and we are NOT a government website.
    </div>

    <H>1. General Information Only (No Legal Advice)</H>
    <P>The content on this Platform is provided for general informational purposes only. It is not legal advice and must not be treated as a substitute for professional legal consultation.</P>

    <H>2. Nature of Our Service (Administrative Facilitation Only)</H>
    <P>The Platform provides administrative assistance such as request processing, coordination, scheduling facilitation, reminders, and basic case-management support.</P>

    <H>3. No Lawyer-Client Relationship With the Company</H>
    <P>Your use of this Platform does NOT create a Lawyer-client relationship between you and the Company. A Lawyer-client relationship, if any, is formed only when you directly engage an independent Lawyer.</P>

    <H>4. No Recommendation / No Assignment / No Guarantee</H>
    <P>The Company does NOT recommend, endorse, rank, certify, or guarantee any Lawyer.</P>

    <H>5. Payments & Fees</H>
    <P>Any amount paid on the Platform is a Platform Facilitation Fee for administrative coordination and platform services. This Platform Fee is not a legal fee and does not include legal advice or legal representation.</P>

    <H>6. No Guarantees / No Warranties</H>
    <P>The Company does not make any warranty regarding completeness, accuracy, or timeliness of information on the Platform. The Company does not guarantee any legal or administrative outcome.</P>

    <H>7. Communications, Virtual Numbers & Call Recording</H>
    <P>Communications may be facilitated through system-generated channels or virtual numbers. Calls may be recorded for quality, security, and compliance purposes where permitted by law.</P>

    <H>8. Limitation of Liability</H>
    <P>To the maximum extent permitted by law, the Company shall not be liable for direct or indirect losses arising out of use of the Platform or interactions with any independent Lawyer.</P>

    <H>9. Third-Party Links</H>
    <P>This Platform may contain links to third-party sites for convenience. We do not control or endorse third-party content.</P>

    <H>10. Governing Law</H>
    <P>This Disclaimer shall be governed by the laws of India.</P>

    <H>11. Contact</H>
    <P>For questions about this Disclaimer, contact us at <b>support@courtmarriagelucknow.com</b>.</P>
  </LegalPage>
);

export default Disclaimer;
