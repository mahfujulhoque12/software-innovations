"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange // Prevents jarring transitions during theme changes
    >
      {children}
    </NextThemesProvider>
  );
}
