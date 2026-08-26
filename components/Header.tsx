"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#hospedagens", label: "Hospedagens" },
  { href: "#gastronomia", label: "Gastronomia" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#localizacao", label: "Localização" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial ${
        scrolled || open
          ? "bg-paper/90 backdrop-blur-sm shadow-[0_1px_0_0_rgba(27,30,27,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex h-20 items-center justify-between">
        <a
          href="#topo"
          className={`font-display text-lg tracking-wide2 transition-colors duration-500 ${
            scrolled || open ? "text-ink" : "text-cream"
          }`}
        >
          CASA ARAUCÁ
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-9 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`link-underline text-sm font-medium transition-colors duration-500 ${
                scrolled ? "text-ink/80 hover:text-ink" : "text-cream/85 hover:text-cream"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#reservar"
          className={`hidden rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-500 ease-editorial lg:inline-flex ${
            scrolled
              ? "bg-forest text-cream hover:bg-forest-dark"
              : "border border-cream/50 text-cream hover:border-cream hover:bg-cream/10"
          }`}
        >
          Planejar estadia
        </a>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#reservar"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-500 ease-editorial ${
              scrolled || open
                ? "bg-forest text-cream"
                : "border border-cream/50 text-cream"
            }`}
          >
            Planejar
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className={`flex h-10 w-10 items-center justify-center ${
              scrolled || open ? "text-ink" : "text-cream"
            }`}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 block h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 block h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`overflow-hidden bg-paper transition-[max-height] duration-500 ease-editorial lg:hidden ${
          open ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        <nav
          aria-label="Navegação mobile"
          className="container-editorial flex flex-col gap-1 pb-8 pt-2"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/8 py-4 text-base text-ink/85"
            >
              {link.label}
            </a>
          ))}
          <a href="#reservar" onClick={() => setOpen(false)} className="btn-primary mt-5">
            Planejar minha estadia
          </a>
        </nav>
      </div>
    </header>
  );
}
