"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { photo } from "@/lib/images";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = imgRef.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY * 0.12, 90);
        node.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="topo"
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-forest-dark"
    >
      <div
        ref={imgRef}
        className="absolute inset-0 -z-10 h-[112%] w-full scale-[1.08] will-change-transform"
      >
        <Image
          src={photo("hero", 2400, 75)}
          alt="Varanda de madeira voltada para uma mata densa envolta em névoa, ao amanhecer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/10 to-forest-dark/35" />
      </div>

      <div className="container-editorial relative flex w-full flex-col gap-10 pb-20 pt-40 sm:pb-28">
        <p className="animate-fade-in eyebrow text-cream/70 [animation-delay:200ms] opacity-0">
          Casa Araucá — hospedagem &amp; natureza
        </p>

        <h1 className="max-w-3xl animate-fade-up font-display text-4xl font-normal leading-[1.12] text-cream opacity-0 [animation-delay:350ms] sm:text-5xl md:text-6xl lg:text-7xl">
          Alguns lugares fazem você desacelerar.
        </h1>

        <p className="max-w-md animate-fade-up text-balance font-body text-base leading-relaxed text-cream/80 opacity-0 [animation-delay:600ms] sm:text-lg">
          Uma experiência de hospedagem entre a natureza, o silêncio e o
          essencial.
        </p>

        <div className="flex animate-fade-up flex-col gap-4 opacity-0 [animation-delay:800ms] sm:flex-row sm:items-center">
          <a href="#reservar" className="btn-primary">
            Planejar minha estadia
          </a>
          <a href="#experiencia" className="btn-ghost-light">
            Conhecer a Casa
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 hidden animate-fade-in flex-col items-center gap-3 opacity-0 [animation-delay:1200ms] sm:right-10 lg:flex">
        <span className="h-14 w-px bg-cream/40" />
        <span className="rotate-90 whitespace-nowrap text-[11px] uppercase tracking-wide3 text-cream/60">
          Role
        </span>
      </div>
    </section>
  );
}
