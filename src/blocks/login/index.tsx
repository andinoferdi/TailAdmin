
import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo";
import AuthFormTabs from "./AuthFormTabs";

export default function LoginPage() {
  return (
    <div className="relative z-0 flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeTogglerTwo />
      </div>
      <div className="flex flex-1 items-center justify-center px-6 py-16 sm:px-12">
        <div className="w-full max-w-md">
          <AuthFormTabs />
        </div>
      </div>
    </div>
  );
}

