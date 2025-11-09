
import HomePage from "@/blocks/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TailAdmin Next.js Dashboard Template",
  description: "Landing page untuk mengakses TailAdmin dengan rute dashboard, login, dan register.",
};

export default function Page() {
  return <HomePage />;
}

