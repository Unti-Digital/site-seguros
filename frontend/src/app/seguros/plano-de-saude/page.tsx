import {
  InsuranceRoute,
  insuranceMetadata,
} from "@/components/internal/insurance-route";
export const metadata = insuranceMetadata("plano-de-saude");
export default function Page() {
  return <InsuranceRoute slug="plano-de-saude" />;
}
