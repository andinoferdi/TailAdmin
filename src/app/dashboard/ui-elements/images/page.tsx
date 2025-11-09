import DashboardImagesBlock from "@/blocks/dashboard/ui-elements/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Images | TailAdmin - Next.js Dashboard Template",
  description: "Contoh penggunaan komponen gambar TailAdmin untuk galeri responsif.",
};

export default function Page() {
  return <DashboardImagesBlock />;
}

