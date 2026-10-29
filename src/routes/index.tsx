import { createFileRoute } from "@tanstack/react-router";
import { ExperienceShell } from "@/components/ExperienceShell";
import { ClientExperience } from "@/components/ClientExperience";
import { EditProvider } from "@/lib/edits";
import { experienceHead } from "@/lib/experience-meta";

export const Route = createFileRoute("/")({
  head: () => experienceHead("Know before you go", "A welcoming, evergreen client concept for preparing, arriving and exploring KPMG Lakehouse."),
  component: Home,
});

function Home() {
  return <EditProvider><ExperienceShell><ClientExperience /></ExperienceShell></EditProvider>;
}
