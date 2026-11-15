import {
  InsuranceRoute,
  insuranceMetadata,
} from "@/components/internal/insurance-route";
export const metadata = insuranceMetadata("transportes");
export default function Page() {
  return <InsuranceRoute slug="transportes" />;
}
