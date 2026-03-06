import useCanonical from "@/hooks/useCanonical";
const About = () => {
  useCanonical("/about");
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', padding: '120px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h1>About</h1>
        <p style={{ color: 'var(--muted)', marginTop: 16 }}>Coming soon.</p>
      </div>
    </div>
  );
};

export default About;
