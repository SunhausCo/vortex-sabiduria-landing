import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ChevronDown,
  Heart,
  Sparkles,
  MessageCircle,
  MapPin,
  Monitor,
  Instagram,
  Facebook,
  Music2,
  Save,
} from "lucide-react";
import logo from "@/assets/logo-vortex.png";
import heroIllustration from "@/assets/pausa-alma-hero.png";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/pausa-para-el-alma")({
  head: () => ({
    meta: [
      { title: "Pausa para el Alma · Guía de Gratitud | Vórtex de Sabiduría" },
      {
        name: "description",
        content:
          "Una guía interactiva y gratuita de gratitud para los momentos difíciles. Respira, agradece y vuelve a ti con Vórtex de Sabiduría — Constelaciones Familiares y Tarot Terapéutico en Bogotá y online.",
      },
      { name: "keywords", content: "constelaciones familiares Bogotá, constelaciones familiares online, tarot terapéutico, terapia sistémica, bienestar emocional, sanación emocional, gratitud, desarrollo personal, recursos gratuitos, Vórtex de Sabiduría" },
      { property: "og:title", content: "Pausa para el Alma · Guía de Gratitud" },
      { property: "og:description", content: "Una pausa consciente para volver a ti. Guía gratuita de gratitud creada por Stella Cante Molina." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://vortex-sabiduria-landing.lovable.app/pausa-para-el-alma" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pausa para el Alma · Guía de Gratitud" },
      { name: "twitter:description", content: "Una pausa consciente para volver a ti. Guía gratuita de gratitud." },
    ],
    links: [
      { rel: "canonical", href: "https://vortex-sabiduria-landing.lovable.app/pausa-para-el-alma" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Pausa para el Alma — Guía de Gratitud para los Momentos Difíciles",
          description:
            "Guía interactiva y gratuita de gratitud creada por Stella Cante Molina, terapeuta sistémica en Bogotá.",
          author: { "@type": "Person", name: "Stella Cante Molina" },
          publisher: {
            "@type": "Organization",
            name: "Vórtex de Sabiduría",
          },
          inLanguage: "es",
          isAccessibleForFree: true,
        }),
      },
    ],
  }),
  component: PausaParaElAlma,
});

const WHATSAPP_NUMBER = "573508623461";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola Stella, acabo de vivir la Pausa para el Alma 🌸 y me gustaría agendar una sesión.",
)}`;

/* ---------- reveal on scroll ---------- */
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

/* ---------- soft aurora background ---------- */
function SoftAurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full blur-3xl animate-float-blob opacity-50"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.12 310 / 0.55), transparent 60%)" }}
      />
      <div
        className="absolute top-1/3 -right-24 h-[560px] w-[560px] rounded-full blur-3xl animate-float-blob-alt opacity-50"
        style={{ background: "radial-gradient(circle, oklch(0.86 0.09 340 / 0.55), transparent 60%)" }}
      />
      <div
        className="absolute bottom-[-160px] left-1/3 h-[480px] w-[480px] rounded-full blur-3xl animate-float-blob opacity-45"
        style={{
          background: "radial-gradient(circle, oklch(0.85 0.1 40 / 0.55), transparent 60%)",
          animationDelay: "-6s",
        }}
      />
    </div>
  );
}

function PausaParaElAlma() {
  useReveal();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Toaster position="top-center" />
      <Hero />
      <Respira />
      <Reconocer />
      <PracticaPequena />
      <FraseCorazon />
      <CTA />
      <Footer />
    </div>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24">
      <SoftAurora />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="animate-fade-up order-2 md:order-1">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-primary/70">
            Vórtex de Sabiduría · Recurso gratuito
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            PAUSA PARA EL <em className="not-italic text-gradient">ALMA</em>
          </h1>
          <p className="mt-6 font-serif text-xl italic text-primary/80 sm:text-2xl">
            Una pausa consciente para volver a ti.
          </p>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Hay momentos en los que todo parece pesado. Esta guía fue creada para
            ayudarte a respirar, agradecer y recordar que incluso en los días
            difíciles siempre existe un pequeño espacio para la esperanza.
          </p>

          <a
            href="#respira"
            className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full bg-cta px-10 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Comenzar</span>
          </a>
        </div>

        <div className="reveal relative order-1 md:order-2">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-lavender/40 via-blush/40 to-peach/40 blur-3xl" />
          <div className="relative mx-auto max-w-md">
            <img
              src={heroIllustration}
              alt="Ilustración acuarela de una mujer serena con ojos cerrados rodeada de flores lavanda"
              width={1024}
              height={1280}
              className="h-auto w-full drop-shadow-[0_20px_60px_oklch(0.55_0.16_320/0.25)]"
            />
          </div>
        </div>
      </div>

      <a
        href="#respira"
        aria-label="Bajar"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 animate-bounce-soft"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}

/* ============ SECCIÓN 1 · RESPIRA ============ */
function Respira() {
  return (
    <section id="respira" className="relative px-4 py-32">
      <SoftAurora />
      <div className="reveal relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary/70">Uno</p>
        <h2 className="font-serif text-5xl sm:text-6xl">
          <span className="text-gradient italic">Respira</span>
        </h2>

        {/* Breathing circle */}
        <div className="relative my-16 flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
          <div
            aria-hidden
            className="absolute inset-0 rounded-full blur-2xl"
            style={{ background: "radial-gradient(circle, oklch(0.83 0.11 340 / 0.35), transparent 70%)" }}
          />
          <div
            className="absolute inset-0 rounded-full border border-primary/20 animate-breathe-slow"
            style={{ background: "radial-gradient(circle, oklch(0.95 0.03 320 / 0.6), transparent 70%)" }}
          />
          <div className="relative font-serif text-lg italic text-primary/70">
            inhala · exhala
          </div>
        </div>

        <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
          Respira profundamente tres veces.
          <br />
          No tienes que resolver todo hoy.
          <br />
          Solo estar aquí.
        </p>

        <a
          href="#reconocer"
          className="group mt-12 inline-flex items-center justify-center rounded-full bg-cta px-10 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
        >
          Continuar
        </a>
      </div>

      <style>{`
        @keyframes breathe-slow {
          0%, 100% { transform: scale(0.8); opacity: 0.7; }
          50% { transform: scale(1); opacity: 1; }
        }
        .animate-breathe-slow { animation: breathe-slow 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

/* ============ SECCIÓN 2 · RECONOCER ============ */
const RECONOCER_KEY = "pausa-alma-reconocer";
const reconocerFields = [
  { key: "siento", label: "Hoy me siento…", placeholder: "Escribe con calma lo que aparece…" },
  { key: "necesito", label: "Hoy necesito…", placeholder: "Nombra lo que te haría bien recibir…" },
  { key: "agradezco", label: "Hoy agradezco…", placeholder: "Un detalle, una persona, un instante…" },
];

function Reconocer() {
  const [values, setValues] = useState<Record<string, string>>({
    siento: "",
    necesito: "",
    agradezco: "",
  });

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(RECONOCER_KEY);
      if (raw) setValues(JSON.parse(raw));
    } catch {}
  }, []);

  const save = () => {
    try {
      sessionStorage.setItem(RECONOCER_KEY, JSON.stringify(values));
      toast.success("Reflexión guardada", {
        description: "Tus palabras te acompañarán durante esta sesión.",
      });
    } catch {
      toast.error("No pudimos guardar tu reflexión en este dispositivo.");
    }
  };

  return (
    <section
      id="reconocer"
      className="relative px-4 py-32"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.97 0.02 320) 0%, oklch(0.96 0.04 40) 100%)",
      }}
    >
      <SoftAurora />
      <div className="relative mx-auto max-w-4xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary/70">Dos</p>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Hoy quiero <span className="text-gradient italic">reconocer…</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reconocerFields.map((f, i) => (
            <div
              key={f.key}
              className="reveal group relative rounded-3xl glass p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <label className="mb-4 block font-serif text-xl italic text-primary">
                {f.label}
              </label>
              <textarea
                value={values[f.key]}
                onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                placeholder={f.placeholder}
                rows={5}
                className="w-full resize-none rounded-2xl border border-white/60 bg-white/50 p-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center">
          <button
            onClick={save}
            className="group inline-flex items-center gap-2 rounded-full bg-cta px-10 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            <Save className="h-4 w-4 transition-transform group-hover:rotate-6" />
            Guardar reflexión
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============ SECCIÓN 3 · PRÁCTICA ============ */
const practicaFields = [
  { key: "vi", label: "Algo que vi hoy", placeholder: "Una luz, un gesto, un color…" },
  { key: "recibi", label: "Algo que recibí hoy", placeholder: "Una palabra, una ayuda, un abrazo…" },
  { key: "ofrecer", label: "Algo que puedo ofrecer hoy", placeholder: "Una escucha, una sonrisa, un cuidado…" },
];

function PracticaPequena() {
  const [values, setValues] = useState<Record<string, string>>({
    vi: "",
    recibi: "",
    ofrecer: "",
  });

  return (
    <section className="relative px-4 py-32">
      <div className="relative mx-auto max-w-5xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary/70">Tres</p>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Una pequeña <span className="text-gradient italic">práctica</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tres pausas breves para reconocer la abundancia del día.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {practicaFields.map((f, i) => (
            <article
              key={f.key}
              className="reveal group relative rounded-3xl glass p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cta text-white shadow-soft">
                <Sparkles className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl italic text-primary">{f.label}</h3>
              <textarea
                value={values[f.key]}
                onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                placeholder={f.placeholder}
                rows={4}
                className="mt-4 w-full resize-none rounded-2xl border border-white/60 bg-white/50 p-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SECCIÓN 4 · FRASE ============ */
function FraseCorazon() {
  return (
    <section className="relative px-4 py-32">
      <SoftAurora />
      <div className="reveal relative mx-auto max-w-3xl">
        <div className="gradient-border-inner shadow-glow">
          <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-background p-12 text-center sm:p-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl animate-float-blob"
              style={{ background: "radial-gradient(circle, oklch(0.83 0.11 340 / 0.35), transparent 60%)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl animate-float-blob-alt"
              style={{ background: "radial-gradient(circle, oklch(0.85 0.1 40 / 0.35), transparent 60%)" }}
            />
            <Heart
              className="mx-auto mb-8 h-10 w-10 text-primary/50"
              strokeWidth={1.2}
            />
            <p className="font-serif text-3xl leading-snug italic text-foreground sm:text-4xl md:text-5xl">
              Que todo encuentre su lugar en tu{" "}
              <span className="text-gradient">corazón</span> y en tu historia.
            </p>
            <div className="mx-auto mt-10 h-px w-16 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Respira.
              <br />
              Cierra los ojos.
              <br />
              Permite que esta frase te acompañe durante el resto del día.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ CTA ============ */
function CTA() {
  const modalidades = [
    { Icon: Monitor, title: "Sesión Virtual", desc: "Desde cualquier lugar del mundo, en un espacio seguro." },
    { Icon: MapPin, title: "Sesión Presencial", desc: "En Bogotá, en un espacio cálido y tranquilo." },
  ];

  return (
    <section
      id="agenda"
      className="relative px-4 py-32"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.96 0.03 40) 0%, oklch(0.95 0.04 320) 100%)",
      }}
    >
      <SoftAurora />
      <div className="relative mx-auto max-w-4xl">
        <div className="reveal gradient-border-inner shadow-glow">
          <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-background p-10 text-center sm:p-16">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary/70">
              Continuar el camino
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              ¿Quieres profundizar <br className="sm:hidden" />
              en tu <span className="text-gradient italic">proceso?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Cada historia merece ser escuchada con respeto, amor y una mirada
              sistémica.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-cta px-12 py-4 text-base font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Agenda tu sesión
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              Respondemos personalmente por WhatsApp
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {modalidades.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="group relative rounded-3xl glass p-7 text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cta text-white shadow-soft transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  const socials = [
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Music2, href: "https://tiktok.com", label: "TikTok" },
    { Icon: MessageCircle, href: WHATSAPP_LINK, label: "WhatsApp" },
  ];

  return (
    <footer className="border-t border-border bg-background px-4 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <img
          src={logo}
          alt="Vórtex de Sabiduría"
          width={72}
          height={72}
          className="h-16 w-16"
          loading="lazy"
        />
        <div className="space-y-2">
          <p className="font-serif text-lg italic text-primary/80">Con amor,</p>
          <p className="font-serif text-2xl">Stella Cante Molina</p>
          <p className="text-sm text-muted-foreground">
            Constelaciones Familiares · Tarot Terapéutico
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-primary transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-cta hover:text-white hover:shadow-glow"
            >
              <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vórtex de Sabiduría · Bogotá
        </p>
      </div>
    </footer>
  );
}
