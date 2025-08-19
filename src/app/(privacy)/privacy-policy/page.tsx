"use client"
import Header from '@/components/Header';
import { ListTextPrivacy } from '../_components/list-text';
import Footer from '@/components/Footer';
import { useTheme } from '@/context/ThemeContext';

const PrivacyPolicyPage = () => {
    const { isDarkMode } = useTheme()
  return (
    <div className="w-full flex items-center justify-center flex-col gap-5 mt-4 md:mt-10 relative">
      <Header />
      <div className="w-full h-full pt-4 pb-4 md:py-6 px-4 flex flex-col items-start justify-center gap-5 md:gap-8 mt-14 md:mt-20 md:px-16 lg:px-20">
        
        {/* Heading */}
        <div className="w-full flex flex-col gap-4 md:gap-6">
          <h1 className="text-3xl md:text-[48px] font-bold w-full text-start">Privacy Policy</h1>
          <p className={`text-start w-full font-medium text-sm md:text-lg ${isDarkMode ? 'text-[#dbdbdb]' : 'text-[#000]'}`}>
            GrnLYFT (“we”, “our”, “us”) provides sustainable B2B electric-vehicle transportation solutions in India. 
            This Privacy Policy explains what information we collect, how we use it, how we share it, how we secure it, and 
            the rights available to our users and business clients. 
            <br /> Last updated: [Insert Date]
          </p>
          <div className="bg-[#fff]/20 h-[2px] w-full" />
        </div>

        {/* Scope */}
        <ListTextPrivacy
          title="Scope of This Policy"
          list1="Visitors to our website"
          list2="Representatives of our business customers and prospects"
          list3="Drivers and personnel engaged via client programs"
          list4="Individuals contacting us by phone, email, or forms"
          list5="Users of any GrnLYFT management platform or portal"
        />

        {/* Information we collect */}
        <ListTextPrivacy
          title="Information We Collect"
          description="We collect the following categories of information:"
          list1="Information Provided by You: name, job title, company, business email, phone, billing details, GST, messages, contracts."
          list2="Account & Portal Data: usernames, roles, permissions, support requests."
          list3="Driver/Personnel Data (if applicable): license number, training records, schedules, attendance, incident logs."
          list4="Automatically Collected Data: IP address, browser/device, pages viewed, cookies, session logs, platform usage."
          list5="Fleet & Telemetry: GPS location, mileage, charging and battery status, driving behavior, uptime and maintenance (mostly in aggregated or pseudonymized form)."
          list6="From Third Parties: KYC verification, background-check vendors, payment processors, GST/compliance databases."
        />

        {/* Why we use info */}
        <ListTextPrivacy
          title="Why We Use Your Information"
          list1="Service Delivery: provide EV fleet services, charging, driver management, platform access."
          list2="Customer Support: respond to inquiries, manage incidents."
          list3="Safety & Compliance: identity verification, audits, legal compliance."
          list4="Billing & Accounts: invoicing, collections, reconciliations."
          list5="Platform Improvement: troubleshooting, monitoring, analytics."
          list6="Sustainability Reporting: aggregated CO₂ reduction metrics for ESG reporting."
          list7="Marketing (B2B): product updates, invitations, service announcements (with opt‑out option)."
        />

        {/* Cookies */}
        <ListTextPrivacy title="Cookies and Similar Technologies">
          We use cookies and similar tools for essential site functionality, analytics, and preferences. 
          Where required, we show a cookie banner to obtain consent. 
          Users can adjust cookie settings in their browser. Disabling some cookies may impact features.
        </ListTextPrivacy>

        {/* Sharing */}
        <ListTextPrivacy
          title="How We Share Information"
          list1="Service providers: hosting, analytics, payments, support, background checks."
          list2="Business clients: operational data, sustainability reports (aggregated/pseudonymized when possible)."
          list3="Legal & Compliance: as required by law or lawful requests."
          list4="Corporate Transactions: during mergers, acquisitions, or restructuring with safeguards."
        >
          We do not sell personal data.
        </ListTextPrivacy>

        {/* International transfers */}
        <ListTextPrivacy title="International Data Transfers">
          Data is primarily stored and processed in India. If transferred abroad (e.g., via cloud providers), 
          appropriate safeguards such as contractual clauses or certifications are applied.
        </ListTextPrivacy>

        {/* Retention */}
        <ListTextPrivacy title="Data Retention">
          Information is retained only as long as necessary for business, legal, or operational reasons 
          (e.g., contracts per statutory requirements, logs for diagnostics). Data no longer needed is deleted securely.
        </ListTextPrivacy>

        {/* Security */}
        <ListTextPrivacy title="Security">
          We use administrative, technical, and physical safeguards such as encryption, access controls, and monitoring. 
          No method is 100% secure, but we continually improve protections.
        </ListTextPrivacy>

        {/* Your Rights */}
        <ListTextPrivacy
          title="Your Rights and Choices"
          list1="Access & Confirmation: request a copy of your data."
          list2="Correction: request data rectification."
          list3="Deletion: request data deletion (with legal exceptions)."
          list4="Consent Management: withdraw consent or opt‑out from marketing."
          list5="Grievance Redressal: contact our Grievance Officer for complaints."
        >
          Under India’s DPDP Act, 2023, we respond to requests within mandated timelines.
        </ListTextPrivacy>
        
        {/* Children */}
        <ListTextPrivacy title="Children’s Privacy">
          Our services are B2B, not directed to children. We do not knowingly collect children’s data.
        </ListTextPrivacy>

        {/* Third party links */}
        <ListTextPrivacy title="Third‑Party Links and Services">
          Our website or platform may link to third-party tools. Their practices are subject to their own privacy policies.
        </ListTextPrivacy>

        {/* Changes */}
        <ListTextPrivacy title="Changes to This Policy">
          We may update this policy for legal or operational reasons. The “Last updated” date reflects the latest version. 
          Material changes will be notified via website, email, or portal.
        </ListTextPrivacy>

        {/* Contact */}
        <ListTextPrivacy title="Contact and Grievance Officer">
          Grievance Officer: [Insert Name] <br />
          Email: [Insert Email] <br />
          Phone: +91 96633 77673 / +91 94773 36606 <br />
          Address: 1, Meher Ali Road, 1st Floor, Kolkata 700017, India
        </ListTextPrivacy>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
          <div className={`w-full md:w-1/2 border-l h-14 md:h-20 flex flex-col gap-3 px-4 items-center justify-center ${isDarkMode ? 'border-[#dbdbdb]/40' : 'border-[#4A4A4A]/40'}`}>
            <p className={`text-[14px] font-medium ${isDarkMode ? 'text-[#dbdbdb]' : 'text-[#000]'}`}>
              1, Meher Ali Road, 1st Floor, Kolkata 700017, India
            </p>
          </div>
          <div className={`w-full md:w-1/2 border-l h-14 md:h-20 flex flex-col gap-2 px-4 items-start justify-center ${isDarkMode ? 'border-[#dbdbdb]/40' : 'border-[#4A4A4A]/40'}`}>
            <p className={`text-[14px] font-medium ${isDarkMode ? 'text-[#dbdbdb]' : 'text-[#000]'}`}>+91 96633 77673 / +91 94773 36606</p>
            <p className={`text-[14px] font-medium ${isDarkMode ? 'text-[#dbdbdb]' : 'text-[#000]'}`}>[Insert Email]</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
