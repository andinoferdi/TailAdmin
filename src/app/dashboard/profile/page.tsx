import DashboardProfileBlock from "@/blocks/dashboard/profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Profile | TailAdmin - Next.js Dashboard Template",
  description: "Profil pengguna TailAdmin lengkap dengan informasi kontak dan alamat.",
};

export default function Page() {
  return <DashboardProfileBlock />;
}

