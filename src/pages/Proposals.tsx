import { Link } from "react-router-dom";

const Proposals = () => (
  <div className="proposals-gate">
    <p className="proposals-eyebrow">Uh oh.</p>
    <h1 className="proposals-heading">You weren't supposed to find this.</h1>
    <p className="proposals-sub">
      This is where we keep things for specific clients. If that's you —
      you should have a link. If it's not — points for curiosity.
    </p>
    <Link to="/" className="proposals-home">← Back to That Works</Link>
  </div>
);

export default Proposals;
