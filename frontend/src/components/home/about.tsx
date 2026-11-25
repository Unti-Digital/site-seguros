import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";
import { BrandRibbon } from "@/components/ui/brand-ribbon";
import Link from "next/link";

export function About() {
  return (
    <section id="sobre" className="section about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-art" aria-hidden="true">
          <Image
            className="about-photo"
            src="/images/home-consultoria-8441811.webp"
            alt=""
            fill
            sizes="(max-width: 699px) 100vw, 50vw"
          />
          <div className="about-photo-shade" />
          <span className="art-label">UM NOVO OLHAR PARA A PROTEÇÃO</span>
          <BrandRibbon className="about-brand-ribbon" />
          <div className="about-graphic">
            <span>
              Mais cuidado.
              <br />
              Mais possibilidades.
              <br />
              <strong>Mais futuro.</strong>
            </span>
          </div>
          <div className="about-art-bottom">
            <span>NOVA PROPOSTA SEGUROS · CUIDADO E PROXIMIDADE</span>
            <Icon name="arrow" />
          </div>
        </div>
        <div className="about-copy">
          <SectionHeading
            eyebrow="SOBRE A NOVA PROPOSTA"
            title={
              <>
                Antes de proteger,
                <br />é preciso entender.
              </>
            }
            id="about-title"
          />
          <p>
            Proteger o que importa começa por reconhecer que cada pessoa,
            família e negócio tem sua própria história.
          </p>
          <p>
            Na Nova Proposta Seguros, a conversa sobre proteção parte das suas
            prioridades. Mobilidade, saúde, família ou empresa: cada escolha
            merece informação clara e atenção ao que faz sentido para você.
          </p>
          <p className="editorial-note">
            Conhecer possibilidades, limites e condições é parte de uma escolha
            que respeita seus planos.
          </p>
          <Link className="text-link" href="/sobre">
            Conheça a Nova Proposta <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
