import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/icon";
import { QuoteButton } from "@/components/contact/contact-modal";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  image,
  imageAlt,
  imagePosition,
  layout = "split",
  tone = "light",
  service,
  icon = "shield",
  action = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
  layout?: "split" | "editorial" | "panorama" | "reverse";
  tone?: "light" | "dark";
  service?: string;
  icon?: IconName;
  action?: boolean;
}) {
  return (
    <section
      className={`inner-hero inner-hero-${layout} inner-hero-${tone}`}
      aria-labelledby="page-title"
    >
      <div className="container">
        <Breadcrumbs items={crumbs} />
        <div className="inner-hero-grid">
          <div className="inner-hero-copy">
            <p className="eyebrow">
              <span />
              {eyebrow}
            </p>
            <h1 id="page-title">
              {title
                .replace(/\.$/, "")
                .split("\n")
                .map((line, index) => (
                  <span key={line}>
                    {index > 0 && <br />}
                    {line}
                  </span>
                ))}
              <span className="title-dot">.</span>
            </h1>
            <p className="lead">{description}</p>
            {action && (
              <div className="hero-actions">
                <QuoteButton service={service}>
                  Conversar sobre{" "}
                  {service === "Consórcio" ? "meu projeto" : "proteção"}{" "}
                  <Icon name="arrow" />
                </QuoteButton>
                <a className="text-link" href="#explorar">
                  Conhecer os detalhes <span>↓</span>
                </a>
              </div>
            )}
          </div>
          <div className="inner-hero-visual">
            <Image
              src={image}
              alt={imageAlt}
              fill
              preload
              sizes={
                layout === "panorama"
                  ? "100vw"
                  : "(max-width: 699px) 100vw, 50vw"
              }
              style={{ objectPosition: imagePosition }}
            />
            <div className="inner-photo-tint" />
            <div className="inner-photo-caption" aria-hidden="true">
              <Icon name={icon} />
              <span>UM NOVO OLHAR PARA A PROTEÇÃO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
