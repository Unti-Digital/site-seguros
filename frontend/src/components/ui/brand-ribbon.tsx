import Image from "next/image";

export function BrandRibbon({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-ribbon ${className}`} aria-hidden="true">
      <Image
        src="/brand/grafismo-curva-oficial.svg"
        alt=""
        fill
        unoptimized
        sizes="(max-width: 699px) 160px, 260px"
      />
    </span>
  );
}
