"use client";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/blocks/dashboard/ui-elements/buttons/Button";
import { EyeCloseIcon, EyeIcon } from "@/icons";
import { IconBrandGoogle, IconBrandNextjs } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";

type SignInFormProps = {
  onSwitchToRegister?: () => void;
};

export default function SignInForm({ onSwitchToRegister }: SignInFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-white/10 dark:text-white">
          <IconBrandNextjs className="h-7 w-7" stroke={1.25} />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Log in to your Account
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Welcome back, please enter your details.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-lg bg-gray-100 px-7 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10"
        >
          <IconBrandGoogle className="h-5 w-5 text-[#4285F4]" stroke={1.5} />
          Login with Google
        </button>
      </div>
      <div className="relative py-1 sm:py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
            Or
          </span>
        </div>
      </div>
      <form>
        <div className="space-y-6">
          <div>
            <Label>
              Email <span className="text-error-500">*</span>
            </Label>
            <Input placeholder="info@gmail.com" type="email" />
          </div>
          <div>
            <Label>
              Password <span className="text-error-500">*</span>
            </Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
              >
                {showPassword ? (
                  <EyeIcon
                    className="h-5 w-5 text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    stroke={1.75}
                  />
                ) : (
                  <EyeCloseIcon
                    className="h-5 w-5 text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    stroke={1.75}
                  />
                )}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Checkbox checked={isChecked} onChange={setIsChecked} />
              <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                Keep me logged in
              </span>
            </div>
            <Link
              href="/reset-password"
              className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
            >
              Forgot password?
            </Link>
          </div>
          <div>
            <Button className="w-full" size="sm">
              Login
            </Button>
          </div>
        </div>
      </form>
      <div className="mt-5 text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
        >
          Register
        </button>
      </div>
    </div>
  );
}
