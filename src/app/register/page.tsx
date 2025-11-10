
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Daftar TailAdmin",
  description: "Form pendaftaran TailAdmin untuk membuat akun baru.",
};

export default function Page() {
  redirect("/login");
}

