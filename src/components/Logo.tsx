"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface LogoProps {
  className?: string;
  title?: string;
}

export function Logo({ className = "", title }: LogoProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (resolvedTheme || theme) : "dark";
  const logoSrc = currentTheme === "light" ? "/logo-promosys-azul.png" : "/logo-promosys-branca-leve.png";

  return (
    <Image
      src={logoSrc}
      alt={title || "Promosys"}
      width={160}
      height={81}
      priority
      sizes="160px"
      className={`${className} w-auto object-contain`}
      aria-hidden={title ? undefined : true}
    />
  );
}
