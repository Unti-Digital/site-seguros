import {
  InsuranceRoute,
  insuranceMetadata,
} from "@/components/internal/insurance-route";
export const metadata = insuranceMetadata("seguro-saude");
export default function Page() {
  return <InsuranceRoute slug="seguro-saude" />;
}
