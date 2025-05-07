"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaCloudMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null until mounted to prevent rendering incorrect theme
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-btn text-color-btn shadow-sm p-2 rounded-full"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <LuSunMedium size={20} /> : <FaCloudMoon size={20} />}
    </button>
  );
}