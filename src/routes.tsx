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
import BookACall from "./pages/BookACall";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/approach", element: <OurApproach /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
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
      { path: "/book-a-call", element: <BookACall /> },
      { path: "/faq", element: <FAQ /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
