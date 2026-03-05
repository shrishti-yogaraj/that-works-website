import { createRoot } from "react-dom/client";
import App from "./App.tsx";

/* Global: variables, fonts, base typography, shared utilities */
import "./styles/global.css";

/* Components */
import "./styles/components/nav.css";
import "./styles/components/footer.css";

/* Pages */
import "./styles/pages/index.css";
import "./styles/pages/book-a-call.css";
import "./styles/pages/blog.css";
import "./styles/pages/blogpost.css";
import "./styles/pages/branding.css";
import "./styles/pages/lead-gen.css";
import "./styles/pages/services.css";
import "./styles/pages/approach.css";
import "./styles/pages/marketing-os.css";

createRoot(document.getElementById("root")!).render(<App />);
