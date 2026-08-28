import Image from "next/image";
import Reveal from "@/components/Reveal";
import { photo, type ImageKey } from "@/lib/images";

const items: { image: ImageKey; alt: string; aspect: string }[] = [
  {
    image: "galleryWide",
    alt: "Vista aérea da mata ao amanhecer, névoa entre as copas das árvores",
    aspect: "aspect-[4/3]",
  },
  {
    image: "galleryTall1",
    alt: "Corredor interno em madeira com luz natural lateral",
    aspect: "aspect-[3/4]",
  },
  {
    image: "gallerySquare1",
    alt: "Piscina refletindo a vegetação ao redor",
    aspect: "aspect-square",
  },
  {
    image: "galleryTall2",
    alt: "Banheira externa em ambiente natural",
    aspect: "aspect-[2/3]",
  },
  {
    image: "gallerySquare2",
    alt: "Detalhe de cabana de madeira entre árvores",
    aspect: "aspect-square",
  },
  {
    image: "galleryWide2",
    alt: "Cachoeira cercada por vegetação densa",
    aspect: "aspect-[4/3]",
  },
];

export default function Gallery() {
  return (
    <section className="bg-paper py-28 sm:py-36">
      <div className="container-editorial">
        <Reveal className="max-w-xl">
          <p className="eyebrow mb-6">Galeria</p>
          <h2 className="font-display text-3xl font-normal leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Fragmentos da Casa.
          </h2>
        </Reveal>

        <div className="mt-16 columns-2 gap-4 sm:columns-3 sm:gap-5">
          {items.map((item, i) => (
            <Reveal
              key={item.image + i}
              delay={(i % 3) * 90}
              className={`relative mb-4 w-full break-inside-avoid overflow-hidden rounded-sm sm:mb-5 ${item.aspect}`}
            >
              <Image
                src={photo(item.image, 900, 75)}
                alt={item.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-editorial hover:scale-[1.05]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
