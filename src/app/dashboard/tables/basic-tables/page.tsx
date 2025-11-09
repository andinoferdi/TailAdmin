import DashboardBasicTablesBlock from "@/blocks/dashboard/tables/basic-tables";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Basic Table | TailAdmin - Next.js Dashboard Template",
  description: "Tampilan tabel dasar TailAdmin dengan gaya responsif dan tema gelap.",
};

export default function Page() {
  return <DashboardBasicTablesBlock />;
}

