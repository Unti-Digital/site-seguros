import {
  InsuranceRoute,
  insuranceMetadata,
} from "@/components/internal/insurance-route";
export const metadata = insuranceMetadata("empresarial");
export default function Page() {
  return <InsuranceRoute slug="empresarial" />;
}
