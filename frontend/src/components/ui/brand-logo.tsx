import Image from "next/image";

/** Native vector artwork extracted from the official manual, without redrawing. */
export function BrandLogo({ preload = false }: { preload?: boolean }) {
  return (
    <Image
      className="brand-logo"
      src="/logos/nova-proposta-seguros-principal.svg"
      alt="Nova Proposta Seguros"
      width={600}
      height={395}
      preload={preload}
      unoptimized
    />
  );
}
