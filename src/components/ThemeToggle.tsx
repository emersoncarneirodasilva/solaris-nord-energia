"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Evita erro de hidratação
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-primary cursor-pointer"
      aria-label="Alternar tema"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-tertiary" />
      ) : (
        <Moon size={20} className="text-footer" />
      )}
    </button>
  );
}
