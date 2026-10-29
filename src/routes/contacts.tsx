import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { contacts } from "@/content";
import { Editable } from "@/components/Editable";


export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Who to call — Ignition Spaces at Lakehouse" },
      {
        name: "description",
        content: "Contacts for technology, AV, Living Lab, Story Lab, supplies and logistics at Lakehouse.",
      },
      { property: "og:title", content: "Who to call — Ignition Spaces at Lakehouse" },
      {
        property: "og:description",
        content: "Contacts for technology, AV, spaces, supplies and program logistics.",
      },
    ],
  }),
  component: Contacts,
});

function Contacts() {
  return (
    <SiteShell area="contacts">
      <div className="doc__body doc__body--wide">
        <h1 className="doc__title">Who to call</h1>
        <p className="doc__intro">
          Directory of everyone named across the guides.
        </p>
        <div className="directory">
          {contacts.map((c, i) => (
            <div key={c.name + c.role} className="directory__row">
              <span className="directory__topic">
                <Editable id={`contacts:${i}:name`} text={c.name} />
              </span>
              <span className="directory__who">
                <Editable id={`contacts:${i}:role`} text={c.role} />
              </span>
              <span className="directory__desc">
                {c.detail ? <Editable id={`contacts:${i}:detail`} text={c.detail} /> : null}
              </span>
              <span className="directory__contact">
                {c.email ? (
                  <a href={`mailto:${c.email}`}>{c.email}</a>
                ) : null}
                {c.phone ? <a href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a> : null}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
