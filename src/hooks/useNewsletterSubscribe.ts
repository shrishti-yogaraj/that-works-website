import { useState } from "react";

const WEBHOOK_URL = "https://shrishti-y.app.n8n.cloud/webhook/newsletter-subscription";

type Status = "idle" | "loading" | "success" | "error";

export function useNewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading" || status === "success") return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Something went wrong");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong — please try again.");
    }
  };

  return { email, setEmail, status, errorMessage, subscribe };
}
