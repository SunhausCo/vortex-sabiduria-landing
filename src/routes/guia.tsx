import { createFileRoute, redirect } from "@tanstack/react-router";

// Enlace corto para compartir en redes: /guia → sección del ritual Portal 11:11.
export const Route = createFileRoute("/guia")({
  beforeLoad: () => {
    throw redirect({ to: "/descargables", hash: "portal-1111" });
  },
});
