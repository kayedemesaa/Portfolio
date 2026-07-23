import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Facebook } from "lucide-react";
import heroPortrait from "@/assets/profile.jpg";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="page-atmosphere min-h-screen text-foreground">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-16 pt-6 sm:pt-8">
        <header className="flex items-center justify-between gap-4">
          <nav className="flex flex-wrap items-center gap-6 sm:gap-10 text-sm sm:ml-4 lg:ml-12">
            <a href="/" className="opacity-70 transition-opacity hover:opacity-100">
              Home
            </a>
            <a
              href="/about"
              className="opacity-100 underline underline-offset-8 decoration-1 transition-opacity hover:opacity-100"
            >
              About
            </a>
            <a href="/projects" className="opacity-70 transition-opacity hover:opacity-100">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-cyan-300/80 mb-3">About</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-8">About Me</h1>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  I&apos;m a full-stack developer focused on building modern web applications that feel
                  fast, clear, and intentional—pairing React and TypeScript with interfaces people enjoy
                  using.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  My approach balances craft and clarity: solid engineering underneath, and a design
                  language that stays quiet until it needs to speak.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Whether it&apos;s a landing page or a complex product UI, I care about responsiveness,
                  accessibility, and shipping work that holds up in the real world.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  When I&apos;m not coding, I explore new tools, contribute where I can, and keep
                  sharpening how products look and feel.
                </p>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-400/15 via-transparent to-orange-400/15 blur-2xl pointer-events-none" />
              <div className="relative h-80 w-80 sm:h-96 sm:w-96 overflow-hidden rounded-full">
                <img
                  src={heroPortrait}
                  alt="Portrait of KDM"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover object-[50%_58%] select-none animate-soft-float"
                />
              </div>
            </div>
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
