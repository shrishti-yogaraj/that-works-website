/**
 * GA4 event tracking helpers.
 *
 * Usage in any form:
 *   import { trackLead, trackNewsletter, trackJobApplication } from "@/lib/analytics";
 *
 *   // On successful submission:
 *   trackLead("booking", "homepage-hero");
 *   trackNewsletter("footer");
 *   trackJobApplication("GTM Systems Engineer");
 *
 * Adding a new form type? Add a typed helper below following the same pattern.
 * All helpers are no-ops if GA4 hasn't loaded (e.g. blocked by ad blocker).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(event: string, params?: Record<string, string>) {
  window.gtag?.("event", event, params);
}

/** Booking form or guide download — maps to GA4 recommended "generate_lead" event. */
export function trackLead(formName: "booking" | "guide", source: string) {
  gtag("generate_lead", { form_name: formName, source });
}

/** Any newsletter signup — maps to GA4 recommended "sign_up" event. */
export function trackNewsletter(source: string) {
  gtag("sign_up", { method: "newsletter", source });
}

/** Job application submission (role-specific or open call). */
export function trackJobApplication(role: string) {
  gtag("job_application", { role });
}
