import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Badge from "@/components/ui/badge/Badge";
import { PlusIcon } from "@/icons";

const colors = ["primary", "success", "error", "warning", "info", "light", "dark"] as const;

export default function DashboardBadgeBlock() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Badges" />
      <div className="space-y-5 sm:space-y-6">
        <section className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <header className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">With Light Background</h3>
          </header>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              {colors.map((color) => (
                <Badge key={`light-${color}`} variant="light" color={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Badge>
              ))}
            </div>
          </div>
        </section>
        <section className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <header className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">With Solid Background</h3>
          </header>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              {colors.map((color) => (
                <Badge key={`solid-${color}`} variant="solid" color={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Badge>
              ))}
            </div>
          </div>
        </section>
        <section className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <header className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">Light Background with Left Icon</h3>
          </header>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              {colors.map((color) => (
                <Badge key={`light-left-${color}`} variant="light" color={color} startIcon={<PlusIcon />}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Badge>
              ))}
            </div>
          </div>
        </section>
        <section className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <header className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">Solid Background with Left Icon</h3>
          </header>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              {colors.map((color) => (
                <Badge key={`solid-left-${color}`} variant="solid" color={color} startIcon={<PlusIcon />}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Badge>
              ))}
            </div>
          </div>
        </section>
        <section className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <header className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">Light Background with Right Icon</h3>
          </header>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              {colors.map((color) => (
                <Badge key={`light-right-${color}`} variant="light" color={color} endIcon={<PlusIcon />}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Badge>
              ))}
            </div>
          </div>
        </section>
        <section className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <header className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">Solid Background with Right Icon</h3>
          </header>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              {colors.map((color) => (
                <Badge key={`solid-right-${color}`} variant="solid" color={color} endIcon={<PlusIcon />}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

