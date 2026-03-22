import { Outlet, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ContactPopupProvider, useContactPopup } from "./contexts/ContactPopupContext";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense, useEffect } from "react";

const ContactFormPopup = lazy(() => import("./components/ContactFormPopup"));

const queryClient = new QueryClient();

const GA4RouteTracker = () => {
  const location = useLocation();
  useEffect(() => {
    const g = (window as any).gtag;
    if (typeof g === "function") {
      g("event", "page_view", {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location.pathname, location.search]);
  return null;
};

const ContactPopupController = () => {
  const { isOpen, source, closePopup } = useContactPopup();
  return (
    <Suspense fallback={null}>
      <ContactFormPopup open={isOpen} onOpenChange={closePopup} source={source} />
    </Suspense>
  );
};

const RootLayout = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ContactPopupProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <GA4RouteTracker />
          <Outlet />
          <ContactPopupController />
        </ContactPopupProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default RootLayout;
