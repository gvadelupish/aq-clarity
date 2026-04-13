import FadeUp from "@/components/FadeUp";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Privacy Policy — AQ Coaching</title>
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href="https://aqcoach.com/privacy-policy" />
    </Helmet>

    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <FadeUp>
          <h1 className="font-display mb-4">Privacy Policy</h1>
          <p className="text-warm-grey text-sm mb-12">Effective Date: April 2, 2025 · Last Updated: April 2, 2025</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="space-y-8 text-warm-grey leading-relaxed text-sm [&_h2]:text-foreground [&_h2]:font-display [&_h2]:text-2xl [&_h2]:mb-4 [&_h2]:mt-12 [&_strong]:text-foreground [&_strong]:font-normal">
            <p>This Privacy Policy explains how AQCoach ("we", "us", or "our") collects, uses, and protects personal information when you use our website (https://aqcoach.com) and related coaching services. We are committed to safeguarding your privacy in accordance with the General Data Protection Regulation (GDPR), UK GDPR, and applicable data protection laws.</p>

            <h2>Information We Collect</h2>
            <p><strong>Information you voluntarily provide:</strong> name, email address, phone number (if provided), messages submitted via forms, email, or Telegram, booking and consultation details, job title or business details (if relevant).</p>
            <p><strong>Information collected automatically:</strong> IP address, browser and device information, country, referral URLs, session data, usage activity on our website, and cookies or trackers.</p>
            <p>We do not knowingly collect information from individuals under the age of 18.</p>

            <h2>How We Use Your Data</h2>
            <p>We use your personal data to respond to inquiries and coaching requests, deliver coaching services, improve our website and customer experience, send updates (only with your consent), meet legal and tax obligations, and prevent fraud and ensure security.</p>

            <h2>Legal Basis for Processing</h2>
            <p>We process your data based on your consent, legitimate interest in responding to you or providing services, legal obligations, and vital interest (if necessary to protect safety).</p>

            <h2>Data Sharing</h2>
            <p>We may share data with service providers (e.g. email, forms, analytics), business partners supporting service delivery, or legal authorities when required by law. We do not sell your data.</p>

            <h2>Cookies</h2>
            <p>We use cookies and similar technologies to maintain security and functionality, track site performance, store user preferences, and analyze usage behavior. Some cookies may be from third parties like Google Analytics or scheduling tools. You can manage cookies in your browser settings.</p>

            <h2>Social Media</h2>
            <p>If you log in or interact through social media (e.g. Facebook, Google), we may receive limited public profile info. We use this only as needed for authentication or service delivery.</p>

            <h2>International Data Transfers</h2>
            <p>Your data may be transferred outside of your country (e.g. to Europe, UK, or the US), depending on the service provider used. We take steps to ensure this data is securely handled and GDPR-compliant.</p>

            <h2>Data Retention</h2>
            <p>We retain your data only as long as needed to provide services or meet legal obligations. Afterward, we securely delete or anonymize it.</p>

            <h2>Your Rights</h2>
            <p>You have the right to access your data, correct or delete your data, withdraw consent at any time, object to or restrict processing, and request a copy of your data (data portability). To exercise any of these rights, email us at <a href="mailto:contact@aqcoach.com" className="text-gold hover:text-gold-hover transition-colors">contact@aqcoach.com</a>.</p>

            <h2>Do Not Track</h2>
            <p>Our site does not currently respond to "Do Not Track" browser signals due to lack of industry standard.</p>

            <h2>California & U.S. State Privacy Rights</h2>
            <p>If you are a resident of California or other U.S. states with privacy laws, you may have additional rights: to access and delete your data, to opt out of data sale (we do not sell data), and to non-discrimination. Contact us at <a href="mailto:contact@aqcoach.com" className="text-gold hover:text-gold-hover transition-colors">contact@aqcoach.com</a> to exercise these rights.</p>

            <h2>Changes to This Policy</h2>
            <p>This Privacy Policy may be updated periodically. Updates will be posted here with a new effective date. We encourage you to review it regularly.</p>

            <h2>Contact</h2>
            <p>Maria Belitskaya<br /><br />Email: <a href="mailto:contact@aqcoach.com" className="text-gold hover:text-gold-hover transition-colors">contact@aqcoach.com</a></p>
          </div>
        </FadeUp>
      </div>
    </section>
  </>
);

export default PrivacyPolicy;
