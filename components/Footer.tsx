const links = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#hospedagens", label: "Hospedagens" },
  { href: "#gastronomia", label: "Gastronomia" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#localizacao", label: "Localização" },
];

const contacts = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://wa.me/5500000000000", label: "WhatsApp" },
  { href: "mailto:contato@casaarauca.com.br", label: "E-mail" },
];

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-cream/70 sm:py-20">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl tracking-wide2 text-cream">
              CASA ARAUCÁ
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/50">
              Hospedagem entre a natureza, o silêncio e o essencial.
            </p>
          </div>

          <nav aria-label="Links do site">
            <p className="eyebrow text-cream/40">Explorar</p>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-cream/65 hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-cream/40">Contato</p>
            <ul className="mt-5 space-y-3">
              {contacts.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="link-underline text-sm text-cream/65 hover:text-cream"
                  >
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Casa Araucá. Projeto conceitual.</p>
          <p>Projeto conceitual desenvolvido pela NORTE 34.</p>
        </div>
      </div>
    </footer>
  );
}
