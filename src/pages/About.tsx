import SEOHead from "@/components/SEOHead";
const About = () => {
  return (
    <>
      <SEOHead
        title="About — That Works"
        description="Learn about That Works — the team behind high performance GTM systems for B2B companies. Strategy, infrastructure, execution and handover."
        canonical="/about"
      />
      <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', padding: '120px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h1>About</h1>
          <p style={{ color: 'var(--muted)', marginTop: 16 }}>Coming soon.</p>
        </div>
      </div>
    </>
  );
};

export default About;
