import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
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
} from "lucide-react";
import logo from "@/assets/logo-vortex.png";
import heroBg from "@/assets/hero-bg.jpg";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const WHATSAPP_NUMBER = "573134385783";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola Stella, me gustaría agendar una sesión en Vortex de Sabiduría 🌙",
)}`;

const services = [
  { icon: Sparkles, title: "Tarot Terapéutico", desc: "Guía intuitiva a través del simbolismo para iluminar tu camino." },
  { icon: Moon, title: "Registros Akáshicos", desc: "Un diálogo con la memoria del alma para comprender tu propósito." },
  { icon: Heart, title: "Biodescodificación", desc: "Encuentra el origen emocional de lo que tu cuerpo expresa." },
  { icon: Users, title: "Terapias Individuales y Grupales", desc: "Acompañamiento cercano para procesos personales o compartidos." },
  { icon: Compass, title: "Constelaciones Familiares", desc: "Sanación de los lazos y la herencia emocional del sistema familiar." },
  { icon: Star, title: "Astrología", desc: "Tu carta natal como mapa para reconocerte y florecer." },
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Toaster position="top-center" />
      <Hero />
      <Services />
      <BookSession />
      <Testimonial />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4 py-20 text-center"
      style={{
        backgroundImage: `linear-gradient(180deg, oklch(0.98 0.02 320 / 0.85), oklch(0.94 0.05 340 / 0.75)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[520px] w-[520px] rounded-full bg-secondary/30 blur-3xl animate-float" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl animate-fade-up">
        <div className="mx-auto mb-8 flex h-44 w-44 items-center justify-center rounded-full bg-white/70 backdrop-blur shadow-glow sm:h-56 sm:w-56">
          <img
            src={logo}
            alt="Logo Vortex de Sabiduría, Terapéuticos Naturales"
            width={512}
            height={512}
            className="h-40 w-40 sm:h-52 sm:w-52 object-contain animate-spin-slow"
          />
        </div>

        <p className="mb-2 text-sm uppercase tracking-[0.4em] text-mystic/80">
          Terapéuticos Naturales
        </p>
        <h1 className="text-4xl leading-tight sm:text-6xl">
          <span className="text-gradient font-semibold">Vortex de Sabiduría</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          Stella Cante Molina
        </p>
        <p className="mx-auto mt-6 max-w-xl font-serif text-2xl italic text-foreground/80 sm:text-3xl">
          "Encuentra la conexión que necesitas."
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#agenda"
            className="bg-cta inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Agenda tu sesión
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white/60 px-8 py-3 text-sm font-semibold text-primary backdrop-blur transition-colors hover:bg-white"
          >
            Conocer servicios
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="bg-soft px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-primary/70">Servicios</p>
          <h2 className="text-4xl sm:text-5xl">
            Terapias para el <span className="text-gradient">alma y el cuerpo</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Espacios seguros y amorosos para escucharte, comprenderte y florecer.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="reveal group relative rounded-3xl border border-border/60 bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/50 text-primary transition-colors group-hover:bg-accent/60 group-hover:text-accent-foreground">
                <Icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookSession() {
  return (
    <section id="agenda" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="reveal overflow-hidden rounded-[2rem] bg-cta p-1 shadow-glow">
          <div className="rounded-[calc(2rem-4px)] bg-background/95 p-8 sm:p-14 text-center backdrop-blur">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-primary/70">
              Sesión destacada
            </p>
            <h2 className="text-4xl sm:text-5xl">
              Constelación <span className="text-gradient">+</span> Tarot Terapéutico
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Una experiencia profunda que combina la mirada sistémica con la sabiduría
              simbólica del tarot para acompañarte en tu proceso.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-5">
                <Sparkles className="mx-auto h-6 w-6 text-primary" strokeWidth={1.5} />
                <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Modalidad</p>
                <p className="mt-1 font-medium">Constelación + Tarot</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <Users className="mx-auto h-6 w-6 text-primary" strokeWidth={1.5} />
                <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Formato</p>
                <p className="mt-1 font-medium">Presencial / Online</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <MapPin className="mx-auto h-6 w-6 text-primary" strokeWidth={1.5} />
                <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Ubicación</p>
                <p className="mt-1 font-medium">Bogotá, Colombia</p>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cta mt-10 inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Agenda por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="bg-soft px-4 py-24">
      <div className="reveal mx-auto max-w-3xl text-center">
        <Moon className="mx-auto h-10 w-10 text-primary/70" strokeWidth={1.2} />
        <blockquote className="mt-6 font-serif text-3xl italic leading-snug text-foreground/85 sm:text-4xl">
          "Cuando el alma habla, el cuerpo escucha. Aquí encontré un espacio para volver a mí."
        </blockquote>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          — Testimonio de una consultante
        </p>
      </div>
    </section>
  );
}

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
    <section id="contacto" className="px-4 py-24">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-primary/70">Contacto</p>
          <h2 className="text-4xl sm:text-5xl">
            Hablemos <span className="text-gradient">contigo</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Escríbeme para agendar tu sesión o resolver cualquier duda. Con gusto te
            acompañaré en tu proceso.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> +57 313 438 5783
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="reveal space-y-4 rounded-3xl border border-border bg-card p-8 shadow-soft"
        >
          <div>
            <label htmlFor="nombre" className="mb-1 block text-sm font-medium">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              maxLength={100}
              required
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="correo" className="mb-1 block text-sm font-medium">
              Correo
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              maxLength={150}
              required
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
              placeholder="tu@correo.com"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="mb-1 block text-sm font-medium">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              maxLength={1000}
              required
              className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
              placeholder="Cuéntame en qué puedo acompañarte…"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-cta inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-70"
          >
            <Send className="h-4 w-4" /> {loading ? "Enviando…" : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-soft px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Vortex de Sabiduría" width={48} height={48} className="h-12 w-12" loading="lazy" />
          <div>
            <p className="font-serif text-lg">Vortex de Sabiduría</p>
            <p className="text-xs text-muted-foreground">Terapéuticos Naturales · Bogotá</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary/60"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary/60"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary/60"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Stella Cante Molina
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}
