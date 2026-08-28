import Reveal from "@/components/Reveal";

const traits = [
  "Mata nativa preservada, sem vizinhos à vista",
  "Últimos quilômetros por estrada de terra, entre araucárias",
  "Clima ameno durante o ano todo",
  "Céu limpo, com baixa poluição luminosa à noite",
];

export default function Location() {
  return (
    <section id="localizacao" className="bg-forest py-28 text-cream sm:py-36">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-cream/60">Localização</p>
            <h2 className="mt-6 font-display text-3xl font-normal leading-tight sm:text-4xl lg:text-[2.75rem]">
              Perto o suficiente. Longe de tudo.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
              A Casa Araucá fica no Vale das Araucárias, uma região fictícia
              cercada por mata nativa, criada especialmente para este
              projeto conceitual — a cerca de 45 minutos do centro de Monte
              Cedro.
            </p>

            <ul className="mt-8 space-y-4 border-t border-cream/15 pt-8">
              {traits.map((trait) => (
                <li key={trait} className="flex items-start gap-4 text-cream/75">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-clay-light"
                    aria-hidden="true"
                  />
                  <span className="text-base leading-relaxed">{trait}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-xs uppercase tracking-wide2 text-cream/40">
              Localização fictícia — criada para fins de portfólio.
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-cream/15 bg-forest-dark sm:aspect-[16/10]">
              <svg
                viewBox="0 0 640 400"
                className="h-full w-full"
                role="img"
                aria-label="Mapa ilustrativo e fictício da região do Vale das Araucárias"
              >
                <rect width="640" height="400" fill="#161F18" />
                <g fill="none" stroke="#3B5240" strokeWidth="1">
                  <path d="M40 320 Q160 260 260 300 T460 260 T620 300" />
                  <path d="M20 260 Q160 200 280 240 T480 190 T620 230" />
                  <path d="M0 200 Q160 140 300 180 T500 120 T640 160" />
                  <path d="M-20 140 Q160 80 320 120 T520 60 T640 90" />
                </g>
                <g stroke="#4A6350" strokeWidth="0.6" opacity="0.5">
                  <path d="M40 360 Q200 320 340 350 T620 340" />
                  <path d="M20 40 Q220 10 380 40 T640 30" />
                </g>
                <circle cx="332" cy="212" r="5" fill="#C79C77" />
                <circle
                  cx="332"
                  cy="212"
                  r="12"
                  fill="none"
                  stroke="#C79C77"
                  strokeWidth="1"
                  opacity="0.6"
                />
                <text
                  x="352"
                  y="208"
                  fill="#F6F2EA"
                  fontSize="13"
                  fontFamily="var(--font-manrope), sans-serif"
                  opacity="0.85"
                >
                  Casa Araucá
                </text>
                <text
                  x="352"
                  y="228"
                  fill="#F6F2EA"
                  fontSize="11"
                  fontFamily="var(--font-manrope), sans-serif"
                  opacity="0.5"
                >
                  Vale das Araucárias (região fictícia)
                </text>
              </svg>
            </div>
            <p className="mt-4 text-sm text-cream/45">
              Representação ilustrativa, sem correspondência com coordenadas
              reais.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
