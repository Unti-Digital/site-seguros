import type { Metadata } from "next";

function configuredOrigin() {
  const input = process.env.SITE_URL?.trim();
  if (!input) return undefined;
  try {
    const url = new URL(input);
    return ["https:", "http:"].includes(url.protocol) &&
      !url.username &&
      !url.password
      ? url.origin
      : undefined;
  } catch {
    return undefined;
  }
}

export const siteOrigin = configuredOrigin();
export const indexingEnabled = Boolean(
  siteOrigin && process.env.SITE_INDEXING_ENABLED === "true",
);
export const sitePaths = [
  "/",
  "/sobre",
  "/seguros",
  "/contato",
  "/seguros/automovel",
  "/seguros/plano-de-saude",
  "/seguros/consorcio",
  "/seguros/vida",
  "/seguros/seguro-saude",
  "/seguros/empresarial",
  "/seguros/transportes",
  "/seguros/engenharia",
];

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  draft = false,
): Metadata {
  return {
    title: `${title} | Nova Proposta Seguros`,
    description,
    robots: {
      index: indexingEnabled && !draft,
      follow: indexingEnabled && !draft,
    },
    ...(siteOrigin
      ? { alternates: { canonical: `${siteOrigin}${path}` } }
      : {}),
    openGraph: {
      title,
      description,
      siteName: "Nova Proposta Seguros",
      locale: "pt_BR",
      type: "website",
      ...(siteOrigin ? { url: `${siteOrigin}${path}` } : {}),
    },
  };
}
