import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Privacy = () => (
  <>
    <SEOHead
      title="Privacy Policy — That Works"
      description="How That Works collects, uses, and protects your personal information."
      canonical="/privacy"
    />
    <Nav />
    <main className="legal-page">
      <div className="legal-inner">
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: April 2026</p>

        <p>That Works Co ("That Works", "we", "us", or "our") is committed to protecting your personal information. This policy explains what we collect, how we use it, and your rights in relation to it.</p>

        <h2>1. Who we are</h2>
        <p>That Works Co is a GTM consultancy operating in Australia. We design and implement go-to-market systems for B2B companies. You can reach us at <a href="https://www.linkedin.com/company/that-works-co/">LinkedIn</a> or via the contact form on this website.</p>

        <h2>2. What we collect</h2>
        <p>We collect personal information only when you voluntarily provide it to us. This includes:</p>
        <ul>
          <li><strong>Contact and enquiry data</strong> — name, email address, and phone number submitted through our booking or contact forms</li>
          <li><strong>Newsletter subscriptions</strong> — email address when you subscribe to our newsletter</li>
          <li><strong>Usage data</strong> — anonymised analytics about how you interact with our website, collected via Google Analytics 4 (including pages visited, session duration, and general location data)</li>
        </ul>
        <p>We do not collect payment information directly. If payment processing is required, it is handled by third-party providers subject to their own privacy policies.</p>

        <h2>3. How we use it</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Respond to enquiries and book diagnostic calls</li>
          <li>Send you the newsletter you subscribed to</li>
          <li>Send you resources or guides you requested</li>
          <li>Understand how our website is used so we can improve it</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>We do not sell your personal information to third parties. We do not use it for automated decision-making that produces legal or similarly significant effects.</p>

        <h2>4. Third-party services</h2>
        <p>We use the following third-party services that may process your data on our behalf:</p>
        <ul>
          <li><strong>n8n</strong> — our automation platform that processes form submissions and manages internal workflows</li>
          <li><strong>Calendly</strong> — used for booking diagnostic calls; subject to <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">Calendly's privacy policy</a></li>
          <li><strong>Sanity</strong> — our content management system; subject to <a href="https://www.sanity.io/legal/privacy" target="_blank" rel="noopener noreferrer">Sanity's privacy policy</a></li>
          <li><strong>Google Analytics 4</strong> — anonymised website analytics; subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's privacy policy</a></li>
        </ul>

        <h2>5. Cookies</h2>
        <p>We use cookies primarily through Google Analytics to understand how visitors use our site. These are analytics cookies only — we do not use advertising or tracking cookies. You can disable cookies in your browser settings at any time.</p>

        <h2>6. Data retention</h2>
        <p>We retain your personal information for as long as necessary to fulfil the purpose for which it was collected, or as required by law. If you ask us to delete your data, we will do so within 30 days unless we are required to retain it.</p>

        <h2>7. Your rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Withdraw consent for marketing communications at any time (unsubscribe links are included in every email)</li>
          <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC) if you believe we have mishandled your information</li>
        </ul>
        <p>To exercise any of these rights, contact us via LinkedIn or the contact form on this website.</p>

        <h2>8. Security</h2>
        <p>We take reasonable steps to protect your personal information from misuse, loss, and unauthorised access. Our website is served over HTTPS and form data is transmitted securely.</p>

        <h2>9. Changes to this policy</h2>
        <p>We may update this policy from time to time. The date at the top of this page reflects when it was last revised. Continued use of our website after changes constitutes acceptance of the updated policy.</p>

        <h2>10. Governing law</h2>
        <p>This policy is governed by the laws of Australia, including the Privacy Act 1988 (Cth) and the Australian Privacy Principles.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default Privacy;
