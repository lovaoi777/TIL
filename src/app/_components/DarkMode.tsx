"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

type IDarkMode = {};

export default function DarkMode({}: IDarkMode) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    console.log(theme);
    setMounted(true);
  });
  // if (mounted) {
  //   return null;
  // }
  const onClick = (mod: string) => () => {
    setTheme(mod);
  };
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8">
      {currentTheme === "dark" ? (
        <BsFillMoonFill onClick={onClick("light")} />
      ) : (
        <BsFillSunFill onClick={onClick("dark")} />
      )}
    </div>
  );
}
