import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Terms = () => (
  <>
    <SEOHead
      title="Terms of Use — That Works"
      description="Terms governing use of the That Works website and services."
      canonical="/terms"
    />
    <Nav />
    <main className="legal-page">
      <div className="legal-inner">
        <h1>Terms of Use</h1>
        <p className="legal-updated">Last updated: April 2026</p>

        <p>These terms govern your use of the That Works Co website at thatworksco.com ("the Website"). By accessing or using the Website, you agree to these terms. If you do not agree, please do not use the Website.</p>

        <h2>1. About That Works</h2>
        <p>That Works Co is a GTM consultancy that designs and implements go-to-market systems for B2B companies. The Website provides information about our services, resources, and insights.</p>

        <h2>2. Use of the Website</h2>
        <p>You may use the Website for lawful purposes only. You must not:</p>
        <ul>
          <li>Use the Website in any way that violates applicable laws or regulations</li>
          <li>Attempt to gain unauthorised access to any part of the Website or its underlying systems</li>
          <li>Scrape, harvest, or copy content from the Website for commercial purposes without our written consent</li>
          <li>Transmit any harmful, offensive, or disruptive content through the Website's forms or contact channels</li>
        </ul>

        <h2>3. Intellectual property</h2>
        <p>All content on the Website — including text, frameworks, graphics, logos, and the design of the site itself — is owned by or licensed to That Works Co. You may read and share our articles and insights with attribution, but you may not reproduce, adapt, or commercialise our content without prior written permission.</p>

        <h2>4. Services and client work</h2>
        <p>The Website describes our services in general terms. Actual engagements are governed by separate written agreements between That Works Co and each client. Nothing on the Website constitutes a binding offer or guarantee of outcomes.</p>
        <p>Results referenced on the Website reflect specific client engagements and are not a promise of equivalent results for other clients. GTM outcomes depend on many factors outside our control.</p>

        <h2>5. Third-party links</h2>
        <p>The Website may contain links to third-party websites. We are not responsible for the content, accuracy, or privacy practices of those sites. Links do not constitute endorsement.</p>

        <h2>6. Disclaimers</h2>
        <p>The Website and its content are provided "as is". To the extent permitted by law, That Works Co makes no warranties — express or implied — regarding the accuracy, completeness, or fitness for purpose of the content.</p>
        <p>Content on the Website, including blog articles and resources, is for informational purposes only. It does not constitute professional advice for your specific situation.</p>

        <h2>7. Limitation of liability</h2>
        <p>To the maximum extent permitted by Australian law, That Works Co will not be liable for any indirect, incidental, or consequential loss arising from your use of or reliance on the Website or its content.</p>

        <h2>8. Changes to these terms</h2>
        <p>We may update these terms from time to time. The date at the top of this page reflects the last revision. Continued use of the Website after changes constitutes acceptance of the updated terms.</p>

        <h2>9. Governing law</h2>
        <p>These terms are governed by the laws of Australia. Any disputes arising from these terms or your use of the Website will be subject to the exclusive jurisdiction of Australian courts.</p>

        <h2>10. Contact</h2>
        <p>If you have any questions about these terms, please reach out via our <a href="/contact">contact page</a> or through <a href="https://www.linkedin.com/company/that-works-co/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default Terms;
