import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import type { InsurancePage } from "@/data/insurance";

export function InsuranceCard({
  item,
  compact = false,
  showCategory = true,
}: {
  item: InsurancePage;
  compact?: boolean;
  showCategory?: boolean;
}) {
  return (
    <article
      className={`insurance-card ${compact ? "insurance-card-compact" : ""}`}
      data-reveal
      data-stagger
    >
      <Link href={`/seguros/${item.slug}`} aria-label={`Conhecer ${item.name}`}>
        {!compact && (
          <div className="insurance-card-photo">
            <Image
              src={item.cardImage}
              alt={item.cardImageAlt}
              fill
              sizes="(max-width: 699px) 100vw, (max-width: 1023px) 50vw, 33vw"
              style={{ objectPosition: item.cardImagePosition }}
            />
          </div>
        )}
        <div className="insurance-card-body">
          <div className="insurance-card-top">
            <span className="solution-icon">
              <Icon name={item.icon} />
            </span>
            {showCategory && <span>{item.category}</span>}
          </div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <span className="insurance-card-action">
            Explorar solução <Icon name="arrow" />
          </span>
        </div>
      </Link>
    </article>
  );
}
