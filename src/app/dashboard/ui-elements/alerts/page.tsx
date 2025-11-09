import DashboardAlertsBlock from "@/blocks/dashboard/ui-elements/alerts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Alerts | TailAdmin - Next.js Dashboard Template",
  description: "Komponen alert TailAdmin dengan variasi warna dan tautan aksi.",
};

export default function Page() {
  return <DashboardAlertsBlock />;
}

