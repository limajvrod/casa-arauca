import Image from "next/image";
import Reveal from "@/components/Reveal";
import { photo, type ImageKey } from "@/lib/images";

const experiences: { title: string; text: string; image: ImageKey }[] = [
  {
    title: "Trilhas",
    text: "Caminhos guiados entre araucárias centenárias, para todos os ritmos.",
    image: "experienceTrail",
  },
  {
    title: "Banho de floresta",
    text: "Uma prática de presença, guiada por quem conhece cada trecho da mata.",
    image: "experienceForestBath",
  },
  {
    title: "Jantar ao ar livre",
    text: "Mesas montadas sob as árvores, à luz de velas, em noites reservadas.",
    image: "experienceOutdoorDinner",
  },
  {
    title: "Observação das estrelas",
    text: "Céu aberto, longe da luz da cidade, com telescópio disponível.",
    image: "experienceStars",
  },
  {
    title: "Café na varanda",
    text: "A manhã pode começar devagar, com vista para o horizonte verde.",
    image: "experienceCoffee",
  },
  {
    title: "Passeio guiado",
    text: "Um roteiro sob medida pela propriedade, conduzido por nossa equipe.",
    image: "experienceGuidedWalk",
  },
];

export default function Experiences() {
  return (
    <section id="experiencias" className="bg-cream py-28 sm:py-36">
      <div className="container-editorial">
        <Reveal className="max-w-xl">
          <p className="eyebrow mb-6">Experiências</p>
          <h2 className="font-display text-3xl font-normal leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Pequenos rituais, ao seu ritmo.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-14">
          {experiences.map((exp, i) => (
            <Reveal
              key={exp.title}
              delay={(i % 3) * 90}
              className={i % 3 === 1 ? "sm:mt-14" : ""}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                <Image
                  src={photo(exp.image, 800, 76)}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 30vw, 45vw"
                  className="object-cover transition-transform duration-[1200ms] ease-editorial hover:scale-[1.06]"
                />
              </div>
              <h3 className="mt-5 font-display text-lg text-ink sm:text-xl">
                {exp.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {exp.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
