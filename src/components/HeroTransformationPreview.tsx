import Image from "next/image";

export default function HeroTransformationPreview() {
  return (
    <figure className="max-w-full">
      <Image
        src="/hero-transformation-v2.png"
        alt="Del problema al sistema funcionando: mensajes sueltos, stock en planillas y turnos sin seguimiento se convierten en una web con gestión, automatización y resultados ordenados."
        className="h-auto w-full rounded-[12px]"
        width={1024}
        height={1536}
        priority
        sizes="(min-width: 1024px) 430px, calc(100vw - 2rem)"
      />
    </figure>
  );
}
