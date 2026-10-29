import { useState } from "react";
import { useEdits } from "@/lib/edits";
import { buildChangeZip, describeChanges, downloadBlob } from "@/lib/export-changes";

function exec(command: string, value?: string) {
  document.execCommand(command, false, value);
}

export function EditBar() {
  const { editing, setEditing, overlay, images, discard, changeCount, ready } = useEdits();
  const [review, setReview] = useState(false);

  if (!ready) return null;

  if (!editing) {
    return (
      <button type="button" className="editbar__toggle" onClick={() => setEditing(true)}>
        Edit
        {changeCount > 0 ? <span className="editbar__count">{changeCount}</span> : null}
      </button>
    );
  }

  const lines = describeChanges(overlay);

  return (
    <>
      <div className="editbar" role="region" aria-label="Edit mode">
        <span className="editbar__flag">Editing</span>

        <div className="editbar__tools" aria-label="Formatting">
          <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec("bold")} title="Bold">
            <strong>B</strong>
          </button>
          <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => exec("italic")} title="Italic">
            <em>I</em>
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec("underline")}
            title="Underline"
          >
            <u>U</u>
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec("insertUnorderedList")}
            title="Bulleted list"
          >
            •
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec("insertOrderedList")}
            title="Numbered list"
          >
            1.
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              const href = window.prompt("Link address");
              if (href) exec("createLink", href);
            }}
            title="Add link"
          >
            Link
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec("removeFormat")}
            title="Clear formatting"
          >
            Clear
          </button>
        </div>

        <div className="editbar__actions">
          <button type="button" className="btn btn--ghost" onClick={() => setReview(true)}>
            Review changes{changeCount > 0 ? ` (${changeCount})` : ""}
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => setEditing(false)}>
            Done
          </button>
        </div>
      </div>

      {review ? (
        <div className="editmodal" role="dialog" aria-modal="true" aria-label="Review changes">
          <div className="editmodal__panel">
            <h2>Your changes</h2>
            {lines.length === 0 ? (
              <p className="prose">Nothing changed yet.</p>
            ) : (
              <ul className="editmodal__list">
                {lines.map((line) => (
                  <li key={`${line.key}-${line.what}`}>
                    <code>{line.key}</code>
                    <span>{line.what}</span>
                  </li>
                ))}
              </ul>
            )}

            <p className="note">
              Download the change file, then drop it into the Lovable chat. The site updates for
              everyone once it is applied.
            </p>

            <div className="editmodal__actions">
              <button
                type="button"
                className="btn"
                disabled={lines.length === 0}
                onClick={() => {
                  const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, "-");
                  downloadBlob(buildChangeZip(overlay, images), `ignition-changes-${stamp}.zip`);
                }}
              >
                Download changes
              </button>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => {
                  if (window.confirm("Discard all your edits and go back to the published version?")) {
                    discard();
                    setReview(false);
                  }
                }}
              >
                Discard my edits
              </button>
              <button type="button" className="btn btn--ghost" onClick={() => setReview(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
