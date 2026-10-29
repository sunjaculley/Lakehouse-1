import { createContext, useContext, useEffect, useRef, useState } from "react";

type Ctx = { copied: boolean; copy: () => void };
const CopyCtx = createContext<Ctx | null>(null);

type ContainerProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "li" | "article" | "section";
};

/**
 * Wraps a row/card. Clicking anywhere inside copies `value` to the clipboard.
 * A child `<CopyLabel>` renders the token text and hosts the floating "Copied"
 * flag above itself.
 */
export function CopyContainer({ value, children, className, style, as = "div" }: ContainerProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => { if (timer.current) window.clearTimeout(timer.current); }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // clipboard blocked — ignore
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      copy();
    }
  };

  const Tag = as as "div";

  return (
    <CopyCtx.Provider value={{ copied, copy }}>
      <Tag
        role="button"
        tabIndex={0}
        aria-label={`Copy ${value} to clipboard`}
        onClick={copy}
        onKeyDown={onKey}
        className={className ? `copy-container ${className}` : "copy-container"}
        style={style}
        data-copied={copied ? "true" : undefined}
      >
        {children}
      </Tag>
    </CopyCtx.Provider>
  );
}

type LabelProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "span" | "code" | "div";
};

/** Renders the token label inside a CopyContainer and anchors the "Copied" flag above it. */
export function CopyLabel({ children, className, style, as = "span" }: LabelProps) {
  const ctx = useContext(CopyCtx);
  const Tag = as as "span";
  return (
    <Tag
      className={className ? `copy-label ${className}` : "copy-label"}
      style={style}
      data-copied={ctx?.copied ? "true" : undefined}
    >
      <span className="copy-label__text">{children}</span>
      <span className="copy-label__flag" aria-hidden={!ctx?.copied}>Copied</span>
    </Tag>
  );
}
