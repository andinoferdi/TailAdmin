
import DashboardPage from "@/blocks/dashboard/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard TailAdmin",
  description: "Ringkasan metrik e-commerce, statistik pelanggan, dan aktivitas pesanan real-time.",
};

export default function Page() {
  return <DashboardPage />;
}

