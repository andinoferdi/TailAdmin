"use client";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

export default function ThemeTogglerTwo() {
  const { toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="inline-flex size-14 items-center justify-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-600"
    >
      <IconMoonStars className="hidden h-5 w-5 dark:block" stroke={1.6} />
      <IconSun className="h-5 w-5 dark:hidden" stroke={1.6} />
    </button>
  );
}
