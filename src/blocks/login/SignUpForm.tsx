"use client";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import { EyeCloseIcon, EyeIcon } from "@/icons";
import { IconBrandNextjs } from "@tabler/icons-react";
import React, { useState } from "react";

type SignUpFormProps = {
  onSwitchToLogin?: () => void;
};

export default function SignUpForm({ onSwitchToLogin }: SignUpFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-white/10 dark:text-white">
          <IconBrandNextjs className="h-7 w-7" stroke={1.25} />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Create your Account
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Join TailAdmin and start managing your dashboard quickly.
          </p>
        </div>
      </div>

      <form>
        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <Label>
                First Name<span className="text-error-500">*</span>
              </Label>
              <Input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter your first name"
              />
            </div>
            <div className="sm:col-span-1">
              <Label>
                Last Name<span className="text-error-500">*</span>
              </Label>
              <Input
                type="text"
                id="lname"
                name="lname"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div>
            <Label>
              Email<span className="text-error-500">*</span>
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Label>
              Password<span className="text-error-500">*</span>
            </Label>
            <div className="relative">
              <Input
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
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
          <div className="flex items-center gap-3">
            <Checkbox
              className="w-5 h-5"
              checked={isChecked}
              onChange={setIsChecked}
            />
            <p className="inline-block font-normal text-gray-500 dark:text-gray-400">
              By creating an account means you agree to the{" "}
              <span className="text-gray-800 dark:text-white/90">
                Terms and Conditions,
              </span>{" "}
              and our{" "}
              <span className="text-gray-800 dark:text-white">Privacy Policy</span>
            </p>
          </div>
          <div>
            <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
              Register
            </button>
          </div>
        </div>
      </form>
      <div className="mt-5 text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
        >
          Login
        </button>
      </div>
    </div>
  );
}

