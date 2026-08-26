import Image from "next/image";
import Reveal from "@/components/Reveal";
import { photo } from "@/lib/images";

const pillars = [
  {
    title: "Arquitetura",
    text: "Volumes baixos, madeira natural e grandes aberturas que apagam a fronteira entre dentro e fora.",
  },
  {
    title: "Natureza",
    text: "A mata não é paisagem de fundo — é parte do roteiro, presente em cada janela e caminho.",
  },
  {
    title: "Gastronomia",
    text: "Ingredientes locais e sazonais, servidos sem pressa, em mesas pensadas para durar a noite toda.",
  },
  {
    title: "Silêncio",
    text: "Poucas acomodações, distantes entre si. O som predominante é o da floresta.",
  },
  {
    title: "Privacidade",
    text: "Espaços pensados para casais e para quem viaja em busca de recolhimento, não de agenda cheia.",
  },
  {
    title: "Experiências personalizadas",
    text: "Cada estadia pode ser desenhada de acordo com o ritmo que você deseja encontrar por aqui.",
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="bg-paper py-28 sm:py-36">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:col-start-1">
            <Reveal>
              <p className="eyebrow mb-6">A experiência</p>
              <h2 className="font-display text-3xl font-normal leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                Aqui, o tempo <em className="italic text-forest">não</em>{" "}
                precisa correr.
              </h2>
            </Reveal>

            <Reveal delay={120} className="mt-8 space-y-5 text-ink/70">
              <p className="text-base leading-relaxed sm:text-lg">
                A Casa Araucá nasceu de uma ideia simples: hospedagem de alto
                padrão não é sobre quantidade de comodidades, mas sobre a
                qualidade do que se sente ao ficar. Um lugar onde os dias se
                organizam sozinhos, sem roteiro fixo e sem pressa para
                começar.
              </p>
              <p className="text-base leading-relaxed sm:text-lg">
                É a arquitetura que se curva à paisagem em vez de competir com
                ela. É a mesa posta sem hora marcada. É o silêncio que, longe
                de ser vazio, é a coisa mais rara que existe.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <a
                href="#hospedagens"
                className="link-underline mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                Conhecer as hospedagens
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={100} className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm sm:aspect-[3/4]">
                <Image
                  src={photo("experienceArchitecture", 1400, 78)}
                  alt="Interior contemporâneo em madeira clara, com grandes janelas voltadas para a mata"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover transition-transform duration-[1400ms] ease-editorial hover:scale-[1.04]"
                />
              </div>
              <div className="absolute -bottom-10 -left-6 hidden w-48 overflow-hidden rounded-sm border-8 border-paper shadow-xl sm:block lg:-left-10">
                <div className="relative aspect-square w-full">
                  <Image
                    src={photo("experienceVeranda", 500, 75)}
                    alt="Café servido em bandeja de madeira sobre uma varanda"
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-28 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-ink/10 pt-14 sm:grid-cols-2 lg:grid-cols-3 lg:mt-32">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 60}>
              <span className="mb-3 block text-xs text-clay-dark/70">
                0{i + 1}
              </span>
              <h3 className="font-display text-xl text-ink">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {pillar.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
