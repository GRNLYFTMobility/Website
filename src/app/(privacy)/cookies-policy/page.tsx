import Header from '@/components/Header';
import { ListTextPrivacy } from '../_components/list-text';
import Footer from '@/components/Footer';

const CookiesPolicyPage = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-5 mt-4 md:mt-10 relative">
      <Header />
      <div className="w-full h-full pt-4 pb-4 md:py-6 px-4 flex flex-col items-start justify-center gap-5 md:gap-8 mt-14 md:mt-20 md:px-16 lg:px-20">

        {/* Heading */}
        <div className="w-full flex flex-col gap-4 md:gap-6">
          <h1 className="text-3xl md:text-[48px] font-bold w-full text-start">Cookies Policy</h1>
          <p className="text-start w-full font-medium text-sm md:text-lg text-[#dbdbdb]">
            This Cookies Policy explains how GrnLYFT (“we”, “our”, “us”) uses cookies and similar technologies on our website and platforms.
            It also explains the choices available to manage your cookie preferences.
            <br /> Last updated: [Insert Date]
          </p>
          <div className="bg-[#fff]/20 h-[2px] w-full" />
        </div>

        {/* What are cookies */}
        <ListTextPrivacy title="What Are Cookies?">
          Cookies are small text files that a website stores on a device (like a phone or laptop) to remember information about the visit.
          They help the site function, keep sessions secure, and improve the overall experience.
        </ListTextPrivacy>

        {/* Why we use cookies */}
        <ListTextPrivacy
          title="Why We Use Cookies"
          list1="Essential functionality: to keep the site working (e.g., logins, security, load balancing)."
          list2="Preferences: to remember settings like language, cookie choices, or saved preferences."
          list3="Analytics: to understand how our site is used so we can improve content, speed, and navigation."
          list4="Performance: to measure performance and reliability of pages, forms, and APIs."
          list5="Security & fraud prevention: to help detect, prevent, and respond to security incidents."
        />

        {/* Types of cookies */}
        <ListTextPrivacy
          title="Types of Cookies We Use"
          list1="Strictly Necessary Cookies: required for core features like page navigation and secure areas. These cannot be switched off."
          list2="Functional/Preference Cookies: remember choices (e.g., language, region) and improve personalization."
          list3="Analytics/Performance Cookies: help measure traffic, usage patterns, and improve our services (e.g., page load times, popular pages)."
          list4="Advertising/Marketing Cookies (if used): help us reach business users with relevant communications and measure campaign effectiveness."
        >
          We aim to minimize non‑essential cookies and use aggregated or pseudonymized data wherever possible.
        </ListTextPrivacy>

        {/* Similar technologies */}
        <ListTextPrivacy
          title="Similar Technologies"
          list1="Web beacons/pixel tags: small code snippets that help measure engagement or deliver features."
          list2="Local storage/session storage: browser storage used for preferences or session state."
          list3="SDKs (for apps): similar functions inside mobile apps, if applicable."
        />

        {/* Cookies we set (examples) */}
        <ListTextPrivacy
          title="Examples of Cookies We Set"
          list1="Session cookies: keep you logged in and secure during a visit."
          list2="Preference cookies: store cookie banner choices, language, or UI settings."
          list3="Analytics cookies: understand site usage and improve performance (e.g., page views, scroll depth)."
          list4="Security cookies: help detect and prevent abuse."
        >
          Specific names, lifetimes, and providers may change as we improve our website. When required, we will update this policy and the cookie banner to reflect changes.
        </ListTextPrivacy>

        {/* Third party cookies */}
        <ListTextPrivacy
          title="Third‑Party Cookies and Providers"
          list1="Hosting/CDN: to deliver our site quickly and reliably."
          list2="Analytics: to measure and improve performance and usability."
          list3="Support/Communication tools: to enable contact, chat, or ticketing, if used."
          list4="Advertising (B2B) (if used): to reach business audiences and measure campaign results."
        >
          Where third‑party cookies are used, those providers may set and read cookies on our site and across other sites where they operate. Their use is governed by their own policies. We aim to work with privacy‑forward providers and limit identifiers wherever feasible.
        </ListTextPrivacy>

        {/* Consent and banner */}
        <ListTextPrivacy title="Your Choices and Consent">
          When required by law, we will present a cookie banner to obtain consent for non‑essential cookies. You can accept all, reject all, or customize categories. You can revisit your preferences at any time via: [Insert Cookie Banner Link/Preferences].
        </ListTextPrivacy>

        {/* Browser controls */}
        <ListTextPrivacy
          title="Managing Cookies in Your Browser"
          list1="Most browsers let you block or delete cookies in settings or preferences."
          list2="You can usually set browsers to block third‑party cookies or notify you when a site sets a cookie."
          list3="Blocking or deleting cookies may impact site functionality, especially for login and secure features."
        />

        {/* Do Not Track */}
        <ListTextPrivacy title="Do Not Track">
          Some browsers offer a “Do Not Track” (DNT) signal. There is no common industry standard for DNT at this time, so we do not respond to DNT signals. We will update this policy if standards emerge.
        </ListTextPrivacy>

        {/* Data and privacy link */}
        <ListTextPrivacy title="Data and Privacy">
          Cookies may involve the processing of personal data (e.g., IP address, device identifiers). We handle personal data in line with our Privacy Policy and applicable laws. Please review our Privacy Policy for information about data rights, contact points, and retention practices.
        </ListTextPrivacy>

        {/* Retention */}
        <ListTextPrivacy title="Cookie Duration and Retention">
          Cookies can be “session” (deleted when you close your browser) or “persistent” (remain for a set period or until deleted). We set retention based on purpose and legal requirements and aim to keep durations as short as practical.
        </ListTextPrivacy>

        {/* International Transfers */}
        <ListTextPrivacy title="International Data Transfers">
          If cookie-related data is processed or stored outside India (for example, by analytics or cloud providers), we use appropriate safeguards such as contractual commitments and due‑diligence on providers, consistent with applicable law.
        </ListTextPrivacy>

        {/* Changes */}
        <ListTextPrivacy title="Updates to This Policy">
          We may update this Cookies Policy to reflect changes to technology, law, or our services. The “Last updated” date shows the latest version. For material changes, we will provide a notice via the website or cookie banner.
        </ListTextPrivacy>

        {/* Contact */}
        <ListTextPrivacy title="Contact Us">
          Questions about cookies or this policy? We’re here to help.
          <br />
          GrnLYFT
          <br />
          1, Meher Ali Road, 1st Floor, Kolkata 700017, India
          <br />
          +91 96633 77673 / +91 94773 36606
          <br />
          Email: [Insert contact or privacy email]
          <br />
          Website: www.grnlyft.com
        </ListTextPrivacy>

        {/* Footer contact blocks for visual consistency */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
          <div className="w-full md:w-1/2 border-l h-14 md:h-20 flex flex-col gap-3 px-4 items-center justify-center border-[#4A4A4A]/40">
            <p className="text-[14px] text-[#fff] font-medium">
              1, Meher Ali Road, 1st Floor, Kolkata 700017, India
            </p>
          </div>
          <div className="w-full md:w-1/2 border-l h-14 md:h-20 flex flex-col gap-2 border-[#4A4A4A]/40 px-4 items-start justify-center">
            <p className="text-[14px] text-[#fff] font-medium">+91 96633 77673 / +91 94773 36606</p>
            <p className="text-[14px] text-[#fff] font-medium">[Insert contact or privacy email]</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiesPolicyPage;
