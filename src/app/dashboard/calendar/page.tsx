import DashboardCalendarBlock from "@/blocks/dashboard/calendar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Calendar | TailAdmin - Next.js Dashboard Template",
  description: "Kalender interaktif TailAdmin untuk menjadwalkan aktivitas dan event tim.",
};

export default function Page() {
  return <DashboardCalendarBlock />;
}

