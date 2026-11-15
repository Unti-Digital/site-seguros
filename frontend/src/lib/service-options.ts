export const serviceOptions = [
  { slug: "automovel", name: "Seguro de Automóvel", category: "Dia a dia" },
  { slug: "plano-de-saude", name: "Plano de Saúde", category: "Vida e saúde" },
  { slug: "consorcio", name: "Consórcio", category: "Planejamento" },
  { slug: "vida", name: "Seguro de Vida", category: "Vida e saúde" },
  { slug: "seguro-saude", name: "Seguro Saúde", category: "Vida e saúde" },
  { slug: "empresarial", name: "Seguro Empresarial", category: "Seu negócio" },
  {
    slug: "transportes",
    name: "Seguro de Transportes",
    category: "Seu negócio",
  },
  { slug: "engenharia", name: "Seguro de Engenharia", category: "Seu negócio" },
] as const;

export function serviceForPath(pathname: string) {
  return serviceOptions.find(
    (service) => pathname === `/seguros/${service.slug}`,
  )?.name;
}
