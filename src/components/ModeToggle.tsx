"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Rien n’est affiché côté serveur → pas de mismatch HTML
    return null;
  }

  return (
    <div className="cursor-pointer ml-5 items-center justify-center flex flex-row">
      {theme === "dark" ? (
        <Sun className="h-4" onClick={() => setTheme("light")} />
      ) : (
        <Moon className="h-4" onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
