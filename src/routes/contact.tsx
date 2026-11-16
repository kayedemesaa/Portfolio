import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Github, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { contactInfo, whatsappUrl, WhatsAppIcon } from "@/lib/contact";
import { contactFormSchema, sendContactEmail } from "@/lib/send-contact";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "needs_activation" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""),
    };

    const parsed = contactFormSchema.safeParse(payload);
    if (!parsed.success) {
      setStatus("error");
      setErrorMessage(parsed.error.issues[0]?.message || "Please check the form and try again.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const result = await sendContactEmail(parsed.data);
      setStatus(result);
      if (result === "sent") {
        form.reset();
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to send your message.",
      );
    }
  }

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
            <a href="/projects" className="opacity-70 transition-opacity hover:opacity-100">
              Projects
            </a>
            <a
              href="/contact"
              className="opacity-100 underline underline-offset-8 decoration-1 transition-opacity hover:opacity-100"
            >
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-rose-300/80 mb-3">
                Get in touch
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-xl leading-tight">
                Have a project in mind? Let&apos;s build something sharp.
              </h1>
              <p className="text-muted-foreground mb-10 max-w-xl text-base md:text-lg">
                Open to freelance work, collaborations, and full-time roles. Reach out anytime.
              </p>
              <div className="flex flex-col gap-5">
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
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full space-y-5 border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="sr-only" aria-hidden>
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="h-11 border-white/15 bg-background/40 placeholder:text-muted-foreground/70"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="h-11 border-white/15 bg-background/40 placeholder:text-muted-foreground/70"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry"
                  className="h-11 border-white/15 bg-background/40 placeholder:text-muted-foreground/70"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a bit about your project..."
                  className="min-h-[140px] border-white/15 bg-background/40 placeholder:text-muted-foreground/70"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "sending"}
                className="h-11 w-full sm:w-auto bg-foreground text-background hover:bg-cyan-300 hover:text-background"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                {status !== "sending" && <ArrowUpRight size={16} />}
              </Button>

              {status === "sent" && (
                <p className="text-sm text-cyan-300" aria-live="polite">
                  Message sent to {contactInfo.email}. I&apos;ll get back to you soon.
                </p>
              )}
              {status === "needs_activation" && (
                <p className="text-sm text-cyan-300" aria-live="polite">
                  Check {contactInfo.email} for a FormSubmit email and click
                  Activate Form. After that, new messages will arrive in that inbox.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-rose-300" aria-live="assertive">
                  {errorMessage} You can also email {contactInfo.email} directly.
                </p>
              )}
            </form>
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
