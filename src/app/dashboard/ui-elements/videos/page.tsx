import DashboardVideosBlock from "@/blocks/dashboard/ui-elements/videos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Videos | TailAdmin - Next.js Dashboard Template",
  description: "Komponen video TailAdmin untuk menayangkan konten edukasi dan demo produk.",
};

export default function Page() {
  return <DashboardVideosBlock />;
}

