// ─── Email ────────────────────────────────────────────────────────────────────

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CONSUMER_DOMAINS = new Set([
  "gmail.com", "googlemail.com",
  "yahoo.com", "yahoo.co.uk", "yahoo.com.au", "ymail.com",
  "hotmail.com", "hotmail.co.uk", "hotmail.com.au",
  "outlook.com", "outlook.com.au",
  "live.com", "live.co.uk", "live.com.au",
  "icloud.com", "me.com", "mac.com",
  "msn.com", "aol.com",
  "protonmail.com", "proton.me",
  "gmx.com", "gmx.net",
]);

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim());
}

export function isConsumerEmail(email: string): boolean {
  const domain = email.trim().split("@")[1]?.toLowerCase();
  return !!domain && CONSUMER_DOMAINS.has(domain);
}

// ─── Phone ────────────────────────────────────────────────────────────────────

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return (
    digits.length >= 7 &&
    digits.length <= 15 &&
    /^\+?[\d\s\-(). ]+$/.test(phone.trim())
  );
}

// ─── LinkedIn URL ─────────────────────────────────────────────────────────────

export function isValidLinkedIn(url: string): boolean {
  return /^(https?:\/\/)?(www\.)?linkedin\.com\/.+/i.test(url.trim());
}
