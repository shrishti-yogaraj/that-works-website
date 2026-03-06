import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import { ContactPopupProvider, useContactPopup } from "./contexts/ContactPopupContext";

const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const OurApproach = lazy(() => import("./pages/OurApproach"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const LeadGenService = lazy(() => import("./pages/LeadGenService"));
const BrandingService = lazy(() => import("./pages/BrandingService"));
const InboundService = lazy(() => import("./pages/InboundService"));
const RetentionService = lazy(() => import("./pages/RetentionService"));
const BookACall = lazy(() => import("./pages/BookACall"));
const ZeroToOne = lazy(() => import("./pages/ZeroToOne"));
const Friction = lazy(() => import("./pages/Friction"));
const Scale = lazy(() => import("./pages/Scale"));
const Leader = lazy(() => import("./pages/Leader"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ContactFormPopup = lazy(() => import("./components/ContactFormPopup"));

const queryClient = new QueryClient();

const AppContent = () => {
  const { isOpen, source, closePopup } = useContactPopup();

  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/approach" element={<OurApproach />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/lead-gen" element={<LeadGenService />} />
        <Route path="/services/inbound" element={<InboundService />} />
        <Route path="/services/branding" element={<BrandingService />} />
        <Route path="/services/retention" element={<RetentionService />} />
        <Route path="/services/marketing-os/zero-to-one" element={<ZeroToOne />} />
        <Route path="/services/marketing-os/friction" element={<Friction />} />
        <Route path="/services/marketing-os/scale" element={<Scale />} />
        <Route path="/services/marketing-os/leader" element={<Leader />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/book-a-call" element={<BookACall />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactFormPopup open={isOpen} onOpenChange={closePopup} source={source} />
    </Suspense>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ContactPopupProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ContactPopupProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
