import type { Metadata } from "next";
import { Hanken_Grotesk, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

// Corpo: Hanken Grotesk — legível e com mais caráter que Inter.
const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Display: Bricolage Grotesque — geométrica, confiante e distintiva.
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://promosys.com.br";
const TITLE = "Promosys | O CRM definitivo para CORBANs";
const DESCRIPTION =
  "A plataforma completa para gerir sua operação de crédito consignado com tecnologia, dados e inteligência.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Promosys",
  },
  description: DESCRIPTION,
  applicationName: "Promosys",
  keywords: [
    "CRM consignado",
    "correspondente bancário",
    "CORBAN",
    "crédito consignado",
    "IN100",
    "promotora de crédito",
    "Promosys",
  ],
  authors: [{ name: "Promosys" }],
  creator: "Promosys",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Promosys",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/promosys-logo-azul.png",
        width: 1080,
        height: 1080,
        alt: "Promosys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/promosys-logo-azul.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/promosys-logo-azul.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${display.variable} antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
