// NOTE: When adding a new static route here, also add it to STATIC_ROUTES in scripts/generate-sitemap.mjs
import type { RouteObject } from "react-router-dom";
import RootLayout from "./RootLayout";
import Index from "./pages/Index";
import OurApproach from "./pages/OurApproach";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import LeadGenService from "./pages/LeadGenService";
import InboundService from "./pages/InboundService";
import BrandingService from "./pages/BrandingService";
import RetentionService from "./pages/RetentionService";
import ZeroToOne from "./pages/ZeroToOne";
import Friction from "./pages/Friction";
import Scale from "./pages/Scale";
import Leader from "./pages/Leader";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Articles from "./pages/Articles";
import { Lab } from "./pages/CardGridPage";
import Join from "./pages/Join2";
import JoinRole from "./pages/JoinRole";
import BookACall from "./pages/BookACall";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import DissectionPost from "./pages/DissectionPost";
import LabItemPage from "./pages/LabItemPage";
import ArsenalItem from "./pages/ArsenalItem";
import NotFound from "./pages/NotFound";

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/approach", element: <OurApproach /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <BookACall /> },
      { path: "/services", element: <Services /> },
      { path: "/services/lead-gen", element: <LeadGenService /> },
      { path: "/services/inbound", element: <InboundService /> },
      { path: "/services/branding", element: <BrandingService /> },
      { path: "/services/retention", element: <RetentionService /> },
      { path: "/services/marketing-os/zero-to-one", element: <ZeroToOne /> },
      { path: "/services/marketing-os/friction", element: <Friction /> },
      { path: "/services/marketing-os/scale", element: <Scale /> },
      { path: "/services/marketing-os/leader", element: <Leader /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:slug", element: <BlogPost /> },
      { path: "/articles", element: <Articles /> },
      { path: "/lab", element: <Lab /> },
      { path: "/join", element: <Join /> },
      { path: "/join/:slug", element: <JoinRole /> },
      { path: "/dissections/:slug", element: <DissectionPost /> },
      { path: "/lab/:slug", element: <LabItemPage /> },
      { path: "/arsenal/:slug", element: <ArsenalItem /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
