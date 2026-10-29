import { createFileRoute, redirect } from "@tanstack/react-router";

// Former tab URL; the visitor experience is now one scrolling page.
export const Route = createFileRoute("/visit/arrival")({ beforeLoad: () => { throw redirect({ to: "/", hash: "arrival" }); } });
