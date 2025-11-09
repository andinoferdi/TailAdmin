
import RegisterPage from "@/blocks/register";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar TailAdmin",
  description: "Form pendaftaran TailAdmin untuk membuat akun baru.",
};

export default function Page() {
  return <RegisterPage />;
}

