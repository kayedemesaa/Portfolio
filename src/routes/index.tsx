import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  Atom,
  FileCode2,
  Wind,
  Waypoints,
  Code2,
  Server,
  Cable,
  Database,
  ShieldCheck,
  Layers,
  Figma,
  GitBranch,
  Zap,
  FileText,
  Sheet,
  Presentation,
  Video,
  Globe,
  Palette,
  LayoutTemplate,
  Bot,
  Sparkles,
  Wand2,
  Gem,
  Rocket,
  Bolt,
  Trello,
  type LucideIcon,
} from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import wiseOptionsImage from "@/assets/wise-options.png";
import wiseOptionsAdminImage from "@/assets/wise-options-admin.png";
import hydraImage from "@/assets/hydra.png";
import freshspaceImage from "@/assets/freshspace.png";
import { contactInfo, whatsappUrl, WhatsAppIcon } from "@/lib/contact";
import { ProjectCover } from "@/components/project-cover";
import { useEffect, useRef, useState, type RefObject } from "react";

function useScrollAnimation(threshold = 0.18) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [fromBelow, setFromBelow] = useState(true);
  const lastScrollY = useRef(0);
  const scrollDir = useRef<"down" | "up">("down");

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastScrollY.current) < 1) return;
      scrollDir.current = y > lastScrollY.current ? "down" : "up";
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFromBelow(scrollDir.current === "down");
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible, fromBelow] as const;
}

function scrollRevealClass(isVisible: boolean, fromBelow: boolean) {
  if (isVisible) {
    return "opacity-100 translate-y-0 scale-100";
  }
  return fromBelow
    ? "opacity-0 translate-y-14 scale-[0.98]"
    : "opacity-0 -translate-y-14 scale-[0.98]";
}

export const Route = createFileRoute("/")({
  component: Index,
});

const skillGroups: {
  title: string;
  items: { name: string; icon: LucideIcon; color: string }[];
}[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: Atom, color: "text-sky-400" },
      { name: "TypeScript", icon: FileCode2, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: Wind, color: "text-cyan-400" },
      { name: "TanStack Router", icon: Waypoints, color: "text-emerald-400" },
      { name: "HTML/CSS", icon: Code2, color: "text-orange-400" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: Server, color: "text-green-400" },
      { name: "REST APIs", icon: Cable, color: "text-violet-400" },
      { name: "Databases", icon: Database, color: "text-amber-400" },
      { name: "Authentication", icon: ShieldCheck, color: "text-rose-400" },
    ],
  },
  {
    title: "Design & Tools",
    items: [
      { name: "UI/UX", icon: Layers, color: "text-pink-400" },
      { name: "Figma", icon: Figma, color: "text-fuchsia-400" },
      { name: "Canva", icon: Palette, color: "text-cyan-400" },
      { name: "Webflow", icon: LayoutTemplate, color: "text-indigo-400" },
      { name: "WordPress", icon: Globe, color: "text-blue-400" },
      { name: "Git", icon: GitBranch, color: "text-red-400" },
      { name: "Vite", icon: Zap, color: "text-yellow-400" },
    ],
  },
  {
    title: "AI & Tools",
    items: [
      { name: "ChatGPT", icon: Bot, color: "text-emerald-400" },
      { name: "Claude", icon: Sparkles, color: "text-orange-400" },
      { name: "Gemini", icon: Gem, color: "text-blue-400" },
      { name: "Cursor", icon: Wand2, color: "text-violet-400" },
      { name: "Lovable", icon: Rocket, color: "text-pink-400" },
      { name: "Bolt", icon: Bolt, color: "text-yellow-400" },
    ],
  },
  {
    title: "Productivity",
    items: [
      { name: "Google Docs", icon: FileText, color: "text-blue-400" },
      { name: "Google Sheets", icon: Sheet, color: "text-green-500" },
      { name: "Microsoft Word", icon: FileText, color: "text-sky-400" },
      { name: "Microsoft Excel", icon: Sheet, color: "text-emerald-500" },
      { name: "PowerPoint", icon: Presentation, color: "text-orange-400" },
      { name: "CapCut", icon: Video, color: "text-rose-400" },
      { name: "Trello", icon: Trello, color: "text-sky-500" },
    ],
  },
];

const featuredProjects = [
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
    title: "freshSpace Web Design",
    description: "A professional cleaning services website for FreshSpace Cleaning Co. with booking CTAs, trust badges, and a conversion-focused landing page.",
    stack: ["Figma", "UI/UX", "Prototype"],
    accent: "from-sky-400/35 via-blue-700/15 to-transparent",
    url: "https://www.figma.com/proto/jyvvTMcYkAZuV3sIBdwXN2/FreshSpace?node-id=15-20&p=f&t=gHrHiQprRzY6Lugu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    images: [freshspaceImage],
    imageFit: "cover" as const,
  },
];

function Index() {
  const [heroRef, heroVisible, heroFromBelow] = useScrollAnimation(0.1);
  const [aboutRef, aboutVisible, aboutFromBelow] = useScrollAnimation();
  const [skillsRef, skillsVisible, skillsFromBelow] = useScrollAnimation();
  const [projectsRef, projectsVisible, projectsFromBelow] = useScrollAnimation();
  const [contactRef, contactVisible, contactFromBelow] = useScrollAnimation();

  return (
    <div className="page-atmosphere relative min-h-screen overflow-x-hidden text-foreground">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-16 pt-6 sm:pt-8">
        <header className="flex items-center justify-between gap-4">
          <nav className="flex flex-wrap items-center gap-6 sm:gap-10 text-sm ml-0 sm:ml-4 lg:ml-12">
            <a href="/" className="opacity-100 underline underline-offset-8 decoration-1 transition-opacity hover:opacity-100">
              Home
            </a>
            <a href="/about" className="opacity-70 transition-opacity hover:opacity-100">
              About
            </a>
            <a href="/projects" className="opacity-70 transition-opacity hover:opacity-100">
              Projects
            </a>
            <a href="/contact" className="opacity-70 transition-opacity hover:opacity-100">
              Contact
            </a>
          </nav>

          <a
            href="/"
            className="hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-sm font-medium tracking-wider hover:bg-foreground hover:text-background transition-colors"
            aria-label="KDM home"
          >
            KDM
          </a>

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

        <main
          ref={heroRef as RefObject<HTMLElement>}
          className="relative mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 min-h-[calc(100vh-7rem)] pb-16"
        >
          <div
            className={`relative flex justify-center lg:justify-start sm:ml-4 lg:ml-12 transition-all duration-1000 ease-out ${scrollRevealClass(heroVisible, heroFromBelow)}`}
            style={{ transitionDelay: heroVisible ? "80ms" : "0ms" }}
          >
            <div className="absolute -inset-6 rounded-[40%] bg-gradient-to-br from-cyan-400/15 via-transparent to-orange-400/15 blur-2xl pointer-events-none" />
            <img
              src={heroPortrait}
              alt="Portrait of the developer with a colorful paint-splash double-exposure effect"
              width={1024}
              height={1024}
              className="relative w-full max-w-[560px] h-auto select-none pointer-events-none animate-soft-float"
            />

            <div className="absolute -bottom-2 left-0 lg:-left-4 h-44 w-44 md:h-48 md:w-48">
              <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]">
                <defs>
                  <path
                    id="circlePath"
                    d="M 100,100 m -88,0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0"
                  />
                </defs>
                <text className="fill-foreground text-[9.5px] tracking-[0.12em] uppercase">
                  <textPath
                    href="#circlePath"
                    textLength={553}
                    lengthAdjust="spacingAndGlyphs"
                  >
                    Web Developer • UI/UX Designer • Marketing Automation Specialist • {" "}
                  </textPath>
                </text>
              </svg>
              <a
                href="#contact"
                className="absolute inset-0 m-auto h-20 w-20 md:h-24 md:w-24 rounded-full bg-background/90 border border-white/30 flex items-center justify-center text-sm md:text-base font-semibold hover:bg-foreground hover:text-background transition-colors"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ease-out ${scrollRevealClass(heroVisible, heroFromBelow)}`}
            style={{ transitionDelay: heroVisible ? "180ms" : "0ms" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Turning vision into reality with code and design.
            </h1>
            <p className="mt-6 max-w-lg text-sm md:text-base text-muted-foreground leading-relaxed">
            Creating thoughtful, user-centered digital experiences through UI/UX design and front-end development. From website interfaces and landing pages to responsive web applications, I combine creative design, clean code, and modern technologies to bring ideas to life.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="https://drive.google.com/file/d/1RtY4FZP4Gk_hw7RUXBNopeinI6ddCMOX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-cyan-300 transition-colors"
              >
                Resume <ArrowUpRight size={16} />
              </a>
              <a
                href="/projects"
                className="text-sm underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                See projects
              </a>
            </div>
          </div>
        </main>

        {/* About */}
        <section
          ref={aboutRef as RefObject<HTMLElement>}
          id="about"
          className={`section-band -mx-6 sm:-mx-8 lg:-mx-16 px-6 sm:px-8 lg:px-16 py-20 transition-all duration-1000 ease-out ${scrollRevealClass(aboutVisible, aboutFromBelow)}`}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-cyan-300/80 mb-3">About</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
          <div className="max-w-3xl space-y-4">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I create websites, landing pages, funnels, and user experiences that are modern,
              intuitive, and built with purpose.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              From UI/UX design and responsive websites to funnels and workflow automation, I turn
              ideas into digital experiences that look good, work smoothly, and make things easier.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I&apos;m also investing more of my learning into AI and emerging technologies,
              constantly finding new ways to improve how I build, solve problems, and ship better
              digital experiences.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section
          ref={skillsRef as RefObject<HTMLElement>}
          id="skills"
          className={`py-20 transition-all duration-1000 ease-out ${scrollRevealClass(skillsVisible, skillsFromBelow)}`}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-orange-300/80 mb-3">Toolkit</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Tools and technologies I use to design, build, ship web products, and stay productive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillGroups.map((group, groupIndex) => (
              <div
                key={group.title}
                className={`transition-all duration-700 ease-out ${scrollRevealClass(skillsVisible, skillsFromBelow)}`}
                style={{ transitionDelay: skillsVisible ? `${groupIndex * 120}ms` : "0ms" }}
              >
                <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map(({ name, icon: Icon, color }) => (
                    <li
                      key={name}
                      className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.03] px-3 py-1.5 text-sm hover:border-white/40 hover:bg-white/[0.07] hover:-translate-y-0.5 transition-all"
                    >
                      <Icon size={14} className={`shrink-0 ${color}`} aria-hidden />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          ref={projectsRef as RefObject<HTMLElement>}
          id="projects"
          className={`section-band -mx-6 sm:-mx-8 lg:-mx-16 px-6 sm:px-8 lg:px-16 py-20 transition-all duration-1000 ease-out ${scrollRevealClass(projectsVisible, projectsFromBelow)}`}
        >
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-emerald-300/80 mb-3">Selected work</p>
              <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
            </div>
            <a
              href="/projects"
              className="text-sm inline-flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity"
            >
              View all <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <a
                key={project.title}
                href={project.url}
                target={project.url.startsWith("http") ? "_blank" : undefined}
                rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group block transition-all duration-700 ease-out ${scrollRevealClass(projectsVisible, projectsFromBelow)}`}
                style={{ transitionDelay: projectsVisible ? `${index * 150}ms` : "0ms" }}
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
        </section>

        {/* Contact */}
        <section
          ref={contactRef as RefObject<HTMLElement>}
          id="contact"
          className={`py-24 transition-all duration-1000 ease-out ${scrollRevealClass(contactVisible, contactFromBelow)}`}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-rose-300/80 mb-3">Get in touch</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-tight">
            Have a project in mind? Let&apos;s build something sharp.
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl text-base md:text-lg">
            Open to freelance work, collaborations, and full-time roles. Reach out anytime.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-cyan-300 transition-colors mb-10"
          >
            Contact me <ArrowUpRight size={16} />
          </a>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-6 sm:gap-10">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-3 text-lg md:text-xl font-medium hover:text-cyan-300 transition-colors"
            >
              <Mail size={22} className="text-cyan-300" />
              {contactInfo.email}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-lg md:text-xl font-medium hover:text-[#25D366] transition-colors"
            >
              <WhatsAppIcon size={22} />
              {contactInfo.whatsappDisplay}
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={20} className="text-orange-300" />
              <span>{contactInfo.location}</span>
            </div>
          </div>
        </section>
      </div>

      <footer className="mx-auto max-w-screen-2xl py-8 border-t border-white/10 px-6 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Kaye De Mesa. All rights reserved.</p>
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
