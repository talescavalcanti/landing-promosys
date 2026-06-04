"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface LogoProps {
  className?: string;
  title?: string;
}

export function Logo({ className = "", title }: LogoProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (resolvedTheme || theme) : "dark";
  const logoSrc = currentTheme === "light" ? "/logo-promosys-azul.png" : "/logo-promosys-branca-leve.png";

  return (
    <img
      src={logoSrc}
      alt={title || "Promosys Logo"}
      className={`${className} object-contain`}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    />
  );
};
