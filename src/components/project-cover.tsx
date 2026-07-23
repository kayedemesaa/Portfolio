import { useEffect, useState } from "react";

type ProjectCoverProps = {
  images: string[];
  title: string;
  accent: string;
  imageFit?: "contain" | "cover";
  stack: string[];
};

export function ProjectCover({
  images,
  title,
  accent,
  imageFit = "cover",
  stack,
}: ProjectCoverProps) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!hasMultiple) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [hasMultiple, images.length]);

  return (
    <div
      className={`aspect-[16/10] mb-5 overflow-hidden border border-white/10 bg-gradient-to-br ${accent} relative`}
    >
      {images.length > 0 ? (
        <div
          className={`absolute inset-0 overflow-hidden ${
            imageFit === "contain" ? "bg-[#e8eef2]" : "bg-transparent"
          }`}
        >
          <div
            className="flex h-full w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, imageIndex) => (
              <img
                key={`${title}-${imageIndex}`}
                src={src}
                alt={`${title} preview ${imageIndex + 1}`}
                className={`h-full w-full shrink-0 ${
                  imageFit === "contain" ? "object-contain" : "object-cover"
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,white,transparent_45%)]" />
      )}

      {hasMultiple && (
        <div className="absolute top-3 right-3 z-10 flex gap-1.5">
          {images.map((_, dotIndex) => (
            <span
              key={dotIndex}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                dotIndex === index ? "bg-foreground" : "bg-foreground/30"
              }`}
            />
          ))}
        </div>
      )}

      <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] tracking-wide uppercase border border-white/20 bg-background/50 px-2 py-1 backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
