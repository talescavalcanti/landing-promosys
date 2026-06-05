import React from "react";
import Image from "next/image";

/**
 * Imagem do dashboard Promosys. Preenche o container pai
 * (que deve ser `relative` + `overflow-hidden` + ter altura definida).
 * Usado no preview mobile da seção do MacBook.
 */
export const DashboardMockup = () => {
  return (
    <>
      <Image 
        src="/dashboard-promosys-lightmode.png" 
        alt="Promosys Dashboard Light Mode" 
        fill
        className="object-cover object-top dark:hidden"
        quality={100}
        priority
      />
      <Image 
        src="/dashborad-promosys-darkmode.png" 
        alt="Promosys Dashboard Dark Mode" 
        fill
        className="hidden dark:block object-cover object-top"
        quality={100}
        priority
      />
    </>
  );
};
