import { getInsurance } from "@/data/insurance";
import { InsuranceDetail } from "./insurance-detail";
import { pageMetadata } from "@/lib/site-metadata";

function configuredPage(slug: string) {
  const page = getInsurance(slug);
  if (!page) throw new Error(`Modalidade não configurada: ${slug}`);
  return page;
}

export function insuranceMetadata(slug: string) {
  const page = configuredPage(slug);
  return pageMetadata(
    page.seoTitle,
    page.seoDescription,
    `/seguros/${page.slug}`,
  );
}

export function InsuranceRoute({ slug }: { slug: string }) {
  return <InsuranceDetail page={configuredPage(slug)} />;
}
