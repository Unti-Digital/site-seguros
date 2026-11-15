import {
  InsuranceRoute,
  insuranceMetadata,
} from "@/components/internal/insurance-route";
export const metadata = insuranceMetadata("engenharia");
export default function Page() {
  return <InsuranceRoute slug="engenharia" />;
}
