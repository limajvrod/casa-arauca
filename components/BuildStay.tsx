"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { photo, type ImageKey } from "@/lib/images";

type Mood = {
  id: string;
  label: string;
  emoji: string;
  image: ImageKey;
  intro: string;
  items: string[];
};

const moods: Mood[] = [
  {
    id: "desacelerar",
    label: "Desacelerar",
    emoji: "🌿",
    image: "moodDesacelerar",
    intro: "Seu roteiro começa sem despertador.",
    items: [
      "Café servido na varanda, no seu horário",
      "Trilha leve entre araucárias",
      "Banho de imersão ao ar livre",
      "Leitura ao pôr do sol",
      "Jantar reservado, sem pressa",
    ],
  },
  {
    id: "aventura",
    label: "Aventura",
    emoji: "🔥",
    image: "moodAventura",
    intro: "Seu roteiro começa com a trilha ainda coberta de orvalho.",
    items: [
      "Caminhada guiada até o mirante",
      "Banho de cachoeira",
      "Observação de fauna nativa",
      "Piquenique em ponto alto da mata",
      "Jantar ao ar livre, sob as árvores",
    ],
  },
  {
    id: "gastronomia",
    label: "Gastronomia",
    emoji: "🍷",
    image: "moodGastronomia",
    intro: "Seu roteiro começa na horta, antes de chegar à mesa.",
    items: [
      "Colheita de ingredientes com a equipe do Raiz",
      "Degustação harmonizada",
      "Aula informal com o chef",
      "Jantar sob as estrelas",
      "Café especial na manhã seguinte",
    ],
  },
  {
    id: "romance",
    label: "Romance",
    emoji: "❤️",
    image: "moodRomance",
    intro: "Seu roteiro começa com uma mesa reservada só para dois.",
    items: [
      "Jantar privativo à luz de velas",
      "Café da manhã servido no quarto",
      "Trilha ao pôr do sol",
      "Experiência de vinhos a dois",
      "Banheira externa reservada à noite",
    ],
  },
];

export default function BuildStay() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = moods.find((m) => m.id === activeId) ?? null;
  const tablistId = useId();

  return (
    <section className="relative overflow-hidden bg-forest-dark py-28 text-cream sm:py-36">
      <div className="container-editorial">
        <div className="max-w-xl">
          <p className="eyebrow text-cream/60">Monte sua estadia</p>
          <h2 className="mt-6 font-display text-3xl font-normal leading-tight sm:text-4xl lg:text-[2.75rem]">
            Como você gostaria de passar seus dias?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
            Escolha um caminho e veja como seria um roteiro pensado só para
            ele.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Como você gostaria de passar seus dias?"
          id={tablistId}
          className="mt-14 flex flex-wrap gap-3 sm:gap-4"
        >
          {moods.map((mood) => {
            const isActive = mood.id === activeId;
            return (
              <button
                key={mood.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tablistId}-panel`}
                onClick={() => setActiveId(isActive ? null : mood.id)}
                className={`group flex items-center gap-2.5 rounded-full border px-6 py-3.5 text-sm font-medium transition-all duration-500 ease-editorial focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream ${
                  isActive
                    ? "border-cream bg-cream text-forest-dark"
                    : "border-cream/30 text-cream/85 hover:border-cream/70 hover:bg-cream/[0.06]"
                }`}
              >
                <span aria-hidden="true" className="text-base leading-none">
                  {mood.emoji}
                </span>
                {mood.label}
              </button>
            );
          })}
        </div>

        <div
          id={`${tablistId}-panel`}
          role="tabpanel"
          className="mt-6 grid min-h-[2px] grid-cols-1"
        >
          {active && (
            <div
              key={active.id}
              className="grid animate-fade-up grid-cols-1 gap-10 pt-10 opacity-0 [animation-duration:700ms] lg:grid-cols-12 lg:gap-8"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm sm:aspect-[16/10] lg:aspect-[4/5] lg:col-span-5">
                <Image
                  src={photo(active.image, 1200, 78)}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-7">
                <p className="font-display text-2xl italic text-cream sm:text-3xl">
                  {active.intro}
                </p>
                <ul className="mt-8 space-y-4">
                  {active.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 border-b border-cream/10 pb-4 text-cream/80"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-clay-light"
                        aria-hidden="true"
                      />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#reservar" className="btn-ghost-light mt-8">
                  Planejar essa estadia
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
