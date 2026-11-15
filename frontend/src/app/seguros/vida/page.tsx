import {
  InsuranceRoute,
  insuranceMetadata,
} from "@/components/internal/insurance-route";
export const metadata = insuranceMetadata("vida");
export default function Page() {
  return <InsuranceRoute slug="vida" />;
}
