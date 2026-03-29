import { motion } from "framer-motion";
import { Link } from "react-router";
import newfalcon from "../assets/newfalcon.jpg";
import fwschool from "../assets/fwschool.jpg";
import { ArrowRight, ArrowUpRight, Award, Building2, Calendar, MapPin } from "lucide-react";

type Project = {
  id: string;
  title: string;
  tag: string;
  description: string;
  location: string;
  year: string;
  area: string;
  image?: string;
  status: "live" | "soon";
  imageSide: "left" | "right";
};

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "New Falcon",
    tag: "Minimalist residential",
    description:
      "Clean lines and calm palettes — simplicity and function with materials chosen for longevity and finish.",
    location: "Variyav",
    year: "2025",
    area: "24,300 sq.ft",
    image: newfalcon,
    status: "live",
    imageSide: "right",
  },
  {
    id: "2",
    title: "Flower Valley School",
    tag: "Education",
    description:
      "Bright, durable interiors built for daily use — natural tones, easy maintenance, and spaces that support learning.",
    location: "Variyav",
    year: "2024",
    area: "12,000 sq.ft",
    image: fwschool,
    status: "live",
    imageSide: "left",
  },
  {
    id: "3",
    title: "VidhyaDhish School",
    tag: "Upcoming",
    description:
      "A focused build for modern classrooms and circulation — ply, laminates, and hardware specified for heavy footfall.",
    location: "Mota Varachha",
    year: "2026",
    area: "8,000 sq.ft",
    status: "soon",
    imageSide: "right",
  },
  {
    id: "4",
    title: "OM Hospital",
    tag: "Healthcare",
    description:
      "Calm, hygienic surfaces and robust joinery for clinical and public zones — designed for clarity and comfort.",
    location: "Varachha",
    year: "2026",
    area: "9,000 sq.ft",
    status: "soon",
    imageSide: "left",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function ProjectImagePlaceholder({ title }: { title: string }) {
  return (
    <div className="relative flex h-full min-h-[280px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#8B5E3C]/15 bg-gradient-to-br from-[#E8DFD6] via-[#f5f0ea] to-[#E6C9A8]/35 p-8 text-center md:min-h-[380px]">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -12deg,
            #8B5E3C 0px,
            transparent 1px,
            transparent 20px
          )`,
        }}
      />
      <Building2 className="relative mb-4 h-14 w-14 text-[#8B5E3C]/50" strokeWidth={1.25} aria-hidden />
      <p className="relative font-Cinzel text-lg font-semibold text-[#2C2C2C]/80">Coming soon</p>
      <p className="relative mt-2 max-w-xs font-Cabin text-sm text-[#2C2C2C]/55">{title}</p>
    </div>
  );
}

/** Hero right column — numbers & metrics only (no photo). */
function HeroMetricsPanel() {
  return (
    <div className="relative w-full">
      <div className="absolute -right-2 -top-2 h-16 w-16 rounded-full border border-[#8B5E3C]/20" aria-hidden />
      <div className="absolute -bottom-3 left-8 h-px w-24 bg-gradient-to-r from-[#8B5E3C]/40 to-transparent" aria-hidden />

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="col-span-2 rounded-2xl border border-[#8B5E3C]/15 bg-white/90 p-6 shadow-[0_16px_40px_-20px_rgba(62,39,35,0.2)] sm:col-span-1 sm:p-8"
        >
          <p className="font-Cabin text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B5E3C]">Portfolio</p>
          <p className="mt-2 font-Cinzel text-6xl font-bold leading-none tracking-tight text-[#2C2C2C] sm:text-7xl">
            04
          </p>
          <p className="mt-3 font-Cabin text-sm text-[#4a4540]">landmark sites listed</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="rounded-2xl border border-[#8B5E3C]/15 bg-gradient-to-br from-[#8B5E3C] to-[#6D4C3D] p-5 text-white shadow-lg sm:p-6"
        >
          <p className="font-Cabin text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E6C9A8]/90">
            Footprint
          </p>
          <p className="mt-2 font-Cinzel text-4xl font-bold leading-none sm:text-5xl">53K+</p>
          <p className="mt-2 font-Cabin text-xs text-white/85">sq.ft combined scale</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.29 }}
          className="rounded-2xl border border-[#8B5E3C]/12 bg-[#F5F0EA] p-5 sm:p-6"
        >
          <p className="font-Cabin text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">Status</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-white px-3 py-1 font-Cabin text-xs font-bold text-[#2C2C2C] shadow-sm">
              2 live
            </span>
            <span className="rounded-full border border-[#8B5E3C]/25 bg-white/60 px-3 py-1 font-Cabin text-xs font-semibold text-[#6D4C3D]">
              2 upcoming
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="col-span-2 flex items-center justify-between gap-4 rounded-2xl border border-dashed border-[#8B5E3C]/25 bg-white/60 px-5 py-4 sm:px-6"
        >
          <div>
            <p className="font-Cabin text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">Since</p>
            <p className="font-Cinzel text-2xl font-semibold text-[#2C2C2C] sm:text-3xl">2023</p>
          </div>
          <div className="h-10 w-px bg-[#8B5E3C]/20" aria-hidden />
          <div className="text-right">
            <p className="font-Cabin text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">Region</p>
            <p className="font-Cabin text-sm font-semibold text-[#2C2C2C]">Surat &amp; vicinity</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const OurProjects = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FAF9F6] font-Cabin text-[#2C2C2C] pb-20 antialiased">
      {/* Hero — editorial split (not full-bleed; differs from Home / Gallery) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EDE6DD] via-[#F0EAE2] to-[#FAF9F6] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #8B5E3C 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#8B5E3C]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-tr-full bg-[#E6C9A8]/20" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="font-Cinzel text-[10px] font-semibold uppercase tracking-[0.5em] text-[#8B5E3C] sm:text-[11px]">
                  Index
                </span>
                <span className="h-px flex-1 max-w-[4rem] bg-gradient-to-r from-[#8B5E3C]/50 to-transparent sm:max-w-[6rem]" />
              </div>
              <h1 className="font-Cinzel text-[1.85rem] font-semibold leading-[1.2] tracking-tight text-[#2C2C2C] sm:text-4xl md:text-[2.65rem]">
                Built surfaces,
                <br />
                <span className="text-[#8B5E3C]">lasting detail.</span>
              </h1>
              <p className="mt-5 max-w-md font-Cabin text-base leading-relaxed text-[#4a4540] sm:text-lg">
                A catalogue of sites we&apos;ve supplied and finished — schools, homes, and commercial spaces across
                Surat.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#8B5E3C] bg-[#8B5E3C] px-6 py-3 font-Cabin text-sm font-semibold text-white shadow-md transition hover:bg-[#6D4C3D]"
                >
                  Browse gallery
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center rounded-full border-2 border-[#8B5E3C]/25 bg-white/70 px-6 py-3 font-Cabin text-sm font-semibold text-[#5c4033] backdrop-blur-sm transition hover:border-[#8B5E3C]/50"
                >
                  Request quote
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative lg:col-span-7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <HeroMetricsPanel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section title */}
      <div className="mx-auto mt-14 max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 border-b border-[#8B5E3C]/15 pb-8"
        >
          <h2 className="font-Cinzel text-2xl font-bold text-[#2C2C2C] sm:text-3xl md:text-4xl">
            All projects
          </h2>
          <p className="mt-2 max-w-2xl font-Cabin text-gray-600">
            Completed work and upcoming milestones — each listed with location, timeline, and scale.
          </p>
        </motion.div>

        <motion.div className="space-y-20 md:space-y-28" initial="hidden" animate="visible" variants={container}>
          {PROJECTS.map((project) => {
            const isRight = project.imageSide === "right";
            return (
              <motion.article
                key={project.id}
                variants={item}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                <div
                  className={`order-2 flex flex-col ${isRight ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#8B5E3C]/12 px-3 py-1 font-Cabin text-xs font-bold uppercase tracking-wide text-[#8B5E3C]">
                      {project.tag}
                    </span>
                    {project.status === "soon" && (
                      <span className="rounded-full border border-[#8B5E3C]/25 bg-white px-3 py-1 font-Cabin text-xs font-semibold text-[#6D4C3D]">
                        In progress
                      </span>
                    )}
                  </div>
                  <h3 className="font-Cinzel text-2xl font-bold text-[#2C2C2C] sm:text-3xl md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 font-Cabin text-gray-600 leading-relaxed">{project.description}</p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-2 text-[#8B5E3C]">
                        <MapPin className="h-4 w-4 shrink-0" />
                        <span className="font-Cabin text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          Location
                        </span>
                      </div>
                      <p className="mt-1 font-Cabin text-sm font-semibold text-[#2C2C2C]">{project.location}</p>
                    </div>
                    <div className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-2 text-[#8B5E3C]">
                        <Calendar className="h-4 w-4 shrink-0" />
                        <span className="font-Cabin text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          Timeline
                        </span>
                      </div>
                      <p className="mt-1 font-Cabin text-sm font-semibold text-[#2C2C2C]">{project.year}</p>
                    </div>
                    <div className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-2 text-[#8B5E3C]">
                        <Award className="h-4 w-4 shrink-0" />
                        <span className="font-Cabin text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          Area
                        </span>
                      </div>
                      <p className="mt-1 font-Cabin text-sm font-semibold text-[#2C2C2C]">{project.area}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center gap-2 rounded-full bg-[#8B5E3C] px-6 py-3 font-Cabin text-sm font-semibold text-white transition hover:bg-[#6D4C3D]"
                    >
                      Enquire about this
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/gallery"
                      className="inline-flex items-center gap-2 font-Cabin text-sm font-semibold text-[#8B5E3C] underline-offset-4 hover:underline"
                    >
                      See similar work
                    </Link>
                  </div>
                </div>

                <div
                  className={`order-1 ${isRight ? "lg:order-2" : "lg:order-1"}`}
                >
                  {project.image ? (
                    <div className="group relative overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgba(62,39,35,0.35)] ring-1 ring-black/5">
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#2C2C2C]/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                      <img
                        src={project.image}
                        alt=""
                        className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03] md:aspect-[5/4] md:min-h-[380px]"
                      />
                    </div>
                  ) : (
                    <ProjectImagePlaceholder title={project.title} />
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

     
    </div>
  );
};

export default OurProjects;
