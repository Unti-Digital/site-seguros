import Link from "next/link";
import { Icon } from "@/components/ui/icon";

export default function NotFound() {
  return (
    <main id="conteudo" className="not-found-page">
      <div className="container">
        <p className="eyebrow">
          <span />
          PÁGINA NÃO ENCONTRADA
        </p>
        <h1>
          Vamos encontrar
          <br />
          um novo caminho.
        </h1>
        <p>
          O endereço solicitado não está disponível. Explore nossas soluções ou
          volte ao início.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">
            Voltar ao início <Icon name="arrow" />
          </Link>
          <Link className="text-link" href="/seguros">
            Conhecer soluções <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </main>
  );
}
