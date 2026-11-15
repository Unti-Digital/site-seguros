import {
  InsuranceRoute,
  insuranceMetadata,
} from "@/components/internal/insurance-route";
export const metadata = insuranceMetadata("consorcio");
export default function Page() {
  return <InsuranceRoute slug="consorcio" />;
}
