import { useEffect, useState } from "react";
import "../../styles/pages/proposals-in10s.css";

const tabs = [
  { num: "01", label: "Foundation",  phase: "Wks 1–8",  addon: false, outbound: true  },
  { num: "02", label: "Outbound",    phase: "Wks 1–10", addon: false, outbound: true  },
  { num: "03", label: "Inbound",     phase: "Wks 1–9",  addon: false, outbound: false },
  { num: "04", label: "LinkedIn",    phase: "Wks 2–10", addon: false, outbound: false },
  { num: "05", label: "Database",    phase: "Wks 2–9",  addon: false, outbound: false },
  { num: "06", label: "Reporting",   phase: "Wks 6–10", addon: false, outbound: false },
  { num: "07", label: "Sales",       phase: "Wks 3–8",  addon: true,  outbound: false },
  { num: "08", label: "SEO & AEO",   phase: "Wks 4–10", addon: true,  outbound: false },
];

const buckets = [
  /* 0, Foundation */
  <>
    <div className="bd-header">
      <div className="bd-marker"><div className="bd-marker-num">01</div><div className="bd-marker-phase">Weeks 1–8 · Foundation</div></div>
      <div className="bd-title-block">
        <div className="bd-eyebrow">The Foundation</div>
        <h2 className="bd-title">ICP, Data &amp; CRM<br /><em>Foundation</em>.</h2>
        <p className="bd-intro">Nothing else in this engagement works without this. The ICP documentation defines the language of every email and post. The target list defines the universe every sequence sends to. The CRM restructure defines where every lead lands. The data layer defines what the dashboards measure. <strong>This is the source of truth every other stream pulls from.</strong></p>
      </div>
    </div>
    <div className="included-grid-v2">
      <div className="included-card-v2"><div className="ic-step">ICP Documentation</div><div className="ic-title">Who we're targeting, and why.</div><ul className="ic-list"><li>Full ICP document <strong>per product line</strong>, Chubb (CCM), UniServe Reach, Data Management, DPDP Compliance</li><li>Per geo: India, Middle East, UK, each with distinct pain points, regulatory drivers, and trigger events</li><li>Per persona: <strong>CIO, CTO, CDO, Chief Compliance Officer</strong>, mapped to which product they're most likely evaluating</li><li>Trigger event mapping: DPDP deadline, recent funding, new regulation, leadership change, digital transformation initiative</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Content-to-Persona Matrix</div><div className="ic-title">The one document everything else references.</div><ul className="ic-list"><li>Maps which content angles resonate with which persona at which stage of awareness</li><li>A CIO evaluating DPDP compliance needs a different angle than a CDO evaluating data infrastructure</li><li><strong>Feeds LinkedIn, outbound, SEO, AEO, and newsletter</strong>, so everything created speaks to the right person</li><li>Built in the same week as ICP docs so it's immediately usable across every other stream</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Target List Build</div><div className="ic-title">300–600 named accounts, verified.</div><ul className="ic-list"><li>Pulled and enriched via Apollo, segmented by product line and geo</li><li>Every contact validated against ICP criteria before it enters any workflow</li><li><strong>No generic lists, no guesswork</strong>, every name on the list is there because they fit the documented ICP</li><li>Structured for automated flow into outbound sequences as new ICP-matching companies are added</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">CRM &amp; Data Layer</div><div className="ic-title">VTiger restructured, GA4 + GSC live.</div><ul className="ic-list"><li>VTiger pipeline stages redefined to reflect In10s's actual sales motion and deal cycle</li><li>Lead scoring model built in, Hot / Warm / Cold auto-tagged on behaviour and ICP fit</li><li>GA4 event tracking implemented for every meaningful website action; GSC verified with baseline rankings</li><li><strong>DPDP-compliant data handling</strong> baked in from day one, consent management, retention policies, opt-in flows</li></ul></div>
    </div>
    <div className="bd-process">
      <div className="bd-process-header"><div className="bd-process-eyebrow">The process</div><div className="bd-process-title">How we build the <em>foundation</em>.</div></div>
      <div className="process-steps">
        <div className="process-step"><div className="ps-num">01</div><div className="ps-content"><div className="ps-title">ICP Definition Per Product Line</div><div className="ps-desc">Stakeholder interviews with Mohanty and Philips, plus existing customer pattern analysis from VTiger and case studies. We build a full ICP document for each product line covering: target company profile, decision-maker persona, pain points, trigger events, and the language that resonates. <strong>Specific to In10s's actual products and the buyers who care about each one</strong>, not a template.</div></div><div className="ps-timing">Week 1</div></div>
        <div className="process-step"><div className="ps-num">02</div><div className="ps-content"><div className="ps-title">Content-to-Persona Matrix</div><div className="ps-desc">A mapping of which content angles resonate with which buyer persona at which stage. This matrix directly feeds the LinkedIn calendar, outbound copy, newsletter segmentation, and AEO brief, so everything that gets created in the next 8 weeks speaks to the right person. Built in parallel with ICP docs so every other stream can start using it immediately.</div></div><div className="ps-timing">Week 1</div></div>
        <div className="process-step"><div className="ps-num">03</div><div className="ps-content"><div className="ps-title">Target Company List Build</div><div className="ps-desc">Using Apollo, we pull and enrich the actual list of 300–600 target companies across India, Middle East, and UK, filtered against the ICP criteria just defined. Every contact verified, every company enriched with firmographic data, segmented by product line and geo so outbound sequences hit the right person every time. <strong>The pipeline starts feeding itself</strong>.</div></div><div className="ps-timing">Week 2</div></div>
        <div className="process-step"><div className="ps-num">04</div><div className="ps-content"><div className="ps-title">VTiger Audit &amp; Restructure</div><div className="ps-desc">VTiger gets audited and rebuilt as a proper system of record. Pipeline stages redefined, lead scoring model built in, properties standardised, duplicate records cleaned, dead contacts archived. Everything flowing in from outbound, inbound, and LinkedIn lands in the right place from day one. Your sales team sees a clean, usable CRM <strong>for the first time</strong>.</div></div><div className="ps-timing">Week 2</div></div>
        <div className="process-step"><div className="ps-num">05</div><div className="ps-content"><div className="ps-title">GA4 + GSC + DPDP-Ready Setup</div><div className="ps-desc">GA4 event tracking implemented for every meaningful website action, case study downloads, pricing page visits, video plays, demo requests, contact forms. Google Search Console verified across all property variants with baseline rankings documented. <strong>DPDP-compliant data handling</strong> set up across forms, newsletter, and CRM: consent capture, retention policies, double opt-in flows.</div></div><div className="ps-timing">Week 2</div></div>
      </div>
    </div>
  </>,

  /* 1, Outbound */
  <>
    <div className="bd-header">
      <div className="bd-marker"><div className="bd-marker-num">02</div><div className="bd-marker-phase">Weeks 1–10 · Outbound</div></div>
      <div className="bd-title-block">
        <div className="bd-eyebrow">The Outbound Engine</div>
        <h2 className="bd-title">Three-Tier Outbound<br />&amp; <em>Nurture</em>.</h2>
        <p className="bd-intro">Outbound at In10s isn't one motion, it's three. Cold mass for the documented ICP. Intent-triggered for warm signals. Reactivation for the dormant database. <strong>Each runs on shared infrastructure</strong>, the same domains, the same automation layer, the same reply handling, the same CRM flow. Three motions, one engine.</p>
      </div>
    </div>
    <div className="included-grid-v2">
      <div className="included-card-v2"><div className="ic-step">Tier 1 · Cold Mass</div><div className="ic-title">For the documented ICP.</div><ul className="ic-list"><li>5–7 touch sequences <strong>per persona × product line × geo</strong>, written for CIO/CTO-level BFSI buyers, no marketing fluff</li><li>Each touch has a specific job: problem intro, credibility (Axis, HDFC, ITD), urgency (DPDP), value, ask</li><li>A/B subject line variants from day one for open rate testing</li><li>Apollo + N8N: new ICP-matching contacts auto-flow into the right sequence with no manual list management</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Tier 2 · Intent &amp; Trigger</div><div className="ic-title">For warm signals from the wild.</div><ul className="ic-list"><li>Triggered outreach to companies showing intent: <strong>website visits, LinkedIn engagement, content downloads, webinar attendance</strong></li><li>Different copy from cold mass, references the trigger, references the engagement, shorter sequences</li><li>Higher reply rates (industry data: 13–15% vs 6–7% for pure cold) because the lead is already warm</li><li>Routes through the same domains and reply handling as Tier 1</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Tier 3 · Database Reactivation</div><div className="ic-title">For the leads that went cold.</div><ul className="ic-list"><li>The 200 dormant MQLs, the dead BD batches, the 6+ month inactive contacts, all <strong>segmented and reactivated</strong></li><li>"We last spoke when…" framing: acknowledges the gap, brings new value, doesn't pretend to be cold</li><li>Re-engagement scoring: who responds, who clicks, who's worth bringing back into nurture vs deletion</li><li>Detailed further in Bucket 05, but the sequence infrastructure is built here</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Infrastructure &amp; Reply Handling</div><div className="ic-title">The engine all three motions run on.</div><ul className="ic-list"><li>Domain warmup handled in-house, 4–6 week gradual ramp, monitored throughout for deliverability</li><li>Delivery via UniServe Reach (your platform, your data, no extra tooling)</li><li><strong>Reply categorisation automated</strong>: interested / not now / wrong person / unsubscribe, each routed into VTiger with the right next step triggered</li><li>Hot reply alerts to Mohanty + sales via Slack and email with enriched profile attached</li></ul></div>
    </div>
    <div className="bd-process">
      <div className="bd-process-header"><div className="bd-process-eyebrow">The process</div><div className="bd-process-title">How we get from <em>zero</em> to sending.</div></div>
      <div className="process-steps">
        <div className="process-step"><div className="ps-num">01</div><div className="ps-content"><div className="ps-title">Domain Setup &amp; Warmup</div><div className="ps-desc">2–3 new sending domains registered and configured, completely separate from in10stech.com. SPF, DKIM, DMARC records set up and verified. Warmup begins on Day 1 and runs for 4–6 weeks. <strong>By the time sequences are ready to send, the domains are trusted</strong> and the infrastructure is clean.</div></div><div className="ps-timing">Weeks 1–6</div></div>
        <div className="process-step"><div className="ps-num">02</div><div className="ps-content"><div className="ps-title">Sequence Copywriting · Tier 1</div><div className="ps-desc">Multi-touch sequences written per persona × product line × geo. Each sequence is 5–7 touches: cold intro establishing the problem, value prop grounded in In10s's specific proof points, a case study touch (Axis, HDFC, or ITD, chosen based on the prospect's industry), an insight touch tied to DPDP or their vertical, a breakup email. <strong>Direct, senior-appropriate tone.</strong> A/B subject lines set up from day one.</div></div><div className="ps-timing">Weeks 3–5</div></div>
        <div className="process-step"><div className="ps-num">03</div><div className="ps-content"><div className="ps-title">Intent &amp; Trigger Sequences · Tier 2</div><div className="ps-desc">Shorter, sharper sequences for warm signals. Built once Bucket 03 (Inbound Capture) is live so the triggers, Apollo de-anonymisation, content downloads, webinar attendance, LinkedIn engagement, can fire into these sequences automatically. <strong>The lead isn't cold</strong>: the copy reflects that.</div></div><div className="ps-timing">Weeks 4–5</div></div>
        <div className="process-step"><div className="ps-num">04</div><div className="ps-content"><div className="ps-title">Apollo + N8N Automation Layer</div><div className="ps-desc">N8N connects Apollo to UniServe Reach so new ICP-matching contacts automatically flow into the right sequence based on company profile, geo, and product fit. <strong>No manual list management</strong>. As new companies enter the target list, contacts move into sequences without anyone touching a spreadsheet.</div></div><div className="ps-timing">Weeks 4–5</div></div>
        <div className="process-step"><div className="ps-num">05</div><div className="ps-content"><div className="ps-title">Reply Handling &amp; CRM Flow</div><div className="ps-desc">Every reply categorised automatically, interested, not now, wrong person, unsubscribe, and routed into VTiger with the appropriate next step triggered. Interested replies surface immediately as a hot lead alert to Mohanty and the sales team, with an enriched profile already attached. <strong>No reply sits unseen.</strong></div></div><div className="ps-timing">Weeks 5–6</div></div>
        <div className="process-step"><div className="ps-num">06</div><div className="ps-content"><div className="ps-title">Live Sending &amp; Iteration</div><div className="ps-desc">Sequences go live in Week 6. First two weeks are watched closely: open rates, reply rates, reply quality, deliverability scores. Copy iterations happen on real reply data, not assumptions. <strong>By Week 7, the engine is running on tuned, real-world performance</strong>, and the team has visibility into what's working before the engagement closes.</div></div><div className="ps-timing">Weeks 6–7</div></div>
      </div>
    </div>
  </>,

  /* 2, Inbound */
  <>
    <div className="bd-header">
      <div className="bd-marker"><div className="bd-marker-num">03</div><div className="bd-marker-phase">Weeks 1–9 · Inbound</div></div>
      <div className="bd-title-block">
        <div className="bd-eyebrow">The Inbound Engine</div>
        <h2 className="bd-title">Inbound Capture,<br />Scoring &amp; <em>SLA</em>.</h2>
        <p className="bd-intro">200 inbound MQLs in a year, 14 first conversations, 1 closed deal. The volume isn't the problem. <strong>Response time is.</strong> This bucket fixes that. Every form fill enriched, scored, and routed in minutes. Every hot lead alerted in real time. Every response time tracked.</p>
      </div>
    </div>
    <div className="included-grid-v2">
      <div className="included-card-v2"><div className="ic-step">Visitor De-Anonymisation</div><div className="ic-title">Anonymous traffic becomes named accounts.</div><ul className="ic-list"><li>Apollo's website visitor identification configured and connected to the target list from Bucket 01</li><li>A CIO who spends 8 minutes on the CCM page and downloads a case study is no longer invisible, <strong>they appear in VTiger with a company profile and a lead score</strong>, ready for outreach</li><li>Cross-referenced with the ICP list so we surface signal, not noise</li><li>Feeds Tier 2 outbound sequences automatically</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Lead Scoring Model</div><div className="ic-title">Hot, Warm, Cold, auto-tagged.</div><ul className="ic-list"><li>Weighted scoring inside VTiger: points by action type, page depth, video watch, webinar attendance, LinkedIn engagement</li><li>ICP fit layered in: industry, company size, geo all contribute to the final score</li><li>Hot (8+) / Warm (5–8) / Cold (&lt;5) applied automatically, your team only sees leads that matter</li><li><strong>Sales sees a prioritised list, not a pile of contacts.</strong></li></ul></div>
      <div className="included-card-v2"><div className="ic-step">30-Step Qualification Flow</div><div className="ic-title">Every form fill enriched in minutes.</div><ul className="ic-list"><li>N8N workflow runs on every form submission: company lookup, LinkedIn profile pull, website check, ICP keyword validation, lead score</li><li>Enriched, scored, categorised profile lands in VTiger <strong>within 5 minutes of form submission</strong></li><li>What used to take 2–3 months of wait time now happens automatically before a human touches it</li><li>Quality checks and fallbacks at every step, no leads slip through</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Hot Lead Alerts &amp; SLA</div><div className="ic-title">Response time, finally tracked.</div><ul className="ic-list"><li>When a lead crosses the hot threshold, immediate alert to Mohanty and the relevant sales rep via Slack and email</li><li>Full enriched profile attached to every alert, no hunting for context before the call</li><li>Response SLA tracker built in: <strong>automated reminder fires if the 1–2 hour target is breached</strong></li><li>SLA performance reported in the unified dashboard, visibility for Mohanty, accountability for sales</li></ul></div>
    </div>
    <div className="bd-process">
      <div className="bd-process-header"><div className="bd-process-eyebrow">The process</div><div className="bd-process-title">How we fix the <em>7%</em> conversion rate.</div></div>
      <div className="process-steps">
        <div className="process-step"><div className="ps-num">01</div><div className="ps-content"><div className="ps-title">Website Event Tracking Audit</div><div className="ps-desc">GA4 event tracking audited across every meaningful action on the site, case study downloads, pricing page visits, video plays, demo requests, contact form fills. Any missing events implemented. <strong>This is the data layer everything downstream depends on</strong>. Without it, leads are invisible even when they're active.</div></div><div className="ps-timing">Week 2</div></div>
        <div className="process-step"><div className="ps-num">02</div><div className="ps-content"><div className="ps-title">Apollo Visitor De-Anonymisation Setup</div><div className="ps-desc">Apollo's website visitor identification connected and configured. Anonymous website traffic becomes named companies in VTiger. Cross-referenced with the target list from Bucket 01 so we surface signal, not noise, a random student visit doesn't trigger anything; a CIO from a target bank triggers immediately.</div></div><div className="ps-timing">Week 2</div></div>
        <div className="process-step"><div className="ps-num">03</div><div className="ps-content"><div className="ps-title">Lead Scoring Model Build</div><div className="ps-desc">A weighted scoring model built inside VTiger. Points assigned based on: action type (case study download weighs more than a blog read), page depth, video watch time, webinar attendance, LinkedIn engagement with In10s content, and ICP fit (industry, company size, geo). <strong>Hot / Warm / Cold applied automatically.</strong></div></div><div className="ps-timing">Weeks 2–3</div></div>
        <div className="process-step"><div className="ps-num">04</div><div className="ps-content"><div className="ps-title">30-Step Inbound Qualification Automation</div><div className="ps-desc">Every form fill triggers an N8N workflow: company lookup, LinkedIn profile pull, website check, ICP keyword validation, lead score calculation, all completed before a human touches the lead. <strong>What used to take 2–3 months now happens in under 5 minutes</strong>, automatically.</div></div><div className="ps-timing">Week 3</div></div>
        <div className="process-step"><div className="ps-num">05</div><div className="ps-content"><div className="ps-title">Hot Lead Alerts &amp; SLA Tracking</div><div className="ps-desc">When a lead crosses the hot threshold, an immediate alert goes to Mohanty and the relevant sales team member via Slack and email, with the full enriched profile attached. A response SLA tracker built in: if the 1–2 hour response target is breached, an automatic reminder fires. <strong>No more leads going cold while sitting in a queue.</strong></div></div><div className="ps-timing">Weeks 3–4</div></div>
      </div>
    </div>
  </>,

  /* 3, LinkedIn */
  <>
    <div className="bd-header">
      <div className="bd-marker"><div className="bd-marker-num">04</div><div className="bd-marker-phase">Weeks 2–10 · LinkedIn</div></div>
      <div className="bd-title-block">
        <div className="bd-eyebrow">The LinkedIn Engine</div>
        <h2 className="bd-title">LinkedIn<br /><em>GTM Engine</em>.</h2>
        <p className="bd-intro">LinkedIn is where every CIO, CTO, and CDO in BFSI lives. The In10s company page is active but generic; the executive presence of Anisha and Philips is largely absent. <strong>Personal pages outperform company pages 5–10× for this ICP</strong>, a CIO trusts a founder's perspective infinitely more than a corporate post. This bucket builds both, and ties engagement directly into the lead scoring model.</p>
      </div>
    </div>
    <div className="included-grid-v2">
      <div className="included-card-v2"><div className="ic-step">Company Page Audit</div><div className="ic-title">Optimisation brief, fully spec'd.</div><ul className="ic-list"><li>Full audit of the In10s company page: headline, about, featured content, banner, employee advocacy</li><li>Detailed brief for Mohanty's team covering every change needed, with rationale</li><li>Grounded in <strong>what In10s's ICP actually searches for and responds to</strong> on the platform</li><li>Implemented by Mohanty's team during the engagement; reviewed and refined</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">10-Week Content Calendar</div><div className="ic-title">3× per week, mapped to ICP.</div><ul className="ic-list"><li>Content calendar for the full engagement, mapped to the content-to-persona matrix from Bucket 01</li><li>DPDP urgency posts, CCM thought leadership, case study storytelling, industry insight</li><li>Every post has a <strong>specific ICP persona in mind before it's written</strong>, no generic posts</li><li>Mix of formats: long-form posts, polls, carousels, repurposed webinar clips</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Executive Activation</div><div className="ic-title">Anisha &amp; Philips, ghostwritten.</div><ul className="ic-list"><li>Voice brief and ghostwriting framework developed for Anisha and/or Philips</li><li>4–6 ready-to-publish drafts to launch the personal posting motion</li><li>Ongoing framework so the team can sustain the cadence post-handover (30–60 mins/week per exec)</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Sales Nav + Engagement → Scoring</div><div className="ic-title">Engagement becomes a named lead.</div><ul className="ic-list"><li>LinkedIn Sales Navigator configured with ICP filters matching the target list from Bucket 01</li><li>Connection sequences built for target personas, personalised, grounded in genuine relevance</li><li>Post engagement (likes, comments, shares, profile views) from ICP-matching accounts <strong>fed into the lead scoring model via N8N</strong></li><li>A CIO who comments on a DPDP post becomes a named, scored lead in VTiger within minutes</li></ul></div>
    </div>
    <div className="bd-process">
      <div className="bd-process-header"><div className="bd-process-eyebrow">The process</div><div className="bd-process-title">How we turn LinkedIn into a <em>lead source</em>.</div></div>
      <div className="process-steps">
        <div className="process-step"><div className="ps-num">01</div><div className="ps-content"><div className="ps-title">Company Page Audit &amp; Optimisation Brief</div><div className="ps-desc">Full audit of the In10s LinkedIn company page: headline, about section, featured content, banner, employee advocacy settings. A detailed optimisation brief delivered to Mohanty's team covering every change needed, with rationale grounded in <strong>what In10s's ICP actually searches for and responds to</strong> on the platform.</div></div><div className="ps-timing">Week 3</div></div>
        <div className="process-step"><div className="ps-num">02</div><div className="ps-content"><div className="ps-title">Content Calendar Build</div><div className="ps-desc">A 3×/week content calendar for the full 10-week engagement, mapped to the content-to-persona matrix from Bucket 01. Every post has a clear ICP in mind before it's written. The DPDP content goes up first, highest-urgency angle, most likely to earn engagement from exactly the right people.</div></div><div className="ps-timing">Weeks 3–4</div></div>
        <div className="process-step"><div className="ps-num">03</div><div className="ps-content"><div className="ps-title">Executive LinkedIn Activation</div><div className="ps-desc">A ghostwriting framework and voice brief for Anisha and/or Philips to post as individuals. The framework covers posting cadence, content themes, tone guidance, and 4–6 opening post drafts ready to publish. <strong>Requires 30–60 minutes per week from the exec involved.</strong></div></div><div className="ps-timing">Week 4</div></div>
        <div className="process-step"><div className="ps-num">04</div><div className="ps-content"><div className="ps-title">Sales Navigator &amp; Connection Sequences</div><div className="ps-desc">LinkedIn Sales Navigator configured with ICP filters matching the target list from Bucket 01. Connection request sequences built for target personas, personalised, non-spammy, grounded in genuine relevance (DPDP deadline, industry context, shared connections where applicable).</div></div><div className="ps-timing">Weeks 4–5</div></div>
        <div className="process-step"><div className="ps-num">05</div><div className="ps-content"><div className="ps-title">Engagement → Lead Scoring Integration</div><div className="ps-desc">Post engagement, likes, comments, shares, profile views from ICP-matching accounts, monitored and fed into the lead scoring model in VTiger via N8N. <strong>A CIO who comments on an executive post about DPDP compliance is not just an anonymous LinkedIn user.</strong> They're a named, scored lead in VTiger within minutes of that engagement, ready for Tier 2 outbound.</div></div><div className="ps-timing">Weeks 5–6</div></div>
      </div>
    </div>
  </>,

  /* 4, Database */
  <>
    <div className="bd-header">
      <div className="bd-marker"><div className="bd-marker-num">05</div><div className="bd-marker-phase">Weeks 2–9 · Owned Channels</div></div>
      <div className="bd-title-block">
        <div className="bd-eyebrow">The Owned Audience</div>
        <h2 className="bd-title">Newsletter &amp; Database<br /><em>Reactivation</em>.</h2>
        <p className="bd-intro">Years of newsletter subscribers, 200 dormant MQLs, dead BD batches across APAC and EMEA, webinar attendees nobody followed up with, In10s already has a substantial owned audience. <strong>It's just not productive.</strong> This bucket segments it, scores it against current ICP, and reactivates the contacts worth reactivating.</p>
      </div>
    </div>
    <div className="included-grid-v2">
      <div className="included-card-v2"><div className="ic-step">Database Audit &amp; Segmentation</div><div className="ic-title">What's worth reactivating.</div><ul className="ic-list"><li>Full audit of the existing database: 200 dormant MQLs, dead BD batches, webinar attendees, partner referrals</li><li>Segmented against the current ICP from Bucket 01, <strong>not every contact is worth reactivating</strong></li><li>Tagged by source, recency, last engagement, ICP fit</li><li>Cleansed of dead emails, hard bounces, unsubscribes, clean foundation for everything else</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Reactivation Sequences</div><div className="ic-title">"We last spoke when…"</div><ul className="ic-list"><li>Multi-touch sequences specifically written for warm-but-cold contacts, not pretending to be cold outreach</li><li>Acknowledges the gap, brings new value (often DPDP urgency or a recent case study), provides a specific reason to re-engage</li><li>Re-engagement scoring: who responds, who clicks, who's worth bringing back into nurture vs deletion</li><li><strong>Reply rates here run 3–5× higher</strong> than pure cold outbound, the highest-ROI motion in the build</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Newsletter Strategy</div><div className="ic-title">Persona-based, scoring-integrated.</div><ul className="ic-list"><li>Newsletter restructured from one-size-fits-all blast to <strong>segmented streams by persona and product interest</strong></li><li>CIO-track content vs CDO-track content vs Compliance Officer-track content</li><li>Opens and clicks fed into the lead scoring model, newsletter engagement becomes an actual intent signal</li><li>Cadence built to be sustainable for Mohanty's 3-person team post-handover</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Onboarding &amp; Subscription Flow</div><div className="ic-title">New subscribers, properly welcomed.</div><ul className="ic-list"><li>Welcome sequence for new newsletter subscribers, segmented by source and stated interest</li><li>Persona-routed content series in the first 4 weeks of subscription</li><li>Double opt-in for DPDP compliance baked in from day one</li><li>Subscription source attribution: which channel drove which subscriber, fed into the unified dashboard</li></ul></div>
    </div>
    <div className="bd-process">
      <div className="bd-process-header"><div className="bd-process-eyebrow">The process</div><div className="bd-process-title">How we make the existing database <em>work</em>.</div></div>
      <div className="process-steps">
        <div className="process-step"><div className="ps-num">01</div><div className="ps-content"><div className="ps-title">Database Audit &amp; Hygiene</div><div className="ps-desc">Full audit of every contact source: VTiger, Apollo, newsletter list, webinar registrations, BD campaign exports, partner referrals. Deduplicated, hard bounces removed, unsubscribes honoured, dead emails archived. <strong>Clean foundation before any segmentation work begins.</strong></div></div><div className="ps-timing">Week 2</div></div>
        <div className="process-step"><div className="ps-num">02</div><div className="ps-content"><div className="ps-title">Segmentation Against Current ICP</div><div className="ps-desc">Every remaining contact tagged: source, recency, last engagement, persona, geo, product interest, ICP fit score. The output is a clear map of what's actually in the database, and which segments are worth reactivating versus archiving.</div></div><div className="ps-timing">Weeks 2–3</div></div>
        <div className="process-step"><div className="ps-num">03</div><div className="ps-content"><div className="ps-title">Reactivation Sequences Built &amp; Live</div><div className="ps-desc">Multi-touch sequences written specifically for reactivation, copy that acknowledges the gap rather than pretending it's cold outreach. Different sequences for different segments: dormant MQLs get a different sequence than abandoned BD contacts. <strong>Reply scoring built in</strong> so we know who's coming back into the funnel.</div></div><div className="ps-timing">Weeks 4–6</div></div>
        <div className="process-step"><div className="ps-num">04</div><div className="ps-content"><div className="ps-title">Newsletter Restructure &amp; Segmentation</div><div className="ps-desc">The bi-weekly newsletter restructured from a single blast into segmented streams by persona and product interest. <strong>Opens and clicks feed into the lead scoring model</strong>, newsletter engagement finally becomes an intent signal, not just a vanity metric.</div></div><div className="ps-timing">Weeks 5–7</div></div>
        <div className="process-step"><div className="ps-num">05</div><div className="ps-content"><div className="ps-title">Subscription &amp; Onboarding Flow</div><div className="ps-desc">Welcome sequence for new subscribers built and live. Double opt-in baked in. Persona-routed content series for the first 4 weeks of subscription. <strong>The newsletter becomes a productive top-of-funnel asset</strong>, not just a broadcast.</div></div><div className="ps-timing">Weeks 7–8</div></div>
      </div>
    </div>
  </>,

  /* 5, Reporting */
  <>
    <div className="bd-header">
      <div className="bd-marker"><div className="bd-marker-num">06</div><div className="bd-marker-phase">Weeks 6–10 · Reporting &amp; Dashboards</div></div>
      <div className="bd-title-block">
        <div className="bd-eyebrow">The Closing Layer</div>
        <h2 className="bd-title">Reporting, Attribution<br />&amp; <em>Dashboards</em>.</h2>
        <p className="bd-intro">This bucket builds the unified dashboard, the attribution model, the full SOP library, and a live walkthrough handover. <strong>Plus a 2-week post-handover check-in</strong>, because most issues surface once the team is running it themselves.</p>
      </div>
    </div>
    <div className="included-grid-v2">
      <div className="included-card-v2"><div className="ic-step">Unified Dashboard</div><div className="ic-title">Every metric, one view.</div><ul className="ic-list"><li>MQL volume, lead score distribution, outbound reply rates, open/click/reply by sequence</li><li>LinkedIn reach and engagement, inbound form fills, hot lead count, pipeline stage movement, response SLA compliance</li><li>Updated automatically, <strong>one view for Mohanty, one for Philips, one for Anisha</strong>, each seeing exactly what they need</li><li>Built in tools the team already has, so there's no new subscription to manage</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Multi-Touch Attribution</div><div className="ic-title">Which channel drove which MQL.</div><ul className="ic-list"><li>UTM strategy applied across every outbound, LinkedIn, and newsletter touchpoint</li><li>Source tracking on every form fill: first-touch, last-touch, multi-touch view</li><li><strong>Closed-loop reporting</strong>: which MQLs converted to first calls, which went cold, why</li><li>Mohanty can finally answer "where did this lead come from" with data, not guesses</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Mid-Engagement Review</div><div className="ic-title">Week 6, performance check.</div><ul className="ic-list"><li>Real performance data reviewed at the halfway point: outbound replies, inbound form fills, LinkedIn engagement, lead scoring distribution</li><li>Copy iterated, sequence timing adjusted, underperforming elements fixed before the final push</li><li><strong>You don't wait until the end of the engagement to find out what's working.</strong></li></ul></div>
      <div className="included-card-v2"><div className="ic-step">SOPs &amp; Handover</div><div className="ic-title">Live walkthrough, full documentation.</div><ul className="ic-list"><li>Every workflow, automation, sequence, and integration documented as a clear operating procedure</li><li>Written for Mohanty's actual team, not a generic tech audience</li><li>Live handover session walking the team through every system, not a document drop, a real walkthrough with Q&amp;A</li><li><strong>2-week post-handover check-in call included</strong> to catch anything that surfaces once you're running it</li></ul></div>
    </div>
    <div className="bd-process">
      <div className="bd-process-header"><div className="bd-process-eyebrow">The process</div><div className="bd-process-title">How we make sure it <em>keeps running</em> after we leave.</div></div>
      <div className="process-steps">
        <div className="process-step"><div className="ps-num">01</div><div className="ps-content"><div className="ps-title">Week 6 Mid-Engagement Review</div><div className="ps-desc">At the halfway point, we sit down with the In10s team and review real performance data: outbound open and reply rates, inbound form fills, LinkedIn engagement, lead scoring distribution. Copy is iterated, sequence timing is adjusted, and any underperforming elements are fixed. <strong>You don't wait until the end to find out what's working.</strong></div></div><div className="ps-timing">Week 6</div></div>
        <div className="process-step"><div className="ps-num">02</div><div className="ps-content"><div className="ps-title">Unified Reporting Dashboard</div><div className="ps-desc">A single dashboard pulling together every metric that matters: MQL volume, lead score distribution, outbound reply rates, LinkedIn reach and engagement, inbound form fills, hot lead count, pipeline stage movement. Updated automatically. <strong>One view for Mohanty, one for Philips, one for Anisha</strong>.</div></div><div className="ps-timing">Week 8</div></div>
        <div className="process-step"><div className="ps-num">03</div><div className="ps-content"><div className="ps-title">Attribution Model Implementation</div><div className="ps-desc">UTM strategy applied across every outbound, LinkedIn, and newsletter touchpoint. Source tracking on every form fill captures first-touch and last-touch attribution. Multi-touch view built into the dashboard so Mohanty can see how a lead's journey actually unfolded.</div></div><div className="ps-timing">Weeks 8–9</div></div>
        <div className="process-step"><div className="ps-num">04</div><div className="ps-content"><div className="ps-title">Full SOP Documentation</div><div className="ps-desc">Every workflow, every automation, every sequence, every integration, written up as a clear operating procedure. How to add new contacts to outbound. How to update sequence copy. How to read the lead scoring model. <strong>Written for Mohanty's actual team</strong>, not a generic tech audience.</div></div><div className="ps-timing">Weeks 8–9</div></div>
        <div className="process-step"><div className="ps-num">05</div><div className="ps-content"><div className="ps-title">Live Handover &amp; 2-Week Check-in</div><div className="ps-desc">A dedicated handover session walking Mohanty's team through every system live, with Q&amp;A. <strong>A 2-week post-handover check-in call is included</strong> to catch anything that surfaces once the team is running it independently.</div></div><div className="ps-timing">Week 10</div></div>
      </div>
    </div>
  </>,

  /* 6, Sales */
  <>
    <div className="bd-header">
      <div className="bd-marker"><div className="bd-marker-num">07</div><div className="bd-marker-phase">Weeks 3–8 · Sales Arm</div></div>
      <div className="bd-title-block">
        <div className="bd-addon-flag">Add-on · Available</div>
        <div className="bd-eyebrow">The Sales-Side Counterpart</div>
        <h2 className="bd-title">Sales<br /><em>Enablement</em>.</h2>
        <p className="bd-intro">A working marketing engine surfaces hot leads. Sales enablement determines whether they convert. This add-on builds the assets the sales team and the junior cold-callers actually need: persona one-pagers, battle cards for competitive conversations, and call scripts grounded in the ICP work from Bucket 01. </p>
      </div>
    </div>
    <div className="included-grid-v2">
      <div className="included-card-v2"><div className="ic-step">Persona One-Pagers</div><div className="ic-title">The right pitch, per buyer.</div><ul className="ic-list"><li>One-pagers for the top 3 personas: <strong>CIO, CDO, Chief Compliance Officer</strong></li><li>Each one tailored: pain points specific to that role, the product line that solves it, the proof points that resonate</li><li>Designed in That Works Co aesthetic, direct, authoritative, no corporate fluff</li><li>Used by sales as leave-behinds, in pitch decks, and as follow-up assets after first calls</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Competitive Battle Cards</div><div className="ic-title">For the conversations sales is losing.</div><ul className="ic-list"><li>Battle cards covering the top 2 single-domain competitors that come up most often (Salesforce MC, Adobe, MoEngage, etc.)</li><li>The "design to delivery" positioning made concrete: where In10s wins, where the competitor wins, how to handle the objection</li><li>Built from real conversations, Mohanty and Philips contribute the patterns they've seen</li><li><strong>Sales stops winging the competitive conversation.</strong></li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Cold Call Scripts</div><div className="ic-title">For the junior sales team.</div><ul className="ic-list"><li>Scripts for the junior interns currently doing cold calling for India and Middle East</li><li>Built from the ICP work in Bucket 01, the right opener, the right pivot, the right qualifying questions</li><li>Hot-lead-to-call workflow: enriched profile lands in the rep's hands <strong>before they dial</strong></li><li>Outcomes feed back into VTiger scoring, call performance becomes data, not anecdote</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Sales Templates Library</div><div className="ic-title">Post-handoff communication, ready.</div><ul className="ic-list"><li>Email templates for sales reps to use after marketing hands off a hot lead</li><li>Discovery call agenda templates, follow-up sequences, post-demo recap templates</li><li>Templates designed to be edited per prospect, not sent generic, the structure is the value</li><li>Library lives in VTiger for ease of access during day-to-day workflow</li></ul></div>
    </div>
    <div className="bd-process">
      <div className="bd-process-header"><div className="bd-process-eyebrow">The process</div><div className="bd-process-title">How we close the loop with <em>sales</em>.</div></div>
      <div className="process-steps">
        <div className="process-step"><div className="ps-num">01</div><div className="ps-content"><div className="ps-title">Persona One-Pager Build</div><div className="ps-desc">Built directly from the ICP work in Bucket 01. Each one-pager tailored to a specific persona's pain, the product line that solves it, the proof points that resonate, and the next step. Designed in That Works Co aesthetic, direct, authoritative, the same voice as everything else in the engagement.</div></div><div className="ps-timing">Weeks 3–4</div></div>
        <div className="process-step"><div className="ps-num">02</div><div className="ps-content"><div className="ps-title">Competitive Battle Cards</div><div className="ps-desc">Stakeholder interview with Mohanty and Philips to map the top 2 competitors that show up most often in deals. Battle cards built around real conversations: where In10s wins, where the competitor has an edge, how to handle each objection.</div></div><div className="ps-timing">Weeks 4–5</div></div>
        <div className="process-step"><div className="ps-num">03</div><div className="ps-content"><div className="ps-title">Cold Call Scripts &amp; Workflow</div><div className="ps-desc">Scripts for the junior interns doing cold calling, built from the ICP work, with the right opener, pivot, and qualifying questions per persona. Hot-lead-to-call workflow built in N8N: <strong>enriched profile lands in the rep's hands before they dial</strong>. Call outcomes captured and fed back into VTiger scoring.</div></div><div className="ps-timing">Weeks 5–6</div></div>
        <div className="process-step"><div className="ps-num">04</div><div className="ps-content"><div className="ps-title">Sales Templates Library</div><div className="ps-desc">Email templates and call agenda templates for every common post-handoff scenario: hot lead first response, post-demo recap, deal stalled re-engagement, contract follow-up. Templates designed for the rep to personalise quickly, the structure is the value, not the words. Library deployed in VTiger.</div></div><div className="ps-timing">Weeks 6–8</div></div>
      </div>
    </div>
  </>,

  /* 7, SEO */
  <>
    <div className="bd-header">
      <div className="bd-marker"><div className="bd-marker-num">08</div><div className="bd-marker-phase">Weeks 4–10 · Organic Growth</div></div>
      <div className="bd-title-block">
        <div className="bd-addon-flag">Add-on · Available</div>
        <div className="bd-eyebrow">The Compounding Channel</div>
        <h2 className="bd-title">SEO &amp; AEO<br /><em>Foundation</em>.</h2>
        <p className="bd-intro">Organic and AI search take longest to pay back. The ceiling is also the highest. A CIO Googling "DPDP compliance software for banks" or asking ChatGPT "what's the best CCM platform for Indian BFSI" should land on In10s. <strong>No competitor has claimed this ground yet.</strong></p>
      </div>
    </div>
    <div className="included-grid-v2">
      <div className="included-card-v2"><div className="ic-step">Technical SEO Audit</div><div className="ic-title">The foundation, fixed.</div><ul className="ic-list"><li>Full audit of in10stech.com: Core Web Vitals, page speed, crawlability, schema markup, canonical tags, internal linking</li><li>Prioritised fix list for Mohanty's developer, <strong>not a 40-page report, a clear action list</strong> with highest-impact items first</li><li>GSC setup verified across all property variants, baseline rankings documented for all target keywords</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Keyword Strategy</div><div className="ic-title">15–20 high-intent terms.</div><ul className="ic-list"><li>15–20 primary keywords across product lines and target verticals, high-intent, low-competition terms</li><li>Focus areas: <strong>"DPDP compliance software for banks," "CCM platform India," "customer communication management BFSI"</strong></li><li>Mapped to existing pages or new content opportunities, nothing is guesswork</li><li>Ranking and traffic baselines documented for measurement post-engagement</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">AEO / GEO Brief</div><div className="ic-title">Where AI sends the right buyer.</div><ul className="ic-list"><li>Optimisation brief so ChatGPT, Perplexity, Gemini, and Claude surface In10s for DPDP and CCM queries</li><li>Page structure, answer-format content requirements, and citation-building strategy</li><li><strong>No Indian B2B software company has staked this ground yet</strong> — the AEO opportunity is wide open</li><li>Implementation guide for Mohanty's team to continue building citations post-engagement</li></ul></div>
      <div className="included-card-v2"><div className="ic-step">Published Content</div><div className="ic-title">4–6 articles, written and live.</div><ul className="ic-list"><li>DPDP compliance piece goes live first, most urgent search opportunity, doubles as outbound and LinkedIn content</li><li>Remaining articles cover CCM category education, BFSI-specific use cases, and thought leadership</li><li>Each article written for the ICP, not for Google, <strong>pieces people will actually read and share</strong></li><li>Pillar architecture mapped for Mohanty's team to continue building post-engagement</li></ul></div>
    </div>
    <div className="bd-process">
      <div className="bd-process-header"><div className="bd-process-eyebrow">The process</div><div className="bd-process-title">How we build <em>compounding</em> organic presence.</div></div>
      <div className="process-steps">
        <div className="process-step"><div className="ps-num">01</div><div className="ps-content"><div className="ps-title">Technical SEO Audit</div><div className="ps-desc">Full audit of in10stech.com: Core Web Vitals, page speed, crawlability, indexation, schema markup, canonical tags, internal linking structure. <strong>Mohanty's developer gets a clear action list</strong> — what has the highest impact on ranking and indexation, fixed first.</div></div><div className="ps-timing">Week 4</div></div>
        <div className="process-step"><div className="ps-num">02</div><div className="ps-content"><div className="ps-title">Keyword Strategy &amp; Mapping</div><div className="ps-desc">15–20 primary keywords identified across product lines and target verticals. High-intent, low-competition terms prioritised: "DPDP compliance software for banks," "CCM platform India," "customer communication management BFSI." Each keyword mapped to an existing page or a new content opportunity. Ranking baselines documented.</div></div><div className="ps-timing">Weeks 4–5</div></div>
        <div className="process-step"><div className="ps-num">03</div><div className="ps-content"><div className="ps-title">AEO / GEO Brief</div><div className="ps-desc">A dedicated brief for optimising key pages so AI tools, ChatGPT, Perplexity, Gemini, Claude, surface In10s when buyers ask questions like "what's the best CCM platform for Indian banks."</div></div><div className="ps-timing">Week 5</div></div>
        <div className="process-step"><div className="ps-num">04</div><div className="ps-content"><div className="ps-title">Content Writing &amp; Publishing</div><div className="ps-desc">4–6 blog articles written and published during the engagement. The DPDP compliance piece goes live first. Remaining articles cover CCM category education, BFSI-specific use cases, and thought leadership pulled from the keyword strategy. <strong>Each article is written for the ICP, not for Google</strong>, pieces people will actually read and share.</div></div><div className="ps-timing">Weeks 5–7</div></div>
        <div className="process-step"><div className="ps-num">05</div><div className="ps-content"><div className="ps-title">Pillar Architecture &amp; GSC Handover</div><div className="ps-desc">A pillar page architecture and internal linking structure mapped for Mohanty's team to continue building after the engagement ends. Google Search Console fully configured, baseline rankings documented, and a simple monthly reporting template handed over so the team can track progress independently.</div></div><div className="ps-timing">Weeks 6–7</div></div>
      </div>
    </div>
  </>,
];

const In10s = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openRisks, setOpenRisks] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [openStack, setOpenStack] = useState(false);
  const [openKpis, setOpenKpis] = useState(false);
  const [activePage, setActivePage] = useState<'overview' | 'deliverables' | 'fineprint'>('overview');

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, behavior: 'instant' });
    const fadeObserver = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    document.querySelectorAll(".fade-in").forEach((el) => fadeObserver.observe(el));
    return () => { fadeObserver.disconnect(); };
  }, [activePage]);

  const isDark = false;

  return (
    <div className="in10s-root">

      {/* FIXED NAV — pills only, always on top */}
      <div className="proposal-nav-fixed">
        <div className="proposal-page-pills">
          <button className={`proposal-page-btn${activePage === 'overview' ? ' active' : ''}`} onClick={() => setActivePage('overview')}>Overview</button>
          <button className={`proposal-page-btn${activePage === 'deliverables' ? ' active' : ''}`} onClick={() => setActivePage('deliverables')}>Deliverables</button>
          <button className={`proposal-page-btn${activePage === 'fineprint' ? ' active' : ''}`} onClick={() => setActivePage('fineprint')}>Fine Print</button>
        </div>
      </div>

      {/* ── OVERVIEW ── */}
      {activePage === 'overview' && <>

      {/* COVER */}
      <section className="cover" id="cover">
        <div className="cover-header-row">
          <img src="/logo.svg" alt="That Works" className="cover-logo" height="65" />
          <div className="doc-label">GTM Proposal · Confidential</div>
        </div>
        <div className="cover-body">
          <div className="cover-eyebrow">In10s × That Works Co.</div>
          <h1 className="cover-title">Full GTM<br /><em>Infrastructure</em><br />Build</h1>
          <p className="cover-subtitle">A 10-week engagement to design, build, and hand over the complete GTM and revenue operations infrastructure In10s needs to turn a best-in-class product into the pipeline it deserves.</p>
          <div className="cover-client">Prepared for<br /><strong>Anisha Shastri · Anisha Mohanty · Philips Eapen · In10s</strong></div>
          <div className="cover-stats">
            <div className="cover-stat"><div className="cover-stat-num">10</div><div className="cover-stat-label">Week Engagement</div></div>
            <div className="cover-stat"><div className="cover-stat-num">6</div><div className="cover-stat-label">Core Work Streams</div></div>
            <div className="cover-stat"><div className="cover-stat-num">₹7.5L</div><div className="cover-stat-label">Investment</div></div>
          </div>
        </div>
        <div className="cover-footer"></div>
      </section>

      {/* DIAGNOSIS */}
      <section className="diagnosis-section" id="diagnosis">
        <div className="section-inner fade-in">
          <div className="eyebrow eyebrow-light">Where things stand</div>
          <h2 className="h-light">The gap between what you<br />have and what you're <em>getting</em>.</h2>
          <div className="funnel-block">
          <div className="funnel-source">Data mentioned in discovery</div>
          <div className="diagnosis-funnel">
            <div className="funnel-stage"><div className="funnel-num">200</div><div className="funnel-label">Inbound MQLs</div><div className="funnel-detail">April 2025 → today<br />All organic. No paid spend.</div></div>
            <div className="funnel-arrow">→</div>
            <div className="funnel-stage"><div className="funnel-num">14</div><div className="funnel-label">First Conversations</div><div className="funnel-detail">7% conversion rate<br />No automated follow-up in place.</div></div>
            <div className="funnel-arrow">→</div>
            <div className="funnel-stage"><div className="funnel-num">1</div><div className="funnel-label">Closed Deal</div><div className="funnel-detail">0.5% end-to-end<br />Industry baseline: 5–10× higher.</div></div>
          </div>
          </div>
          <div className="gap-callout"><div className="gap-callout-label">The honest read</div><div className="gap-callout-body">200 qualified inbound leads in a year, fully organic, is really strong! <strong>The problem is infrastructure, not effort.</strong> Without automated follow-up and a lead scoring system, even a well-run team can't move fast enough, enterprise buyers need multiple touches, in the right order, before they pick up.</div></div>
          <div className="diag-grid">
            <div className="diag-card"><div className="diag-tag">Process Gap</div><div className="diag-title">No nurture infrastructure</div><div className="diag-body">Leads sit in VTiger for 2–3 months with no automated follow-up. By the time anyone reaches out, the conversation is cold. The 7% → call conversion is fixable, but only with a system that <strong>responds in minutes, not months</strong>.</div></div>
            <div className="diag-card"><div className="diag-tag">Visibility Gap</div><div className="diag-title">Disconnected channels</div><div className="diag-body">LinkedIn, website, webinars, newsletters, all active, none talking to each other. A CIO who reads three articles, visits the pricing page twice, and watches a webinar is <strong>invisible to your sales team</strong>. That's a hot lead with no name on it.</div></div>
            <div className="diag-card"><div className="diag-tag">Outbound Gap</div><div className="diag-title">A paused outbound motion</div><div className="diag-body">700–800 contacts were previously reached per batch. Conversations started, and then died, because there was no follow-up system. <strong>Outbound is currently paused entirely</strong>. The infrastructure to restart it properly has never been built.</div></div>
            <div className="diag-card"><div className="diag-tag">Tooling Gap</div><div className="diag-title">Apollo used at 5% of capacity</div><div className="diag-body">Apollo is paid for and in active use, but only as a contact lookup tool. Its visitor de-anonymisation, sequencer automation, filter-triggered list building, and AI-enrichment features <strong>are sitting unused</strong> while you pay for them every month.</div></div>
            <div className="diag-card"><div className="diag-tag">Positioning Gap</div><div className="diag-title">Proof points without a platform</div><div className="diag-body">Axis Bank: $10M year-one savings. HDFC: 50% reduction in digital abandonment. ITD: 63-day processing to 1 day. Jio: 100M subscribers in 170 days. <strong>World-class numbers</strong>, not driving pipeline because they're not being told at scale, to the right people, at the right time.</div></div>
            <div className="diag-card"><div className="diag-tag">Foundation Gap</div><div className="diag-title">No documented ICP, anywhere</div><div className="diag-body">There is no documented ICP per product line, no persona-specific pain mapping, no content-to-persona matrix. <strong>Everything Mohanty does is from her head</strong>, which means it can't scale, can't be automated, and can't be handed to a BD hire when she makes one.</div></div>
            <div className="diag-card diag-real"><div className="diag-real-grid"><div><div className="diag-title">This is all <em>one problem</em>.</div><div className="diag-body">Six gaps, one root cause: <strong>no foundation layer connecting any of it.</strong> No ICP means generic outbound. No scoring means invisible inbound. No attribution means nothing improves. This engagement fixes the foundation first, everything else is built on top of it.</div></div><div className="diag-real-side"><div className="diag-mini amber"><div className="diag-mini-label">Where it starts</div><div className="diag-mini-body">Bucket 01, ICP, data, and CRM foundation, is the root fix. Every other work stream depends on it. It ships in Weeks 1–4.</div></div><div className="diag-mini"><div className="diag-mini-label">DPDP Urgency · 2026</div><div className="diag-mini-body">India's data protection law takes effect this year. Every BFSI and Telco CIO is on a real deadline. In10s is the answer, and the window to own that conversation is now.</div></div></div></div></div>
          </div>
        </div>
      </section>

      {/* PHILIPS PULL QUOTE */}
      <section className="pull-quote">
        <div className="pull-quote-inner fade-in"><div className="quote-mark">"</div><div><div className="pull-quote-text">What we need to do better is the <em>outcomes</em>. We're doing a lot of work, campaigns, webinars, outreach through social, but that's not really resulting in qualified MQLs coming in. <em>The problem statement lies there</em>.</div><div className="pull-quote-attr"><strong>Philips</strong> &nbsp;·&nbsp; Head of Global Sales &amp; Marketing &nbsp;·&nbsp; In10s</div></div></div>
      </section>

      {/* STRATEGIC FRAME */}
      <section className="strategic-frame" id="edge">
        <div className="section-inner fade-in">
          <div className="eyebrow">The In10s edge</div>
          <h2>Three facts that make<br />10 weeks <em>enough</em>.</h2>
          <div className="frame-grid">
            <div className="frame-card"><div className="frame-card-num">01</div><div className="frame-card-eyebrow">Finite, Knowable TAM</div><div className="frame-card-title">Your market is small enough to know by name.</div><div className="frame-card-body"><strong>200 to 800 companies.</strong> The full target list can be built in Week 1. Every sequence, post, and article is written for a known audience, not a broad demographic.</div></div>
            <div className="frame-card amber"><div className="frame-card-num">02</div><div className="frame-card-eyebrow">DPDP 2026 · Live Urgency</div><div className="frame-card-title">A real deadline on every CIO's desk, right now.</div><div className="frame-card-body">Every BFSI and Telco CIO has a compliance deadline they <strong>cannot miss.</strong> In10s sells the answer. This is the outbound angle, the content hook, and the position that makes AI tools recommend you first.</div></div>
            <div className="frame-card"><div className="frame-card-num">03</div><div className="frame-card-eyebrow">World-Class Proof Points</div><div className="frame-card-title">Credibility that's already won, just not deployed.</div><div className="frame-card-body">Axis Bank $10M. HDFC 50% abandonment reduction. ITD 63 days to 1. Jio 100M subscribers in 170 days. Vodafone UK €4M savings. <strong>None of this is in your outbound or content yet.</strong> And that's just the CCM side. Reach brings campaign automation wins, DigitalOnboarding brings onboarding conversion data. Different products, different buyers, different proof.</div></div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section" id="timeline">
        <div className="timeline-inner fade-in">
          <div className="eyebrow">10-Week Roadmap</div>
          <h2>What happens, <em>when</em>.</h2>
          <div className="timeline-grid">
            <div className="timeline-header-row"><div></div><div className="timeline-week">Wk 1</div><div className="timeline-week">Wk 2</div><div className="timeline-week">Wk 3</div><div className="timeline-week">Wk 4</div><div className="timeline-week">Wk 5</div><div className="timeline-week">Wk 6</div><div className="timeline-week">Wk 7</div><div className="timeline-week">Wk 8</div><div className="timeline-week">Wk 9</div><div className="timeline-week">Wk 10</div></div>
            <div className="timeline-row outbound-row"><div className="timeline-label outbound-label">01 · ICP &amp; CRM Foundation <span className="tl-outbound-tag">Outbound Only</span></div><div className="timeline-cell tl-orange"></div><div className="timeline-cell tl-orange"></div><div className="timeline-cell tl-orange"></div><div className="timeline-cell tl-orange-fade"></div><div className="timeline-cell tl-orange-fade"></div><div className="timeline-cell tl-amber"></div><div className="timeline-cell tl-amber"></div><div className="timeline-cell tl-blue"></div><div className="timeline-cell"></div><div className="timeline-cell"></div></div>
            <div className="timeline-row outbound-row"><div className="timeline-label outbound-label">02 · Outbound &amp; Nurture <span className="tl-outbound-tag">Outbound Only</span></div><div className="tl-warmup-span">Domain warmup</div><div className="timeline-cell tl-orange-soft"></div><div className="timeline-cell tl-orange"></div><div className="timeline-cell tl-orange-soft"></div><div className="timeline-cell tl-green"></div><div className="timeline-cell tl-green"></div><div className="timeline-cell tl-amber"></div><div className="timeline-cell tl-blue"></div></div>
            <div className="timeline-row"><div className="timeline-label">03 · Inbound &amp; Scoring</div><div className="timeline-cell tl-orange-fade"></div><div className="timeline-cell tl-orange-fade"></div><div className="timeline-cell tl-orange-soft"></div><div className="timeline-cell tl-orange"></div><div className="timeline-cell tl-green"></div><div className="timeline-cell tl-green"></div><div className="timeline-cell tl-amber"></div><div className="timeline-cell tl-amber"></div><div className="timeline-cell tl-blue"></div><div className="timeline-cell"></div></div>
            <div className="timeline-row"><div className="timeline-label">04 · LinkedIn Engine</div><div className="timeline-cell"></div><div className="timeline-cell tl-orange-fade"></div><div className="timeline-cell tl-orange-fade"></div><div className="timeline-cell tl-orange-soft"></div><div className="timeline-cell tl-orange"></div><div className="timeline-cell tl-orange"></div><div className="timeline-cell tl-orange-soft"></div><div className="timeline-cell tl-orange-fade"></div><div className="timeline-cell tl-amber"></div><div className="timeline-cell tl-blue"></div></div>
            <div className="timeline-row"><div className="timeline-label">05 · Database &amp; Newsletter</div><div className="timeline-cell"></div><div className="timeline-cell tl-orange-fade"></div><div className="timeline-cell tl-orange-soft"></div><div className="timeline-cell tl-orange"></div><div className="timeline-cell tl-orange"></div><div className="timeline-cell tl-orange"></div><div className="timeline-cell tl-amber"></div><div className="timeline-cell tl-green"></div><div className="timeline-cell tl-blue"></div><div className="timeline-cell"></div></div>
            <div className="timeline-row"><div className="timeline-label">06 · Reporting &amp;&nbsp;&nbsp;&nbsp;Dashboards</div><div className="timeline-cell"></div><div className="timeline-cell"></div><div className="timeline-cell"></div><div className="timeline-cell"></div><div className="timeline-cell"></div><div className="timeline-cell tl-orange"></div><div className="timeline-cell"></div><div className="timeline-cell tl-orange"></div><div className="timeline-cell tl-orange"></div><div className="timeline-cell tl-blue"></div></div>
            <div className="timeline-row"><div className="timeline-label addon-label">07 · Sales Enablement <span className="tl-addon-tag">Add-on</span></div><div className="timeline-cell"></div><div className="timeline-cell"></div><div className="timeline-cell tl-lavender-faded"></div><div className="timeline-cell tl-lavender-soft"></div><div className="timeline-cell tl-lavender"></div><div className="timeline-cell tl-lavender"></div><div className="timeline-cell tl-lavender"></div><div className="timeline-cell tl-lavender-soft"></div><div className="timeline-cell"></div><div className="timeline-cell"></div></div>
            <div className="timeline-row"><div className="timeline-label addon-label">08 · SEO &amp; AEO <span className="tl-addon-tag">Add-on</span></div><div className="timeline-cell"></div><div className="timeline-cell"></div><div className="timeline-cell"></div><div className="timeline-cell tl-lavender-faded"></div><div className="timeline-cell tl-lavender-soft"></div><div className="timeline-cell tl-lavender"></div><div className="timeline-cell tl-lavender"></div><div className="timeline-cell tl-lavender-soft"></div><div className="timeline-cell tl-lavender-soft"></div><div className="timeline-cell tl-lavender-faded"></div></div>
          </div>
          <div className="timeline-legend">
            <div className="legend-item"><div className="legend-swatch tl-orange"></div>Active build, strategy, copy, config</div>
            <div className="legend-item"><div className="legend-swatch tl-amber"></div>SOP &amp; documentation build</div>
            <div className="legend-item"><div className="legend-swatch tl-green"></div>Live &amp; testing</div>
            <div className="legend-item"><div className="legend-swatch tl-blue"></div>Handover, training &amp; walkthrough</div>
            <div className="legend-item"><div className="legend-swatch tl-lavender"></div>Add-on stream</div>
            <div className="legend-item"><div className="legend-swatch" style={{ background: "rgba(18,16,15,0.04)" }}></div>Not active this week</div>
          </div>
        </div>
      </section>

      {/* BUCKETS OVERVIEW */}
      <section className="buckets-overview" id="engagement">
        <div className="section-inner fade-in">
          <div className="eyebrow eyebrow-light">The engagement</div>
          <h2 className="h-light">Six work streams,<br /><em>one system.</em></h2>
          <p className="lead lead-light">Each bucket is a standalone deliverable that connects to every other. The ICP work feeds the outbound copy feeds the LinkedIn strategy feeds the lead scoring feeds the reporting. Nothing is built in isolation. Each stream is detailed in full in the Deliverables tab.</p>
          <div className="multi-product-note">
            <div className="multi-product-label">How we handle multiple product lines</div>
            <div className="multi-product-body">Chubb leads. It has the highest-value deals, the strongest proof points, and the clearest ICP, so that's where we validate the full GTM system first. Reach sequences and content come in from Week 6 once the foundation (ICP, scoring, CRM, domains) is working. DigitalOnboarding and Platform get documented in the ICP work but aren't in active outbound during this engagement. The system is built so they can be switched on post-handover without rebuilding anything.</div>
          </div>
          <ul className="buckets-list">
            <li className="buckets-list-item outbound"><span className="bl-outbound">Outbound Only</span><span className="bl-num">01</span><span className="bl-phase">Wks 1–4</span><span className="bl-title">ICP, Data &amp; CRM Foundation</span><span className="bl-line">Documented ICP starting with Chubb (primary GTM product). Reach, DigitalOnboarding, and Platform ICPs are built out as the Chubb foundation is validated. Each product line gets its own persona map, pain-point mapping, and target account criteria. Verified 300–600 account target list, VTiger restructured, GA4 + GSC set up, DPDP-compliant from day one.</span></li>
            <li className="buckets-list-item outbound"><span className="bl-outbound">Outbound Only</span><span className="bl-num">02</span><span className="bl-phase">Wks 1–7</span><span className="bl-title">Three-Tier Outbound &amp; Nurture</span><span className="bl-line">Cold mass, intent-triggered, and database reactivation sequences, three motions on one infrastructure, with domain warmup and automated reply handling. Sequences are written per product line. Chubb launches first (Weeks 4–5), with Reach sequences built in parallel and deployed from Week 6. Messaging, proof points, and angles are specific to each product's ICP, not shared across lines. Sequences are regionalised. India is priority, but outbound covers NA, UK, Middle East, and Africa. Each region gets its own communication style and compliance considerations baked into the personalisation engine, not just translated templates.</span></li>
            <li className="buckets-list-item"><span className="bl-num">03</span><span className="bl-phase">Wks 2–4</span><span className="bl-title">Inbound Capture, Lead Scoring &amp; Sales SLA</span><span className="bl-line">Apollo de-anonymisation live, weighted lead scoring in VTiger, every form fill enriched and routed in minutes, hot lead alerts with response SLA tracking.</span></li>
            <li className="buckets-list-item"><span className="bl-num">04</span><span className="bl-phase">Wks 3–6</span><span className="bl-title">LinkedIn GTM Engine</span><span className="bl-line">10-week content calendar at 3×/week, executive ghostwriting framework for Anisha and Philips, Sales Navigator configured and tied into lead scoring via N8N. Content mix is Chubb-heavy in Weeks 3–6 to align with outbound launch, then rotates in Reach and broader platform content from Week 6 onward.</span></li>
            <li className="buckets-list-item"><span className="bl-num">05</span><span className="bl-phase">Wks 2–8</span><span className="bl-title">Newsletter &amp; Database Reactivation</span><span className="bl-line">200 dormant MQLs, dead BD lists, and webinar attendees, segmented, scored, and reactivated. Newsletter rebuilt with persona-based streams feeding lead scoring.</span></li>
            <li className="buckets-list-item"><span className="bl-num">06</span><span className="bl-phase">Wks 8–10</span><span className="bl-title">Reporting, Attribution &amp; Dashboards</span><span className="bl-line">Unified dashboard with multi-touch attribution, mid-engagement review at Week 6, full SOP library, live walkthrough handover, and 2-week post-handover check-in.</span></li>
            <li className="buckets-list-item addon"><span className="bl-addon">Add-on</span><span className="bl-num">07</span><span className="bl-phase">Wks 3–8</span><span className="bl-title">Sales Enablement</span><span className="bl-line">Persona one-pagers, competitor battle cards, cold call scripts for the junior sales team, and post-handoff email templates.</span></li>
            <li className="buckets-list-item addon"><span className="bl-addon">Add-on</span><span className="bl-num">08</span><span className="bl-phase">Wks 4–10</span><span className="bl-title">SEO &amp; AEO Foundation</span><span className="bl-line">Technical SEO audit, 15–20 keyword strategy, AEO/GEO brief so ChatGPT and Perplexity surface In10s, 4–6 published articles, pillar architecture mapped.</span></li>
          </ul>
        </div>
      </section>

      {/* KPIs */}
      <section className="kpi-section" id="kpis">
        <div className="kpi-inner fade-in">
          <div className="eyebrow eyebrow-light">Success Metrics</div>
          <h2 className="h-light">What "it worked" looks like<br />at <em>Week 10</em>.</h2>
          <p className="lead lead-light">These are the metrics that tell us, and you, whether the engine is running. Targets are calibrated against the diagnosis baselines and industry benchmarks for B2B enterprise software in BFSI.</p>
          <button className={`section-toggle section-toggle-light${openKpis ? " open" : ""}`} onClick={() => setOpenKpis(o => !o)}>
            <span>{openKpis ? "Collapse" : "Expand"}</span>
            <span className="toggle-chevron">↓</span>
          </button>
          <div className={`collapsible-body${openKpis ? " open" : ""}`}><div>
          <div className="kpi-key">
            <div className="kpi-key-item"><span className="kpi-tag kpi-tag-committed">Committed</span><span>We build it, we own the number.</span></div>
            <div className="kpi-key-item"><span className="kpi-tag kpi-tag-influenced">Influenced</span><span>We build the system, but the outcome depends on sales follow-through or factors outside the engagement.</span></div>
            <div className="kpi-key-item"><span className="kpi-tag kpi-tag-tracked">Tracked</span><span>We set up the tracking and report on it weekly.</span></div>
          </div>
          <div className="kpi-grid">
            <div className="kpi-card"><div className="kpi-card-header"><div className="kpi-channel">Inbound &amp; Scoring</div><div className="kpi-channel-tag">Bucket 03</div></div><ul className="kpi-list"><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Time from form fill to enriched profile</div><div className="kpi-target">&lt; 5 minutes</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Hot lead alert SLA compliance</div><div className="kpi-target">90%+ within 2 hrs</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-influenced">Influenced</span>MQL → first call conversion</div><div className="kpi-target">25–35% (from 7%)</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Visitor de-anonymisation rate</div><div className="kpi-target">25–30% of ICP traffic</div></li></ul></div>
            <div className="kpi-card"><div className="kpi-card-header"><div className="kpi-channel">LinkedIn Engine</div><div className="kpi-channel-tag">Bucket 04</div></div><ul className="kpi-list"><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Posts published vs. plan</div><div className="kpi-target">100% (30+ posts)</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Executive page activated &amp; posting</div><div className="kpi-target">Yes · 4–6 drafts live</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>ICP-account engagement events captured</div><div className="kpi-target">All routed to scoring</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-influenced">Influenced</span>Sales Navigator connection acceptance</div><div className="kpi-target">30%+ ICP rate</div></li></ul></div>
            <div className="kpi-card"><div className="kpi-card-header"><div className="kpi-channel">Reporting &amp; Attribution</div><div className="kpi-channel-tag">Bucket 06</div></div><ul className="kpi-list"><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Unified dashboard live &amp; auto-updating</div><div className="kpi-target">Yes · Week 8</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Multi-touch attribution coverage</div><div className="kpi-target">100% of channels</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Closed-loop reporting on MQLs</div><div className="kpi-target">Live by Week 9</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>SOPs covering every workflow</div><div className="kpi-target">100% documented</div></li></ul></div>
            <div className="kpi-card"><div className="kpi-card-header"><div className="kpi-channel">Database &amp; Newsletter</div><div className="kpi-channel-tag">Bucket 05</div></div><ul className="kpi-list"><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Dormant contact reactivation reply rate</div><div className="kpi-target">15–20%</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-influenced">Influenced</span>Newsletter open rate (post-restructure)</div><div className="kpi-target">30%+ baseline</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Newsletter engagement → score events</div><div className="kpi-target">All tracked &amp; routed</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Database segments built &amp; tagged</div><div className="kpi-target">5+ usable segments</div></li></ul></div>
            <div className="kpi-card"><div className="kpi-card-header"><div className="kpi-channel">Outbound Engine</div><div className="kpi-channel-tag">Bucket 02</div></div><ul className="kpi-list"><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Domain reputation post-warmup</div><div className="kpi-target">95%+ healthy</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Cold sequence reply rate (Tier 1)</div><div className="kpi-target">2–4%</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Intent-triggered reply rate (Tier 2)</div><div className="kpi-target">8–10%</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Qualified replies surfaced as hot leads</div><div className="kpi-target">30–40% of all replies</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-tracked">Tracked</span>Immediate response calls (sales within 15 min of positive reply)</div><div className="kpi-target">Weekly · Wk 5+</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-tracked">Tracked</span>Formal intro/discovery calls booked from those responses</div><div className="kpi-target">Weekly · Wk 5+</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-tracked">Tracked</span>Reply to call booked conversion rate</div><div className="kpi-target">Weekly · Wk 5+</div></li></ul></div>
            <div className="kpi-card"><div className="kpi-card-header"><div className="kpi-channel">Pipeline-Level</div><div className="kpi-channel-tag">End-to-End</div></div><ul className="kpi-list"><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-influenced">Influenced</span>New qualified opportunities surfaced</div><div className="kpi-target">25–40 across all product lines, weighted toward Chubb. Exact split depends on ICP validation in Weeks 1–4.</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Sales-marketing SLA framework live</div><div className="kpi-target">Yes · Week 4</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>Mohanty operating system independently</div><div className="kpi-target">By Week 10 handover</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-committed">Committed</span>2-week post-handover check-in completed</div><div className="kpi-target">Yes · Week 12</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-tracked">Tracked</span>Intro/discovery calls booked (all channels)</div><div className="kpi-target">Weekly · Wk 5+</div></li><li className="kpi-item"><div className="kpi-metric"><span className="kpi-tag kpi-tag-tracked">Tracked</span>Reply to call booked conversion rate</div><div className="kpi-target">Weekly · Wk 5+</div></li></ul></div>
          </div>
          <div className="kpi-notes">
            <div className="kpi-note">
              <div className="kpi-note-label">On calls booked from outbound</div>
              <div className="kpi-note-body">If someone replies saying they're interested, a call should get booked. Our system captures that reply instantly, enriches the lead, and alerts sales with full context and a response SLA. Whether the call actually gets scheduled depends on sales follow-up. We track and report on the reply-to-call conversion weekly from Week 5. If that number is low, we flag it, because it points to a sales process gap, not a system gap. Directional expectation: 15–25 intro calls booked from outbound by Week 10, assuming consistent follow-through on the sales side.</div>
            </div>
            <div className="kpi-note">
              <div className="kpi-note-label">On MQL to first call</div>
              <div className="kpi-note-body">MQL to first call is tagged as influenced, not committed, because we build the system that enriches, scores, alerts, and tracks response time. The jump from 7% to 25–35% is realistic because the bottleneck right now is a 2–3 month follow-up gap that automation eliminates. But someone still has to pick up the phone.</div>
            </div>
          </div>
          <div className="kpi-split-note">
            <div className="kpi-split-label">What the split looks like</div>
            <div className="kpi-split-body">
              <div className="kpi-split-col"><strong>60% — Systems that didn't exist before.</strong> ICP documentation, CRM restructuring, lead scoring, attribution, reporting, SOPs. This work doesn't produce calls in Week 3. It produces the system that generates and converts pipeline for the next 12–24 months.</div>
              <div className="kpi-split-col"><strong>40% — Live campaign work.</strong> Outbound sequences, LinkedIn content, database reactivation, newsletter restructuring. These produce measurable output within the engagement window, but they're running on a system that's being built at the same time.</div>
            </div>
            <div className="kpi-split-footer"><strong>Both are necessary.</strong> Systems without campaigns means nothing goes live. Campaigns without systems means you're back to the same disconnected, untracked situation that produced 0.5% end-to-end conversion.</div>
          </div>
          </div></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="about-inner fade-in">
          <div className="about-grid">
            <div className="about-label">Who's<br />building this</div>
            <div className="about-body">
              <p>That Works Co. is a B2B GTM and marketing infrastructure consultancy for Series A–B founders and CMOs, operated by <strong>Shrishti Yogaraj</strong>, with eight years of experience in RevOps, GTM, and marketing systems work.</p>
              <p>The work is end-to-end: <em>inbound, outbound, brand, RevOps, attribution</em>, all built around a defined handover model so clients own the system at the end of every engagement, not a dependency on the consultant.</p>
              <p>The benchmarks below are drawn from current and recent engagements. The cold reply rate target in this proposal is set at 2-4% to account for a new sending infrastructure warming from zero; these numbers reflect performance once infrastructure is warm.</p>
              <div className="about-stats">
                <div><div className="about-stat-num">25%</div><div className="about-stat-label">Form-fill to first call conversion</div></div>
                <div><div className="about-stat-num">13–15%</div><div className="about-stat-label">Reply rate on de-anonymised outbound</div></div>
                <div><div className="about-stat-num">6–7%</div><div className="about-stat-label">Reply rate on cold mass outbound</div></div>
                <div><div className="about-stat-num">10%</div><div className="about-stat-label">End-to-end form-fill to client conversion</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="close-section" id="close">
        <div className="close-inner fade-in">
          <div className="close-eyebrow">The next step</div>
          <h1 className="close-title">Let's build<br />the <em>engine</em>.</h1>
          <p className="close-sub">The next steps are simple. We confirm scope, lock dates, and start Week 1 with a clean kickoff.</p>
          <div className="close-steps">
            <div className="close-step"><div className="close-step-num">01</div><div className="close-step-text"><strong>30-minute scope call</strong> with Mohanty to confirm scope, lock add-ons, and resolve any open questions.</div></div>
            <div className="close-step"><div className="close-step-num">02</div><div className="close-step-text"><strong>Kickoff Week 1</strong> with stakeholder interviews, ICP work begins, domain warmup starts Day 1.</div></div>
          </div>
          <div className="close-contact">
            <div className="ltc-item-v2"><div className="ltc-label-v2">Email</div><div className="ltc-value-v2">shrishti@thatworksco.com</div></div>
            <div className="ltc-item-v2"><div className="ltc-label-v2">Website</div><div className="ltc-value-v2">thatworksco.com</div></div>
          </div>
        </div>
      </section>

      </>}

      {/* ── DELIVERABLES ── */}
      {activePage === 'deliverables' && <>

      {/* DELIVERABLES INTRO */}
      <section className="deliverables-intro">
        <div className="cover-header-row">
          <img src="/logo.svg" alt="That Works" className="cover-logo" height="65" />
          <div className="doc-label">GTM Proposal · Confidential</div>
        </div>
        <div className="deliverables-intro-inner fade-in">
          <div className="eyebrow eyebrow-light">The Deliverables</div>
          <h2 className="h-light">Eight work streams.<br /><em>Every deliverable, in full.</em></h2>
          <p className="lead lead-light">Select a stream below to see exactly what gets built, how it gets built, and the process behind it.</p>
        </div>
      </section>

      {/* BUCKET TAB SWITCHER */}
      <section id="buckets">
        <div className="bucket-tabs-bar">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`bucket-tab${activeTab === i ? " active" : ""}${tab.addon ? " addon" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              <span className="bt-num">{tab.num}</span>
              <span className="bt-label">{tab.label}</span>
              <span className="bt-phase">{tab.phase}</span>
              {tab.outbound && <span className="bt-tag bt-tag-outbound">Outbound Only</span>}
              {tab.addon && <span className="bt-tag bt-tag-addon">Add-on</span>}
            </button>
          ))}
        </div>
        <div className={`bucket-detail ${isDark ? "dark" : "light"}`}>
          <div className="bucket-detail-inner" key={activeTab}>
            {buckets[activeTab]}
          </div>
        </div>
      </section>

      </>}

      {/* ── FINE PRINT ── */}
      {activePage === 'fineprint' && <>

      {/* FINE PRINT INTRO */}
      <section className="fineprint-intro">
        <div className="cover-header-row">
          <img src="/logo.svg" alt="That Works" className="cover-logo" height="65" />
          <div className="doc-label">GTM Proposal · Confidential</div>
        </div>
        <div className="section-inner fade-in">
          <div className="eyebrow eyebrow-light">Fine Print</div>
          <h2 className="h-light">The details that matter<br />before you <em>sign</em>.</h2>
        </div>
      </section>

      {/* RISKS */}
      <section className="risks-section" id="risks">
        <div className="risks-inner fade-in">
          <div className="eyebrow">Risks &amp; Mitigations</div>
          <h2>What could go <em>wrong</em>.<br />And what we'll do about it.</h2>
          <p className="lead">Every engagement of this scope has real risks. These are the four most likely friction points and how we've planned around each one.</p>
          <button className={`section-toggle${openRisks ? " open" : ""}`} onClick={() => setOpenRisks(o => !o)}>
            <span>{openRisks ? "Collapse" : "Expand"}</span>
            <span className="toggle-chevron">↓</span>
          </button>
          <div className={`collapsible-body${openRisks ? " open" : ""}`}><div>
          <div className="risks-list">
            <div className="risk-row"><div><div className="risk-side-label risk">The Risk</div><div className="risk-text">Domain warmup runs longer than expected.</div><div className="risk-detail">New domains can take 6+ weeks to reach full deliverability if ISPs are slow to trust the IP. This would push outbound live dates back.</div></div><div><div className="risk-side-label mitigation">The Mitigation</div><div className="risk-text">Warmup starts Day 1, runs in parallel.</div><div className="risk-detail">By starting warmup before any other work begins, we have a 6-week buffer before sequences need to send. <strong>If warmup runs long, the rest of the engagement is unaffected</strong>. We also set up 2–3 domains in parallel, if one underperforms, the others compensate.</div></div></div>
            <div className="risk-row"><div><div className="risk-side-label risk">The Risk</div><div className="risk-text">VTiger limitations block automation.</div><div className="risk-detail">VTiger is older than modern CRMs and may have integration ceilings. Some N8N workflows may need workarounds.</div></div><div><div className="risk-side-label mitigation">The Mitigation</div><div className="risk-text">Architecture in N8N, not VTiger.</div><div className="risk-detail">All automation logic lives in N8N. VTiger is the system of record, not the brain. <strong>If VTiger limits hit, we route through N8N instead</strong>, Mohanty's team still gets the same outcomes, the same dashboards, the same alerts.</div></div></div>
            <div className="risk-row"><div><div className="risk-side-label risk">The Risk</div><div className="risk-text">Stakeholder bandwidth crunches the build.</div><div className="risk-detail">Mohanty is running a 3-person team while supporting this build. Philips's availability for ICP interviews is limited.</div></div><div><div className="risk-side-label mitigation">The Mitigation</div><div className="risk-text">Async-first, focused-touchpoint design.</div><div className="risk-detail">Most input is captured asynchronously: written briefs, recorded Loom walkthroughs, async review on shared docs. <strong>Live time with Mohanty and Philips is reserved for high-leverage decisions only</strong>, typically 1 hour per week with Mohanty, 1 hour total with Philips for the ICP interview.</div></div></div>
            <div className="risk-row"><div><div className="risk-side-label risk">The Risk</div><div className="risk-text">DPDP regulatory updates land mid-engagement.</div><div className="risk-detail">DPDP rules are still evolving. Mid-engagement updates to enforcement timing or scope could shift the narrative.</div></div><div><div className="risk-side-label mitigation">The Mitigation</div><div className="risk-text">Modular content, decoupled from specifics.</div><div className="risk-detail">DPDP-themed content is built as <strong>modular blocks that can be updated quickly</strong> if rules shift. The core positioning ("you have a deadline, In10s is the answer") doesn't change with timeline updates, only the specifics do, and those are easy to refresh.</div></div></div>
          </div>
          </div></div>
        </div>
      </section>

      {/* POST-ENGAGEMENT */}
      <section className="post-engagement" id="post">
        <div className="post-inner fade-in">
          <div className="eyebrow eyebrow-light">After the engagement</div>
          <h2 className="h-light">What's possible<br />once the engine is <em>running</em>.</h2>
          <p className="lead lead-light">Week 10 is a handover, not a finish line. These are the natural Phase 2 conversations available when In10s is ready for them. None are required. All are available.</p>
          <button className={`section-toggle section-toggle-light${openPost ? " open" : ""}`} onClick={() => setOpenPost(o => !o)}>
            <span>{openPost ? "Collapse" : "Expand"}</span>
            <span className="toggle-chevron">↓</span>
          </button>
          <div className={`collapsible-body${openPost ? " open" : ""}`}><div>
          <div className="post-grid">
            <div className="post-card"><div className="post-num">01</div><div className="post-eyebrow">Optimisation Retainer</div><div className="post-title">Ongoing performance tuning.</div><div className="post-body">Monthly review and iteration on sequence copy, lead scoring weights, content calendar performance. <strong>The engine keeps getting sharper</strong> instead of slowly drifting after handover.</div></div>
            <div className="post-card"><div className="post-num">02</div><div className="post-eyebrow">Content Production</div><div className="post-title">Sustained output Mohanty's team can't.</div><div className="post-body">Monthly blog articles, LinkedIn ghostwriting beyond the framework, AEO-optimised cornerstone pieces. <strong>3–4 articles per month</strong> is a pace Mohanty's 3-person team realistically can't sustain alongside their day jobs.</div></div>
            <div className="post-card"><div className="post-num">03</div><div className="post-eyebrow">US Market Activation</div><div className="post-title">The geo currently on the back burner.</div><div className="post-body">When US becomes a priority again, the same engine extends with US-specific ICP, sequences, and content. <strong>Most of the foundation is reusable</strong>, domain warmup, scoring model, attribution stack.</div></div>
            <div className="post-card"><div className="post-num">04</div><div className="post-eyebrow">Talent-as-a-Service GTM</div><div className="post-title">A different motion, a different ICP.</div><div className="post-body">TaaS is becoming a major revenue source. The buyer is different from CCM and the motion is different. <strong>A dedicated TaaS GTM build</strong> reuses the infrastructure but layers in a new ICP, new sequences, new positioning.</div></div>
            <div className="post-card"><div className="post-num">05</div><div className="post-eyebrow">ABM Tier Activation</div><div className="post-title">Top 50 accounts, 1:1 motion.</div><div className="post-body">For HDFC, Axis, SBI, Vodafone-tier accounts, scaled outbound is the wrong tactic. A dedicated ABM motion uses Clay-powered deep research, multi-stakeholder mapping, and orchestrated multi-channel touches per account. <strong>Higher cost per touch, dramatically higher conversion.</strong></div></div>
            <div className="post-card"><div className="post-num">06</div><div className="post-eyebrow">Marketing Hire Onboarding</div><div className="post-title">When Mohanty hires her next person.</div><div className="post-body">When Mohanty's team grows, the SOPs and dashboards are already built for them to step into. <strong>Optional onboarding support</strong> available to walk a new hire through the engine quickly so they're productive in days, not months.</div></div>
          </div>
          </div></div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="tech-stack" id="stack">
        <div className="tech-inner fade-in">
          <div className="eyebrow">The Tech Stack</div>
          <h2>What we use.<br />What you already <em>own</em>.</h2>
          <p className="lead">No new subscriptions for In10s to manage. The engagement runs almost entirely on infrastructure already in your stack, Apollo, VTiger, UniServe Reach, your N8N instance, GA4, GSC, LinkedIn. The only tools we bring are ones we cover ourselves.</p>
          <button className={`section-toggle${openStack ? " open" : ""}`} onClick={() => setOpenStack(o => !o)}>
            <span>{openStack ? "Collapse" : "Expand"}</span>
            <span className="toggle-chevron">↓</span>
          </button>
          <div className={`collapsible-body${openStack ? " open" : ""}`}><div>
          <div className="tech-columns">
            <div className="tech-col existing"><div className="tech-col-eyebrow">Already Yours</div><div className="tech-col-title">In your stack, we activate it.</div><ul className="tech-tools"><li className="tech-tool"><div className="tech-tool-name">Apollo</div><div className="tech-tool-purpose">Currently used at 5% of capacity. Activated for sequencing, filter automation, visitor de-anonymisation, AI enrichment.</div></li><li className="tech-tool"><div className="tech-tool-name">VTiger CRM</div><div className="tech-tool-purpose">Restructured: pipeline stages, scoring model, properties standardised, automation hooks.</div></li><li className="tech-tool"><div className="tech-tool-name">UniServe Reach</div><div className="tech-tool-purpose">Your platform handles all email delivery, newsletter, outbound, nurture sequences. Integrated with N8N for orchestration.</div></li><li className="tech-tool"><div className="tech-tool-name">N8N (your instance)</div><div className="tech-tool-purpose">All automation logic lives here. We build workflows, you own the instance.</div></li><li className="tech-tool"><div className="tech-tool-name">GA4 + Google Search Console</div><div className="tech-tool-purpose">Properly configured event tracking, baseline rankings documented, integrated into the unified dashboard.</div></li><li className="tech-tool"><div className="tech-tool-name">LinkedIn (organic + Sales Nav)</div><div className="tech-tool-purpose">Sales Navigator configured with ICP filters; engagement events fed into N8N → VTiger.</div></li></ul></div>
            <div className="tech-col bring"><div className="tech-col-eyebrow">We Bring</div><div className="tech-col-title">Covered as part of the engagement.</div><ul className="tech-tools"><li className="tech-tool"><div className="tech-tool-name">Sending Domains (2–3)</div><div className="tech-tool-purpose">Registered, configured, and warmed up by us. Separate from in10stech.com to protect primary domain reputation.</div></li><li className="tech-tool"><div className="tech-tool-name">Domain Warmup Service</div><div className="tech-tool-purpose">Handled in-house over 4–6 weeks. No subscription cost passed to In10s.</div></li><li className="tech-tool"><div className="tech-tool-name">Workflow Architecture</div><div className="tech-tool-purpose">All N8N workflows, integrations, and orchestration logic, designed, built, documented, and handed over.</div></li><li className="tech-tool"><div className="tech-tool-name">Reporting Dashboard</div><div className="tech-tool-purpose">Built in tools you already have access to. No new subscription.</div></li></ul></div>
            <div className="tech-col optional"><div className="tech-col-eyebrow">Optional · Phase 2</div><div className="tech-col-title">Available when you're ready.</div><ul className="tech-tools"><li className="tech-tool"><div className="tech-tool-name">Clay (for ABM tier)</div><div className="tech-tool-purpose">Deep research and 1:1 personalisation for the top 50 enterprise accounts.</div></li><li className="tech-tool"><div className="tech-tool-name">Modern CRM (HubSpot / Salesforce)</div><div className="tech-tool-purpose">Only if VTiger limits become genuine blockers. Current architecture means most workarounds happen in N8N.</div></li><li className="tech-tool"><div className="tech-tool-name">AEO Tracking Tool</div><div className="tech-tool-purpose">Searchable, Profound, or similar, for tracking citation share across ChatGPT, Perplexity, etc.</div></li></ul></div>
          </div>
          <div className="tech-note"><div className="tech-note-label">A note on tooling</div><div className="tech-note-body"><strong>Everything we use is either already in your stack or covered by us.</strong> If the optional Phase 2 tools become useful, they're priced and discussed openly when the time comes, not bundled invisibly.</div></div>
          </div></div>
        </div>
      </section>

      {/* PAYMENT TERMS */}
      <section className="payment-section">
        <div className="payment-inner fade-in">
          <div className="eyebrow eyebrow-light">Payment Terms</div>
          <h2 className="h-light">Milestone-based.<br /><em>No surprises.</em></h2>
          <div className="payment-steps">
            <div className="payment-step">
              <div className="payment-pct">25%</div>
              <div><div className="payment-milestone">On contract signing</div><div className="payment-desc">Engagement confirmed, Week 1 kick-off scheduled, domain warmup begins.</div></div>
            </div>
            <div className="payment-step">
              <div className="payment-pct">50%</div>
              <div><div className="payment-milestone">Week 5 mid-engagement review</div><div className="payment-desc">Outbound live, inbound scoring running, LinkedIn calendar active.</div></div>
            </div>
            <div className="payment-step">
              <div className="payment-pct">25%</div>
              <div><div className="payment-milestone">Week 10 final handover</div><div className="payment-desc">All SOPs delivered, dashboard live, full team walkthrough complete.</div></div>
            </div>
          </div>
        </div>
      </section>

      </>}

      {/* FOOTER */}
      <footer className="proposal-footer">
        <img src="/logo.svg" alt="That Works Co." className="footer-logo" height="81" />
        <div className="footer-links">
          <a href="https://thatworksco.com" target="_blank" rel="noreferrer" className="footer-link">Visit our website</a>
          <span className="footer-sep">|</span>
          <a href="https://thatworksco.com/blog" target="_blank" rel="noreferrer" className="footer-link">Check out our blog</a>
        </div>
        <div className="footer-meta">In10s × That Works Co · GTM Proposal · Confidential</div>
      </footer>

    </div>
  );
};

export default In10s;
