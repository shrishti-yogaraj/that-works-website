import SEOHead from "@/components/SEOHead";
const Contact = () => {
  return (
    <>
      <SEOHead
        title="Contact — That Works"
        description="Get in touch with That Works. We design and implement high performance GTM systems for B2B companies. Let's talk about what you need."
        canonical="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thatworksco.com" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://thatworksco.com/contact" }
          ]
        }}
      />
      <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', padding: '120px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h1>Contact</h1>
          <p style={{ color: 'var(--muted)', marginTop: 16 }}>Coming soon.</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
