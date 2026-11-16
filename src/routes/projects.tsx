import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Facebook } from "lucide-react";
import movietixImage from "@/assets/movietix.png";
import bobaBunnyImage from "@/assets/boba-bunny.png";
import serviceBookingImage from "@/assets/service-booking.png";
import wiseOptionsImage from "@/assets/wise-options.png";
import wiseOptionsAdminImage from "@/assets/wise-options-admin.png";
import hydraImage from "@/assets/hydra.png";
import websiteDesignImage from "@/assets/website-design.jpg";
import kachavaImage from "@/assets/kachava.png";
import { ProjectCover } from "@/components/project-cover";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

const projects = [
  {
    title: "Hydra",
    description: "A smart reusable bottle landing page with clean product storytelling, features, and conversion-focused CTAs.",
    stack: ["React", "Tailwind"],
    accent: "from-zinc-400/40 via-neutral-600/20 to-transparent",
    url: "https://hydra-ashy.vercel.app/",
    images: [hydraImage],
    imageFit: "contain" as const,
  },
  {
    title: "The Wise Options",
    description: "A full-service digital marketing agency site built to turn traffic into pipeline and pipeline into revenue.",
    stack: ["React", "Tailwind", "Supabase"],
    accent: "from-teal-400/40 via-cyan-600/20 to-transparent",
    url: "https://wiseoptions.vercel.app/",
    images: [wiseOptionsImage, wiseOptionsAdminImage],
    imageFit: "contain" as const,
  },
  {
    title: "MovieTix",
    description: "A movie ticketing app prototype with seat selection, showtimes, and a polished booking flow.",
    stack: ["Figma", "UI/UX", "Prototype"],
    accent: "from-amber-400/35 via-orange-600/15 to-transparent",
    url: "https://www.figma.com/proto/CzL5cBrCZg09ncE9eou76w/MovieTix?node-id=2-4&t=brPqHQWB45lhxRV6-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A4&show-proto-sidebar=1",
    images: [movietixImage],
  },
  {
    title: "Boba Bunny",
    description: "A playful boba shop app prototype with menu browsing, customization, and a cute brand experience.",
    stack: ["Figma", "UI/UX", "Prototype"],
    accent: "from-pink-400/35 via-fuchsia-600/15 to-transparent",
    url: "https://www.figma.com/proto/HCgULQ27YF5gh7lfFo6AXv/bobabunny?node-id=3-26&p=f&t=rvHqSksJbP2vHnys-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4&show-proto-sidebar=1",
    images: [bobaBunnyImage],
  },
  {
    title: "Service Booking App",
    description: "A service booking prototype with emergency requests, job tracking, and technician status updates.",
    stack: ["Figma", "UI/UX", "Prototype"],
    accent: "from-lime-400/35 via-green-700/15 to-transparent",
    url: "https://www.figma.com/proto/CN5l65E2d2766BJjk8Iynv/Service-Booking-App?node-id=72-277&t=GxGBSbylAYs8NJKw-1&starting-point-node-id=72%3A276",
    images: [serviceBookingImage],
  },
  {
    title: "Website Design",
    description: "A collection of modern website designs with clean layouts, intuitive user experiences, and conversion-focused pages built for different brands and businesses.",
    stack: ["FIGMA", "UI/UX", "MOCKUP"],
    accent: "from-sky-400/35 via-teal-700/15 to-transparent",
    url: "https://drive.google.com/drive/folders/12jBB1dYDM0Q3WPeOrvkEFjTsTUPk54S6?usp=sharing",
    images: [websiteDesignImage],
    imageFit: "cover" as const,
  },
  {
    title: "Kachava website design",
    description: "A KA'CHAVA website redesign with product storytelling, flavor selection, and conversion-focused wellness shopping.",
    stack: ["FIGmA", "UI/UX", "PROTOTYPE"],
    accent: "from-lime-400/30 via-emerald-800/20 to-transparent",
    url: "https://www.figma.com/proto/F1eWYC4cLTj6kjKkhWcFUD/Kaye?node-id=1-5443&t=NEuLPWIxmr94ehPJ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A5443",
    images: [kachavaImage],
    imageFit: "cover" as const,
  },
];

function Projects() {
  return (
    <div className="page-atmosphere min-h-screen text-foreground">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-16 pt-6 sm:pt-8">
        <header className="flex items-center justify-between gap-4">
          <nav className="flex flex-wrap items-center gap-6 sm:gap-10 text-sm sm:ml-4 lg:ml-12">
            <a href="/" className="opacity-70 transition-opacity hover:opacity-100">
              Home
            </a>
            <a href="/about" className="opacity-70 transition-opacity hover:opacity-100">
              About
            </a>
            <a
              href="/projects"
              className="opacity-100 underline underline-offset-8 decoration-1 transition-opacity hover:opacity-100"
            >
              Projects
            </a>
            <a href="/contact" className="opacity-70 transition-opacity hover:opacity-100">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-sm font-medium tracking-wider">
            KDM
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="Facebook" className="hover:text-[#1877F2] transition-colors">
              <Facebook size={18} fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors">
              <Github size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#0A66C2] transition-colors">
              <Linkedin size={18} fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" aria-label="Instagram" className="transition-transform hover:scale-110">
              <span className="block h-[18px] w-[18px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-fuchsia-600" />
            </a>
          </div>
        </header>

        <main className="py-20">
          <p className="text-xs tracking-[0.25em] uppercase text-emerald-300/80 mb-3">Selected work</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-10">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target={project.url.startsWith("http") ? "_blank" : undefined}
                rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <ProjectCover
                  images={project.images}
                  title={project.title}
                  accent={project.accent}
                  imageFit={"imageFit" in project ? project.imageFit : "cover"}
                  stack={project.stack}
                />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {project.description}
                </p>
                <span className="text-sm inline-flex items-center gap-1 opacity-80 group-hover:opacity-100 group-hover:gap-2 transition-all">
                  View project <ArrowUpRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </main>
      </div>

      <footer className="mx-auto max-w-screen-2xl py-8 border-t border-white/10 px-6 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 KDM. All rights reserved.</p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="Facebook" className="hover:text-[#1877F2] transition-colors">
              <Facebook size={18} fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors">
              <Github size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#0A66C2] transition-colors">
              <Linkedin size={18} fill="currentColor" strokeWidth={0} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
