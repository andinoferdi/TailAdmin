import DashboardFormElementsBlock from "@/blocks/dashboard/forms/form-elements";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description: "Satu set elemen form TailAdmin siap pakai untuk input, select, toggle, dan upload.",
};

export default function Page() {
  return <DashboardFormElementsBlock />;
}

