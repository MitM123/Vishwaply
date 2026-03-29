import { useMemo, useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import {
  X,
  ArrowRight,
  HardHat,
  Layers,
  Maximize2,
  Ruler,
  Shield,
} from "lucide-react";
import newfalcon from "../assets/newfalcon.jpg";
import fwschool from "../assets/fwschool.jpg";
import plyTexture from "../assets/Ply.jpeg";
import businessHero from "../assets/business_hero.png";

type GalleryCategory = "all" | "projects" | "site" | "interiors";

type GalleryItem = {
  id: string;
  src: string;
  title: string;
  subtitle?: string;
  category: Exclude<GalleryCategory, "all">;
};

/** Curated for ply / hardware / construction — high-quality Unsplash + your project photos */
const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    src: newfalcon,
    title: "New Falcon residence",
    subtitle: "Minimalist interior · Variyav",
    category: "projects",
  },
  {
    id: "2",
    src: fwschool,
    title: "Flower Valley School",
    subtitle: "Education sector · Variyav",
    category: "projects",
  },
  {
    id: "m1",
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=85",
    title: "Stacked timber & boards",
    subtitle: "Material readiness",
    category: "site",
  },
  {
    id: "m2",
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85",
    title: "Active construction site",
    subtitle: "Structural progress",
    category: "site",
  },
  {
    id: "m3",
    src: plyTexture,
    title: "Premium BWP plywood",
    subtitle: "Grades we stock",
    category: "site",
  },
  {
    id: "m4",
    src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1600&q=85",
    title: "Lumber & stockyard",
    subtitle: "Volume supply",
    category: "site",
  },
  {
    id: "m5",
    src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1600&q=85",
    title: "Workshop & precision cuts",
    subtitle: "Joinery detail",
    category: "site",
  },
  {
    id: "i1",
    src: businessHero,
    title: "Feature wall & veneer",
    subtitle: "Statement finish",
    category: "interiors",
  },
  {
    id: "i2",
    src: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=1600&q=85",
    title: "Kitchen woodwork",
    subtitle: "Laminates & counters",
    category: "interiors",
  },
  {
    id: "i3",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    title: "Residential facade",
    subtitle: "Complete build aesthetic",
    category: "interiors",
  },
  {
    id: "i4",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    title: "Open living volume",
    subtitle: "Flooring & ceiling lines",
    category: "interiors",
  },
  {
    id: "i5",
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
    title: "Bedroom veneers",
    subtitle: "Soft finishes",
    category: "interiors",
  },
  {
    id: "i6",
    src: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=85",
    title: "Natural timber grain",
    subtitle: "Material texture",
    category: "interiors",
  },
];

const HERO_BG =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=85";

const FILTERS: { key: GalleryCategory; label: string; hint: string }[] = [
  { key: "all", label: "All", hint: "Everything" },
  { key: "projects", label: "Our projects", hint: "Real sites" },
  { key: "site", label: "Build & materials", hint: "Site & stock" },
  { key: "interiors", label: "Interiors", hint: "Finished spaces" },
];

const categoryLabel: Record<Exclude<GalleryCategory, "all">, string> = {
  projects: "Project",
  site: "Build & materials",
  interiors: "Interior",
};

const Gallery = () => {
  const [filter, setFilter] = useState<GalleryCategory>("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const visible = useMemo(() => {
    if (filter === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen w-full bg-[#FAF9F6] font-Cabin text-[#2C2C2C] pb-24 antialiased">
      {/* Hero — construction-forward, trust-led */}
      <section className="relative min-h-[min(52vh,560px)] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt=""
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1410]/95 via-[#2d1f18]/88 to-[#3E2723]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[min(52vh,560px)] max-w-7xl flex-col justify-end px-6 pb-12 pt-28 sm:px-10 sm:pb-14 sm:pt-32 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-Cinzel text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E6C9A8] backdrop-blur-md">
              <HardHat className="h-4 w-4" aria-hidden />
              Gallery
            </div>
            <h1 className="font-Cinzel text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Construction-grade materials.
              <span className="block bg-gradient-to-r from-[#E6C9A8] to-[#c4a574] bg-clip-text text-transparent">
                {" "}
                Gallery-ready results.
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
              Real project photos, on-site builds, timber &amp; ply — so clients see exactly the kind of supply and
              finish Vishwaply delivers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/our-projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#8B5E3C] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#6D4C3D]"
              >
                Case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/18"
              >
                Get a quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip — visibility for clients */}
      <section className="relative z-20 border-b border-[#8B5E3C]/10 bg-[#FFFCF9] shadow-sm">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-3 sm:px-10 md:px-12 lg:px-16">
          {[
            { Icon: Shield, t: "Quality-checked materials", d: "Ply, laminates & hardware" },
            { Icon: Ruler, t: "Scale-ready supply", d: "Residential to commercial" },
            { Icon: Layers, t: "End-to-end support", d: "Selection to site" },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#8B5E3C]/12 text-[#8B5E3C]">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-Cinzel text-sm font-semibold text-[#2C2C2C]">{t}</p>
                <p className="mt-0.5 text-sm text-gray-600">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filters + grid */}
      <section className="mx-auto max-w-7xl px-6 pt-12 sm:px-10 md:px-12 lg:px-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-Cinzel text-2xl font-bold text-[#2C2C2C] sm:text-3xl">Browse the work</h2>
            <p className="mt-2 max-w-xl text-gray-600">
              Filter by real projects, construction &amp; material shots, or finished interiors.
            </p>
          </div>
        </div>

        <motion.div
          className="mb-10 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {FILTERS.map(({ key, label, hint }) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`group flex flex-col items-start rounded-2xl border px-4 py-3 text-left transition-all duration-300 sm:min-w-[140px] ${
                filter === key
                  ? "border-[#8B5E3C] bg-[#8B5E3C] text-white shadow-lg shadow-[#8B5E3C]/25"
                  : "border-gray-200 bg-white text-[#2C2C2C] hover:border-[#E6C9A8] hover:bg-[#FFFCF8]"
              }`}
            >
              <span className="font-Cinzel text-sm font-bold">{label}</span>
              <span
                className={`mt-0.5 text-[11px] ${filter === key ? "text-white/80" : "text-gray-500"}`}
              >
                {hint}
              </span>
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item, index) => {
              const isLarge =
                filter === "all" && index === 0
                  ? "sm:col-span-2 lg:col-span-2"
                  : "";
              return (
                <motion.button
                  type="button"
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  onClick={() => setLightbox(item)}
                  className={`group relative w-full overflow-hidden rounded-2xl bg-[#2C2C2C] text-left shadow-[0_16px_48px_-20px_rgba(62,39,35,0.35)] ring-1 ring-black/5 transition-all duration-300 hover:shadow-[0_24px_56px_-20px_rgba(139,94,60,0.4)] hover:ring-2 hover:ring-[#E6C9A8]/80 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8B5E3C] ${isLarge}`}
                >
                  <div
                    className={`relative w-full overflow-hidden ${isLarge ? "aspect-[21/9] sm:min-h-[280px]" : "aspect-[4/3]"}`}
                  >
                    <img
                      src={item.src}
                      alt=""
                      loading={index < 4 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/95 via-[#1a1410]/35 to-transparent opacity-90 transition duration-300 group-hover:via-[#1a1410]/50" />
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span className="rounded-full bg-white/95 px-3 py-1 font-Cabin text-[10px] font-bold uppercase tracking-wider text-[#8B5E3C] shadow-sm">
                        {categoryLabel[item.category]}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <p className="font-Cinzel text-lg font-bold leading-snug text-white sm:text-xl">
                        {item.title}
                      </p>
                      {item.subtitle && (
                        <p className="mt-1.5 text-sm text-white/75">{item.subtitle}</p>
                      )}
                    </div>
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" aria-hidden />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f0c0a]/92 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged gallery image"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative w-full max-w-5xl"
              onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute -right-1 -top-1 z-10 rounded-full bg-[#8B5E3C] p-2.5 text-white shadow-lg transition hover:bg-[#6D4C3D] sm:right-0 sm:top-0 sm:translate-x-1/2 sm:-translate-y-1/2"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="overflow-hidden rounded-2xl border-4 border-[#E6C9A8]/40 bg-[#1a1410] shadow-2xl">
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="max-h-[min(78vh,880px)] w-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-Cinzel text-lg font-semibold text-white">{lightbox.title}</p>
                {lightbox.subtitle && (
                  <p className="mt-1 text-sm text-white/70">{lightbox.subtitle}</p>
                )}
                <p className="mt-2 text-xs uppercase tracking-wider text-[#E6C9A8]/90">
                  {categoryLabel[lightbox.category]}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="mx-auto mt-20 max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16">
        <motion.div
          className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#8B5E3C] via-[#7a5235] to-[#5c3d2e] px-8 py-12 text-center text-white shadow-2xl md:px-14 md:py-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-Cinzel text-2xl font-bold md:text-3xl">Want this level of clarity on your site?</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/90">
            Share your layout or BOQ — we&apos;ll match ply, laminates, and hardware to your timeline and budget.
          </p>
          <Link
            to="/contact-us"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E6C9A8] px-8 py-3.5 text-sm font-bold text-[#2C2C2C] shadow-lg transition hover:bg-white"
          >
            Talk to our team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Gallery;
