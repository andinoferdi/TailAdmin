import DashboardBarChartBlock from "@/blocks/dashboard/chart/bar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Bar Chart | TailAdmin - Next.js Dashboard Template",
  description: "Halaman bar chart TailAdmin untuk visualisasi distribusi performa produk.",
};

export default function Page() {
  return <DashboardBarChartBlock />;
}

