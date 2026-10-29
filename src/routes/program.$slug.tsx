import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Blocks } from "@/components/Blocks";
import { Gallery } from "@/components/Gallery";
import { DocNav } from "@/components/DocNav";
import { Editable } from "@/components/Editable";
import { galleryFor } from "@/content/galleries";
import { programBySlug, programPages } from "@/content";
import { sectionRef } from "@/content/types";

export const Route = createFileRoute("/program/$slug")({
  loader: ({ params }) => {
    const page = programBySlug(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: `${loaderData?.title ?? "Program"} — Ignition at Lakehouse` },
      { name: "description", content: loaderData?.intro ?? "Lakehouse program logistics." },
      { property: "og:title", content: `${loaderData?.title ?? "Program"} — Ignition at Lakehouse` },
      { property: "og:description", content: loaderData?.intro ?? "Lakehouse program logistics." },
    ],
  }),
  errorComponent: () => (
    <SiteShell>
      <p className="prose">That page could not be loaded. Try the menu above.</p>
    </SiteShell>
  ),
  notFoundComponent: () => (
    <SiteShell>
      <p className="prose">That topic does not exist.</p>
    </SiteShell>
  ),
  component: ProgramPage,
});

function ProgramPage() {
  const page = Route.useLoaderData();
  const base = `program/${page.slug}`;

  return (
    <SiteShell area="session">
      <div className="doc">
        <aside className="doc__side">
          <DocNav
            title="Running a program"
            to="/program/$slug"
            pages={programPages}
            currentSlug={page.slug}
          />
        </aside>

        <article className="doc__body">
          <h1 className="doc__title">
            <Editable id={`${base}:title`} text={page.title} />
          </h1>
          <p className="doc__intro">
            <Editable id={`${base}:intro`} text={page.intro} />
          </p>
          {page.sections.map((section, i) => (
            <section key={section.id} id={section.id} className="doc__section">
              <h2 className="doc__section-head">
                <Editable id={`${base}#${section.id}:heading`} text={section.title} />
              </h2>
              <Blocks blocks={section.blocks} baseId={`${base}#${section.id}`} />
              <Gallery
                photos={galleryFor(`${page.slug}#${section.id}`, sectionRef(page, i))}
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
