import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { Download } from "lucide-react";
import {
  Sparkles,
  Moon,
  Heart,
  Users,
  Star,
  Compass,
  MapPin,
  Send,
  Instagram,
  Facebook,
  MessageCircle,
  ChevronDown,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import logo from "@/assets/logo-vortex.png";
import stellaPortrait from "@/assets/stella-portrait.jpg";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const WHATSAPP_NUMBER = "573508623461";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola Stella, me gustaría agendar una sesión en Vortex de Sabiduría 🌙",
)}`;

const services = [
  { icon: Sparkles, title: "Tarot Terapéutico", desc: "Guía simbólica para iluminar tu camino." },
  { icon: Moon, title: "Registros Akáshicos", desc: "Diálogo con la memoria del alma." },
  { icon: Heart, title: "Biodescodificación", desc: "El origen emocional detrás del síntoma." },
  { icon: Compass, title: "Constelaciones Familiares", desc: "Sanación del sistema y sus lazos." },
  { icon: Star, title: "Astrología", desc: "Tu carta natal como mapa de vida." },
  { icon: Users, title: "Terapias Individuales y Grupales", desc: "Acompañamiento cercano y presente." },
];

const testimonials = [
  {
    quote:
      "Una experiencia transformadora. Stella tiene una escucha profunda y una presencia que reconforta.",
    author: "María F.",
  },
  {
    quote:
      "Salí de la sesión con claridad y calma. Sentí que por primera vez me escuchaba a mí misma.",
    author: "Andrés G.",
  },
  {
    quote:
      "La constelación cambió mi mirada sobre mi familia. Hoy me relaciono desde otro lugar.",
    author: "Laura P.",
  },
];

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

function LandingPage() {
  useReveal();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Toaster position="top-center" />
      <Hero />
      <About />
      <Services />
      <BookSession />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* -------------------- HERO -------------------- */
function AuroraBlobs({ variant = "hero" }: { variant?: "hero" | "contact" }) {
  const isContact = variant === "contact";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full blur-3xl animate-float-blob ${
          isContact ? "opacity-40" : "opacity-70"
        }`}
        style={{ background: "radial-gradient(circle, oklch(0.55 0.18 305 / 0.85), transparent 60%)" }}
      />
      <div
        className="absolute top-1/3 -right-24 h-[560px] w-[560px] rounded-full blur-3xl animate-float-blob-alt opacity-60"
        style={{ background: "radial-gradient(circle, oklch(0.83 0.13 40 / 0.7), transparent 60%)" }}
      />
      <div
        className="absolute bottom-[-160px] left-1/3 h-[480px] w-[480px] rounded-full blur-3xl animate-float-blob opacity-60"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.12 340 / 0.7), transparent 60%)",
          animationDelay: "-6s",
        }}
      />
    </div>
  );
}

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 14 + Math.random() * 12,
        size: 3 + Math.random() * 5,
      })),
    [],
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4 py-24 text-center animate-gradient"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.32 0.11 300) 0%, oklch(0.5 0.16 320) 40%, oklch(0.82 0.11 40) 100%)",
      }}
    >
      <AuroraBlobs />
      <Particles />

      {/* Concentric rings */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/10 animate-spin-slow"
            style={{
              width: `${360 + i * 180}px`,
              height: `${360 + i * 180}px`,
              animationDuration: `${80 + i * 40}s`,
              animationDirection: i % 2 ? "reverse" : "normal",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl animate-fade-up">
        {/* Logo with breathing */}
        <div className="mx-auto mb-10 flex h-44 w-44 items-center justify-center rounded-full glass animate-breathe sm:h-56 sm:w-56">
          <img
            src={logo}
            alt="Logo Vortex de Sabiduría"
            width={512}
            height={512}
            className="h-40 w-40 sm:h-52 sm:w-52 object-contain"
          />
        </div>

        <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/80">
          Vortex de Sabiduría · Terapéuticos Naturales
        </p>
        <h1 className="font-serif text-5xl leading-[1.05] text-white sm:text-7xl md:text-8xl">
          Stella <em className="font-normal italic text-white/90">Cante</em> Molina
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg text-white/85 sm:text-xl">
          Encuentra la conexión que necesitas.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#agenda"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-cta px-10 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Agenda tu sesión</span>
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-full glass px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            Explorar servicios
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre-mi"
        aria-label="Bajar"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce-soft"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  return (
    <section id="sobre-mi" className="relative px-4 py-28">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <div className="reveal relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-lavender/50 via-blush/40 to-peach/50 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={stellaPortrait}
              alt="Retrato ilustrado de Stella Cante Molina"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="reveal">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary/70">Sobre mí</p>
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Un espacio para <span className="text-gradient italic">reencontrarte</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Soy Stella Cante Molina, terapeuta holística en Bogotá. Desde hace más de una
            década acompaño procesos de sanación integrando la sabiduría del tarot, la
            biodescodificación, las constelaciones familiares y la astrología.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Mi propuesta es un encuentro cálido, respetuoso y profundo — un espacio para
            escucharte, comprenderte y volver a habitarte.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Bogotá", "Presencial · Online", "+10 años de práctica"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SERVICES -------------------- */
function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden px-4 py-28"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.97 0.02 320) 0%, oklch(0.94 0.05 40) 100%)",
      }}
    >
      <AuroraBlobs variant="contact" />
      <div className="relative mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary/70">Servicios</p>
          <h2 className="text-4xl leading-tight sm:text-6xl">
            Terapias para el <span className="text-gradient italic">alma</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Seis caminos para escucharte, comprenderte y florecer.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="reveal group relative rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cta text-white shadow-soft transition-transform group-hover:scale-110 group-hover:rotate-6">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, oklch(0.83 0.11 40 / 0.15), transparent 60%)",
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- BOOK SESSION -------------------- */
function BookSession() {
  return (
    <section id="agenda" className="relative px-4 py-28">
      <div className="mx-auto max-w-4xl">
        <div className="reveal gradient-border-inner shadow-glow">
          <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-background p-10 text-center sm:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl animate-float-blob"
              style={{ background: "radial-gradient(circle, oklch(0.83 0.11 40 / 0.35), transparent 60%)" }}
            />
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary/70">
              Sesión destacada
            </p>
            <h2 className="text-4xl leading-tight sm:text-6xl">
              Constelación <span className="text-gradient italic">+</span>
              <br className="sm:hidden" /> Tarot Terapéutico
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Una experiencia profunda que une la mirada sistémica con la sabiduría
              simbólica del tarot para acompañar tu proceso.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-primary/20 bg-secondary/50 px-5 py-2 text-sm font-medium text-primary">
                Presencial / Online
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/20 px-5 py-2 text-sm font-medium text-accent-foreground">
                <MapPin className="h-3.5 w-3.5" /> En Bogotá
              </span>
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- TESTIMONIALS -------------------- */
function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count]);

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <section
      className="relative overflow-hidden px-4 py-28"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.96 0.03 40) 0%, oklch(0.95 0.04 320) 100%)",
      }}
    >
      <AuroraBlobs variant="contact" />
      <div className="reveal relative mx-auto max-w-3xl text-center">
        <Quote
          aria-hidden
          className="mx-auto h-14 w-14 text-primary/30"
          strokeWidth={1.2}
        />

        <div className="relative mt-6 min-h-[220px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-all duration-700 ease-out"
              style={{
                opacity: i === index ? 1 : 0,
                transform: `translateY(${i === index ? 0 : 12}px)`,
                pointerEvents: i === index ? "auto" : "none",
              }}
            >
              <blockquote className="font-serif text-2xl italic leading-snug text-foreground/85 sm:text-3xl">
                “{t.quote}”
              </blockquote>
              <p className="mt-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                — {t.author}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Anterior"
            onClick={() => go(-1)}
            className="grid h-10 w-10 place-items-center rounded-full glass text-primary transition-transform hover:scale-110"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Testimonio ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-cta" : "w-2 bg-primary/25"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Siguiente"
            onClick={() => go(1)}
            className="grid h-10 w-10 place-items-center rounded-full glass text-primary transition-transform hover:scale-110"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */
function Contact() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") || "").trim();
    const correo = String(data.get("correo") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();

    if (!nombre || !correo || !mensaje) {
      toast.error("Por favor completa todos los campos.");
      setLoading(false);
      return;
    }
    if (nombre.length > 100 || correo.length > 150 || mensaje.length > 1000) {
      toast.error("Alguno de los campos excede el largo permitido.");
      setLoading(false);
      return;
    }

    const text = encodeURIComponent(
      `Hola Stella, soy ${nombre} (${correo}).\n\n${mensaje}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    toast.success("¡Gracias! Te redirigimos a WhatsApp para completar tu mensaje.");
    form.reset();
    setLoading(false);
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden px-4 py-28 text-white animate-gradient"
      style={{
        background:
          "linear-gradient(315deg, oklch(0.32 0.11 300) 0%, oklch(0.5 0.16 320) 45%, oklch(0.82 0.11 40) 100%)",
      }}
    >
      <AuroraBlobs />
      <div className="relative mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/70">Contacto</p>
          <h2 className="text-4xl leading-tight text-white sm:text-6xl">
            Hablemos <span className="italic text-white/85">contigo</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/85">
            Escríbeme para agendar tu sesión o resolver cualquier duda. Con gusto te
            acompañaré en tu proceso.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" /> +57 313 438 5783
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="reveal space-y-4 rounded-3xl glass-dark p-8 text-white shadow-glow"
        >
          {[
            { id: "nombre", label: "Nombre", type: "text", max: 100, placeholder: "Tu nombre" },
            { id: "correo", label: "Correo", type: "email", max: 150, placeholder: "tu@correo.com" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="mb-1.5 block text-xs uppercase tracking-widest text-white/70">
                {f.label}
              </label>
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                maxLength={f.max}
                required
                placeholder={f.placeholder}
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur transition-colors focus:border-white/60 focus:bg-white/15"
              />
            </div>
          ))}
          <div>
            <label htmlFor="mensaje" className="mb-1.5 block text-xs uppercase tracking-widest text-white/70">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              maxLength={1000}
              required
              placeholder="Cuéntame en qué puedo acompañarte…"
              className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur transition-colors focus:border-white/60 focus:bg-white/15"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-plum shadow-soft transition-transform hover:-translate-y-0.5 hover:scale-[1.02] disabled:opacity-70"
          >
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            {loading ? "Enviando…" : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Vortex de Sabiduría" width={56} height={56} className="h-14 w-14" loading="lazy" />
          <div>
            <p className="font-serif text-xl">Vortex de Sabiduría</p>
            <p className="text-xs text-muted-foreground">Terapéuticos Naturales · Bogotá</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {[
            { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
            { Icon: MessageCircle, href: WHATSAPP_LINK, label: "WhatsApp" },
          ].map(({ Icon, href, label }) => (
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

        <Link
          to="/descargables"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs tracking-[0.25em] text-primary transition hover:bg-cta hover:text-white"
        >
          <Download className="h-3.5 w-3.5" />
          GUÍA GRATUITA
        </Link>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Stella Cante Molina
        </p>
      </div>
    </footer>
  );
}

/* -------------------- FLOATING WHATSAPP -------------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}
