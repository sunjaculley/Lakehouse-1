import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Page } from "@/content/types";

type Props = {
  title: string;
  to: "/spaces/$slug" | "/program/$slug";
  pages: Page[];
  currentSlug: string;
};

/**
 * One indented tree. Everything starts collapsed; opening a page reveals its
 * sections, and the section you are reading highlights as you scroll.
 */
export function DocNav({ title, to, pages, currentSlug }: Props) {
  const [open, setOpen] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);

  // Collapse everything again whenever you land on another page.
  useEffect(() => {
    setOpen(null);
    setActive(null);
  }, [currentSlug]);

  // Follow the reader: highlight whichever section is nearest the top.
  useEffect(() => {
    const page = pages.find((p) => p.slug === currentSlug);
    if (!page) return;
    const nodes = page.sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [currentSlug, pages]);

  return (
    <nav className="docnav" aria-label={title}>
      <p className="docnav__title">{title}</p>
      <ul className="docnav__list">
        {pages.map((page) => {
          const current = page.slug === currentSlug;
          const expanded = open === page.slug;
          return (
            <li
              key={page.slug}
              className={expanded ? "docnav__item docnav__item--open" : "docnav__item"}
            >
              <div className={current ? "docnav__row docnav__row--current" : "docnav__row"}>
                <button
                  type="button"
                  className="docnav__chevron"
                  aria-expanded={expanded}
                  aria-label={expanded ? `Hide ${page.title} sections` : `Show ${page.title} sections`}
                  onClick={() => setOpen(expanded ? null : page.slug)}
                >
                  {expanded ? "▾" : "▸"}
                </button>
                <Link
                  to={to}
                  params={{ slug: page.slug }}
                  className="docnav__page"
                  aria-current={current ? "page" : undefined}
                >
                  {page.title}
                </Link>
              </div>

              {expanded && page.sections.length > 0 ? (
                <ul className="docnav__sections">
                  {page.sections.map((section) => (
                    <li key={section.id}>
                      {current ? (
                        <a
                          href={`#${section.id}`}
                          className={
                            active === section.id
                              ? "docnav__section docnav__section--active"
                              : "docnav__section"
                          }
                        >
                          {section.title}
                        </a>
                      ) : (
                        <Link
                          to={to}
                          params={{ slug: page.slug }}
                          hash={section.id}
                          className="docnav__section"
                        >
                          {section.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
