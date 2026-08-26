import Image from "next/image";
import Reveal from "@/components/Reveal";
import { photo } from "@/lib/images";

export default function FinalCta() {
  return (
    <section
      id="reservar"
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-forest-dark py-28 text-cream"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={photo("finalCta", 2000, 72)}
          alt="Caminho estreito entre árvores altas, luz suave entrando pela copa"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-dark/75" />
      </div>

      <div className="container-editorial text-center">
        <Reveal className="mx-auto max-w-2xl">
          <p className="font-display text-2xl italic leading-relaxed text-cream/90 sm:text-3xl md:text-4xl">
            Talvez você não precise de mais uma viagem.
          </p>
          <p className="mt-3 font-display text-2xl italic leading-relaxed text-cream sm:text-3xl md:text-4xl">
            Talvez precise de alguns dias longe do resto.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12 flex flex-col items-center gap-4">
          <a
            href="https://wa.me/5500000000000"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Planejar minha estadia
          </a>
          <span className="text-sm text-cream/50">
            Atendimento via WhatsApp, de terça a domingo
          </span>
        </Reveal>
      </div>
    </section>
  );
}
