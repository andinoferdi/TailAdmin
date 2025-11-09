
import Link from "next/link";

const highlights = [
  {
    title: "Dashboard Lengkap",
    description: "Pantau metrik bisnis, aktivitas pengguna, dan penjualan dalam satu layar responsif.",
  },
  {
    title: "Komponen Siap Pakai",
    description: "Gunakan rangkaian kartu, grafik, dan tabel yang sudah teroptimasi Tailwind CSS.",
  },
  {
    title: "Mode Terang Gelap",
    description: "Aktifkan opsi tema sesuai preferensi Kamu langsung dari header aplikasi.",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col gap-16 px-4 py-16 mx-auto max-w-6xl md:px-8 lg:px-12">
      <section className="grid gap-6 lg:grid-cols-[1.2fr,1fr] items-center">
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 text-sm font-medium rounded-full text-brand-600 bg-brand-50 dark:text-brand-200 dark:bg-brand-500/10">
            TailAdmin Next.js
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-gray-900 dark:text-white md:text-4xl">
            Kelola performa bisnis Anda dengan dashboard modern yang siap produksi.
          </h1>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Mulai navigasi dari beranda, masuk ke akun, dan jelajahi panel analitik bertenaga grafik interaktif.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white rounded-lg bg-brand-600 hover:bg-brand-700 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
            >
              Buka Dashboard
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium border rounded-lg text-gray-900 border-gray-200 hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
            >
              Masuk Aplikasi
            </Link>
          </div>
        </div>
        <div className="grid gap-6 p-6 border rounded-2xl border-gray-200 bg-white shadow-sm dark:bg-white/[0.03] dark:border-gray-800">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded-xl border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 uppercase">Aktif Hari Ini</p>
              <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">1.284</p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Kunjungan dashboard</p>
            </div>
            <div className="p-4 border rounded-xl border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 uppercase">Konversi</p>
              <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">4,7%</p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Rata-rata pekan ini</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-gray-500 uppercase">Langkah pertama</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 p-3 border rounded-lg border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center w-10 h-10 text-sm font-medium rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-200">
                  1
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Masuk akun</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Gunakan kredensial demo atau daftar baru.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center w-10 h-10 text-sm font-medium rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-200">
                  2
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Tinjau metrik</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Pantau ringkasan pelanggan dan penjualan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="p-6 border rounded-2xl border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

