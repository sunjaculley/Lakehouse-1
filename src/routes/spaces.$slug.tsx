import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Blocks } from "@/components/Blocks";
import { Gallery } from "@/components/Gallery";
import { DocNav } from "@/components/DocNav";
import { Editable } from "@/components/Editable";
import { sectionGallery } from "@/content/galleries";
import { spaceBySlug, spacePages } from "@/content";


export const Route = createFileRoute("/spaces/$slug")({
  loader: ({ params }) => {
    const page = spaceBySlug(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: `${loaderData?.title ?? "Space"} — Ignition Spaces at Lakehouse` },
      { name: "description", content: loaderData?.intro ?? "Ignition space guide." },
      { property: "og:title", content: `${loaderData?.title ?? "Space"} — Ignition at Lakehouse` },
      { property: "og:description", content: loaderData?.intro ?? "Ignition space guide." },
    ],
  }),
  errorComponent: () => (
    <SiteShell>
      <p className="prose">That page could not be loaded. Try the menu above.</p>
    </SiteShell>
  ),
  notFoundComponent: () => (
    <SiteShell>
      <p className="prose">That space does not exist.</p>
    </SiteShell>
  ),
  component: SpacePage,
});

function SpacePage() {
  const page = Route.useLoaderData();
  const base = `spaces/${page.slug}`;

  return (
    <SiteShell area="spaces">
      <div className="doc">
        <aside className="doc__side">
          <DocNav title="The spaces" to="/spaces/$slug" pages={spacePages} currentSlug={page.slug} />
        </aside>

        <article className="doc__body">
          {page.kicker ? <p className="doc__kicker">{page.kicker}</p> : null}
          <h1 className="doc__title">
            <Editable id={`${base}:title`} text={page.title} />
          </h1>
          <p className="doc__intro">
            <Editable id={`${base}:intro`} text={page.intro} />
          </p>
          {page.status === "awaiting-content" ? (
            <p className="note note--warn">
              This room is still being built. The headings below are ready for content once it
              exists.
            </p>
          ) : null}

          {page.sections.map((section, i) => (
            <section key={section.id} id={section.id} className="doc__section">
              <h2 className="doc__section-head">
                <Editable id={`${base}#${section.id}:heading`} text={section.title} />
              </h2>
              {section.summary ? (
                <p className="doc__summary">
                  <Editable id={`${base}#${section.id}:summary`} text={section.summary} />
                </p>
              ) : null}
              <Blocks blocks={section.blocks} baseId={`${base}#${section.id}`} />
              <Gallery
                photos={sectionGallery(page, i)}
                galleryKey={`${base}#${section.id}`}
              />
              <p className="source">Source: {section.source}</p>
            </section>
          ))}

          {page.code ? (
            <p className="doc__refline">
              Reference: {page.code} — sections {page.code}.1–{page.code}.{page.sections.length}
            </p>
          ) : null}
        </article>
      </div>
    </SiteShell>
  );
}
