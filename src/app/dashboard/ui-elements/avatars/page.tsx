import DashboardAvatarsBlock from "@/blocks/dashboard/ui-elements/avatars";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Avatars | TailAdmin - Next.js Dashboard Template",
  description: "Galeri avatar TailAdmin dengan indikator status online, offline, dan busy.",
};

export default function Page() {
  return <DashboardAvatarsBlock />;
}

