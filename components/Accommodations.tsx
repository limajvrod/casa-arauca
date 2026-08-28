import Image from "next/image";
import Reveal from "@/components/Reveal";
import { photo, type ImageKey } from "@/lib/images";

type Stay = {
  name: string;
  image: ImageKey;
  alt: string;
  description: string;
  capacity: string;
  features: string[];
  tier: string;
};

const stays: Stay[] = [
  {
    name: "Suíte Mata",
    image: "suiteMata",
    alt: "Suíte com cama de casal voltada para uma parede de vidro com vista para a mata",
    description:
      "A mais próxima do verde. Uma varanda suspensa entre as copas das árvores e uma banheira que observa a floresta em silêncio.",
    capacity: "2 hóspedes",
    features: ["Varanda privativa", "Banheira externa", "Vista para a mata"],
    tier: "Experiência intimista",
  },
  {
    name: "Suíte Araucária",
    image: "suiteAraucaria",
    alt: "Quarto amplo com painéis de madeira, poltrona de leitura e luz natural suave",
    description:
      "Mais ampla e voltada para o entardecer. Um espaço de estar próprio para quem quer alongar a manhã com café e silêncio.",
    capacity: "2 hóspedes",
    features: ["Sala de estar integrada", "Lareira", "Vista para o pôr do sol"],
    tier: "Experiência contemplativa",
  },
  {
    name: "Casa Horizonte",
    image: "casaHorizonte",
    alt: "Casa independente com piscina privativa cercada por vegetação nativa",
    description:
      "Uma casa independente, com piscina própria e total privacidade — pensada para estadias mais longas e celebrações a dois.",
    capacity: "Até 4 hóspedes",
    features: ["Piscina privativa", "Cozinha própria", "Jardim reservado"],
    tier: "Experiência exclusiva",
  },
];

export default function Accommodations() {
  return (
    <section id="hospedagens" className="bg-cream py-28 sm:py-36">
      <div className="container-editorial">
        <Reveal className="max-w-xl">
          <p className="eyebrow mb-6">Hospedagens</p>
          <h2 className="font-display text-3xl font-normal leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Três formas de habitar a floresta.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/65 sm:text-lg">
            Cada acomodação foi pensada como uma experiência própria — não
            apenas um lugar para dormir, mas um ponto de vista diferente
            sobre a mesma paisagem.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-24 sm:gap-32">
          {stays.map((stay, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={stay.name}
                className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${
                  reversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                <Reveal className="w-full lg:w-7/12">
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-sm">
                    <Image
                      src={photo(stay.image, 1600, 78)}
                      alt={stay.alt}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover transition-transform duration-[1400ms] ease-editorial hover:scale-[1.04]"
                    />
                  </div>
                </Reveal>

                <Reveal delay={120} className="w-full lg:w-5/12">
                  <span className="eyebrow">{stay.tier}</span>
                  <h3 className="mt-4 font-display text-2xl text-ink sm:text-3xl">
                    {stay.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink/65">
                    {stay.description}
                  </p>

                  <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink/70">
                    <div className="flex items-center gap-2">
                      <dt className="sr-only">Capacidade</dt>
                      <dd>{stay.capacity}</dd>
                    </div>
                  </dl>

                  <ul className="mt-5 space-y-2 border-t border-ink/10 pt-5">
                    {stay.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-ink/70"
                      >
                        <span className="h-px w-4 bg-clay" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a href="#reservar" className="btn-secondary mt-8">
                    Consultar disponibilidade
                  </a>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
