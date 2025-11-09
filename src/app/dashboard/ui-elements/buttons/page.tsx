import DashboardButtonsBlock from "@/blocks/dashboard/ui-elements/buttons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Buttons | TailAdmin - Next.js Dashboard Template",
  description: "Kumpulan tombol TailAdmin dengan varian primary dan outline, lengkap dengan ikon.",
};

export default function Page() {
  return <DashboardButtonsBlock />;
}

