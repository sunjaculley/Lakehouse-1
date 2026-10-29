export const ASSISTANT_URL =
  "https://m365.cloud.microsoft/chat/?titleId=T_7192b319-d09a-204e-3343-b2b28b360de2&source=embedded-builder";

export const ASSISTANT_NAME = "Lakehouse Agent";

/** Opens the agent in a narrow window docked to the right of the screen. */
export function openAssistant() {
  if (typeof window === "undefined") return;
  const width = Math.min(460, Math.round(window.screen.availWidth * 0.35));
  const height = window.screen.availHeight;
  const left = window.screen.availWidth - width;
  const win = window.open(
    ASSISTANT_URL,
    "lakehouse-assistant",
    `popup=yes,width=${width},height=${height},left=${left},top=0`,
  );
  if (win) win.focus();
  else window.open(ASSISTANT_URL, "_blank", "noopener");
}
