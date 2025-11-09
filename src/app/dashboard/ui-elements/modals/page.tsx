import DashboardModalsBlock from "@/blocks/dashboard/ui-elements/modals";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Modals | TailAdmin - Next.js Dashboard Template",
  description: "Panel modal TailAdmin dengan variasi ukuran, form, dan peringatan.",
};

export default function Page() {
  return <DashboardModalsBlock />;
}

