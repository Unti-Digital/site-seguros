import Link from "next/link";
export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Caminho de navegação">
      <ol>
        <li>
          <Link href="/">Início</Link>
        </li>
        {items.map((item) => (
          <li key={item.label}>
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
