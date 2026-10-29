import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button, TextField } from "@/design-system/ad-blue-thunder-38f574";
import { SiteShell } from "@/components/SiteShell";
import { openAssistant } from "@/components/AssistantPanel";
import { spacePages, programPages, resetGuides } from "@/content";
import { img } from "@/content/media";
import coverImage from "@/assets/cover.jpg";
import sourceGuide from "@/assets/source/guide-v4.pptx.asset.json";

const spaceThumbs: Record<string, string> = {
  philosophy: "image89",
  "innovation-lab": "image60",
  "living-labs": "image107",
  "story-lab": "image115",
  "immersive-room": "immersive-room",
};

function spacePhoto(slug: string): string {
  return img(spaceThumbs[slug] ?? "");
}

const ROOM_SLUGS = ["innovation-lab", "living-labs", "story-lab", "immersive-room"];
const roomPages = spacePages.filter((p) => ROOM_SLUGS.includes(p.slug));
const guidePages = spacePages.filter((p) => !ROOM_SLUGS.includes(p.slug));

const tourStrip = [
  { file: "tour-the-landing-aerial", caption: "The Landing" },
  { file: "tour-lobby-main", caption: "Lobby" },
  { file: "tour-exchange-main", caption: "The Exchange" },
  { file: "tour-blend-lounge", caption: "Blend" },
  { file: "tour-stretch-entrance", caption: "Stretch" },
  { file: "tour-guest-room", caption: "Guest rooms" },
];

export const Route = createFileRoute("/delivery")({
  head: () => ({
    meta: [
      { title: "Ignition Delivery Hub — KPMG Lakehouse" },
      {
        name: "description",
        content:
          "Ask a question or browse the Ignition spaces, technology, reset guides and client program logistics at Lakehouse.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Ignition Delivery Hub — KPMG Lakehouse" },
      {
        property: "og:description",
        content: "Ask a question or browse spaces, technology, resets and program logistics.",
      },
    ],
  }),
  component: DeliveryHome,
});

function DeliveryHome() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  return (
    <SiteShell>
      <section className="experience-hero">
        <img
          className="experience-hero__photo"
          src={coverImage}
          alt="Ignition Delivering at Lakehouse — Planning and Experience Resource Guide"
        />
        <div className="experience-hero__shade" aria-hidden="true" />
        <div className="hero__tools">
          <form
            className="ask-bar ask-bar--hero"
            onSubmit={(e) => {
              e.preventDefault();
              if (q.trim()) navigate({ to: "/ask", search: { q: q.trim() } });
            }}
          >
            <TextField label="Quick search" value={q} onChange={setQ} placeholder="Search delivery guides" />
            <Button variant="primary" size="small" label="Search" type="submit" />
          </form>
          <Button variant="secondary" size="small" label="Lakehouse Agent ↗" onClick={openAssistant} />
        </div>
        <div className="experience-container experience-hero__content">
          <span className="hero__kicker">Internal resource hub</span>
          <h1 className="experience-delivery-title">Create an exceptional Lakehouse Experience</h1>
          <p className="experience-delivery-sub">
            A practical, searchable delivery hub for Ignition team members, supporting client
            experiences at Lakehouse.
          </p>

          <a className="hero__source" href={sourceGuide.url} download>
            Download Original Source ↓
          </a>
        </div>
      </section>

      <section className="grid-section area-session">
        <div className="section-head">
          <h2 className="section-title">Running a session</h2>
          <span className="section-head__meta">Logistics, from registration to room setup</span>
        </div>
        <ol className="steplist steplist--cols">
          {programPages.map((page, i) => (
            <li key={page.slug}>
              <Link to="/program/$slug" params={{ slug: page.slug }} className="steplist__row">
                <span className="steplist__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="steplist__text">
                  <strong>{page.title}</strong>
                  <span>{page.intro}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid-section area-spaces">
        <div className="section-head">
          <h2 className="section-title">The spaces</h2>
          <span className="section-head__meta">Rooms, artefacts and the technology inside them</span>
        </div>
        <div className="roomcards">
          {roomPages.map((page) => (
            <Link
              key={page.slug}
              to="/spaces/$slug"
              params={{ slug: page.slug }}
              className={`roomcard roomcard--${page.slug}`}
            >
              <img className="delivery-tile-photo" src={spacePhoto(page.slug)} alt="" loading="lazy" />
              <span className="roomcard__tag">
                {page.status === "awaiting-content" ? "Opens November 2026" : page.title}
              </span>
              <span className="roomcard__body">
                <h3 className="roomcard__title">{page.title}</h3>
                <span className="roomcard__go">Open →</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="guiderows">
          {guidePages.map((page) => (
            <Link
              key={page.slug}
              to="/spaces/$slug"
              params={{ slug: page.slug }}
              className="guiderow"
            >
              <span className="guiderow__label">{page.kicker ?? "Guide"}</span>
              <span className="guiderow__text">
                <strong>{page.title}</strong>
                <span>{page.intro}</span>
              </span>
              <span className="guiderow__go" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="around-lakehouse" className="grid-section area-spaces">
        <div className="section-head">
          <h2 className="section-title">Around Lakehouse</h2>
          <span className="section-head__meta">The campus beyond the Ignition spaces</span>
        </div>
        <div className="photostrip">
          {tourStrip.map((p) => (
            <Link key={p.file} to="/spaces/$slug" params={{ slug: "philosophy" }} hash="lakehouse-layout">
              <figure>
                <img src={img(p.file)} alt={p.caption} loading="lazy" />
                <figcaption>{p.caption}</figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid-section area-reset">
        <div className="section-head">
          <h2 className="section-title">Reset guides</h2>
          <span className="section-head__meta">Leave every room the way you found it</span>
        </div>
        <div className="rowlist">
          {resetGuides.map((guide) => (
            <Link
              key={guide.slug}
              to="/reset/$slug"
              params={{ slug: guide.slug }}
              className="rowlist__row"
            >
              <span className="rowlist__tick" aria-hidden="true" />
              <span className="rowlist__text">
                <strong>{guide.title}</strong>
                <span>{guide.goal}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid-section endcards">
        <Link
          to="/ask"
          search={{ q: "" }}
          className="endcard area-ask"
        >
          <img className="delivery-tile-photo" src={img("tour-blend-lounge")} alt="" loading="lazy" />
          <span className="endcard__eyebrow">Quick search</span>
          <h3>Type a question, get the answer</h3>
          <p>Search every guide at once and jump straight to the section that answers it.</p>
          <span className="endcard__go">Open quick search →</span>

        </Link>
        <Link
          to="/contacts"
          className="endcard area-contacts"
        >
          <img className="delivery-tile-photo" src={img("tour-lobby-main")} alt="" loading="lazy" />
          <span className="endcard__eyebrow">Who to call</span>
          <h3>The right person, first time</h3>
          <p>Technology, AI exhibits, Story Lab, catering and on-site support contacts.</p>
          <span className="endcard__go">See contacts →</span>
        </Link>
      </section>
    </SiteShell>
  );
}
