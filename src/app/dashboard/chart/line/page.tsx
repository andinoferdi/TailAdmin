import DashboardLineChartBlock from "@/blocks/dashboard/chart/line";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Line Chart | TailAdmin - Next.js Dashboard Template",
  description: "Halaman line chart TailAdmin dengan integrasi ApexCharts untuk pemantauan metrik.",
};

export default function Page() {
  return <DashboardLineChartBlock />;
}

