import Header from '@/components/Header';
import { ListTextPrivacy } from '../_components/list-text';
import Footer from '@/components/Footer';

const TermsConditionsPage = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-5 mt-4 md:mt-10 relative">
      <Header />
      <div className="w-full h-full pt-4 pb-4 md:py-6 px-4 flex flex-col items-start justify-center gap-5 md:gap-8 mt-14 md:mt-20 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="w-full flex flex-col gap-4 md:gap-6">
          <h1 className="text-3xl md:text-[48px] font-bold w-full text-start">Terms & Conditions</h1>
          <p className="text-start w-full font-medium text-sm md:text-lg text-[#dbdbdb]">
            These Terms & Conditions govern access to and use of GrnLYFT’s website, platforms, and B2B EV transportation services.
            By accessing our website or using our services, the organization and its authorized users agree to these Terms.
            <br /> Last updated: [Insert Date]
          </p>
          <div className="bg-[#fff]/20 h-[2px] w-full" />
        </div>

        {/* Acceptance of terms */}
        <ListTextPrivacy title="Acceptance of Terms">
          By accessing the website or using the services on behalf of a company, the individual represents that they have authority to bind that company to these Terms.
        </ListTextPrivacy>

        {/* Services */}
        <ListTextPrivacy
          title="Services"
          list1="Dedicated EV fleets, trained drivers, on‑site charging, fleet management platform, custom programs, and sustainability reporting."
          list2="Service levels, pricing, vehicle allocations, charging infrastructure, and performance commitments are defined in the applicable Order, MSA, or SOW."
        >
          If there is a conflict, the MSA/SOW/Order prevails over these Terms.
        </ListTextPrivacy>

        {/* Eligibility and account registration */}
        <ListTextPrivacy
          title="Eligibility & Account Registration"
          list1="Services are available to business entities in good standing."
          list2="Clients must designate authorized users/admins, maintain accurate registration details, and safeguard credentials."
          list3="Client is responsible for actions taken under its accounts."
        />

        {/* Client responsibilities */}
        <ListTextPrivacy
          title="Client Responsibilities"
          list1="Provide safe and reasonable access for charging installation, maintenance, and operations."
          list2="Comply with laws, site rules, safety procedures, permits, and clearances."
          list3="Use services only for lawful business purposes; no hazardous or illegal materials/activities."
          list4="Provide accurate schedules, passenger/goods details, and handling requirements in advance."
          list5="Ensure data shared is lawful, accurate, and non‑infringing."
        />

        {/* Vehicles, drivers, operations */}
        <ListTextPrivacy
          title="Vehicles, Drivers, and Operations"
          list1="Vehicles remain the property of GrnLYFT or partners unless otherwise specified."
          list2="Drivers are trained in EV operation and safety; replacements may occur to maintain service levels."
          list3="Clients must not instruct drivers to violate laws, overload vehicles, or breach safety standards."
          list4="Report incidents (accidents, delays, operational issues) promptly via designated support channels."
        />

        {/* Charging infrastructure */}
        <ListTextPrivacy
          title="Charging Infrastructure"
          list1="On‑site charging is installed per agreed specifications; client must provide access and ensure adequate electrical capacity and site safety."
          list2="Title to charging equipment remains with GrnLYFT unless otherwise agreed."
        >
          Removal upon contract end will be coordinated to minimize disruption.
        </ListTextPrivacy>

        {/* Service levels */}
        <ListTextPrivacy
          title="Service Levels & Uptime"
          list1="GrnLYFT targets robust reliability and uptime; specific guarantees and remedies are set in the SOW/MSA."
          list2="Scheduled maintenance or unavoidable outages will be communicated where practicable."
        />

        {/* Fees */}
        <ListTextPrivacy
          title="Fees, Billing, and Taxes"
          list1="Fees are specified in Orders/SOWs; invoices are due within [e.g., 15/30] days unless otherwise agreed."
          list2="Late payments may accrue interest at the lesser of 1.5% per month or the maximum allowed by law."
          list3="Client is responsible for applicable taxes, duties, and levies (excluding GrnLYFT’s income taxes)."
        />

        {/* Data and privacy */}
        <ListTextPrivacy
          title="Data & Privacy"
          list1="Personal and operational data are handled per the Privacy Policy and applicable data protection laws."
          list2="Operational data (e.g., telemetry) may be processed in aggregated or pseudonymized form for diagnostics, optimization, safety, billing verification, and sustainability reporting."
          list3="Each party will implement reasonable security measures and notify the other of data security incidents per law and the MSA."
        />

        {/* Intellectual property */}
        <ListTextPrivacy
          title="Intellectual Property"
          list1="GrnLYFT owns vehicles branding, software, platform, documentation, processes, and improvements."
          list2="Client retains ownership of its data; grants GrnLYFT a limited license to use it to provide/improve services, fulfill legal obligations, and create non‑identifying aggregated insights."
        >
          No rights are granted by implication; all rights not expressly granted are reserved.
        </ListTextPrivacy>

        {/* Acceptable use */}
        <ListTextPrivacy
          title="Acceptable Use"
          list1="Do not reverse engineer, copy, modify, or create derivative works of the platform/software."
          list2="Do not interfere with service integrity or performance."
          list3="Do not upload malware, harmful code, or unlawful content."
          list4="Do not attempt unauthorized access or circumvent security."
          list5="Do not transport illegal or hazardous materials (unless expressly agreed and permitted by law)."
        />

        {/* Compliance, licenses, safety */}
        <ListTextPrivacy
          title="Compliance, Licenses, and Safety"
          list1="GrnLYFT maintains required licenses, permits, and insurance as applicable."
          list2="Client ensures transported personnel/goods/materials comply with law and have necessary clearances."
          list3="Both parties comply with anti‑corruption, anti‑money laundering, and applicable trade laws."
        />

        {/* Warranties and disclaimers */}
        <ListTextPrivacy
          title="Warranties & Disclaimers"
          list1="GrnLYFT warrants services will be provided with reasonable skill and care per the MSA/SOW."
          list2="Except as expressly stated, services are provided “as is” and “as available,” without implied warranties of merchantability, fitness for a particular purpose, or non‑infringement to the maximum extent permitted by law."
        />

        {/* Limitation of liability */}
        <ListTextPrivacy
          title="Limitation of Liability"
          list1="No liability for indirect, incidental, special, consequential, or punitive damages, or lost profits, revenue, or data, even if advised of the possibility."
          list2="Aggregate liability cap: total fees paid/payable under the applicable Order in the 12 months preceding the event (or another cap defined in the MSA/SOW), except where not permitted by law."
        >
          Nothing limits liability for death or personal injury caused by negligence, fraud, or willful misconduct.
        </ListTextPrivacy>

        {/* Indemnity */}
        <ListTextPrivacy title="Indemnity">
          Each party will indemnify and defend the other from third‑party claims arising from: (i) its gross negligence or willful misconduct; (ii) breach of law; or (iii) infringement of third‑party IP rights. Detailed procedures, limitations, and exclusions will be set out in the MSA/SOW.
        </ListTextPrivacy>

        {/* Term, suspension, termination */}
        <ListTextPrivacy
          title="Term, Suspension, and Termination"
          list1="These Terms apply while accessing the website and, for services, from the effective date of the applicable Order/MSA/SOW until terminated as provided therein."
          list2="GrnLYFT may suspend or limit services for non‑payment, security risks, legal compliance, or material breach."
          list3="Termination rights, notice periods, and wind‑down obligations are defined in the MSA/SOW; upon termination, client pays for services rendered to the effective date."
        />

        {/* Confidentiality */}
        <ListTextPrivacy title="Confidentiality">
          Each party will protect the other’s Confidential Information with at least reasonable care and use it only to perform under the agreement, excluding information that is public, independently developed, or rightfully received without confidentiality obligations.
        </ListTextPrivacy>

        {/* Force majeure */}
        <ListTextPrivacy title="Force Majeure">
          Neither party is liable for delays or failures due to events beyond reasonable control (e.g., natural disasters, pandemics, strikes, government actions, utility failures, supply chain disruptions), provided reasonable steps are taken to mitigate and resume performance.
        </ListTextPrivacy>

        {/* Notices */}
        <ListTextPrivacy title="Notices">
          Notices under the MSA/SOW should be sent to the addresses specified therein; general communications may be delivered via email or in‑platform messages to designated contacts.
        </ListTextPrivacy>

        {/* Governing law and dispute resolution */}
        <ListTextPrivacy
          title="Governing Law & Dispute Resolution"
          list1="Governing law: Laws of India."
          list2="Venue and jurisdiction: Courts at [Insert city, e.g., Kolkata], India."
          list3="Dispute resolution: Good‑faith negotiations; failing which, arbitration under [Insert rules, e.g., Arbitration and Conciliation Act, 1996], seat at [City], language English, one or three arbitrators as agreed."
        />

        {/* Changes to terms */}
        <ListTextPrivacy title="Changes to Terms">
          We may update these Terms for the website and general service framework. Material changes will be notified via website notice or email to admin contacts. For active engagements, the MSA/SOW controls in case of conflict.
        </ListTextPrivacy>

        {/* Contact */}
        <ListTextPrivacy title="Contact">
          GrnLYFT <br />
          1, Meher Ali Road, 1st Floor, Kolkata 700017, India <br />
          +91 96633 77673 / +91 94773 36606 <br />
          Email: [Insert contact email] <br />
          Website: www.grnlyft.com
        </ListTextPrivacy>

        {/* Optional clauses */}
        <ListTextPrivacy
          title="Optional Clauses (Add if Needed)"
          list1="Data Processing Addendum (DPA): detailed data protection terms, SCCs/transfer mechanisms, sub‑processor list, breach notification timelines."
          list2="ESG/Reporting Annex: emissions methodology, assumptions, verification standards, audit rights."
          list3="Service Level Agreement (SLA): uptime definitions, response/resolution times, maintenance windows, service credits."
          list4="Safety & Compliance Schedule: driver screening, training curricula, incident handling, regulatory adherence."
          list5="Acceptable Use Policy (AUP): standalone appendix for platform usage."
        />

        {/* Footer contact blocks */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
          <div className="w-full md:w-1/2 border-l h-14 md:h-20 flex flex-col gap-3 px-4 items-center justify-center border-[#4A4A4A]/40">
            <p className="text-[14px] text-[#fff] font-medium">
              1, Meher Ali Road, 1st Floor, Kolkata 700017, India
            </p>
          </div>
          <div className="w-full md:w-1/2 border-l h-14 md:h-20 flex flex-col gap-2 border-[#4A4A4A]/40 px-4 items-start justify-center">
            <p className="text-[14px] text-[#fff] font-medium">+91 96633 77673 / +91 94773 36606</p>
            <p className="text-[14px] text-[#fff] font-medium">[Insert contact email]</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditionsPage;
