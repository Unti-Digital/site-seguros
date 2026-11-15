import {
  InsuranceRoute,
  insuranceMetadata,
} from "@/components/internal/insurance-route";
export const metadata = insuranceMetadata("automovel");
export default function Page() {
  return <InsuranceRoute slug="automovel" />;
}
