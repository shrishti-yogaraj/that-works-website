import { Link } from "react-router-dom";

const STAGES = [
  { label: "0→1",      path: "/services/marketing-os/zero-to-one", id: "zero-to-one" },
  { label: "Friction", path: "/services/marketing-os/friction",     id: "friction"   },
  { label: "Scale",    path: "/services/marketing-os/scale",        id: "scale"      },
  { label: "Leader",   path: "/services/marketing-os/leader",       id: "leader"     },
];

const StageSwitcher = ({ active }: { active: string }) => (
  <div className="zto-stage-strip">
    <div className="zto-stage-strip-inner">
      <span className="zto-stage-label">Where are you right now?</span>
      <div className="zto-stage-pills">
        {STAGES.map((s) => (
          <Link
            key={s.id}
            to={s.path}
            className={`zto-stage-pill${active === s.id ? " active" : ""}`}
          >
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default StageSwitcher;
