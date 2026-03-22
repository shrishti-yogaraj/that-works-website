import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
  slug?: string;
}

const FaqAccordion = ({ faqs }: { faqs: FaqItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mos-faq-list">
      {faqs.map(({ q, a, slug }, i) => (
        <div key={q} className={`mos-faq-item${openIndex === i ? " mos-faq-item--open" : ""}`}>
          <button
            className="mos-faq-trigger"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{q}</span>
            <span className="mos-faq-icon" aria-hidden="true">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          {openIndex === i && (
            <div className="mos-faq-body">
              <p>{a}</p>
              {slug && (
                <a href={slug} className="mos-faq-read-more">Read more →</a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
