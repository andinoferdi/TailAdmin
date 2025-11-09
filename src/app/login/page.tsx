
import LoginPage from "@/blocks/login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masuk TailAdmin",
  description: "Form login TailAdmin untuk mengakses panel dashboard.",
};

export default function Page() {
  return <LoginPage />;
}

