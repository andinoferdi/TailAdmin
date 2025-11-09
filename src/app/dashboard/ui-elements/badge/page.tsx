import DashboardBadgeBlock from "@/blocks/dashboard/ui-elements/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Badge | TailAdmin - Next.js Dashboard Template",
  description: "Variasi badge TailAdmin dengan warna solid, light, dan ikon bawaan.",
};

export default function Page() {
  return <DashboardBadgeBlock />;
}

