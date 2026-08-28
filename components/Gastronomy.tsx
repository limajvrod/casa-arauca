import Image from "next/image";
import Reveal from "@/components/Reveal";
import { photo } from "@/lib/images";

const dishes = [
  {
    name: "Truta do rio, ervas da horta",
    note: "Pescado local, manteiga de ervas frescas, raízes assadas",
    image: "dish1" as const,
  },
  {
    name: "Risoto de pinhão",
    note: "Pinhão da estação, queijo da região, alecrim",
    image: "dish2" as const,
  },
  {
    name: "Sobremesa de frutas vermelhas",
    note: "Colheita da manhã, creme leve, mel silvestre",
    image: "dish3" as const,
  },
];

export default function Gastronomy() {
  return (
    <section id="gastronomia" className="bg-paper py-28 sm:py-36">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6">Gastronomia</p>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Raiz
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/65 sm:text-lg">
              O restaurante da Casa Araucá nasce do que a terra oferece em
              cada estação. Uma cozinha enxuta, que valoriza o ingrediente
              local mais do que a técnica — e que muda de cardápio conforme
              muda a mata ao redor.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/65 sm:text-lg">
              As refeições acontecem em ritmo próprio: sem cardápio extenso,
              sem pressa entre os pratos. Uma mesa por vez, sob a copa das
              árvores ou junto à lareira, dependendo da estação.
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm">
              <Image
                src={photo("gastronomyHero", 1600, 78)}
                alt="Mesa posta ao ar livre entre as árvores, iluminada por velas ao entardecer"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {dishes.map((dish, i) => (
            <Reveal key={dish.name} delay={i * 100}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src={photo(dish.image, 800, 78)}
                  alt={dish.name}
                  fill
                  sizes="(min-width: 640px) 30vw, 90vw"
                  className="object-cover transition-transform duration-[1200ms] ease-editorial hover:scale-[1.05]"
                />
              </div>
              <h3 className="mt-5 font-display text-lg text-ink">
                {dish.name}
              </h3>
              <p className="mt-1.5 text-sm text-ink/60">{dish.note}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4">
          <p className="mt-12 text-sm text-ink/45">
            Cardápio conceitual, sujeito a variações sazonais.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
