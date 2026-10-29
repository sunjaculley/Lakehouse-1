import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/design-system/ad-blue-thunder-38f574";
import { SiteShell } from "@/components/SiteShell";
import { Blocks } from "@/components/Blocks";
import { quickLinks, search } from "@/content";

export const Route = createFileRoute("/ask")({
  validateSearch: (s: Record<string, unknown>) => ({ q: typeof s.q === "string" ? s.q : "" }),
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Quick search — Ignition at Lakehouse" },
      {
        name: "description",
        content: "Search the Ignition Lakehouse guides and jump straight to the page you need.",
      },
      { property: "og:title", content: "Quick search — Ignition at Lakehouse" },

      {
        property: "og:description",
        content: "Type a question and get the answer from the Ignition Lakehouse guides.",
      },
    ],
  }),
  component: Ask,
});

function Ask() {
  const { q } = Route.useSearch();
  const navigate = useNavigate();
  const [draft, setDraft] = useState(q);
  const results = q ? search(q) : [];

  return (
    <SiteShell area="ask">
      <div className="ask">
        <h1 className="doc__title">Quick search</h1>
        <form
          className="ask-bar"
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/ask", search: { q: draft.trim() } });
          }}
        >
          <input
            className="ask-bar__input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="e.g. What colour lanyard do clients get?"
            aria-label="Quick search"
          />
          <Button variant="primary" label="Search" type="submit" />

        </form>

        {!q ? (
          <div className="chips">
            {quickLinks.map((link) => (
              <Link key={link.href} to={link.href} className="chip">
                {link.label}
              </Link>
            ))}
          </div>
        ) : results.length === 0 ? (
          <p className="note">
            Nothing in the guides matches that. Try different words, or browse the menu above — if
            the answer genuinely is not in the four guides, it needs adding to the source material.
          </p>
        ) : (
          <>
            <p className="ask__count">
              {results.length} passage{results.length === 1 ? "" : "s"} from the guides
            </p>
            {results.map((entry, i) => (
              <article key={entry.href} className={i === 0 ? "answer answer--top" : "answer"}>
                <p className="answer__context">{entry.context}</p>
                <h2>{entry.title}</h2>
                <Blocks blocks={entry.blocks} />
                <div className="answer__foot">
                  <Link to={entry.href} className="btn btn--ghost">
                    Open the full page
                  </Link>
                  <span className="source">Source: {entry.source}</span>
                </div>
              </article>
            ))}
          </>
        )}
      </div>
    </SiteShell>
  );
}
