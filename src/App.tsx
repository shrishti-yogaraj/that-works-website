import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import OurApproach from "./pages/OurApproach";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import LeadGenService from "./pages/LeadGenService";
import BrandingService from "./pages/BrandingService";
import InboundService from "./pages/InboundService";
import RetentionService from "./pages/RetentionService";
import BookACall from "./pages/BookACall";
import ZeroToOne from "./pages/ZeroToOne";
import Friction from "./pages/Friction";
import Scale from "./pages/Scale";
import Leader from "./pages/Leader";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ContactFormPopup from "./components/ContactFormPopup";
import { ContactPopupProvider, useContactPopup } from "./contexts/ContactPopupContext";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isOpen, source, closePopup } = useContactPopup();
  
  return (
    <>
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
    </>
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
