import { useEffect, useRef } from "react";
import { escapeText, sanitizeHtml, useEdits } from "@/lib/edits";

type Props = {
  /** Stable id, e.g. "spaces/innovation-lab#features:b2" */
  id: string;
  /** The published text this edits. */
  text: string;
  as?: "p" | "span" | "li" | "h1" | "h2" | "div" | "strong";
  className?: string;
};

/**
 * Inline rich-text field. Read-only until edit mode is on; then it is a
 * contentEditable region that saves what you type into the local overlay.
 */
export function Editable({ id, text, as = "span", className }: Props) {
  const { editing, overlay, setText } = useEdits();
  const ref = useRef<HTMLElement | null>(null);
  const stored = overlay.text[id];
  const value = stored ?? escapeText(text);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (document.activeElement === el) return;
    if (el.innerHTML !== value) el.innerHTML = value;
  }, [value, editing]);

  const Tag = as as "span";

  return (
    <Tag
      ref={ref as never}
      className={[className, editing ? "editable" : null].filter(Boolean).join(" ")}
      contentEditable={editing || undefined}
      suppressContentEditableWarning
      spellCheck={editing || undefined}
      data-edit-id={editing ? id : undefined}
      onBlur={
        editing
          ? (e: React.FocusEvent<HTMLElement>) => setText(id, sanitizeHtml(e.currentTarget.innerHTML))
          : undefined
      }
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
}
