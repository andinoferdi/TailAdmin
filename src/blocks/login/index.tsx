
import GridShape from "@/components/common/GridShape";
import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo";
import SignInForm from "@/blocks/login/SignInForm";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative z-0 flex flex-col min-h-screen p-6 bg-white dark:bg-gray-900 sm:p-0">
      <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
        <ThemeTogglerTwo />
      </div>
      <div className="relative flex flex-col justify-center w-full h-full lg:flex-row">
        <div className="flex justify-center w-full px-6 py-12 lg:w-1/2 lg:px-16 xl:px-24">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Masuk ke TailAdmin</h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Gunakan email demo admin@tailadmin.com dan password admin123 untuk mencoba fitur dashboard.
              </p>
            </div>
            <SignInForm />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Belum punya akun?{" "}
              <Link href="/register" className="font-medium text-brand-600 hover:text-brand-500">
                Daftar sekarang
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
                Akses tampilan analitik real-time, manajemen produk, dan aktivitas pelanggan dengan mudah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

