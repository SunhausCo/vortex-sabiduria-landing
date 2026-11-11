import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Download,
  BookOpen,
  Leaf,
  Sparkles,
  Heart,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  Moon,
} from "lucide-react";
import heroImg from "@/assets/guia-hero.jpg";
import portalImg from "@/assets/portal-1111-portada.jpg";

export const Route = createFileRoute("/descargables")({
  component: DescargablesPage,
  head: () => ({
    meta: [
      { title: "Descargables · ¿Por qué repito la misma historia? — Vórtex de Sabiduría" },
      {
        name: "description",
        content:
          "Descarga gratis la guía introductoria a las Constelaciones Familiares y el ritual Portal 11:11 de manifestación, por Stella Cante Molina. Recursos gratuitos para tu bienestar emocional.",
      },
      { name: "keywords", content: "constelaciones familiares Bogotá, guía gratuita, tarot terapéutico, terapia sistémica, patrones familiares, sanación emocional, recursos gratuitos, Vórtex de Sabiduría" },
      { property: "og:title", content: "¿Por qué repito la misma historia? — Guía gratuita" },
      { property: "og:description", content: "Una guía introductoria para comprender las Constelaciones Familiares. Descarga gratuita." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://vortex-sabiduria-landing.lovable.app/descargables" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://vortex-sabiduria-landing.lovable.app/descargables" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "¿Por qué repito la misma historia? Guía introductoria a las Constelaciones Familiares",
          author: { "@type": "Person", name: "Stella Cante Molina" },
          publisher: { "@type": "Organization", name: "Vórtex de Sabiduría" },
          description:
            "Guía gratuita para comprender las constelaciones familiares y los patrones que repetimos en nuestra vida.",
          inLanguage: "es",
        }),
      },
    ],
  }),
});

const PDF_URL = "/guia-constelaciones-familiares.pdf";
const PORTAL_PDF = "/portal-1111-ritual-de-manifestacion.pdf";
const PORTAL_WHATSAPP =
  "https://wa.me/573134385783?text=" +
  encodeURIComponent("Hola Stella, hice el ritual Portal 11:11 y me gustaría acompañar mi intención con una sesión ✨");
const WHATSAPP_LINK =
  "https://wa.me/573134385783?text=" +
  encodeURIComponent("Hola Stella, descargué la guía y me gustaría agendar una sesión 🌿");

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function DescargablesPage() {
  useReveal();
  return (
    <div className="min-h-screen" style={{ background: "var(--cream)", color: "var(--plum)" }}>
      <TopBar />
      <PortalBanner />
      <Hero />
      <PortalSection />
      <Preview />
      <Inside />
      <Author />
      <FinalCTA />
      <FooterBar />
    </div>
  );
}

/* ---------- TopBar ---------- */
function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b" style={{ background: "color-mix(in oklch, var(--cream) 82%, transparent)", backdropFilter: "blur(14px)", borderColor: "var(--border)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-sm tracking-[0.3em]" style={{ color: "var(--mystic)" }}>
          <ArrowLeft className="h-4 w-4" />
          VÓRTEX
        </Link>
        <span className="text-xs tracking-[0.35em]" style={{ color: "var(--peach)" }}>
          RECURSOS · GRATUITOS
        </span>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 pb-24 pt-20 md:grid-cols-2 md:gap-20 md:pt-28">
        <div className="reveal flex flex-col justify-center">
          <span className="mb-6 inline-flex items-center gap-2 text-[11px] tracking-[0.4em]" style={{ color: "var(--peach)" }}>
            <Leaf className="h-3.5 w-3.5" />
            GUÍA GRATUITA · PDF
          </span>
          <h1 className="font-serif text-5xl leading-[1.05] md:text-6xl" style={{ color: "var(--plum)" }}>
            ¿Por qué repito<br />la misma <em className="italic" style={{ color: "var(--mystic)" }}>historia</em>?
          </h1>
          <div className="mt-6 h-px w-16" style={{ background: "var(--peach)" }} />
          <p className="mt-6 max-w-md font-serif text-lg italic leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            Una guía introductoria para comprender cómo las historias familiares
            pueden influir en tu vida — y en las decisiones que hoy sientes tuyas.
          </p>

          <ul className="mt-8 space-y-3 text-[15px]" style={{ color: "var(--plum)" }}>
            {[
              "8 páginas, diseño editorial",
              "Sin tecnicismos ni promesas exageradas",
              "Preguntas para reflexionar tu propia historia",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--mystic)" }} />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={PDF_URL}
              download
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.25em] transition hover:scale-[1.02]"
              style={{ background: "var(--plum)", color: "var(--cream)" }}
            >
              <Download className="h-4 w-4 transition group-hover:translate-y-0.5" />
              DESCARGAR GUÍA
            </a>
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-4 text-sm tracking-[0.2em] transition hover:opacity-70"
              style={{ color: "var(--mystic)" }}
            >
              <BookOpen className="h-4 w-4" />
              VER ANTES
            </a>
          </div>
          <p className="mt-4 text-xs" style={{ color: "var(--muted-foreground)" }}>
            Formato PDF · 8 páginas · Descarga inmediata · Sin registro
          </p>
        </div>

        {/* Image */}
        <div className="reveal relative">
          <div className="relative aspect-[4/5] overflow-hidden" style={{ background: "var(--border)" }}>
            <img
              src={heroImg}
              alt="Guía introductoria a las constelaciones familiares"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] tracking-[0.35em]" style={{ color: "var(--cream)" }}>
              <span>VÓRTEX · DE · SABIDURÍA</span>
              <span>2026</span>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 border" style={{ borderColor: "var(--peach)" }} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Portal 11:11 ---------- */
const GOLD = "#d8b46a";
const GOLD_LIGHT = "#f2dca0";

function PortalBanner() {
  return (
    <a
      href="#portal-1111"
      className="block px-6 py-2.5 text-center text-[11px] tracking-[0.3em] transition hover:opacity-90"
      style={{ background: "#0a0f2c", color: GOLD_LIGHT }}
    >
      ✦ NUEVO · RITUAL PORTAL 11:11 — DESCÁRGALO GRATIS ↓
    </a>
  );
}

function PortalSection() {
  const points = [
    "12 páginas A4, listas para imprimir o usar en pantalla",
    "Ritual guiado para hacerlo a las 11:11",
    "Soltar, definir tu deseo, visualizar y declarar",
    "Espacios amplios para escribir a mano",
  ];
  return (
    <section id="portal-1111" className="relative overflow-hidden" style={{ background: "linear-gradient(180deg,#070a22 0%,#0d1340 100%)", color: "#f6f0e2" }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-24 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-20">
        <div className="reveal relative mx-auto w-full max-w-[340px]">
          <img
            src={portalImg}
            alt="Portada de la guía Portal 11:11, ritual de manifestación de Vortex de Sabiduría"
            width={909}
            height={1286}
            loading="lazy"
            className="w-full shadow-2xl"
            style={{ boxShadow: "0 30px 80px rgba(216,180,106,0.18)" }}
          />
          <div className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 border" style={{ borderColor: GOLD }} />
        </div>

        <div className="reveal">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.4em]" style={{ color: GOLD }}>
            <Moon className="h-3.5 w-3.5" />
            DESCARGABLE · RITUAL 11 DE NOVIEMBRE
          </span>
          <h2 className="mt-5 font-serif text-5xl leading-[1.05] md:text-6xl">
            Portal <em className="italic" style={{ color: GOLD_LIGHT }}>11:11</em>
          </h2>
          <p className="mt-3 text-xs tracking-[0.4em]" style={{ color: GOLD }}>RITUAL DE MANIFESTACIÓN</p>
          <div className="mt-6 h-px w-16" style={{ background: GOLD }} />
          <p className="mt-6 font-serif text-xl italic leading-relaxed" style={{ color: GOLD_LIGHT }}>
            Escribe. Visualiza. Siente. Declara.
          </p>
          <p className="mt-4 max-w-md leading-relaxed" style={{ color: "rgba(246,240,226,0.82)" }}>
            Un ritual para declarar la realidad que estás por crear. Haz una pausa
            consciente, suelta lo que ya cumplió su ciclo y elige hacia dónde
            quieres dirigir tu energía.
          </p>

          <ul className="mt-8 space-y-3 text-[15px]">
            {points.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: GOLD }} />
                <span style={{ color: "rgba(246,240,226,0.9)" }}>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={PORTAL_PDF}
              download
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.25em] transition hover:scale-[1.02]"
              style={{ background: GOLD, color: "#0a0f2c" }}
            >
              <Download className="h-4 w-4 transition group-hover:translate-y-0.5" />
              DESCARGAR RITUAL
            </a>
            <a
              href={PORTAL_PDF}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-4 text-sm tracking-[0.2em] transition hover:opacity-70"
              style={{ color: GOLD_LIGHT }}
            >
              <BookOpen className="h-4 w-4" />
              VER ANTES
            </a>
          </div>
          <p className="mt-4 text-xs" style={{ color: "rgba(246,240,226,0.6)" }}>
            Formato PDF · 12 páginas · Descarga inmediata · Sin registro
          </p>
        </div>
      </div>

      {/* Llamado a la acción */}
      <div className="border-t" style={{ borderColor: "rgba(216,180,106,0.25)" }}>
        <div className="reveal mx-auto max-w-3xl px-6 py-20 text-center">
          <span className="text-[11px] tracking-[0.4em]" style={{ color: GOLD }}>DESPUÉS DEL RITUAL</span>
          <h3 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
            Tu intención merece <em className="italic" style={{ color: GOLD_LIGHT }}>raíces</em>
          </h3>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed" style={{ color: "rgba(246,240,226,0.82)" }}>
            Escribir es el primer paso. Si quieres sostener lo que declaraste
            con acompañamiento, Stella puede guiarte en una sesión personal,
            virtual o presencial.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={PORTAL_WHATSAPP}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.25em] transition hover:scale-[1.02]"
              style={{ background: GOLD, color: "#0a0f2c" }}
            >
              <MessageCircle className="h-4 w-4" />
              AGENDAR MI SESIÓN
            </a>
            <a
              href="/numerologia.html"
              className="inline-flex items-center gap-3 border px-8 py-4 text-sm tracking-[0.25em] transition hover:opacity-70"
              style={{ borderColor: GOLD, color: GOLD_LIGHT }}
            >
              <Sparkles className="h-4 w-4" />
              MI LECTURA NUMEROLÓGICA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Preview cards ---------- */
function Preview() {
  const items = [
    { icon: Sparkles, label: "01", title: "¿Qué son realmente?", desc: "Un lenguaje sencillo, sin esoterismo, para acercarte al enfoque sistémico." },
    { icon: Heart, label: "02", title: "Señales de un patrón", desc: "Seis señales que muchas personas reconocen antes de iniciar un proceso." },
    { icon: Leaf, label: "03", title: "Mitos y realidades", desc: "Respuestas respetuosas a las dudas más frecuentes." },
    { icon: BookOpen, label: "04", title: "Qué sucede en sesión", desc: "El paso a paso, para que llegues con calma y sin expectativas." },
  ];
  return (
    <section className="border-y" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="reveal mb-16 max-w-2xl">
          <span className="text-[11px] tracking-[0.4em]" style={{ color: "var(--peach)" }}>LO QUE ENCONTRARÁS</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Un espacio para mirar tu historia con calma.</h2>
        </div>
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2" style={{ background: "var(--secondary)" }}>
          {items.map((it) => (
            <div key={it.label} className="reveal p-10" style={{ background: "var(--cream)" }}>
              <div className="flex items-center justify-between">
                <it.icon className="h-5 w-5" style={{ color: "var(--mystic)" }} />
                <span className="text-xs tracking-[0.3em]" style={{ color: "var(--peach)" }}>{it.label}</span>
              </div>
              <h3 className="mt-8 font-serif text-2xl">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Inside quote ---------- */
function Inside() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-28 text-center">
      <div className="reveal">
        <div className="mx-auto mb-8 h-px w-12" style={{ background: "var(--peach)" }} />
        <p className="font-serif text-2xl italic leading-relaxed md:text-3xl" style={{ color: "var(--plum)" }}>
          &ldquo;Lo que no se comprende se repite. Lo que se mira con amor,
          comienza a transformarse.&rdquo;
        </p>
        <p className="mt-8 text-xs tracking-[0.4em]" style={{ color: "var(--peach)" }}>
          UN EXTRACTO DE LA GUÍA
        </p>
      </div>
    </section>
  );
}

/* ---------- Author ---------- */
function Author() {
  return (
    <section className="border-t" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:items-center">
        <div className="reveal">
          <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full" style={{ background: "var(--secondary)" }}>
            <div className="flex h-full w-full items-center justify-center font-serif text-5xl" style={{ color: "var(--mystic)" }}>
              S
            </div>
          </div>
        </div>
        <div className="reveal">
          <span className="text-[11px] tracking-[0.4em]" style={{ color: "var(--peach)" }}>SOBRE LA AUTORA</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Stella Cante Molina</h2>
          <p className="mt-6 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            Terapeuta dedicada al acompañamiento sistémico desde hace más de una década.
            Su trabajo se apoya en la escucha, el respeto y la calma — un espacio donde
            cada persona puede reconocer su propia historia y encontrar aire para caminar.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-28 text-center">
      <div className="reveal">
        <span className="text-[11px] tracking-[0.4em]" style={{ color: "var(--peach)" }}>SIGUIENTE PASO</span>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">¿Deseas profundizar?</h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          Si al leer la guía sientes que algo se movió dentro tuyo, será un gusto
          acompañarte en una sesión personal.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href={PDF_URL}
            download
            className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.25em] transition hover:scale-[1.02]"
            style={{ background: "var(--plum)", color: "var(--cream)" }}
          >
            <Download className="h-4 w-4" />
            DESCARGAR GUÍA
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 border px-8 py-4 text-sm tracking-[0.25em] transition hover:opacity-70"
            style={{ borderColor: "var(--plum)", color: "var(--plum)" }}
          >
            <MessageCircle className="h-4 w-4" />
            AGENDAR SESIÓN
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function FooterBar() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs md:flex-row" style={{ color: "var(--muted-foreground)" }}>
        <span className="tracking-[0.3em]">VÓRTEX · DE · SABIDURÍA</span>
        <span>© 2026 · Stella Cante Molina · Bogotá</span>
        <Link to="/" className="tracking-[0.3em] hover:opacity-70">← VOLVER AL INICIO</Link>
      </div>
    </footer>
  );
}
