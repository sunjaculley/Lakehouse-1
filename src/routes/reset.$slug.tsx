import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/SiteShell";
import { resetBySlug, resetGuides } from "@/content";
import { Gallery } from "@/components/Gallery";
import { Editable } from "@/components/Editable";
import { galleryFor } from "@/content/galleries";


export const Route = createFileRoute("/reset/$slug")({
  loader: ({ params }) => {
    const guide = resetBySlug(params.slug);
    if (!guide) throw notFound();
    return guide;
  },
  head: ({ loaderData }) => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: `${loaderData?.title ?? "Reset"} — Ignition at Lakehouse` },
      { name: "description", content: loaderData?.goal ?? "Space reset checklist." },
      { property: "og:title", content: `${loaderData?.title ?? "Reset"} — Ignition at Lakehouse` },
      { property: "og:description", content: loaderData?.goal ?? "Space reset checklist." },
    ],
  }),
  errorComponent: () => (
    <SiteShell>
      <p className="prose">That checklist could not be loaded.</p>
    </SiteShell>
  ),
  notFoundComponent: () => (
    <SiteShell>
      <p className="prose">That reset guide does not exist.</p>
    </SiteShell>
  ),
  component: ResetPage,
});

function ResetPage() {
  const guide = Route.useLoaderData();
  const [done, setDone] = useState<Record<string, boolean>>({});
  const base = `reset/${guide.slug}`;

  const all = guide.groups.flatMap((g, gi) => g.items.map((_, i) => `${gi}-${i}`));
  const complete = all.filter((k) => done[k]).length;

  return (
    <SiteShell area="reset">
      <div className="reset">
        <div className="reset__tabs">
          {resetGuides.map((g) => (
            <Link
              key={g.slug}
              to="/reset/$slug"
              params={{ slug: g.slug }}
              className="reset__tab"
              activeProps={{ className: "reset__tab reset__tab--active" }}
            >
              {g.title}
            </Link>
          ))}
        </div>

        <h1 className="doc__title">
          <Editable id={`${base}:title`} text={guide.title} />
        </h1>
        <p className="doc__intro">
          <Editable id={`${base}:goal`} text={guide.goal} />
        </p>

        <div className="reset__progress">
          <span>
            {complete} of {all.length} done
          </span>
          <button type="button" className="btn btn--ghost" onClick={() => setDone({})}>
            Start over
          </button>
        </div>

        {guide.groups.map((group, gi) => (
          <section key={group.title} className="reset__group">
            <h2>
              <Editable id={`${base}:g${gi}:title`} text={group.title} />
            </h2>
            <ul className="reset__list">
              {group.items.map((item, i) => {
                const key = `${gi}-${i}`;
                return (
                  <li key={key}>
                    <label className={done[key] ? "check check--done" : "check"}>
                      <input
                        type="checkbox"
                        checked={!!done[key]}
                        onChange={(e) => setDone((d) => ({ ...d, [key]: e.target.checked }))}
                      />
                      <Editable id={`${base}:g${gi}:i${i}`} text={item} />
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}

        <section className="reset__group">
          <h2>What good looks like</h2>
          <Gallery
            photos={galleryFor(`reset:${guide.slug}`, guide.code ?? "")}
            galleryKey={`${base}#photos`}
          />
        </section>

        <p className="source">Source: {guide.source}</p>
        {guide.code ? <p className="doc__refline">Reference: {guide.code}</p> : null}
      </div>
    </SiteShell>
  );
}

