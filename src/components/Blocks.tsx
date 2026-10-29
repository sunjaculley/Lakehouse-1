import type { Block } from "@/content";
import { Editable } from "./Editable";

type Props = {
  blocks: Block[];
  /** Stable prefix for edit ids, e.g. "spaces/innovation-lab#features". Omit to make read-only. */
  baseId?: string;
};

export function Blocks({ blocks, baseId }: Props) {
  const field = (suffix: string) => (baseId ? `${baseId}:${suffix}` : null);

  const text = (id: string | null, value: string) =>
    id ? <Editable id={id} text={value} /> : <>{value}</>;

  return (
    <>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "para":
            return (
              <p key={i} className="prose">
                {text(field(`b${i}`), block.text)}
              </p>
            );
          case "note":
            return (
              <p key={i} className="note">
                {text(field(`b${i}`), block.text)}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="bullets">
                {block.items.map((item, j) => (
                  <li key={j}>{text(field(`b${i}i${j}`), item)}</li>
                ))}
              </ul>
            );
          case "steps":
            return (
              <ol key={i} className="steps">
                {block.items.map((item, j) => (
                  <li key={j}>{text(field(`b${i}i${j}`), item)}</li>
                ))}
              </ol>
            );
          case "address":
            return (
              <div key={i} className="addressbox">
                {block.lines.map((line, j) => (
                  <span key={j} className="addressbox__line">
                    {text(field(`b${i}i${j}`), line)}
                  </span>
                ))}
              </div>
            );
          case "contact":
            return (
              <p key={i} className="contact-line">
                <strong>{text(field(`b${i}name`), block.name)}</strong> —{" "}
                {text(field(`b${i}role`), block.role)}
                {block.detail ? (
                  <span className="contact-line__detail">
                    {text(field(`b${i}detail`), block.detail)}
                  </span>
                ) : null}
              </p>
            );
        }
      })}
    </>
  );
}
