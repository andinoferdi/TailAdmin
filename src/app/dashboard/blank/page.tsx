import DashboardBlankBlock from "@/blocks/dashboard/blank";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Blank Page | TailAdmin - Next.js Dashboard Template",
  description: "Halaman kosong TailAdmin untuk memulai modul baru dengan cepat.",
};

export default function Page() {
  return <DashboardBlankBlock />;
}

