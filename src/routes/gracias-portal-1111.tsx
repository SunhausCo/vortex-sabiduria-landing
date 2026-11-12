import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Download, MessageCircle, Moon, Sparkles } from "lucide-react";

const FILES = {
  pantalla: { href: "/portal-1111-ritual-de-manifestacion.pdf", label: "versión para pantalla" },
  imprimir: { href: "/portal-1111-ritual-de-manifestacion-imprimir.pdf", label: "versión para imprimir" },
} as const;

const GOLD = "#d8b46a";
const GOLD_LIGHT = "#f2dca0";
const WHATSAPP =
  "https://wa.me/573134385783?text=" +
  encodeURIComponent("Hola Stella, hice el ritual Portal 11:11 y me gustaría acompañar mi intención con una sesión ✨");

export const Route = createFileRoute("/gracias-portal-1111")({
  validateSearch: (s: Record<string, unknown>): { v: "pantalla" | "imprimir" } => ({
    v: s.v === "imprimir" ? "imprimir" : "pantalla",
  }),
  head: () => ({
    meta: [
      { title: "Tu guía Portal 11:11 | Vortex de Sabiduría" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Gracias,
});

function Gracias() {
  const { v } = Route.useSearch();
  const file = FILES[v];
  const other = v === "pantalla" ? FILES.imprimir : FILES.pantalla;

  // La descarga arranca sola; el botón queda como respaldo por si el navegador la bloquea.
  useEffect(() => {
    const a = document.createElement("a");
    a.href = file.href;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, [file.href]);

  return (
    <main
      className="flex min-h-screen items-center justify-center px-6 py-16"
      style={{ background: "linear-gradient(180deg,#070a22 0%,#0d1340 100%)", color: "#f6f0e2" }}
    >
      <div className="mx-auto max-w-xl text-center">
        <Moon className="mx-auto h-6 w-6" style={{ color: GOLD }} />
        <p className="mt-5 text-[11px] tracking-[0.4em]" style={{ color: GOLD }}>PORTAL 11:11</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
          Tu guía se está <em className="italic" style={{ color: GOLD_LIGHT }}>descargando</em>
        </h1>
        <p className="mx-auto mt-5 max-w-md leading-relaxed" style={{ color: "rgba(246,240,226,0.85)" }}>
          Busca el archivo en tus descargas. Hazlo con calma: no importa la hora, la intención importa más que el momento.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={file.href}
            download
            className="inline-flex items-center gap-3 px-7 py-4 text-sm tracking-[0.2em] transition hover:scale-[1.02]"
            style={{ background: GOLD, color: "#0a0f2c" }}
          >
            <Download className="h-4 w-4" />
            DESCARGAR DE NUEVO
          </a>
          <a
            href={other.href}
            download
            className="inline-flex items-center gap-3 border px-7 py-4 text-sm tracking-[0.2em] transition hover:opacity-70"
            style={{ borderColor: GOLD, color: GOLD_LIGHT }}
          >
            {v === "pantalla" ? "VERSIÓN PARA IMPRIMIR" : "VERSIÓN PARA PANTALLA"}
          </a>
        </div>

        <div className="mt-14 border-t pt-10" style={{ borderColor: "rgba(216,180,106,0.25)" }}>
          <h2 className="font-serif text-2xl md:text-3xl">
            Tu intención merece <em className="italic" style={{ color: GOLD_LIGHT }}>raíces</em>
          </h2>
          <p className="mx-auto mt-3 max-w-md leading-relaxed" style={{ color: "rgba(246,240,226,0.82)" }}>
            Cuando termines el ritual, Stella puede acompañarte en una sesión personal, virtual o presencial.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 px-7 py-4 text-sm tracking-[0.2em] transition hover:scale-[1.02]"
              style={{ background: GOLD, color: "#0a0f2c" }}
            >
              <MessageCircle className="h-4 w-4" />
              AGENDAR MI SESIÓN
            </a>
            <a
              href="/numerologia.html"
              className="inline-flex items-center gap-3 border px-7 py-4 text-sm tracking-[0.2em] transition hover:opacity-70"
              style={{ borderColor: GOLD, color: GOLD_LIGHT }}
            >
              <Sparkles className="h-4 w-4" />
              MI LECTURA NUMEROLÓGICA
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
