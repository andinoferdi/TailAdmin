
import GridShape from "@/components/common/GridShape";
import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo";
import SignUpForm from "@/blocks/register/SignUpForm";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="relative z-0 flex flex-col min-h-screen p-6 bg-white dark:bg-gray-900 sm:p-0">
      <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
        <ThemeTogglerTwo />
      </div>
      <div className="relative flex flex-col justify-center w-full h-full lg:flex-row">
        <div className="flex justify-center w-full px-6 py-12 lg:w-1/2 lg:px-16 xl:px-24">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Buat akun TailAdmin</h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Dapatkan akses penuh ke modul penjualan, laporan KPI, dan otomasi alur kerja.
              </p>
            </div>
            <SignUpForm />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sudah punya akun?{" "}
              <Link href="/login" className="font-medium text-brand-600 hover:text-brand-500">
                Masuk sekarang
              </Link>
            </p>
          </div>
        </div>
        <div className="items-center justify-center hidden w-full h-full bg-brand-950 dark:bg-white/5 lg:grid lg:w-1/2">
          <div className="relative flex items-center justify-center">
            <GridShape />
            <div className="flex flex-col items-center max-w-xs space-y-4 text-center">
              <Link href="/" className="block">
                <Image
                  width={231}
                  height={48}
                  src="/images/logo/auth-logo.svg"
                  alt="TailAdmin"
                  className="dark:hidden"
                />
                <Image
                  width={231}
                  height={48}
                  src="/images/logo/logo-dark.svg"
                  alt="TailAdmin Dark"
                  className="hidden dark:block"
                />
              </Link>
              <p className="text-sm text-white/80 dark:text-white/60">
                Kolaborasi bersama tim melalui panel multi-user dengan kontrol peran fleksibel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

